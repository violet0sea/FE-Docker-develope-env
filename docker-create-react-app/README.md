# CRA with Docker

基于 Docker 的容器环境，使用 CRA 搭建一个隔离容器用于 react 开发
使用之前请确保 Docker 环境配置 OK

## Getting started

### 基于本地 Dockerfile 构建

1. git clone 当前仓库

```
git clone
```

2. 构建 docker image

```
docker build -t violet0sea/create-react-app .
```

3. 启动 docker 容器

```
docker run -it -p 3333:3000 violet0sea/create-react-app
```

4. open http://localhost:3334查看

---

可以使用 volume 挂载本地文件到容器

```
docker run -it -p 3333:3000 -v D:\Test\docker-tutorial\docker-create-react-app\:/usr/share/react-app/ violet0sea/create-react-app
```

### 直接使用 Docker hub 的 image

或者直接 `docker run -it -p 3333:3000 violet0sea/create-react-app`
