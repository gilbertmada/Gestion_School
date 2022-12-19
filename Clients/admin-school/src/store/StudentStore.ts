import axios from 'axios';
import { action, makeObservable, observable, runInAction } from 'mobx';
import config from '../config';
import rootStore from './AppStore';
import { parseError } from '../services/utils';
import { IFraisDivers, IStudent } from '../common/interface/StudentInterface';
// import AppStore from './AppStore';



export interface StudentStoreInterface {
    allStudent: IStudent[];
    isLoading: boolean;
    Student: IStudent | null;
    droit:IFraisDivers[];
    setDroit:(data: IFraisDivers ) => void;
    setStudent: (student: IStudent | null) => void;
    getAllStudent: () => Promise<any>;
    getFilteredStudent: (filter: Record<string, unknown>) => Promise<any>;
    updateFilters: (name: "currentlyWorking", status: boolean) => void;
    filters: { currentlyWorking: boolean };
    createStudent: (data: IStudent) => void;
    updateStudent: (data: IStudent) => void;
    resetStudent: () => void;
    deleteTotalStudent: (data: IStudent) => void;
    selectedStudent: IStudent | null;
    setSelectedStudent: (data: IStudent | null) => void;

}


class StudentStore implements StudentStoreInterface {

    @observable Student: IStudent | null = null;

    @observable selectedStudent: IStudent | null = null;

    @observable allStudent: IStudent[] = [];

    @observable droit: IFraisDivers[] = [];

    @observable isLoading = false;

    @observable openPDF = false;

    @action resetStudent = () => {
        this.filters = {
            // immo: false,
            available: true,
            currentlyWorking: true,
            isBlocked: false,
        };
    }

    @observable filters = {
        // immo: false,
        available: true,
        currentlyWorking: true,
        isBlocked: false,
    };

    constructor() {
        makeObservable(this);
    }

    @action setSelectedStudent = (student: IStudent | null) => {
        this.selectedStudent = student;
    };

    @action setStudent = (s: IStudent | null) => {
        this.Student = s;
    };

    @action setDroit = (d: IFraisDivers ) => {
        this.droit = [...this.droit, d];
    };


    @action updateFilters = (name: "currentlyWorking", status: boolean) => {

        if (status === true) {
            this.filters = { ...this.filters, [name]: status };
            this.getFilteredStudent({ filter: "" });

        }

    };

    @action getAllStudent = async () => {
        this.isLoading = true;
        try {
            const students = await axios.get(`${config.servers.apiUrl}student/`);
            
            this.allStudent = students.data;
            this.isLoading = false;
        } catch (error) {

            parseError(
                error,
                "Une erreur s'est produite lors de la requête de vos infos. Veuillez réessayer"
            );
            this.isLoading = false;
        } finally {
            this.isLoading = false;
        }
    };

    @action createStudent = async (data: IStudent) => {
        try {

            const add = await axios.post(`${config.servers.apiUrl}student`, data);

            if (add.data.matriculNumber  === 'MatriculNumber already exists') {
                rootStore.updateSnackBar(true, 'Numéro matricule existe déjà');

            } else {
                rootStore.succesSnackBar(true, 'Elève ajouter avec succès');

            }
            return add;

        } catch (err) {
            if (err.message.includes('code 400')) {
                rootStore.updateSnackBar(true, 'Le type ');
                return;
            }

            rootStore.updateSnackBar(true, "Une erreur s'est produite. Veuillez réessayer plus tard!");
        }
    };

    @action updateStudent = async (studentUpdate: IStudent) => {
        try {
            const student = await axios.patch(`${config.servers.apiUrl}student/edit`, studentUpdate);

            rootStore.updateSnackBar(true, 'Modifié', 'success');

            //   if (this.user?._id === userUpdate._id) {
            //     this.getUserInfo();
            //   }

            return student;
        } catch (err) {
            parseError(err, {
                404: "L'utilisateur demandé est introuvable",
                403: 'Vous ne pouvez pas effectuer cette opération ou le mot de passe entré est incorrect',
            });
        }
    };

    @action getFilteredStudent = async (filter: Record<string, unknown>) => {

        try {
            this.isLoading = true;
            const students = await axios.post(`${config.servers.apiUrl}student/filter`,
                {
                    filter,

                }
            );

            runInAction(() => {
                this.allStudent = students.data;
                this.isLoading = false;
            });
            // this.allUsers = users.data;
            // this.isLoading = false;

            return students.data;
        } catch (error) {
            parseError(
                error,
                "Une erreur s'est produite lors de la requête de vos infos. Veuillez réessayer"
            );
        } finally {
            this.isLoading = false;
        }
    };



    @action deleteTotalStudent = async (studentDelete: IStudent) => {
        try {

            const student = await axios.patch(`${config.servers.apiUrl}student/deleteTotal`, studentDelete);

            rootStore.updateSnackBar(true, 'Supprimé', 'success');
            return student;
        } catch (err) {
            parseError(err, {
                404: "L'utilisateur demandé est introuvable",
                403: 'Vous ne pouvez pas effectuer cette opération ou le mot de passe entré est incorrect',
            });
        }
    };

}
export default new StudentStore();