# 告别Dockerfile,拥抱 docker init 构建Docker镜像

## **概述**

Docker 是一个开源的应用容器引擎，它允许开发者打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。容器是完全使用沙箱机制，相互之间不会有任何接口，更重要的是容器性能开销极低。

## **什么是 docker init？**

`docker init` 是一个命令行应用程序，可帮助初始化项目中的 Docker 资源。它根据项目的要求创建 `Dockerfiles`、`docker-compose` 文件和 `.dockerignore` 文件。这简化了为项目配置 Docker 的过程，节省时间并降低复杂性。

最新版本的 `docker init` 支持 `Go、Python、Node.js、Rust、ASP.NET、PHP` 和 `Java`。目前它只能于 `Docker Desktop` 一起使用，也就是说大家目前在 Linux 系统中是无法使用 `docker init` 的。

## **如何使用**

使用 `docker init` 很简单，只需几个简单的步骤。首先，转到您要在其中设置 Docker 资源的项目目录。

举个例子，我来创建一个基本的 PHP 应用程序。

#### **创建 index.php**

```
<?php
echo 'Hello World! 开源技术小栈！';
```

#### **初始化**

`docker init` 将扫描您的项目并要求您确认并选择最适合您的应用程序的模板。选择模板后`docker init` 会要求您提供一些特定于项目的信息，自动为您的项目生成必要的 Docker 资源。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

接下来要做的就是选择应用程序平台，在示例中使用 PHP。它将建议您的项目的推荐值，例如 PHP 版本、端口、入口点命令。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

您可以选择默认值或提供所需的值，它将创建您的 docker 配置文件以及动态运行应用程序的说明。让我们来看看这个自动生成的配置是什么样子。

```
$ ls
Dockerfile  README.Docker.md  compose.yaml  index.php
```

## **生成 Dockerfile 文件**

```
# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

################################################################################

# The example below uses the PHP Apache image as the foundation for running the app.
# By specifying the "7.4.28-apache" tag, it will also use whatever happens to be the
# most recent version of that tag when you build your Dockerfile.
# If reproducability is important, consider using a specific digest SHA, like
# php@sha256:99cede493dfd88720b610eb8077c8688d3cca50003d76d1d539b0efc8cca72b4.
FROM php:7.4.28-apache

# Copy app files from the app directory.
COPY . /var/www/html

# Your PHP application may require additional PHP extensions to be installed
# manually. For detailed instructions for installing extensions can be found, see
# https://github.com/docker-library/docs/tree/master/php#how-to-install-more-php-extensions
# The following code blocks provide examples that you can edit and use.
#
# Add core PHP extensions, see
# https://github.com/docker-library/docs/tree/master/php#php-core-extensions
# This example adds the apt packages for the 'gd' extension's dependencies and then
# installs the 'gd' extension. For additional tips on running apt-get:
# https://docs.docker.com/go/dockerfile-aptget-best-practices/
# RUN apt-get update && apt-get install -y \
#     libfreetype-dev \
#     libjpeg62-turbo-dev \
#     libpng-dev \
# && rm -rf /var/lib/apt/lists/* \
#     && docker-php-ext-configure gd --with-freetype --with-jpeg \
#     && docker-php-ext-install -j$(nproc) gd
#
# Add PECL extensions, see
# https://github.com/docker-library/docs/tree/master/php#pecl-extensions
# This example adds the 'redis' and 'xdebug' extensions.
# RUN pecl install redis-5.3.7 \
#    && pecl install xdebug-3.2.1 \
#    && docker-php-ext-enable redis xdebug

# Use the default production configuration for PHP runtime arguments, see
# https://github.com/docker-library/docs/tree/master/php#configuration
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Switch to a non-privileged user (defined in the base image) that the app will run under.
# See https://docs.docker.com/go/dockerfile-user-best-practices/
USER www-data
```

> 它遵循人们在所有 Linkedin 和 Medium 帖子中不断告诉我们的所有性能和安全最佳实践。

#### **docker-compose.yml**

```
# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Docker compose reference guide at
# https://docs.docker.com/go/compose-spec-reference/

# Here the instructions define your application as a service called "server".
# This service is built from the Dockerfile in the current directory.
# You can add other services your application may depend on here, such as a
# database or a cache. For examples, see the Awesome Compose repository:
# https://github.com/docker/awesome-compose
services:
  server:
    build:
      context: .
    ports:
      - 9009:80

# The commented out section below is an example of how to define a PostgreSQL
# database that your application can use. `depends_on` tells Docker Compose to
# start the database before your application. The `db-data` volume persists the
# database data between container restarts. The `db-password` secret is used
# to set the database password. You must create `db/password.txt` and add
# a password of your choosing to it before running `docker-compose up`.
#     depends_on:
#       db:
#         condition: service_healthy
#   db:
#     image: postgres
#     restart: always
#     user: postgres
#     secrets:
#       - db-password
#     volumes:
#       - db-data:/var/lib/postgresql/data
#     environment:
#       - POSTGRES_DB=example
#       - POSTGRES_PASSWORD_FILE=/run/secrets/db-password
#     expose:
#       - 5432
#     healthcheck:
#       test: [ "CMD", "pg_isready" ]
#       interval: 10s
#       timeout: 5s
#       retries: 5
# volumes:
#   db-data:
# secrets:
#   db-password:
#     file: db/password.txt
```

它编写了 `docker-compose.yaml` 配置来运行应用程序。由于我们的应用程序不包含与数据库的任何连接，因此它注释掉了数据库容器可能需要的代码。

#### **构建镜像**

```
docker compose up --build
```

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

#### **运行容器**

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

```
[+] Running 1/1
 ✔ Container init-server-1  Recreated                                                                                                                                                                       0.2s
Attaching to server-1
server-1  | AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.19.0.2. Set the 'ServerName' directive globally to suppress this message
server-1  | AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.19.0.2. Set the 'ServerName' directive globally to suppress this message
server-1  | [Wed Apr 17 15:36:35.110763 2024] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.53 (Debian) PHP/7.4.28 configured -- resuming normal operations
server-1  | [Wed Apr 17 15:36:35.110809 2024] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'
server-1  | 172.19.0.1 - - [17/Apr/2024:15:36:39 +0000] "GET / HTTP/1.1" 200 208 "-" "curl/7.70.0"
server-1  | 172.19.0.1 - - [17/Apr/2024:15:37:18 +0000] "GET / HTTP/1.1" 200 208 "-" "curl/7.70.0"
server-1  | 172.19.0.1 - - [17/Apr/2024:15:37:19 +0000] "GET / HTTP/1.1" 200 208 "-" "curl/7.70.0"
server-1  | 172.19.0.1 - - [17/Apr/2024:15:37:19 +0000] "GET / HTTP/1.1" 200 208 "-" "curl/7.70.0"
```

### **请求访问**

```
$ curl http://127.0.0.1:9009/
Hello World !
$ curl http://127.0.0.1:9009/
Hello World! 开源技术小栈！
```

## **为什么使用 docker init？**

`docker init` 使 Docker 化变得轻而易举，特别是对于 Docker 新手来说。它消除了编写 `Dockerfile` 和其他配置文件的手动任务，从而节省时间并最大限度地减少错误。它使用模板根据您的应用程序类型自定义 Docker 设置，同时遵循行业最佳实践。