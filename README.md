# Youtube clone

Cloning Youtube with Javascript and NodeJS

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [ ] Search
- [ ] User Detail
- [x] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

### `Babel`

1. package 설치

```
npm install -D @babel/cli @babel/core @babel/node @babel/preset-env
```

2. babel-config.json 파일 생성

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ]
  ]
}
```

3. pacakge.json 수정

```
"scripts": {
  "start": "babel-node index.js",
}
```

4. (선택) nodemon 사용

```
"start": "nodemon --exec babel-node index.js"
```

`Middleware: bodyParser`

- bodyParser 모듈이 express에 포함되기 때문에 별도의 설치가 필요하지 않음
- bodyParser.json() => express.json()

## `Contnets security issue`

app.js

### 1

```
app.use(helmet({ contentSecurityPolicy: false }));
```

### 2

```
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});
```

## Route issue

`Routes issue 1`

```
userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;             // O
      return `/users${USER_DETAIL}`;  // X
    }
  },

videoDetail:
  ...
  return `${VIDEO_DETAIL}`;           // O
  return `/videos${VIDEO_DETAIL}`;    // X

```

`Routes issue 2`

#### home.pug(mixin)

```
video.videoBlock__thumbnail(src=video.videoFile, controls, autoplay)
```

#### videoDetail.pug

```
video(src=video.fileUrl, controls)
```

- home.pug에서는 video 동작, videoDetail.pug에서는 동작 안함.
  why??
