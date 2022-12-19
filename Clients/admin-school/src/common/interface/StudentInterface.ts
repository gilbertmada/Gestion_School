export interface IStudent {
  _id?: string;
  schoolName: string;
  lastName: string;
  firstName: string;
  height: string;
  matriculNumber: string;
  inscriptionDroit: string;
  class: string;
  address: string;
  deleted: boolean;
  date: Date;
  photo: string;
  urlPlus?: string;
  isArchive: boolean;
}

export interface IFraisDivers {
  id: number;
  student: any;
  ecolage: string;
  datePay: Date | string;
  isEcolage: boolean;
}