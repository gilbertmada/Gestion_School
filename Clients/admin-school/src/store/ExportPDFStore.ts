import axios from 'axios';
import config from '../config';
import downloadFile from '../services/downloadServices';
import { rootStore } from '.';

export interface ExportPdfInterface {
  exportToPdfListStudent: (data: any) => void;

}

class ExportToPDFStore implements ExportPdfInterface {

  exportToPdfListStudent = async (data: any) => {
    console.log("data....store",data);
    try {
      const resp = await axios.post(`${config.servers.apiUrl}exportToPdf/list`, data);
      console.log("resp...",resp);
      if (resp) {
        downloadFile(
          `${config.servers.apiUrl}uploadFile/file/download/PDFFiles/${resp.data.filename}`
        );
        console.log("resp",resp);
        
      }
    } catch (error: any) {
      if (error.message.includes('code 400')) {
        return;
      }
      rootStore.updateSnackBar(true, "Une erreur s'est produite. Veuillez réessayer plus tard!");
    }
  };
}

export default new ExportToPDFStore()