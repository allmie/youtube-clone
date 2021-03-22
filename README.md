# Youtube clone

Cloning Youtube with Javascript and NodeJS

### Babel 사용

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
