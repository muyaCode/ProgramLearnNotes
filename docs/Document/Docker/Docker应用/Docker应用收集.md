# password-x：私有化且开源的密码管理服务

### 项目地址

项目的开源地址：

```
https://gitee.com/password-x/password-x
```

项目的演示地址：

```
https://huangyanpeng.com/login?type=oss&region=oss-cn-beijing&keyId=LTAI5tRPBc5sY6KbZ
```

> password-x 是一款安全可靠且功能强大的开源密码管理项目。它采用阿里云和腾讯云对象存储服务作为密码仓库，支持静态页面部署，无需云服务器即可直接使用。

### 简介

通过 password-x，你可以轻松地管理和保护各种网站、服务器、数据库、应用等密码。它内置了密码生成器，可以快速生成安全的随机密码。此外，该项目还支持密码分组功能，方便你对不同场景和类型的密码进行归类整理。

password-x 架构稳定，使用了先进的 AES 对称加密技术对密码文件进行处理，确保了安全性和速度的双重优势。关键配置信息如阿里云对象存储服务、主密码等，经过浏览器指纹加密后存储在本地缓存中，即使黑客入侵，也无法轻易获取到用户的敏感信息。

### 功能特点

以下是 password-x 项目的特点和功能：

1. 安全性：使用阿里云对象存储保存密码文件，避免开发者泄露密码问题。密码文件经过 AES 加密，只有在拥有主密码的情况下才能解密。
2. 可靠性：采用阿里云对象存储服务作为数据库存储密码文件，具有高可靠性和数据可用性。
3. 多语言和暗黑模式：提供多语言支持，并支持暗黑模式，让您在使用过程中更加舒适和便捷。
4. 密码锁定和自动登录：支持密码锁定功能，可保护您的密码安全。同时，还可以设置自动登录，方便快捷地访问您的密码。
5. 密码分享和排序：支持密码分享功能，方便与他人共享密码信息。还可以对密码列表进行排序，便于管理和查找。
6. 修改主密码和注销账户：允许用户修改主密码和注销账户，提供更灵活的密码管理选项。
7. 导入/导出密码列表：支持将密码列表导入和导出，方便您在不同设备之间进行密码迁移和备份。
8. 手势主密码：支持手势主密码，可以使用手势图案作为主密码进行解锁。
9. 与腾讯云 COS 存储对接：可以将密码文件存储到腾讯云 COS，提供更多的存储选择。
10. 毛玻璃背景：具有美观的毛玻璃背景，使用户界面更加精美和现代化。

![图片](./Docker应用收集.assets/640wx.webp)

# OpenUI：描述实时呈现生成前端 UI

GitHub：https://github.com/wandb/openui

### Docker Compose

> 免责声明：这可能会非常缓慢。如果您有 GPU，则可能需要将容器的标记更改为支持它的标记。如果您在 Mac 上运行，请按照上述说明操作并本地运行 Ollama 以利用 M1/M2。`ollama`

从根目录中，您可以运行：

```
docker-compose up -d
docker exec -it openui-ollama-1 ollama pull llava
```

