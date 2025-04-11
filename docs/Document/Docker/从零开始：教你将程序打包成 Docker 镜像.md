# 从零开始：教你将程序打包成 Docker 镜像

## 引言

在现代软件开发中，容器化技术已经成为趋势。不仅仅是Docker，云原生架构、Kubernetes等同样依赖镜像技术来实现应用的快速交付和高效部署。将程序制作成镜像是迈向容器化和云原生的第一步。这篇文章将从零开始，带你轻松掌握将程序打包成镜像的核心技能，为你的应用构建“轻装上阵”的能力。

## 一、为什么需要 Docker 镜像？

1. 跨平台部署：一次打包，随处运行。
2. 简化环境管理：避免“我的机器没问题”的烦恼。
3. 加速开发迭代：团队协作时，环境一致性更强。

> 容器化优势请查阅之前的文章：[技术变革：容器改变我们的工作方式](https://mp.weixin.qq.com/s?__biz=MzkzMjg2NjE2MA==&mid=2247483857&idx=1&sn=1186cb0bdad2bff2b45337a5e0a6b1f9&scene=21#wechat_redirect)

## 二、准备工作

### 1.安装 Docker

- 在 Docker 官网 下载适配系统的安装包并安装。
- 安装完成后，运行以下命令检查安装状态：

```
docker --version
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPX0mpgZlg0fDbZiakgPYbVaXgqACguVhp4TIDibibqqtUV1Rye9DfL5UIA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 查看Docker系统信息

```
docker info
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPOHTKdM7QN5Fe4eoAR9OcZcJJcOmvnYcQENgvZh3dHmKXhicDcxKW75A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### 2.准备待打包的程序

假设你有一个基于 Java 的 Spring Boot 应用，项目结构如下：

```
my-app/
├── Dockerfile
├── pom.xml
└── src/
└── target/
```

## 三、编写 Dockerfile

Dockerfile 是制作镜像的核心文件，它定义了如何构建你的镜像。以下是一个简单的Java应用示例：

dockerfile

```
# 使用官方Java运行环境作为基础镜像
FROM openjdk:17-jdk-slim

# 设置工作目录
WORKDIR /app

# 将项目的JAR包拷贝到镜像中
COPY target/my-app.jar app.jar

# 暴露应用端口
EXPOSE 18080

# 定义容器启动命令
CMD ["java", "-jar", "app.jar"]
```

## 四、构建 Docker 镜像

1. 在项目根目录执行以下命令：

```
docker build -t my-app:1.0 .
```

- -t my-app:1.0：为镜像指定名称和版本。
- .：指定 Dockerfile 所在路径。

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPp4g7Tks0moXgG7IOEbQ44tpEn1QPbiay6GrH7DiaMXc2BLhKwau7eicJQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

1. 验证镜像是否构建成功：

```
docker images
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dP2RXURDKcWty3ondaBGlfNv6UmHBicrLY7MThCa6NkoCPTwZum3v9Cow/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)可以看到镜像已经生成到我的本地机器了。

## 五、运行容器测试镜像

1.使用以下命令运行容器并测试镜像：

```
docker run -d -p 18080:18080 my-app:1.0
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPMFPxGSuNSGZEMICR8sT9SAILWqaaYibRWQDhYB90jITdPGPs5voVicEQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- -d：以后台模式运行容器。
- -p 18080:18080：将容器的18080端口映射到主机。容器的18080端口是java应用运行的端口。

2.通过浏览器访问 http://localhost:18080，确认程序是否正常运行。

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPrrBBSmica2O2nEVicmBu42ZDZW1BJVCrRz9axUH9j4KPuMDMUeZw2roA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

可以看到我们的应用已经可以访问了。

## 六、上传镜像到镜像仓库

将镜像推送到到私有仓库，便于分享和部署：

```
docker tag my-app:1.0 10.10.10.11:80/public/my-app:1.0
docker push 10.10.10.11:80/public/my-app:1.0
```

- 10.10.10.11:80/public 是我的私有镜像仓库地址，根据实际修改

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPqu5Qs9n6DybicZiafrGIdxiaHs1Kdia9ahNDvm12VXGzEr5ZOggI9b5ZOw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dPEibiaia6mtYwaSWP9hhsibricurq60IakZlSicSzD7qkZ6TaN7SxEIicQkvsw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

登录私有仓库，可以看到镜像已经成功推送了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/2qDcxVibtQW7232iaOJgiaCfFSYbXeUB7dP3cyUjLEqXHx44sBDf4TzzS1o8viaby4fzLwIL0fhlpn6pscAue486Qw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## 结语

通过以上步骤，已经成功将程序制作成Docker镜像。这个流程不仅适用于Java应用，也适用于其他语言的程序。未来，你可以将这些镜像用于测试、部署，甚至是CI/CD流程中。赶快试试，把你的应用装进“容器”中吧！