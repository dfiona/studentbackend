import Permissioncontroller from "../controllers/permissioncontroller";
import modelPermission from "../models/permission";

class Permissionservices {
  static async PermissionCreate(req) {
    const Permission= await modelPermission.create(req.body);
    return Permission;
  }
//   // UPDATE Permission
  
   
//    static async updateAllpermission(req){
//     const Permission = await modelPermission.findByIdAndUpdate( req.params.id,req.body,{new:true});
//     return Permission;
// }



// get all permission
  static async getAllPermission(req){
    const Permission = await modelPermission.find(req.body);
    return Permission;
}

//delete permission
static async deletepermission(req){
    const Permission = modelPermission.deleteOne({_id: req.params.id});
    return Permission;
  }
             
}
export default Permissionservices;
