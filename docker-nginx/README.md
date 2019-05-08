## Getting started

### 基于本地 Dockerfile 构建

1. git clone 当前仓库

```
git clone
```

2. 安装依赖并打包

```
npm install
npm build
```

2. 构建 docker image

```
docker build -t violet0sea/nginx .
```

3

3. 启动 docker 容器

```
docker run -d -p 5008:80 violet0sea/nginx
```

4. open http://localhost:5008

---

### 直接使用 Docker hub 的 image

或者直接 `docker run -d -p 5008:80 violet0sea/nginx`
