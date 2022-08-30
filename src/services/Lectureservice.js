import LectureController from "../controllers/Lecturecontroller"

import ModelLecture from "../models/lecture";
class lectureservice {
//registure
    static async LectureCreate(req) {
        const Lecture = await ModelLecture.create(req.body);
        return Lecture;
      }
// get all

static async getAllLecture(req){
    const lecture= await ModelLecture.find();
    return lecture;
}
// get one by id 


static async getOneLecture(req){
    const lecture= await ModelLecture.findById({_id:req.params.id},req.body);
    return lecture;
}
//update 
static async updateLecture(req){
    await ModelLecture. findByIdAndUpdate({_id:req.params.id}, req,body);
    const lecture = ModelLecture.findOne({_id:req.params.id});
    return lecture
}

}

export default lectureservice;