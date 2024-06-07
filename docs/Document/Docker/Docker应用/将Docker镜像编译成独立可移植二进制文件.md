# 将Docker镜像编译成独立可移植二进制文件

### **介绍**

Dockerc 它是一个容器镜像编译器，可以将Docker容器镜像编译成独立的可移植二进制文件。这意味着用户不再需要使用`docker run`命令来运行容器，也不需要使用`pip install`或`npm i`来安装软件包，而是可以直接运行编译后的可执行文件。

编译后的二进制文件可以像普通二进制文件一样被调用。此外，网络服务在容器内部运行时，用户可以直接访问，而无需指定`-p`参数来映射端口。

这个项目对于希望简化容器部署和管理的用户来说非常有用，尤其是那些希望避免复杂的Docker命令行操作的用户。

### **安装webman**

```
composer create-project workerman/webman tinywan-docker-webman
```

### **下载PHP二进制**

```
wget https://www.workerman.net/download/php/php-8.2.8-static-bin-x86_64.tar.gz
```

> 解压即可得到一个PHP可执行文件，可直接使用，无需安装PHP环境。目前只支持Linux系统。通常下载`x86_64`架构。下载地址 `https://www.workerman.net/download`

解压后会生成一个二进制PHP文件

```
tar -zxvf php-8.2.8-static-bin-x86_64.tar.gz
```

查看版本

```
./php -v
PHP 8.2.8 (cli) (built: Aug 10 2023 13:02:26) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.2.8, Copyright (c) Zend Technologies
```

### **构建Docker镜像**

#### **Dockerfile 文件**

```
FROM alpine:latest

RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories

RUN apk update && \
    apk --no-cache upgrade && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /app/opcache

WORKDIR /app

COPY ./ /app/
# 直接使用 PHP 静态二进制文件
RUN mv /app/php /usr/local/bin/php && chmod +x /usr/local/bin/php

EXPOSE 8787

CMD ["php", "-c", "php.ini", "start.php", "start"]
```

#### **php.ini 配置文件**

```
date.timezone="UTC"
```

#### **构建镜像**

```
docker build . -t tinywan/webman:8.2.8 --load
```

输出结果

```
[+] Building 3.7s (11/11) FINISHED                                                                                            docker:default
 => [internal] load build definition from Dockerfile                                                                                    0.0s
 => => transferring dockerfile: 436B                                                                                                    0.0s
 => [internal] load metadata for docker.io/library/alpine:latest                                                                        0.2s
 => [internal] load .dockerignore                                                                                                       0.0s
 => => transferring context: 2B                                                                                                         0.0s
 => [1/6] FROM docker.io/library/alpine:latest@sha256:21a3deaa0d32a8057914f36584b5288d2e5ecc984380bc0118285c70fa8c9300                  0.0s
 => [internal] load build context                                                                                                       0.3s
 => => transferring context: 30.72MB                                                                                                    0.3s
 => CACHED [2/6] RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories                                       0.0s
 => CACHED [3/6] RUN apk update &&     apk --no-cache upgrade &&     rm -rf /var/cache/apk/* &&     mkdir -p /app/opcache               0.0s
 => CACHED [4/6] WORKDIR /app                                                                                                           0.0s
 => [5/6] COPY ./ /app/                                                                                                                 0.7s
 => [6/6] RUN mv /app/php /usr/local/bin/php && chmod +x /usr/local/bin/php                                                             2.1s
 => exporting to image                                                                                                                  0.3s
 => => exporting layers                                                                                                                 0.3s
 => => writing image sha256:45de23415b779b5660070e8035667dca0b5b389d2e229ad4a7092d9e650370c5                                            0.0s
 => => naming to docker.io/tinywan/webman:8.2.8  
```

查看镜像

```
# docker images

REPOSITORY                  TAG                IMAGE ID       CREATED              SIZE
tinywan/webman              8.2.8              45de23415b77   About a minute ago   71MB
```

### **下载 dockerc**

```
wget https://github.com/NilsIrl/dockerc/releases/download/v0.2.1/dockerc
chmod u+x dockerc
```

### **使用 dockerc 将镜像导出为二进制文件**

```
./dockerc --image docker-daemon:tinywan/webman:8.2.8 --output webman.bin
```

> 输出以下结果表示导出成功

```
Getting image source signatures
Copying blob a31c5b53afbf done   | 
Copying blob 8d3ac3489996 done   | 
Copying blob 3a1eb8879fac done   | 
Copying blob fca36167c75a done   | 
Copying blob 5f70bf18a086 done   | 
Copying blob b9b78906a59e done   | 
Copying config 2678f4ef97 done   | 
Writing manifest to image destination
Parallel mksquashfs: Using 2 processors
Creating 4.0 filesystem on webman.bin, block size 131072.
[============================================================================================================================|] 671/671 100%

Exportable Squashfs 4.0 filesystem, zstd compressed, data block size 131072
 compressed data, compressed metadata, compressed fragments,
 compressed xattrs, compressed ids
 duplicates are removed
Filesystem size 11344.11 Kbytes (11.08 Mbytes)
 31.87% of uncompressed filesystem size (35594.23 Kbytes)
Inode table size 6844 bytes (6.68 Kbytes)
 21.11% of uncompressed inode table size (32419 bytes)
Directory table size 9080 bytes (8.87 Kbytes)
 46.37% of uncompressed directory table size (19580 bytes)
Xattr table size 36 bytes (0.04 Kbytes)
 112.50% of uncompressed xattr table size (32 bytes)
Number of duplicate files found 10
Number of inodes 911
Number of files 414
Number of fragments 17
Number of symbolic links 331
Number of device nodes 0
Number of fifo nodes 0
Number of socket nodes 0
Number of directories 166
Number of hard-links 0
Number of ids (unique uids + gids) 1
Number of uids 1
 root (0)
Number of gids 1
 root (0)
```

### **执行二进制文件**

```
# ./webman.bin 

unknown argument ignored: lazytime
Workerman[start.php] start in DEBUG mode
------------------------------------------- WORKERMAN -------------------------------------------
Workerman version:4.1.15          PHP version:8.2.8           Event-Loop:\Workerman\Events\Event
-------------------------------------------- WORKERS --------------------------------------------
proto   user            worker          listen                 processes    status           
tcp     root            webman          http://0.0.0.0:8282    8             [OK]            
tcp     root            monitor         none                   1             [OK]            
-------------------------------------------------------------------------------------------------
Press Ctrl+C to stop. Start success.
```