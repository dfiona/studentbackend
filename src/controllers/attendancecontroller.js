import Attendanceservices from "../services/attendanceservices";
import Response from "../utils/response";

class Attendancecontroller{



  // Register or create user AttendanceUser
  static async AttendanceUser(req, res) {
    const newUser = await Attendanceservices.AttendanceUser(req);

    if (!newUser) {
      return res
        .status(404)
        .json({ status: 404, message: "failed to register Attendance" 
    });
    }

    return res
      .status(201)
      .json({ status: 201, message: "Success", data: newUser });
  }
   //ge allAttendance


   static getAllAttendance = async (req, res) => {
 
    const newUser = await Attendanceservices.getAllAttendance(req);
  
    if (!newUser){
        return res.status (400).json ({message:"failed to getAllattendance",
        });
    }
  
    return res.status(201).json ({
        message:"success",
        data:newUser,
    });
  }
  //   update all students
static updateAttendance = async (req,res)=>{
    const newUser = await Attendanceservices.updateAttendance(req);
    if (!newUser){
        return res.status (400).json ({message:"failed to updated attendance",
        });
    }
  
    return res.status(201).json ({
        message:"success",
        data:newUser,
    });
  }


  //   update one student
  static updateOneAttendance = async (req,res)=>{
    const newUser = await Attendanceservices.updateOneAttendance(req);
    if (!newUser){
        return res.status (400).json ({message:"failed to updated attendance",
        });
    }
  
    return res.status(201).json ({
        message:"success",
        data:newUser,
    });
  }


   //delete Attendance
  static  deleteAttendance= async(req,res)=> {
    const newUser = await Attendanceservices.deleteAttendance(req);
    if (!newUser) {
      return res.status(400).json({ message: "failed to deleteAttendance" });
    }
    return res.status(201).json({ message: "success", data: newUser });
  }
      

}
 export default Attendancecontroller;