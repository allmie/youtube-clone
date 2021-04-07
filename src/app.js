import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import routes from './routes';
import { localsMiddleware } from '../middlewares';

import '../passport';

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use('/src/uploads', express.static('src/uploads'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(
  session({
    secret: 'any string', // session 암호화(session ID)
    resave: true,
    saveUninitialized: false,
    // 초기화되지 않은 session을 저장소에 저장, 변경되지 않는 세션은 유지, 로그인 시 false
  })
);

app.use(session({}));
// passport, cookie-parser 뒤에 작성
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
