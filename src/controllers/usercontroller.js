import Userservices from "../services/userservices";
import handlePassword from "../utils/handlepassword";
import TokenAuth from "../utils/Token";

class Usercontroller{

    //register student

static async registerUser(req,res){

    const newUser = await Userservices.registerUser(req)

    if (!newUser){
        return res.status (404).json ({
            message:"failed to register",
        });
    }

    return res.status(201).json ({
        message:"success",
        data:newUser,
    });
}
// end of register student//


// student login//
static async loginUserController(req,res){
    const User = await Userservices.loginUser(req);
    if(!User){
      return res.status(400).json({
        message:"student is not exist"
      })
    }
    if(handlePassword.checkPassword(User.password,req.body.password)){
       const token=TokenAuth.generateToken({
         phone:User.phone,
        email:User.email,
        picture:User.picture,
        names:User.names,
       role:User.role,
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


// logout user
static async logoutUserController(req,res){
    const student = await Userservices.logoutUser(req);

    // req.student.deletetoken(req.token,(err,student)=>{
        if(!User) {
        
        return res.status(400).json({message:"failed to logout"});

}
else{
            res.status(200).json({message:"logout is successful",token});
        }
    
        
    
}
// Add users
static async addUser(req,res){

  const newUser = await Userservices.addUser(req)

  if (!newUser){
      return res.status (404).json ({
          message:"failed to add",
      });
  }

  return res.status(201).json ({
      message:"success",
      data:newUser,
  });
}
  //ge all user


  static getAllUser = async (req, res) => {
 
  const newUser = await Userservices.getAllUser(req);

  if (!newUser){
      return res.status (400).json ({message:"failed to getAllstudent",
      });
  }

  return res.status(201).json ({
      message:"success",
      data:newUser,
  });
}



    //ge ONE  USER


    static async getOneUser(req, res) {
 
      const newUser = await Userservices.getOneUser(req);
    
      if (!newUser){
          return res.status (400).json ({message:"failed to getOnestudent",
          });
      }
    
      return res.status(201).json ({
          message:"success",
          data:newUser,
      });
    }
  

}
 

export default Usercontroller;
