
import Permissionservices from "../services/permissionservices";




class Permissioncontroller{

    
static async getAllPermission(req,res){
    const newPermission = await Permissionservices.getAllPermission(req)
    if (!newPermission){
        return res.status (400).json ({message:"failed to getAllpermission",
        });
    }

    return res.status(201).json ({
        message:"success",
        data:newPermission,
    });
}

}

export default Permissioncontroller;