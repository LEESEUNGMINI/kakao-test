import mysql from "mysql2"

// 데이터베이스 5가지정보

const config = {
  host:process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// DB 연결
// 방법 1. 커넥션 방식, 2. 풀(커넥션 풀 (90%))에 담가두는 방식
// 요청 1번 1커넥션(TCP -> ..) // 네트워크 비용이 너무 많이 듬
// 쿼리 (COST 아깝다)
// 풀 (내 컴퓨터 메모리에 커넥션을 담궈둠)

const db = mysql.createPool(config).promise();

export default db;


