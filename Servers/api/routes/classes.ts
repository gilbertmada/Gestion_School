import { Router } from "express";
import { checkJwt} from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { admins, allUsers } from "../utils";
import classesController from "../controllers/ClassesController";

const router = Router();
// get list
//  router.get("/",[checkJwt, checkRole(allUsers)], classesController.getListStudent);
 
// //Create new Student
// router.post("/", [checkJwt, checkRole(allUsers)], classesController.createStudent);

// // router.get("/get", studentControleur.getData);

// // router.post("/save", studentControleur.save);

// router.patch("/edit",[checkJwt, checkRole(allUsers)], classesController.updateStudent);

// //delete student in Front
// // router.patch("/delete",[checkJwt, checkRole(allUsers)], studentControleur.deleteStudent);

// //delete student in Front and back
// router.patch("/deleteTotal", [checkJwt, checkRole(allUsers)],classesController.deleteTotalStudent);


// // Get filtered student
// router.post("/filter",[checkJwt, checkRole(allUsers)],classesController.getFilteredStudent);

export default router;
