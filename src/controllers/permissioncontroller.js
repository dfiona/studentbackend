import Permissionservices from "../services/permissionservices";
import Response from "../utils/response";

class Permissioncontroller{



  //  create Permission
  static async permissionCreate(req, res) {
    const newPermission = await Permissionservices.permissionCreate(req);

    if (!newPermission) {
      return res
        .status(404)
        .json({ status: 404, message: "failed to register Attendance" 
    });
    }

    return res
      .status(201)
      .json({ status: 201, message: "Success", data: newPermission });
  }
   //get all permission


   static getAllPermission = async (req, res) => {
   const newPermission = await Permissionservices.getAllPermission(req);
  
    if (!newPermission){
        return res.status (400).json ({message:"failed to getAllPermission",
        });
    }
  
    return res.status(201).json ({
        message:"success",
        data:newPermission,
    });
  }
//   //   update all Permission
// static updateAllpermission = async (req,res)=>{
//     const newPermission = await Permissionservices.updateAllpermission(req);
//     if (!newPermission){
//         return res.status (400).json ({message:"failed to updated permission",
//         });
//     }
  
//     return res.status(201).json ({
//         message:"success",
//         data:newPermission,
//     });
//   }


 


   //delete permission
  static  deletePermission= async(req,res)=> {
    const newPermission = await Permissionservices. deletepermission(req);
    if (!newPermission) {
      return res.status(400).json({ message: "failed to deletePermission" });
    }
    return res.status(201).json({ message: "success", data: newPermission });
  }
      

}
 export default Permissioncontroller;