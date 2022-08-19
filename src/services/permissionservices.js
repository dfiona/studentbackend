import Lecturecontroller from "../controllers/permissioncontroller";
import PermissionModel from "../models/permission";



class Permissionservices{


static async getAllPermission(req){
    const Permission= await PermissionModel.find(req.body);
    return Permission;
}



}

export default Permissionservices;