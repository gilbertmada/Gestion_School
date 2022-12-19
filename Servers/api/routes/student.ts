import { Router } from "express";
import { checkJwt} from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import { admins, allUsers } from "../utils";
import studentControleur from "../controllers/StudentController";

const router = Router();
// get list
 router.get("/",[checkJwt, checkRole(allUsers)], studentControleur.getListStudent);
 
//Create new Student
router.post("/", [checkJwt, checkRole(allUsers)], studentControleur.createStudent);

// router.get("/get", studentControleur.getData);

// router.post("/save", studentControleur.save);

router.patch("/edit",[checkJwt, checkRole(allUsers)], studentControleur.updateStudent);

//delete student in Front
// router.patch("/delete",[checkJwt, checkRole(allUsers)], studentControleur.deleteStudent);

//delete student in Front and back
router.patch("/deleteTotal", [checkJwt, checkRole(allUsers)],studentControleur.deleteTotalStudent);


// Get filtered student
router.post("/filter",[checkJwt, checkRole(allUsers)],studentControleur.getFilteredStudent);

export default router;
