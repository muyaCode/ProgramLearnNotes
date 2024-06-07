

# Webman实战教程_轻松使用Docker部署Webman项目—打造专属你的Web应用

# Docker介绍

## 简介

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口。

## 为什么使用Docker

- 加速本地的开发和构建流程，容器可以在开发环境构建，然后轻松地提交到测试环境，并最终进入生产环境
- 能够在让独立的服务或应用程序在不同的环境中得到相同的运行结果
- 创建隔离的环境来进行测试
- 高性能、超大规划的宿主机部署
- 从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境

## 拉取镜像

```
docker pull ghcr.io/tinywan/docker-php-webman:latest
```

> 注：这里的容器仓库是使用的Github容器仓库，并不是Docker官方容器仓库。

Github地址：https://github.com/Tinywan/docker-php-webman 

镜像仓库地址：https://github.com/Tinywan/docker-php-webman/pkgs/container/docker-php-webman

![图片](./Webman实战教程_轻松使用Docker部署Webman项目,打造专属你的Web应用.assets/9994894894.webp)

> 以上镜像目前包含最稳定和最新版本的PHP版本。7.4.29、8.1.4、8.2.11

```
$ docker pull ghcr.io/tinywan/docker-php-webman:latest
latest: Pulling from tinywan/docker-php-webman
96526aa774ef: Already exists
c2b4f1479ad8: Already exists
e266ff8d3cec: Already exists
6127d1435a8c: Already exists
3cd239193044: Pull complete
e382ad9012a8: Pull complete
802f60bdedcc: Pull complete
f084c192031f: Pull complete
d2fb0a128f05: Pull complete
c86a0b84d7a5: Pull complete
ed1bba0bf370: Pull complete
4d93078aeacf: Downloading [=============================================>     ]  132.1MB/145.4MB
a740bafc45df: Download complete
4f4fb700ef54: Download complete
1ecbeeb60100: Download complete
94da5ab8d25a: Download complete
c97d1485a658: Download complete
329e29eca3b3: Download complete
dafdfe3e9e69: Download complete
84fabf25dc21: Download complete
e1fb87b1a159: Download complete
```

> 通过`docker images` 查看拉取的镜像

```
$ docker images
REPOSITORY                          TAG               IMAGE ID       CREATED         SIZE
ghcr.io/tinywan/docker-php-webman   8.2.11            4d4c977b1bd2   4 days ago      519MB
ghcr.io/tinywan/docker-php-webman   latest            4d4c977b1bd2   4 days ago      519MB
```

> 

默认`tinywan/docker-php-webman`拉取的镜像容器是最新的。拉取特定的可以执行拉取容器的版本，如：`tinywan/docker-php-webman:7.4.29`

# 开始部署

### Linux

```
docker run --rm -it -p 8787:8787 -v /home/www/webman:/app tinywan/docker-php-webman
```

### Windows

```
docker run --rm -it -p 8787:8787 -v e:/dnmp/www/webman:/app tinywan/docker-php-webman
```

> `8787:8787` 是容器开放和对外绑定的端口号。`e:/dnmp/www/webman:/app` 则是本地挂载的目录，上面表示Window环境下载 `E`盘，webman项目目录为 `/dnmp/www/webman`的挂载到容器的 `app`上。

这里使用Windows环境进行部署

```
docker run --rm -it -p 8787:8787 -v e:/dnmp/www/webman:/app ghcr.io/tinywan/docker-php-webman:8.2.11
```

> 第一次启动可能会报错，原因就是和本地的端口冲突了，会提示以下错误信息。

```
$ docker run --rm -it -p 8787:8787 -v e:/dnmp/www/webman:/app ghcr.io/tinywan/docker-php-webman:8.2.11
docker: Error response from daemon: driver failed programming external connectivity on endpoint serene_kapitsa (4c56469d97d3112e3410df4c62776de77471b654bba339675ffb89d5a2196f91): Bind for 0.0.0.0:8787 failed: port is already allocated.
```

> 以上错误信息只需要给本主机重新换一个端口号就行了。这里重新换成`8999`

```
$ docker run --rm -it -p 8999:8787 -v e:/dnmp/www/webman:/app ghcr.io/tinywan/docker-php-webman:8.2.11
2023-10-16 01:33:35,525 INFO Set uid to user 0 succeeded
2023-10-16 01:33:35,529 INFO supervisord started with pid 1
2023-10-16 01:33:36,534 INFO spawned: 'webman' with pid 7
Workerman[/app/start.php] start in DEBUG mode
------------------------------------------- WORKERMAN --------------------------------------------
Workerman version:4.1.13          PHP version:8.2.11           Event-Loop:\Workerman\Events\Event
-------------------------------------------- WORKERS ---------------------------------------------
proto   user            worker          listen                 processes    status
tcp     root            webman          http://0.0.0.0:8787    24            [OK]
tcp     root            monitor         none                   1             [OK]
--------------------------------------------------------------------------------------------------
Press Ctrl+C to stop. Start success.
2023-10-16 01:33:38,305 INFO success: webman entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
```

可以看到已经正常启动了，通过映射端口号`8999`地址 `http://127.0.0.1:8999/`就可以访问webman了

# 容器介绍

想知道容器，的进入到容器里面。这里通过容器ID进入

查看容器

```
$ docker ps -a
CONTAINER ID   IMAGE                                      COMMAND                  CREATED         STATUS          PORTS
                                                                               NAMES
b301d123ebd2   ghcr.io/tinywan/docker-php-webman:8.2.11   "docker-php-entrypoi…"   6 minutes ago   Up 6 minutes    0.0.0.0:8999->8787/tcp
```

进入容器

```
$ docker exec -it b301d123ebd2 bash
b301d123ebd2:/app#
```

查看PHP版本

```
b301d123ebd2:/app# php -v
PHP 8.2.11 (cli) (built: Sep 30 2023 02:47:14) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.2.11, Copyright (c) Zend Technologies
    with Zend OPcache v8.2.11, Copyright (c), by Zend Technologies
```

查看PHP安装扩展

```
b301d123ebd2:/app# php -m
[PHP Modules]
bcmath
bz2
calendar
Core
ctype
curl
date
dom
event
fileinfo
filter
ftp
hash
iconv
json
libxml
mbstring
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_mysql
pdo_sqlite
Phar
posix
random
readline
Reflection
session
SimpleXML
soap
sockets
sodium
SPL
sqlite3
standard
tokenizer
xml
xmlreader
xmlwriter
Zend OPcache
zip
zlib

[Zend Modules]
Zend OPcache
```

# 其他

> 如果出现一下情况，则需要登录github

```
$ docker pull ghcr.io/tinywan/docker-php-webman:latest
Error response from daemon: Head "https://ghcr.io/v2/tinywan/docker-php-webman/manifests/latest": denied: denied
```

则需要登录

```
// 这里是Github生成的个人令牌
$ export CR_PAT=ghp_bF2wQ72fb2ym5AEZaU3sdfsdfERRihcJ

// 登录Github
$ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
Login Succeeded
```