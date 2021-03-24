import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 공유드립니다. 취소선은 해당 모듈이 더 이상 쓰이지 않을 거라는 의미이고, bodyParser 모듈이 express 모듈에 내장되기 때문에 별도로 설치하지 않아도 된다고 하네요 ㅎㅎ
// app.use(bodyParser.json()); app.use(bodyParser.urlencoded({extended:ture}));
// ▼
// app.use(express.json()); app.use(express.urlencoded({extended:ture}));

app.use(helmet());
app.use(morgan("dev"));

export default app;
