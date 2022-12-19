import { Request, Response } from "express";
import { async } from "rxjs";
import { Student, IStudent } from "../entity/Student";
import * as bcrypt from "bcryptjs";
import { getUserIdFromToken } from "../utils/user";

export default class studentControleur {
  //new student
  static createStudent = async (req: Request, res: Response) => {
    const token = <string>res.getHeader("token");
    Student.findOne({
      $and: [{ matriculNumber: req.body.matriculNumber },{ class: req.body.class }],
    }).then(async (student: any) => {
      if (student) {
        return res.status(200).json({
          matriculNumber: student.matriculNumber == req.body.matriculNumber &&  student.class == req.body.class ? "MatriculNumber already exists" : "",
        });
      } else { 
        const newStudent = new Student({
          schoolName: req.body.schoolName,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          class: req.body.class,
          height: req.body.height,
          matriculNumber: req.body.matriculNumber,
          address: req.body.address,
          photo: req.body.photo,
          inscriptionDroit: req.body.inscriptionDroit,
          createdBy: getUserIdFromToken(token),
          deleted: false,
        });
       

        try {
          const student = await newStudent.save();
          res.send(student);

        } catch (err) {
          res.status(500).send("Failed to save student");
        }
      }
    });
  };

  static updateStudent = async (req: Request, res: Response) => {
    const { _id, ...info } = req.body;

    const token = <string>res.getHeader("token");
    if (req.body.matriculNumber !== info.matriculNumber) {
      res.status(400).send({
        status: 'ERROR',
        code: 'MATRICULE_ERROR',
        message: "You should add a matricule exact"
      });
      return;
    }

    try {
      const student = await Student.findOne({ _id });
      if (!student) {
        res.status(404).send({
          status: 'ERROR',
          code: 'STUDENT_NOT_FOUND',
          message: "Unable to find student to update"
        });
        return;
      }
      // if (info.password && !bcrypt.compareSync(info.password, user.password)) {
      //   res.status(403).send({
      //     status: 'ERROR',
      //     code: 'PASSWORD',
      //     message: "Your password is not correct"
      //   });
      //   return;
      // }

      const updatedInfo: any = {
        schoolName: info.schoolName,
        lastName: info.lastName,
        firstName: info.firstName,
        photo: info.photo,
        class: info.class,
        height: info.height,
        address: info.address,
        inscriptionDroit: info.inscriptionDroit,
        updatedBy: getUserIdFromToken(token),
        updatedAt: Date.now(),
      };

      const resp = await Student.updateOne({ _id }, updatedInfo);
      res.status(200).send(resp);
    } catch (err) {
      res.status(500).send({
        status: 'ERROR',
        code: 'INTERNAL_SERVER_ERROR',
        message: "Unable to update user"
      });
    }
  };

  static getListStudent = async (req: Request, res: Response) => {

    try {
      const students = await Student.find({ deleted: false });

      let returnedUsers = [];

      for (let i = 0; i < students.length; i++) {
        returnedUsers.push(students[i].transform());
      }

      return res.status(200).send(returnedUsers);

    } catch (err) {
      res.status(500).send("Unable to update student");
    }
  }

  // static deleteStudent = async (req: Request, res: Response) => {

  //   const token = <string>res.getHeader("token");
  //   const studentId = getUserIdFromToken(token);

  //   if (!studentId) {
  //     return res.status(500).send("Unable to delete student");
  //   }
  //   try {
  //     const student = await Student.updateOne(
  //       {
  //         _id: req.body.id,
  //       },
  //       {
  //         $set: { deleted: true, deletedBy: studentId, deletedAt: new Date() },
  //       }
  //     );
  //     return res.status(200).send("Student deleted successfully");
  //   } catch (err) {
  //     res.status(500).send("Unable to delete student");
  //   }

  // }


  static getFilteredStudent = async (req: Request, res: Response) => {

    const { filter } = req.body;
    try {
      const student: IStudent[] | [] = await Student
        .find({
          $and: [
            {
              $or: [
                { firstName: { $regex: filter.filter, $options: "i" } },
                { lastName: { $regex: filter.filter, $options: "i" } },
                { height: { $regex: filter.filter, $options: "i" } },
                { class: { $regex: filter.filter, $options: "i" } },
                { matriculNumber: { $regex: filter.filter, $options: "i" } },
              ],
            },
            // { deleted: false, isArchive: false },
          ],
        });

      let returnedUsers = [];

      for (let i = 0; i < student.length; i++) {
        returnedUsers.push(student[i].transform());
      }

      return res.status(200).send(returnedUsers);
    } catch (err) {
      return res.send([]);
    }
  };

  static deleteTotalStudent = async (req: Request, res: Response) => {

    const token = <string>res.getHeader("token");
    const studentId = getUserIdFromToken(token);
  
    if (!studentId) {
      return res.status(500).send("Unable to delete student");
    }
    try {
      await Student.deleteOne(
        {
          _id: req.body.id,
        },
      );

      return res.status(200).send("Student deleted successfully");
    } catch (err) {
      res.status(500).send("Unable to delete student");
    }

  }

}