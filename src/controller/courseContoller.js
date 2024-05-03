import db from "../../config/db.js";

export const getCourseList = async (req,res) =>{
  console.log(req.user);
  const no = req.user ? req.user.user_no : null;
  
  // request 데이터 x

  // 비지니스 로직(service) -> reponsitory 
  // 코스 리스트를 가져와서 전달해준다. (DB에서,저장소에서, 파일에서, JSON파일)
  
  const QUERY = 'SELECT c.*, uc.user_courses_no FROM course c LEFT JOIN users_course uc ON c.course_no = uc.course_no AND uc.user_no = ?';

  const result = await db.execute(QUERY,[no]).then((result => result[0]));
  console.log(result)
  res.status(200).json({status:"success",message:"코스 데이트 전송 완료",data:result,})
}