如果您已经在环境中设置了 OPENAI*API_KEY`=xxx`，只需从生产线中删除即可。您还可以在上面的命令中替换为您选择的开源模型`llava`*（[llava](https://ollama.com/library/llava) 是目前唯一支持图像的 Ollama 模型之一\_）。您现在应该能够在 [http://localhost:7878](http://localhost:7878/) 访问 OpenUI。

_如果对前端或后端进行更改，则需要运行 `docker-compose build` 以使其反映在服务中。_

### 码头工人

您可以从以下目录手动构建并运行 docker 文件：`/backend`

```
docker build . -t wandb/openui --load
docker run -p 7878:7878 -e OPENAI_API_KEY -e GROQ_API_KEY wandb/openui
```

现在你可以去：[http://localhost:7878](http://localhost:7878/)

# 部署本地私人专属知识库，开源免费

**可接入 GPT-4、Llama 3、Gemma、Kimi 等几十种大模型，零代码集成。**

## 1、MarxKB 知识共享系统简介

今天跟大家分享的内容是，如何在本地**搭建自己的本地知识库问答系统 MaxKB**，与其他问答知识库相比，他真正做到了开箱即用，零代码集成，支持 ChatGPT、百度千帆、Lama2、Lama3，通义千问等几十种大语言模型，操作界面简介，小白也能快速上手。【注意在正式搭建知识库问答系统之前，请确保你的 Windows 系统已经升级到了专业版本，同时拥有一张独立的显卡！！】

![图片](./Docker应用收集.assets/640-984874.gif)

## 2、搭建本地知识库问答系统 MarxKB 的优势

在部署好 MarxKB 后，**你可以添加个人笔记，工作文档，甚至在线网页到知识库里面，然后通过建立索引加上大语言模型对这些知识库的理解实现对文档内容的实时搜索与问答**。所有的程序和文档都不会离开你的电脑，完全运行在本地。

![图片](./Docker应用收集.assets/640-1715421174186-24.gif)

## 3、在电脑上安装 Docker

到目前为止，MarksKB 目前在 Windows 系统上，只能通过 Docker 的镜像来部署，因此我们需要提前在电脑上安装 Docker。打开下面的 Docker 应用程序下载地址：

```
https://www.docker.com/products/docker-desktop/
```

在下载 Docker 后，在本地电脑上完成安装，注意在安装过程中，我们需要确保"**Use WSL 2 instead of Hyper-V (recommended)**"这一功能被启用，docker 的具体安装过程可以参看下图所示的教程，必要时可以重启电脑。

![图片](./Docker应用收集.assets/640-1715421174186-25.gif)

## 4、使用 docker 安装 MarxKB 镜像

在完成 docker 的安装后，我们先打开终端，然后在终端输入下面的指令

```
docker pull 1panel/maxkb
```

将 docker 镜像下载到本地电脑上，

![图片](./Docker应用收集.assets/640-1715421174186-26.gif)

整个 MaxKb 的镜像大小为 2GB 左右。

## 5、为 MaxKB 镜像创建一个容器

打开 Docker 图形化界面，左侧菜单栏点击 Images 图标，然后你就会看到刚刚下载的 docker 镜像，点击右侧的三角图标就可以重新创建容器了，

![图片](./Docker应用收集.assets/640-1715421174186-27.webp)

弹出的界面点击向下的箭头，展开选项，容器名称选择 MarskB，第一个端口默认是 8080，第二个端口是在应用程序运行后需要访问的端口，这里我们也将其设置为 8080，

![图片](./Docker应用收集.assets/640-1715421174186-28.webp)

下一步，在本地设备上，创建一个存放知识库数据的文件夹，并记住这个文件夹的路径，随后回到刚才的 Docker 界面，找到 Volumes 项，这这里填入刚才的知识库路径，随后在**Container path**这一栏中填入“**/var/lib/postgresql/data**”，最后点击 RUN 按钮，这样一个 MarKB 容器就算是搭建完毕了！

![图片](./Docker应用收集.assets/640-1715421174186-29.webp)

我们用浏览器打开下面的网址，

```
http://127.0.0.1:8080
```

就可以启动了 MarKB 应用界面了，不过这里需要提供登录账号和密码，

![图片](./Docker应用收集.assets/640-1715421174186-30.webp)

登录账号和密码可以关注【无线理论】的微信公众号，并回复关键词“**MarKB**”即可获取

## 6、在 MarKB 上创建知识库

初次登录到 MarKB 后，需更改登录用户名和登录密码。完成修改后，导航到**创建知识库页面**，在这里，你需要为将创建的知识库命名，并输入几段简要内容进行描述，随后就是根据自己的需要创建自己的知识库系统，这里的知识库系统有两种，**一种是用某个网站上作为建设知识库的数据来源，另外一种则是直接使用本地文本**。

![图片](./Docker应用收集.assets/640-1715421221860-47.webp)

这里我们使用"**通用型**"，也就是通过使用本地文本的方式来搭建知识库，点击进入“**文档上传**”界面，这里上传你的知识库数据，这些**数据格式**既可以是**txt，也可以是 word、pdf、ppt 等**，在确定需要上传的文档后，点击右下角的**“创建并导入**”按钮。

![图片](./Docker应用收集.assets/640-1715421221860-48.gif)

在导入文档后，在“**设置分段规则”**这里我们选择“**智能分段**”，随后点击**开始导入**按钮。

![图片](./Docker应用收集.assets/640-1715421221860-49.webp)

文档导入过程的时间长短取决于文档内容的多少，文档内容阅读导入时间就越长。

## 7、配置本地大语言模型

在 MarKB 应用界面内，点击系统设置，然后再进入模型设置界面，在这里，你可以看到 MarKB 目前能够支持的大语言模型，如百度千帆、Azure OpenAI、ChatGPT、ollama 等类型的模型。这里除了 ollama 可以本地使用外，其他平台的大语言模型均需要你提供对应的 API 密钥。

![图片](./Docker应用收集.assets/640-1715421221860-50.webp)

由于本期演示的主要内容就是通过本地启用本地大语言模型来构建自己的知识库系统，所以接下来我们探讨**如何在本地部署并启用 ollama 上的大语言模型**，首先请确保你的设备上已经安装了 ollma，如果还没有安装，那么**可以通过下面的地址来下载 ollma 本地安装包**，然后快速完成安装。

```
https://ollama.com/download
```

你可以在 ollma 的官方网站主页上查看可以在本地运行的大型语言模型的列表！

![图片](./Docker应用收集.assets/640-1715421221860-51.gif)

这里我们使用最近开源的大语言模型 llama3 来作为运行本地知识库的大语言模型，**到 ollama 模型列表界面，选中并打开 llama3 模型界面，在界面最底部找到下载 llama3 模型的命令，**

![图片](./Docker应用收集.assets/640-1715421221860-52.webp)

如果你的设备显存足够大，那么你可以使用指令：

```
ollama run llama3:70b
```

来下载大语言模型 llama3，反之，你就使用参数较低的 8B 模型，指令如下：

```
ollama run llama3
```

在模型下载完毕后，你就可以在终端直接和本地部署的大语言模型 llama3 对话了，关闭界面后，下次使用只需再次运行命令即可！

![图片](./Docker应用收集.assets/640-1715421221861-53.webp)

## 8、将大语言模型和本地知识库相互关联

回到 MarKB 的**系统设置**界面内，点击**模型设置**，模型名称随便写，**模型类型写大语言模型**，模型列表这里，如果你使用 ollama 下载了大语言模型，那么么这里的列表中将会有相应的模型，

![图片](./Docker应用收集.assets/640-1715421221861-54.webp)

下面的 API 密钥随便写，API 域名则写入下面的内容：

```
http://host.docker.internal:11434
```

具体演示请见下图：

![图片](./Docker应用收集.assets/640-1715421221861-55.webp)

完成内容填写后，点击提交。

## 9、创建本地知识库应用

回到 MarKB 主界面，点击**应用**，然后**创建应用**，随后依次填写应用名称、应用描述，AI 模型这里选中我们刚刚关联到 MarKB 上的大语言模型，如下所示：

![图片](./Docker应用收集.assets/640-1715421221861-56.webp)

打开多轮对话，接下来需要将这个应用关联到前面我们创建的知识库，

![图片](./Docker应用收集.assets/640-1715421221861-57.webp)

在接下来的界面内，你就会看到我们先前创建本地问答系统知识库了，点击它使大语言模型和知识库相结合，

![图片](./Docker应用收集.assets/640-1715421221861-58.webp)

完成后，点击创建按钮即可，如下所示：

![图片](./Docker应用收集.assets/640-1715421221861-59.webp)

到这里，一个使用大语言模型理解本地文档的问答系统就算建好了，点击下图所示的按钮就打开对话页面，

![图片](./Docker应用收集.assets/640-1715421221861-60.webp)

MaxKB 使用演示情况如下图所示：

![图片](./Docker应用收集.assets/640-1715421221861-61.gif)

# 本地搭建属于你自己的 AI 搜索引擎

GitHub：https://github.com/nashsu/FreeAskInternet

## 项目简介

`FreeAskInternet`是一个完全免费、私密且在本地运行的搜索聚合器和答案生成器（即问答 AI 工具），使用 LLM 技术，无需 GPU。

我们可以直接可以进行提问，项目将使用 searxng 进行多引擎搜索，并将搜索结果与 ChatGPT3.5 LLM 结合，基于搜索结果生成答案。

所有过程在本地运行，可以完全不需要 GPU 或 OpenAI 或 Google API 密钥。

## 功能特性

- 完全免费（无需任何 API 密钥）
- 完全本地（不需要 GPU，任何计算机都可以运行）
- 完全私密（所有都在本地运行，使用定制 llm）
- 不使用 LLM 硬件（无需 GPU）
- 使用免费 ChatGPT3.5 / Qwen / Kimi / ZhipuAI(GLM) API（无需 API 密钥）
- 支持自定义 LLM（ollama，llama.cpp）
- 使用 Docker Compose 快速部署和易于操作
- 网页和移动设备友好界面，设计用于 Web 搜索增强 AI 聊天，可轻松从任何设备访问。

## 工作原理

- 1、项目在 FreeAskInternet UI 界面（在本地运行）中接收用户输入的问题，并调用 searxng（在本地运行）在多个搜索引擎上进行搜索。
- 2、爬取搜索结果链接内容并传递给 ChatGPT3.5 / Kimi / Qwen / ZhipuAI / ollama（使用自定义 llm），请 LLM 根据这些内容作为参考回答用户问题。
- 3、将答案流式传输到 Chat UI。
- 4、项目支持自定义 LLM 设置，从理论上来说支持无限的 llm。

## 项目安装部署

部署方式也很简单，官方推荐使用 docker

```bash
git clone https://github.com/nashsu/FreeAskInternet.git
cd ./FreeAskInternet
docker-compose up -d
```

然后浏览器里打开下面这个地址即可：

```
http://localhost:3000
```

## 项目展示

首页

![image-20240510205217093](./Docker应用收集.assets/image-20240510205217093.png)

基于搜索的聊天对话

![image-20240510205236008](./Docker应用收集.assets/image-20240510205236008.png)

相关设置界面，支持 ChatGPT3.5 / Qwen / Kimi / ZhipuAI(GLM)api，自定义 LLM，本地 ollama 等模型

![image-20240510205252877](./Docker应用收集.assets/image-20240510205252877.png)

关于如何获取和设置 Kimi / Qwen / ZhipuAI 的 api，官方建议参考这个项目：https://github.com/LLM-Red-Team/kimi-free-api

![image-20240510205311346](./Docker应用收集.assets/image-20240510205311346.png)

关于如何使用自定义的 LLM，比如 ollama：

1、启动 ollama 服务

```
export OLLAMA_HOST=0.0.0.0
ollama serve
```

2、设置里选择自定义模型，输入模型地址

![image-20240510205340901](./Docker应用收集.assets/image-20240510205340901.png)

3、开始使用

![image-20240510205354777](./Docker应用收集.assets/image-20240510205354777.png)

`FreeAskInternet` 是一款集免费、本地、隐私、强大搜索和智能问答于一身的实用工具。它打破了传统搜索引擎的局限，让你能够更加高效地获取信息。

更多项目细节功能，感兴趣的小伙伴自行到项目地址进行查看。

项目地址：**https://github.com/nashsu/FreeAskInternet**

# CyberChef：功能强大的开源网络"瑞士军刀"

**项目地址**：**https://github.com/gchq/CyberChef**

在线地址：[CyberChef (gchq.github.io)](https://gchq.github.io/CyberChef/)

应该有不少朋友，在日常工作中会做各种的网络安全测试或者编写研究各种脚本脚本吧？

今天要给大家介绍一款非常强的开源项目 - `CyberChef`，堪称是网络上的"瑞士军刀"。

## 项目简介

`CyberChef` 是一款功能强大的 “网络瑞士军刀”，它提供超过 500 种操作， 涵盖了加密、编码、压缩、数据分析等多个领域，包括简单的编码，如 XOR 和 Base64，更复杂的加密，如 AES，DES 和 Blowfish，创建二进制和十六进制转储，数据的压缩和解压缩，计算哈希和校验和，IPv6 和 X.509 解析，更改字符编码等。

CyberChef 是由英国政府通信总部（GCHQ）开发的，GCHQ 是英国负责网络安全和情报收集的机构。他们开发 CyberChef 的目的是为了让分析人员能够更轻松地处理各种数据，而无需使用复杂的工具或算法。

事实上，我们可以完全通过拖拽操作模块的方式，构建自定义的流程来处理数据，非常的方便。

## 功能特性

- 操作种类丰富：提供了 500 多种操作，涵盖了常见的加密、编码、压缩、数据分析等功能。
- 使用简单易懂：采用拖拽式操作界面，即使是没有编程经验的用户也能轻松上手。
- 实时处理: 自动处理输入和操作，并立即生成输出。
- 智能化: 自动检测编码格式，并提供解码功能。
- 调试支持: 支持设置断点和逐个操作执行，方便调试操作列表。
- 持久化: 可以保存和加载操作列表，方便重复使用和分享。
- 高亮显示: 可以高亮显示输入和输出中的文本，方便查看数据。
- 文件支持: 可以将输出保存到文件，或者从文件加载输入。
- 完全本地运行: 所有处理都在浏览器中进行，无需将数据发送到服务器。
- 离线可用: 可以下载 CyberChef 并本地运行，方便在没有网络连接的情况下使用。

## 安装部署

项目作者提供了一个在线的 web 站供大家体验：

```
https://gchq.github.io/CyberChef
```

当然，如果你想本地搭建的话，可以使用下面的 docker 命令：

```
docker build --tag cyberchef --ulimit nofile=10000 .
docker run -it -p 8080:80 cyberchef
```

或者直接用下面的镜像：

```
docker run -it -p 8080:80 ghcr.io/gchq/cyberchef:latest
```

# 青龙面板跑脚本教程

要在青龙面板上运行 JavaScript 脚本，首先需要确保你已经成功安装了青龙面板。我将指导你如何在青龙面板中设置和运行 JavaScript 脚本。

## 步骤 1: 安装青龙面板

如果你还没有安装青龙面板，首先需要通过 Docker 安装。以下是安装命令：

```

docker run -dit \
  -v /opt/ql/config:/ql/config \
  -v /opt/ql/log:/ql/log \
  -v /opt/ql/db:/ql/db \
  -v /opt/ql/scripts:/ql/scripts \
  -v /opt/ql/jbot:/ql/jbot \
  -p 5700:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest

```

这个命令将下载并运行最新版本的青龙面板，并映射 5700 端口。

## 步骤 2: 访问青龙面板

安装完成后，通过浏览器访问 `http://<your_server_ip>:5700` 来配置你的青龙面板。完成初始化设置，设置用户名和密码。

注意：

若 docker ps 发现进程已开启，`docker logs <names>` 显示容器启动成功... ,浏览器访问时无响应。显示如下

![图片](./Docker应用收集.assets/640-1715343966281-546.webp)

可排查服务器 防火墙端口设置。

1.找到 云服务器 ECS 里面的实例然后点击实例名称

2.点击安全组，点击后面的管理规则。

3.入方向手动添加青龙的映射端口。

![图片](./Docker应用收集.assets/640-1715343966281-547.webp)

4.刷新后，浏览器访问 `http://<your_server_ip>:5700` ，效果如下

![图片](./Docker应用收集.assets/640-1715343966281-548.webp)

## 步骤 3: 上传或创建 JavaScript 脚本

在青龙面板中，你可以通过“脚本管理”上传或创建新的 JavaScript 脚本：

![图片](./Docker应用收集.assets/640-1715343966281-549.webp)

1. 登录到青龙面板。
2. 导航到“脚本管理”。
3. 点击“新建脚本”按钮，选择 JavaScript 语言。

![图片](./Docker应用收集.assets/640-1715343966282-550.webp)

接下来

![图片](./Docker应用收集.assets/640-1715343966282-551.webp)

5. 在编辑器中输入你的 JavaScript 代码，例如一个简单的脚本：

```
console.log('Hello, QingLong!');
```

6. 保存脚本，比如命名为 `hello.js`。

![图片](./Docker应用收集.assets/640-1715343966282-552.webp)

## 步骤 4: 添加定时任务

为了定时运行你的脚本，你需要创建一个定时任务：

1. 在青龙面板中，导航到“定时任务”。
2. 点击“创建任务”按钮。
3. 在“任务命令”栏输入 `task hello.js`，其中 `hello.js` 是你的脚本文件名。
4. 在“定时规则”栏输入 Cron 表达式，例如每 15 秒运行的表达式：

```
*/15 * * * * ?
```

5. 保存定时任务。

![图片](./Docker应用收集.assets/640-1715343966282-553.webp)

## 步骤 5: 查看日志

\- 定时任务创建后，当任务执行时，你可以在“日志”部分查看脚本的输出和运行情况。

![图片](./Docker应用收集.assets/640-1715343966282-554.webp)

**示例脚本**

假设你想运行一个简单的 JavaScript 脚本，该脚本打印一条消息并检查一些系统环境变量：

```
console.log('Hello, QingLong!');
console.log('Current time: ' + new Date().toString());
```

按照上述步骤创建并保存为 `hello.js`，设置定时任务以定期执行。

![图片](./Docker应用收集.assets/640-1715343966282-555.webp)

不用重新设置任务

![图片](./Docker应用收集.assets/640-1715343966282-554.webp)

直接就可以运行。

## 步骤 6: 管理依赖和环境变量

如果你的脚本需要特定的环境变量或依赖库，青龙面板允许你在"环境变量"和"依赖管理"中进行配置。

![图片](./Docker应用收集.assets/640-1715343966282-556.webp)

注意名称这一栏粘贴进去后，最后一行不要留空行，否则确定不了。

效果如下：

![图片](./Docker应用收集.assets/640-1715343966282-557.webp)

**通用依赖如下，可手动增加。**

NodeJs

```
request
crypto-js
prettytable
dotenv
jsdom
date-fns
tough-cookie
tslib
ws@7.4.3
ts-md5
jsdom -g
jieba
fs
form-data
json5
global-agent
png-js
@types/node
require
typescript
js-base64
axios
moment
```

Python3

```
requests
canvas
ping3
jieba
PyExecJS
aiohttp
```

Linux

```
bizCode
bizMsg
lxm
```

# 卡拉 ok

一款以 KTV 氛围设计的卡拉 ok 软件，支持跨域、多人轮播上麦唱歌，主打一个脑补 KTV。唯一的遗憾是支持的格式太少了，音乐只支持有歌词的 MP3+G，MV 只支持 MP4，必须按【艺术家 - 歌曲】命名，条件比较苛刻。可以认为该项目仅是一个 KTV 风格的音乐/MV 播放器。

![图片](./Docker应用收集.assets/640-89484.webp)

镜像名称：radrootllc/karaoke-eternal

> \#创建指令
>
> docker run -d -it
> --name=karaoke-eternal
> -v /volume1/docker/config:/config # 自定义配置文件路径
> -v /volume1/docker/music:/mnt/karaoke #自定义歌曲文件路径
> -p 8080:8080 #自定义端口
> --restart unless-stopped
>
> radrootllc/karaoke-eternal

---

# 我的世界

专门运行在 docker 里的 minecraft（Java 版）社区服务器，可以自动下载最新的版本用于启动服务，只需要将路径映射好以后，就可以支持模组、插件。

![图片](./Docker应用收集.assets/640-1714728580328-18.webp)

> 镜像名称：itzg/minecraft-server
>
> \#创建指令
>
> docker run -d -it
> --name=minecraft-server
> -e EULA=TRUE
> -v ./data:/data #自定义路径，包括配置文件，插件，模块等都在该文件夹下
> -p 25565:25565 #自定义端口
> --restart unless-stopped
> itzg/minecraft-server

# IT-TOOLS：程序员在线工具箱

**GitHub**：https://github.com/CorentinTh/it-tools

这是一款备受欢迎的开源个人工具箱，专为 IT 从业人员和开发人员打造。其功能丰富多样，包括但不限于二维码生成、数据格式转换、MAC 地址生成等，可以满足用户多样化的需求。此外，它还提供了众多实用的工具类别，如 Converter 工具类、Network 工具类、Math 工具类、Measurement 工具类、文本工具类、数据工具类等，以及加解密工具类、网站工具类、图片与视频工具类、开发工具类等。它以其小巧轻便、易于部署以及功能强大、界面美观等特点而广受欢迎。它支持 Docker 私有化部署，使得开发者能够更高效地完成任务。通过 Docker 部署，用户还可以享受快捷的访问与使用体验。先来看图看看它都有哪些常用的功能：

![图片](./Docker应用收集.assets/640-147894789.webp)

![图片](./Docker应用收集.assets/640-1715589768215-37.webp)

![图片](./Docker应用收集.assets/640-1715589768215-38.webp)

## 主要工具

- Crypto：包含 token 生成器、哈希文本、UUID 生成、加密解密文本等 10 个不同的功能
- Converter：包含日期时间转换器、Yaml 转换器，Json 转换器，Base64 编解码等 16 种不同的功能
- Web：包含 Url 编解码，JWT 解析、JSON diff、HTML 所见即所得编辑器等 15 种不同的功能
- Images and videos：包含二维码生成器、WiFi 二维码生成器、SVG 占位符生成器等四种功能
- Development：包含 Git 备忘单、随机端口生成器、Crontab 生成器、JSON 美观性和格式、XML 格式化、JSON 转 CSV、SQL 美化等 10 种功能
- Network：包含 IPv4 子网计算器、Ipv4 地址转换器、IPv4 范围扩展器、MAC 地址查找、IPv6 ULA 生成器
- Math：包含数学计算器、ETA 计算器、百分比计算器
- Measurement：包含计时器、温度转换器、基准生成器
- Text：包含 ipsum 生成器、文本统计、文本 diff、表情符号选取器、字符串模糊处理程序
- Data：包含手机号解析/格式化、IBAN 验证/解析两个工

它几乎涵盖了几乎所有常用的工具类，它是基于 Vue3 实现的，采用 Naive UI 组件库开发，它还支持 Docker + K8S 私有化部署。

# 部署

```
docker run -d --name it-tools --restart unless-stopped -p 8080:80 qingfeng2336/it-tools:latest
```

总的来说，IT-Tools 是一个功能强大、易于使用的工具箱，对于 IT 从业人员和开发人员来说可以是在日常开发过程中的一个可靠选择！

**原版地址**：https://it-tools.tech/

**中文地址**：https://it-tools.haokudelei.com/

# Stirling-PDF：本地部署的 PDF 工具箱

在我们日常办公中，经常使用到 PDF 格式的文件。比如打印投标文件采用 PDF 格式打印，材料采用 PDF 格式共享，电子合同采用 PDF 格式留存。但是因为 PDF 格式文件不能直接编辑、修改，很多人对 PDF 的第一印象就是“”麻烦、不好用”！

虽然 PDF 这么难用，但是为什么还这么多人和企业要求使用呢，主要有以下几个原因：

- 兼容性好：PDF 格式可在几乎所有平台上使用，包括 Windows、Mac 和 Linux 等，而且现在不同浏览器都可以直接打开 PDF 格式文件，无需安装专门的 PDF 查看软件。
- 容量体积小：PDF 文件通常比其他格式的文档更小，小体积文件更容易共享和下载（比如很多投标系统、带附件管理的平台，都要求上传 PDF 格式文件）。
- 安全性高：支持通过加密、签证、水印等操作来保护 PDF 文档，防止未经授权的用户访问和查看文档内容，同时，PDF 格式很难编辑，这有助于原始内容不易被修改。

当然了，市面上也有支持修改 PDF 格式文件的软件，比如个人电脑安装的：国外的 Adobe Acrobat，国内的福昕 PDF 等。但是无论是 Adobe Acrobat 还是福昕 PDF，都需要激活码才能使用编辑等功能。

无需安装的在线 PDF 编辑也很多，但是很多时候先不说效果怎么样，很多在线编辑都是需要注册才可以使用。更有一些网站“玩套路”，在使用的时候，可以先上传文件，然后进行转换等处理，但是最后你点击下载文件时，才会提醒你需要注册登录，但是这个还不是最“套路的”，最套路的是，好不容易了注册才提示需要充值才能下载转换后的文档。

所以，今天给大家介绍一款可以本地部署、开源的，还没有任何广告套路的在线 PDF 工具箱-Stirling-PDF

## Stirling-PDF 介绍

一句话介绍 Stirling-PDF：一个功能强大的、本地部署的、在线访问的 PDF 工具箱，企业个人皆可用，提供了一系列丰富的 PDF 操作功能，通过简单的操作，就可以实现 PDF 合并、分割 P、压缩、格式转换等功能。

### 🏠 项目信息

```
# github地址
https://github.com/Stirling-Tools/Stirling-PDF
# 项目地址
https://stirlingtools.com/
```

### 🚀 功能特性

一页截图都放不下的功能：

![image-20240510213524521](./Docker应用收集.assets/image-20240510213524521.png)

## Stirling-PDF 安装

### 一、Docker 安装

Stirling-PDF 提供了三种 Docker 镜像，不同的镜像除了大小不一样外，提供的功能也不一样，可以按照功能需求部署。（本文采用的 full 版本，最大的镜像）

不同镜像提供的功能列表如下：

| **功能**          | **Ultra-Lite** | **Lite** | **Full** |
| ----------------- | -------------- | -------- | -------- |
| 附加密码          | ✔️             | ✔️       | ✔️       |
| 加水印            | ✔️             | ✔️       | ✔️       |
| 证书签名          | ✔️             | ✔️       | ✔️       |
| 更改元数据        | ✔️             | ✔️       | ✔️       |
| 更改权限          | ✔️             | ✔️       | ✔️       |
| 对比              | ✔️             | ✔️       | ✔️       |
| 提取图像          | ✔️             | ✔️       | ✔️       |
| 压缩              | ✔️             | ✔️       | ✔️       |
| 图片转换 PDF      | ✔️             | ✔️       | ✔️       |
| 合并 PDF          | ✔️             | ✔️       | ✔️       |
| 多页布局          | ✔️             | ✔️       | ✔️       |
| PDF 转换成图片    | ✔️             | ✔️       | ✔️       |
| 删除页面          | ✔️             | ✔️       | ✔️       |
| 删除密码          | ✔️             | ✔️       | ✔️       |
| 旋转页面          | ✔️             | ✔️       | ✔️       |
| 缩放页面          | ✔️             | ✔️       | ✔️       |
| PDF 分割          | ✔️             | ✔️       | ✔️       |
| 添加图片          | ✔️             | ✔️       | ✔️       |
| 文件转换 PDF 格式 |                | ✔️       | ✔️       |
| PDF 转换 HTML     |                | ✔️       | ✔️       |
| PDF 转换 TEXT     |                | ✔️       | ✔️       |
| PDF 转换 Word     |                | ✔️       | ✔️       |
| PDF 转换 XML      |                | ✔️       | ✔️       |
| PDF 转换 HTML     |                | ✔️       | ✔️       |
| PDF 修复          |                | ✔️       | ✔️       |
| xlsx 转换 PDF     |                | ✔️       | ✔️       |
| OCR 提取          |                |          | ✔️       |
| 删除空白          |                |          | ✔️       |

```
#采用 docker run 部署全部功能版本的Stirling-PDF
docker run -d \
  -p 8080:8080 \
  -v /opt/trainingData:/usr/share/tessdata \
  -v /opt/extraConfigs:/configs \
  -v /opt/logs:/logs \
  -v /opt/customFiles:/customFiles \
  -e DOCKER_ENABLE_SECURITY=false \
  -e INSTALL_BOOK_AND_ADVANCED_HTML_OPS=false \
  -e LANGS=zh_CN \
  --name stirling-pdf \
  frooodle/s-pdf:latest
```

-

```
#采用 docker compose 部署全部功能版本的Stirling-PDF
version: '3.3'
services:
  stirling-pdf:
    image: frooodle/s-pdf:latest
    ports:
      - '8080:8080'
    volumes:
      - /opt/trainingData:/usr/share/tessdata #Required for extra OCR languages
      - /opt/extraConfigs:/configs
      - /opt/customFiles:/customFiles/
      - /opt/logs:/logs/
    environment:
      - DOCKER_ENABLE_SECURITY=false
      - INSTALL_BOOK_AND_ADVANCED_HTML_OPS=false
      - LANGS=zh_CN

docker-compose up -d
```

安装完成后，访问 _http://hostip:8080_，默认账号密码[demo/demo]。

![image-20240510213156714](./Docker应用收集.assets/image-20240510213156714.png)

### 二、Windows 安装

如采用 Windows 安装，可以直接在 github release 界面下载 EXE 文件安装即可，下载链接：*https://github.com/Stirling-Tools/Stirling-PDF/releases*

## Stirling-PDF 使用

Stirling-PDF 提供的功能很多，本章节只做简单介绍。

### 第一步，先调整为中文

![图片](./Docker应用收集.assets/640-1715347965209-593.webp)

调整前

![图片](./Docker应用收集.assets/640-1715347965209-594.webp)

调整后

### PDF 转 PPT（用的最多的功能）

_# 转换后文件大小有点失真，但是微调编辑后即可，比一般工具效果要好（很多工具都是直接截图后转成 PPT，无法编辑）_

![图片](./Docker应用收集.assets/640-1715347965209-595.webp)

转换过程中，转换后浏览器会自动下载

### 浏览 PDF

![图片](./Docker应用收集.assets/640-1715347965209-596.webp)

### 单个 PDF 文件合并、旋转、排序、删除

![图片](./Docker应用收集.assets/640-1715347965209-597.webp)

### 多个 PDF 合并

![图片](./Docker应用收集.assets/640-1715347965209-598.webp)

### PDF 添加水印

![图片](./Docker应用收集.assets/640-1715347965209-599.webp)添加后，浏览器自动下载

![图片](./Docker应用收集.assets/640-1715347965209-600.webp)添加效果

### OCR 扫描

默认的 OCR 扫描只支持英文的，需要自行下载中文模型：

```
# 参考文档地址
https://github.com/Stirling-Tools/Stirling-PDF/blob/main/HowToUseOCR.md#
```

在*tessdata* 项目(*https://github.com/tesseract-ocr/tessdata)*中下载简体中文语言包：

![图片](./Docker应用收集.assets/640-1715347965210-601.webp)

下载完成后，上传到部署服务 /opt/trainingData*(需要参考上文 docker 部署的映射的目录地址)* 目录下：

```
# 拷贝语言包至ocr目录
mv chi_sim.traineddata /opt/trainingData
```

打开 Stirling-PDF ORC 界面，可以看到已经具有中文识别选项：

![图片](./Docker应用收集.assets/640-1715347965210-602.webp)

识别后效果

![图片](./Docker应用收集.assets/640-1715347965210-603.webp)

## 最后

本文只是简单介绍了下 stirling-pdf 的使用，stirling-pdf 还具备很多其他的功能，如下图：

![图片](./Docker应用收集.assets/640-1715347965210-604.webp)

如果你已经受够了某些商业在线网站提供的 PDF 编辑功能，那么不防试试 stirling-pdf ，真的很强大！

# lookscanned：PDF 扫描办公利器

项目地址：**https://github.com/rwv/lookscanned.io**

在日常工作学习中，我们经常需要处理各种 PDF 文档。有时，我们需要将电子版文档转换成扫描版，以满足特定需求，例如模拟真实签字、增加文件可信度等。传统的扫描方法需要借助打印机和扫描仪，不仅操作繁琐，而且容易造成文件损坏。

今天分享的开源项目是`lookscanned`，可以直接让你的 PDF 文档瞬间拥有扫描质感。

![image-20240510210633858](./Docker应用收集.assets/image-20240510210633858.png)

## 项目简介

`lookscanned` 是一款基于 Vue 和 TypeScript 的开源项目，可以轻松将你的 PDF 文档转换成逼真的扫描版效果。它无需服务器端支持，所有操作都在浏览器端完成，保证了你的文件隐私安全。

## 性能特色

- 纯前端实现：无需服务器端依赖，所有代码都在浏览器端运行，加载速度快，使用体验流畅。
- 离线可用：无需网络连接，即可使用 LooksScanned 处理 PDF 文档，让你随时随地转换文件。
- 实时预览：支持实时预览功能，你可以边调整参数边查看效果，直到找到满意的扫描效果。
- 高度可定制：提供丰富的参数设置，包括扫描线、噪点、阴影等，让你可以自定义扫描效果。
- 多种平台支持：支持所有现代浏览器和设备，包括桌面端和移动端。

## 项目安装部署

作者提供了一个在线演示站，进行快速体验。

```
https://zh.lookscanned.io/scan
```

![image-20240510210657474](./Docker应用收集.assets/image-20240510210657474.png)

也可以直接下载项目源码到本地进行开发

```
$ npm run dev # Run Dev Server
$ npm run build # Build to dist/
```

## 项目使用

使用很简单，打开 LooksScanned.io 网站，上传我们的 PDF 文档。

![image-20240510210713682](./Docker应用收集.assets/image-20240510210713682.png)

然后根据需要调整边框、亮度、对比度、颜色、旋转等参数设置，右边可以直接看到处理后的预览图。

觉得合适的话，点击页面左下方的“生成扫描版 PDF”按钮，然后下载即可。

![image-20240510210725229](./Docker应用收集.assets/image-20240510210725229.png)

效果还是挺好的！

LooksScanned 是一款简单易用的 PDF 扫描工具，可以帮助你快速将电子版文档转换成逼真的扫描版效果。它拥有纯前端、离线可用、实时预览、高度可定制等优势，是提升 PDF 文档处理效率的利器。

如果你经常需要处理 PDF 文档，并且需要将电子版文档转换成扫描版，那么一定要试试 Look Scanned，绝对会给你带来惊喜。

更多项目细节功能，感兴趣的可以去项目地址进行查看：

项目地址：**https://github.com/rwv/lookscanned.io**

# icloud 同步

用于从 iCloud 下载照片的命令行工具，支持三种操作模式，分别是**复制**（默认，从 iCloud 下载新照片），**同步**（从 iCloud 下载新照片并删除在 iCloud 中删除的本地文件），**移动**（从 iCloud 下载新照片并删除 iCloud 中的照片）

> 镜像名称：icloudpd/icloudpd
>
> \#创建指令
>
> docker run -d -it --rm #--rm 表示停止后删除容器
> --name=icloudpd
> -v /volume1/docker/photos:/data #自定义照片路径
> -v /volume1/docker/music:/mnt/karaoke #自定义歌曲文件路径
> -e TZ=Asia/Shanghai
> icloudpd/icloudpd:latest
> icloudpd --directory /data --username my@email.address --watch-with-interval 3600 #容器内运行指令，修改 my@email.address 为自己的 icloud 账号

---

# **AI 相关**

一款将 GitHub Copilot 免费转换为 ChatGPT 的工具，而如果你在 github 上有维护一些开源项目，那么你很有可能免费使用 GitHub Copilot。意味着你可以免费使用 gpt4.0。配合 ChatGPT-Next-Web 部署属于自己的 GPT 集成应用。

![图片](./Docker应用收集.assets/640-1714728580328-19.webp)

> 镜像名称：aaamoon/copilot-gpt4-service
>
> \#创建指令
>
> docker run -d
> --name copilot-gpt4-service
> --restart always
> -p 8080:8080 #可自定义端口
> aaamoon/copilot-gpt4-service:latest

> 镜像名称：yidadaa/chatgpt-next-web
>
> \#创建指令
>
> docker run -d -p 3000:3000 #可自定义端口
> -e OPENAI_API_KEY=sk-xxxx #OpenAI 的 key
> -e CODE=页面访问密码
> yidadaa/chatgpt-next-web

---

# 服务器管理

一个基于 Web 的 Linux/Unix 系统管理软件。运维人员可以通过浏览器访问 Webmin，来实现对 Linux/Unix 服务器的各类管理操作，包括但不限于用户帐户、集群、网络、文件共享等等，你可以认为这就是一个 UI 版本的 Linux 操作系统。

![图片](./Docker应用收集.assets/640-1714728580328-20.webp)

> 镜像名称：sameersbn/bind
>
> \#创建指令
>
> docker run -d --name=bind --restart always
> -p 53:53 -p 10000:10000 #自定义端口
> -v /srv/data/bind:/data #自定义存储路径
> -e ROOT_PASSWORD=password #自定义登录密码，登录账号为 root
> sameersbn/bind:latest

---

# 『Quick Reference』开发速查表神器

## 项目地址

https://github.com/jaywcjlove/reference

## 项目介绍

> 为开发人员分享快速参考备忘清单【速查表】。
>
> 这是英文版 Reference 的中文版本，目的是为了方便自己的技术栈查阅，
>
> 包含：运维，前端，后端，工具，命令，数据库
>
> 是日常工作中的速查神器

**该项目包含的内容如下：**

- 编程语言：JavaScript、Python、Java、C++、Go、Rust、PHP、C# 等
- 框架和库：React、Vue、Spring、Django、Express、TensorFlow、NumPy 等
- 工具和命令行：Git、Docker、Vim、Linux 命令、MySQL 等
- 系统和网络：HTTP、TCP/IP、DNS、Linux 内核参数等

**该项目的优势如下：**

- 内容全面：收录了大量编程相关的速查表，涵盖了开发人员日常工作中常用的各种技术
- 简洁易用：采用简洁的排版和语法，方便快速查阅
- 快速检索：支持全文搜索，可快速找到所需内容
- 持续更新：项目维护者会定期更新内容，确保最新技术得到收录

🔺 需要说明的是，因为这个项目非常火爆（真的太实用了~），所以很多热心网友都分享了自己搭建好的镜像网站免费提供给我们使用，截止目前差不多有一百个，并且很多都是每天自动同步，甚至还有整点同步的。比如说这个：https://quickref.hestudio.net/

## Quick Reference 部署安装

🔺 部署起来炒鸡简单，仅需一行 Docker Run 命令搞定（端口不冲突即可）：

```bash
docker run --name reference --rm -d -p 9667:3000 wcjiang/reference:latest
```

### 安装 Docker

```bash
curl -sSL https://get.docker.com/ | sh
```

### 拉取镜像

```dockerfile
[root@dean ~]# docker pull registry.cn-beijing.aliyuncs.com/deanmr/reference:latest
latest: Pulling from deanmr/reference
66075c0cb3a1: Pull complete
d3b8bfc32667: Pull complete
26fecaa44b12: Pull complete
f16d992a8914: Pull complete
7968f00c93d6: Pull complete
Digest: sha256:2c56f08bb356305df1d81162ecbd000b7f380be9bb4c6304b6f2e1624ad458c8
Status: Downloaded newer image for registry.cn-beijing.aliyuncs.com/deanmr/reference:latest
registry.cn-beijing.aliyuncs.com/deanmr/reference:latest
```

### 创建服务

```dockerfile
docker run -itd --name reference -p  3000:3000 registry.cn-beijing.aliyuncs.com/deanmr/reference:latest
```

### 查看容器

```dockerfile
[root@dean ~]# docker ps -a
CONTAINER ID   IMAGE                                                      COMMAND                  CREATED         STATUS                  PORTS                                           NAMES
2cbf136f0c7d   registry.cn-beijing.aliyuncs.com/deanmr/reference:latest   "/busybox httpd -f -…"   3 seconds ago   Up 2 seconds            0.0.0.0:3000->3000/tcp, :::3000->3000/tcp       reference
```

## Web 访问

http://ref.deanit.cn

![image-20240512204544221](./Docker应用收集.assets/image-20240512204544221.png)

![image-20240512204621537](./Docker应用收集.assets/image-20240512204621537.png)

## Quick Reference 体验

打开方式和其它容器一样，直接在浏览器中输入 【**http:// NAS 的局域网 IP:端口号**】就 OK 了。

# 开源且高颜值的自定义导航页工具

**GitHub 地址**：https://github.com/Lissy93/dashy

开源的、可自行调节布置的高颜值页面导航项目，**Dashy**

Dashy 可以为用户量身打造各种效果，其中包括页面上的状态检查、各种小部件、主题、图标包、用户界面编辑器等等等。

Dashy 提供的功能包括有：

- 支持多个页面
- 实时监控每个应用程序/链接
- 使用小部件显示信息和动态内容
- 可按名称、域或标签进行即时搜索+自定义热键和键盘快捷键
- 自带许多内置的颜色主题，具有 UI 颜色编辑器和对自定义 CSS 的支持
- 超棒的字体，主页图标，自动获取的图像，表情符号等。
- 具有多用户访问、可配置权限和 SSO 支持的可选身份验证
- 多语言支持，10 多种人工翻译语言，以及更多即将推出的语言
- 可选、加密、免费的异地云备份和恢复功能可用
- 工作区视图，可轻松同时在多个应用程序之间切换
- 最小视图，可快速加载浏览器开始页
- 选择应用程序启动方法：新选项卡、相同选项卡、剪贴板、弹出模式或在工作区视图中打开
- 可自定义的布局、大小、文本、组件可见性、排序顺序、行为等。
- 全屏背景图像、自定义导航栏链接、HTML 页脚、标题等选项。
- 易于使用 Docker 或一键式云部署进行设置
- 基于 YAML 的简单单文件配置，以及通过 UI 配置应用程序的选项
- 定期进行改进和添加新功能
- 100%免费和开源
- 高度关注隐私

那先看几个 Dashy 演示的例子：

![图片](./Docker应用收集.assets/640-16549874.gif)

![图片](./Docker应用收集.assets/640-1715859411696-35.gif)

怎么样？再看看更多可实现的效果：

![图片](./Docker应用收集.assets/640-1715859411696-36.gif)

是不是有点迫不及待想自己试试了？想运行 Dashy 的话，最常见的方法是使用 Docker 本地安装部署。

```
docker run -d \
  -p 8080:8080 \
  -v ~/my-conf.yml:/app/user-data/conf.yml \
  --name my-dashboard \
  --restart=always \
  lissy93/dashy:latest
```

默认的登录页面是`http://localhost:8080`

Dashy 的主要配置文件是按照 YAML 格式进行编写，其中包含了三个主要属性，分别是`pageInfo`、`appConfig`、`sections`

其中，pageInfo 设置元数据，例如标题、说明、导航栏链接和页脚文本等；

appConfig 是面板设置，包括页面主题、身份验证、语言控制等；

sections 是数组控制组件。

配置文件的默认地址在：`./host-system/my-local-conf.yml:/app/user-data/conf.yml`

除了本地部署，Dashy 也支持各种云平台的一键式部署，例如：

![图片](./Docker应用收集.assets/640-1715859411696-37.webp)

# 导航

一款新上线 github 的极简导航工具，使用 yaml 部署导航栏，支持主题设定，支持分组，超过 200,000 种免费图标，支持中文。

![图片](./Docker应用收集.assets/640-1714728580328-21.webp)

> 镜像名称：hywax/mafl
>
> \#创建指令
>
> docker run -d
> --name=mafl
> -v ./config.yml:/app/data/config.yml #自定义配置文件路径，配置文件需要去 github 上下载
> -p 3000:3000 #自定义端口
> hywax/mafl:latest

---

# **影视**

一款在线视频播放软件，前后端分离，可自行部署后端并使用官方的前端业务进行连接。也可以自行部署前后端使用，该项目本地不存储任何资料。也可使用官方平台，支持账号登录、观影记录同步等功能。影片不多，感觉都是老电影为主，等待官方更新更多的流媒体支持。

使用方法，搜索 movie-web，设置中添加自托管的服务地址即可。

![图片](./Docker应用收集.assets/640-1714728580328-22.webp)

> 镜像名称：ghcr.io/movie-web/backend
>
> \#创建指令
>
> docker run -d
> --name=movie-web
> -e MWB_POSTGRES**CONNECTION=postgresql://postgres:postgres@192.168.1.104:55433/postgres #按照【postgresql://账号:密码 @ip:端口/数据库表名】来设置
> -e MWB_CRYPTO**SESSION_SECRET=add-your-own-secret #12 位以上的自定义 api 授权
> -e MWB_META**NAME=unofficial-movie-web
> -e MWB_POSTGRES**MIGRATE_ON_BOOT=true
> -p 80:80 #自定义端口
> ghcr.io/movie-web/backend:latest

## **3D 打印**

🔶 一款用于管理 3D 打印机资料的开源项目。

![图片](./Docker应用收集.assets/640-1714728604003-35.webp)

> \#部署方法:docker-compose.yaml
>
> version: "3"
>
> services:
>
> app:
>
> image: ghcr.io/manyfold3d/manyfold:latest
>
> ports:
>
> \- 3214:3214 #自定义端口
>
> volumes:
>
> \- /path/to/your/libraries:/libraries #自定义存储库，就是你放 3D 打印文件的地方
>
> environment:
>
> DATABASE_URL: postgresql://manyfold:password@db/manyfold?pool=5 #账号密码要与下面的一致
>
> SECRET_KEY_BASE: a_nice_long_random_string
>
> REDIS_URL: redis://redis:6379/1
>
> depends_on:
>
> \- db
>
> \- redis
>
> networks:
>
> \- manyfold
>
> links:
>
> \- db
>
> \- redis
>
> db:
>
> image: postgres:15
>
> volumes:
>
> \- db_data:/var/lib/postgresql/data
>
> environment:
>
> POSTGRES_USER: manyfold #postgres 的账号
>
> POSTGRES_PASSWORD: password #postgres 的密码
>
> restart: on-failure
>
> networks:
>
> \- manyfold
>
> redis:
>
> image: redis:7
>
> restart: on-failure
>
> networks:
>
> \- manyfold
>
> volumes:
>
> db_data:
>
> networks:
>
> manyfold:

---

## **乐谱管理**

**🔶SheetAble 是一款易于使用的乐谱整理器和乐谱软件，可在浏览器或移动设备上使用。**

将乐谱上传到“乐谱库”后，可以编辑每个文件的信息（例如作曲家姓名、描述和图像等），并创建标签来组织您的乐谱。

![图片](./Docker应用收集.assets/640-1714728604004-36.webp)

> \#部署方法
>
> \#默认账号：admin@admin.com
>
> \#默认密码：sheetable
>
> 镜像名：vallezw/sheetable:latest
>
> docker run -d
>
> --name=sheetable
>
> -p 8080:8080 #自定义端口
>
> -v /home/sheetable:/app/config #自定义存储位置
>
> vallezw/sheetable:latest

---

## **翻译软件**

**🔶Libretranslate 是一款本地化部署的翻译软件及 API，不依托于谷歌或亚马逊，采用的是开源翻译源。**

**通过本地化部署 API，可以将翻译服务通过 API 的形式提供给各种各样的软件，同时包含有安卓和 IOS 端客户端支持。LiTranslate（IOS）、LibreTranslator（安卓）。**

🌏 支持语言包含：阿拉伯语、阿塞拜疆语、汉语（含繁体）、捷克语、丹麦语、荷兰语、英语、世界语、芬兰语、法语、德语、希腊语、希伯来语、印地语、匈牙利语、印度尼西亚语、爱尔兰语、意大利语、日语、卡拜尔、朝鲜语、奥克语、波斯语、波兰语、葡萄牙语、俄语、斯洛伐克语、西班牙语、瑞典语、土耳其语、乌克兰、越南语

![图片](./Docker应用收集.assets/640-1714728604004-37.webp)

> \#部署方法
>
> 镜像名：libretranslate/libretranslate:latest
>
> docker run -it -d
>
> --name= libretranslate
>
> -p 5000:5000 #自定义端口
>
> libretranslate/libretranslate:latest

---

## **人际关系管理**

**🔶Monica 是一款个人关系管理系统，可让记录自己的人际关系、生活经验。**

我感觉有点类似有一个 CRM 系统，可以用于记录客户信息、客户关系、客户爱好等。支持中文。

🌏 包含的功能：

- 添加和管理联系人
- 定义联系人之间的关系
- 生日自动提醒
- 能够记录您如何认识某人
- 与联系人一起管理活动
- 管理地址和所有不同的联系方式
- 上传文档和照片
- 能够定义自定义活动类型
- 记录日记
- 日记支持 markdown 书写

![图片](./Docker应用收集.assets/640-1714728604004-38.webp)

> \#部署方法
>
> 镜像名：monica:latest
>
> docker run -d
>
> --name monica
>
> -p 8080:80 #自定义端口
>
> -e DB_HOST=192.168.0.1:3306 #数据库连接
>
> -e DB_USERNAME=monica #数据库账号
>
> -e DB_PASSWORD=secret #数据库密码
>
> -v /volume1/docker/monica:/var/www/html/storage #自定义存储
>
> monica:latest

---

## **共享浏览器**

🔶N.eko 是一款基于 webRTC 的嵌套浏览器，允许通过 web 访问打开浏览器，支持 firefox、chromium 等内核，这意味着你可以运行很多本地化的服务，而不需要将端口映射出来。

同时，n.eko 还支持多人共享浏览器，通过 UDP 端口的开放，允许多人同时访问同一个浏览器进行屏幕共享。用处我就不说了吧，但是有点吃内存。

![图片](./Docker应用收集.assets/640-1714728604004-39.gif)

> \#部署方法:docker-compose.yaml
>
> version: "3.4"
>
> services:
>
> neko:
>
> image: "m1k1o/neko:chromium"
> \#不同内核版本
>
> \#m1k1o/neko:firefox;
>
> \#m1k1o/neko:vlc;
>
> \#ghcr.io/m1k1o/neko/arm-chromium:latest
>
> restart: "unless-stopped"
>
> shm_size: "2gb"
>
> ports:
>
> \- "8080:8080" #自定义端口数
>
> \- "52000-52100:52000-52100/udp" #开放的 UDP 数量
>
> cap_add:
>
> \- SYS_ADMIN
>
> environment:
>
> NEKO_SCREEN: '1920x1080@30'
>
> NEKO_PASSWORD: neko #密码
>
> NEKO_PASSWORD_ADMIN: admin #登录账号
>
> NEKO_EPR: 52000-52100

---

## **网络唤醒工具**

**🔶Upsnap 是一款局域网唤醒 Web 应用程序。支持手动添加、自动扫描局域网内支持网络唤醒的设备。**

**很适合部署在爱快、OP 等拥有 docker 的路由器上，用以唤醒家里的一些设备。**

🔻 以下是官方功能列表

> 🚀 一键式设备唤醒仪表板
>
> ⏰ 通过 Cron 实现自动化的定时事件
>
> 🔌 Ping 您选择的任何端口
>
> 🔍 使用网络扫描发现设备（需要 nmap）
>
> 👤 安全的用户管理
>
> 🌐 i18n 支持这些语言
>
> 🎨 29 主题
>
> 🐳 适用于 amd64、arm64、arm/v7、arm/v6 的 Docker 镜像
>
> 🏠 自持，没有云废话！

![图片](./Docker应用收集.assets/640-1714728604004-40.webp)

> \#部署方法
>
> \#默认端口 8090
>
> 镜像名：seriousm4x/upsnap:4
>
> docker run -d
>
> --name=upsnap
>
> --network=host
>
> --restart unless-stopped
>
> -v pbdata:/app/pb_data ghcr.io/seriousm4x/upsnap:4

## 一、歪脖子新标签页

每次新打开一个标签页的时候，就会出现一个当天的歪脖子咨询，让办公的你可以活动肩颈。

下载地址：https://github.com/dukeluo/wai/releases/tag/v1.4.1

![图片](./Docker应用收集.assets/640-1714728633204-53.webp)

---

## 二、PMS+OA

OPMS 项目+OA 管理系统，支持 windows 和 linux 系统，直接在官网下载安装即可

OPMS 管理系统是意思是 PMS+OA，项目+办公管理。符合日常项目和 OA 管理，特别适合扁平化管理的微中小企业。

OPMS 采用是 Beego 框架和 Bootstrap 前端框架构建立，适合不同平台，不同的终端，简单方便实用的原则。数据库采用 Mysql，缓存采用 Redis。在部署过程中，如果没有 Redis，不影响使用。

![图片](./Docker应用收集.assets/640-1714728633204-54.webp)

---

### 三、benotes

一个开源的自托管笔记和书签网络应用程序。支持网页版和移动端，优点是自动截图生成简介。

```
URL会自动保存图像、标题和描述
支持 Markdown 和 RTF 编辑器
可以作为 PWA 安装在移动设备（和桌面）上
通过此应用程序共享内容
通过每日备份保护您的数据
```

![图片](./Docker应用收集.assets/640-1714728633204-55.webp)

```
#下载配置文件
wget -O .env https://raw.githubusercontent.com/fr0tt/benotes/master/.env.sqlite.example
# 将.env.sqlite.example重命名为.env，并编辑参数
# 运行docker
docker run -itd\
 -p 8000:80  \ #自定义端口
-v benotes_storage:/var/www/storage \ #存储卷
-v "$(pwd)"/nginx/logs/:/var/lib/nginx/logs/ \ #自定义日志端口
-v "$(pwd)"/.env:/var/www/.env \  #环境变量
--env-file ./.env \
--name benotes fr0tt/benotes
```

---

# 四、文件共享

匿名口令分享文本，文件，像拿快递一样取文件。

```
轻松上传：复制粘贴，拖拽选择
 多种类型：文本，文件
 防止爆破：错误次数限制
 防止滥用：IP限制上传次数
 口令分享：随机口令，存取文件，自定义次数以及有效期
 匿名分享：无需注册，无需登录
 管理面板：查看所有文件，删除文件
```

![图片](./Docker应用收集.assets/640-1714728633204-56.webp)

```
docker run -d
--name filecodebox
-p 12345:12345  #自定义端口
-v /opt/FileCodeBox/:/app/data  #自定义文件路径
--restart=always
lanol/filecodebox:beta
```

---

# 五、可视化开发平台

ILLA 是一个强大的开源低代码平台，供开发人员构建内部工具。通过使用 ILLA 的组件和操作库，开发人员可以节省大量构建工具的时间。

```
⚽ 实时协作：我们可以一起实时创建内容。
🤖 自动化支持：连接一切组件，并在 5 秒内实现自动化。
📝 Page支持：创建内容丰富且 UI 友好的工具的基础。
🎨 由 ILLA Design 提供支持：组件不应限制您的想象力。
```

![图片](./Docker应用收集.assets/640-1714728633204-57.webp)

```
docker run
--name illa
-p 2022:2022
illasoft/illa-builder:latest
#默认账号: root
#默认密码: password
```

---

# 六、屏幕共享

Screego，可选择分享电脑全屏、窗口、浏览器标签页等三种分享模式

并拥有更低延迟、更高质量的屏幕共享体验。支持多用户、基于 WebRTC 进行安全传输

```
多用户屏幕共享
通过WebRTC进行安全传输
低延迟/高分辨率
```

![图片](./Docker应用收集.assets/640-1714728633204-58.webp)

```
#host网络
docker run -d
--name screego
--net=host
-e SCREEGO_EXTERNAL_IP=YOUREXTERNALIP
screego/server:1.10.3
默认端口：5050

#非host网络
docker run -it \
-e SCREEGO_EXTERNAL_IP=EXTERNALIP \
-e SCREEGO_TURN_PORT_RANGE=50000:50200 \
-p 5050:5050 \
-p 3478:3478 \
-p 50000-50200:50000-50200/udp \
screego/server:1.10.3
```

---

# 七、游戏管理

受 Jellyfin 的启发，RomM 允许您通过现代界面处理所有游戏，同时使用 IGDB 元数据增强它们。

RomM 是一个专注于复古游戏的游戏库管理器，它使您能够从 Web 浏览器有效地管理和组织所有游戏。

```
⚡ 特征
扫描您的游戏库（一次或按平台扫描）并使用 IGDB 元数据丰富它。
通过 Web 浏览器访问您的图书馆。
如果扫描没有找到正确的结果，请从匹配的IGDB结果中轻松选择。
与 EmuDeck 文件夹结构兼容。
支持具有多个文件的游戏。
直接从您的网络浏览器下载游戏。
直接从 Web 浏览器编辑游戏文件。
直接从您的网络浏览器上传游戏
为每个游戏设置自定义封面
包括区域、修订版/版本和额外标签支持。
适用于SQLite或MariaDB。
采用响应式设计，支持深色模式。
```

## 一、Homepage 德古拉主题包

一款基于 homepage 导航的深色模式主题包——德古拉皮肤，不能独立运行，需要建立在 homepage 的基础上。

包含全新的 Icons 和背景。

下载地址：**https://github.com/Jas-SinghFSU/homepage-dracula?tab=readme-ov-file**

![图片](./Docker应用收集.assets/640-1714728865402-71.webp)

## 二、本地运行的 AI（一）

一款 100%在本地运行的多平台的 OpenAI 模型，支持 MacOS、Windows、Linux 客户端，支持 Docker 环境部署。

有人测试过，能力在 GPT3.5 之下，对于无法科学上网的朋友可以使用一下

好处是本地跑速度快很多，而且可以作为 OpenAI 的 API 使用。

项目地址：**https://github.com/janhq/jan**

![图片](./Docker应用收集.assets/640-1714728874759-74.webp)

```bash
git clone https://github.com/janhq/jan.git
cd Jan
# 默认CPU模式部署
docker compose --profile cpu-fs up -d
# S3文件模式CPU模式部署
docker compose --profile cpu-s3fs up -d
# 默认GPU模式部署
docker compose --profile gpu-fs up -d
# S3文件模式GPU模式部署
docker compose --profile gpu-s3fs up -d
```

## 三、本地运行的 AI（二）

🤖 免费的开源 OpenAI 替代方案————————LocalAI

```
自托管、社区驱动和本地优先。
直接替代在消费级硬件上运行的 OpenAI。
无需GPU。
支持运行ggguf,transformers,diffusers等多种模型。
它允许生成文本、音频、视频、图像。还具有语音克隆功能。
```

![图片](./Docker应用收集.assets/640-1714728895605-77.webp)

🔻 以下为自建镜像

```bash
#下载源代码，包含dockerfile等文件
git clone https://github.com/mudler/LocalAI.git
#进入下载的文件夹
cd <LocalAI> #这里替换成你下载的文件名
#修改配置文件并启动
docker-compose up -d
```

🔻 以下为官方镜像（纯 CPU 的，考虑到 NAS 一般不支持 cuda，GPU 支持的我就不放了，可以去官网找）

![图片](./Docker应用收集.assets/640-1714728905229-80.webp)

## 四、AI 对话集成客户端

ChatALL（齐叨）是一款同时与 ChatGPT、Bing Chat、Bard、Alpaca、Vicuna、Claude、ChatGLM、MOSS、讯飞星火、文心一言等聊天的集成客户端。

支持 windows、macOS、linux，下载安装即用。

项目地址：**https://github.com/sunner/ChatALL/releases**

![图片](./Docker应用收集.assets/640-1714728912778-83.webp)

![图片](./Docker应用收集.assets/640-1714728922317-86.webp)

## 五、游戏、桌面串流项目

Moonlight PC 是一款基于 NVIDIA 串流技术的开源游戏客户端，支持 PC、WEB、Steam Link、安卓、IOS 等多端。

首先在 GeForce Experience 的设置中启用 GameStream

然后保持主机和客户端在同一局域网内，打开程序后，通过输入 pin 码来实现游戏串流。

```
Windows、Mac 和 Linux 上的硬件加速视频解码
最高4K、120帧的画面展示
支持 H.264、HEVC 和 AV1 编解码器（AV1 需要 Sunshine 和支持的主机 GPU）
HDR streaming support HDR 流媒体支持
7.1 环绕声音频支持
10 点多点触控支持（仅限 Sunshine）
游戏手柄支持，具有力反馈和运动控制，最多可容纳 16 名玩家
支持指针捕获（用于游戏）和直接鼠标控制（用于远程桌面）
支持将系统范围的键盘快捷键（如 Alt+Tab）传递给主机
```

项目地址:**https://github.com/moonlight-stream**

![图片](./Docker应用收集.assets/640-1714728931239-89.webp)

![图片](./Docker应用收集.assets/640-1714728940077-92.png)

## 六、RSS 聚合工具

FreshRSS 是一款免费的、自托管的新闻聚合工具。

具有匿名阅读模式，支持用户自定义标签。有一个用于（移动）客户端的 API 和一个命令行界面。

支持不同的登录方法：Web 表单（包括匿名选项）、HTTP 身份验证（与代理委派兼容）、OpenID Connect。

![图片](./Docker应用收集.assets/640-1714728948707-95.webp)

🔻 移动端 API 支持列表

![图片](./Docker应用收集.assets/640-1714728956917-98.png)

```
docker run -d
  --name freshrss \
  --restart unless-stopped
  --log-opt max-size=10m \
  -p 8080:80 \   #自定义端口
  -e TZ=Asia/Shanghai \
  -e 'CRON_MIN=1,31' \
  -v freshrss_data:/var/www/FreshRSS/data \   #自定义存储路径
  -v freshrss_extensions:/var/www/FreshRSS/extensions \   #自定义扩展路径

  freshrss/freshrss
```

---

## 七、书签与稍后阅读

Wallabag 是一个 Web 应用程序，允许保存网页以供以后阅读。

单击、保存并在需要时阅读它。它提取内容，这样您就不会被弹窗打扰。

浏览器插件：支持 chrome、dege、opera、firefox，搜索 Wallabag 即可

手机客户端：支持 IOS、安卓移动端。

![图片](./Docker应用收集.assets/640-1714728965656-101.webp)

```
docker run
-v /opt/wallabag/data:/var/www/wallabag/data
-v /opt/wallabag/images:/var/www/wallabag/web/assets/images
-p 80:80
-e "SYMFONY__ENV__DOMAIN_NAME=http://localhost" 	#定义访问域名或IP
wallabag/wallabag
```

---

## 八、可视化机器人开发框架

Koishi 是一个跨平台、可扩展、高性能的聊天机器人框架。支持 MacOS、windows、Linux,Docker 环境部署。

即便是零基础的用户也能在几分钟之内搭建自己的聊天机器人，插件市场提供近 1000 种插件，真正实现了机器人的开箱即用。

```
提供在线插件市场，即使没有任何编程基础，也能轻松在控制台中下载安装插件
支持 QQ，Telegram，Discord 等主流聊天平台，支持多账户和跨平台数据互通
随时随地通过控制面板监控运行状态，控制机器人的行为，甚至上号聊天
```

![图片](./Docker应用收集.assets/640-1714728976105-104.webp)

![图片](./Docker应用收集.assets/640-1714728990130-107.webp)

![图片](./Docker应用收集.assets/640-1714728996189-110.png)

```
docker run
--name koishi\
-p 5140:5140\
-v /some/place:/koishi \
-e TZ=Asia/Shanghai\
koishijs/koishi\
```

---

## 九、线上办公

WorkAdventure 是一个基于 Web 的协作工作区，以 16 位视频游戏的形式呈现。

基于 jitsi 开源视频会议工具进行线上会议办公，可以自己创建地图、办公环境，感觉是个然并卵项目。

在 WorkAdventure 中，您可以在办公室四处走动并与同事交谈（使用视频聊天系统，当您接近某人时会触发）。

![图片](./Docker应用收集.assets/640-1714729005393-113.webp)

![图片](./Docker应用收集.assets/640-1714729012113-116.webp)

```bash
git clone https://github.com/workadventure/workadventure.git
cd <folder>
cp .env.template .env
docker-compose up -d
```

---

## 十、漫画影视

miru-app 是一个多功能应用程序，免费、开源，支持视频、漫画和小说的第三方扩展源，可在 Android、Windows 和 Web 平台上使用。

![图片](./Docker应用收集.assets/640-1714729019333-119.webp)

![图片](./Docker应用收集.assets/640-1714729025704-122.webp)

# 开源 GPT 大全

项目地址：https://github.com/xx025/carrot

在 github 上 star 数超过 16K 的超赞项目，收集并分享了众多好用的 ChatGPT 镜像站点。

![图片](./Docker应用收集.assets/640-1714729066782-125.webp)

# 摄像佬狂喜——瀑布流照片展示

项目地址：https://github.com/besscroft/kamera

Kamera 是一款专供摄影佬使用的记录网站，采用瀑布流图片展示方式。

支持预览图片及 EXIF 信息，支持常见的图片格式。 可读取 EXIF 信息并上传、管理维护图片数据，首页精品照片展示，子页分类展示等功能。

图片存储采用 S3、AList，不支持本地存储，意味着你需要将本地存储挂载到 alist 上，适配了 PC 和移动端的样式与交互。

![图片](./Docker应用收集.assets/640-1714729066782-126.webp)

🔻 以下采用官方镜像，如果需要修改标题、图片分类，则需要自己 fork 项目，并修改配置文件。

先获取数据库初始化脚本

https://github.com/besscroft/kamera/blob/main/doc/sql/schema.sql

存放到 compose 目录同层级，然后运行 docker-compose

```bash

version: "3.0"

services:
  db:
    image: postgres:latest
    container_name: kamera_db
    ports:
      - 45432:5432
    volumes:
      - dbs:/var/lib/postgresql/data
      - ./schema.sql:/docker-entrypoint-initdb.d/schema.sql
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_USER: postgres
      POSTGRES_DB: postgres

  kamera:
    image: besscroft/kamera:latest
    container_name: kamera
    ports:
      - 43000:3000
    volumes:
      - ./constants/:/app/.output/constants/
    environment:
      Postgre_HOST: 192.168.0.118   #修改为宿主机ip
      Postgre_PORT: 45432
      Postgre_DATABASE: postgres
      Postgre_USERNAME: postgres
      Postgre_PASSWORD: postgres
    depends_on:
      - db

volumes:
  dbs:
```

---

# 聊天工具——唐僧叨叨

项目地址：https://github.com/TangSengDaoDao/TangSengDaoDaoServer

一款支持 web、windows、macos、linux、IOS、安卓的全平台开源聊天项目，使用悟空系列搭建，支持 docker 自托管部署。

页面模仿了微信和 TG，包含常规聊天软件的所有功能，还有支持类似 TG 的 bot 机器人功能。

![图片](./Docker应用收集.assets/640-1714729066782-127.webp)

```bash
# 下载compose需要的文件夹和配置文件
https://github.com/TangSengDaoDao/TangSengDaoDaoServer/tree/main/docker/tsdd
```

```bash

#或者通过指令下载
#生成文件路径
mkdir -p ./configs
#获取compose文件
curl -L https://raw.gitmirror.com/TangSengDaoDao/TangSengDaoDaoServer/main/docker/tsdd/docker-compose.yaml -o ./docker-compose.yaml
#获取.env文件
curl -L https://raw.gitmirror.com/TangSengDaoDao/TangSengDaoDaoServer/main/docker/tsdd/.env -o ./.env
#获取configs下的tsdd.yaml
curl -L https://raw.gitmirror.com/TangSengDaoDao/TangSengDaoDaoServer/main/docker/tsdd/configs/tsdd.yaml -o ./configs/tsdd.yaml
#获取configs下的wk.yaml
curl -L https://raw.gitmirror.com/TangSengDaoDao/TangSengDaoDaoServer/main/docker/tsdd/configs/wk.yaml  -o ./configs/wk.yaml
#启动docker
docker-compose up -d
```

# 图像调整——DragGAN

项目地址：https://github.com/XingangPan/DragGAN

基于点的浏览器在线 P 图，只需要控制点的位置，即可自动进行 P 图，实现交互式编辑。该项目的体验版本，镜像共有 25G，请按需尝试。在 docker build 的过程中，对网络的要求比较高，因此国内还需要更改 dockerfile 内的镜像，部署十分复杂。

```bash

git clone https://github.com/XingangPan/DragGAN.git
cd DranGAN
python scripts/download_model.py
#dockerfile需要调整镜像
docker build . -t draggan:latest
docker run -p 7860:7860 -v "$PWD":/workspace/src -it draggan:latest bash
#使用Nvidia gpu设备，请使用以下代码:
#docker run --gpus all  -p 7860:7860 -v "$PWD":/workspace/src -it draggan:latest bash
cd src && python visualizer_drag_gradio.py --listen
```

---

## 个人管理工具

项目地址：

https://github.com/intri-in/manage-my-damn-life-nextjs?tab=readme-ov-file

Manage My Damn Life （MMDL） 是一个自托管前端，用于管理您的 CalDAV 任务和日历。

相比另外一款个人管理软件 psm，该项目更注重日历和任务管理，适合自我管理惯性比较强或有强迫属性的朋友，一般人请不要尝试。

```bash
管理您的 CalDAV 任务。
支持许多字段，如到期、状态、描述、重复等
支持多个 CalDAV 帐户和多个用户帐户。
以列表、甘特图或日历的形式查看任务。
创建和管理任务筛选器，以根据需要查看任务。
```

---

# 稍后阅读

项目地址：https://github.com/wallabag/wallabag

Wallabag 是一款运行在 web 端的稍后阅读工具，允许保存网页以供后续阅读，该项目在网页保存时会提取当前页面截图，让你在后续阅读的时候一目了然，充分调动自己的回忆。

```bash
其它配套的项目的地址：
Android应用：wallabag/android-app
iOS 应用：wallabag/ios-app
浏览器扩展：wallabag/wallabagger
```

![图片](./Docker应用收集.assets/640-1714729066782-128.webp)

# 基于 Web 的开源电子书管理系统

## 系统介绍

Calibre-Web 是 Calibre 的一个补充，是一个基于 Web 的开源电子书管理工具。它允许用户通过 Web 界面方便地管理他们的电子书库，提供了一个直观的用户界面，支持上传、浏览、搜索和下载电子书。

### | 主要功能

支持多种电子书格式：能够处理各种主流电子书格式，如 EPUB、MOBI、PDF 等，并进行格式转换。

图书元数据采集与展示：支持图书元数据的采集与展示，为用户提供有关图书的详细信息。

多用户管理：支持多用户管理，允许不同的用户拥有各自独立的电子书库和阅读设置。

跨设备阅读：支持多设备通过浏览器进行阅读，用户可以在任何支持 Web 浏览器的设备上访问和阅读他们的电子书库。

Calibre-Web 可以在个人计算机或服务器上运行，并且可以通过任何支持 Web 浏览器的设备访问，包括桌面电脑、平板电脑和智能手机。它为用户提供了一个灵活且便捷的方式来管理和阅读电子书，使用户能够随时随地享受阅读的乐趣。

在使用 Calibre-Web 时，用户需要先安装并启动它，然后使用用户名和密码登录。安装过程通常包括从官方网站下载最新版本，并在服务器或本地计算机上进行安装。一旦安装完成，用户可以通过 Web 浏览器访问 Calibre-Web 的 IP 地址和端口号来开始使用它。

如需了解更多信息，可以访问其官方网站或查阅相关的技术文档。

> Docker 镜像
>
> https://hub.docker.com/r/linuxserver/calibre-web

> 官方 GitHub
>
> https://github.com/janeczku/calibre-web

## 搭建教程

本文通过 Docker 的方式来部署项目，以 Ubuntu 为例，操作步骤：安装 Docker、创建 docker-compose.yml、启动容器运行镜像。

### | 第一步安装 docker

```
sudo apt update
sudo apt install -y docker.io docker-compose
```

### | 第二步创建 docker-compose.yml

在 Home 目录创建 docker-compose.yml，编写以下配置并保存：

```
version: '3'
services:
  calibre-web:
    image: linuxserver/calibre-web
    container_name: calibre-web
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /home/library:/books
      - /home/config:/config
    ports:
      - "8083:8083"
    restart: unless-stopped
```

### | 第三步启动容器运行镜像

```
sudo docker-compose up -d
```

### | 快速搭建

如果不想使用 docker-compose 搭建，可以直接执行 Docker 指令完成。

```
sudo docker run -d \
	--name=calibre-web \
	-e PUID=1000 \
	-e PGID=1000 \
	-e TZ=America/New_York \
	-p 8083:8083 \
	-v /home/library:/books \
	-v /home/config:/config \
	--restart unless-stopped \
	linuxserver/calibre-web
```

指令执行完成后，容器指定 8083 端口访问的，因此还需要在服务器的防火墙上打开相应的端口，在浏览器访问 IP:8083，账号为 admin，密码为 admin123

![图片](./Docker应用收集.assets/640-1715765778326-170.webp)

![图片](./Docker应用收集.assets/640-1715765778327-171.webp)

# 雾锁王国社区服务器

项目地址：https://github.com/jsknnr/enshrouded-server

该项目类似幻兽帕鲁，为官方提供的社区服务器，用于建立自己的游戏服务器，但是游戏本体还是需要购买的。

雾锁王国是一款第三人称生存动作角色扮演游戏，支持最多 16 名玩家同时游玩。玩家需要在游戏中建立基地、收集资源或者制作新装备。玩家将能够召唤非玩家角色至自己的基地，他们能为玩家提供新的制作配方和任务。玩家还可以探索被一层厚厚的雾覆盖的区域，名为“迷雾”。玩家能停留在区域的时间有限，超出期限角色就会死去。玩家能在迷雾区域找到战利品和宝箱，这些物品会定期重新生成。

![图片](./Docker应用收集.assets/640-1714729066783-129.webp)

```bash
services:
  enshrouded:
    image: sknnr/enshrouded-dedicated-server:latest
    ports:
      - "15636:15636/udp"
      - "15637:15637/udp"
    environment:
      - SERVER_NAME=Enshrouded Containerized
      - SERVER_PASSWORD=PleaseChangeMe
      - GAME_PORT=15636
      - QUERY_PORT=15637
      - SERVER_SLOTS=16
      - SERVER_IP=0.0.0.0  #更改为服务器IP地址
    volumes:
      - enshrouded-persistent-data:/home/steam/enshrouded/savegame

volumes:
  enshrouded-persistent-data:
```

# 个人 IPTV 服务器 ErsatzTV

**什么是 ErsatzTV ？**

> `ErsatzTV` 目前还是测试版软件，主要用于使用您的媒体库配置和流式传输自定义直播频道。该软件可能不稳定，正在积极开发中。

家里有小朋友的话，可以用 `ErsatzTV`创建一个动画片频道，用来播放你指定的片子 🙂

## 安装

在群晖上以 Docker 方式安装。

在注册表中搜索 `ersatztv` ，选择第一个 `jasongdove/ersatztv`，版本选择 `latest`。

这个镜像的版本比较多，大致分为：

- `jasongdove/ersatztv:latest`：这是基础镜像，采用软件转码；
- `jasongdove/ersatztv:latest-nvidia`：采用 `Nvidia` 硬件转码；
- `jasongdove/ersatztv:latest-vaapi`：采用 `VAAPI` 硬件转码；

除了上面列的 `x86` 平台外，还支持 `ARM` 平台。此外还有以 `Development` 为 `Tags` 的开发版

> 老苏测试主机不支持硬件转码，所以选择了基础镜像。本文写作时， `latest` 版本对应为 `v0.8.4`；

![图片](./Docker应用收集.assets/640-78958918.webp)

### 卷

在 `docker` 文件夹中，创建一个新文件夹 `ersatztv`，并在其中建两个子文件夹 `config` 和 `media`

|          文件夹          |           装载路径            |         说明         |
| :----------------------: | :---------------------------: | :------------------: |
| `docker/ersatztv/config` | `/root/.local/share/ersatztv` | 存放设置、日志等文件 |
| `docker/ersatztv/media`  |           `/media`            |     存放媒体文件     |

> 其中 `media` 文件夹不是必须的，可以使用原有的媒体文件夹，而装载路径，是可以自己定义的，并且可以加载多个；

![图片](./Docker应用收集.assets/640-1715990048399-7.webp)

### 端口

本地端口不冲突就行，不确定的话可以用命令查一下

```
# 查看端口占用
netstat -tunlp | grep 端口号
```

| 本地端口 | 容器端口 |
| :------: | :------: |
|  `8409`  |  `8409`  |

![图片](./Docker应用收集.assets/640-1715990048399-8.webp)

### 环境

| 可变 |          值          |
| :--: | :------------------: |
| `TZ` | 设为 `Asia/Shanghai` |

![图片](./Docker应用收集.assets/640-1715990048399-9.webp)

## 命令行安装

如果你熟悉命令行，可能用 `docker cli` 更快捷

```bash
# 新建文件夹 ersatztv 和 子目录
mkdir -p /volume1/docker/ersatztv/{config,media}

# 进入 ersatztv 目录
cd /volume1/docker/ersatztv

# 运行容器
docker run -d \
   --restart unless-stopped \
   --name ersatztv \
   -p 8409:8409 \
   -v $(pwd)/config:/root/.local/share/ersatztv \
   -v $(pwd)/media:/media:ro \
   -e TZ=Asia/Shanghai \
   jasongdove/ersatztv

# 示例
docker run -d \
   --restart unless-stopped \
   --name ersatztv \
   -p 8409:8409 \
   -v $(pwd)/config:/root/.local/share/ersatztv \
   -v /volume1/netdisk/AirDisk/USB-DISK-A:/media:ro \
   -e TZ=Asia/Shanghai \
   jasongdove/ersatztv
```

也可以用 `docker-compose` 安装，将下面的内容保存为 `docker-compose.yml` 文件

```
version: '3'

services:
  ersatztv:
    image: jasongdove/ersatztv
    container_name: ersatztv
    restart: unless-stopped
    ports:
      - 8409:8409
    volumes:
      - ./config:/root/.local/share/ersatztv
      - ./media:/media:ro
    environment:
      - TZ=Asia/Shanghai
```

然后执行下面的命令

```bash
# 新建文件夹 ersatztv 和 子目录
mkdir -p /volume1/docker/ersatztv/{config,media}

# 进入 ersatztv 目录
cd /volume1/docker/ersatztv

# 将 docker-compose.yml 放入当前目录

# 一键启动
docker-compose up -d
```

## 运行

在浏览器中输入 `http://群晖IP:8409` 就能看到 `Health Checks`界面

> `Hardware Acceleration` 是感叹号，显示找不到 `ffmpeg` 兼容的硬件加速类型

![图片](./Docker应用收集.assets/640-1715990048399-10.webp)

### Local 库

如果你没有安装`Plex`、`Emby` 或者 `Jellyfin` 媒体服务器，可以选择本地库，而且本地库支持的媒体类型更多，包括：`Movies`、`Shows`、`Music Videos`、`Other Videos` 和 `Songs`。而前面三种媒体库只支持 `Movies` 和 `Shows`

左侧菜单 `Media Source` 中找到 `Local`，可以编辑也可以新增

![图片](./Docker应用收集.assets/640-1715990048399-11.webp)

新增一个，添加好路径之后，先 `ADD PATH`

> 这里的路径就是我们前面对应的媒体文件的 `装载路径`；

![图片](./Docker应用收集.assets/640-1715990048399-12.webp)

添加完路径之后，再 `SAVE CHANGES`

> 其他用不上，老苏都给删了，主要是为了看着比较清爽；

![图片](./Docker应用收集.assets/640-1715990048399-13.webp)

添加完成后，会在 `Media` --> `Libraries` 中看到，转圈表示正在扫描中

![图片](./Docker应用收集.assets/640-1715990048399-14.webp)

扫描完成后，在 `Movies` 中会看到，因为之前添加的类型就是电影

![图片](./Docker应用收集.assets/640-1715990048400-15.webp)

老苏的机器上有 `Jellyfin` 和 `Plex`，但其实指向的是同一个网络磁盘，所以内容和 `Local` 库是一样的

![图片](./Docker应用收集.assets/640-1715990048400-16.webp)

老苏觉得没有必要再通过 `Jellyfin` 多绕一圈了，所以这里就略过了，有兴趣可以去看官方文档：https://ersatztv.org/docs/user-guide/add-media-items

### 创建 Collection（集合）

集合（`Collection`） 有三种类型：

- `Collection`：包含手动添加的项目；
- `Smart Collection`：包含搜索结果或导入的 `Trakt` 列表中的项目，并动态更新；
- `Multi Collection`：包含其他集合和智能集合；

选中电影，点 `ADD TO COLLECTION`

![图片](./Docker应用收集.assets/640-1715990048400-17.webp)

再次点 `ADD TO COLLECTION`

![图片](./Docker应用收集.assets/640-1715990048400-18.webp)

### 添加 Channels（频道）

左侧菜单找到最顶上的 `Channels`

![图片](./Docker应用收集.assets/640-1715990048400-19.webp)

点 `ADD CHANNEL` 开始创建频道

![图片](./Docker应用收集.assets/640-1715990048400-20.webp)

- `Number`：通道号可以是整数，也可以包含一位小数，例如`500`或`500.5`

- `Streaming Mode`：目前支持四种流模式。一般情况下，应使用前两种流模式

- - `HLS Segmenter` 转码内容、支持水印并在程序边界提供最佳性能。
  - `MPEG-TS` 是流模式的轻量级包装 `HLS Segmenter`，为需要 `HDHomeRun` 调谐器的客户端提供支持。
  - `HLS Direct` 不会对内容进行转码，并且可以在低功耗系统上表现更好，但不支持水印，并且某些客户端会在程序边界出现问题。
  - `MPEG-TS (Legacy)` 转码内容并支持水印，但某些客户端会在程序边界出现问题。此模式将在未来版本中删除。

![图片](./Docker应用收集.assets/640-1715990048400-21.webp)

老苏最后选择的 `Stream Mode` 是 `HLS Segmenter`

### 创建 Schedules（时间表）

左侧菜单进入 `Schedules`

![图片](./Docker应用收集.assets/640-1715990048400-22.webp)

点 `ADD SCHEDULE` 开始创建时间表

![图片](./Docker应用收集.assets/640-1715990048400-23.webp)

- `Keep Multi-Part Episodes Together`：这仅适用于随机安排的项目，并将尝试智能地对多部分剧集（即`s05e02 - whatever part 1`和`s05e03 - whatever part 2`）进行分组，以便它们始终安排在一起并始终按正确的顺序播放。
- `Treat Collections As Shows`：这仅在`Keep Multi-Part Episodes Together`启用时适用，并且将尝试对集合中跨节目的多部分剧集进行分组（即像`Show 1 - s03e04 - Whatever Part 1`和 一样的交叉剧集`Show 2 - s01e07 - Whatever Part 2`）。
- `Shuffle Schedule Items`：这会在构建播出时打乱时间表项目的顺序，并且主要用于具有混合节目且每个节目需要独特的时间表项目设置的频道。请注意，这会禁用固定开始时间和洪水模式。
- `Random Start Point`：这将在集合中的随机位置启动每个计划项目。

![图片](./Docker应用收集.assets/640-1715990048400-24.webp)

点 `Edit Schedule Items` 添加 `items`

![图片](./Docker应用收集.assets/640-1715990048400-25.webp)

- `Start Type`：有两种启动类型

- - `Dynamic`：在前一个计划项目之后立即开始；
  - `Fixed`：需要开始时间；

- `Playack Order`：播放顺序

- - `Chronological`：项目按发布日期排序，然后按季和集数排序；
  - `Random`：项目是随机排序的，并且可能包含重复；
  - `Shuffle`：项目是随机排序的，并且在集合中的每个项目都玩过一次之前，不会再播放任何项目；
  - `Shuffle In Order`：项目进行分组（按节目的剧集、按艺术家的音乐视频、所有电影为一组），组内容按时间顺序排序，并且各组在保持各自的时间顺序的同时打乱在一起；

- `Playout Mode`：播放时的行为方式

- - `One`：先播放集合中的一个媒体项目，然后再前进到下一个计划项目；
  - `Multiple`：在前进到下一个计划项目之前播放`Multiple Count`集合中指定的媒体项目；
  - `Duration`：播放适合指定空间的最大数量的完整媒体项目`Playout Duration`；
  - `Flood`：永久播放集合中的媒体项目，或者直到下一个计划项目的开始时间（如果存在）；

> 其他更多参数去看官方文档吧

如果不设置 `Schedules`，播放时会显示 `Channel is Offline`

![图片](./Docker应用收集.assets/640-1715990048400-26.webp)

### 创建 Playout（播放）

左侧菜单找到 `Playouts`

![图片](./Docker应用收集.assets/640-1715990048400-27.webp)

点 `ADD PLAYOUT` 将时间表分配给频道

![图片](./Docker应用收集.assets/640-1715990048400-28.webp)

点右侧第一个按钮 `Edit Alternate Schedules`

![图片](./Docker应用收集.assets/640-1715990048400-29.webp)

可以进行详细的设置

![图片](./Docker应用收集.assets/640-1715990048400-30.webp)

点频道，会显示详细的列表

![图片](./Docker应用收集.assets/640-1715990048400-31.webp)

### 客户端

主界面右上角找到 `M3U`

![图片](./Docker应用收集.assets/640-1715990048400-32.webp)

将地址复制到 `IPTV` 客户端中

![图片](./Docker应用收集.assets/640-1715990048400-33.webp)

如果设置没问题，马上就会看到视频画面了

![图片](./Docker应用收集.assets/640-1715990048400-34.webp)

## 参考文档

> jasongdove/ErsatzTV: Stream custom live channels using your own media
> 地址：https://github.com/jasongdove/ErsatzTV
>
> Your Personal IPTV Server | ErsatzTV
> 地址：https://ersatztv.org/
>
> Introduction | ErsatzTV
> 地址：https://ersatztv.org/docs/intro
>
> Custom IPTV Channels
> 地址：https://ryanbritton.com/2021/03/custom-iptv-channels/
>
> How To Install ErsatzTV to create IPTV Channels in Plex - Smart Home Pursuits
> 地址：https://smarthomepursuits.com/how-to-install-ersatztv-to-create-iptv-channels-in-plex/

# 影视剧中文字幕下载

项目地址：https://github.com/ChineseSubFinder/ChineseSubFinder

大名鼎鼎的中文字幕下载工具 CSF，玩 BT/PT 的朋友应该都知道。之前有值友在其它项目下留言询问中文字幕下载的问题，才发现可能对很多人来说这个项目并不熟悉，因此本次也一并介绍了。

CSF 是一款自动化中文字幕下载工具。字幕网站支持 shooter、xunlei、arrst、a4k、SubtitleBest 。支持 Emby、Jellyfin、Plex、Sonarr、Radarr、TMM 等。

因为自动化字幕下载需要对影视剧结构进行规范化，所以高度依赖 Emby、Jellyfin、Plex、tinyMediaManager 等软件对你的视频（电影、连续剧）进行削刮。在 nt、mp 等各类流媒体软件中都包含这个插件，也可以单独安装。

```bash
docker run -d \
    -v $(pwd)/config:/config   `# 冒号左边请修改为你想在主机上保存配置、日志等文件的路径` \
    -v $(pwd)/media:/media     `# 请修改为需要下载字幕的媒体目录，冒号右边可以改成你方便记忆的目录，多个媒体目录需要添加多个-v映射` \
    -v $(pwd)/browser:/root/.cache/rod/browser `# 容器重启后无需再次下载 chrome，除非 go-rod 更新` \
    -e PUID=1026 \
    -e PGID=100 \
    -e PERMS=true       `# 是否重设/media权限` \
    -e TZ=Asia/Shanghai `# 时区` \
    -e UMASK=022        `# 权限掩码` \
    -p 19035:19035 `# 从0.20.0版本开始，通过webui来设置` \
    -p 19037:19037 `# webui 的视频列表读取图片用，务必设置不要暴露到外网` \
    --name chinesesubfinder \
    --hostname chinesesubfinder \
    --log-driver "json-file" \
    --log-opt "max-size=100m" `# 限制docker控制台日志大小，可自行调整` \
    ChineseSubFinder/ChineseSubFinder
```

# 安卓刮削神器——AfuseKt

项目地址：https://github.com/AttemptD/AfuseKt-release

AfuseKt 是一款安卓端的三方影音媒体库应用，对标 IOS 端的 infuse 应用，包含海报墙、媒体刮削、播放视频等功能。支持协议包含：Alist、SMB、Webdav、Emby（直连）、Local、jellyfin（直连），阿里云等。

目前该项目还在测试中，Cherry 测试了一下名额已经满了（2499 人），不过好消息是测试人员并非固定不变的，作者会根据使用情况对测试人员进行调整，应该有机会能注册上。

![图片](./Docker应用收集.assets/640-1714729399474-199.webp)
![图片](./Docker应用收集.assets/640-1714729399474-200.webp)
![图片](./Docker应用收集.assets/640-1714729399474-201.webp)

---

# 经典的家庭物资管理项目——grocy

项目地址：https://github.com/linuxserver/docker-grocy

Grocy 是一款专注于家庭、厨卫、物资的家用 ERP 系统，项目支持 x86 和 arm 系统，包含有大量的社区三方插件，支持条码生成和管理，可用条码对家庭所有物资进行跟踪、管理，支持设置高低储值，能自动生成购物清单，可管理家庭设备的说明书、相册，还能跟踪你的家务情况。

![图片](./Docker应用收集.assets/640-1714729399474-202.webp)
![图片](./Docker应用收集.assets/640-1714729399474-203.webp)🔻docker-compose 部署方法如下：

```bash
---
services:
  grocy:
    image: lscr.io/linuxserver/grocy:latest
    container_name: grocy
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
    volumes:
      - /path/to/grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped
```

# SearXNG：私有开源的聚合搜索引擎

## 关于 SearXNG

🔺SearXNG 是一个免费的互联网元搜索引擎，它汇聚了 11 大类上百种公开搜索引擎资源，同时支持自定义搜索引擎，使用方面也和我们常用的浏览器一样，支持安全、加密的连接 (HTTPS/SSL)。最重要的是，人家免费开源，不搞所谓的“大数据”这一套，不跟踪、不分析，甚至默认情况下都没启用 Cookie。简单来说，就是隐私方面很可靠！

## SearXNG 部署

为了提高 SearXNG 搜索引擎的性能，我们需要搭配一个 Redis 数据库用作缓存、消息队列或会话存储，在加上 SearXNG 本身，所以我们实际上是用到了两个 Docker 容器服务。既然这样，我们直接使用 Docker Compose 文件部署更方便。

![image-20240514154016317](./Docker应用收集.assets/image-20240514154016317.png)

🔺Docker Compose 文件部署是威联通的强项。我们直接打开威联通 Container Station 之后，点击“应用程序”就可以直接部署了。以下是该项目的 yml 代码，大家按照代码后面的中文注释自行修改即可：

```yaml
version: "3.3"

services:
redis:
  image: "redis:alpine"
  restart: always
  command: redis-server --appendonly yes
  volumes:
    - redis_data:/var/lib/redis #冒号前面映射一个本地目录
  cap_drop:
    - ALL
  cap_add:
    - SETGID
    - SETUID
    - DAC_OVERRIDE

searxng:
  image: elestio/searxng:latest
  restart: always
  ports:
    - "8080:8080" #端口映射不要和本地冲突
  volumes:
    - ./searxng:/etc/searxng:rw #冒号前面映射一个本地目录
  environment:
    - SEARXNG_BASE_URL=https://${DOMAIN}/ #后面的地址是你的反向代理链接
  cap_drop:
    - ALL
  cap_add:
    - CHOWN
    - SETGID
    - SETUID
    - DAC_OVERRIDE
  logging:
    driver: "json-file"
    options:
      max-size: "1m"
      max-file: "1"

volumes:
redis_data:
```

![image-20240514154039447](./Docker应用收集.assets/image-20240514154039447.png)

🔺 至于代码说到的反向代理链接，我是提前就在 Lucky 上设置好了的。其实只要搭建好了 Lucky 设置起来非常简单，自定义一个前端域名，后端地址其实就是【NAS IP:没被占用的端口号】。

如果你习惯 SSH 部署，可以将修改好的 docker-compose.yml 代码文件放到 NAS 任意文件夹内，然后运行以下命令即可一键部署：

```yaml
#进入文件夹
cd 文件夹实际路径
#启动容器
docker-compose up -d
```

![image-20240514154058534](./Docker应用收集.assets/image-20240514154058534.png)

🔺 如果最后看到该程序内两个容器都在运行，说明部署就没有问题。

## SearXNG 体验

部署好之后，我们既可以用传统【IP 地址：端口号】的方式打开 SearXNG，也可以直接使用部署命令中的反向代理链接打开它。

🔺 打开 SearXNG 界面之后，可以看到它的界面确实够简洁。就只一个搜索框。

![image-20240514154131749](./Docker应用收集.assets/image-20240514154131749.png)

🔺 比如我尝试搜索“什么值得买”，整个页面往下全部都是和张大妈有关。并且它也会显示搜索的结果来自于那些搜索引擎，比如 Bing、谷歌，以及一个法国知名搜索引擎 Qwant。

🔺SearXNG 还有很多可自定义设置的选项，并且可以看到它能搜索出来的资源类型也非常的多，包括综合、新闻、图片、视频、音乐、科技、社交媒体、和地图搜索等。

🔺 我们还可以自定义搜索引擎。可以看到它支持的搜索引擎确实非常多，我看了一下差不多 40 多种，遗憾的是国内这么出名的“御三家”搜索引擎巨头竟然没有！

## 最后

其它的我就不再过多展示了，有兴趣的可以部署下来自己慢慢折腾。Searxng 其实功能远比我展示的更为强大，调教之后完全可以替代某些莆田系搜索引擎，作为自已私有的主搜索引擎使用，并且因为我们在部署的时候就做好了反向代理，直接分享给自己的亲戚朋友使用也是没有问题的。

# 开源的共享虚拟浏览器

## 系统介绍

Neko 共享浏览器是一款在 Docker 中运行并使用 WebRTC 技术的自托管虚拟浏览器。这款浏览器不仅仅可以用于浏览网页，还可以运行各种应用程序，完成各种任务，而且所有这些操作都在一个安全且隔离的环境中完成。

### | 主要功能

远程访问：用户可以在任何有网络连接的地方，通过 Neko 浏览器访问互联网。

多设备同步：书签、历史记录和扩展程序等数据可以在不同设备间同步，方便用户在不同设备间无缝切换。

隐私保护：Neko 浏览器提供了多重安全措施，保护用户的个人隐私和数据安全。

快速启动：该浏览器具有快速启动的特性，可以减少用户的等待时间，提升使用体验。

### | 主要特征

文本聊天（具有基本的降价支持，不和谐的风格）

管理员用户（踢出、禁止和强制给予/释放控制、锁定房间）

剪贴板同步（在支持的浏览器上）

表情叠加

忽略用户（聊天和表情）

持久设置

使用自定义 url 参数自动登录。

使用 RTMP 广播房间内容（例如 twitch 或 youtube...）

双向文件传输（如果启用）

如需了解更多信息，可以访问其官方网站或查阅相关的技术文档。

> 官方文档
>
> https://neko.m1k1o.net/#/

> Docker 镜像
>
> https://hub.docker.com/r/m1k1o/neko

> 官方 GitHub
>
> https://github.com/m1k1o/neko

## 搭建教程

本文通过 Docker 的方式来部署项目，以 Ubuntu 为例，操作步骤：安装 Docker、创建 docker-compose.yml、启动容器运行镜像。

### | 第一步安装 docker

```
sudo apt update
sudo apt install -y docker.io docker-compose
```

### 第二步创建 docker-compose.yml

在 Home 目录创建 docker-compose.yml，编写以下配置并保存：

```
version: "3"
services:
  neko:
    image: "m1k1o/neko:firefox"
    restart: "unless-stopped"
    shm_size: "2gb"
    ports:
      - "8080:8080"
      - "52000-52100:52000-52100/udp"
    environment:
      NEKO_SCREEN: 1920x1080@30
      NEKO_PASSWORD: neko
      NEKO_PASSWORD_ADMIN: admin
      NEKO_EPR: 52000-52100
      NEKO_ICELITE: 1
```

### | 第三步启动容器运行镜像

```
sudo docker-compose up -d
```

指令执行完成后，容器指定 8080、52000 至 52100 端口访问的，因此还需要在服务器的防火墙上打开相应的端口。

![图片](./Docker应用收集.assets/82875285.gif)

上述项目搭建是采用火狐内核 Firefox，如果要更换其他浏览器内核，需要将 docker-compose.yml 的镜像修改即可。

```bash
# 谷歌内核
image: "m1k1o/neko:chromium"
# VLC
image: "m1k1o/neko:vlc"
# 树莓派
image: "m1k1o/neko:arm-chromium"
```

# docker 病毒查杀工具——dagda

项目地址：https://github.com/eliasgranderubio/dagda

Dagda 是一款用于对 docker 镜像/容器中的已知漏洞、木马、病毒、恶意软件和其他恶意威胁进行静态分析的工具，监控 docker 守护进程和正在运行的 docker 容器以检测异常活动。数据源包含有已知的漏洞，如 CVE（常见漏洞和暴露）、BID（Bugtraq ID）、RHSA（红帽安全公告）和 RHBA（红帽错误公告），以及来自攻击性安全数据库的已知漏洞导入到 MongoDB 中，以方便在分析过程中搜索这些漏洞和利用。

![图片](./Docker应用收集.assets/640-1714729399474-204.webp)🔻 本项目需要自建 docker 镜像，因此需要通过 git clone 下载源码

```bash
#第一步，下载源码
git clone https://github.com/eliasgranderubio/dagda.git
#第二步，进入文件夹
cd dagda
#第三步，启动compose
docker-compos up -d
```

# 120+款游戏私服一键搭设，利用 NAS 部署游戏服务器统一管理平台

平时大家玩游戏的时候会部署一些个人服务器游玩吗？Cherry 在没有接触 docker 之前，一直是用 windows 来部署游戏服务器后端的，部署教程都很复杂，而且需要电脑一直开机很麻烦。

曾经在一篇合集中，我单独介绍过 panel 这一款项目，翼龙面板是一款专门用于部署和管理个人游戏服务器的工具，用户可以像管理 docker、云主机一样，管理所有开设的游戏服务器。项目使用隔离的 Docker 容器中运行所有游戏服务器，同时向最终用户展示了美观直观的 UI。

今天，Cherry 带来的是该项目的汉化版——翼龙面板汉化版，由开源社区针对 panel 翼龙面板的管理后端汉化并本土化的版本，采用的是原项目实时更新主分支的 dev 内容。

支持的游戏列表如下：
![图片](./Docker应用收集.assets/640-187487.webp)

项目地址：https://github.com/pterodactyl-china/panel

## 系统部署

### 一、前期准备

🔻 新建一个文件夹/etc/pterodactyl/，然后在文件夹下新建`logs`,`database`,`var`,`nginx`,`certs`共 5 个文件夹

![图片](./Docker应用收集.assets/640-1715765586843-102.webp)🔻 新建一个路径/volume1/docker/panel/docker-compose.yaml 文件，将下面代码复制进去，根据自己的需求修改代码，然后放到目录下。

```yaml
version: "3.8"
x-common:
  database:
    &db-environment # 不要将下面行尾 "&db-password" 删除，这对面板功能很重要。
    MYSQL_PASSWORD: &db-password "panel" #修改panel为自定义密码
    MYSQL_ROOT_PASSWORD: "panel" #修改panel为自定义root密码
  panel: &panel-environment
    APP_URL: "http://cgakki.top:56783" #修改为自己的外网地址，和下面端口保持一致
    APP_TIMEZONE: "Asia/Shanghai"
    APP_SERVICE_AUTHOR: "noreply@example.com"
    # 如果您想使用 Let's Encrypt 为面板生成 SSL 证书，请取消下面的注释行并写入配置
    # LE_EMAIL: ""
  mail: &mail-environment #SMTP根据自己实际情况改，也可以不改
    MAIL_FROM: "noreply@example.com"
    MAIL_DRIVER: "smtp"
    MAIL_HOST: "mail"
    MAIL_PORT: "1025"
    MAIL_USERNAME: ""
    MAIL_PASSWORD: ""
    MAIL_ENCRYPTION: "true"

# ------------------------------------------------------------------------------------------
# 下面的危险区域。请仅在您了解自己在做什么的情况下进行以下修改。

services:
  database:
    image: mariadb:10.5
    restart: always
    command: --default-authentication-plugin=mysql_native_password
    volumes:
      - "/etc/pterodactyl/database:/var/lib/mysql"
    environment:
      <<: *db-environment
      MYSQL_DATABASE: "panel"
      MYSQL_USER: "pterodactyl"
  cache:
    image: redis:alpine
    restart: always
  panel:
    image: ghcr.dockerproxy.com/pterodactyl-china/panel:latest
    restart: always
    ports: #两个端口选一个就行了，另外一个注释掉，看你APP_URl用的是http还是https
      - "56783:80" #这个HTTP端口，可以改左边，改了的话上面的APP_URL要对应左侧端口
      # - "443:443"            #这个HTTPS端口，同样改了的话上面的APP_URL要对应左侧端口
    links:
      - database
      - cache
    volumes:
      - "/etc/pterodactyl/var/:/app/var/"
      - "/etc/pterodactyl/nginx/:/etc/nginx/http.d/"
      - "/etc/pterodactyl/certs/:/etc/letsencrypt/"
      - "/etc/pterodactyl/logs/:/app/storage/logs"
    environment:
      <<: [*panel-environment, *mail-environment]
      DB_PASSWORD: *db-password
      APP_ENV: "production"
      APP_ENVIRONMENT_ONLY: "false"
      CACHE_DRIVER: "redis"
      SESSION_DRIVER: "redis"
      QUEUE_DRIVER: "redis"
      REDIS_HOST: "cache"
      DB_HOST: "database"
      DB_PORT: "3306"
networks:
  default:
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

### 二、启动项目

#### 方法一：SSH 部署

通过 ssh 登录 NAS 后台，然后输入以下指令

```
#来到文件夹
cd /volume1/docker/panel
#启动容器
docker-compose up -d
```

#### 方法二：群晖部署 compose

打开 container manager，选择项目，点击新建，选择 penpot 路径，点击下一步即可
![图片](./Docker应用收集.assets/640-1715765586843-103.webp)

---

### 三、生成账号

🔻 生成管理员账号，输入下面指令

```
docker-compose exec panel php artisan p:user:make
```

![图片](./Docker应用收集.assets/640-1715765586843-104.webp)

### 四、部署后端

🔻 先登录前端面板，根据流程新建地域、节点

![图片](./Docker应用收集.assets/640-1715765586844-105.webp)
🔻 节点按图片设置，所有的空都需要填上，填完以后创建节点，**其中守护进程端口和守护进程 SFTP 端口不能冲突，作为 API 调用使用。**
![图片](./Docker应用收集.assets/640-1715765586844-106.webp)
🔻 分配 ip 和端口给游戏服务器使用，作为游戏访问地址，和 panel 当前的控制面板 UI 不同。特别要注意的是，如果不采用端口，则填写的是 NAS 宿主机的 IP 地址，否则无法新建服务器。
![图片](./Docker应用收集.assets/640-1715765586844-107.webp)
🔻 创建完成以后，点到配置页面，新建一个`/etc/pterodactyl/config.yml`将配置文件代码复制进去。或者点击右侧自动生成节点，复制指令。
**方法一**
![图片](./Docker应用收集.assets/640-1715765586844-108.webp)
**方法二**
![图片](./Docker应用收集.assets/640-1715765586844-109.webp)🔻 通过 SSH 登录 NAS 后，输入下列指令安装 wings

```bash
# 下载wings，记住/usr/local/bin/wings这个目录，以后如果要删除，也可以来这里删
curl -L -o /usr/local/bin/wings "https://mirror.ghproxy.com/https://github.com/pterodactyl-china/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"

# 赋权
sudo chmod u+x /usr/local/bin/wings

# 重点，方法二才需要使用，不要搞错
cd /etc/pterodactyl && sudo wings configure --panel-url http://XXXXX:56781 --token ptla_d0bvimYlOT6fuKjHE7nX0ZJEG3eQ9l5B8Eu7aHFmLzw --node 1

# 启动后端
wings --debug
```

🔻 可以看到项目都启动了

![图片](./Docker应用收集.assets/640-1715765586844-110.webp)
🔻 回到面板节点，看看绿色小心心在不在，在就说明正确配置了。
![图片](./Docker应用收集.assets/640-1715765586844-111.webp)

### 五、配置守护进程（可选）

🔻 为了确保服务中断后自动重启，需要通过 systemctl 配置守护进程，将下面的内容放在 `/etc/systemd/system` 目录下的 `wings.service` 文件中后。键入指令重启`systemctl enable --now wings`

```
[Unit]
Description=Pterodactyl Wings Daemon
After=docker.service
Requires=docker.service
PartOf=docker.service

[Service]
User=root
WorkingDirectory=/etc/pterodactyl
LimitNOFILE=4096
PIDFile=/var/run/wings/daemon.pid
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

## 系统使用

至此，我们的翼龙面板前后端都部署好了，剩下的就是配置数据库、存储、模板，然后就开服了。

### （一）新增游戏服务器

需要配置网络环境、数据环境、游戏模板等。

![图片](./Docker应用收集.assets/640-1715765586844-112.webp)
![图片](./Docker应用收集.assets/640-1715765586844-113.webp)
![图片](./Docker应用收集.assets/640-1715765586844-114.webp)
🔻 回到服务器页面，点击右侧的小扳手，可以来到安装页面。
![图片](./Docker应用收集.assets/640-1715765586844-115.webp)
🔻 可以看到项目正在启动中，采用的 docker 的方法安装游戏服务器
![图片](./Docker应用收集.assets/640-1715765586844-116.webp)
🔻 服务器正常跑通
![图片](./Docker应用收集.assets/640-1715765586844-117.webp)

### （二）配置数据库主机

主要用途是给游戏服务器配置数据库长久存储使用的，这里特别账号**必须** 具有 `WITH GRANT OPTION` 权限，最好在刚才的 mysql 数据库基础上，新建一个数据库，专门用来存储游戏数据。

![图片](./Docker应用收集.assets/640-1715765586844-118.webp)
在游戏服务器内可配置数据库节点
![图片](./Docker应用收集.assets/640-1715765586844-119.webp)

### （三）挂载存储路径

主要目的是为了游戏服务器持久化，这个存储路径都是可以自定义的，但是**左侧和右侧**要保持路径一致，因为 wings 是在宿主机上运行服务的。

![图片](./Docker应用收集.assets/640-1715765586844-120.webp)
成功挂载
![图片](./Docker应用收集.assets/640-1715765586844-121.webp)

### （四）游戏服务器模板

模板库:https://github.com/pelican-eggs/eggs

![图片](./Docker应用收集.assets/640-1715765586844-122.webp)

### （五）反代游戏服务器

可以看到，端口只被分配给了本地 ip，因此如果需要其它地方访问游戏服务器的话，需要将端口进行反代。

![图片](./Docker应用收集.assets/640-1715765586844-123.webp)

# 小游戏——人生重启模拟器

项目地址：https://github.com/TangSengDaoDao/TangSengDaoDaoServer

一款经典的人生重开模拟器在线版本（摸鱼神器好嘛！！），支持经典模式（10 连抽开局）、名人模式（名人 3 选 1），肯尼迪老司机可还行。游戏嘛，基本上就是看个故事看个乐，可以解锁很多的剧情和成就。装好后加/view/index.html

![图片](./Docker应用收集.assets/640-1714729399474-205.webp)
![图片](./Docker应用收集.assets/640-1714729399474-206.webp)

🔻 部署指令

```bash
docker run -itd --name=liferestart -p [port]:8080 --restart always sheepgreen/liferestart
```

# excalidraw：开源在线绘图工具

## 项目地址

GitHub：https://github.com/excalidraw/excalidraw

## 项目简介

> Excalidraw 是一款简单易用、功能强大的在线绘图工具，特别适合于团队协作和快速创作。

## 功能

```
简单易用：Excalidraw的界面简洁直观，没有复杂的工具栏和选项，使得用户可以快速上手并创建图形。无论是专业人士还是初学者，都能轻松绘制各种图形。

手绘风格：Excalidraw的绘图风格模仿了手绘图形，使得图形看起来更加自然、生动，并且具有良好的可读性。用户可以通过简单的绘图工具栏和操作面板，轻松快速地绘制出看起来像是手绘的效果，增加了图形的趣味性和生动性。
```

## 部署安装

### 安装 Docker

```
curl -sSL https://get.docker.com/ | sh
```

### 安装 Docker-compose

```
下载 Docker-Compose 二进制包
curl -L https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

给文件增加执行权限
chmod +x /usr/local/bin/docker-compose

检查 Docker-Compose 版本
docker-compose -v
```

### Docker 运行服务

```
sudo docker run --rm -dit --name excalidraw -p 5000:80 excalidraw/excalidraw:latest
```

### Docker-compose 运行服务

```
vim docker-compose.yml


version: '3'
services:
  yourls:
    image: yourls
    restart: always
    ports:
      - 8000:80
    environment:
      YOURLS_DB_PASS: yourls
      YOURLS_SITE: http://192.168.1.104:8000 # 有域名写域名，没域名写IP:端口
      YOURLS_USER: admin
      YOURLS_PASS: admin
  mysql:
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: yourls
      MYSQL_DATABASE: yourls


docker-compose up -d
```

## Demo 访问

```
http://ip:5000
```

![图片](./Docker应用收集.assets/640-1715343882817-540.webp)

![图片](./Docker应用收集.assets/640-1715343882817-541.webp)

## 招贤纳士

# IP 工具

GitHub：[jason5ng32/MyIP: The best IP Toolbox. Easy to check what's your IPs, IP geolocation, check for DNS leaks, examine WebRTC connections, speed test, ping test, MTR test, check website availability and more! || 🇨🇳 可能是最好用的 IP 工具箱。轻松检查你的 IP，IP 地理位置，检查 DNS 泄漏，检查 WebRTC 连接，速度测试，ping 测试，MTR 测试，检查网站可用性等等。 (github.com)](https://github.com/jason5ng32/MyIP)

这个开源项目的作者是一名产品经理，这个项目是通过 chatgpt 完成的，功能强大，页面简洁实用。

再去扒一下作者，原来是一位大佬。

## **关于 MyIP**

包含的功能挺多的，可以查看 IP 信息，包括（IP 所在地区、网络设备、是否为代理、网络类型等），还可以查看网络联通性（到常用网站联通延迟情况）、可以进行 webrtc 测试、DNS 泄露测试、网速测试等

## MyIP 工具特点

- 支持多语言，中文、英文、法文
- 支持 PWA，可以作为手机应用或者桌面应用
- 带有暗黑模式，可以设置为自动切换 等等

## 本地部署

直接通过 docker 方式部署

```bash
docker run -d -p 18966:18966 --name myip --restart always jason5ng32/myip:latest
```

> 传送门：https://ipcheck.ing/#/

# 游戏服务器管理面板——panel(汉化版)

原项目地址：https://github.com/pterodactyl/panel

汉化项目地址：https://github.com/pterodactyl-china/panel

Pterodactyl® 是一个免费的开源游戏服务器管理面板，使用 PHP、React 和 Go 构建。项目目标实在隔离的 Docker 容器中运行所有游戏服务器，同时向最终用户展示了美观直观的 UI。通过 UI，我们可以轻松的控制所有游戏服务器的开关和日志。

![图片](./Docker应用收集.assets/640-1714729399474-207.webp)

支持开服的游戏列表

> 核心游戏: Minecraft（我的世界） Rust （腐蚀） Terraria （泰拉瑞亚） Teamspeak Mumble Team Fortress 2 （军团要塞 2） Counter Strike: Global Offensive （反恐精英：全球攻势） Garry’s Mod （盖瑞的模组） ARK: Survival Evolved （方舟：生存进化） 社区提供支持，包括：Factorio （异星工厂） San Andreas: MP Pocketmine MP Squad （战术小队） FiveM Xonotic Starmade 等等

🔻docker-compose 指令，具体文档可以看https://github.com/pterodactyl-china/panel/blob/1.0-develop/.github/docker/README.md

```bash
mkdir -p /volume1/docekr/pterodactyl
cd /volume1/docekr/pterodactyl
curl -Lo docker-compose.yml https://raw.gitmirror.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml
chmod +x docker-compose.yml
# 根据文档修改好环境变量以后，启动compose
docker-compose up -d
# 创建管理员用户
docker-compose exec panel php artisan p:user:make
```

# 部署 YesPlayMusic 在线音乐播放器

GitHub：[qier222/YesPlayMusic: 高颜值的第三方网易云播放器，支持 Windows / macOS / Linux (github.com)](https://github.com/qier222/YesPlayMusic)

在线：[qier222/YesPlayMusic: 高颜值的第三方网易云播放器，支持 Windows / macOS / Linux (github.com)](https://github.com/qier222/YesPlayMusic)

## 一、YesPlayMusic 介绍

### 1.1 YesPlayMusic 简介

> YesPlayMusic 是一款高颜值的第三方网易云播放器，支持 Windows / macOS / Linux。

### 1.2 YesPlayMusic 功能

- ✅ 使用 Vue.js 全家桶开发
- 🔴 网易云账号登录（扫码/手机/邮箱登录）
- 📺 支持 MV 播放
- 📃 支持歌词显示
- 📻 支持私人 FM / 每日推荐歌曲
- 🚫🤝 无任何社交功能
- 🌎️ 海外用户可直接播放（需要登录网易云账号）
- 🔐 支持 UnblockNeteaseMusic，自动使用各类音源替换变灰歌曲链接 （网页版不支持）
- 「各类音源」指默认启用的音源。
- YouTube 音源需自行安装 yt-dlp。
- ✔️ 每日自动签到（手机端和电脑端同时签到）
- 🌚 Light/Dark Mode 自动切换
- 👆 支持 Touch Bar
- 🖥️ 支持 PWA，可在 Chrome/Edge 里点击地址栏右边的 ➕ 安装到电脑
- 🟥 支持 Last.fm Scrobble
- ☁️ 支持音乐云盘
- ⌨️ 自定义快捷键和全局快捷键
- 🎧 支持 Mpris
- 🛠 更多特性开发中

### 1.3 YesPlayMusic 使用场景

- 在 Windows / macOS / Linux 系统上，使用 YesPlayMusic 作为网易云音乐的替代播放器，享受更好的用户界面和功能。
- 用户希望在电脑上同时使用多个网易云音乐账号，可以使用 YesPlayMusic 来同时登录并切换不同的账号。
- 喜欢用电脑来听音乐的用户，可以使用 YesPlayMusic 来管理自己的音乐库，创建和编辑歌单，收藏喜欢的音乐，以及发现新的音乐。
- 希望在电脑上享受高品质音乐的用户，可以使用 YesPlayMusic 来调整音质，选择高品质的音乐源进行播放。
- 喜欢在线听音乐的用户，可以使用 YesPlayMusic 来浏览和搜索网易云音乐的丰富音乐库，快速找到自己喜欢的音乐并进行播放。
- 对于开发者来说，YesPlayMusic 是一款开源软件，可以用来学习和了解如何开发一个网易云音乐的播放器，或者参与 YesPlayMusic 的开发和贡献自己的代码。

## 二、本地环境介绍

### 2.1 本地环境规划

> 本次实践为个人测试环境，操作系统版本为 centos7.6。

| hostname | IP 地址       | 操作系统版本 | Docker 版本 |
| -------- | ------------- | ------------ | ----------- |
| jeven    | 192.168.3.166 | centos 7.6   | 2 20.10.17  |

### 2.2 本次实践介绍

> 1.本次实践部署环境为个人测试环境，生产环境请谨慎； 2.在 Docker 环境下部署 YesPlayMusic 在线音乐播放器。

## 三、本地环境检查

### 3.1 检查 Docker 服务状态

> 检查 Docker 服务是否正常运行，确保 Docker 正常运行。

```
[root@jeven ~]# systemctl status docker
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2024-01-15 22:37:45 CST; 58min ago
     Docs: https://docs.docker.com
 Main PID: 11675 (dockerd)
    Tasks: 22
   Memory: 156.1M
   CGroup: /system.slice/docker.service
```

### 3.2 检查 Docker 版本

> 检查 Docker 版本

```
[root@jeven ~]# docker -v
Docker version 20.10.17, build 100c701
```

### 3.3 检查 docker compose 版本

> 检查 Docker compose 版本，确保 2.0 以上版本。

```
[root@jeven ~]# docker compose version
Docker Compose version v2.6.0
```

## 四、下载 YesPlayMusic 镜像

> 从 docker hub 拉取 YesPlayMusic 镜像

```
[root@jeven ~]# docker pull  fogforest/yesplaymusic
Using default tag: latest
latest: Pulling from fogforest/yesplaymusic
f56be85fc22e: Pull complete
2ce963c369bc: Pull complete
59b9d2200e63: Pull complete
3e1e579c95fe: Pull complete
547a97583f72: Pull complete
1f21f983520d: Pull complete
c23b4f8cf279: Pull complete
474309a46f42: Pull complete
af64c5430238: Pull complete
7b75d6dbb9f1: Pull complete
c778446d5628: Pull complete
Digest: sha256:71f9148acac06b5b1be9c3b5848740b844e39ac16cf2dc9b04a5e492a7e542a5
Status: Downloaded newer image for fogforest/yesplaymusic:latest
docker.io/fogforest/yesplaymusic:latest
```

## 五、部署 YesPlayMusic

### 5.1 创建部署目录

> 创建部署目录/data/yesplaymusic

```
mkdir -p /data/yesplaymusic  && cd /data/yesplaymusic
```

### 5.2 编辑 docker-compose.yaml 文件

> 使用 docker-cli 创建 YesPlayMusic 容器，执行以下命令，映射端口可自行修改。

```
docker run -d \
--name yesplaymusic  \
--restart always
-p 7950:80
fogforest/yesplaymusic
```

> 本次实践部署使用 docker compose 方式，编辑 docker-compose.yaml 文件。

```
version: '3'
services:
  yesplaymusic:
    container_name: yesplaymusic
    image: fogforest/yesplaymusic
    ports:
      - 7950:80
    restart: always
```

### 5.3 创建 YesPlayMusic 容器

> 使用 docker-compose.yaml 文件创建 YesPlayMusic 容器

```
docker compose up -d
```

![image-20240511180058483](./Docker应用收集.assets/image-20240511180058483.png)

### 5.4 检查 YesPlayMusic 容器状态

> 检查 YesPlayMusic 容器状态，确保 YesPlayMusic 容器正常启动。

```
[root@jeven yesplaymusic]#  docker compose ps
NAME                COMMAND                  SERVICE             STATUS              PORTS
yesplaymusic        "/docker-entrypoint.…"   yesplaymusic        running             0.0.0.0:7950->80/tcp, :::7950->80/tcp
```

### 5.5 检查 YesPlayMusic 容器日志

> 检查 YesPlayMusic 容器日志，确保 YesPlayMusic 服务正常运行。

```
[root@jeven yesplaymusic]# docker logs yesplaymusic
2024/01/15 15:42:30 [notice] 7#7: using the "epoll" event method
2024/01/15 15:42:30 [notice] 7#7: nginx/1.23.4
2024/01/15 15:42:30 [notice] 7#7: built by gcc 12.2.1 20220924 (Alpine 12.2.1_git20220924-r4)
2024/01/15 15:42:30 [notice] 7#7: OS: Linux 3.10.0-957.el7.x86_64
2024/01/15 15:42:30 [notice] 7#7: getrlimit(RLIMIT_NOFILE): 65536:65536
2024/01/15 15:42:30 [notice] 8#8: start worker processes
2024/01/15 15:42:30 [notice] 8#8: start worker process 9
2024/01/15 15:42:30 [notice] 8#8: start worker process 10
server running @ http://localhost:3000
```

![image-20240511180120768](./Docker应用收集.assets/image-20240511180120768.png)

## 六、访问 YesPlayMusic 首页

### 6.1 访问 YesPlayMusic

> 访问地址：http://192.168.3.166:7950，将IP替换为自己服务器IP地址，进入到YesPlayMusic登录页。如果无法访问，则检查服务器防火墙是否设置，云服务器的安全组端口是否放行等。

### 6.2 在线播放音乐

> 可以登录自己的网易云账号进行绑定，也可以直接在线播放歌曲。

## 七、总结

> YesPlayMusic 是一款优秀的个人音乐播放器，可以通过 Docker 方式快速部署在本地服务器。它拥有美观的界面设计，可以绑定网易云音乐账号，实现歌曲收藏的同步。界面简洁清爽，操作简单，搜索歌曲快速准确。同时，它支持自定义歌单和歌词显示，提供了良好的播放体验。对于喜欢使用网易云音乐的用户来说，YesPlayMusic 是一个很好的选择。

# Musicn：音乐命令行下载工具

**GitHub**：[zonemeen/musicn: 🎵 一个可播放及下载音乐的 Node.js 命令行工具 (github.com)](https://github.com/zonemeen/musicn)

## 简介

Musicn 是一个可播放及下载高品质 🎵 音乐 🎵 的命令行工具。支持咪咕、酷我、酷狗和网易云的服务，容器支持 amd64/arm64 架构。

## 部署

命令行 + Web 模式

```yaml
docker run -d --name=musicn --restart=unless-stopped -v ${PWD}/musicn:/data -p 7478:7478 ghcr.io/wy580477/musicn-container:latest msc -q
```

仅命令行模式 （空闲时几乎不耗内存）

```yaml
docker run -d --name=musicn --restart=unless-stopped -v ${PWD}/musicn:/data ghcr.io/wy580477/musicn-container:latest tail -f
```

`{PWD}/musicn` 为命令行模式下载文件存放目录，默认当前目录下 musicn 文件夹。执行 musicn 命令：

```bash
docker exec -it musicn msc 周杰伦

# 设置 bash 命令别名方便使用，重新登陆 shell 后生效
echo "alias msc='docker exec -it musicn msc'" >> ~/.bashrc

# 查看命令帮助
msc -h

# 指定子目录 test 为下载目录
msc 周杰伦 -p ./test

# 升级版本
docker container rm musicn --force && docker pull ghcr.io/wy580477/musicn-container:latest
# 然后重新执行安装命令

# 容器内升级 （不推荐，万一我以后弃坑不更新 image 版本，可以用这个方法更新）
docker exec -it musicn npm i musicn -g
```

访问 `http://<宿主机 ip>:7478` 可到达 Web 搜索和下载界面。(扫码访问功能不可用, 请手动输入网址访问)

### Docker-Compose 部署

命令行 + Web 模式

```yaml
version: "3.4"
services:
  musicn:
    image: ghcr.io/wy580477/musicn-container:latest
    container_name: musicn
    restart: unless-stopped
    entrypoint: ["/sbin/tini", "--", "msc", "-q"]
    ports:
      - "7478:7478"
    volumes:
      - ./musicn:/data
```

仅命令行模式

```yaml
version: "3.4"
services:
  musicn:
    image: ghcr.io/wy580477/musicn-container:latest
    container_name: musicn
    restart: unless-stopped
    entrypoint: ["/sbin/tini", "--", "tail", "-f"]
    volumes:
      - ./musicn:/data
```

![图片](./Docker应用收集.assets/640-1715067016319-188.webp)

# free 音乐下载工具——musicfree

手机端项目地址：https://github.com/maotoumao/MusicFree

桌面端项目地址：https://github.com/maotoumao/MusicFreeDesktop

插件化、定制化、无广告的免费音乐播放器，目前只支持 Android 和 Harmony OS。

> 1️⃣ 插件化：本软件仅仅是一个播放器，本身并不集成任何平台的任何音源，所有的搜索、播放、歌单导入等功能全部基于插件。这也就意味着，只要可以在互联网上搜索到的音源，只要有对应的插件，你都可以使用本软件进行搜索、播放等功能。关于插件的详细说明请看插件一节。
>
> 2️⃣ 插件支持的功能：搜索（音乐、专辑、作者）、播放、查看专辑、查看作者详细信息、导入单曲、导入歌单、获取歌词等。
>
> 3️⃣ 歌词关联：你可以把两首歌的歌词关联起来，比如将歌曲 A 的歌词关联到歌曲 B，关联后 A、B 两首歌都将显示歌曲 B 的歌词。你也可以关联多首歌的歌词，如 A->B->C，这样 A、B、C 三首歌都将显示 C 的歌词。

![图片](./Docker应用收集.assets/640-1714729399475-208.webp)

---

# QQ 频道 AI 机器人——QChatGPT

项目地址：https://github.com/RockChinQ/QChatGPT

😎 高稳定性、🧩 支持插件、🌏 实时联网的 ChatGPT QQ / QQ 频道 / One Bot 机器人 🤖 | 支持 ChatGPT、Claude、Gemini Pro、Moonshot（月之暗面 ）、gpt4free、One API 的 QQ / QQ 频道 / OneBot 机器人平台

具体安装步骤比较复杂，可以单独写一篇了，而且文档中都比较齐全，这里就步赘述了，感兴趣的可以自行查阅项目地址。

> **主要功能如下：**
>
> ```
> ✅回复符合上下文
> ✅支持敏感词过滤，避免账号风险
> ✅群内多种响应规则，不必at
> ✅使用官方api，稳定快捷
> ✅组件少，部署方便，提供一键安装器及Docker安装
> ✅支持预设文字
> ✅支持插件加载🧩
> ✅私聊、群聊黑名单机制
> ✅回复速度限制
> ```

![图片](./Docker应用收集.assets/640-1714729399475-209.webp)

---

# 炫酷监控仪表盘——netdata

项目地址：https://github.com/netdata/netdata

玩 openwrt 的朋友对这个监控仪表盘那应该是相当熟悉，作为 op 内置的仪表盘，在 nas 和 linux 上也可以部署。功能包含系统资源、存储、网络、风扇、温度、GPU、日志、虚拟机、包管理等等功能。

![图片](./Docker应用收集.assets/640-1714729399475-210.gif)

🔻 部署指令

```bash
docker run -itd \
--name=netdata \
 -p 56789:19999 \
 -v /proc:/host/proc:ro \
 -v /sys:/host/sys:ro \
 -v /var/run/docker.sock:/var/run/docker.sock:ro \
 --cap-add SYS_PTRACE \
 --security-opt apparmor=unconfined \
 netdata/netdata
```

---

# 局域网文件互传工具——localsend

项目地址：https://github.com/localsend/localsend

LocalSend 是一款免费的开源应用程序，可让您通过本地网络与附近的设备安全地共享文件和消息，而无需互联网连接。LocalSend 使用安全通信协议，允许设备通过 REST API 进行通信。所有数据都通过 HTTPS 安全地发送，并且 TLS/SSL 证书会在每台设备上动态生成，确保最大的安全性。

项目范围支持 windows、macos、linux、ios、安卓、fireos。

![图片](./Docker应用收集.assets/640-1714729399475-211.webp)

![图片](./Docker应用收集.assets/640-1714729399475-212.webp)

# 部署 gopeed 高速下载器

## 一、gopeed 介绍

### 1.1 gopeed 简介

> Gopeed（全称 Go Speed），是一款由 Golang+Flutter 开发的高速下载器，支持（HTTP、BitTorrent、Magnet）协议下载，并且支持全平台使用。除了基本的下载功能外，Gopeed 还是一款高度可定制化的下载器，支持通过对接 APIs 或者安装和开发扩展来实现更多的功能。

### 1.2 gopeed 使用场景

- 下载大文件：当需要下载大型文件时，GoPeed 可以利用多线程技术和智能分流算法，提供更快速的下载速度，节约用户的时间。
- 加速网络下载：如果你的网络连接速度较慢，使用 GoPeed 下载工具可以帮助提升下载速度，通过多线程下载和优化网络连接，加快下载速度。
- 批量下载：如果需要下载多个文件或者多个链接，GoPeed 的批量下载功能可以同时下载多个文件，提高效率。
- 下载高清视频：当你需要下载高清视频时，GoPeed 可以通过多线程下载和智能分流算法，提供更快的下载速度，保证视频下载的流畅性。
- 下载磁力链接和种子文件：GoPeed 支持磁力链接和种子文件的下载，可以方便地下载和管理种子文件，提供更好的下载体验。

## 二、本地环境介绍

### 2.1 本地环境规划

> 本次实践为个人测试环境，操作系统版本为 centos7.6。

| hostname | IP 地址       | 操作系统版本 | Docker 版本 |
| -------- | ------------- | ------------ | ----------- |
| jeven    | 192.168.3.166 | centos 7.6   | 20.10.17    |

### 2.2 本次实践介绍

> 1.本次实践部署环境为个人测试环境，生产环境请谨慎； 2.在 Docker 环境下部署 gopeed 高速下载器。

## 三、本地环境检查

### 3.1 检查 Docker 服务状态

> 检查 Docker 服务是否正常运行，确保 Docker 正常运行。

```bash
[root@jeven ~]# systemctl status docker
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2024-02-18 18:47:52 CST; 2 days ago
     Docs: https://docs.docker.com
 Main PID: 12501 (dockerd)
    Tasks: 30
   Memory: 671.9M
   CGroup: /system.slice/docker.service
```

### 3.2 检查 Docker 版本

> 检查 Docker 版本

```
[root@jeven ~]# docker -v
Docker version 20.10.17, build 100c701
```

### 3.3 检查 docker compose 版本

> 检查 Docker compose 版本，确保 2.0 以上版本。

```
[root@jeven ~]# docker compose version
Docker Compose version v2.6.0
```

## 四、下载 gopeed 镜像

> 从 docker hub 镜像仓库中拉取 gopeed 镜像

```bash
[root@jeven ~]# docker pull  liwei2633/gopeed
Using default tag: latest
latest: Pulling from liwei2633/gopeed
a0d0a0d46f8b: Already exists
3b1be4235065: Pull complete
3819cb81180b: Pull complete
Digest: sha256:4311646b5d3d2d5b916d3beef76ce19385bba88de53b237500e2a971d59943c8
Status: Downloaded newer image for liwei2633/gopeed:latest
docker.io/liwei2633/gopeed:latest
```

## 五、部署 gopeed 应用

### 5.1 创建部署目录

> 创建部署目录/data/gopeed

```bash
mkdir -p /data/gopeed  && cd /data/gopeed
```

### 5.2 编辑 gopeed 部署文件

> 使用 docker-cli 部署，内容如下：

```bash
docker run -d --name gopeed --restart always -p 6600:9999 -v /data/gopeed/downloads:/download liwei2633/gopeed
```

> 本次实践部署使用 docker compose 方式，编辑 docker-compose.yaml 部署文件。

```bash
version: '3'
services:
  gopeed:
    image: liwei2633/gopeed
    container_name: gopeed
    restart: always
    ports:
      - 6600:9999
    volumes:
      - /data/gopeed/downloads:/download
```

### 5.3 创建 gopeed 容器

> 使用 docker-compose.yaml 文件创建 gopeed 容器

```bash
[root@jeven gopeed]# docker compose up -d
[+] Running 2/2
 ⠿ Network gopeed_default  Created                                                                                                              0.0s
 ⠿ Container gopeed        Started
```

### 5.4 检查 gopeed 容器状态

> 检查 gopeed 容器状态，确保 gopeed 容器容器正常启动。

```bash
[root@jeven gopeed]# docker compose ps
NAME                COMMAND             SERVICE             STATUS              PORTS
gopeed              "./gopeed"          gopeed              running             0.0.0.0:6600->9999/tcp, :::6600->9999/tcp
```

### 5.5 检查 gopeed 容器日志

> 检查 gopeedt 容器日志，确保 gopeed 服务正常运行。

```
docker compose logs
```

![image-20240511173407338](./Docker应用收集.assets/image-20240511173407338.png)

## 六、访问 gopeed 首页

### 6.1 访问 gopeed 首页

> 访问地址：http://192.168.3.166:6600，将IP替换为自己服务器IP地址，进入到gopeed首页，自定义注册账号和密码。如果无法访问，则检查服务器防火墙是否设置，云服务器的安全组端口是否放行等。

![image-20240511173427714](./Docker应用收集.assets/image-20240511173427714.png)

### 6.2 gopeed 基础设置

> 可以设置下载目录及最大下载数，页面和语言等系统设置。

![image-20240511173443823](./Docker应用收集.assets/image-20240511173443823.png)

### 6.3 设置下载目录

> 默认下载目录为/root/Downloads，我们宿主机设置的挂载目录映射的容器下载目录为/download，我们在设置中，将下载目录修改为/download。

![image-20240511173500233](./Docker应用收集.assets/image-20240511173500233.png)

### 6.4 下载文件

> 点击右下角的“+”，创建下载任务。

![image-20240511173528246](./Docker应用收集.assets/image-20240511173528246.png)

输入下载链接，勾选直接下载，点击确认即可。

![image-20240511173552617](./Docker应用收集.assets/image-20240511173552617.png)

### 6.4 查看下载文件

> 在宿主机的挂载目录，查看下载的文件。

```bash
[root@jeven gopeed]# ls -lh  downloads/
total 54M
-rw-r--r-- 1 root root 54M Feb 23 22:33 360se10.0.2404.0_wsonlineworkpr3.exe
```

## 七、总结

> Gopeed 是一款功能强大、使用便捷且高度可定制化的下载器。它支持多种协议的下载，具有快速下载速度，并且可以根据用户的需求进行定制和扩展。如果你需要一个高效的下载器，可以尝试使用 Gopeed。

# 开源多直播平台的自动直播录制系统

## 系统介绍

Bililive-go 是一个支持多种直播平台的直播录制工具。尽管它的名字中包含“bilibili”，但它实际上支持接近二十个直播平台的录制，包括但不限于 B 站、抖音、斗鱼、虎牙、快手等。

用户只需搭建好工具，在 web 界面添加直播间地址，主播开播后便能直接录制视频。Bililive-go 具备直播状态监测的能力，一旦直播开始，它会自动录制视频，记录整个直播过程。

使用 Bililive-go 进行直播录制的过程相对简单。用户可以从支持的直播平台点开直播间，复制浏览器地址框中的链接，然后粘贴到 Bililive-go 中，系统会自动识别并开始录制。

请注意，为了使用 Bililive-go，用户可能需要提前安装一些必要的套件，如 FFmpeg 6 套件。此外，根据设备和环境的不同，可能还需要进行一些特定的配置和设置。

总的来说，Bililive-go 是一个功能强大且易于使用的直播录制工具，适用于多种直播平台的用户。如需了解更多信息，可以访问其官方网站或查阅相关的技术文档。

> Docker 镜像
>
> https://hub.docker.com/r/chigusa/bililive-go

> 官方 GitHub
>
> https://github.com/hr3lxphr6j/bililive-go?tab=readme-ov-file

## 搭建教程

本文通过 Docker 的方式来部署系统，操作系统为 Ubuntu，操作步骤：安装 Docker、创建 docker-compose.yml、启动容器运行镜像。

### | 第一步安装 docker

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
```

### | 第二步创建 docker-compose.yml

在 Home 目录创建 docker-compose.yml，编写以下配置并保存：

```bash
version: "3.7"
volumes:
    prometheus_data: {}
services:
  bililive-go:
    image: chigusa/bililive-go
    restart: unless-stopped
    container_name: bililive-go
    volumes:
      - ./Videos:/srv/bililive
      - ./config.docker.yml:/etc/bililive-go/config.yml
    ports:
      - 8080:8080
```

### | 第三步启动容器运行镜像

```bash
sudo docker-compose up -d
```

### | 快速搭建

如果不想使用 docker-compose 搭建，可以直接执行 Docker 指令完成。

```bash
sudo docker run --restart=always /
    -v ~/Videos:/srv/bililive /
    -p 8080:8080 /
    -d chigusa/bililive-go
```

指令执行完成后，容器指定 8080 端口访问的，因此还需要在服务器的防火墙上打开相应的端口，在浏览器访问 IP:8080 即可。

![图片](./Docker应用收集.assets/640-1714729754020-241.webp)

![图片](./Docker应用收集.assets/640-1714729754020-242.webp)

![图片](./Docker应用收集.assets/640-1714729754021-243.webp)

# 搭建一款开源的 Office 办公套件：LibreOffice

### 系统介绍

LibreOffice 是一款免费、开源的办公套件，支持多种操作系统，包括 Windows、Mac OS 和 Linux。它提供了与 Microsoft Office 相似的多个办公应用程序，包括文字处理、电子表格、演示文稿、绘图、数据库等，但更注重开源、免费和跨平台的特点。

### | 主要组件

Writer（文字处理器）：用于创建文本文档，可以创建复杂的公式或方程式，公式中可以包含标准字符集中没有的符号或特殊字符。

Calc（电子表格）：用于创建和编辑电子表格，具有强大的数据处理和图表功能。

Impress（演示文稿）：用于制作幻灯片，支持多种动画效果和演示方式。

Draw（绘图）：用于绘制矢量图形和流程图，支持多种图形格式和导出选项。

Base（数据库）：用于创建和管理数据库，支持多种数据库格式和查询语言。

Math（数学公式编辑器）：用于编辑和插入数学公式，支持多种数学符号和格式。

LibreOffice 还兼容多种文件格式，包括 Microsoft Office 格式（如.docx、.xlsx、.pptx）和其他常见的办公软件文件格式，无需担心格式兼容性的问题。如需了解更多信息，可以访问其官方网站或查阅相关的技术文档。

> Docker 镜像
>
> https://hub.docker.com/r/linuxserver/libreoffice

> 官方 GitHub
>
> https://github.com/LibreOffice

### 搭建教程

本文通过 Docker 的方式来部署项目，以 Ubuntu 为例，操作步骤：安装 Docker、创建 docker-compose.yml、启动容器运行镜像。

### | 第一步安装 docker

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
```

### | 第二步创建 docker-compose.yml

在 Home 目录创建 docker-compose.yml，编写以下配置并保存：

```bash
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
```

### | 第三步启动容器运行镜像

```bash
sudo docker-compose up -d
```

### | 快速搭建

如果不想使用 docker-compose 搭建，可以直接执行 Docker 指令完成。

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

指令执行完成后，容器指定 3000 端口访问的，因此还需要在服务器的防火墙上打开相应的端口，在浏览器访问 IP:3000 即可。

![图片](./Docker应用收集.assets/640-1714729857603-250.webp)

# 音乐播放&下载神器

## 项目地址

https://github.com/wy580477/musicn-container

## 项目介绍

> 可播放及下载高品质音乐的命令行工具 musicn 的容器版本，支持 amd64/arm64 架构。

## 部署安装

### 拉取镜像

```bash
[root@iZ2zeii47s3n9iqkqbn8wnZ music]# docker pull ghcr.m.daocloud.io/wy580477/musicn-container:latest
latest: Pulling from wy580477/musicn-container
4abcf2066143: Already exists
4ca66ffdb793: Pull complete
2f555b4e18c3: Pull complete
4ca66ffdb793: Pull complete
2f555b4e18c3: Pull complete
f6ee91b14c47: Pull complete
cd6ffe1a15b5: Pull complete
252c28c1a150: Pull complete
Digest: sha256:e4f0b7d8119ce38945479e9da4730894c255b2a30869513b13f0200572088a20
Status: Downloaded newer image for ghcr.m.daocloud.io/wy580477/musicn-container:latest
ghcr.m.daocloud.io/wy580477/musicn-container:latest
```

### 创建配置文件目录和进入目录

```bash
mkdir -p /data/music
```

### 命令行 + Web 模式

```bash
docker run -d --name=musicn --restart=unless-stopped -v /data/music:/data -p 7478:7478 ghcr.io/wy580477/musicn-container:latest msc -q
```

### 查看容器状态

```bash
[root@iZ2zeii47s3n9iqkqbn8wnZ music]# docker ps -a
CONTAINER ID   IMAGE                                                 COMMAND                  CREATED         STATUS          PORTS                                                                                      NAMES
06fad2f175ed   ghcr.m.daocloud.io/wy580477/musicn-container:latest   "/sbin/tini -- msc -q"   7 minutes ago   Up 7 minutes    0.0.0.0:7478->7478/tcp, :::7478->7478/tcp   musicn
```

### 仅命令行模式 （空闲时几乎不耗内存）

```bash
docker run -d --name=music --restart=unless-stopped -v /data/music:/data ghcr.io/wy580477/musicn-container:latest tail -f
```

#### /data/music 为命令行模式下载文件存放目录，默认当前目录下 music 文件夹。

## Web 访问

```bash
http://39.107.69.253:7478/
```

点击右边的下载按钮即可完成下载 Mp3

![图片](./Docker应用收集.assets/640-1714729941383-253.webp)

![图片](./Docker应用收集.assets/640-1714729941383-254.webp)

# 开源&超炫酷的监控页面系统

## 项目地址

https://github.com/rajnandan1/kener

## 项目介绍

> Kener：开源 Node.js 状态页面工具，旨在使服务监控和事件处理变得轻而易举。它提供了一个时尚和用户友好的界面，简化了跟踪服务中断，并改善了我们在事件发生时的沟通方式。最棒的是 Kener 与 GitHub 无缝集成，使事件管理成为一项团队工作，使我们能够在协作和友好的环境中更轻松地跟踪和解决问题。

## 特征

### Monitoring and Tracking:监测和跟踪：

```bash
Real-time monitoring实时监控
Polls HTTP endpoint or Push data to monitor using Rest APIs
使用Rest API轮询HTTP端点或推送数据以进行监控
Handles Timezones for visitors为访客处理时区
Categorize Monitors into different Sections
将任务分类到不同的部分
Cron-based scheduling for monitors. Minimum per minute
基于Cron的监视器调度。每分钟最小值
Flexible monitor configuration using YAML. Define your own parsing for monitor being UP/DOWN/DEGRADED
使用YAML灵活的监视器配置。定义您自己的监视器解析为UP/DOWN/DEGRADED
Construct complex API Polls - Chain, Secrets etc
构建复杂的API轮询-链、秘密等
Supports a Default Status for Monitors. Example defaultStatus=DOWN if you dont hit API per minute with Status UP
支持默认状态。例如，如果在状态为“向上”的情况下未达到每分钟API，则defaultStatus=DOWN
```

### Customization and Branding:定制和品牌化：

```bash
Customizable status page using yaml or code
使用YAML或代码的可定制状态页
Badge generation for status and uptime of Monitors
徽章生成的地位和荣誉
Support for custom domains支持自定义域
Embed Monitor as an iframe or widget将监视器嵌入为iframe或小部件
Light + Dark Theme浅色+深色主题
```

### Incident Management:事件管理：

```bash
Create Incidents using Github Issues - Rich Text
使用Github Issues创建事件-富文本
Or use APIs to create Incidents或使用API创建事件
```

### User Experience and Design:用户体验与设计：

```bash
100% Accessibility Score100%可访问性评分
Easy installation and setup易于安装和设置
User-friendly interface用户友好的界面
Responsive design for various devices适用于各种设备的响应式设计
Auto SEO and Social Media ready自动SEO和社交媒体准备
```

## 部署安装

### 创建配置文件目录和进入目录

```bash
mkdir -p /data/kener/config && cd /data/kener
```

### 拉取镜像

```bash
$ docker pull rajnandan1/kener:latest
Unable to find image 'rajnandan1/kener:latest' locally
latest: Pulling from rajnandan1/kener
0bab2f4a0566: Pull complete
2298c655b51e: Pull complete
b34698d0483c: Pull complete
dc991ae4a727: Pull complete
b481473d30de: Pull complete
8348598dcb93: Pull complete
a1f6f948c09a: Pull complete
f1e73e9f6112: Pull complete
47b5ff3007f0: Pull complete
4f4fb700ef54: Pull complete
151713fff472: Pull complete
ffe605957d7c: Pull complete
83417d5e97b3: Pull complete
f1c0a109a15f: Pull complete
90cba5a55014: Pull complete
6883d1df7d87: Pull complete
d1b2e8790d45: Pull complete
228d4a5f515e: Pull complete
Digest: sha256:f21f4c9ec20e40b68f0f028aef1860ef429a6cd6df296370b25cd70ec2ed5fe4
Status: Downloaded newer image for rajnandan1/kener:latest
```

### 创建服务

```bash
docker run -d --restart unless-stopped --name kener -p 3212:3000 -v $(pwd)/config:/config -e TZ=Asia/Shanghai rajnandan1/kener:latest
```

### 查看容器状态

```bash
[root@iZ2zeii47s3n9iqkqbn8wnZ kener]# docker ps -a
CONTAINER ID   IMAGE                     COMMAND            CREATED          STATUS         PORTS                                                                                      NAMES
8625a802bb6f   rajnandan1/kener:latest   "/init"            11 seconds ago   Up 7 seconds   0.0.0.0:3212->3000/tcp, :::3212->3000/tcp                                                  kener
```

## 自定义监控

vim /data/kener/config/monitors.yaml

![图片](./Docker应用收集.assets/640-1714730024454-259.webp)

重启服务

docker restart kener

## Web 方式测试地址

```bash
http://39.107.69.253:3212
```

![图片](./Docker应用收集.assets/640-1714730024454-260.webp)

![图片](./Docker应用收集.assets/640-1714730024454-261.webp)

![图片](./Docker应用收集.assets/640-1714730024454-262.webp)

![图片](./Docker应用收集.assets/640-1714730024454-263.webp)

# 客户服务支持系统，支持 10 余种客户接入方式

## 前言

Zammad 是一个基于 Web 的开源服务台与客户支持系统，它提供了各种渠道的连接，如 html、表单、电子邮件、SMS 短信、网页对话栏、Google、X（推特）、Facebook、TGbot、Whatsapp 等方式接入客户帮助台。

项目于 2016 年启动，截至目前已经迭代至 v6.3 版本，且目前已支持 docker 直接部署。该项目最擅长的就是工单管理，支持将工单进行分配，二次分配，转移，拆分，回复更改，模板设置，工时管理，合并，历史查询等。可以说是客服系统里压榨打工人的一大利器。

项目地址：https://github.com/zammad/zammad/

## 项目特性

> 支持全文检索。
> 具有灵活的文本模块。
> 立即报告对象的更改。
> 支持自动保存。
> 支持单独升级或设置客户端解决时限。
> 它是可审计的并且经常在银行中使用。
> 允许创建单独的概述。
> 支持各种安全机制，例如设备日志记录和双因素身份验证。
> 提供客户界面，他们可以随时跟踪当前的编辑情况。
> 支持通过 Twitter、Facebook、LinkedIn 或 Google 通过 OAuth 进行外部身份验证。
> 支持九种语言等等。

## 系统部署

### 一、下载代码

以目录/volume1/docker 为例，如果要下载相关代码，则通过 SSH 页面以此输入以下指令

```bash
cd /volume1/docker
git clone https://github.com/zammad/zammad-docker-compose.gitcd zammad-docker-compose
```

修改 docker-compose 代码，下载的代码里有很多个 compose.yml，我们选择`docker-compose.yml`这一个，打开并修改第 87、88 行，将 expose 修改为 ports。

![图片](./Docker应用收集.assets/640-1714993577590-125.webp)
环境变量里主要配置的是版本和数据库账号密码之类的，这个根据自己需要修改即可，除了数据库账号密码外，不建议修改其它内容。
![图片](./Docker应用收集.assets/640-1714993577590-126.webp)

### 二、部署系统

#### 方法一：SSH 部署

```bash
# 来到文件夹目录
cd /volume1/docker/容器名/
# 启动容器
docker-compose up -d
```

#### 方法二：群晖 7.2 部署 compose

打开 container manager，选择项目，点击新建，选择路径，点击下一步即可

![图片](./Docker应用收集.assets/640-1714993577590-127.webp)

#### 方法三：威联通 5.1 部署 compose

打开 container station，创建应用程序，复制代码验证后部署即可

![图片](./Docker应用收集.assets/640-1714993577590-128.webp)

## 系统使用

因为系统需要大量的配置，需要有前端网站页面或客源进行测试，这里 Cherry 就不示例了，把系统截图和大致功能介绍一下，有需要的中小企业或个体工商户可以自己研究

### 一、初始化安装

🔻 首次登录会提示进行新系统安装

![图片](./Docker应用收集.assets/640-1714993577591-129.webp)

管理员密码必须 2 个大写字母，2 个小写字母

![图片](./Docker应用收集.assets/640-1714993577591-130.webp)

配置企业名称、企业 icon，访问地址等信息。

![图片](./Docker应用收集.assets/640-1714993577591-131.webp)
最后是配置邮箱（可跳过)，采用自建或者本地 MTA 服务，本地需要新建 **/usr/sbin/sendmail** 目录。

### 二、系统管理

🔻 用户管理体系，支持到组、到人进行分配不同权限

![图片](./Docker应用收集.assets/640-1714993577591-132.webp)

🔻 客户管理，支持引入不同客户团队

![图片](./Docker应用收集.assets/640-1714993577591-133.webp)

🔻 概览管理，首页编辑概览展示页面

![图片](./Docker应用收集.assets/640-1714993577591-134.webp)

🔻 日程管理，支持连接到 google 日历获取工作日程

![图片](./Docker应用收集.assets/640-1714993577591-135.webp)

🔻webhook 通知

![图片](./Docker应用收集.assets/640-1714993577591-136.webp)

🔻 强大的计划任务功能

![图片](./Docker应用收集.assets/640-1714993577591-137.webp)

### 三、客户接入

前文提到，zammad 提供了各种渠道的连接，如如 html、表单、电子邮件、SMS 短信、网页对话栏、Google、X（推特）、Facebook、TGbot、Whatsapp 等方式提供接入，这里随便举例几个。

🔻TGbot 接入

![图片](./Docker应用收集.assets/640-1714993577591-138.webp)

🔻html 接入

![图片](./Docker应用收集.assets/640-1714993577591-139.webp)
![图片](./Docker应用收集.assets/640-1714993577591-140.webp)

### 四、系统集成

![图片](./Docker应用收集.assets/640-1714993577591-141.webp)

### 五、状态栏

![图片](./Docker应用收集.assets/640-1714993577591-142.webp)

![图片](./Docker应用收集.assets/640-1714993577591-143.webp)

# Jackett：开源跨平台的资源聚合搜索软件

## 系统介绍

Jackett 是一款免费开源跨平台的资源聚合搜索软件，它支持众多种子站和网盘站，可以作为代理服务器通过 API 来响应来自各种应用程序的查询，然后将结果发送回请求软件。这使得 Jackett 成为了一个强大的资源检索工具。

使用 Jackett 进行搜索时，用户可以通过添加 Indexer（索引器）来扩展搜索范围。这些 Indexer 可以是公开的或私有的，用户可以根据需要添加并配置它们。一旦添加了 Indexer，用户就可以通过 Jackett 进行搜索，查看 Indexer 中是否有所需的资源。

此外，Jackett 还可以与其他应用程序配合使用，如 Sonarr 和 Radarr，以实现自动化追剧或电影下载的功能。通过 Jackett 与这些应用程序的集成，用户可以方便地管理和下载他们喜爱的内容。

总的来说，Jackett 是一款功能强大的资源聚合搜索软件，可以帮助用户更方便地查找和获取所需资源。无论是寻找电影、电视剧、音乐、学习资料还是其他类型的文件，Jackett 都能提供高效且全面的搜索服务。

> GitHub
>
> https://github.com/Jackett/Jackett

> Docker 社区
>
> https://hub.docker.com/r/linuxserver/jackett/

## 搭建过程

搭建项目管理工具需要一台服务器，以 Ubuntu 为例，在腾讯云购买服务器，操作系统为 Ubuntu Server 22.04 LTS 64 位。

搭建步骤：安装 Docker、创建 docker-compose.yml、启动容器运行镜像。

### 第一步安装 docker

```
sudo apt update
sudo apt install -y docker.io docker-compose
```

### 第二步创建 docker-compose.yml

在 Home 目录创建 docker-compose.yml，编写以下配置并保存：

```yaml
version: "3"
services:
  jackett:
    image: lscr.io/linuxserver/jackett:latest
    container_name: jackett
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - AUTO_UPDATE=true #optional
      - RUN_OPTS= #optional
    volumes:
      - /path/to/data:/config
      - /path/to/blackhole:/downloads
    ports:
      - 9117:9117
    restart: unless-stopped
```

### 第三步启动容器运行镜像

```
sudo docker-compose up -d
```

指令执行完成后，容器指定 9117 端口访问的，如果使用云服务器搭建，则需要打开安全组的端口 9117。

在浏览器访问 IP:9117，点击 “Add indexer” 设置索引器。

![图片](./Docker应用收集.assets/640-1715069165564-196.webp)

选择“Public”类型，然后按需添加索引器即可。

![图片](./Docker应用收集.assets/640-1715069165565-197.webp)

最后返回首页，点击“Manual Search”，输入需要搜索内容，等待搜索完成即可。

![图片](./Docker应用收集.assets/640-1715069165565-198.webp)

# 个人专属的阅读服务器，实现看书/听书自由

## 关于『阅读』

**简介：**

『阅读』是一款国人大佬开发的免费开源的阅读工具，主要是为广大网络文学爱好者提供一种方便、快捷舒适的试读体验。

**功能：**

- 书源管理
- 书架管理
- 搜索
- 书海
- 看书
- 移动端适配
- 换源
- 翻页方式
- 手势支持
- 自定义主题
- 自定义样式

**镜像：**

hectorqin/reader

![image-20240510200029316](./Docker应用收集.assets/image-20240510200029316.png)

🔺 此次使用的镜像名称为“hectorqin/reader”，这也是原作者在 Dockerhub 上的原版镜像，我们直接拉取并部署即可。

镜像地址：https://hub.docker.com/r/hectorqin/reader

## 『阅读』安装

今天的安装部署方式仍然是通过 SSH 终端连接部署，至于 SSH 工具请自行解决，Putty，XShell，FinalShell 等都可以，我个人使用的是 FinalShell。

![image-20240510200108712](./Docker应用收集.assets/image-20240510200108712.png)

🔺 使用 SSH 连接工具连接到 NAS 之后先改用管理员模式登录，输入命令“ **sudo -i** ”回车，提示输入密码，密码就是我们 NAS 的登录密码，输入的时候不会有显示，输入完成后直接点回车即可。当出现“root”的标识的时候，说明我们现在就是管理员模式了。

🔺 接着在 NAS 的文件管理的 docker 文件夹中，创建一个新文件夹，并将其命名为 reader，然后在其中建两个子文件夹，分别是 logs 和 storage 。

- logs -->存放日志的地方
- storage -->存放文件的地方

![image-20240510200206561](./Docker应用收集.assets/image-20240510200206561.png)

🔺 最后直接开始部署命令即可。

作者分别给出了 3 个命令：

> **自用版(建议修改映射端口)**
>
> docker run -d --restart=always --name=reader -e "SPRING_PROFILES_ACTIVE=prod" -v $(pwd)/logs:/logs -v $(pwd)/storage:/storage -p 8080:8080 hectorqin/reader
>
> **多用户版(建议修改映射端口)**
>
> docker run -d --restart=always --name=reader -v $(pwd)/logs:/logs -v $(pwd)/storage:/storage -p 8080:8080 hectorqin/reader java -jar /app/bin/reader.jar --spring.profiles.active=prod --reader.app.secure=true --reader.app.secureKey=管理密码 --reader.app.inviteCode=注册邀请码
>
> **多用户版 使用环境变量(建议修改映射端口)**
>
> docker run -d --restart=always --name=reader -e "SPRING_PROFILES_ACTIVE=prod" -e "READER_APP_SECURE=true" -e "READER_APP_SECUREKEY=管理密码" -e "READER_APP_INVITECODE=注册邀请码" -v $(pwd)/logs:/logs -v $(pwd)/storage:/storage -p 8080:8080 hectorqin/reader

这里我们可以选择【多用户版】，故名思意，多用户就是指不同的用户都可以登录到我们创建好的阅读数据库，并且互不干涉。比如在家里，我和我老婆看的书就不一样，所以我就和她各建了一个账户，她看她的，我看我的。

简单说说命令中需要修改的地方：

- -v 后面的$(pwd)/logs:/logs和$(pwd)/storage:/storage 这两处，冒号前面需要改成前面创建的“reader”文件夹里面对应两个文件夹的实际路径
- -p 后面的端口映射请务必修改，只要不和本地其它端口冲突即可
- -e 后面的“管理密码”以及“注册邀请码”都可以自定义设置，不过你需要记住你设置的，稍后便会用到。

这里顺便说说，你使用【自用版】的命令部署的时候，需要使用默认的用户名和密码登录，分别为：default/123456。【多用户版】则是使用网页注册的用户名和密码登录，这个稍后给大家演示。

## 阅读』体验

**👉 登录**

![image-20240510200241331](./Docker应用收集.assets/image-20240510200241331.png)

🔺 通过命令部署好之后，我们就可以直接在浏览器输入：**http://NAS 本地 IP:端口号/** 直接打开主界面了。前面说过，【多用户版】需要通过注册的用户名和密码登录，所以我们这里先点击“注册”。

![image-20240510200302609](./Docker应用收集.assets/image-20240510200302609.png)

🔺 注册随意就好，不过“注册邀请码”就是你前面命令中输入的“注册邀请码”，之后直接登录即可。

**👉 添加书源**

![image-20240510200316611](./Docker应用收集.assets/image-20240510200316611.png)

🔺 打开之后它的界面其实是空白的，啥也没有，这是因为没有书源导致的，这个时候我们只需要在左侧菜单点击“书源设置--导入书源”。

PS：它支持的书源都是以“ .json ”的文件格式，所以你可以直接百度关键字“ .json 书源”便能找到很多其它网友分享的书源了！文章最后我也会分享我个人使用的书源。

![image-20240510200333850](./Docker应用收集.assets/image-20240510200333850.png)

🔺 添加好之后就是类似于上图中的样子，我们直接全选并确定即可。

**👉 账户设置**

有可能你找到的书源非常多，添加的时候会提示数量超了，这个时候我们就需要对管理账户进行修改设置了。

![image-20240510200351079](./Docker应用收集.assets/image-20240510200351079.png)

🔺 点击左侧菜单“进入管理模式”

![image-20240510200404319](./Docker应用收集.assets/image-20240510200404319.png)

🔺 然后这里的管理密码就是我们之前部署命令的时候设置的密码。

![image-20240510200422624](./Docker应用收集.assets/image-20240510200422624.png)

🔺 之后再点击“用户权限管理”

![image-20240510200439811](./Docker应用收集.assets/image-20240510200439811.png)

🔺 打开“用户管理”界面之后点击账户后面的“修改”。

![image-20240510200453435](./Docker应用收集.assets/image-20240510200453435.png)

🔺 将书籍和书源的上限修改一下就可以。我也不知道它的上限是多少，我这个直接在原基础上加了两个 0（也即是扩大了 100 倍）。

![image-20240510200511003](./Docker应用收集.assets/image-20240510200511003.png)

🔺 同时多用户也是在这里直接新增的。

**👉 添加图书**

![image-20240510200525684](./Docker应用收集.assets/image-20240510200525684.png)

🔺 直接在左侧搜索栏输入你想看书的书名以及作者，然后回车，右边就能出现你添加书源中所有你想要的书籍，找到直接直接点击“添加书架”即可。

![image-20240510200541554](./Docker应用收集.assets/image-20240510200541554.png)

🔺 同时你还可以点击右上角的“书海”对书籍进行更精确的过滤。

![image-20240510200554948](./Docker应用收集.assets/image-20240510200554948.png)

🔺 然后首页书架便会显示你添加进来所有的书籍。

**👉 观看图书**

![image-20240510200608563](./Docker应用收集.assets/image-20240510200608563.png)

🔺 看书很简单，直接点击便能观看，界面确实挺小清新的。

![image-20240510200622328](./Docker应用收集.assets/image-20240510200622328.png)

🔺 设置界面也还算丰富，字体，主题，字体大小等全部可以设置。

![image-20240510200710238](./Docker应用收集.assets/image-20240510200710238.png)

🔺 至于手机端使用起来和电脑端一样，也是直接浏览器输入【NAS 本地 IP:端口号】即可，功能和电脑端几乎无异，也不光可以看书，同样也能听书，据说这个方式同样适用于可 Kindle 一样的电纸书。

同时，它还支持远程使用，不过需要公网 IP 或者内网穿透，并且还需要设置端口映射。因为我没有这个需求，也就没折腾这个了~

## 书源资源

**👉 资源一：**

![image-20240510200741559](./Docker应用收集.assets/image-20240510200741559.png)

🔺 打开网址：https://yuedu.xiu2.xyz，点击“下载文件”，并“保存”到本地，就能得到一个“ .json 书源”文件，按前面的方法直接导入即可！

**👉 资源二：**

![image-20240510200756261](./Docker应用收集.assets/image-20240510200756261.png)

🔺 其实阅读自己还有一个隐藏福利。它提供了一个官网演示地址：https://reader.htmake.com/。打开之后我们点击左侧菜单“书源设置 --书源管理”

![image-20240510200811315](./Docker应用收集.assets/image-20240510200811315.png)

🔺 然后按照上图的顺序修改和设置，最后导出，也能得到一个“ .json 书源”文件

当然，今天的教程我只是分享了它最基本的看书和听书功能，还有更多的功能还没介绍，比如 WebDav 同步、RSS 订阅等

# 功能强大的二刺猿风格发卡系统

**Github 开源地址**：https://github.com/lizhipay/acg-faka

> acg-faka 是一个开源的个人发卡系统，它提供了一个完整的发卡平台，可以用于销售游戏物品、软件许可证、会员服务等虚拟商品。

![图片](./Docker应用收集.assets/640-1714993758925-184.webp)

## 功能特点

1、功能丰富：acg-faka 提供了丰富的功能，包括商品管理、订单管理、支付系统、会员系统、分站系统、推广代理系统等。你可以根据自己的需求自定义配置这些功能，以满足你的业务需求。

2、商品管理：你可以轻松添加和管理各种商品，包括游戏物品、软件许可证、会员服务等。你可以设置商品的价格、库存、描述和配图，并灵活地进行促销活动和优惠券管理。

3、订单管理：acg-faka 提供了完整的订单管理功能，你可以查看和处理用户的订单。系统会自动处理订单状态和库存管理，确保订单的准确性和及时性。

4、支付系统：系统支持多种支付渠道和支付方式，包括支付宝、微信支付、银联支付等。你可以根据你的需求选择适合的支付渠道，并集成到系统中进行支付管理。

5、会员系统：acg-faka 提供了会员系统，你可以设置会员等级和会员价格，并与商户系统进行融合。会员可以享受特定商品的折扣和优惠，提高用户的忠诚度和购买力。

6、分站系统：系统支持分站功能，你可以开通分站，让用户可以独立运行或销售主站的商品。分站具有独立的域名和品牌，可以根据需要进行个性化定制。

7、推广代理系统：acg-faka 提供了强大的推广和代理功能。你可以设置分销返佣机制，让用户通过推广链接或代理关系来获取佣金和奖励，实现多级代理和推广模式。

8、后台管理界面：系统提供了一个易于使用的后台管理界面，你可以通过该界面进行商品管理、订单管理、会员管理、配置管理等操作。界面简洁清晰，提供了丰富的数据统计和报表功能，方便你监控和分析业务数据。

9、扩展性强：acg-faka 是基于 PHP 开发的，使用了 Laravel 框架，具有良好的扩展性和可定制性。你可以根据自己的需求进行二次开发和定制，添加新功能或修改现有功能。

10、社区支持：acg-faka 是一个开源项目，在 GitHub 上有活跃的社区支持和维护。你可以参与社区讨论、提交问题和建议，获得技术支持和更新。

## 快速体验

- 后台演示：http://162.14.111.118:91/admin 账号：demo@demo.com 密码：123456
- 前台演示：http://162.14.111.118:91 账号：为了明天美好而战斗 密码：123456
- 文档地址：https://faka.wiki

# 极酷炫的导航页面

**GitHub 开源地址**：https://github.com/Lissy93/dashy

前面有介绍过 homepage，类似的还有很多，今天推荐的这款是一个自定义程度高，而且很漂亮的一款开源导航页。

![图片](./Docker应用收集.assets/640-1714993819563-187.webp)

![图片](./Docker应用收集.assets/640-1714993819563-188.webp)

## **dashy 简介**

这可能是我的导航页的终极版本了，这款开源导航页，支持高度定制化，并且有蛮多状态检查，可以加入一些小部件、还有不同的主题可以选择。

## **dashy 特点**

- 可以多页面展示、并且可以实时监控每个应用程序的状态
- 可以配置添加一些小组件从而显示你自己服务的信息
- 多用户可以配置 SSO 认证
- 丰富的语言支持
- 可以做远程备份
- 可以直接 docker 快速部署
- 开源且免费
- 文档真的很丰富，你需要的功能通过文档都可以找到

## **如何快速部署**

docker 方式快速部署

![图片](./Docker应用收集.assets/640-1714993819563-189.webp)

```bash
docker run -d \
  -p 4000:8080 \
  -v /root/my-local-conf.yml:/app/user-data/conf.yml \
  --name my-dashboard \
  --restart=always \
  lissy93/dashy:latest
```

## **总结**

作为一款开源的自托管个人导航页，这个项目真的可以满足大部分的需求了，如果你感兴趣可以自己去部署尝试下。

# 用 NAS 搭建一个简单方便的热榜看板

GitHub（Vue3 前端项目）：[imsyy/DailyHot: DailyHot 今日热榜前端页面 | API：https://github.com/imsyy/DailyHotApi](https://github.com/imsyy/DailyHot)

GitHub（Node 服务后端项目）：[imsyy/DailyHotApi: 🔥 今日热榜 API，一个聚合热门数据的 API 接口，支持 Vercel 部署 | 前端页面：https://github.com/imsyy/DailyHot](https://github.com/imsyy/DailyHotApi)

作为自媒体从业者，时刻了解当下热门事件是必须得。就正常来讲我会去看各大平台的热榜信息，以获取当天的事实新闻以及热度相关内容，但这样效率未免有点过于底下，且网上也有很多针对热榜汇总的网站。天介绍的项目也就是热榜的自部署项目，

## 项目预览

项目包含了多个榜单的热搜排名，且 API 也是经常维护，除了个别偶尔会有当天无法获取的情况，大部分情况下都能做到及时更新。

![图片](./Docker应用收集.assets/640894984.webp)预览

数了一下，总计涉及 24 个平台，热门网站都有，例如 B 站、微博、抖音等等。同时刷新时间为 5 分钟刷新一次。

![图片](./Docker应用收集.assets/640-1714728048771-1.webp)平台

同时后台也有一些无关紧要的设置项，一般情况下应该没什么需要设置的。

![图片](./Docker应用收集.assets/640-1714728048771-2.webp)后台设置

## 部署过程

该项目的部署很简单，作者已经将前后端集成做成了 docker，只需要拉取镜像即可。

![图片](./Docker应用收集.assets/640-1714728048772-3.webp)项目页

这里我用到的是极空间 Z423 进行部署，通过 docker 界面搜索 rehiy/dailyhot 下载就可以了。项目并不大，拉取很快。

![图片](./Docker应用收集.assets/640-1714728048772-4.webp)镜像

随后创建容器，能力全开，同时将端口 80 映射出去就行了。如果需要远程访问，那么通过极空间的远程访问功能将 IP 和端口填上，这样就可以实现外网访问热榜了。

![图片](./Docker应用收集.assets/640-1714728048772-5.webp)远程访问

## 写在最后

其他 NAS 想要搭建同理，操作很简单，不需要过高的权限以及繁琐的流程。搭一个放在 NAS 界面上偶尔点点就可以了解近期的一些热门事件和话题。

# 单独安装 xiaoya-alist

看电影老苏喜欢用播放器，`Native`客户端的功能是网页端没法比的，`Windows` 上用的 `PotPlayer`，`Mac` 上则用 `IINA`，`Android` 上就用 `AfuseKt`，都是神器

以前都是玩客云下载，局域网 `SMB` 映射，看完就删，不过玩客云已经终止了服务。现在基本上是通过转存到阿里云盘，用 `WebDAV` 挂载了再看的

老苏现在的需求是：

1. 不需要下载，因为浪费时间，也浪费空间
2. 不需要 `Jellyfin` 类的媒体服务器，海报墙是可有可无的
3. 最好也不需要转存，因为活动结束，阿里云盘免费空间越来越小了

找了一圈，能满足需求的只有 `xiaoya` 了，有个 `DDS-Derek/xiaoya-alist` 的项目，整合了小雅 `Alist` 的相关周边的安装脚本，内置所有相关软件的安装

![图片](./Docker应用收集.assets/640-1715343618170-439.webp)

只要一条命令就可以安装你心中所想，不想折腾的可以去看看，项目地址：https://github.com/DDS-Derek/xiaoya-alist

老苏还是一如既往喜欢瞎折腾，继续以 `Docker` 方案折腾

## 准备

不管用什么方式安装，都需要先准备好三个文件，否则就是安装完，也还是需要重启容器的

![图片](./Docker应用收集.assets/640-1715343618170-440.webp)

|          内容          |           对应文件            |                                                                                                                          获取方式                                                                                                                           |
| :--------------------: | :---------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|        `token`         |         `mytoken.txt`         |                                                                                    https://aliyuntoken.vercel.app/ https://alist.nn.ci/zh/guide/drivers/aliyundrive.htm                                                                                     |
|      `open token`      |       `myopentoken.txt`       |                                                                                                      https://alist.nn.ci/tool/aliyundrive/request.html                                                                                                      |
| `转存目录的 folder id` | `temp_transfer_folder_id.txt` | 先转存这个 https://www.aliyundrive.com/s/rP9gP3h9asE 到自己网盘（选择资源盘），然后浏览器打开转存后的目录，浏览器的 url https://www.aliyundrive.com/drive/file/resource/640xxxxxxxxxxxxxxxxxxxca8a 最后一串就是，记得这个目录不要删，里面的内容可以定期删除 |

下面具体介绍获取方式，切记，`token` 很重要，一定要保存好

### mytoken.txt

刷新令牌是个 `32` 位长的字符。打开下面 👇 的网址，然后点 `获取Token` 按钮

https://alist.nn.ci/zh/guide/drivers/aliyundrive.html#刷新令牌

![图片](./Docker应用收集.assets/640-1715343618170-441.webp)

用阿里云盘手机 `APP` 扫描二维码

![图片](./Docker应用收集.assets/640-1715343618170-442.webp)

将箭头处出现的 `Token`，复制到 `mytoken.txt`文件保存

### myopentoken.txt

`open token` 是一串很长的字符，打开下面 👇 的网址，然后点 `Scan QrCode` 按钮

https://alist.nn.ci/tool/aliyundrive/request.html

![图片](./Docker应用收集.assets/640-1715343618170-443.webp)

用阿里云盘手机 `APP` 扫描二维码，然后点 `I have scan`

![图片](./Docker应用收集.assets/640-1715343618170-444.webp)

将得到的 `Refresh Token` ，复制到 `myopentoken.txt `文件保存

### temp_transfer_folder_id.txt

登陆自己的阿里云盘网页版，在【资源库】里面新建一个文件夹，名字无所谓的，老苏建了个`temp`

![图片](./Docker应用收集.assets/640-1715343618171-445.webp)

点击 `temp` 文件夹，可以在浏览器上地址栏看到 `resource` 后面的一串字符

![图片](./Docker应用收集.assets/640-1715343618171-446.webp)

这串字符就是 `folder id` ，复制到 `temp_transfer_folder_id.txt`文件保存

有一点需要注意，这个目录如果删了，哪怕你重建了一个名称一样的目录， `folder id` 也是不一样的，需要更新`temp_transfer_folder_id.txt`，否则转存的时候就会出错

## 安装

在群晖上以 Docker 方式安装。

在注册表中搜索 `xiaoyaliu` ，选择第一个 `xiaoyaliu/alist`，版本选择 `latest`。

![图片](./Docker应用收集.assets/640-1715343618171-447.webp)

### 容器名称

后面还会用到容器的名称，所以这里就叫 `xiaoya`

![图片](./Docker应用收集.assets/640-1715343618171-448.webp)

### 卷

在 `docker` 文件夹中，创建一个新文件夹 `xiaoya`，并在其中建一个子文件夹 `data`，将前面准备的三个文件，放入 `data` 目录

![图片](./Docker应用收集.assets/640-1715343618171-449.webp)

|        文件夹        | 装载路径 |     说明     |
| :------------------: | :------: | :----------: |
| `docker/xiaoya/data` | `/data`  | 存放配置文件 |

![图片](./Docker应用收集.assets/640-1715343618171-450.webp)

### 端口

本地端口不冲突就行，不确定的话可以用命令查一下

```
# 查看端口占用
netstat -tunlp | grep 端口号
```

| 本地端口 | 容器端口 |
| :------: | :------: |
|  `8765`  |   `80`   |

默认没有暴露端口

![图片](./Docker应用收集.assets/640-1715343618171-451.webp)

需要点 `+` 号自行添加

![图片](./Docker应用收集.assets/640-1715343618171-452.webp)

## 命令行安装

如果你熟悉命令行，可能用 `docker cli` 更快捷

```
# 新建文件夹 xiaoya 和 子目录
mkdir -p /volume1/docker/xiaoya/data

# 进入 xiaoya 目录
cd /volume1/docker/xiaoya

# 将 mytoken.txt 、 myopentoken.txt 、 temp_transfer_folder_id.txt 放入 /data 目录

# 运行容器
docker run -d \
   --restart unless-stopped \
   --name xiaoya \
   -p 8765:80 \
   -v $(pwd)/data:/data \
   xiaoyaliu/alist
```

也可以用 `docker-compose` 安装，将下面的内容保存为 `docker-compose.yml` 文件

```
version: '3'

services:
  xiaoya:
    image: xiaoyaliu/alist
    container_name: xiaoya
    restart: unless-stopped
    ports:
      - 8765:80
    volumes:
      - ./data:/data
```

然后执行下面的命令

```
# 新建文件夹 xiaoya 和 子目录
mkdir -p /volume1/docker/xiaoya/data

# 进入 xiaoya 目录
cd /volume1/docker/xiaoya

# 将 mytoken.txt 、 myopentoken.txt 、 temp_transfer_folder_id.txt 放入 /data 目录

# 将 docker-compose.yml 放入当前目录

# 一键启动
docker-compose up -d
```

## 运行

查看容器的日志，如果准备的三个文件正确的话，会看到数据同步的信息

![图片](./Docker应用收集.assets/640-1715343618171-453.webp)

这个过程可能会持续几分钟，在浏览器中输入 `http://群晖IP:8765` ，如果显示 `获取设置失败`，那还得再等等

![图片](./Docker应用收集.assets/640-1715343618171-454.webp)

全部元数据加载成功后是下面 👇 这样的

![图片](./Docker应用收集.assets/640-1715343618171-455.webp)

现在就可以正常看电影了

![图片](./Docker应用收集.assets/640-1715343618171-456.webp)

这个时候看 `/data` 目录，会多出几个文件

![图片](./Docker应用收集.assets/640-1715343618171-457.webp)

### WebDAV 挂载

前面已经交代过，老苏习惯用播放器看电影，所以还需要做 `WebDAV` 挂载，`xiaoya` 默认是支持 `WebDAV` 的

> 默认的地址：`http://群晖IP:8765/dav`用户：`guest`密码：`guest_Api789`

以 `Windows` 平台的 `RaiDrive` 为例

![图片](./Docker应用收集.assets/640-1715343618171-458.webp)

挂载成功后，就可以在资源管理器中找到文件进行播放了

![图片](./Docker应用收集.assets/640-1715343618171-459.webp)

### 定时重启

`xiaoya` 容器重启时，会自动更新数据库及搜索索引文件，所以我们要用群晖的 `任务计划` 来辅助实现容器的定时重启

![图片](./Docker应用收集.assets/640-1715343618171-460.webp)

创建一个任务

![图片](./Docker应用收集.assets/640-1715343618171-461.webp)

可以设定每天重启一次

![图片](./Docker应用收集.assets/640-1715343618171-462.webp)

脚本直接写 `docker restart xiaoya`，其中 `xiaoya` 是容器的名字

![图片](./Docker应用收集.assets/640-1715343618171-463.webp)

### 清理转存

每一次的播放，`xiaoya` 都会将文件转存到我们前面建的 `temp` 目录，随便点点就会发现多了一堆的文件，哪怕是同一个文件，也是会重新转存的

![图片](./Docker应用收集.assets/640-1715343618171-464.webp)

所以清理就很重要，一旦阿里云盘满了，是会报错的。在前面介绍的 `DDS-Derek/xiaoya-alist` 中，有一个清理脚本

地址：https://github.com/DDS-Derek/xiaoya-alist/tree/master/xiaoyahelper

![图片](./Docker应用收集.assets/640-1715343618171-465.webp)

可以直接运行 `bash -c "$(curl -sLk https://xiaoyahelper.ddsrem.com/aliyun_clear.sh | tail -n +2)" -s 3`

> 老苏用的模式 `3`，只要运行一次，如果看到已启动就表示成功了

![图片](./Docker应用收集.assets/640-1715343618171-466.webp)

也可以下载到本地运行 `./aliyun_clear.sh 3`

![图片](./Docker应用收集.assets/640-1715343618171-467.webp)

当看到小雅看护已启动，你会在容器中找到 `xiaoyakeeper` 容器

![图片](./Docker应用收集.assets/640-1715343618171-468.webp)

清理并不会立即就执行，容器会安装并更新一些东西

![图片](./Docker应用收集.assets/640-1715343618171-469.webp)

网络不好的情况下，还是需要点时间的

![图片](./Docker应用收集.assets/640-1715343618171-470.webp)

每次清理都会有清理记录

![图片](./Docker应用收集.assets/640-1715343618171-471.webp)

按官方说明，模式 `3` 默认从运行脚本的下一分钟开始，每天运行一次。如果万一不能更新的话，可以参照前面的方法，让 `xiaoyakeeper` 容器每天定时重启

## 参考文档

> DDS-Derek/xiaoya-alist: 小雅 Alist 的相关周边
> 地址：https://github.com/DDS-Derek/xiaoya-alist
>
> Docker Hub
> 地址：https://hub.docker.com/r/xiaoyaliu/alist
>
> 如何设置 xiaoya 的 docker
> 地址：https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f

# 更优雅的微信公众号订阅方式，支持私有化部署、微信公众号 RSS 生成（基于微信读书）v2.x

**GitHub**：<https://github.com/cooderl/wewe-rss/tree/main>

# Puter：基于网页的系统

## Puter 介绍

一句话介绍 Puter：开源互联网操作系统，功能丰富、速度极快且可高度扩展，可用于构建远程桌面环境、云存储服务、远程服务器、Web 托管平台等。

### 🏠 项目信息

```bash
# Github地址
https://github.com/HeyPuter/puter
# 在线DEMO
https://puter.com/
```

### 🚀 功能特性

- Google Drive、OneDrive 、百度网盘等的替代品，具有新颖的界面和强大的功能
- 可用于服务器和工作站的远程桌面环境
- 可用于构建和托管网站、网络应用程序和游戏的平台
- 可用于学习 Web 开发、云计算、分布式系统等

### 🛠 使用截图

**我的世界**

![image-20240508191024273](./Docker应用收集.assets/image-20240508191024273.png)

**创维电视**

![图片](./Docker应用收集.assets/640-1715166384070-20.webp)

**特斯拉 Y**

![图片](./Docker应用收集.assets/640-1715166384070-21.webp)

## Puter 安装和访问

### 本地开发环境

```bash
git clone https://github.com/HeyPuter/puter
cd puter
npm install
npm start
```

将在 _http://localhost:4000_ 启动 Puter

### Docker 部署

#docker image pull 比较慢，需要自行解决网络连接问题，本文部署采用的腾讯云，镜像 pull 时间大概 30 分钟（镜像不大，主要就是网络慢）。

```bash
mkdir puter
cd puter
mkdir -p puter/config puter/data
sudo chown -R 1000:1000 puter
docker run --rm -p 4100:4100 -v `pwd`/puter/config:/etc/puter -v `pwd`/puter/data:/var/puter  ghcr.io/heyputer/puter
```

### Docker-compose 部署

#docker image pull 比较慢，需要自行解决网络连接问题，本文部署采用的腾讯云，镜像 pull 时间大概 30 分钟（镜像不大，主要就是网络慢）。

```bash
mkdir -p puter/config puter/data
sudo chown -R 1000:1000 puter
wget https://raw.githubusercontent.com/HeyPuter/puter/main/docker-compose.yml
docker compose up
```

查看默认账号和密码

```bash
docker logs -f xxxxx
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                     ┃
┃  Puter is now live at: http://puter.localhost:4100  ┃
┃  Type web:dismiss to dismiss this message           ┃
┃                                                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  Your default user has been created!           ┃
┃  username: default_user                        ┃
┃  password: 938fa95e                            ┃
┃  (change the password to remove this message)  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

修改允许访问的 domain

```json
vim puter/config/config.json
{
    "config_name": "generated default config",
    "env": "dev",
    "nginx_mode": true,
    "server_id": "localhost",
    "http_port": "auto",
    "domain": "xxx.xxx.xxx.xxx", #修改为ip或者域名
    "protocol": "http",
    "contact_email": "hey@example.com",
    "services": {
        "database": {
            "engine": "sqlite",
            "path": "puter-database.sqlite"
        },
        "thumbnails": {
            "engine": "purejs"
        },
        "file-cache": {
            "disk_limit": 16384,
            "disk_max_size": 16384,
            "precache_size": 16384,
            "path": "./file-cache"
        }
    },
    "cookie_name": "c2f9ddaf-a836-47e3-b737-8de62e65b2d0",
    "jwt_secret": "1aa55cea-ad6f-4d31-8405-a69d751c6d69",
    "url_signature_secret": "f87ccc54-78e2-40e0-9d24-7a43a84612b4",
    "": null
}
```

重启容器

```
docker restart xxxxxx
```

打开界面 http://ip:4100 登录 ，输入默认账号和密码登录

![图片](./Docker应用收集.assets/640-1715166424226-28.webp)

## 最后

Puter 提供了 AppCenter 模块，可以用于快速安装常见的应用，比如 word，pdf，代码编辑器等。还提供了 DevCenter 模块，用户无需编写一行后端代码即可构建强大的 Web 应用程序，方便用户快速扩展部署其他应用。

![图片](./Docker应用收集.assets/640-1715166460909-31.webp)
