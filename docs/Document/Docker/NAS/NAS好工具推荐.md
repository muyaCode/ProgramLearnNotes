# Audiobookshelf：自托管有声读物和播客服务器，实现听书自由

【Audiobookshelf】，它原生支持简体中文，可以通过 Docker 容器部署在我们的 NAS 上，非常的方便。在功能上除了可以收藏和管理本地的有声书籍，还可以直接在程序中搜索并下载播客资源，并且资源还是相当的丰富，更难得的是，它还有配套的 Android 和 IOS 客户端，配合公网 IP 以及反代设置，可以做到随时随地，不受约束的自由听书，非常的强大！

## 关于 Audiobookshelf

**简介：**

Audiobookshelf 是一个免费开源的网络应用程序，它是一个用于管理有声读物的 Web 应用程序。它可以帮助用户管理自己的有声读物收藏，包括将有声读物添加到收藏夹、查看有声读物的详细信息、播放有声读物等。

![图片](./NAS好工具推荐.assets/640-777899.webp)

**功能：**

- 添加有声读物：用户可以通过搜索或手动添加的方式将有声读物添加到收藏夹中。
- 管理有声读物：用户可以查看有声读物的详细信息，包括作者、出版社、出版日期等，还可以对有声读物进行分类、编辑和删除等操作。
- 播放有声读物：用户可以直接在 Audiobookshelf 中播放有声读物，而不需要下载或转换文件格式。
- 同步收藏夹：用户可以将收藏夹同步到云端，以便在不同设备之间共享。
- 用户管理：Audiobookshelf 支持多用户管理，每个用户都可以有自己的收藏夹和设置。

## Audiobookshelf 的安装和部署

今天使用的安装方式为 SSH 终端部署，适用于“御三家”传统 NAS。至于 SSH 工具请自行解决，Putty，XShell，FinalShell 等都可以，我个人使用的是 FinalShell。

**安装前的准备**

![图片](./NAS好工具推荐.assets/640-1716715744650-59.webp)

🔺 老规矩，我们先来使用 NAS 的文件管理器，在它的 Docker 文件夹（威联通默认的叫 Container)下面创建一个“audiobooks” 的共享文件夹，然后再建四个子文件夹，分别为 audiobooks、config、metadata、podcasts。

四个子文件夹所储存的信息分别 为：

- audiobooks -->存放有声读物
- config -->存放设置
- metadata -->存放元数据
- podcasts -->存放播客

**开始安装和部署**

![图片](./NAS好工具推荐.assets/640-1716715744650-60.webp)

🔺 使用 SSH 连接工具连接到 NAS 之后先改用管理员模式登录，输入命令“ **sudo -i** ”回车，提示输入密码，密码就是我们 NAS 的登录密码，输入的时候不会有显示，输入完成后直接点回车即可。

![图片](./NAS好工具推荐.assets/640-1716715744650-61.webp)

![图片](./NAS好工具推荐.assets/640-1716715744650-62.webp)

🔺 威联通用户还需要在出现上图界面的时候输入“Q”和“Y”。

![图片](./NAS好工具推荐.assets/640-1716715744650-63.webp)

🔺 然后输入部署指令：

> docker run -d \
>
> -e AUDIOBOOKSHELF_UID=1000 \
>
> -e AUDIOBOOKSHELF_GID=1000 \
>
> -p 13378:80 \
>
> -v $(pwd)/audiobooks:/audiobooks \
>
> -v $(pwd)/podcasts:/podcasts \
>
> -v $(pwd)/config:/config \
>
> -v $(pwd)/metadata:/metadata \
>
> --name audiobookshelf \
>
> advplyr/audiobookshelf

直接抄作业的小伙伴请注意除了最后一行，每行后面都有一个斜杠。我每次都要吐槽张大妈这边的编辑器，因为这个斜杠发出来会自动删除，这么多年了都没有解决这个问题！

使用一行的 Docker run 命令为：

> **docker run -d -e AUDIOBOOKSHELF_UID=1000 -e AUDIOBOOKSHELF_GID=1000 -p 13378:80 -v $(pwd)/audiobooks:/audiobooks -v $(pwd)/podcasts:/podcasts -v $(pwd)/config:/config -v $(pwd)/metadata:/metadata --name audiobookshelf advplyr/audiobookshelf**

以上命令的说明为：

- -p 13378:80 -->端口映射，冒号前面可修改，只要本地端口不冲突即可；
- -v $(pwd)/audiobooks:/audiobooks -->冒号前面是我们前面新建“audiobooks”文件夹的实体路径；
- -v $(pwd)/podcasts:/podcasts -->冒号前面是我们前面新建“podcasts”文件夹的实体路径；
- -v $(pwd)/config:/config -->冒号前面是我们前面新建“config”文件夹的实体路径；
- -v $(pwd)/metadata:/metadata -->冒号前面是我们前面新建“metadata”文件夹的实体路径；

![图片](./NAS好工具推荐.assets/640-1716715744650-64.webp)

🔺 可以回到 NAS 中查看创建的这个“audiobookshelf ”容器成功没有。

## Audiobookshelf 的使用体验

👉**登录**

在浏览器中输入【 http:// NASIP:端口号】就能看到登录界面。

![图片](./NAS好工具推荐.assets/640-1716715744650-65.webp)

🔺 首次登录需要创建账号和密码，随意设置就行，只要能记住。

![图片](./NAS好工具推荐.assets/640-1716715744650-66.webp)

🔺 然后输入创建的账号密码，点击“Submit”就可以登录了。

**👉 设置中文：**

![图片](./NAS好工具推荐.assets/640-1716715744650-67.webp)

![图片](./NAS好工具推荐.assets/640-1716715744650-68.webp)

🔺 来到**audiobookshelf**主界面之后，点击右上角的「设置」按钮，然后点击左边「Setting」，在页面下找到默认服务器语言选项，在里面找到「简体中文」来即可切换界面语言。

**👉 设置媒体资料库**

![图片](./NAS好工具推荐.assets/640-1716715744650-69.webp)

🔺 点击左侧的「媒体库」，选择「添加第一个媒体库」。

![图片](./NAS好工具推荐.assets/640-1716715744650-70.webp)

![图片](./NAS好工具推荐.assets/640-1716715744651-71.webp)

🔺「媒体类型」选择“图书”，「媒体库名称」选择“audiobooks”用于有声读物，然后对照上图的顺序，把之前映射到容器内的目录添加上去。

![图片](./NAS好工具推荐.assets/640-1716715744651-72.webp)

🔺 完成之后点击“创建”即可，

![图片](./NAS好工具推荐.assets/640-1716715744651-73.webp)

🔺 接着按照前面一样的方法，创建用于播客的“podcasts”媒体库。

![图片](./NAS好工具推荐.assets/640-1716715744651-74.webp)

🔺 上图便是搭建好的用于有声读物和播客的媒体库了。

**👉 添加本地有声读物**

![图片](./NAS好工具推荐.assets/640-1716715744651-75.webp)

🔺 添加本地有声读物非常简单，我们只需要将自己下载好的有声读物资源拖到 NAS 中我们创建的“audiobooks”文件夹。

![图片](./NAS好工具推荐.assets/640-1716715744651-76.webp)

🔺 然后 audiobookshelf 这边的媒体库就能自己读取了。

![图片](./NAS好工具推荐.assets/640-1716715744651-77.webp)

🔺 或者你也可以直接点击右上角的“上传”按钮，直接上传文件，甚至一下子上传整个文件夹的内容。

![图片](./NAS好工具推荐.assets/640-1716715744651-78.webp)

🔺 点击上传好的有声读物，就可以看见“播放”按钮了，点击就能直接播放。

![图片](./NAS好工具推荐.assets/640-1716715744651-79.webp)

![图片](./NAS好工具推荐.assets/640-1716715744651-80.webp)

🔺 对于有强迫症的小伙伴你还可以直接点击“编辑”按钮，对我们本地的有声读物进行更细致的标注，或者修改信息，上传封面等操作。

**👉 搜索与添加网络播客**

![图片](./NAS好工具推荐.assets/640-1716715744651-81.webp)

🔺 点击一下 左上角的「audiobookshelf」 。

![图片](./NAS好工具推荐.assets/640-1716715744651-82.webp)

🔺 然后选择 「podcasts」 媒体库。

![图片](./NAS好工具推荐.assets/640-1716715744651-83.webp)

🔺 接着点击左侧边栏选「查找」，在搜索框内输入关键字搜索，即可搜索到相应的播客资源。

![图片](./NAS好工具推荐.assets/640-1716715744651-84.webp)

🔺 看到列表中自己需要的播客资源点进去，勾选“自动下载剧集”，点击“提交”。

![图片](./NAS好工具推荐.assets/640-1716715744651-85.webp)

🔺 就可以看到页面会显示：“已成功创建播客” 的提示。

![图片](./NAS好工具推荐.assets/640-1716715744651-86.webp)

🔺 但是我们回到媒体库的播客页面，会发现我们创建的这个播客啥内容也没有，是因为它显示的是这个播客现在的状态，而它的内容则在以前。

![图片](./NAS好工具推荐.assets/640-1716715744651-87.webp)

🔺 所以我们只需要点击“编辑”按钮，选择「剧集」，将“在此日期后查找新剧集”修改为更早以前，比如说 8 年以前，在点击“检查并下载新剧集“，下面就能显示剧集了。

![图片](./NAS好工具推荐.assets/640-1716715744651-88.webp)

🔺 回到当前播客的页面，就能看到「播放」按钮了，现在我们就可以自由的听自己想要的播客了，就是这么简单。

![图片](./NAS好工具推荐.assets/640-777899.webp)

🔺 对了，Audiobookshelf 的播客资源来源于苹果公司的 iTunes，资源那是相当的丰富，你可以畅听几乎全球所有的优秀书籍，故事，歌曲，甚至相声或者小品。

![图片](./NAS好工具推荐.assets/640-1716715744651-89.webp)

🔺 并且还有《什么值得买》。等等，张大妈什么时候还有播客服务？为什么我混迹张大妈这么多年怎么从来也没听说过？张大妈也没有宣传过？

**👉 补充说明**

作为一款强大的有声读物和播客服务器，它肯定不止仅能在本地局域网内使用了，它还可以通过配置好 DDNS 域名，然后路由器设置端口转发来实现广域网（外网）访问，或者还可以直接反向代理也是没有问题的。之前写过这类教程，这里就不在赘述了。

同时，Audiobookshelf 还有自己专属的 Android 和 IOS 客户端，Android 的可以直接在 Google Play Store 搜索并下载，至于苹果手机的 IOS 尚未正式上架 App Store，只是加入了测试平台，可以通过苹果手机端的测试平台进行安装。具体操作请自行百度，不难~

# NAS 一键部署自动售卡工具，支持对接大部分支付渠道，也能当成在线商城

### 前言

该项目可以说是国内最易用的一款开源自动售卡项目了，不仅仅是售卡，还可以上架各种奇奇怪怪的东西，项目本身支持基本市面上所有的支付途径，功能强大。

### 👍 系统优势

```
采用业界流行的laravel框架，安全及稳定性提升。
支持自定义前端模板功能
支持国际化多语言包（需自行翻译）
代码全部开源，所有扩展包采用composer加载，代码所有内容可溯源！
长期技术更新支持！
支付接口已集成
支付宝当面付
支付宝PC支付
支付宝手机支付
payjs微信扫码.
Paysapi(支付宝/微信).
码支付(QQ/支付宝/微信)
微信企业扫码支付
Paypal支付(默认美元)
V免签支付
全网易支付支持(通用彩虹版)
stripe
```

## 系统部署

### 一、新建文件夹和配置文件

🔻 新建相关文件夹

```

mkdir dujiaoka  && cd dujiaoka  #新建根目录
mkdir uploads storage data redis  #新建文件
chmod 777 uploads storage data redis #授权
```

🔻 新建配置文件，并将下面的代码复制进去，然后修改

```bash
vim env.conf
```

🔻env.conf 代码

```dockerfile
APP_NAME=Cherry小铺  #自定义名字
APP_ENV=local
APP_KEY=base64:D+16ixgrfs0XpoMe71ivYZUReUSMpu1eLLnHixYq8k0= #自定义key
APP_DEBUG=true
APP_URL=https://cgakki.top  #自定义访问地址
LOG_CHANNEL=stack
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=dujiaoka
DB_USERNAME=root
DB_PASSWORD=dujiaoka666  #要和docker-compose里的MYSQL_ROOT_PASSWORD一致
REDIS_HOST=redis
REDIS_PASSWORD=
REDIS_PORT=6379
BROADCAST_DRIVER=log
SESSION_DRIVER=file
SESSION_LIFETIME=120
CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
DUJIAO_ADMIN_LANGUAGE=zh_CN
ADMIN_ROUTE_PREFIX=/admin
ADMIN_HTTPS=false  # 是否开启https (前端开启了后端也必须为true)
```

