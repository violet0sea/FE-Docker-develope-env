# node with Docker

基于 Docker 的容器环境，官方 python docker-compose 的 node 版本
使用之前请确保 Docker 环境配置 OK

## Getting started

### 基于本地 Dockerfile 构建

1. git clone 当前仓库

```
git clone
```

2. 构建 docker image

```
docker build -t violet0sea/docker-node .
```

3. 启动 docker 容器

```
docker-compose up
```

4. open http://localhost:3006
