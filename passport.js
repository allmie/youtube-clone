// passport configure .js
import passport from 'passport';
import User from './src/models/User';

// strategy(인증 방식, 로그인 방식)
// 이미 구성 된, passport-local의 LocalLocalStrategy를 생성
passport.use(User.createStrategy());

// 쿠키에 user.id만 사용됨
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