🔻cotainer manager——项目——新建，复制以下代码

![图片](./NAS好工具推荐.assets/640-753785.webp)

🔻docker-compose 代码如下

```dockerfile
version: "3"

services:
  faka:
    image: hkccr.ccs.tencentyun.com/apocalypsor/dujiaoka:latest
    # ghcr.io/apocalypsor/dujiaoka:latest  #能连github建议用这个
    # hkccr.ccs.tencentyun.com/apocalypsor/dujiaoka:latest  #用不了github可以用这个
    container_name: faka
    environment:
        # - INSTALL=false
        - INSTALL=true  # 第一次安装使用，安装以后需要改为false
    volumes:
      - ./env.conf:/dujiaoka/.env  #需要提前新建
      - ./uploads:/dujiaoka/public/uploads  #需要提前新建，自定义路径
      - ./storage:/dujiaoka/storage #需要提前新建，自定义路径
    ports:
      - 56789:80  #自定义端口
    restart: always
  db:
    image: mariadb:focal
    container_name: faka-data
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=dujiaoka666  #和env.conf里的数据库root密码要一致
      - MYSQL_DATABASE=dujiaoka
      - MYSQL_USER=dujiaoka
      - MYSQL_PASSWORD=dujiaoka666
    volumes:
      - ./data:/var/lib/mysql  #需要提前新建，自定义路径
  redis:
    image: redis:alpine
    container_name: faka-redis
    restart: always
    volumes:
      - ./redis:/data  #需要提前新建，自定义路径
```

### 三、Dockge 部署

🔻 图片是 halo 项目的，把代码换成上面的就可以了

![图片](./NAS好工具推荐.assets/640-1716128764027-20.webp)

## 系统使用

### 一、初始化安装

🔻 系统首页，打开 IP：Port，首次登录需要进行安装，mysql 地址改为 db，redis 地址改为 redis

![图片](./NAS好工具推荐.assets/640-1716128764027-21.webp)🔻 安装成功以后，把 docker-compose 里的环境变量 install 修改为 false，然后重新 up 一次即可

![图片](./NAS好工具推荐.assets/640-1716128764027-22.webp)

![图片](./NAS好工具推荐.assets/640-1716128764027-23.webp)

### 二、后台管理

🔻 输入 ip:port/admin 进入系统，默认账号密码都是 admin

![图片](./NAS好工具推荐.assets/640-1716128764027-24.webp)🔻 商品上架，先新建分类，再新建商品

![图片](./NAS好工具推荐.assets/640-1716128764027-25.webp)🔻 卡密管理，可对应到具体商品

![图片](./NAS好工具推荐.assets/640-1716128764027-26.webp)🔻 修改支付通道。点最后面操作里的编辑，修改为个人的商户 key

![图片](./NAS好工具推荐.assets/640-1716128764028-27.webp)![图片](./NAS好工具推荐.assets/640-1716128764028-28.webp)

本项目远远不止 Cherry 介绍的这些内容，还包括了官方创建、自托管第三方支付平台（免手续费）等内容。因为时间有限，Cherry 没有很深入使用，目前也还在研究。后续会再深入一些后介绍更多的心得体验。

# 『Dashy』NAS 上最炫酷的可定制个人导航页，功能强大，颜值爆表

