
import UserModel from'../models/user';
import HandlePassword from "../utils/handlepassword";


class Userservices{
    
    
    static async registerUser(req){
        req.body.password = HandlePassword.encryptPassword(req.body.password)
            const User = await UserModel.create(req.body);
            return User;
        } 
           


    static async loginUser(req){
        const User= await UserModel.findOne({email:req.body.email});
  return User;
    }   
 
        //  static async logoutUser(req){
        //     const User= await UserModel.findOne(req.body)
        //     return User;
        // }
      
 
//  static async addUser(req){
//     req.body.password=HandlePassword.encryptPassword(req.body.password)
//     const User = await UserModel.create(req.body);
//     return User;
// }


static async getAllUser(req){
    const User= await UserModel.find(req.body);
    return User;
}

        // Get OneTour
        static async getOneUser(req){
            const User= await UserModel.findById({_id:req.params.id},req.body);
            return User;
                }
    }
 export default Userservices;

