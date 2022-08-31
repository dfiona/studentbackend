import lectureservice from "../services/Lectureservice";
import Response from "../utils/response";

 class LectureController {

 // Create Lecture
 static async LectureCreate(req, res) {
    const newLecture = await lectureservice.LectureCreate(req);

    if (! newLecture) {
      return res
        .status(404)
        .json({ status: 404, message: "failed to create Lecture " 
    });
    }

    return res
      .status(201)
      .json({ status: 201, message: "Success", data: newLecture });
  }
// get all lecture


 static getAllLecture = async (req, res) => {
 
    const lecture = await lectureservice.getAllLecture(req);
  
    if (!lecture){
        return res.status (400).json ({message:"failed to getAlllecture",
        });
    }
  
    return res.status(201).json ({
        message:"success",
        data:lecture,
    });
  }

// get ONE lecture


static getOneLecture = async (req, res) => {
 
    const lecture = await lectureservice.getOneLecture(req);
  
    if (!lecture){
        return res.status (400).json ({message:"failed to getOnecture",
        });
    }
  
    return res.status(201).json ({
        message:"success",
        data:lecture,
    });
  }





  //getOneLecture
//   static async getOneLecture(req, res) {
//     const newLecture = await lectureservice.getOneById(req);
//     if (!newLecture) {
//       return Response.errorMessage(res,"Not Lecture Found",400);
//     }
//     return Response.sucessMessage(res,"Sucessfully Retrived",newLecture,200);
//   }

 }
 export default LectureController;