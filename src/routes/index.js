import  Router  from "express";
import Usercontroller from "../controllers/usercontroller";
import Attendancecontroller from "../controllers/attendancecontroller";
import Permissioncontroller from "../controllers/permissioncontroller";
import LectureController from "../controllers/Lecturecontroller";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/Datachecker";
import VerifyToken from "../middlewares/verifyToken";
import VerifyAccess from "../middlewares/verifyAccess";


const route = Router();


route.post(
    "/user",Validator.newAccountRules(),
Validator.validatorInput,
DataChecker.validateEmailDuplication,Usercontroller.registerUser);


route.post("/user/create",Usercontroller.registerUser)
route.post("/user/login",Usercontroller.loginUserController);
 route.post("/user/logout",Usercontroller.logoutUserController);
route.get("/user",Usercontroller.getAllUser);
route.get("/user/:id",Usercontroller.getOneUser)


route.post("/create",Attendancecontroller.AttendanceUser);
route.get("/getall/attendance",Attendancecontroller.getAllAttendance);
route.patch("/attendance/:id",Attendancecontroller.updateAttendance);
route.delete("/attendance/:id",Attendancecontroller.deleteAttendance);
route.patch("/attendance/:id",Attendancecontroller.updateOneAttendance);
// Lecture
route.post("/create",VerifyToken,VerifyAccess("admin"),LectureController.LectureCreate);
route.get("/getOne/:id",LectureController.getOneLecture);

// permission 
route.post("/create",Permissioncontroller.getAllPermission );
route.get("/getall/permission",Permissioncontroller.getAllPermission);
// route.patch("/permission/:id",Permissioncontroller.updateAllpermission);
route.delete("/permission/:id",Permissioncontroller. deletePermission);


export default route;



