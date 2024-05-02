import 'dotenv/config'
import express from "express";
import { coursePage, introducePage, mainPage } from "./controller/webController.js";
import db from '../config/db.js';
import { getCourseList } from './controller/courseContoller.js';

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/client/html");

app.use("/css", express.static("src/client/css"));
app.use("/js", express.static("src/client/js"));
app.use("/file", express.static("src/client/file"));

// JSON 형식 변환 미들웨어
app.use(express.json());
// 리팩토링 - 기능x 코드


// 라우터 WebRouter
app.get("/", mainPage);
app.get("/introduce", introducePage);
app.get("/course", coursePage)

// API Router 
app.get("/api/course", getCourseList);

// 서버 오픈
app.listen(PORT, () => {
  console.info(`서버가 열렸다. http://localhost:${PORT}`);
});
