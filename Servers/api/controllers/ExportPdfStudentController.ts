import { Request, Response, NextFunction } from "express";
import JSPDF from 'jspdf';
import moment from 'moment';
import font from '../utils/font.json'
import fs from 'fs';
import { Student } from "~~/entity/Student";
import { page } from "pdfkit";
import Head from "./PDF/ListStudent/Head";
import { ListToClass } from "./PDF/ListStudent/ListToClass";
import {HeaderTable} from "./PDF/ListStudent/header"

export default class ExportPdfStudentController {

    static exportPdfList = async (req: Request, res: Response) => {

        const path = "./fichier/PDFFiles/";

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }

        const jsPdfPrint = new JSPDF('p', 'mm', 'a4', true);
        jsPdfPrint.addFileToVFS('Roboto-Bold.ttf', font.font);
        jsPdfPrint.addFont('Roboto-Bold.ttf', 'custom', 'normal');
        jsPdfPrint.setFont('custom', 'normal');

        try {
            
            const data = req.body;


            Head(
                {
                    schoolName: `${data[0].schoolName}`,
                    class: `${data[0].class}`,
                    height: `${data[0].height}`,
                },
                jsPdfPrint
            );
            HeaderTable(50, jsPdfPrint);

            ListToClass(
                [
                    ...data.sort((a: any, b: any) => {
                        return a.matriculNumber - b.matriculNumber
                    })

                ],
                jsPdfPrint
            )
            
            const filename = `LISTES DES ELEVES.pdf`;
            const pathPdf = `${path}${filename}`;
            fs.writeFileSync(pathPdf, jsPdfPrint.output())
            jsPdfPrint.save(pathPdf);

            return res.status(200).send({
                status: "success",
                message: "file successfully downloaded",
                path: pathPdf,
                filename: filename,
            });
        } catch (error) {
            console.log('this is an error', error);

            res.status(500).send({
                status: "error",
                message: "Something went wrong" + error,

            });
        }
    }
}