import 'dotenv/config'
import express from "express";
import { coursePage, introducePage, joinPage, loginPage, mainPage, qrPage } from "./controller/webController.js";
import db from '../config/db.js';
import { getCourseList, qrCheck } from './controller/courseContoller.js';
import { joinUser, loginUser } from './controller/authController.js';
import { neededAuth, notNeededAuth } from './Middleware/auth.js';

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/client/html");

app.get("/login", loginPage)
app.get("/join", joinPage)
app.use("/css", express.static("src/client/css"));
app.use("/js", express.static("src/client/js"));
app.use("/file", express.static("src/client/file"));
app.get("/qr", qrPage)
// JSON 형식 변환 미들웨어
app.use(express.json());
// 리팩토링 - 기능x 코드


// 라우터 WebRouter
app.get("/", mainPage);
app.get("/introduce", introducePage);
app.get("/course", coursePage)

// API Router 
app.get("/api/course", notNeededAuth, getCourseList);
app.post("/api/course",neededAuth, qrCheck)
app.post("/api/join",joinUser)
app.post("/api/login",loginUser)
// 서버 오픈
app.listen(PORT, () => {
  console.info(`서버가 열렸다. http://localhost:${PORT}`);
});
