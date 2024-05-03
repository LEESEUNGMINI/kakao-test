import jwt from "jsonwebtoken"
import db from "../../config/db.js";
// 토큰이 있으면 유저 정보 넣어줌, 없으면 안넣어줌
export const notNeededAuth = async (req,res,next) => {
  const authHeader = req.get("Authorization"); //header 키
  // 검증 
  const token = authHeader.split(" ")[1];
  if(token && token != "null"){
    // 첫번째 인자 토큰값
    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
      async (error,decoded) =>{
        // db
        if(error){
          console.error("JWT 검증 에러");
          res.status(401).json({status: "fail", message:"jwt 검증 실패"});
        // 응답
        }
        const QUERY = "SELECT * FROM users WHERE user_no = ?";
        const user = await db.execute(QUERY, [decoded.no]).then((result) => result[0][0])
        req.user = user;
        next();
        });
      }else{
        next();
      }
};

      // 2. 토큰 이있으면 유저정보 넣어줌, 없으면 통과안됨
      export const neededAuth = async (req,res,next) => {
        const authHeader = req.get("Authorization"); //header 키
        // 검증 
        const token = authHeader.split(" ")[1];
        if(token && token != "null"){
          // 첫번째 인자 토큰값
          jwt.verify(
            token,
            process.env.JWT_SECRET_KEY,
            async (error,decoded) =>{
              // db
              if(error){
                console.error("JWT 검증 에러");
                res.status(401).json({status: "fail", message:"jwt 검증 실패"});
              // 응답
              }
              const QUERY = "SELECT * FROM users WHERE user_no = ?";
              const user = await db.execute(QUERY, [decoded.no]).then((result) => result[0][0])
              req.user = user;
              next();
              });
            }else{
              res.status(403).json({status: "fail",message: "로그인이 필요합니다."})
            }
      };