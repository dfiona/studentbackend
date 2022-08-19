import Attendanceservices from "../services/attendanceservices";

class Attendancecontroller{

static async updateAttendance(req,res){

    const newDate = await Attendanceservices.updateAttendance(req)

    if (!newDate){
        return res.status (401).json ({
            message:"failed to update",
        });
    }

    return res.status(200).json ({
        message:"success",
        data:newDate,
    });
}
}
 export default Attendancecontroller;