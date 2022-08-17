import Studentcontroller from"../controllers/studentcontroller";
import StudentModel from'../models/student';
import handlePassword from "../utils/handlepassword";


class Studentservices{
    
    // student services registration//
    static async registerStudent(req){
        req.body.password=handlePassword.encryptPassword(req.body.password)
    
            const Student = await StudentModel.create(req.body);
        
            return Student;
        }
           // student services registration//
           

// student services login//
       
    static async loginStudent(req){
        const student = await StudentModel.findOne({email:req.body.email});
  return student;
    }   
 //student services registration//


         static async logoutStudent(req){
            const student= await StudentModel.findOne(req.body)
            return student;
        }
    }
        export default Studentservices;