[『Dashy』NAS 上最炫酷的可定制个人导航页，功能强大，颜值爆表 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkyNjU2MzIzNQ==&mid=2247487456&idx=1&sn=ba43e3589e44e1e998cd6022d293544f&chksm=c234212cf543a83aa758e0d5118847bcd9177b9f650944587c002693a6f3ebfa2d0c31070980&cur_album_id=3115779113304309763&scene=189#wechat_redirect)

[开源且高颜值的自定义导航页工具 (qq.com)](https://mp.weixin.qq.com/s/SYo0j06RUQqnGpBJBNZrPg)

给大家分享另外一款非常炫酷的个人导航页，它的名字就叫做『Dashy』，功能强大，颜值爆表。

## 关于 Dashy

**👉 简介：**

Dashy 是一个开源的自托管的导航页配置服务，具有易于使用的可视化编辑器、状态检查、小工具和主题等，并且所有的功能都可以自定义。通过这个程序，我们不光可以将自己常用的一些网站聚合起来放在一起，还可以搭配监控组件，从而达到监控本地服务器（这里就是指我们使用的 NAS）的目的。

🔺 官方的地址主页看似简单，但是在文档部分包含了大量了详细介绍。不过全部都是英文，对很多新手可能不是很友好，所以今天的内容主要是帮助大家可以快速部署 Dashy 以及简单的上手和使用。

GitHub：https://github.com/Lissy93/dashy

官网地址：https://dashy.to/

官方文档：https://dashy.to/docs/

官方 Demo 地址：https://demo.dashy.to/

**👉 功能与亮点：**

这里直接引用官方的描述：

- 📃 支持多个页面
- 🚦 实时监控每个应用程序/链接的状态
- 📊 使用 widget 显示自托管服务中的信息和动态内容
- 🔎 按名称、域或标签的即时搜索+可自定义的快捷键
- 🎨 许多内置颜色主题，具有 UI 颜色编辑器和自定义 CSS 支持
- 🧸 多个图标、图片、表情选择
- 💂 具有多用户访问、可配置权限和 SSO 支持的身份验证
- 🌎 多语言支持，有 10 多种人工翻译的语言，还有更多的语言正在开发中
- ☁ 可选加密的，免费的离线云备份和恢复功能
- 💼 workspace 视图，可以轻松地同时在多个应用程序之间切换
- 🛩️ 最小视图，用作快速加载浏览器的起始页
- 📏 可自定义的布局、大小、文本、组件可见性、排序、动作等
- 🖼️ 全屏背景图像、自定义导航栏链接、 HTML 页脚、标题等
- ⚙️ 基于 YAML 的单文件配置，以及通过 UI 配置应用程序的选项
- 🤏 响应式 UI、PWA，可实现基本的脱机访问

简单来说，它的配置非常的丰富，功能非常的强大。

**👉 使用的镜像：**

lissy93/dashy

## Dashy 的安装和部署

PS：今天使用的安装方式还是 SSH 终端部署，非常适合群晖威联通或者华硕这种传统的 NAS。至于 SSH 工具请自行解决，Putty，XShell，FinalShell 等都可以，我个人使用的是 FinalShell。

我们根据官方文档的说明，想要使用 Dashy 的完整功能，它的 Docker 部署命令需要在映射文件夹内创建一个【my-local-conf.yml】的配置文件，具体操作如下：

**👉 创建映射文件夹**

![image-20240513163548123](./NAS好工具推荐.assets/image-20240513163548123.png)

🔺 在 NAS 上新建一个 dashy 文件夹，威联通默认的 docker 文件夹是 Container。

![image-20240513163603031](./NAS好工具推荐.assets/image-20240513163603031.png)

🔺 打开 Dashy 的官方文档页面，点开 Configuring 选项。

![image-20240513163616569](./NAS好工具推荐.assets/image-20240513163616569.png)

🔺 在点开的页面下方，你会看到一个 Exmple 的实例，点击右上角的 Copy 复制。

🔺 然后在电脑桌面新建一个 txt 文本，打开之后直接粘贴上一步复制的 Exmple 实例，之后选择保存并退出 txt 文本。完成之后将这个 txt 文本文本重命名为【my-local-conf.yml】，记得后缀也需要改，如果看不到后缀可以在”此电脑“中设置显示文件扩展名。

![image-20240513163640491](./NAS好工具推荐.assets/image-20240513163640491.png)

🔺 将 my-local-conf.yml 文件直接上传到前面我们在 NAS 中新建的 dashy 文件夹里即可。

**👉Dashy 安装和部署**

```bash
sudo -i
```

🔺 然后使用 SSH 连接工具连接到 NAS 之后先改用管理员模式登录，输入命令“ **sudo -i** ”回车，提示输入密码，密码就是我们 NAS 的登录密码，输入的时候不会有显示，输入完成后直接点回车即可。

🔺 威联通用户还需要在出现上图界面的时候输入“Q”和“Y”。

🔺 最后输入部署命令：

> **docker run -d -p 4000:80 -v /root/my-local-conf.yml:/app/public/conf.yml --name my-dashboard --restart=always lissy93/dashy:latest**

命令说明：

- -p 4000:80 #冒号前面的端口号可以根据自己的需要随意更改，内网不冲突即可；
- -v /root/my-local-conf.yml:/app/public/conf.yml #冒号前面映射的就是我们 NAS 中的 my-local-conf.yml 文件实体路径

![image-20240513163743151](./NAS好工具推荐.assets/image-20240513163743151.png)

🔺 返回 NAS 的容器列表，可以看到它已经正在运行了，说明部署 Dashy 成功。

# 不限速、无会员的下载神器。利用绿联私有云部署一套超强力下载工具，并实现超便捷的资源分类和影音盛宴

[不限速、无会员的下载神器。利用绿联私有云部署一套超强力下载工具，并实现超便捷的资源分类和影音盛宴 (qq.com)](https://mp.weixin.qq.com/s/yGgHHUbDyfL8aR6wydA-Mw)

# Nginx Proxy Manager

Nginx Proxy Manager 是一个基于 Docker 的轻量级、高性能的 Web 和电子邮件代理（包括反向代理功能）。它配备了用户友好的 WEB 界面，使创建和管理 Nginx 代理主机变得简单。与群晖自带的反向代理相比，它提供了更强大且灵活的反代功能。

![图片](./NAS好工具推荐.assets/640-489498494.webp)

> Nginx Proxy Manager 项目地址：https://github.com/NginxProxyManager/nginx-proxy-manager

# qBittorrent

qBittorrent 是一款开源的 BitTorrent 客户端，非常适合 PT（Private Tracker）用户。它以简洁的设计和强大的功能著称，提供广泛的定制选项、高效的搜索引擎、种子创建工具，以及带宽调度和 IP 过滤功能，非常适合追求高效且安全下载体验的用户。qBittorrent 的轻量级和无广告特性，使其成为管理 PT 资源的首选工具。

![图片](./NAS好工具推荐.assets/640-1715588804368-12.webp)

# MoviePilot

MoviePilot 是一款高效的 NAS 媒体库管理工具，继承了其前身 NAStool 的基础，提供搜索、下载和整理资源等功能。尽管 NAStool 的原作者已停止其更新和维护，但有网友在此基础上重新设计并开发了 MoviePilot，使其功能更为强大且用户体验更佳。

![图片](./NAS好工具推荐.assets/640-1715588804369-13.webp)

> MoviePilot 项目地址：https://github.com/jxxghp/MoviePilot

# Vaultwarden

Vaultwarden 是一款开源密码管理工具，提供与 Bitwarden 兼容的服务器端实现。它支持多平台使用，包括桌面系统和移动设备，使用户能够在任何设备上安全地管理密码。通过轻量化设计，Vaultwarden 旨在为用户提供高效且便捷的密码管理体验。

![图片](./NAS好工具推荐.assets/640-1715588804369-14.webp)

> Vaultwarden 项目地址：https://github.com/dani-garcia/vaultwarden

# Zdir 3

Zdir 3 是由博主 `xiaoz`使用 Golang + Vue3 开发的轻量级目录列表程序，支持 Linux、Docker、Windows 部署，适合个人或初创公司文件分享使用，亦可作为轻量级网盘使用。

![图片](./NAS好工具推荐.assets/640-1715588804369-15.webp)

> Zdir 3 帮助文档：https://doc.xiaoz.org/books/zdir-3

# 统信 UOS 上搭建办公轻 NAS 和 docker

[薅单位羊毛绝不心软，统信 UOS 上搭建办公轻 NAS 和 docker 玩耍初探 (qq.com)](https://mp.weixin.qq.com/s/cqw5HQ961Ij3noA_bHYDKw)

# NAS 上使用 Docker 搭建 AdGuard Home，实现全屋网页视频去广告

## AdGuard Home 简介

说起【AdGuard】，估计很多小伙伴都听说过它的大名，并且还在使用中，特别是正在使用 Microsoft Edge 浏览器和 Chrome 浏览器的小伙伴，AdGuard 绝对是必装插件之一。

![图片](./NAS好工具推荐.assets/640-498498.webp)

🔺 既然说到浏览器插件了就顺便给大家安利一下。看看微软插件商店里【AdGuard】插件的评分与评论数，你就知道该程序是多么的受欢迎！

插件地址：https://microsoftedge.microsoft.com/addons/detail/adguard-%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E5%99%A8/pdffkfellgipmhklpdmokmckkkfcopbh?hl=zh-CN

![图片](./NAS好工具推荐.assets/640-1715518812549-1.webp)

作为一款专业的广告拦截神器，【AdGuard】目前几乎说是支持了全平台，而今天给大家推荐的【AdGuard Home】便是 AdGuard 团队所开发的另外一款广告拦截神器！

> AdGuard Home：是一款全网广告拦截与反跟踪软件。在您将其安装完毕后，它将保护您所有家用设备，同时您不再需要安装任何客户端软件。随着物联网与连接设备的兴起，掌控您自己的整个网络环境变得越来越重要。

在 NAS 上部署 AdGuard Home 的好处：

- 一次部署，即可实现全局域网客户端的广告拦截与隐私反追踪，一劳永逸
- 更灵活的拦截方式，可以打造适合自己的规则库进行更精准的拦截
- 相比 AdGuard APP 端，免去了订阅费用，可谓是零成本
- 因为 NAS 常年开启，在 NAS 上部署可谓是锦上添花，免得其它客户端部署得额外费用

OK，废话不多说，直接开干！

## NAS 上安装 AdGuard Home 镜像

此次在 NAS 上使用 Docker 安装 AdGuard Home 镜像，还是使用我之前给大家说的更适合小白用户使用的 Portainer 来安装。

**配置 AdGuard Home 准备工作**

安装 AdGuard Home 镜像我们先在 Docker 的官方源【DockerHub】找到它的位置。

![图片](./NAS好工具推荐.assets/640-1715518812549-2.webp)

🔺AdGuard Home 的位置在：https://hub.docker.com/r/adguard/adguardhome

![图片](./NAS好工具推荐.assets/640-1715518812549-3.webp)

🔺 然后在下方看看它的 Docker 配置文件。通过配置文件可以看出，这里我们需要关注两点：存储卷 (-v)和端口映射(-p)。

![图片](./NAS好工具推荐.assets/640-1715518812549-4.webp)

🔺 关于**存储卷 (-v)**，它需要两个配置文件：“workdir”和“confdir”。这个可以自己创建，所以我在 NAS 的【文件总管】里面自己手动创建好了。关于创建位置大家随意就好，前提是你需要知道它在 NAS 中的实际位置，等下在 Portainer 中会用到的。

PS：建议大家和我一样，几样是创建 Docker 容器，就直接在 NAS 中的 Docker 文件夹操作，这样便于以后管理。

![图片](./NAS好工具推荐.assets/640-1715518812549-5.webp)

🔺 关于**端口映射**这里，详情页页做出了具体说明，虽说端口很多，但是我们真正用到的其实就前面三个：53，67，3000。不过 67 和 68 端口因为是 UDP 协议，很多地方都用不了，可以设置也可以不设置。至于后面的我用翻译软件看了下，貌似是服务器用的，咱们一般人用不上，可以不管它~

PS：这里给大家说明一下，“53”是它的拦截协议端口，“3000”是它的默认后台的访问端口。

**Portainer 部署 AdGuard Home**

![图片](./NAS好工具推荐.assets/640-1715518812549-6.webp)

🔺 首先就是设置【名称】，【镜像】，和【端口】。这里大家主要是注意端口这里的“3000”端口，记得一定要把后面容器的端口改成“80”，很重要！！！

![图片](./NAS好工具推荐.assets/640-1715518812549-7.webp)

🔺 然后设置【存储卷】。

- 容器：填 AdGuard Home 的 Docker 配置文件中的位置，
- 主机：自己 NAS 中刚刚创建的那两个文件夹实际位置。

![图片](./NAS好工具推荐.assets/640-1715518812550-8.webp)

🔺 怎么看创建的文件夹在 NAS 中的实际位置？很简单，直接该文件夹鼠标右键“属性”，就能看到了。

![图片](./NAS好工具推荐.assets/640-1715518812550-9.webp)

🔺 最后设置【重启策略】。将重启策略改为 unless stopped 即可。搞定之后点击“部署容器”，Docker 便会自动拉取并创建 AdGuard Home 容器了！

![图片](./NAS好工具推荐.assets/640-1715518812550-10.webp)

🔺OK，十秒种的样子，就能在 Portainer 的容器中看到 AdGuard Home 已经在启动中了！而上图中红框中的位置便是 AdGuard Home 的后台访问端口。

## 配置 AdGuard Home

**AdGuard Home 初始化设置**

![图片](./NAS好工具推荐.assets/640-1715518812550-10.webp)

🔺 前面说过，AdGuard Home 的默认后台访问端口我们设置的是“3000”，这里我们直接选择“3000”端口即可。

![图片](./NAS好工具推荐.assets/640-1715518812550-11.webp)

🔺 然后进入 AdGuard Home 的配置页面，点击“开始配置”。

![图片](./NAS好工具推荐.assets/640-1715518812550-12.webp)

🔺 网页管理界面的端口它默认的是“80”，但是“80”端口在这里是被 NAS 自己占用了，所以我们要改成我们配置 Docker 容器时候的“3000”端口，下一步。

![图片](./NAS好工具推荐.assets/640-1715518812550-13.webp)

🔺 这里设置 AdGuard Home 的管理员账户与密码，随意就好。

![图片](./NAS好工具推荐.assets/640-1715518812550-14.webp)

🔺 这里会有 AdGuard Home 支持的不同客户端的配置方案，也就是它的设置指导。可以看出支持路由器，电脑，手机等设备，这个我们稍后再设置，点击“下一步”。

![图片](./NAS好工具推荐.assets/640-1715518812550-15.webp)

🔺OK！完成 AdGuard Home 的初始化配置！选择“打开仪表盘”。

![图片](./NAS好工具推荐.assets/640-1715518812550-16.webp)

🔺 输入我们创建的管理员账户与密码。

![图片](./NAS好工具推荐.assets/640-1715518812550-17.webp)

🔺 搞定！来到 AdGuard Home 的后台界面了。

**AdGuard Home 基本设置**

![图片](./NAS好工具推荐.assets/640-1715518812550-18.webp)

🔺 打开 AdGuard Home 的后台之后，接着我们便需要对它进行一些基本设置了。点击状态栏的【设置】，我们可以看到常规设置，DNS 设置，加密设置等。这里我们需要改动的其实也就常规设置和 DNS 设置。

![图片](./NAS好工具推荐.assets/640-1715518812550-19.webp)

🔺“常规设置”这里我们根据自己的实际使用情况来设置：

- 过滤器更新间隔：DNS 过滤清单默认更新间隔，默认的每天就可以
- 使用 AdGuard 「浏览安全」网页服务：开启后，当用户访问存在潜在威胁的网站时，AdGuard 会主动拦截并弹出提示，建议勾选
- 使用 AdGuard 「家长控制」 服务：字面意思，如果家中有小孩子，建议开启，避免访问不良网站
- 强制安全搜索：隐藏 Bing、Google、Yandex、YouTube 网站上 NSFW 等不适宜的内容，不过鉴于我们国内网络环境，可以不管
- 查询记录保留时间：AdGuard Home 服务端采用 Sqlite 文件数据库存储日志，长时间保留可能会降低运行速度，同时占用大量的储存空间，个人用户建议不要超过 7 天。
- 统计数据保留时间：用于仪表盘的数据展示，24 小时即可

![图片](./NAS好工具推荐.assets/640-1715518812550-20.webp)

🔺“DNS 设置“这里，一般只设置“上游 DNS 服务器”即可。这里的上游 DNS 服务器指的是上游 DNS 服务器，个人建议直接填写国内几个公共 DNS 即可（腾讯，阿里），不知道的可以直接百度，设置好之后可以有效的避免运营商的 DNS 劫持。下面可以选择”负载均衡“也可以选择”并行请求“，其它的一般保持默认即可。

![图片](./NAS好工具推荐.assets/640-1715518812550-21.webp)

🔺 完成之后可以点击后面的“测试上游 DNS”，如果显示正常运行就没有问题。

![图片](./NAS好工具推荐.assets/640-1715518812550-22.webp)

🔺 因为默认的只是 AdGuard 自己的过滤规则，想要体验更好的去广告的功能，肯定是不够的，所以我们还需要添加第三方的拦截列表。

![图片](./NAS好工具推荐.assets/640-1715518812550-23.webp)

![图片](./NAS好工具推荐.assets/640-1715518812550-24.webp)

![图片](./NAS好工具推荐.assets/640-1715518812550-25.webp)

🔺 添加拦截列表很简单，它有内置的列表，还分好类了，我们直接勾选便能自动添加。

![图片](./NAS好工具推荐.assets/640-1715518812551-26.webp)

![图片](./NAS好工具推荐.assets/640-1715518812551-27.webp)

🔺 也可以添加自己知道的第三方拦截列表清单。

这里顺便给大家推荐几个还不错国内可用的第三方拦截列表：

- Xinggsf 乘风过滤（国内网站广告过滤规则）：https://gitee.com/xinggsf/Adblock-Rule/raw/master/rule.txt
- Xinggsf 乘风视频过滤（国内视频网站广告过滤规则）：https://gitee.com/xinggsf/Adblock-Rule/raw/master/mv.txt
- MalwareDomainList（恶意软件过滤规则）：https://www.malwaredomainlist.com/hostslist/hosts.txt
- Fanboy’s Annoyances List（去除页面弹窗广告规则）：https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt
- Halflife（全面的广告过滤规则）：https://gitee.com/halflife/list/raw/master/ad.txt

**PS：关于 DNS 拦截列表这里，个人建议不要求多而求精。过多的过滤规则会影响你的上网速度，并且会发生冲突，导致不该过滤的也过滤了，导致网页或者视频打不开！并且这个过滤规则是一个长期调试的过程，这个需要大家根据自己的网络使用情况自己摸索！**

## 局域网设备设置

上面的 AdGuard Home 完成安装并设置好之后，我们还需要对我们局域网的设备进行一些简单的设置，这样 AdGuard Home 才有效果。

![图片](./NAS好工具推荐.assets/640-1715518812551-28.webp)

🔺 其实在 AdGuard Home 后台最后一项就有简单的“设置指导”，我们在前面初始化设置也出现过。下面我就我们手头常见的设备，来为大家实操一遍！

**》》路由器**

一般来说，因为绝大多数家庭里面的网络中心都是路由器，只要我们配置好路由器，基本全屋设备都能通过 AdGuard Home 实现过滤广告与反隐私跟踪的功能了。

![图片](./NAS好工具推荐.assets/640-1715518812551-29.webp)

🔺 我这里仅以自己手头的华硕路由器为例，在路由器的“内部网络--DHCP 服务器”设置下面，在 DNS 那里输入自己的 NAS IP，另外一个和前面的“上游 DNS 服务器”一样，设置一个国内的公共 DNS IP 即可（后面的设备设置 IP 也是同样的），这样就免去了如果我们的 NAS 出问题之后家里的网络也还是正常的。

![图片](./NAS好工具推荐.assets/640-1715518812551-30.webp)

🔺 路由器设置好之后再回到 AdGuard Home 后台主页，看到它的规则已经启用了！因为我们配置的客户端时路由器，连接路由器所有的设备都自动被添加到客户端列表了，非常方便哦！

如果说你路由器设置好之后只要是连接路由器的设备都会自动启用 AdGuard Home 的广告拦截了。不过并不是所有的设备都可以设置自定义 DNS 服务器，所以可以不通过路由器，单独设置自己所使用的设备来执行 AdGuard Home 广告拦截。

**》》安卓手机**

![图片](./NAS好工具推荐.assets/640-1715518812551-31.webp)

🔺 安卓手机菜单上的「无线局域网」选项，长按当前已连接的网络，然后点击「修改网络」，将 IP 设置从“ DHCP” 切换到“静态”，和路由器一样，将两个 IP 填写到下面的“域名”当中。

**》》苹果手机**

![图片](./NAS好工具推荐.assets/640-1715518812551-32.webp)

🔺 点击「设置」，选择「无线局域网」，点击当前已连接网络的名称后面的感叹号，在选择「配置 DNS」，将“自动”改成“手动”之后，在下面输入两个 IP 地址即可。

**》》电脑**

![图片](./NAS好工具推荐.assets/640-1715518812551-33.webp)

🔺 打开「控制面板--网络和 Internet--网络连接」，选择您正在连接的网络设备，右击它并选择「属性」。

![图片](./NAS好工具推荐.assets/640-1715518812551-34.webp)

🔺 在列表中找到「Internet 协议版本 4 (TCP/IPv4)」，选择并再次点击「属性」。

![图片](./NAS好工具推荐.assets/640-1715518812551-35.webp)

🔺 选择「使用下面的 DNS 服务器地址」，并输入前面说的两个 IP 地址。

文章最后，看看我这边 12 小时的 AdGuard Home 拦截记录吧，效果还是很明显的！

![图片](./NAS好工具推荐.assets/640-1715518812551-36.webp)

# Sun-Panel：轻量级且强大的 NAS 导航面板

[【打工日常】云原生之部署私有化、美观的开源 Sun-Panel 导航页 (qq.com)](https://mp.weixin.qq.com/s/s8xzMVvQbLW8AYdtEJ7STQ)

Sun-Panel 是一个功能强大的服务器、NAS 导航面板，Homepage，以及用于浏览器首页的应用，它以简洁的界面、资源占用少以及简单易用而闻名。

![image-20240511181609059](./NAS好工具推荐.assets/image-20240511181609059.png)

## Sun-Panel 的主要特点

- 界面简洁美观，功能强大而不复杂。
- 资源占用微小，适合多种硬件环境。
- 使用操作直观简单，支持可视化操作，甚至可“零代码”使用。
- 提供内网和外网模式的一键切换链接功能。
- 支持 Docker 部署，并且兼容 Arm 系统。
- 允许多账户使用，账户之间互相隔离。
- 可查看和监控系统状态。
- 允许自定义 JavaScript 和 CSS，以满足个性化需求。
- 对于简单的用途，可无需连接外部数据库即可独立运行。
- 提供丰富的图标库供用户选择。

- 1.**高度可定制性**：用户可以根据自己的需求配置主页，调整布局和内容，使之成为个性化的启动页面。
- 2.**性能优化**：采用静态生成和代理处理请求的方式，确保页面加载速度快，并保障安全性。
- 3.**多语言支持**：支持多种语言翻译，使用户可以在自己熟悉的语言环境下使用。
- 4.**集成丰富**：提供 100 多种常见服务的集成，方便用户快速访问各种服务和资源。
- 5.**便捷实用**：提供丰富的信息和实用小部件，如天气、时间、日期等，增强用户体验。

## 安装指南

### 默认账户信息

- 账户：admin@sun.cc
- 密码：12345678

请在第一时间修改默认密码以保证系统安全。

### Docker 部署

要通过 Docker 进行部署，我们需要先拉取 Sun-Panel 的 Docker 镜像，然后运行容器。

首次运行 Docker 容器需要进行挂载目录的配置，目录和用途如下：

- `/app/conf`：用来存放配置文件。
- `/app/uploads`：存放上传的文件。
- `/app/database`：存放数据库文件。
- `/app/runtime`：存放运行日志（不建议挂载）。

拉取镜像并运行的命令：

```bash
docker pull hslr/sun-panel

docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
```

### 二进制安装

前往下载页面：

```bash
https://github.com/hslr-s/sun-panel/releases
```

下载自己对应的平台软件包，解压并使用以下命令运行：

```bash
./sun-panel
```

## 使用

通过访问：`http://your_nas_ip:3002` 进入到导航面板的登录页，输入默认的用户名密码登录到主页。

登录成功后，在首页的右下角可以配置内外网访问模式，以及系统设置界面。

![image-20240511181631477](./NAS好工具推荐.assets/image-20240511181631477.png)

添加一个外部应用，在首页中点击`添加`，在弹出的新界面中可以自定义应用的分组信息、标题、图标、跳转地址以及描述信息和窗口打开方式，如：打开新的窗口或是在当前页面打开等等。

![image-20240511181644624](./NAS好工具推荐.assets/image-20240511181644624.png)

![image-20240511181656085](./NAS好工具推荐.assets/image-20240511181656085.png)

## 使用中遇到问题

在使用过程中，如果遇到任何问题，建议首先检查 Sun-Panel 的 GitHub 仓库的 Issues 区，很可能你遇到的问题已经有解决方案。如果问题仍未解决，不妨在仓库中提出新的 Issue 或加入官方讨论群进行咨询。

总之，Sun-Panel 是一个用户友好的项目，无论是个人使用还是小团队应用，都能很好地满足需要一个轻量级、功能全面的首页导航面板的要求。安装简单、上手容易、自定义能力强是它的突出优点。如果你正在寻找一款既能够管理服务器链接、又能美化浏览器首页的工具，Sun-Panel 绝对是值得一试的选择。

# NAS 好工具推荐

## 外网访问

### 一、DDNS-GO

DDNS-GO 是一款操作简单、设置简单的 DDNS 软件，支持 IPV4 和 IPV6，可以自动更新域名解析到公网 IP，支持域名众多，如阿里云、腾讯云、Dnspod、Cloudflare、Callback、华为云、百度云、Porkbun、GoDaddy、Google Domain 等。

DDNS-GO 还在网络安全方面有一定的保护，可以将 DDNS-GO 仅允许内网访问，不会将各类 KEY 暴露出去。同时，DDNS-GO 还支持 Webhook 通知。

之前安装过套件版 DDNS-GO，但遇到过一次无限增加@tmp/logs 的事件，因此我现在使用 docker 版本，部署在 host 内。

🔻DDNS-GO 刷新动态域名

![图片](./NAS好工具推荐.assets/640-146515.webp)

### 二、frp

frp 是一款公认好用的内网穿透工具，支持 TCP/UDP、HTTP/HTPPS，允许将内网的服务端口转发同样部署了 frp 的服务器上供人使用。

有人会问已经有公网 IP，为什么还需要使用 frp。因为我的 nas 同时共享给了我的朋友使用，而我又不想暴露我自己的域名和端口（因为我开放了很多内容，也懒得设置保护）。

所以我在另外一台有公网 IP 的服务器上部署了 frps，然后将朋友需要使用的端口通过 frpc 进行转发。

![图片](./NAS好工具推荐.assets/640-1714911024471-1.webp)

### 三、群晖 DDNS

群晖 DDNS 是群晖自带的 DDNS 工具，支持 synologe 旗下一系列二级域名的申请，如果自己没有买域名的，可以通过群晖 DDNS 获取到二级域名使用。

同时，群晖 DDNS 还支持 Let's Encrypt 证书的自动申请，支持群晖证书的申请和自动续费，相比于 DDNS-GO 可以让我们解放更多时间。

唯一不足的是，群晖 DDNS 自带服务不包含 aliyun 解析，需要通过第三方服务来解析。

**四、RustDesk**

RustDesk 是一款类似向日葵、teamviwer、todesk 的远程桌面访问软件，我有安装这个套件，目的仅仅是做一个备份，防止我的 DDNS 解析出现意外导致我无法外网访问到我的 NAS。

![图片](./NAS好工具推荐.assets/640-1714911024471-2.webp)

---

## 家庭影音中心

### 一、Jellyfin

部署魔改版的 N 大的 Jellyfin，用于转码播放各类影片。有一篇文章对比过 N 大和 lovechen 的 emby，Jellyfin 魔改版性能提升约 20%以上。

平时家庭的所有电视、电视剧、动画都会放在这里，然后通过 kodi 的 jellyfin 插件投放到我的电视机、坚果 N1U 投影中，方便全家一起看观影。

![图片](./NAS好工具推荐.assets/640-1714911024471-3.webp)

**二、Emby**

Emby 和 Jellyfin 差别不大，相比来说整体使用上个人感觉 Emby 会舒服一些，我安装的 lovechen 大佬的版本。

有的小伙伴又有灵魂问题了，为什么有了 Jellyfin 还需要安装 Emby 呢？

因为我的 Emby 主要用于观看 IPTV，录制相关节目，这样可以确保录制节目的容器不会因为 jellyfin 日常观影的时候瞎折腾导致录制服务失败。

![图片](./NAS好工具推荐.assets/640-1714911024471-4.webp)

**三、Onelist**

Onelist 是一款用于刮削 Alist 聚合网盘影片的工具，他将刮削下来的资源保存的 NAS 本地，而不保存到网盘中，避免出现被封号的问题。

**四、Nastools**

NT 是一款集成了 BTPT 聚合搜索、订阅、资源下载、媒体刮削、资源整理的一条龙式多媒体管理工具，因为某些原因该项目已经不再更新，而且最新版本中已经删除了对 BT 资源搜索的支持。

但是依旧有非官方成员对 NT 版本进行更新，以及增加 BT 资源搜索的功能。新版的 MP 考虑到太多自动化的因素，目前来说，Nastools 这仍然是我最喜欢使用的一款工具，通过对企业微信应用的操作，我可以轻松在手机上实现资源搜索、下载、同步，工具。

![图片](./NAS好工具推荐.assets/640-1714911024471-5.webp)

### 五、Navidrome

Navidrome 是我在使用的音乐客户端，相比对将音乐放在 jellyfin、emby 中，我更喜欢纯粹的软件。

在客户端配合上，目前 IOS+安卓双端都支持的音流 APP 是最适合的，两者打造出一种完美搭配。

![图片](./NAS好工具推荐.assets/640-1714911024471-6.webp)

![图片](./NAS好工具推荐.assets/640-1714911024471-7.webp)

### 六、AutoBangumi

全自动追番工具，搭配蜜柑计划使用的一套自动追番软件，可以生成 rss 订阅计划，然后在 qbittorrent 中一键导入 rrh 任务，就会在新番发布后自动通过 qb 下载到 nas 中了。

![图片](./NAS好工具推荐.assets/640-1714911024471-8.webp)

---

## 家庭影音中心

### 一、Audiobookshelf

Audiobookshelf 是一款自托管的有声读物和播客服务器。

项目支持网页端、安卓端、IOS 端三端同步；支持对有声书进行不同总类的分类。

还有什么比通勤路上解放双手收听有声书来的更舒服的事情呢？

![图片](./NAS好工具推荐.assets/640-1714911024471-9.webp)

**二、Lanraragi**

Lanraragi 是一款专门用于漫画阅读、存档的自托管开源服务器，项目的核心是可以通过插件的形势访问各类大姐姐、小姐姐的漫画，尤其是某熊猫漫画站。

Lanraragi-CN 是汉化版本。Cherry 主要用来看一些 PT 上下载的国漫、日漫，只要配置好存储就不用管了，反正 PT 可以自动追更下载。

![图片](./NAS好工具推荐.assets/640-1714911024471-10.webp)

🔻 支持各类漫画源插件

![图片](./NAS好工具推荐.assets/640-1714911024471-11.webp)

### 三、talebook

这是一款自托管的书籍管理系统，主要用来阅读一些电子书。

![图片](./NAS好工具推荐.assets/640-1714911024472-12.webp)

![图片](./NAS好工具推荐.assets/640-1714911024472-13.webp)

---

## 家庭照片管理中心

### 一、DS photo

群晖原生相册管理工具，从原来的 moments 升级到现在 photo，支持 web、手机端试用。搭配 drive 使用也可以。

胜在稳定，而且备份可以说是最简单，最不会出错的一种方式，支持多用户管理。

![图片](./NAS好工具推荐.assets/640-1714911024472-14.webp)

### 二、MT PHOTOS

我觉得是国内支持力度最好的相册管理软件，尤其是在中文搜索和 AI 上，吊打国外开源项目。项目永久收费 99 元，免费试用 1 个月。唯一的问题就是国内开发商非开源，能坚持多久还是未知数。

建议都可以部署体验一下中文的要素检索照片功能。

![图片](./NAS好工具推荐.assets/640-1714911024472-15.webp)

### 三、PhotoPrism

Photoprism 也是一款很能打的相册管理软件，支持自定义图库目录、缩略图目录、原图目录、转码视频目录，可以分别指定路径，这点很优秀。同时支持原生中文。

缺点就是没有原生的 app，需要使用手机浏览器打开。虽然 github 上安卓的开发版，但是操作上肯定不如 app 手感好。

而且同样的问题，人脸识别很差，这个差不是说东西方差异无法合并人脸，而是把脸怼到相册上，他都识别不出这有一张人脸。

![图片](./NAS好工具推荐.assets/640-1714911024472-16.webp)

### 四、Immich

一款更新速度极快，性能超强，免费开源的照片管理软件。优秀的设计和多端同步共享功能，让 immich 成为最受欢迎的照片管理软件。支持人脸识别，AI 训练，位置、分享等。

但是缺点也是有的，例如亚洲人脸识别不够好，没有中文等问题。反应速度稍慢。

![图片](./NAS好工具推荐.assets/640-1714911024472-17.webp)

## 工具类

### 一、Cloud Sync

搭配 webdav server 工具使用，实现了双 raid0 盘下的热备同步，以及到百度云、谷歌盘的冷备同步，所谓是狡兔三窟两地三中心。

同时我还设置了百度云自动下载，这样网上看到好的百度云资源，只要保存到指定的目录，即可同步回我的 NAS，十分方便。

![图片](./NAS好工具推荐.assets/640-1714911024472-18.webp)

### 二、VMM

NAS 中不可或缺的工具，我利用虚拟机管理了 win10 和威联通项目。并使用 macvlan 连接到了不同的路由器上，这样既可以保障网络流量不冲突，又可以在 nas 网络故障的时候通过其它网络连接到 windows 虚拟机上进行排查。

![图片](./NAS好工具推荐.assets/640-1714911024472-19.webp)

**三、Surveillance Station**

群晖套件中最牛的监控工具了。Cherry 用来配合萤石的监控，可以看看乡下老人在家里是否安全，可以看家门口的动静，可以将店面里的监控存储到 nas 本地长期备份。

即实现了不同监控的统一管理，也节约了大量的云空间、云存储费用。

![图片](./NAS好工具推荐.assets/640-1714911024472-20.webp)

### 四、Webdav Server

Cherry 最最最最喜欢的数据共享协议。相比较于 SMB 在内网局限性，我甚至内网都使用 webdav 来挂载磁盘。

前面提到配合 Cloud Sync 的使用，以及在 windows 平台上配合 raidrive 使用，将 nas 存储全部映射为本地磁盘。

🔻raidrive 免费使用也足够了，让我随时可以管理 nas 空间

![图片](./NAS好工具推荐.assets/640-1714911024472-21.webp)

### 五、Vaultwarden

自托管个人密码管理中心，通过浏览器插件、APP 等形式保存所有的账号密码，我一共记录了 1060 余个，配合 edge 自带的密码管理和 IOS 自带的密码管理，基本能实现所有平台的密码全覆盖。

🔻 网页端

![图片](./NAS好工具推荐.assets/640-1714911024472-22.webp)

🔻 插件端

![图片](./NAS好工具推荐.assets/640-1714911024472-23.webp)

### 六、Web 浏览器

一款用于群晖 NAS 内的嵌套浏览器，可以访问一些群晖上没有对外提供端口监听的服务。

![图片](./NAS好工具推荐.assets/640-1714911024472-24.webp)

### 七、Alist

大名鼎鼎的网盘聚合工具，我聚合了阿里云、百度云、123 网盘、夸克网盘等，方便我统一管理所有网盘内容，配合 Onelist 还能实现网盘资源的海报墙刮削。

同时，我还将 alist 服务，通过 webdav 挂载到我的 nas 上，这样我在 DSfile 就可以直接看到所有网盘信息。

![图片](./NAS好工具推荐.assets/640-1714911024472-25.webp)

当然了，还有我们的小雅 alist，这里我统一归纳到 alist 服务下。

![图片](./NAS好工具推荐.assets/640-1714911024472-26.webp)

### 八、Cookiecloud

我的 cookies 同步自托管工具，前期是作为网站登录信息同步的，目前主要用于 PT 站点的 ck 同步，搭配 MP 使用。

![图片](./NAS好工具推荐.assets/640-1714911024472-27.webp)

### 九、Home Assistant

Cherry 家有小米、天猫精灵、美的、飞利浦等等各种智能家居，手机里的 APP 也是越来越多，越来越拥挤。

搭建 NAS 最初的目的也是为了搭建 HA 对智能家居进行统一的管理，效果的确很棒，是我最常用的项目之一。

![图片](./NAS好工具推荐.assets/640-1714911024472-28.webp)

### 十、QD

最常用的签到、登录工具。社区包含几乎市面上所有的网站登录模板，如贴吧、网抑云等。丰富的定制化模板可供选择，只需要填入自己的账号信息就可以实现自动登录、签到行为。

### 十一、Qinglong

一款强大的签到、脚本运行工具，之前主要用来跑跑强子的脚本，但是自从 2 个号黑了以后就不跑强子了，跑点外卖券、签到脚本啥的，聊胜于无。

![图片](./NAS好工具推荐.assets/640-1714911024472-29.webp)

### 十二、迅雷

迅雷嘛，可以不用，但不能没有。NAS 上迅雷最早也是为了下载一些稀缺的磁链资源使用的。但是现在基本上已经沦为网心云的外壳了。

---

## 容器管理与面板导航类

### 一、Container Manager（docker）

新手必备。第一名当然是群晖自带的容器管理工具了，DSM7.2 更名为 Container Manager。作为管理镜像、网络、卷、堆栈、容器的第一战线，但是经常也会碰到一些奇奇怪怪的问题，例如调用 deamon 失败。

![图片](./NAS好工具推荐.assets/640-1714911024472-30.webp)

### 二、Portainer

大名鼎鼎的容器管理工具，也是最常用的 docker 可视化管理工具。用于日常管理 docker，在逐渐熟悉 cli 和 compose 指令后就用的比较少了。

![图片](./NAS好工具推荐.assets/640-1714911024472-31.webp)

### 三、Dockge

一款专业的 docker-compose 可视化管理面板，相比于 portainer，我更喜欢用 dockge 来管理堆栈和 compose 文件。

![图片](./NAS好工具推荐.assets/640-1714911024473-32.webp)

### **四、Watchtower**

大名鼎鼎的瞭望塔，配合 WUD 互相使用。可自定义镜像更新，能有效防止手动更新镜像带来的麻烦。

### 五、Homepage

[15.3K Star 太酷拉! 开源极简导航页 (qq.com)](https://mp.weixin.qq.com/s/20EyB8tB8IgzNhzxIvjnsQ)

开源地址：https://github.com/gethomepage/homepage

#### 功能描述

> Homepage 拥有许多功能，包括快速搜索、书签管理、天气支持、广泛的集成和小部件、优雅现代的设计，以及对性能的关注，是您理想的一天开始的地方，并在整个一天中成为一个方便的伴侣。

- **快速加载**：网站在构建时静态生成，实现瞬间加载时间。
- **安全性**：所有对后端服务的 API 请求都经过代理处理，以保护您的 API 密钥隐私。同时，社区持续审查以确保安全性。
- **适配性**：支持 AMD64、ARM64、ARMv7 和 ARMv6。
- **国际化**：支持 40 多种语言。
- **服务与 Web 书签**：添加自定义链接到主页。
- **Docker 集成**：容器状态和统计信息。通过标签自动发现服务。
- **服务集成**：包括 100 多个服务集成，涵盖受欢迎的明星和自托管的应用程序。
- **信息与实用小部件**：天气、时间、日期、搜索等。

#### 使用场景

- **个人主页**：个性化配置主页，显示所需的信息和快捷访问链接。
- **工作场景**：作为工作仪表板，集成各种服务和工具，提高工作效率。
- **知识管理**：收集书签、信息小部件，帮助用户管理知识和信息资源。
- **轻量级服务管理**：通过 Docker 集成功能，监控和管理容器状态和服务。

> 总之，Homepage 项目是一个功能丰富、灵活定制、性能优越的应用程序仪表板，为用户提供个性化、高效的 Web 浏览体验，适用于个人和工作场景。

简介、好看、可配置化的自托管导航，支持对 docker、网络、服务等所有内容进行管理。

尤其是在容器支持方面，官方提供了很多的容器深度支持列表，可以看到容器运行细节，例如种子速度、种子数量，jellyfin 最新收看，navidrome 收听列表等。而且还有网络延迟标记，可以看到服务是否异常。

不要看配置麻烦，其实形成标准以后也就是复制黏贴的事情。

Cherry 用它来管理了 2 台软路由，1 台 unraid，1 台群晖，1 个云威联通

![图片](./NAS好工具推荐.assets/640-1714911024473-33.webp)

### 六、Onenav

Cherry 的书签管理工具，办公室、家中的各类浏览器书签进行了统一管理，方便使用，配合 Vaultwarden 实现了所有浏览器的无缝衔接，体验感极好。

![图片](./NAS好工具推荐.assets/640-1714911024473-34.webp)

---

## 娱乐向

### 一、Ps3netsrv

一款 PS3 网络游戏存储中心，PS3 就不需要存储游戏了，直接连接到 nas 上的游戏即可打开，对于内网 2.5G 来说，根本就是小意思。

![图片](./NAS好工具推荐.assets/640-1714911024473-35.webp)

### 二、DOS 游戏集合

nas 上可以部署的 dos 游戏集合，重回童年，没事的时候打开浏览器玩一玩。

![图片](./NAS好工具推荐.assets/640-1714911024473-36.webp)

### 三、摸鱼神器

主要是离开工位上厕所的时候用的，F11 全屏一挂，老板根本不知道我在干啥，也不敢碰我的电脑。

![图片](./NAS好工具推荐.assets/640-1714911024473-37.webp)

---

## 生产力

### 一、Mysql/MaraidDB

不多介绍了，数据中心，很多 docker 都需要使用到 mysql 数据库，这样只需要本地一个 mysql 既可以了，节约一下 nas 的性能。

![图片](./NAS好工具推荐.assets/640-1714911024473-38.webp)

**二、Postgres**

同上，可爱的大象不多介绍了，两大数据库。

### 三、phpMyAdmin

网页端管理 mysql 的利器，不需要本地方案 navicat 等工具了。

![图片](./NAS好工具推荐.assets/640-1714911024473-39.webp)

### 四、Makemkv

网页版本的 makeMKV 工具，可以把原盘提取成 mkv，平时 pt 下载的原盘信息，通过设置就可以自定义的转存为 mkv，然后输出到 jellyfin 等软件中播放，为硬盘节约一点空间。

![图片](./NAS好工具推荐.assets/640-1714911024473-40.webp)

### 五、JupyterLab

在线版本的 Python 运行工具，作为一个普通的办公文员，办公电脑上是不可能有开发环境的，更没有安装 python 环境，也没有安装 PyCharm，想起来就用在线的 JupyterLab 追一追进度。

![图片](./NAS好工具推荐.assets/640-1714911024473-41.webp)

### 六、Siyuan

没啥好说的，思源自托管版本。不过现在思源的 webdav 已经开始收费了，估计要弃用重新使用 obsidian 了？

![图片](./NAS好工具推荐.assets/640-1714911024473-42.webp)

### 七、Git Server

GIT 套件，方便我在 nas 上进行 git 操作。

![图片](./NAS好工具推荐.assets/640-1714911024473-43.webp)

---

## PT

### 一、Qbittorrent

专业的种子下载工具，平时主要用来刷流和联动追更使用，毕竟 QB 在上传连接性上远远好于 transmission。

![图片](./NAS好工具推荐.assets/640-1714911024473-44.webp)

### 二、Transmission

主要用于保种，tr4.0 自带的快速校验功能对于恢复种子数据，辅种都有很大的帮助。

![图片](./NAS好工具推荐.assets/640-1714911024473-45.webp)

### 三、Vertex

圈内大佬开发的影视追更、刷流工具，可以自定义脚本和规则，适配了大部分主流的站点。截图就不放了，而且是 PT 圈内盒子刷流的主要工具。

![图片](./NAS好工具推荐.assets/640-1714911024473-46.webp)

### 四、Iyuu

另一位圈内大佬开发的站点转种、辅种工具，用于多个下载器之间的种子迁移，不同站点间相同 hash 种子的多站点保种。

同时 IYUU 后端的爱语飞飞更是一款微信端的消息发送服务，完全免费，十分好用。

![图片](./NAS好工具推荐.assets/640-1714911024473-47.webp)

### 五、Newptools

另另一位圈内一位新大佬开发的全自动 pt 托管工具，包括站点签到、刷流、数据查阅、订阅等功能，需收费，但是功能很强大，且刷流模式不同于 vertex 等，采用的是 oci 识别。

![图片](./NAS好工具推荐.assets/640-1714911024473-48.webp)

# 100 多个实用 docker 项目大合集，含赚钱、家庭影音、相册、办公团队、工具、免费网盘、AI、NAS 介绍等

[开源&Docker\_什么值得买 (smzdm.com)](https://post.smzdm.com/xilie/118194/)

## Docker 管理类

该类目下的应用均为 docker 管理工具，这里最推荐的是**watchtower**、**dockge**、**AutoCompose**三个。
![图片](./NAS好工具推荐.assets/640-1714912133693-426.webp)

## NAS 操作系统

该类目下是一些开源的 NAS 操作系统，有一些是 img 安装的，有一些是 docker 安装的，但是核心其实都是利用开源项目来部署和成熟 NAS 应用，所以他们的缺点也很统一，就是没有很好的硬件管理支持和文件系统。个人比较推荐的是 cosmos-server，但是纯英文+网络结构超级复杂，不折腾轻用。
![图片](./NAS好工具推荐.assets/640-1714912133693-427.webp)

## 文件管理和网盘

前面说到文件系统，这里就介绍 2 款用于文件管理的网盘项目，其中 spacedrive 还在前期阶段，功能有待开发，而 JmalCloud 则比较成熟了。这一块目前好项目不多，欢迎朋友们留言介绍。
![图片](./NAS好工具推荐.assets/640-1714912133694-428.webp)

## 家庭影音、漫画、小说等

NAS 用户最需要和刚需的功能了，当然还有很多更强大的工具没有介绍，原因大致是因为很多大佬都写过了，所以就不想赘述了。当然，如果有需要的项目，可以留言，Cherry 后续一并更新。
![图片](./NAS好工具推荐.assets/640-1714912133694-429.webp)

## 家庭照片管理类

刚需中的刚需了，照片管理类项目，其它如 photoprism、mtphotos、荔枝等等，等后续有空的时候再补上，而且会另外再做介绍进行对比。
![图片](./NAS好工具推荐.assets/640-1714912133694-430.webp)

## 安全类

该类目下的应用为 NAS、服务器安全，包括网络、访问授权、蜜罐、密码验证等，一般来说 NAS 自带的安全策略应该都够了，如果对安全比较在意的，可以尝试安装雷池和堡垒机。
![图片](./NAS好工具推荐.assets/640-1714912133694-431.webp)

## 个人学习类

好的 docker 不仅能作为家庭使用，必须还要能在个人提升上给予一定的帮助，以下几个项目都是从时间分配（小猪你好）、习惯养成、知识管理等方面提供帮助，都很建议安装尝试。
![图片](./NAS好工具推荐.assets/640-1714912133694-432.webp)

## 办公团队协作类

该类目应用基本都是针对团队使用提供服务的，最常见的就是 to-do 工具、CRM、ERP、IT 管理等。具体使用与否就仁者见仁智者见智了。Cherry 这里推荐几款比较有意思的是**vikunja**、**affine**、**showdoc**、**heimdallr**。
![图片](./NAS好工具推荐.assets/640-1714912133694-433.webp)

## 个人与家庭管理类

该类目的应用属于个人管理、个人财务管理、家庭物资管理类，最火的应该是**homebox**、**wallos**这两款项目，最实用的应该是视频监控的**kerberos-agent**这款项目。
![图片](./NAS好工具推荐.assets/640-1714912133694-434.webp)

## AI 与生产力

2024 年，AI 技术井喷式爆发，而曾经只能云端运行的 AI 服务也纷纷支持在本地部署并使用了。因此 AI 和生产力开始紧密结合。Cherry 没有太过深入 AI 项目，因为显卡太差了，所以只能体验一些其它的项目分享给大家。
![图片](./NAS好工具推荐.assets/640-1714912133694-435.webp)

## 工具类

所有无法细分的应用都放在了这里，包含在线应用、消息通知、游戏娱乐、个人博客/图床等等乱七八糟的内容。比较推荐和实用的项目，如**gotify/bark**、**qd**、**umami**、组网工具等。
![图片](./NAS好工具推荐.assets/640-1714912133694-436.webp)

## 网赚类

熟话说得好，要赚钱就得赚想赚钱的人的钱，以下是 Cherry 找到的一些比较适合个人部署可用于一定范围内收费网赚的项目，当然重要的不是项目本身而是赚钱的途径，工具只是工具。
喝水不忘挖井人，有兴趣的朋友可以加 Cherry 带带哦~
![图片](./NAS好工具推荐.assets/640-1714912133694-437.webp)

## 我的 NAS 推荐

这里简单介绍一下 Cherry 日常使用的几台 NAS，以及为何选择这些 NAS。

### 核心设备——群晖 DS920

这是 Cherry 第一台 NAS，服役了好多年了，经典的 J4125cpu+24G 内存，搭配 517 实现 9 块 18T 盘塞满，主要用来玩玩 PT 的，日常使用的 docker 和个人资料，基本都存放在这里，因此也是 Cherry 感情最深的一台设备，但是 J4125 的性能瓶颈就在这里，容器多了 cpu 常年 90%徘徊，在部署新项目的时候特别不方便。

现在买群晖 920 就属于旧品了，建议直接上群晖 224+最新型号。

### 二代目核心设备——威联通 QNAP464C2

正因为前面提到群晖 920 服役时间过长问题，Cherry 在入手了一台 N5105 的软路由后，又将目光看向了搭配同时期 N5095 的 QNAP464C2，作为 NAS 届的常青树，QNAP 的系统其实一直是 Cherry 所喜爱的，相比于群晖，威联通的系统更值得深入使用和思考，功能点更丰满。

### 家庭成员利器——绿联 DX4600pro

在家庭成员使用过程中，操作更简单，面向群众基础更广的绿联私有云映入眼帘。父母通过 APP 方式直接上传备份一些教研资料和照片十分方便，同时通过自带的有声书 app 还能让父母闲暇之余听听小说之类。

### 生产 NAS——自建 Unraid

回到项目生产中，考虑在项目部署过程中，经常会出现启动错误、容器异常、版本迭代等问题，这些问题统统需要强大的 cpu 和多线程来解决，因此就使用双路洋垃圾组建了一台 unraid，用于生产环境使用，也是我的项目部署主力机。
![图片](./NAS好工具推荐.assets/640-1714912133694-438.webp)

# 其他 Docker 应用

## 神级私有云网盘，支持 offcie 在线编辑，个人博客

JmalCloud 是一款私有云存储网盘项目，支持本地存储和 OSS 对象存储，兼容在线 office 编辑和文件浏览，网盘支持以 webdav 源使用。

同时，JmalCloud 也是一款简易的博客系统，支持文章发布、独立页面管理、外观、分类管理。

不论是网盘还是博客模块，都充分给与了外观配置和修改的权限，可以通过自定义配置修改站点名字、icon、背景、导航、归档、分类、标签、页眉页脚等。

🔻 网盘首页（演示站点）

![图片](./NAS好工具推荐.assets/640-1714912472166-537.webp)
🔻 博客首页（演示站点）
![图片](./NAS好工具推荐.assets/640-1714912472166-538.webp)

项目地址：https://github.com/jamebal/jmal-cloud-view

**项目特性**

> ✅ 支持 OSS,阿里云 OS、腾讯云 OSS 和 MinIO
> ✅ 支持图片,音频,视频等文件的在线预览
> ✅ 支持 Word、Excel、PPT、流程图和思维导图的编辑和预览
> ✅ 支持 x86、arm64(Centos/Debian/Ubuntu/macOS)
> ✅ 提供强大的在线文本编辑器
> ✅ 支持超大文件上传，断点续传
> ✅ 支持 WebDAV

### 系统部署

#### 一、docker-compose.yaml 代码

🔻 新建一个文件夹，可以用项目为名字。在文件夹下新建一个 docker-compose.yaml 文件，将下面代码复制进去。

```yaml
version: "3"
services:
  jmalcloud:
    container_name: jmalcloud_server
    image: jmal/jmalcloud:latest
    environment:
      MONGODB_URI: mongodb://mongo:27017/jmalcloud
      TZ: Asia/Shanghai
    volumes:
      - ./docker/jmalcloud/files:/jmalcloud/files/
    restart: unless-stopped
  mongo:
    container_name: jmalcloud_mongodb
    image: mongo:4.4
    environment:
      TZ: Asia/Shanghai
    volumes:
      - ./docker/jmalcloud/mongodb/data/db:/data/db
    restart: unless-stopped
    command: --wiredTigerCacheSizeGB 0.5
  nginx:
    container_name: jmalcloud_nginx
    image: jmal/jmalcloud-nginx:latest
    ports:
      - 7070:80 #网盘地址
      - 7071:8089 #博客地址
    environment:
      TZ: Asia/Shanghai
    links:
      - jmalcloud
      - office
      - drawio-webapp
    restart: unless-stopped
  office: # Optional
    container_name: jmalcloud_office
    image: onlyoffice/documentserver:7.0.0.132
    environment:
      TZ: Asia/Shanghai
    restart: unless-stopped
  drawio-webapp: # Optional
    container_name: jmalcloud_drawio
    image: jgraph/drawio:20.2.3
    environment:
      TZ: Asia/Shanghai
    restart: unless-stopped
```

#### 二、SSH 部署

```bash
# 来到文件夹
cd /volume1/docker/{item}
# 启动容器
docker-compose up -d
```

#### 三、群晖部署 compose

打开 container manager，选择项目，点击新建，选择 penpot 路径，点击下一步即可
![图片](./NAS好工具推荐.assets/640-1714912472166-539.webp)

#### 四、威联通部署 compose

打开 container station，创建应用程序，复制代码验证后部署即可
![图片](./NAS好工具推荐.assets/640-1714912472167-540.webp)

### 系统使用

#### 一、网盘功能

🔻 网盘整体功能（点击左上角 logo 进入网盘页面），支持文件分类。根目录为本地存储，OSS 存储为独立子目录。
![图片](./NAS好工具推荐.assets/640-1714912472167-541.webp)
🔻 支持在线打开文档查阅，也可以看到博客功能里写的 md 格式的文章
![图片](./NAS好工具推荐.assets/640-1714912472167-542.webp)
![图片](./NAS好工具推荐.assets/640-1714912472167-543.webp)
🔻 用户权限管理（点击右上角头像选择网盘设置），系统自带了超管、系统管理员、博客访客、博客作者、博客管理员、网盘管理员、网盘用户等，可以自定义用户权限。
![图片](./NAS好工具推荐.assets/640-1714912472167-544.webp)
🔻 网盘设置，可以开启图片 webp 格式降低硬盘使用，支持开启 LDAP 认证。
![图片](./NAS好工具推荐.assets/640-1714912472167-545.webp)
🔻 支持作为 webdav 原地址，左下角可以直接复制 webdav 地址
![图片](./NAS好工具推荐.assets/640-1714912472167-546.webp)

#### 二、配置 OSS 存储库（以 minio 为例）

🔻 配置 minio，自建一个 minio 仓库，登录后新建 bucket。
![图片](./NAS好工具推荐.assets/640-1714912472167-547.webp)
🔻 新建一个 access key 和 secert key
![图片](./NAS好工具推荐.assets/640-1714912472167-548.webp)
🔻 增加默认 region 名称，修改为 local（这个名字随意）
![图片](./NAS好工具推荐.assets/640-1714912472167-549.webp)
🔻 支持阿里云、腾讯云、Minio 自建库
![图片](./NAS好工具推荐.assets/640-1714912472167-550.webp)
🔻 编辑网盘内的 OSS 地址
![图片](./NAS好工具推荐.assets/640-1714912472167-551.webp)

#### 三、博客功能

🔻 首先修改博客超链接，这里选择自己的外部 blog，也可以选择系统自带的博客
![图片](./NAS好工具推荐.assets/640-1714912472167-552.webp)
🔻 文章管理功能
![图片](./NAS好工具推荐.assets/640-1714912472167-553.webp)
🔻 文章编辑页面，支持 markdown 书写
![图片](./NAS好工具推荐.assets/640-1714912472167-554.webp)

#### 四、密码重置

```bash
# 1. 重置密码
docker exec -it jmalcloud_mongodb mongo jmalcloud --eval "db.getCollection('user').update({ 'creator': true }, {\$set: { 'password': '1000:c5b705ea13a1221f5e59110947ed806f8a978e955fbd2ed6:22508de12228c34a235454a0caf3bcaa5552858543258e56' }}, { 'multi': false, 'upsert': false })"
# 2. 重启容器
docker restart jmalcloud_server
# 重置后的密码为: jmalcloud
```

## 多功能自动签到、自动打卡系统，还能约茅台、签到贴吧

之前，Cherry 给大家介绍过一款好用的签到软件——QD，以及一款预约 maotai 的项目——Imaotai。

相关文章如下，后来评论区有留言，提到一个轻量级的签到项目——dailycheckin。

该项目支持使用 docker、青龙部署，全程使用配置文件进行项目配置，包含签到站点、消息通知、定时任务、多账号等。

🔻 下面是这个项目支持的签到平台，各位值友可以对照看看，却有需要的可以部署一下这个项目，毕竟配置 json 文档复杂程度比 webui 肯定要高很多。

![图片](./NAS好工具推荐.assets/640-1714912677276-591.webp)

### 系统部署（docker 篇）

#### 一、新建文件夹与文档

🔻 以群晖为例，其它 NAS 相同，新建文件夹 dailycheckin，在文件夹下新建 config，logs，cron 三个文件夹。

最终路径包含/volume1/docker/dailyucheckin/config(或 logs，或 cron)

![图片](./NAS好工具推荐.assets/640-1714912677276-592.webp)

#### 二、修改定时任务脚本

🔻 在./cron 文件夹下新建一个文件 crontab_list.sh 文件，也可通过以下链接下载一个示例文件。

```bash
https://fastly.jsdelivr.net/gh/sitoi/dailycheckin@main/docker/crontab_list.sh
```

🔻 文件内容如下，根据自己的需要调整定时触发条件

```bash
##############默认任务##############
# 每 12 小时更新 Pipy 包，如果不需要更新 pypi 包请注释掉下面这行
0 */12 * * * echo "定时任务更新依赖..." && pip install dailycheckin --upgrade --user >> /dailycheckin/logs/update-pypi.log 2>&1
# 每天的 23:50 分清理一次日志
50 23 */2 * * rm -rf /dailycheckin/logs/*.log

##############每日签到一次任务##############
# 每日签到(9:00 执行全部签到)
0 9 * * * cd /dailycheckin && dailycheckin >> /dailycheckin/logs/dailycheckin.log 2>&1
```

#### 三、新增 config.json 配置文件

该部分篇幅比较长，所以我单独写了一节，可以看下面的内容。

这里我们可以就在./config 文件夹下新建一个空的 config.josn 即可，也可通过以下链接下载一个示例文件。

```bash
https://fastly.jsdelivr.net/gh/sitoi/dailycheckin@main/docker/config.template.json
```

#### 四、通过 docker Cli 部署

🔻 通过 ssh 访问 nas，在指令栏输入以下指令

```bash
docker run -d
--name dailycheckin \
-v $(pwd)/config:/dailycheckin/config \    #上面自定义的config文件夹
-v $(pwd)/logs:/dailycheckin/logs \    #上面自定义的logs文件夹
-v $(pwd)/cron:/dailycheckin/cron \    #上面自定义的cron文件夹
--restart always \
sitoi/dailycheckin:latest
```

#### 五、通过群晖任务计划部署

🔻 控制面板——任务计划——计划的任务——用户定义的任务

将上面的代码复制进去，点击运行即可。**注意每一行最后都要加反斜杠**

![图片](./NAS好工具推荐.assets/640-1714912677276-593.webp)

#### 六、Docker 运行指令

```bash
#Docker命令
#运行全部脚本
docker exec -it dailycheckin dailycheckin
#运行指定的多个平台脚本，用「空格」分开
docker exec -it dailycheckin dailycheckin --include MUSIC163 BAIDU
#运行指定的多个平台脚本（排除某些平台），用「空格」分开
docker exec -it dailycheckin dailycheckin --exclude MUSIC163 BAIDU
#更新pypi
docker exec dailycheckin sh /dailycheckin/default_task.sh
```

---

### 系统部署（青龙篇）

#### 一、新增依赖

![图片](./NAS好工具推荐.assets/640-1714912677276-594.webp)

![图片](./NAS好工具推荐.assets/640-1714912677276-595.webp)

```bash
Linux依赖：gcc g++ make libffi-dev openssl-devPython3依赖：dailycheckin
```

#### 二、新增脚本

🔻 打开脚本管理，新建一个脚本叫 config.json

![图片](./NAS好工具推荐.assets/640-1714912677276-596.webp)

![图片](./NAS好工具推荐.assets/640-1714912677276-597.webp)

#### 三、修改脚本文件

具体方法参照后文的 config.json 配置文件内容

#### 四、运行脚本

🔻 运行脚本的时候可以设置定时任务

![图片](./NAS好工具推荐.assets/640-1714912677276-598.webp)

🔻 脚本指令

```bash
#青龙命令
#运行全部脚本
task dailycheckin
#运行指定的多个平台脚本，用「空格」分开
task dailycheckin --include MUSIC163 BAIDU
#运行指定的多个平台脚本（排除某些平台），用「空格」分开
task dailycheckin --exclude MUSIC163 BAIDU
#更新
task pip3 install dailycheckin --upgrade
```

### config.json 配置文件

所有的配置文件，都在 config.json 使用{}开始，所有内容都在一个{}内。

建议下载示例 json 修改

```bash
https://fastly.jsdelivr.net/gh/sitoi/dailycheckin@main/docker/config.template.json
```

JSON 校验网站：https://www.json.cn/

#### 一、通知模块

🔻 支持列表如下，不需要的通知方式留空就可以了，每一行之后都要有,进行分割。

这个如果每个都要介绍的话得写一个长篇了，可以参照我之前介绍的几篇推送相关的文章，举一反三即可。

![图片](./NAS好工具推荐.assets/640-1714912677276-599.webp)

```bash

#bark
  "BARK_URL": "",
#coolpush
  "COOLPUSHEMAIL": true,
  "COOLPUSHQQ": true,
  "COOLPUSHSKEY": "",
  "COOLPUSHWX": true,
#钉钉
  "DINGTALK_ACCESS_TOKEN": "",
  "DINGTALK_SECRET": "",
#飞书
  "FSKEY": "",
#pushplus
  "PUSHPLUS_TOKEN": "",
  "PUSHPLUS_TOPIC": "",
#Qmsg酱
  "QMSG_KEY": "",
  "QMSG_TYPE": "",
#企业微信应用&企微机器人
  "QYWX_AGENTID": "",
  "QYWX_CORPID": "",
  "QYWX_CORPSECRET": "",
  "QYWX_KEY": "",   #企业微信机器人，推送 webhook 后面的 key
  "QYWX_MEDIA_ID": "",
  "QYWX_TOUSER": "",
#TG
  "TG_API_HOST": "",  #Telegram api 自建的反向代理地址
  "TG_BOT_TOKEN": "",  #机器人的token，问机器人father
  "TG_PROXY": "",   #代理地址
  "TG_USER_ID": "",   #用户的token，从用户机器人获取
#server酱
  "SCKEY": "",
#新server酱
  "SENDKEY": "",
#通用配置
  "MERGE_PUSH": "",  #true: 将推送消息合并；false: 分开推送
```

#### 二、全平台 config.json 配置文档

🔻 每一个平台都通过[]关闭，每一个[]都需要使用英文逗号分割，最后一个[]不需要英文逗号。

💛 不同平台多账号只需要在平台名字下，直接增加{}内容即可，每一个{}都需要使用英文逗号分隔，最后一个{}结束不需要英文逗号。

💛 以下文档中的 cookie 等内容都提到了关键值，如果找不到，直接整个 cookie 复制进去也可以。

```bash
 "ACFUN": [
    {
      "password": "Sitoi",
      "phone": "18888xxxxxx"
    },
    {
      "password": "多账号示例，格式和上面相同，注意分割有一个英文逗号",
      "phone": "多账号示例，格式和上面相同，注意这里结束了以后没有英文逗号"
    }
  ],
  "ALIYUN": [
    {
      "refresh_token": "599dcf65xxxxxx"
    }
  ],
  "AOLAXING": [
    {
      "cookie": "BT_AUTO_tt_common=; Hm_lpvt_7fc3681c21a26a2022ae0ca72e2d6fa5=xxxxxx; BT_LOGIN_tt_common=:187xxxxxx; Hm_lvt_7fc3681c21a26a2022ae0ca72e2d6fa5=xxxxxx;"
    }
  ],
  "BAIDU": [
    {
      "data_url": "https://fastly.jsdelivr.net/gh/Sitoi/Sitoi.github.io/baidu_urls.txt",
      "submit_url": "http://data.zz.baidu.com/urls?site=https://sitoi.cn&token=xxxxxx",
      "times": 10
    }
  ],
  "BILIBILI": [
    {
      "coin_num": 0,
      "coin_type": 1,
      "cookie": "_uuid=xxxxxx; rpdid=xxxxxx; LIVE_BUVID=xxxxxx; PVID=xxxxxx; blackside_state=xxxxxx; CURRENT_FNVAL=xxxxxx; buvid3=xxxxxx; fingerprint3=xxxxxx; fingerprint=xxxxxx; buivd_fp=xxxxxx; buvid_fp_plain=xxxxxx; DedeUserID=xxxxxx; DedeUserID__ckMd5=xxxxxx; SESSDATA=xxxxxx; bili_jct=xxxxxx; bsource=xxxxxx; finger=xxxxxx; fingerprint_s=xxxxxx;",
      "silver2coin": true
    }
  ],
  "IMAOTAI": [
    {
      "city": "上海市",
      "lat": "3.025626",
      "lng": "3.025626",
      "mobile": "18888xxxxxx",
      "province": "上海市",
      "token": "eyJxxxxxx",
      "userid": "1xxxxxx4"
    }
  ],
  "IQIYI": [
    {
      "cookie": "__dfp=xxxxxx; QP0013=xxxxxx; QP0022=xxxxxx; QYABEX=xxxxxx; P00001=xxxxxx; P00002=xxxxxx; P00003=xxxxxx; P00007=xxxxxx; QC163=xxxxxx; QC175=xxxxxx; QC179=xxxxxx; QC170=xxxxxx; P00010=xxxxxx; P00PRU=xxxxxx; P01010=xxxxxx; QC173=xxxxxx; QC180=xxxxxx; P00004=xxxxxx; QP0030=xxxxxx; QC006=xxxxxx; QC007=xxxxxx; QC008=xxxxxx; QC010=xxxxxx; nu=xxxxxx; __uuid=xxxxxx; QC005=xxxxxx;"
    }
  ],
  "KGQQ": [
    {
      "cookie": "muid=xxxxxx; uid=xxxxxx; userlevel=xxxxxx; openid=xxxxxx; openkey=xxxxxx; opentype=xxxxxx; qrsig=xxxxxx; pgv_pvid=xxxxxx;"
    }
  ],
  "MIMOTION": [
    {
      "max_step": "20000",
      "min_step": "10000",
      "password": "Sitoi",
      "phone": "18888xxxxxx"
    }
  ],
  "SMZDM": [
    {
      "cookie": "__ckguid=xxxxxx"
    }
  ],
  "TIEBA": [
    {
      "cookie": "BIDUPSID=xxxxxx; PSTM=xxxxxx; BAIDUID=xxxxxx; BAIDUID_BFESS=xxxxxx; delPer=xxxxxx; PSINO=xxxxxx; H_PS_PSSID=xxxxxx; BA_HECTOR=xxxxxx; BDORZ=xxxxxx; TIEBA_USERTYPE=xxxxxx; st_key_id=xxxxxx; BDUSS=xxxxxx; BDUSS_BFESS=xxxxxx; STOKEN=xxxxxx; TIEBAUID=xxxxxx; ab_sr=xxxxxx; st_data=xxxxxx; st_sign=xxxxxx;"
    }
  ],
  "V2EX": [
    {
      "cookie": "_ga=xxxxxx; __cfduid=xxxxxx; PB3_SESSION=xxxxxx; A2=xxxxxx; V2EXSETTINGS=xxxxxx; V2EX_REFERRER=xxxxxx; V2EX_LANG=xxxxxx; _gid=xxxxxx; V2EX_TAB=xxxxxx;",
      "proxy": "使用代理的信息，无密码例子: http://127.0.0.1:1080 有密码例子: http://username:password@127.0.0.1:1080"
    }
  ],
  "YOUDAO": [
    {
      "cookie": "JSESSIONID=xxxxxx; __yadk_uid=xxxxxx; OUTFOX_SEARCH_USER_ID_NCOO=xxxxxx; YNOTE_SESS=xxxxxx; YNOTE_PERS=xxxxxx; YNOTE_LOGIN=xxxxxx; YNOTE_CSTK=xxxxxx; _ga=xxxxxx; _gid=xxxxxx; _gat=xxxxxx; PUBLIC_SHARE_18a9dde3de846b6a69e24431764270c4=xxxxxx;"
    }
  ]
```

## 基于 alist 挂载的家庭影音媒体刮削工具：云盘也能拥有海报墙

### 前言

OneList 是一款专门针对 alist 开发的海报墙刮削软件，它将媒体元数据保存在本地，以避免频繁上传网盘导致的网盘封禁行为。

项目：GitHub – msterzhang/onelist

### 系统部署

#### 一、docker run 指令

🔻 通过 SSH 工具访问 NAS，输入以下指令

```bash
docker run -itd
--name onelist
-e PUID=0
-e PGID=0
-e TZ=Asia/Shanghai
-p 56789:5245    #自定义端口
-v /volume1/docker/onelist/config/:/config
--add-host api.themoviedb.org:13.224.161.90
msterzhang/onelist:latest
```

#### 二、使用群晖任务计划部署

🔻 将上述 docker run 代码复制到任务计划中执行即可。
![图片](./NAS好工具推荐.assets/640-1714913069775-618.webp)

### 系统使用

#### 一、申请 TMDB API

OneList 使用的是 TMDb 进行检索刮削，所以我们需要先申请一个 TMDb 的 APIkey。

如果无法访问的可以通过修改 host 等方式进入。之后进入个人页面账号设置，选择 API 页面。

对于第一次进入 API 页面的朋友，最下面会显示 API 申请，选择 Developer，填入自己的服务接口信息即可。

因为我已经申请过了，如下图红框中的就是我们需要的 API 密钥。
![图片](./NAS好工具推荐.assets/640-1714913069775-619.webp)

#### 二、修改配置文件

🔻 首先暂停 onelist 容器，然后来到`/volume1/docker/onelist/config`目录下，修改`config.env`文件。一般来说我们只需要修改如下三个选项即可，填入自己需要的账号、密码、API key。其它的可以根据实际情况调整。

```bash
账号：UserEmail=xxxx.@qq.com
密码：UserPassword=xxxxx
API key：KeyDb=22f10ca52f111111ac7fe064ebbcf697
```

#### 三、配置媒体库

🔻 登陆系统以后，来到左侧栏——媒体中心，点击新增。

![图片](./NAS好工具推荐.assets/640-1714913069775-620.webp)🔻 弹框后，给媒体库取名，选择类型 TV/MOVIE，下面阿里云 open 勾选上（需要 alist 里选择阿里云 open）。

域名：Alist 的访问地址，如http://192.168.0.1:1234，确保抬头有http/https，最后没有`/`字符

账号：Alist 的账号，如 admin

密码：Alist 的密码，如 123456

![图片](./NAS好工具推荐.assets/640-1714913069775-621.webp)

#### 四、挂在资源目录

🔻 点击挂载目录，选择新增挂载，在目录这里输入 Alist 里的网址路径。
![图片](./NAS好工具推荐.assets/640-1714913069775-622.webp)

🔻 如果搞不清楚可以打开你的 alist 看看后缀是什么。根据图例的黄线，我们应该填写`/阿里云盘/电视剧/神秘博士`

![图片](./NAS好工具推荐.assets/640-1714913069775-623.webp)
![图片](./NAS好工具推荐.assets/640-1714913069776-624.webp)

#### 五、其它设置

##### （一）修改 host，增加 TMDb 可连接性

因为一些网络问题，无法连接 TMDb 或 api 接口的，可以通过修改 host 方法增加连接性，具体就是在容器开启状态进入容器修改 host 文件。

```bash
# 进入容器
docker exec -it onelist /bin/bash
# 修改host文件
vim /etc/hosts
# 将下面的ip 域名复制到hosts文件里
13.224.161.90 api.themoviedb.org
104.16.61.155 image.themoviedb.org
13.35.67.86 api.themoviedb.org
54.192.151.79 www.themoviedb.org
13.225.89.239 api.thetvdb.com
13.249.175.212 api.thetvdb.com
13.35.161.120 api.thetvdb.com
13.226.238.76 api.themoviedb.org
13.35.7.102 api.themoviedb.org
13.225.103.26 api.themoviedb.org
13.226.191.85 api.themoviedb.org
13.225.103.110 api.themoviedb.org
52.85.79.89 api.themoviedb.org
13.225.41.40 api.themoviedb.org
13.226.251.88 api.themoviedb.org
```

##### （二）命名规则

🔻 电视剧命名规则
![图片](./NAS好工具推荐.assets/640-1714913069776-625.webp)
🔻 电影命名规则
![图片](./NAS好工具推荐.assets/640-1714913069776-626.webp)

### 最后

这是我觉得该工具唯一欠缺的地方，就是命名要求比较严格，官方推荐电影资源直接保存为电影名称，电视剧资源保存为【名字 S01E01】这样的格式。这对用户来说无疑大大增加了工作量。

尤其是现在 BT/PT/云盘中，大量采用 0days 命名规则的种子，都无法正常刮削成功，由衷的期待作者可以在下一版本中改进，这会极大提高用户体验感。

而且电影刮削，我设置了惊奇队长，惊奇队长 1，都会刮削到惊奇队长 2 中。似乎和 TMDb 的显示顺序相关，这一点需要通过 TMDb 的搜索栏去尝试了。

## 开源自建 Office 办公套件

### 项目地址

GitHub：https://github.com/LibreOffice

### 项目简介

> LibreOffice 是一款免费、开源的办公套件，支持多种操作系统，包括 Windows、Mac OS 和 Linux。它提供了与 Microsoft Office 相似的多个办公应用程序，包括文字处理、电子表格、演示文稿、绘图、数据库等，但更注重开源、免费和跨平台的特点。

### 功能

```bash
Calc（电子表格）：用于创建和编辑电子表格，具有强大的数据处理和图表功能。

Impress（演示文稿）：用于制作幻灯片，支持多种动画效果和演示方式。

Draw（绘图）：用于绘制矢量图形和流程图，支持多种图形格式和导出选项。

Base（数据库）：用于创建和管理数据库，支持多种数据库格式和查询语言。

Math（数学公式编辑器）：用于编辑和插入数学公式，支持多种数学符号和格式。
```

### 部署安装

#### 安装 Docker

```bash
curl -sSL https://get.docker.com/ | sh
```

#### 安装 Docker-compose

```bash
下载 Docker-Compose 二进制包
curl -L https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

给文件增加执行权限
chmod +x /usr/local/bin/docker-compose

检查 Docker-Compose 版本
docker-compose -v
```

#### Docker 安装服务

```bash
sudo docker run -d \
  --name=libreoffice \
  --security-opt seccomp=unconfined \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Etc/UTC \
  -p 3000:3000 \
  -p 3001:3001 \
  -v /home/config:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/libreoffice:latest
```

#### 也可以用 Docker-compose 安装服务

```bash
vim docker-compose.yml

version: "3"
services:
  libreoffice:
    image: lscr.io/linuxserver/libreoffice:latest
    container_name: libreoffice
    security_opt:
      - seccomp:unconfined #optional
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
    volumes:
      - /home/config:/config
    ports:
      - 3000:3000
      - 3001:3001
    restart: unless-stopped

启动服务
docker-compose up -d
```

### Demo 访问

```bash
http://ip:3000
```

![图片](./NAS好工具推荐.assets/640-1714913234444-645.webp)

## QD：自动打卡、自动签到工具神器，搞定你大部分登录与签到

今天介绍一下我最常用的自助任务（签到任务）执行工具，也是原来的 qiandao 的新框架版本，TTP 请求定时任务自动执行框架——QD

项目地址：[qd-today/qd: HTTP 请求定时任务自动执行框架 base on HAR Editor and Tornado Server (github.com)](https://github.com/qd-today/qd)

**项目特性**

> \- 基于 Har
> 仅需上传通过抓包得到的 Har, 即可制作框架所需的 HTTP 任务模板。
> \- Tornado 服务端
> 使用 Tornado 作为服务端, 以实现异步响应前端请求和发起 HTTP 请求。
> \- API & 插件支持
> 内置多种 API 和过滤器用于模板制作, 后续将提供自定义插件支持。
> \- 开源项目
> QD 是一个基于 MIT 许可证的开源项目。

### 系统部署

#### 一、docker run 代码

🔻 通过 SSH 工具访问 NAS，输入以下指令

```bash
docker run -itd
--name qd
-p 56789:80
-v /volume1/docker/qd/config:/usr/src/app/config
qdtoday/qd:latest
```

🔻 环境变量

```bash

**DB_TYPE**
#需要使用MySQL时设置为'mysql'，默认为"sqlite"
**JAWSDB_MARIA_URL**
#需要使用MySQL时,设置为 (mysql://用户名:密码@hostname:port/数据库名?auth_plugin=)
**PUSH_BATCH_SW**
# 是否允许开启定期推送 QD 任务日志, 默认为True
**SUBSCRIBE_ACCELERATE_URL**
#订阅加速方式或地址, 用于加速公共模板更新, 仅适用于 GitHub，默认为jsdelivr_cdn
```

#### 二、使用群晖任务计划部署

🔻 将上述 docker run 代码复制到任务计划中执行即可。
![图片](./NAS好工具推荐.assets/640-1714913323621-648.webp)

### 系统使用

#### 一、系统初始化

🔻 首次登录需要注册账号，该账号即为管理员账号，注册完成以后要记得**先登出再登入**，才能获取管理员权限。
![图片](./NAS好工具推荐.assets/640-1714913323621-649.webp)

#### 二、共用模板（如果打不开的可以更换 github 源）

🔻 该功能中大部分都是网友分享的第三方通用模板，包括了基本上所有的 PT 站点、贴吧、B 站、部分论坛等，以网易云为例。
![图片](./NAS好工具推荐.assets/640-1714913323622-650.webp)

🔻 将公用模板导入到我的模板，点击新建，可以看到只有一项 Cookie 需要填写，可以通过浏览器工具 F12 或者插件获取到 ck。

![图片](./NAS好工具推荐.assets/640-1714913323622-651.webp)

🔻 填写 cookies 以后，点击测试，如果没问题，上面会提示运行成功，这个时候点击保存即可。

![图片](./NAS好工具推荐.assets/640-1714913323622-652.webp)

#### 三、手动导入

🔻 以一个论坛为例，打开论坛，按 F12 进入浏览器开发工具，点击网络，点击左下角清除所有记录，点开左边的录制按钮，勾选保留日志。
![图片](./NAS好工具推荐.assets/640-1714913323622-653.webp)

🔻 然后点击需要完成的任务，这里第一个出现的连接就是我们需要找到的，右键，选择最下面的【将所有内容另存为 HAR】

![图片](./NAS好工具推荐.assets/640-1714913323622-654.webp)
🔻 然后回到系统首页，点击我的模板旁边的加号，在新页面中选择刚才另存的 HAR 文件
![图片](./NAS好工具推荐.assets/640-1714913323622-655.webp)
🔻 完成后，双击进入对应的 URL，将请求头中的 cookies 删除，更改为变量{{cookie}}，保存
![图片](./NAS好工具推荐.assets/640-1714913323622-656.webp)
🔻 保存以后，点击测试，如果填入了对应的变量，如 cookie，那么就会弹出来让你填入 ck，再从 F12 获取到 ck 后填入进行测试。可以看到测试完成，我们就进行保存。
![图片](./NAS好工具推荐.assets/640-1714913323622-657.webp)
🔻 再次回到首页，在我的任务右侧点击+新建任务，这里就有我们新增的模板，填入对应 ck 和频率保存即可。
![图片](./NAS好工具推荐.assets/640-1714913323622-658.webp)

#### 四、定时任务

🔻 点击每个任务后面的定时，可以修改任务执行频率和时间。

![图片](./NAS好工具推荐.assets/640-1714913323622-659.webp)

#### 五、消息推送

🔻 点击系统最上面的工具箱，就能打开推送相关的服务，还能自定义推送服务。

![图片](./NAS好工具推荐.assets/640-1714913323622-660.webp)
🔻 支持 Bark，Server 酱，WxPusher，企微应用，企微 Webhook，TGbot，钉钉 Bot，邮箱等。
🟡 内置推送模板
![图片](./NAS好工具推荐.assets/640-1714913323622-661.webp)
🟡 自定义推送模板
![图片](./NAS好工具推荐.assets/640-1714913323622-662.webp)
🔻 设置完推送的 API 接口以后，点击推送设置，里面可以选择推送的服务地址，以及推送策略和时间。

## 小米/红米音箱新源，支持 B 站、油管音乐

### 系统使用

因为 Cherry 没有小米音箱，无法连接到 webui，所以这里就不介绍 webui 了，介绍一下其他内容和口令使用方法。

当本地没有音乐的时候，系统会自动通过 B 站或油管下载相应的歌曲。

🔻 音箱支持的口令介绍

> 播放歌曲
>
> 播放歌曲+歌名 比如：播放歌曲周杰伦晴天
>
> 下一首
>
> 单曲循环
>
> 全部循环
>
> \*隐藏玩法: 对小爱同学说播放歌曲小猪佩奇的故事，会播放小猪佩奇的故事。

🔻 支持音乐格式

> mp3、 flac

🔻web 控制面板

浏览器进入 http://ip:port

ip 是 XIAOMUSIC_HOSTNAME 设置的

8090 是默认端口

### 系统部署

#### 一、docker-compose.yaml 代码

🔻 新建一个文件夹，可以用项目为名字。在文件夹下新建一个 docker-compose.yaml 文件，将下面代码复制进去。

```bash

version: '3'
services:
  xiaomusic:
    image: hanxi/xiaomusic
    container_name: xiaomusic
    restart: unless-stopped
    ports:
      - 8090:8090           #自定义webui端口
    volumes:
      - ./music:/app/music   #用于保存下载的歌曲。
    restart: always
    environment:
      MI_USER: '小米账号'
      MI_PASS: '小米密码'
      MI_DID: 00000   #小米设备的did，通过进入容器后，使用指令micli list 查看did
      MI_HARDWARE: 'L07A'  #小米音箱的型号，默认L07A
      XIAOMUSIC_SEARCH: 'bilisearch:'   #'bilisearch:'表示B站，'ytsearch:' 表示油管
      XIAOMUSIC_HOSTNAME: '192.168.2.5'   #宿主机IP
      # XIAOMUSIC_PROXY: 'http://192.168.2.5:8080'  #如果使用油管，需要挂本地代理
```

#### 二、SSH 部署

```bash
# 来到文件夹
cd /volume1/docker/{item}
# 启动容器
docker-compose up -d
```

#### 三、群晖部署 compose

打开 container manager，选择项目，点击新建，选择 penpot 路径，点击下一步即可

![图片](./NAS好工具推荐.assets/640-1714913510622-693.webp)

#### 四、威联通部署 compose

打开 container station，创建应用程序，复制代码验证后部署即可

![图片](./NAS好工具推荐.assets/640-1714913510622-694.webp)
