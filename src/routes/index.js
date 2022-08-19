import { Router } from "express";
import Permissioncontroller from "../controllers/permissioncontroller";
import Usercontroller from "../controllers/usercontroller";
import Attendancecontroller from "../controllers/attendancecontroller";




const route =Router();
route.post("/user/create",Usercontroller.registerUser)
route.post("/user/login",Usercontroller.loginUserController);
 route.post("/user/logout",Usercontroller.logoutUserController);
route.get("/Permission/getAllpermission",Permissioncontroller.getAllPermission);
route.get("/user/getAllstudent",Usercontroller.getAllUser);
route.patch("/attendance/:id",Attendancecontroller.updateAttendance);



export default route;



