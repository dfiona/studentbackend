import { Router } from "express";
import Lecturecontroller from "../controllers/Lecturecontroller";
import Studentcontroller from "../controllers/studentcontroller";




const route =Router();
route.post("/student/create",Studentcontroller.registerStudent)
route.post("/student/login",Studentcontroller.loginStudentController);
 route.post("/student/logout",Studentcontroller.logoutStudentController);
route.post("/lecture/create",Lecturecontroller.addStudent);
route.get("/lecture/getAllstudent",Lecturecontroller.getAllstudent);
route.patch("/student/:id",Lecturecontroller.updateAttendance);
route.post("/lecture/login",Lecturecontroller.loginLectureController)
route.post("/lecture/create",Lecturecontroller.registerLecture)


export default route;



