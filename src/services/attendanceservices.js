import AttendanceModel from "../models/attendance";


class Attendanceservices{

    static async updateAttendance (req){
        
        const Attendance= await AttendanceModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
        return Attendance;
    }



}
export default Attendanceservices