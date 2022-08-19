import Usercontroller from '../controllers/usercontroller';
import UserModel from'../models/user';
import handlePassword from "../utils/handlepassword";


class Userservices{
    
    
    static async registerUser(req){
        req.body.password=handlePassword.encryptPassword(req.body.password)
            const User = await UserModel.create(req.body);
            return User;
        } 
           


    static async loginUser(req){
        const User= await UserModel.findOne({email:req.body.email});
  return User;
    }   
 
         static async logoutUser(req){
            const User= await UserModel.findOne(req.body)
            return User;
        }
      
 
 static async addUser(req){
    req.body.password=handlePassword.encryptPassword(req.body.password)
    const User = await UserModel.create(req.body);
    return User;
}


static async getAllUser(req){
    const User= await UserModel.find(req.body);
    return User;
}
    }

        export default Userservices;

