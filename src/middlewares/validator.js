
import {check,validationResult} from "express-validator";
class validator{
 static validatorInput = (req,res,next) => {
 const errors = validationResult(req);
 if(!errors.isEmpty()){
     const errorMessage = errors.errors.map((err) => err.msg);
     return res.status(400).json({message: errorMessage });
 }
 return next();
}
 static newAccountRules(){
return[
    check("email","email is invalid").trim().isEmail(),
    check("names","please your names have special character").isAlpha(),
    // check("Lastname","please your Lastname have special character").isAlpha(),
   
    check("phone","your phone number invalid").isMobilePhone(),
    
    check("password","password is not strong").trim().isStrongPassword()
];
 
 }
// static checkId(){
//     return[check("id","id should be mongoId").isMongoId()
// ]
// }
}
export default validator;