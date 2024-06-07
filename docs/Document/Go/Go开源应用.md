# Go开源应用

## 轻松安全地将内容从一台计算机发送到另一🐊 📦台计算机

GitHub：[schollz/croc：轻松安全地将内容从一台计算机发送到另一台计算机:p ackage： (github.com)](https://github.com/schollz/croc)

官网：https://schollz.com/tinker/croc6/

`croc`是一种工具，允许任何两台计算机简单安全地传输文件和文件夹。*AFAIK，croc* 是唯一可以执行以下**所有**操作的 CLI 文件传输工具：

- 允许**任意两台计算机**传输数据（使用中继）
- 提供**端到端加密**（使用 PAKE）
- 支持轻松**的跨平台**传输（Windows、Linux、Mac）
- 允许**多个文件**传输
- 允许**恢复中断的传输**
- **不需要**本地服务器或端口转发
- **IPv6 优先**，带 IPv4 回退
- **可以使用代理**，如 Tor

## webp_server_go：让站点图片加载速度更快

**项目地址**：**https://github.com/webp-sh/webp_server_go**

WebP是一种由谷歌开发的图像格式，它具有较高的压缩率和较快的加载速度，可以在几乎不影响图像质量的前提下，显著减小文件大小。但由于浏览器兼容性等问题，不是所有的浏览器都支持 WebP。

下面分享一个基于go的实用 WebP 项目 - `webp_server_go`。

### 项目简介

`webp_server_go`是一个用Golang编写的轻量级服务器，它可以根据我们自己的需求，动态地将各种格式的图片转换为WebP格式，从而提高网页加载速度和浏览体验。目前支持的图像格式包括JPEG、PNG、BMP和GIF（仅静态图像）。

此外，该服务器还支持通过配置文件进行自定义设置，如转换质量、监听主机和端口等。

### 项目特性

- 轻量级：基于Golang开发，内存占用小，性能稳定。
- 高效转换：采用先进的图像处理算法，转换速度快，效率高。
- 自动兼容：根据客户端浏览器的类型，自动选择合适的图像格式，无需额外处理。
- 可扩展：支持Nginx反向代理，易于与其他服务集成。

### 项目快速使用

项目可以采用docker或者二进制文件进行安装，

但是官方建议使用 Docker来运行安装，直接使用二进制文件运行可能会遇到与glibc和一些依赖库相关的问题，可能会非常麻烦。

Docker一键安装

```
docker run -d -p 3333:3333 -v /path/to/pics:/opt/pics --name webp-server webpsh/webp-server-go
```

docker-compose安装

在新建一个文件夹并在其中docker-compose.yml文件，内容如下：

```
version: '3'

services:
  webp:
    image: webpsh/webp-server-go
    # image: ghcr.io/webp-sh/webp_server_go
    restart: always
    volumes:
      - ./path/to/pics:/opt/pics
      - ./exhaust:/opt/exhaust
      - ./metadata:/opt/metadata
    ports:
      -  127.0.0.1:3333:3333
```

假设网站的图片路径如下：

```
图像路径：/var/www/img.webp.sh/path/tsuki.jpg
网站路径：https://img.webp.sh/path/tsuki.jpg
```

那么，

```
./path/to/pics 修改 /var/www/img.webp.sh
./exhaust 是输出图像的缓存文件夹，默认情况下它位于exhaust目录中，与docker-compose.yml文件一起，如果想要将缓存图像保留在另一个文件夹中，可以将 ./exhaust 更改为 /some/other/path/to/exhaust
./metadata 是图像元数据的缓存文件夹，默认情况下位于metadata目录中，与docker-compose.yml文件一起
```

使用以下命令启动容器：

```
docker-compose up -d
```

浏览器打开`127.0.0.1:3333`，访问 `http://127.0.0.1:3333/path/tsuki.jpg` 将看到`/var/www/img.webp.sh/path/tsuki.jpg` 的优化版本。

可以再添加反向代理，这样别人就都可以访问到了。

更多的一些参数设置

### 项目使用场景

以下是该项目的一些主要使用场景：

1. 服务器端图片优化
2. 博客和个人网站优化
3. 企业级应用性能优化
4. CDN 加速
5. 自动化部署和管理系统集成 ...

总的来说，`webp_server_go`是一个功能强大且易于使用的开源项目，它可以帮助我们轻松地将其他格式的图片转换为WebP格式，从而提高网页加载速度和浏览体验。通过灵活的配置和扩展性，可以根据自己的需求将其与其他服务集成。

