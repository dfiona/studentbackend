
import Lectureservices from "../services/Lectureservices";
import handlepassword from "../utils/handlepassword";
import TokenAuth from "../utils/token";



class Lecturecontroller{

    // add student controller
static async addStudent(req,res){

    const newStudent = await Lectureservices.addStudent(req)

    if (!newStudent){
        return res.status (404).json ({
            message:"failed to add",
        });
    }

    return res.status(201).json ({
        message:"success",
        data:newStudent,
    });
}
//end of add student


static async getAllstudent(req,res){
    const newStudent = await Lectureservices.getAllstudent(req)

    if (!newStudent){
        return res.status (400).json ({message:"failed to getAllstudent",
        });
    }

    return res.status(201).json ({
        message:"success",
        data:newStudent,
    });
}

static async updateAttendance(req,res){

    const newDate = await Lectureservices.updateAttendance(req)

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
//  login of lecture//
static async loginLectureController(req,res){
    const lecture = await Lectureservices.loginLecture(req);
    if(!lecture){
       return res.status(400).json({messaage:"lecture is not exist"})
    }
if (handlepassword.checkPassword(lecture.password,req.body.password)){
// token data
const token = TokenAuth.generateToken({
   phone:lecture.phone,
   email:lecture.email,
   picture:lecture.picture,
   names:lecture.names,
   role:lecture.role,

})
return res.status(200).json({messaage:"logged in successfully",token});

}
else{
return res 
.status(400)
.json({messaage:"failed to login,password is wrong!"});
}
}


  static async registerLecture(req,res){

    const newLecture= await Lectureservices.registerLecture(req)

    if (!newLecture){
        return res.status (404).json ({
            message:"failed to register",
        });
    }

    return res.status(201).json ({
        message:"success",
        data:newLecture,
    });
}
}

export default Lecturecontroller;