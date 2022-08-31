
import UserInfo from "../models/user";
class Datachecker{
    static validateEmailDuplication = async (req,res,next) =>{
        const user = await UserInfo.findOne({email:req.body.email});
        // console.log(email)
        if(!user){
            return next();
        }
        return res.status(404).json({
            status:404,
            message:"Email already exist!"})
    }
  
}
export default Datachecker;
