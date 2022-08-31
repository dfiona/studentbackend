import Usercontroller from "../controllers/attendancecontroller";
import ModelAttendance from "../models/attendance";

class Attendanceservices {
  static async AttendanceUser(req) {
    const Attendance = await ModelAttendance.create(req.body);
    return Attendance;
  }
  // UPDATE ATTENDANCE
  
   
   static async updateAttendance(req){
    const Attendance = await ModelAttendance.findByIdAndUpdate( req.params.id,req.body,{new:true});
    return Attendance;
}



// get all attendance
  static async getAllAttendance(req){
    const Attendance= await ModelAttendance.find(req.body);
    return Attendance;
}

//static deleteUser
static async deleteAttendance(req){
    const Attendance = ModelAttendance.deleteOne({_id: req.params.id});
    return Attendance;
  }
               // updateOnestudent
               static async updateOneAttendance(){
                const Attendance= await ModelAttendance.findById(req.params.id);
                return Attendance;
                    }

}
export default Attendanceservices;
