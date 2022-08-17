import Studentservices from "../services/studentservices";
import handlePassword from "../utils/handlepassword";
import TokenAuth from "../utils/Token";

class Studentcontroller{

    //register student

static async registerStudent(req,res){

    const newStudent = await Studentservices.registerStudent(req)

    if (!newStudent){
        return res.status (404).json ({
            message:"failed to register",
        });
    }

    return res.status(201).json ({
        message:"success",
        data:newStudent,
    });
}
// end of register student//


// student login//
static async loginStudentController(req,res){
    const student = await Studentservices.loginStudent(req);
    if(!student){
      return res.status(400).json({
        message:"student is not exist"
      })
    }
    if(handlePassword.checkPassword(student.password,req.body.password)){
       const token=TokenAuth.generateToken({
         phone:student.phone,
        email:student.email,
        picture:student.picture,
        names:student.names,
       role:student.role,
     })
      return res.status(200).json({
        message:"loggin successfully",token
     })
    }
    else{
  return res.status(401).json({
      message:"failed to login password is wrong",
    
    });
   }
  }
// end of login//


static async logoutStudentController(req,res){
    const student = await Studentservices.logoutStudent(req);

    // req.student.deletetoken(req.token,(err,student)=>{
        if(!student) {
        
        return res.status(400).json({message:"failed to logout"});

}
else{
            res.status(200).json({message:"logout is successful",token});
        }
    
        
    
}

}

export default Studentcontroller;
