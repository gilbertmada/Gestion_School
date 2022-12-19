import { Router } from "express";
import ExportPDfStudentController from "../controllers/ExportPdfStudentController";

const router = Router();

router.post("/list", ExportPDfStudentController.exportPdfList);


export default router;
