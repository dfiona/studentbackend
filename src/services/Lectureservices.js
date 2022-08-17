import Lecturecontroller from "../controllers/Lecturecontroller";
import StudentModel from "../models/student";
import LectureModel from "../models/Lecture";
import handlePassword from"../utils/handlePassword";

class Lectureservices{

    // add student //
    static async addStudent(req){
    
        const Student = await StudentModel.create(req.body);
    
        return Student;
    }
    // add student // 

    // get all student
static async getAllstudent(req){

    const Student= await StudentModel.find(req.body);

    return Student;
}
// get all student

static async updateAttendance (req){
        
    const student= await StudentModel.findByIdAndUpdate(req.params.id,req.body,{new:true});

    return student;
}
static async registerLecture(req){
    req.body.password=handlePassword.encryptPassword(req.body.password)

        const lecture = await LectureModel.create(req.body);
    
        return lecture;
}

static async loginLecture(req){
    const lecture = await LectureModel.findOne({email:req.body.email});
return lecture;
}   



}

export default Lectureservices;