# Python 框架

Python 是最流行、用途最广泛的语言之一。它通常用于网络开发、数据科学、机器学习等。

以下是 Python 编程语言的一些主要用途：

- **Web 开发**：Python 广泛用于 Web 开发，包括前端（客户端）和后端（服务器端）。流行的 Python Web 框架包括 Django、Flask 和 Pyramid。
- **数据科学和机器学习**：Python 拥有强大的数据科学、科学和机器学习库，例如 NumPy、Pandas、Matplotlib、Scikit-learn。它是这些领域最常用的语言之一。
- **桌面应用程序**：Python 可以与 Tkinter、PyQt、Kivy 等库一起使用，为 Linux、Windows、macOS 构建桌面应用程序。示例包括 IDE、实用程序、游戏。
- **后端开发**：Python 为许多流行的网站和应用程序提供支持。它在使用 Django 或 Flask 构建的网站中用作服务器端语言。
- **科学和数值计算**：Python 的 NumPy 和 SciPy 库使其非常适合科学计算、模拟、数值分析和计算科学。
- **自动化和脚本编写**：Python 通常用于自动执行重复性任务并通过脚本将各种应用程序粘合在一起。
- **游戏开发**：Python 使用 PyGame、Kivy、Pyglet 和 Ren’Py 等库进行游戏开发越来越受欢迎。
- **网页抓取**：Beautiful Soup、Scrapy 等库使 Python 非常适合抓取网页和提取结构化数据。
- **系统脚本**：Python 可用于自动化系统管理任务，使用 Ansible、SaltStack 等工具将基础设施作为代码进行管理。
- **GUI 编程**：Tkinter 与 Python 捆绑在一起。PyQt 和 Kivy 也是 GUI 应用程序的热门选择。

总而言之，数据科学、网络开发、自动化、科学计算是 Python 的一些主要领域。

# Web 应用开发

Python 的 Web API 开发框架有很多，以下是一些流行的框架及其相关信息：

## Django REST Framework

- **描述**：Django 是一个强大的 Web 应用开发框架，采用了模型-视图-控制器（MVC）架构，提供了强大的管理后台、ORM 和路由系统。被广泛应用于知名网站，如 Instagram、Pinterest 和 Spotify。

- **官网**：[Django REST Framework](https://zhuanlan.zhihu.com/p/442219271)
- **开源地址**：[Home - Django REST framework (django-rest-framework.org)](https://www.django-rest-framework.org/)
- **优点**：提供丰富的功能和选择，有便捷的 ORM 和非 ORM 源的序列化功能，受到了 Red Hat、Mozilla 和 Heroku 等组织的信任。
- **缺点**：相对较重，学习曲线可能比较陡峭。
- **使用例子**：可以用于构建具有复杂数据模型的大型 API 系统。

Django 是一个高级 Web 框架，它鼓励快速开发和干净、实用的设计。Django 遵循“不要重复造轮子”的原则，提供了大量可立即使用的组件，非常适合开发复杂和数据驱动的 Web 应用程序。

**核心特性**：

- 强大的 ORM 框架，支持多种数据库；
- 全面的安全功能，包括用户认证、权限控制、CSRF 保护等；
- 自带的管理界面，便于管理网站的内容；
- 多语言支持和中间件支持。

**代码示例**：

```python
from django.http import HttpResponse
from django.urls import path
from django.conf import settings
from django.core.wsgi import get_wsgi_application

settings.configure(
    DEBUG=True,
    ROOT_URLCONF=__name__,
)

def index(request):
    return HttpResponse("Hello, Django!")

urlpatterns = [
    path('', index),
]

application = get_wsgi_application()

if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
```

这是一个简化版的 Django 示例，定义了一个视图`index`，当访问网站根 URL 时返回`Hello, Django!`。通过`urlpatterns`列表将 URL 路径`''`（网站根）映射到`index`视图函数。Django 的配置通过`settings.configure()`方法设置，这里仅设置了`DEBUG`和`ROOT_URLCONF`。

### Django Grappelli: 打造优雅强大的 Django 管理界面

**Github 地址**：https://github.com/sehmaschine/django-grappelli

#### 什么是 Django Grappelli?

Django Grappelli 是一个开源插件，专为 Django 框架设计，旨在提供一个优雅而强大的管理界面，使 Django 应用程序的后台管理更加便捷和定制化。

![图片](./Python框架.assets/640-1714229575535-225.webp)

#### 安装 Django Grappelli

安装 Django Grappelli 非常简单，按照以下步骤进行操作：

使用 pip 安装 Django Grappelli。在终端或命令提示符中运行以下命令：

```bash
pip install django-grappelli
```

将`'grappelli'`添加到 Django 项目的`INSTALLED_APPS`设置中。打开项目的`settings.py`文件，找到`INSTALLED_APPS`设置，并添加`'grappelli'`，如下所示：

```bash
INSTALLED_APPS = [
    ...
    'grappelli',
    ...
]
```

将`'grappelli.urls'`添加到项目的 URL 配置中。在项目的`urls.py`文件中，找到 URL 配置部分，并添加以下行：

```python
from django.urls import includeurlpatterns = [    ...    path('grappelli/', include('grappelli.urls')),    ...]
```

运行项目并访问管理界面。现在，您可以运行 Django 项目，并通过在浏览器中访问`/grappelli/`路径来访问 Django Grappelli 的管理界面。

![图片](./Python框架.assets/640-1714229575535-226.webp)

#### Django Grappelli 优点

Django Grappelli 具有以下几个优点：

- **优雅美观**：Django Grappelli 提供了一个现代化、漂亮的管理界面，使您的 Django 应用程序在外观上更加吸引人。它使用了清晰的布局、漂亮的图标和精心设计的颜色方案，为用户提供了一种愉悦的使用体验。

- **定制灵活**：Django Grappelli 允许您对管理界面进行广泛的定制。您可以轻松地修改颜色、图标、布局和导航菜单等方面，以适应您的品牌和设计需求。通过定制，您可以创建与您的应用程序风格一致的管理界面。

  ![图片](./Python框架.assets/640-1714229575535-227.webp)

- **增强功能**：Django Grappelli 为 Django 的管理界面提供了许多增强功能。它支持内联编辑、快速过滤和搜索、自定义插件等功能，使您能够更高效地管理和操作数据。这些功能提高了开发人员和管理员的工作效率。

#### 应用场景

Django Grappelli 适用于各种类型的 Django 应用程序，尤其适合以下情况：

- **企业级应用程序**：对于需要具备专业外观和高度定制化管理界面的企业级应用程序，Django Grappelli 是一个理想的选择。它可以帮助您快速搭建出现代化的管理界面，提升用户体验和产品形象。

- **内容管理系统**：如果您正在开发一个内容管理系统（CMS），Django Grappelli 可以为您提供强大的工具和界面来管理和发布内容。它的定制化能力和丰富的功能使得对大量内容的组织和管理变得更加简单和高效。

  ![图片](./Python框架.assets/640-1714229575535-228.webp)

- **数据管理应用**：对于需要对大量数据进行管理和操作的应用程序，Django Grappelli 提供了快速过滤、搜索和内联编辑等功能，使您能够轻松处理复杂的数据操作。这对于数据管理和数据分析应用非常有帮助。

总之，Django Grappelli 是一个功能强大、灵活定制和外观优雅的 Django 管理界面插件。它能够提升您的应用程序的管理界面，使其更加美观、易用和高效。适用于各种类型的应用程序，特别是企业级应用、内容管理系统和数据管理应用。

### Python + Django 实现文件上传分享：Django-WebApp，让 Python Web 应用开发变得更简单

**项目地址**：https://github.com/smahesh29/Django-WebApp

#### 引言

> Django-WebApp 是一个基于 Python 和 Django 框架创建的 Web 应用，旨在让用户可以轻松地登录、上传文件以及查看和下载其他用户上传的文件。这个项目有很多值得学习和借鉴的内容。

#### Django-WebApp 的主要功能

- **用户登录功能**

Django-WebApp 提供了用户友好的登录界面，用户可以通过输入用户名和密码来登录。我们使用 Django 框架内置的用户认证系统来确保用户信息的安全性和认证，让只有注册用户才能进行登录。

![图片](./Python框架.assets/640-1714237470091-527.webp)

- **文件上传功能**

一旦用户登录成功，他们便可以使用 Django-WebApp 来上传文件。项目为用户提供了一个简单直观的文件上传界面，用户可以轻松地选择要上传的文件，并通过点击“上传”按钮将文件发送到服务器上。Django 框架负责接收和存储文件，以便用户随时可以查看和下载自己上传的文件。

![图片](./Python框架.assets/640-1714237470091-528.webp)

- **查看已上传的文件**

登录后，用户可以在 Django-WebApp 上方便地查看已上传的文件。项目设计了一个简单的文件管理页面，用户可以在其中查看自己上传的所有文件，并通过简单的点击操作来进行文件的在线预览和下载。

![图片](./Python框架.assets/640-1714237470092-529.webp)

#### 搜索和查看其他用户的个人资料

除了自身的文件管理，用户还可以在 Django-WebApp 上搜索和查看其他用户的个人资料，实现更多的社交互动功能。

- **搜索其他用户的个人资料**

在 Django-WebApp 中，实现了一个简洁的用户搜索功能。用户可以在搜索框中输入其他用户的用户名，系统将根据关键字来筛选用户并展示符合条件的用户列表，便于用户的快速查找。

- **查看其他用户的个人资料**

- 另一方面，用户还可以点击其他用户的用户名来查看他们的个人资料页面。在该页面上，用户可以查看其他用户的用户名、头像以及其他相关信息，并可以选择与其分享已上传的文件。

  ![图片](./Python框架.assets/640-1714237470092-530.webp)

- **分享已上传的文件**

在个人资料页面中，用户可以轻松地选择将自己已上传的文件分享给其他用户。简单的点击操作便可以将已上传文件分享到其他用户的账户下，让文件的共享变得更加便捷。

#### 额外功能

- **设置个人资料图片**

Django-WebApp 还支持用户自主设置自己的个人资料图片。用户可以在个人资料页面上传并设置一张头像，为自己的账户增添个性化的标识。

- **下载其他用户上传的文件**

除了上传和管理自己的文件，用户还可以在 Django-WebApp 上下载其他用户上传的文件。快速的搜索和点击操作便能获取到其他用户的优质文件资源。

- **任意类型文件上传**

Django-WebApp 已经实现了诸如图片、视频、文本文件以及各类程序代码（如 Python 代码、Java 代码等）的多类型文件上传功能。用户可以方便地在应用中上传和分享不同类型的文件。

![图片](./Python框架.assets/640-1714237470092-531.webp)

#### 所使用的技术与工具

开发 Django-WebApp 所采用的主要技术和工具包括：

- **Python**：作为开发的主要语言，用于实现应用的各类逻辑和功能。
- **Django**：作为 Web 开发框架，提供了丰富的功能和工具，支持应用的持续开发和优化。
- **Bootstrap**：作为前端框架，提供了现代化的设计和交互组件，让用户在应用中体验良好。
- **JavaScript**：用于增强应用的交互性、动态展示以及用户体验功能。
- **其他 Python 模块**：Django-WebApp 的实现还涉及到额外的 Python 模块，如 django-crispy-forms、Pillow 等，它们提供了用于处理和展示应用中的文件和图片的相关功能。

#### 注意事项：

在 Django-WebApp 的代码中，我们没有移除项目执行和调试所需的 Secret_Key。因此，你可以通过该项目作为学习或实践之用，或者使用项目提供的代码来构建你自己的项目。

#### 使用方法：

要使用 Django-WebApp，只需要运行以下命令来进行数据库迁移并启动开发服务器：

```bash
python django_web_app/manage.py makemigrations
python django_web_app/manage.py migrate
python django_web_app/manage.py runserver
```

随后，你只需在浏览器中输入以下地址便可以开始使用 Django-WebApp：http://localhost:8000 或 http://127.0.0.1:8000/。

#### 总结

通过我们对 Django-WebApp 的详细介绍，相信读者对这个 Django 开发的 Web 应用有了更全面的了解。作为一个基于 Python 和 Django 的应用，Django-WebApp 提供了用户登录、文件上传和下载、文件浏览等核心功能，并实现了多项安全性和权限管理措施，是一个非常值得学习和借鉴的项目。

### Django 和 htmx 强强联手：打造更强大的下一代 Web 应用程序

**项目地址**：https://github.com/adamchainz/django-htmx

**摘要：** 本文深入探讨了 django-htmx，一个将 Django 与 htmx 无缝结合的扩展。我们将了解其特点、安装过程、基本用法和一些有用的技巧，帮助您充分利用此扩展，在 Django 项目中创建丰富交互性的单页应用程序 (SPA)。

#### 1. 简介

django-htmx 是一个功能强大的扩展，它允许您轻松地将 htmx 与 Django 集成。htmx 是一个 JavaScript 库，它使您可以通过简单的属性和事件来创建响应式和交互式的 Web 应用程序，而无需使用复杂的 JavaScript 框架。

#### 2. 安装

安装 django-htmx 非常简单，您只需使用 pip 命令即可：

```bash
pip install django-htmx
```

#### 3. 基本用法

在您的 Django 项目中使用 django-htmx 非常简单。首先，您需要在您的 Django 项目的 settings.py 文件中配置 django-htmx：

```bash
INSTALLED_APPS = [
    'myapp',
    'django_htmx',
]
```

然后，您可以在您的模板中使用 django-htmx 的模板标签。例如，您可以使用 htmx_form 标签来创建一个使用 htmx 的表单：

```html
<form htmx-form="true" action="submit_url"></form>
```

您还可以在您的 JavaScript 代码中使用 django-htmx 的 JavaScript API。例如，您可以使用 hx.get() 方法来向服务器发出 GET 请求：

```python
hx.get('/get_data/', function(response) {
    // Do something with the response
});
```

#### 4. 高级用法

django-htmx 还提供了许多高级用法，例如：

- 使用 hx-boost 提高页面的性能
- 使用 hx-sse 来支持服务器端事件 (SSE)
- 使用 hx-history 来管理浏览器历史记录
- 使用 hx-prompt 来创建模态对话框

#### 5. 小结

django-htmx 是一个功能强大的扩展，它允许您轻松地将 htmx 与 Django 集成。使用 django-htmx，您可以创建丰富的交互性单页应用程序，而无需使用复杂的 JavaScript 框架。

### Django-React-Boilerplate：Python Web 应用全栈开发神器，助你轻松打造卓越 Web 应用程序

**项目地址**：https://github.com/vintasoftware/django-react-boilerplate

”Django-React-Boilerplate 为创建现代、响应式和可扩展 Web 应用程序提供了全栈解决方案。“

#### 简介

Django-React-Boilerplate 结合了两个强大的开源框架：**Django**和**React**。Django 作为一个轻量级的 Web 框架，提供了许多开箱即用的特性，包括用户认证、数据库模型和安全机制等。React 作为一个前端库，让开发者能够构建具有丰富交互性的用户界面。二者的结合意味着开发者可以在此基础上构建动态、数据驱动的应用，既节省时间又提高效率。

#### **主要优点**

- **即用型堆栈：**结合了 Django 和 React 的强大功能，无需手动配置或集成。
- **开箱即用认证：**使用 REST 框架和 JWT 令牌实现开箱即用的用户身份验证和授权。
- **可扩展架构：**采用 Django 的 Model-View-Template (MVT) 架构和 React 的组件化设计，确保应用程序的可扩展性和可维护性。
- **REST API：**提供了一个用于管理应用程序数据的完整 REST API，方便与其他服务和客户端交互。
- **Docker 集成：**支持使用 Docker 轻松部署和管理应用程序，从而提高可移植性和可扩展性。

#### 核心特性

- **一致性与可扩展性**

Django-React-Boilerplate 通过整合 Django 和 React 的最佳实践，为开发者提供了一个既一致又可扩展的工程结构。这意味着开发者可以更容易地理解项目架构，并根据需要扩展或定制。

- **项目结构**

Django-React-Boilerplate 的项目结构旨在保持简洁和清晰。后端代码位于一个独立的目录中，而前端 React 应用则位于另一个目录，二者通过 API 进行通信。这种结构让前后端分离变得更加容易，同时也便于开发和调试。

- **敏捷开发**

使用 Django-React-Boilerplate 可以大大加快开发速度。例如，集成的用户认证系统省去了从头构建认证逻辑的苦恼。同时，React 组件的复用和组合性也为前端开发提供了极大的灵活性。

- **多种部署选项**

Django-React-Boilerplate 还提供了多种部署选项的指南，包括如何将应用容器化并使用 Django 的静态文件服务来提供 React 构建产物。这样，无论是在开发环境还是在生产环境，部署都变得简单而可控。

#### 技术路线

- React：用于构建交互式的用户界面。
- Poetry：用于管理环境和依赖关系。
- django-js-reverse：用于在 JavaScript 中生成 URL。
- React Bootstrap：用于响应式的样式设置。
- Webpack：用于打包静态资源。
- Celery：用于后台工作任务。
- WhiteNoise 与 brotlipy：用于高效的静态文件服务。
- ruff 和 ESLint 与 pre-commit：用于自动化的质量保证。

#### 应用场景

Django-React-Boilerplate 适用于广泛的 Web 应用程序，包括：

- 电子商务平台
- 内容管理系统
- 社交媒体网站
- 仪表板和管理系统
- CRUD（创建、读取、更新、删除）操作应用程序

#### 结论

Django-React-Boilerplate 是一个功能强大的工具包，可帮助开发人员创建现代、可扩展且易于维护的 Web 应用程序，让全栈开发不再遥不可及。通过结合 Django 和 React 的强大功能，它提供了一个完整的解决方案，涵盖了从后端逻辑到前端渲染的所有方面。无论是初学者还是经验丰富的开发人员，Django-React-Boilerplate 都是一个明智的选择，可以加快开发过程并提高应用程序质量。

## Flask Restful

- **描述**：Flask 是一个轻量级的微型框架，灵活且易于扩展。适用于构建中小型的 Web 应用程序，如博客、商城等。
- **官网**：[Welcome to Flask — Flask Documentation (3.0.x) (palletsprojects.com)](https://flask.palletsprojects.com/en/3.0.x/)
- **开源地址**：[pallets/flask: The Python micro framework for building web applications. (github.com)](https://github.com/pallets/flask)
- **优点**：轻量级，易于上手，适合快速开发。
- **缺点**：功能相对简单，可能需要手动添加更多的扩展来满足复杂需求。
- **使用例子**：适合小型项目或作为微服务的一部分。

Flask 是一个轻量级的 Web 框架，它灵活且易于扩展，非常适合小到中等规模的项目以及微服务架构。

**核心特性**：

- 轻量且灵活，适合快速开发简单 Web 应用；
- 内置开发服务器和调试器；
- 集成了 Jinja2 模板引擎；
- 支持 RESTful 请求分发；
- 可以扩展以支持数据库集成、表单验证、上传处理等功能。

**代码示例**：

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Flask!'

if __name__ == '__main__':
    app.run(debug=True)
```

这段代码创建了一个简单的 Flask 应用，它定义了一个路由`/`，当访问这个路由时，它会返回`Hello, Flask!`。`app.run(debug=True)`启动了一个开发服务器，`debug=True`参数使得应用处于调试模式，这样可以在开发过程中获得更多的错误信息并实时重载代码。

## FastAPI

- **官网**：https://fastapi.tiangolo.com/zh/
- **开源地址**：https://github.com/tiangolo/fastapi
- **优点**：极高的性能，支持异步，提供交互式 API 文档。
- **缺点**：社区相对较新，资源和第三方库可能不如 Flask 和 Django 丰富。
- **使用例子**：适合需要高性能和异步处理的现代 Web 应用。

### 基于 FastAPI 的全栈现代 Web 应用程序生成器：Full-stack-fastapi-postgresql

**项目地址**：https://github.com/tiangolo/full-stack-fastapi-postgresql

#### 引言

在当今数字化的时代，Web 应用程序已成为人们日常生活中不可或缺的一部分。为了满足用户对快速、高效和稳定的需求，开发人员需要不断探索和运用最新的技术来构建现代化的 Web 应用程序。Full-stack-fastapi-postgresql 便是一款专为开发人员打造的全栈现代 Web 应用程序生成器，本文将会对其进行详细的介绍。

![图片](./Python框架.assets/640-1714228765685-190.webp)

#### 快速入门

Full-stack-fastapi-postgresql 提供了一个快速入门的模板，开发者可以利用这个模板来快速搭建起一个现代化的 Web 应用程序。该模板集成了 FastAPI 框架、PostgreSQL 数据库以及 Docker 等技术，能够帮助开发者迅速构建出高效、可靠的 Web 应用程序。

![图片](./Python框架.assets/640-1714228765685-191.webp)

#### 技术特点

1. **FastAPI 框架**：FastAPI 是一个高性能的 Python web 框架，它结合了 Python 的易用性和高效性能，能够帮助开发者快速构建出 RESTful API。通过利用 FastAPI，开发者可以轻松地创建出符合最新 Web 标准的现代化 Web 应用程序。

2. **PostgreSQL 数据库**：作为一款强大、稳定的关系型数据库管理系统，PostgreSQL 被广泛应用于各种规模的 Web 应用程序中。Full-stack-fastapi-postgresql 与 PostgreSQL 紧密集成，能够为开发者提供稳定可靠的数据存储解决方案。

   ![图片](./Python框架.assets/640-1714228765685-192.webp)

3. **Docker**：Full-stack-fastapi-postgresql 使用 Docker 来进行应用程序的打包和部署，这意味着开发者可以将开发环境、测试环境和生产环境进行统一管理，大大简化了应用程序的部署和维护过程。

4. **自动 HTTPS**：Full-stack-fastapi-postgresql 集成了自动 HTTPS 功能，为 Web 应用程序提供了安全可靠的加密通信机制，保障用户数据的安全性。

5. **其他特点**：除了上述几点技术特点外，Full-stack-fastapi-postgresql 还包含了诸如 JWT 身份验证、Pydantic 数据验证、Vue.js 前端框架等多种现代化技术特性，帮助开发者构建出功能丰富、性能优越的 Web 应用程序。

   ![图片](./Python框架.assets/640-1714228765685-193.webp)

#### 使用示例

以下是一个简单的使用示例，演示了如何使用 Full-stack-fastapi-postgresql 快速搭建一个 Web 应用程序。

```python
from fastapi import FastAPI
import psycopg2

app = FastAPI()

@app.get("/")
async def read_root():
    conn = psycopg2.connect(database="testdb", user="postgres", password="secretpassword", host="db", port="5432")
    cur = conn.cursor()
    cur.execute("SELECT * FROM users")
    rows = cur.fetchall()
    conn.close()
    return {"message": "Hello World", "data": rows}
```

#### 总结

通过本文的介绍，相信大家已经对 Full-stack-fastapi-postgresql 有了一定的了解。作为一款全栈现代 Web 应用程序生成器，它集成了多种前沿技术，并且能够帮助开发者迅速构建出高效、可靠的 Web 应用程序。在未来的日子里，Full-stack-fastapi-postgresql 必将成为越来越多开发者的首选，助力他们构建出更加现代化的 Web 应用程序。

## FastAPI-React：快速构建全栈 Web 应用程序

**项目地址**：https://github.com/Buuntu/fastapi-react

### 简介

FastAPI-React 是一个 Cookiecutter 模板，旨在简化使用 FastAPI 和 React 构建全栈 Web 应用程序的过程。它整合了 PostgreSQL、SQLAlchemy 和 Docker，提供了一个健壮且可扩展的开发环境，是学习借鉴全栈 Web 应用程序开发的不二之选。

#### 优点

- **易于使用：**Cookiecutter 模板自动化了大部分设置，让您专注于应用程序逻辑。

- **全面：**集成了 FastAPI、React、PostgreSQL、SQLAlchemy、Celery、Alembic、Prettier、Nginx、MaterialUI 和 Docker 等核心技术。

- **可扩展性：**应用程序基于 RESTful API，可轻松扩展以满足不断增长的需求。

- **安全性：**FastAPI 提供了内置的安全特性，以保护您的应用程序免受常见攻击。

- **测试友好：**模板包括用于应用程序测试的单元测试和集成测试。

  ![图片](./Python框架.assets/640-1714232100420-306.webp)

### 组件

#### FastAPI 后端：

- RESTful API 框架，用于处理客户端请求和返回 JSON 响应。

- 基于模式的验证，用于验证传入的数据。

- 依赖项注入，用于管理应用程序组件。

- 内置的安全功能，如令牌身份验证和跨源资源共享 (CORS)。

  ![图片](./Python框架.assets/640-1714232100420-307.webp)

#### React 前端：

- 流行的前端 JavaScript 库，用于创建交互式和动态的用户界面。

- 使用状态管理库（如 Redux）来管理应用程序状态。

- 路由组件，用于管理应用程序中的导航。

- 内置的样式表，用于自定义组件外观。

  ![图片](./Python框架.assets/640-1714232100420-308.webp)

#### PostgreSQL 数据库：

- 关系型数据库，用于存储应用程序数据。
- SQLAlchemy ORM，用于对象关系映射和数据库查询。
- 迁移系统，用于管理数据库模式更改。

#### Docker 容器：

- 虚拟化环境，用于打包和部署应用程序。
- 使用 Dockerfile 自动化应用程序构建过程。
- 多阶段构建，用于优化应用程序大小和性能。

### 使用 FastAPI-React

1. **安装 Cookiecutter：**安装全局 Cookiecutter 命令：`Bash pip install cookiecutter`

2. **使用模板：**使用以下命令生成项目：`Bash cookiecutter gh:tiangolo/fastapi-react`

3. **配置：**在 `settings.py` 文件中配置您的数据库连接和其他设置。

4. **运行：**使用 Docker 运行应用程序：`Bash docker-compose up`

5. **浏览：**应用程序将在 `http://localhost:8000` 处运行。

   ![图片](./Python框架.assets/640-1714232100420-309.webp)

### 项目亮点

- **Swagger UI：**FastAPI 提供了交互式 Swagger UI，可用于探索 API 端点。
- **端点文档：**使用 `app.openapi()` 端点生成机器可读的 OpenAPI 文档。
- **模式验证：**FastAPI 的 Pydantic 集成提供了健壮的数据验证机制。
- **Dependency Injection：**通过 Dependency Injection 管理应用程序组件，提高可维护性和可测试性。
- **优化 Docker 构建：**使用 Docker 多阶段构建和缓存来加速应用程序构建过程。

### 案例

FastAPI-React 可用于构建各种全栈 Web 应用程序，包括：

- **电子商务平台：**管理产品、订单和客户。
- **社交媒体应用程序：**创建帖子、评论和与其他用户互动。
- **分析仪表板：**可视化数据并提供交互式报告。
- **内容管理系统：**管理网站内容、用户和权限。

### 总结

FastAPI-React 是一个强大的 Cookiecutter 模板，它简化了使用 FastAPI、React、PostgreSQL、SQLAlchemy 和 Docker 构建全栈 Web 应用程序的过程。它提供了健壮、可扩展和安全的开发环境，加速了您的应用程序开发过程。

## Aiohttp：异步 Web 框架

Aiohttp 是一个提供异步 Web 服务的库，基于`asyncio`库。它支持客户端和服务器端的 Web 编程，适用于需要高并发处理的应用。

**核心特性**：

- 支持 WebSocket 和服务器推送事件（Server-Sent Events）；
- 异步请求处理，适合高并发情况；
- 支持客户端 Web 套接字和长轮询。

**代码示例**：

```python
from aiohttp import web

async def hello(request):
    return web.Response(text="Hello, Aiohttp!")

app = web.Application()
app.add_routes([web.get('/', hello)])

if __name__ == '__main__':
    web.run_app(app)
```

此示例创建了一个简单的异步 Web 应用，使用`aiohttp`库。定义了一个异步函数`hello`，它接受一个请求对象作为参数并返回一个响应对象，响应内容是`Hello, Aiohttp!`。然后创建一个应用实例，并通过`add_routes`方法添加了一个路由，将根 URL 映射到`hello`函数。`web.run_app(app)`启动服务。

## Falcon

- **官网**：
- **GitHub**：

- **优点**：高性能，符合 WSGI 标准，适合构建大型应用。
- **缺点**：相比 Flask 和 Django，社区支持和资源较少。
- **使用例子**：适合需要处理大量请求的高性能 API。

## Hug：一个简易界面好用的 Python 库

Hug 是一个用于创建 Web API 的 Python 库,旨在使 API 开发变得简单、快速和可靠.通过 Hug，用户可以快速构建出色的 API,无需繁琐的配置和复杂的代码.

- **优点**：一次编写，随处使用，适合创建高效的 API。
- **缺点**：相对其他框架，知名度和使用率较低。
- **使用例子**：适合需要快速开发和部署的小型项目。

### **特点和功能**

**简单易用：**

- Hug 提供了简洁而直观的 API 设计方式,降低了开发者的学习成本.

**高效性能：**

- Hug 底层使用 Falcon 或者 Django REST framework 等框架，保证了 API 的高性能.

**自动文档生成：**

- Hug 支持自动生成 API 文档,帮助开发者快速了解和使用 API.

**数据验证：**

- 支持对输入数据进行验证,提高 API 的稳定性和安全性.

**扩展性：**

- Hug 具有良好的可扩展性,允许用户根据需要自定义功能.

### **安装和注意事项**

```bash
# pip 安装 Hug：
pip install hug
```

**请确保在安装 Hug 时使用正确的环境，并注意以下几点：**

1. 建议在虚拟环境中安装,以避免依赖冲突.
2. 在生产环境部署之前,确保做好适当的测试和验证.

### **基本用法示例**

- 下面是一个简单的示例,展示了如何使用 Hug 创建一个基本的 API.py：

```python
import hug
@hug.get('/sum', examples='num1=2&num2=3')
def sum(num1: hug.types.number, num2: hug.types.number, hug_timer=3):
    total = num1 + num2
    return {'result': total, 'time_taken': float(hug_timer)}
```

### **进阶用法示例**

- 以下是一个进阶示例,展示了如何添加数据验证、身份验证和自定义响应等功能：

```python
import hug

@hug.get('/sum', examples='num1=2&num2=3')
def sum(num1: hug.types.number, num2: hug.types.number, hug_timer=3):
    total = num1 + num2
    return {'result': total, 'time_taken': float(hug_timer)}
```

- 通过这些示例,你可以开始探索 Hug 库的基本和进阶用法,从而更好地理解和利用该库来创建强大的 Web API.
- 这个示例的 api.py 文件演示了使用 Hug 库创建一个基本的 API.其中包含了两个路由：

**/hello:**

- 这个路由接受一个名为 name 的字符串参数,然后返回一个包含问候消息的字典.

**/sum:**

- 这个路由接受两个数字参数 num1 和 num2,计算它们的总和.并返回包含结果和执行时间的字典.
- 这个示例展示了如何利用 Hug 的装饰器来定义路由,以及如何指定参数类型和响应格式.通过访问这些路由,可以实现简单的数据处理和交互,在浏览器或通过 HTTP 请求与 API 进行通信.

## Eve

- **官网**：
- **GitHub**：

- **优点**：基于 Flask 和 Cerberus，易于使用，提供全面的 CRUD 操作和 CORS 支持。
- **缺点**：可能不如 Django REST Framework 那样功能全面。
- **使用例子**：适合需要快速搭建 RESTful API 的中型项目。

## Connexion

- **官网**：
- **GitHub**：

- **优点**：自动处理 HTTPS，使用 OpenAPI 规范，支持 OAuth 2 身份验证。
- **缺点**：需要以 YAML 格式编写 OpenAPI 规范，可能需要额外的学习。
- **使用例子**：适合需要严格遵循 OpenAPI 规范的项目。

## Cornice

- **官网**：
- **GitHub**：

- **优点**：基于 Pyramid 框架，提供 RESTful Web 服务的构建和记录。
- **缺点**：相对其他框架，可能需要更多的配置和设置。
- **使用例子**：适合需要使用 Pyramid 框架的 RESTful 服务。

## Appwrite:快速开发 Web 应用、移动应用和 Flutter 应用的通用后端平台

**项目地址**：https://github.com/appwrite/appwrite

### 简介

今天我们介绍的 Appwrite 是一个用于开发 Web 应用、移动应用和 Flutter 应用的通用后端平台。它是专为开发者所设计的，采用了开源社区的优秀技术，并针对开发者在所钟爱的编程语言上提供了优化的开发体验。

Appwrite 为开发者提供了一个快速、可靠的后端解决方案，使得他们能够更专注于应用的前端开发。它提供了一系列丰富的功能和工具，帮助开发者简化后端开发流程，提高开发效率。同时，Appwrite 还支持多种编程语言，包括但不限于 JavaScript、Python、PHP、Dart 等，使得开发者能够在熟悉的编程环境中进行开发，减少学习成本。

### 功能和使用方法

Appwrite 提供了一系列强大的功能和工具，包括用户认证、数据库、文件存储、实时通信等。开发者可以使用 Appwrite 提供的 API 和 SDK 来访问这些功能，并将其集成到自己的应用中。使用 Appwrite 的过程非常简单，开发者只需要按照文档中的指导进行操作即可。

![图片](./Python框架.assets/640-1714229785984-237.webp)

### 应用场景

Appwrite 适用于各种应用场景，无论是开发 Web 应用、移动应用还是 Flutter 应用。无论是个人开发者还是企业开发团队，都可以使用 Appwrite 来构建强大的后端功能，满足不同的需求。Appwrite 的灵活性和可扩展性使得它可以适应各种规模的应用。

### 优势

Appwrite 的优势在于其简单易用的开发体验和丰富的功能。开发者可以通过 Appwrite 快速构建出功能强大的应用，而无需花费过多的时间和精力在后端开发上。同时，Appwrite 还提供了安全可靠的后端解决方案，保障用户数据的安全性。

### 总结

Appwrite 是一个专为开发者设计的后端平台，提供了丰富的功能和工具，帮助开发者简化后端开发流程，提高开发效率。无论是个人开发者还是企业开发团队，都可以使用 Appwrite 来构建强大的后端功能，满足不同的需求。Appwrite 的优势在于其简单易用的开发体验和丰富的功能，使得开发者能够更专注于应用的前端开发。

## TEO：下一代以数据模式（Schema）为中心的 Web 框架，支持 Rust、Node.js 和 Python

**项目地址**：https://github.com/teocloud/teo

### 引言

> 在快速进化的编程世界中，高效、安全且易于拓展的 Web 框架是任何应用开发的利器。TEO 正是应运而生的解决方案，它是一个侧重于数据模式（Schema）的下一代 Web 框架，支持目前业内最炙手可热的编程语言：Rust、Node.js 和 Python。通过 TEO，开发者能够搭建出既严谨又灵活的应用架构，让 Web 开发变得前所未有的轻松和高效。下面就为您逐一解读 TEO 框架的特色与实现。
>
> ![图片](./Python框架.assets/640-1714228857867-202.webp)

### 核心理念：以 Schema 为中心

#### 数据模式的优势

传统的 Web 框架关注于业务逻辑和展示层的抽象，而数据模式往往是个被二次强调的概念。TEO 打破常规，将数据模式（Schema）置于核心位置。Schema 定义了数据如何在系统中流转、存储和交互，通过统一的 Schema，TEO 使得应用能够在不同层面保持一致性和清晰性，从而简化了开发、测试和维护过程。

#### 规范与自由的并行

在 TEO 框架下，开发者被鼓励先行定义数据模式，确立好应用的基础结构。规范的数据模式带来的是更高效的数据验证，同时能有效避免类型错误。与此同时，TEO 并没有限制开发者的自由，相反，标准化的数据流动为创意的实施提供了有力的支持。

![图片](./Python框架.assets/640-1714228857867-203.webp)

### 编程语言的多样支持

#### Rust：高效与安全并重

Rust 作为一门系统编程语言，以其内存安全和并发友好的特性闻名。TEO 引入 Rust 的支持，带来了高性能和强类型的优势，特别适用于高负载和高安全要求的应用场景。Rust 的零成本抽象让开发者能够编写既快速又可靠的代码，而 TEO 则为这样的代码提供了完美的发挥舞台。

#### Node.js：高并发的轻巧选择

Node.js 的非阻塞 I/O 模型让它在处理高并发、实时通讯和 IO 密集型任务方面表现出色。TEO 框架结合 Node.js 能够轻松应对 Web 服务中的即时性需求，无论是构建服务器端渲染(SSR)的复杂页面，还是编写快速响应的 API 服务，TEO 都能提供一流的支持。

#### Python：易读性与生态共存

Python 因其卓越的易读性和强大的生态系统而广受欢迎。TEO 将 Python 的优雅语法和丰富的第三方库无缝整合到 Web 开发中，使得进行数据科学、机器学习或是 AI 集成成为了可能。使用 TEO 和 Python，快速开发出复杂的数据分析 Web 应用不再是难题。

![图片](./Python框架.assets/640-1714228857867-204.webp)

### TEO 的特色功能

#### 统一的数据模式管理

在 TEO 中，所有的数据定义都是基于 Schema 的。这意味着，无论是数据库模型，还是 API 之间的数据传输，TEO 都确保了它们按照统一和严格定义的模式来操作。这样的处理方式减少了不必要的数据转化和验证逻辑，加速了开发流程。

#### 自动的数据验证

TEO 框架内建了强大的数据验证机制。开发者在定义数据模式时，就已经隐式地设定了数据验证的规则。这样一来，框架就能够在运行时自动检查数据，确保其合规性。这不仅降低了运行时错误的可能性，也提高了代码的安全性。

#### 易于拓展的架构

TEO 框架的设计思想是模块化和组件化。每个部件都是可替换和可拓展的，无论是替换数据库引擎、切换网络协议还是接入新的服务，开发者都能够以最小的改动实现。这种灵活性极大地延长了应用的生命周期。

#### 强大的性能表现

得益于 Rust、Node.js、Python 在性能上的优秀表现，TEO 在速度和响应方面都有着卓越的成绩。特别是在处理大规模数据和高并发请求时，TEO 展现出其健壮和高效的一面。

![图片](./Python框架.assets/640-1714228857867-205.webp)

### 如何入门 TEO？

TEO 的官方文档和社区资源为初学者提供了丰富的指导和帮助。首先，开发者可以通过浏览 TEO 的 GitHub 仓库来了解基础概念。仓库中包含了详细的安装步骤、快速入门指南和 API 参考。

##### 学习资源

- 官方文档：它是理解 TEO 框架的最佳起点，包括框架的设计哲学、核心概念、功能实现等。

- 示例应用：GitHub 仓库中包含了一系列的示例项目，开发者可以通过实际的项目代码来学习如何使用 TEO。

- 社区讨论：加入 TEO 的用户社区，和其他开发者交流心得。

  ![图片](./Python框架.assets/640-1714228857867-206.webp)

### 结语

TEO 作为新一代 Web 框架，将定义严谨、性能出色和语言多样性融入到它的 DNA 中。开发者通过 TEO 框架能够构建出更加可靠、灵活和强大的 Web 应用。从易于管理的数据模式到跨语言的统一解决方案，TEO 为现代 Web 开发的规模化和规范化提供了一条清晰而明确的道路。随着技术的不断演进，TEO 无疑将成为引领未来的 Web 框架典范。

## Web2py：构建安全可靠的 Web 应用的全栈框架

**Github 地址**：https://github.com/web2py/web2py

### 简介

Web2py 是一个免费且开源的全栈企业级框架，用于敏捷开发安全数据库驱动的基于 Web 的应用程序。它是用 Python 编写和可编程的。本文将深入介绍 Web2py 框架，包括其功能和特点，以及如何在项目中应用它。

![图片](./Python框架.assets/640-1714230329881-252.webp)

### 功能和特点

Web2py 框架具有许多强大的功能和独特的特点，使其成为构建 Web 应用程序的理想选择。以下是一些突出的功能和特点：

1. **全栈框架**：Web2py 是一个全栈框架，提供从前端到后端的一揽子解决方案。它包含了用于处理数据库、用户认证、URL 路由、模板引擎等等的组件，使开发者能够快速构建完整的 Web 应用程序。
2. **敏捷开发**：Web2py 鼓励敏捷开发方法，提供了许多工具和功能来加速开发过程。它提供了自动化的代码重载机制，允许开发者在修改代码后立即看到结果，从而显著提高了开发效率。
3. **安全性**：Web2py 框架致力于保护应用程序的安全性。它内置了一系列安全特性，如跨站点请求伪造（CSRF）保护、输入验证、安全的会话管理等，以防止常见的 Web 应用程序安全漏洞。
4. **数据库驱动**：Web2py 提供了强大的数据库抽象层，支持多种数据库后端，包括 MySQL、PostgreSQL、SQLite 等。它简化了与数据库的交互，并提供了灵活的查询和数据操作功能。
5. **Python 编程**：Web2py 使用 Python 作为主要编程语言，这使得它易于学习和使用。Python 是一种简洁、可读性强的语言，具有广泛的应用和丰富的第三方库支持，使开发者能够更快地构建功能强大的 Web 应用程序。
6. **可扩展性**：Web2py 具有良好的可扩展性，允许开发者根据项目需求进行定制和扩展。它支持模块化开发，使得各个组件可以独立开发和测试，从而提高了代码的可维护性和可重用性。

### 总结

Web2py 是一个功能强大、安全可靠的全栈企业框架，适用于敏捷开发安全数据库驱动的 Web 应用程序。无论是初学者还是有经验的开发者，都可以通过学习和应用 Web2py 框架来实现他们的 Web 开发目标。如果你对敏捷开发和安全 Web 应用程序感兴趣，不妨尝试使用 Web2py 框架，体验其强大的功能和便捷的开发流程。

## JustPy：Python 面向对象前后端一体开发框架

### 参考资料

项目 github：https://github.com/justpy-org/justpy
官方文档：https://justpy.io/

### 介绍

JustPy 是一个面向对象、基于组件的高级 Python Web 框架，不需要前端编程。只需几行 Python 代码，就可以创建交互式网站，而无需任何 JavaScript 编程。JustPy 还可用于为 Python 程序创建图形用户界面。

与其他 Web 框架不同，JustPy 没有前端/后端区别。所有编程都是在后端完成的，从而提供更简单、更高效、更 Python 的 Web 开发体验。

- JustPy 通过截取前端的相关事件并将其发送到后端进行处理来消除前端/后端的区别。
- 在 JustPy 中网页上的元素是组件类的实例。JustPy 中的一个组件是一个 Python 类，它允许您实例化可重用的自定义元素，其功能和设计被封装在代码的其余部分之外。
- 可以使用其他组件作为构建块创建自定义组件，开箱即用，JustPy 支持 HTML 和 SVG 组件以及更复杂的组件，例如图表和网格。它还支持 Material Design 2.0 组件的 Quasar 库的大多数组件和功能。
- JustPy 鼓励创建自己的组件并在不同的项目中重用它们。
- JustPy 支持使用 matplotlib 和 Highcharts 进行可视化。
- JustPy 与 pandas 很好地集成，并简化了基于 pandas 分析的网站构建。
- JustPy 带有一个 pandas 扩展，可以轻松地从 pandas 数据结构创建交互式图表和网格。

### 安装

JustPy 支持 python3.7+

```bash
pip install justpy
```

### 创建第一个项目，Hello World!

```python
import justpy as jp

def hello_world():
    wp = jp.WebPage()
    d = jp.Div(text='Hello world!')
    wp.add(d)
    return wp

jp.justpy(hello_world)
```

上面的程序会激活一个 Web 服务器，该服务器会为任何请求返回一个带有“Hello world！”的网页。在本地，可以将浏览器定向到http://127.0.0.1:8000 或 http://localhost:8000/ 或查看结果。

```python

import justpy as jp

def my_click(self, msg):
    self.text = 'I was clicked!'

def hello_world():
    wp = jp.WebPage()
    d = jp.Div(text='Hello world!')
    d.on('click', my_click)
    wp.add(d)
    return wp

jp.justpy(hello_world)
```

稍作修改，在点击“Hello world！”时会变为“我被点击了！

JustPy 的后端使用 starlette（一个轻量级的 ASGI 框架/工具包，非常适合构建高性能 Asyncio 服务）和 uvicorn（基于 uvloop 和 httptools 构建的闪电般快速的 ASGI 服务器） 方法构建的。前端使用 vue.js 构建的。

JustPy 消除前端/后端区别的方式是截获前端的相关事件，并将它们发送到后端进行处理。

项目示例

![图片](./Python框架.assets/640-1714150106767-129.gif)

## NiceGUI：一个纯 PythonWeb 前端，用 Python 构建 Web 应用程序

Github 地址：https://github.com/zauberzeug/nicegui

### 简介：

NiceGUI 是一个基于 Python 的开源库，它提供了一种优雅的方式来创建 Web 界面。

通过 NiceGUI，开发人员可以使用 Python 编写代码来构建交互式用户界面，而无需熟悉前端开发技术。

本文将详细介绍 NiceGUI 的特性和使用方法，帮助读者了解如何使用这个强大的工具来创建美观、易用的 Web 应用程序。

![图片](./Python框架.assets/640-1714153650698-149.webp)

### NiceGUI 的特性：

1. **简洁易用**：

   NiceGUI 提供了一组简单而直观的 API，使得创建 Web 界面变得简单易懂。无需繁琐的 HTML 和 CSS 编码，只需使用 Python 代码即可快速构建界面。

   ![图片](./Python框架.assets/640-1714153650698-150.webp)

2. **跨平台支持**：

   NiceGUI 可以在多个平台上运行，包括 Windows、Mac 和 Linux。这使得开发人员可以在自己喜欢的操作系统上使用 NiceGUI 来构建应用程序。

3. **响应式设计**：

   NiceGUI 支持响应式设计，可以自动适应不同的屏幕尺寸和设备类型。这意味着您创建的界面可以在桌面、平板和手机等设备上提供一致的用户体验。

4. **组件丰富**：

   NiceGUI 提供了一系列丰富的组件，如按钮、文本框、下拉框、表格等，可以满足各种用户界面的需求。您可以根据应用程序的需求选择并配置这些组件，从而创建出功能完善的 Web 界面。

### 使用 NiceGUI 创建 Web 界面的步骤：

1. 1. 安装 NiceGUI：使用 pip 命令安装 NiceGUI 库，确保您的 Python 环境已经配置正确。

   2. 导入 NiceGUI：在 Python 代码中导入 NiceGUI 库。

   3. 创建应用程序对象：使用 NiceGUI 提供的`NiceApp`类创建一个应用程序对象。

   4. 添加组件：使用应用程序对象的方法，如`add_button()`、`add_textbox()`等，向应用程序界面中添加所需的组件。

   5. 运行应用程序：调用应用程序对象的`run()`方法来启动应用程序。

   6. 交互与事件处理：使用 NiceGUI 提供的事件处理器，如`on_button_click()`、`on_text_change()`等，处理用户的交互操作。

   7. 部署应用程序：将应用程序部署到 Web 服务器上，使其可以通过浏览器访问。

      ![图片](./Python框架.assets/640-1714153650698-151.webp)

### 总结：

NiceGUI 是一个强大而易用的 Python 库，它使得开发人员能够以优雅的方式创建 Web 界面。

通过使用 NiceGUI，开发人员可以摆脱繁琐的前端开发，专注于业务逻辑的实现。

希望本文的介绍能够帮助读者了解 NiceGUI 的特性和使用方法，并鼓励他们尝试使用这个工具来构建出美观、易用的 Web 应用程序。

## pyscript：在浏览器中运行 python

pyscript：**https://github.com/pyscript/pyscript**

pyscript 是一个允许用户使用 Python 语言直接在网页浏览器中创建和运行应用的框架。这个库的目标是让前端开发更加便利，同时使得Python 开发者能够更轻松地利用 Python 的强大功能来构建和分享网页应用。

pyscript 打破了传统的 Web 开发模式，使你能够将 Python 代码直接嵌入 HTML 文件中。这种魔力是通过 Pyodide 实现的，该项目将整个 Python 解释器缩小为轻量级 WebAssembly (WASM) 模块。该 WASM 模块在浏览器中运行，允许你的 Python 代码与网页交互。

### 主要特点

1. **运行环境**

   PyScript 利用了 WebAssembly 和 Pyodide 项目，后者可以在浏览器中运行Python解释器。这意味着无需服务器端的Python环境，用户的Python代码可以直接在浏览器中执行。

2. **集成HTML**

   PyScript 提供了一种将Python代码与HTML代码结合的简便方式，使得Python函数可以直接被HTML元素调用，例如按钮点击事件可以触发Python函数。

3. **支持Python库**

   尽管PyScript运行在浏览器中，它仍然支持多种流行的Python库，如NumPy、Pandas、Matplotlib等，使得数据分析和可视化可以直接在网页上进行。

### 案例分享

下面是使用 PyScript 和 Matplotlib 库来在网页上绘制数据。

```html
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
    <script defer src="https://pyscript.net/alpha/pyscript.js"></script>

    <py-env>
        - matplotlib
    </py-env>
</head>
<body>
    <h1>Matplotlib</h1>
    <py-script> print("My Lineplot")</py-script>
    <div id="lineplot"></div>
    <py-script output="lineplot">
      # Python Code Goes Here ...
      import matplotlib.pyplot as plt

      fig, ax = plt.subplots()

      year_1 = [2016, 2017, 2018, 2019, 2020, 2021]
      population_1 = [42, 43, 45, 47, 48, 50]

      year_2 = [2016, 2017, 2018, 2019, 2020, 2021]
      population_2 = [43, 43, 44, 44, 45, 45]

      plt.plot(year_1, population_1, marker='o', linestyle='--', color='g', label='Country 1')
      plt.plot(year_2, population_2,  marker='d', linestyle='-', color='r', label='Country 2')

      plt.xlabel('Year')
      plt.ylabel('Population (M)')
      plt.title('Year vs Population')
      plt.legend(loc='lower right')

      fig
    </py-script>
</body>
</html>
```



## CherryPy：Python 微型 Web 框架

GitHub：https://github.com/cherrypy/cherrypy

官网：https://cherrypy.dev

文档：https://docs.cherrypy.dev/en/latest/

### 什么是 CherryPy

CherryPy 是一个基于 Python 的开源 Web 框架，由一个专注于性能和易用性的小型核心驱动。它由 Sylvain Hellegouarch 创建，并在 2002 年首次发布。

CherryPy 的主要设计目标是提供一种简单的、快速的方法来构建 Web 应用程序。

CherryPy 提供了一个高效的 HTTP/1.1 WSGI Web 服务器，可以与任何兼容 WSGI 的 Web 服务器集成，如 Apache、Nginx 等。

它使用了一个简洁的 API 和清晰的结构，让开发者能够以最少的代码量实现各种 Web 应用程序。

### **与其他类似库的对比**

与其他类似的 Python Web 框架相比，CherryPy 有以下几个优点：

1. **简单易用**：CherryPy 的 API 非常简单，容易上手。它使用类和方法来组织应用程序逻辑，可以快速创建路由、处理请求和响应。
2. **稳定可靠**：CherryPy 经过多年的发展和实战检验，已经非常稳定和可靠。它的核心代码非常小巧，不会引入太多不必要的依赖和复杂性。
3. **高性能**：CherryPy 是一个高性能的 Web 框架，它使用了异步 I/O 和协程技术，能够处理大量并发请求，提供出色的响应速度。
4. **灵活可扩展**：CherryPy 支持插件机制和中间件，可以轻松扩展功能。你可以使用现有的插件或编写自己的插件来增加框架的功能。

### **安装**

你可以使用 pip 命令来安装 CherryPy：

```bash
pip install cherrypy
```

安装完成后，你就可以开始使用 CherryPy 来构建 Web 应用程序了。

### **构建一个简单的 Web 应用程序**

让我们从一个简单的示例开始，构建一个 Hello World 的 Web 应用程序。首先，创建一个名为`app.py`的文件，并添加以下代码：

```python
import cherrypy

class HelloWorld:
    @cherrypy.expose
    def index(self):
        return "Hello, World!"

if __name__ == '__main__':
    cherrypy.quickstart(HelloWorld())
```

上述代码定义了一个名为 `HelloWorld` 的类，该类包含一个名为 `index` 的方法。通过在方法上添加 `@cherrypy.expose` 装饰器，我们将该方法暴露为一个 Web 页面。在 `index` 方法中，我们返回了一个简单的字符串 `Hello, World!`。

在 `if __name__ == '__main__'` 语句中，我们使用 `cherrypy.quickstart` 方法启动 CherryPy 服务器，并传递 `HelloWorld` 类的实例作为根应用程序。

保存文件后，运行以下命令启动 CherryPy 服务器：

```bash
python app.py
```

打开浏览器，访问 `http://localhost:8080`，你将看到一个简单的页面显示 `Hello, World!`。

### **处理请求和响应**

CherryPy 使用类和方法来处理 Web 请求和生成响应。通过在方法上添加 `@cherrypy.expose` 装饰器，我们可以将该方法暴露为一个 URL 处理程序。

下面是一个处理 GET 和 POST 请求的示例：

```python
import cherrypy

class FormHandler:
    @cherrypy.expose
    def index(self):
        return '''
            <form method="POST" action="submit">
                <input type="text" name="name" placeholder="Your name">
                <input type="submit" value="Submit">
            </form>
        '''

    @cherrypy.expose
    def submit(self, name):
        return f'Hello, {name}!'

if __name__ == '__main__':
    cherrypy.quickstart(FormHandler())
```

上述代码定义了一个名为 `FormHandler` 的类，该类包含一个 `index` 方法和一个 `submit` 方法。在 `index` 方法中，我们返回了一个简单的 HTML 表单，用于输入名字。在 `submit` 方法中，我们接收到名字参数，并返回一个包含名字的问候消息。

保存文件后，运行以下命令启动 CherryPy 服务器：

```bash
python app.py
```

打开浏览器，访问 `http://localhost:8080`，你将看到一个包含输入框和提交按钮的表单。在输入框中输入你的名字并点击提交按钮，页面将显示一个个性化的问候消息。

### **静态文件和模板**

CherryPy 支持处理静态文件和使用模板引擎渲染动态内容。通过配置静态文件目录和使用模板引擎，我们可以更好地组织和管理 Web 应用程序。

首先，创建一个名为 `static` 的文件夹，并将静态文件放入其中。

然后，安装一个模板引擎，比如 **[Jinja2](https://jinja.palletsprojects.com/en/3.1.x/)**。你可以使用 pip 命令来安装：

```bash
pip install jinja2
```

下面是一个处理静态文件和使用 Jinja2 模板引擎的示例：

```python
import cherrypy
from jinja2 import Environment, FileSystemLoader

class WebApp:
    def __init__(self):
        self.env = Environment(loader=FileSystemLoader('templates'))

    @cherrypy.expose
    def index(self):
        template = self.env.get_template('index.html')
        return template.render()

if __name__ == '__main__':
    cherrypy.quickstart(WebApp(), '', config={
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': 'static'
        }
    })
```

上述代码定义了一个名为 `WebApp` 的类，该类使用 Jinja2 模板引擎来渲染动态内容。在 `index` 方法中，我们加载名为 `index.html` 的模板文件，并使用模板引擎渲染。

在 CherryPy 的配置中，我们将 `/static` 路径映射到 `static` 文件夹，以便 CherryPy 能够处理静态文件。

创建一个名为 `templates/index.html` 的文件，并添加以下内容：

```html
<!DOCTYPE html>
<html>
	<head>
		<title>CherryPy WebApp</title>
		<link rel="stylesheet" type="text/css" href="/static/style.css" />
	</head>
	<body>
		<h1>Welcome to CherryPy WebApp</h1>
		<p>This is a static file and template example.</p>
	</body>
</html>
```

在 `templates` 文件夹中创建一个名为 `style.css` 的文件，并添加以下内容：

```css
h1 {
	color: blue;
}
```

保存文件后，运行以下命令启动 CherryPy 服务器：

```bash
python app.py
```

打开浏览器，访问`http://localhost:8080`，你将看到一个包含静态文件和渲染模板的页面。标题为蓝色，页面显示一段文字。

### **实践**

#### **练习 1：创建一个 RESTful API**

使用 CherryPy 创建一个简单的 RESTful API，包含以下几个请求：

- `GET /api/books`：获取所有图书
- `POST /api/books`：创建一本新书
- `GET /api/books/{id}`：获取指定 ID 的图书
- `PUT /api/books/{id}`：更新指定 ID 的图书
- `DELETE /api/books/{id}`：删除指定 ID 的图书

提示：可以使用 Python 的字典来保存图书数据，并使用 CherryPy 的`cherrypy.request.json`属性来获取 JSON 请求体中的数据。

#### 练习 2：使用中间件增加功能

通过编写一个自定义中间件，实现请求计时功能。中间件应该记录每个请求的处理时间，并在响应中添加一个`X-Processing-Time`标头，指示请求的处理时间。

### 总结

CherryPy 是一个极简、稳定且功能强大的 Web 框架，它通过简洁的 API 和清晰的结构，提供了一种简单快速的方法来构建 Web 应用程序。

使用 CherryPy，你可以轻松地创建高性能的 Web 应用程序，处理请求和生成响应。

在本教程中，我们简要介绍了 CherryPy 的基本用法，包括构建简单的 Web 应用程序、处理请求和响应、处理静态文件和使用模板引擎等。同时，我们也提供了一些实践题目供你尝试，以进一步探索 CherryPy 的功能和灵活性。

希望这个教程能帮助你了解和学习 CherryPy，多一个 Web 开发工具，为工作提供帮助和灵

## Textual Web：Python 快速应用开发框架的革命性网络扩展

**项目地址**：https://github.com/Textualize/textual-web

### 认识 Textual

在介绍 Textual Web 之前，首先我们需要了解一下 Textual。

Textual 是一个用于 Python 的快速应用开发框架，它致力于简化应用程序的开发过程，提高开发效率，并且保持代码的整洁和可维护性。通过 Textual，开发人员可以快速地构建出功能完善的应用程序，实现各种复杂的业务逻辑，为用户提供良好的应用体验。

### 什么是 Textual Web

Textual Web 是基于 Textual 框架的一个网络扩展平台，它的主要功能是在 Web 上发布 Textual 应用和终端。通过 Textual Web，用户可以直接在浏览器中使用各种 Textual 应用和终端，而无需进行繁琐的安装和配置，极大地方便了用户的使用。

![图片](./Python框架.assets/640-1714228213827-142.webp)

### Textual Web 的优势与特点

#### 轻松的访问方式

Textual Web 允许用户在浏览器中访问 Textual 应用和终端，无论是在个人电脑、平板还是手机上，只要有网络连接，用户就可以随时随地进行使用，极大地提高了使用的便捷性和灵活性。

#### 丰富的应用资源

Textual Web 平台上拥有大量的 Textual 应用和终端，涵盖了文字编辑、编程开发、系统管理等多个领域。无论是个人用户还是企业开发者，都可以在这里找到适合自己需求的工具和应用，为其工作和学习提供便利。

![图片](./Python框架.assets/640-1714228213827-143.webp)

#### 灵活的定制化设置

Textual Web 允许用户根据自己的需要对 Textual 应用和终端进行个性化的设置，包括界面风格、快捷键、功能布局等，从而使得用户可以根据自己的喜好和习惯进行调整和配置，提升了使用体验。

#### 数据同步与安全

Textual Web 支持云端数据同步，用户可以在不同设备上使用相同的 Textual 应用和终端，并且数据可以实时同步，不会出现数据丢失或不一致的情况。同时，平台采用严密的加密和安全协议，保障用户数据的安全性。

![图片](./Python框架.assets/640-1714228213827-144.webp)

### 使用 Textual Web 的优势

#### 跨平台应用

由于 Textual Web 的应用和终端都是基于 Web 发布的，在任何操作系统下都可以轻松使用，即使在没有安装 Python 或 Textual 框架的情况下，用户也能够快速部署和使用这些应用。

#### 无需安装和更新

传统的 Textual 应用和终端需要用户下载、安装和不断更新，而通过 Textual Web 发布的应用则不需要用户自行进行这些步骤，极大减轻了用户的维护负担。

#### 便于分享和协作

Textual Web 支持用户在浏览器中直接分享 Textual 应用和终端，方便用户之间进行合作和交流，同时也减少了应用的部署和使用成本。

#### 扩展性强

Textual Web 将会成为一个庞大的 Textual 生态系统，包含了各种丰富的应用和服务，用户可以根据自己的需要进行选择和应用，从而极大地满足了用户的个性化需求。

### 结语

Textual Web 的出现为用户带来了更为便捷、高效的 Textual 应用和终端使用方式。无需受限于特定的操作系统或设备，只需通过浏览器就能够享受 Textual 带来的便利。相信在未来，Textual Web 将会为用户带来更多的创新和惊喜。

## 用纯 Python 直接构建 web 应用的开源项目：H2O Wave

**项目地址**：https://github.com/h2oai/wave

H2O Wave 是一个开源项目，它提供了一个软件堆栈，可以完全使用 Python 构建美观、低延迟、实时的基于浏览器的应用和仪表盘，而无需使用 HTML、JavaScript 或 CSS。下面将详细介绍 H2O Wave 的特点和优势。

### 1. 什么是 H2O Wave？

H2O Wave 是一个开源的软件堆栈，旨在简化基于浏览器的应用和仪表盘的开发过程。它提供了一种使用 Python 进行开发的方式，无需编写 HTML、JavaScript 或 CSS 代码，即可创建出美观、低延迟、实时的应用程序。

![图片](./Python框架.assets/640-1714236743631-461.webp)

### 2. H2O Wave 的特点

H2O Wave 具有以下几个特点：

**a. 美观的界面设计：** H2O Wave 提供了丰富的界面组件和布局选项，使开发者能够轻松创建出美观、直观的用户界面。

**b. 低延迟和实时性：** H2O Wave 使用高性能的通信协议，确保应用程序在浏览器中具有低延迟和实时的特性，用户可以即时获取数据更新和交互反馈。

**c. 完全使用 Python：** H2O Wave 的开发过程完全使用 Python/R 语言，无需编写 HTML、JavaScript 或 CSS 代码，使得开发者可以更专注于业务逻辑的实现。

**d. 可扩展性和灵活性：** H2O Wave 提供了丰富的扩展接口和插件机制，使开发者能够根据自己的需求进行定制和扩展，满足不同应用场景的需求。

![图片](./Python框架.assets/640-1714236743631-462.webp)

### 3. H2O Wave 的优势

H2O Wave 相比传统的基于 HTML、JavaScript 和 CSS 的开发方式，具有以下几个优势：

**a. 简化开发流程：** 使用 H2O Wave，开发者无需学习和编写 HTML、JavaScript 或 CSS 代码，可以更快速地开发出应用程序和仪表盘。

**b. 提高开发效率：** H2O Wave 提供了丰富的界面组件和布局选项，开发者可以通过简单的配置和组合，快速构建出复杂的用户界面，提高开发效率。

**c. 降低学习成本：** 对于 Python 开发者来说，使用 H2O Wave 可以直接利用已有的编程技能和知识，无需学习新的前端技术，降低了学习成本。

**d. 高性能和实时性：** H2O Wave 使用高性能的通信协议，保证应用程序在浏览器中具有低延迟和实时的特性，提供更好的用户体验。

![图片](./Python框架.assets/640-1714236743631-463.webp)

### 4. 如何开始使用 H2O Wave？

要开始使用 H2O Wave，您可以按照以下步骤进行：

**a. 安装 H2O Wave：** 您可以通过 pip 命令安装 H2O Wave 的 Python 包，具体安装步骤可以参考官方文档。

**b. 编写应用程序：** 使用 Python/R 编写应用程序的逻辑，包括数据处理、界面设计和交互逻辑等。

**c. 运行应用程序：** 在命令行中运行 H2O Wave 的命令，启动应用程序，并在浏览器中查看和交互应用程序。

以下是一个简单的 Python 示例，展示了如何使用 H2O Wave 创建一个简单的仪表盘：

```python
from h2o_wave import site, ui

# 创建一个Wave站点
s = site['/']

# 创建一个卡片
card = ui.markdown_card(
    box='1 1 4 2',
    title='Hello Wave',
    content='欢迎使用H2O Wave！'
)

# 将卡片添加到Wave站点
s.add_page('main').add(card)

# 运行Wave应用程序
s.start()
```

### **5. 总结**

H2O Wave 是一个开源的软件堆栈，通过使用 Python/R 进行开发，简化了基于浏览器的应用和仪表盘的开发过程。它具有美观的界面设计、低延迟和实时性、完全使用 Python/R、可扩展性和灵活性等特点，相比传统的开发方式具有简化开发流程、提高开发效率、降低学习成本和提供高性能和实时性等优势。如果您想快速构建美观、低延迟、实时的应用程序和仪表盘，不妨尝试使用 H2O Wave。

## Reflex：纯 Python 打造精美 Web 应用的利器，产品级高性能实时 Web 应用框架

[16.6K star！一款纯python打造的精美Web应用的利器，神奇炫酷！ (qq.com)](https://mp.weixin.qq.com/s/WMMgwAiJjSvmKokCU6Bs_A)

**项目地址**：https://github.com/reflex-dev/reflex

### 引言

在当今互联网时代，Web 应用的开发变得越来越重要。而 Python 作为一门简洁、易学且功能强大的编程语言，一直以来都备受开发者的喜爱。然而，传统的 Python Web 框架往往需要与其他语言进行混合编程，这给开发者带来了一定的困扰。

幸运的是，现在有了 Reflex，这是一个能够让你在纯 Python 环境下创建 Web 应用的工具。

相比大多数 Python Web 框架比较粗糙的 UI，Reflex 的 UI 非常美观，控件非常丰富，并且完全使用 Python 调用。

![图片](./Python框架.assets/640-1714240590338-715.webp)

### 什么是 Reflex？

Reflex 是一个基于 Python 的 Web 框架，它的目标是让开发者能够在纯 Python 环境下构建高效、可扩展的 Web 应用。与传统的 Python Web 框架不同，Reflex 不需要与其他语言进行混合编程，所有的开发工作都可以在 Python 中完成。这使得开发者能够更加专注于业务逻辑的实现，而不需要花费过多的精力在框架的学习和配置上。

![图片](./Python框架.assets/640-1714240590338-716.webp)

### Reflex 的特点

**纯 Python 开发**：Reflex 完全使用 Python 语言进行开发，无需与其他语言进行混合编程，降低了学习和使用的门槛。

**简洁易用**：Reflex 提供了简洁而强大的 API，使得开发者能够快速上手并高效地构建 Web 应用。

![图片](./Python框架.assets/640-1714240590338-717.webp)

**高性能**：Reflex 采用异步 IO 的方式处理请求，能够处理大量并发请求，提供出色的性能表现。

**可扩展性**：Reflex 支持插件机制，开发者可以根据自己的需求扩展框架的功能，使得应用能够更好地适应不同的场景。

**丰富的生态系统**：Reflex 拥有庞大的生态系统，提供了各种各样的插件和工具，方便开发者进行开发和部署。

![图片](./Python框架.assets/640-1714240590338-718.webp)

### Reflex 的使用

使用 Reflex 创建 Web 应用非常简单。首先，你需要安装 Reflex 框架：

```
pip install reflex
```

然后，建立一个项目目录，进入项目目录后，你可以使用 Reflex 提供的命令行工具创建一个新的项目：

```
reflex init
```

接下来，

```
reflex run
```

现在，你可以在浏览器中访问 http://localhost:3000，就能看到你的应用已经成功运行了。

![图片](./Python框架.assets/640-1714240590338-719.webp)

### Reflex 的应用场景

Reflex 适用于各种不同的应用场景，包括但不限于：

**Web 应用开发**：使用 Reflex 可以快速构建高效、可扩展的 Web 应用，满足不同规模和需求的项目。

![图片](./Python框架.assets/640-1714240590339-720.webp)

**API 开发**：Reflex 提供了强大的 API 支持，使得开发者能够轻松构建和管理 RESTful API。

**微服务架构**：Reflex 的插件机制和高性能特性使得它成为构建微服务架构的理想选择。

**实时应用**：Reflex 的异步 IO 能力使得它非常适合构建实时应用，如聊天应用、实时数据展示等。

![图片](./Python框架.assets/640-1714240590339-721.webp)

### 结论

Reflex 是一个强大而简洁的 Python Web 框架，它能够让开发者在纯 Python 环境下构建高效、可扩展的 Web 应用。无论是 Web 应用开发、API 开发还是微服务架构，Reflex 都能够提供出色的表现。如果你是一名 Python 开发者，不妨尝试一下 Reflex，相信它会给你带来全新的开发体验。

## Pyodide：浏览器能跑 Python 代码，Python 应用变身 Web 魔法

**项目地址**：https://github.com/pyodide/pyodide

### 一、简介

Pyodide 是一个创新的 Python 库，它将完整的 Python 解释器和相关的科学计算库打包成 WebAssembly 格式，使得开发者可以直接在 Web 浏览器中运行 Python 代码。Pyodide 不仅提供了与传统 Python 环境相似的编程体验，还可以在浏览器中进行数据科学和机器学习等复杂的计算任务。这意味着数据科学家和开发者们可以无需离开浏览器，就能够享受到 Python 在数据处理和分析方面的强大能力。

### 二、安装

安装 Pyodide 非常简单，只需在 HTML 文件中引入 Pyodide 的预编译版本即可开始使用。通过以下代码添加引用：

```html
<script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"></script>
```

### 三、使用方法

使用 Pyodide 进行 Python 编程需要按照以下步骤进行：

加载 Pyodide 运行时环境：在 HTML 文件中添加 Pyodide 的引用后，使用以下代码初始化和加载 Pyodide 运行时环境：

```python
pyodide({
  indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/',
}).then((pyodide) => {
  // Pyodide运行时环境加载完成

});
```

执行 Python 代码：一旦 Pyodide 运行时环境加载完成，就可以使用以下代码执行 Python 代码：

```python
const output = pyodide.runPython(`
  # 输入Python代码
  print("Hello, Pyodide!")

`);
```

与浏览器交互：Pyodide 还提供了与浏览器交互的能力，例如访问浏览器 API、处理用户输入等操作。

```
# 获取用户输入
const name = prompt("请输入您的姓名：");

# 在浏览器控制台输出结果

console.log(`您的姓名是：${name}`);
```

一段简单完整的 pyodide 完整代码：

![图片](./Python框架.assets/640-1714240659670-736.webp)

### 四、示例代码

以下是一个使用 Pyodide 进行数据分析和绘图的示例代码：

```python
pyodide({
  indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/',
}).then((pyodide) => {
  // 导入Python库
  pyodide.runPython(`
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt

    # 创建数据
    data = pd.DataFrame({
        'x': np.arange(0, 10, 0.1),
        'y': np.sin(np.arange(0, 10, 0.1))
    })

    # 绘制折线图
    plt.plot(data['x'], data['y'])
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.title('Sin Function')

    # 显示图形
    plt.show()
  `);

});
```

### 五、优缺点

Pyodide 作为一个颠覆性的 Python 库，具有以下优点和缺点：

#### 优点：

无缝迁移：Pyodide 提供了与传统 Python 环境相似的编程体验，无需学习新的语言或工具，降低了迁移成本。

数据科学的 Web 体验：Pyodide 使得数据科学更具互动性和灵活性，科研人员和开发者可以在浏览器中快速进行数据分析和模型构建。

轻量化部署：由于 Pyodide 是基于 WebAssembly 技术的一体化解决方案，它不需要在用户设备上安装任何额外的软件，非常适合 Web 应用程序的部署和分享。

#### 缺点：

性能问题：由于 Pyodide 在浏览器中运行，受到浏览器性能和资源限制，相对于传统的本地 Python 环境，性能会有一定的损失。

库的限制：尽管 Pyodide 打包了许多常用的科学计算库，但与 Python 生态系统中的全部库相比，Pyodide 的库支持仍然有限。

### 六、应用场景

Pyodide 适用于以下应用场景：

**数据分析和可视化**：Pyodide 提供了丰富的数据分析和可视化库，方便数据科学家们在浏览器中进行数据探索和展示。

**在线教育**：Pyodide 可以作为在线教育平台的一部分，使得学生们可以在浏览器中学习和实践 Python 数据科学和机器学习的知识。

**快速原型开发**：对于需要快速构建原型的项目，Pyodide 提供了一种简便的方式，通过浏览器直接测试和演示想法的可行性。

### 总结

Pyodide 作为一款前沿的 Python 库，将完整的 Python 解释器和相关的科学计算库打包成 WebAssembly 格式，使得开发者可以在浏览器中轻松运行 Python 代码。它为数据科学家和开发者们提供了更灵活和便捷的数据科学和机器学习环境，无需离开浏览器即可享受到 Python 的强大能力。虽然 Pyodide 存在一些性能和库支持的限制，但它在数据分析、在线教育和快速原型开发等领域具有广泛的应用潜力。总之，Pyodide 使得数据科学从未如此得心应手，为开发者们开创了全新的数据科学 Web 体验。

## PyScript：在浏览器中创建丰富的 Python 应用

**Github 地址**：https://github.com/pyscript/pyscript

**官网**：https://pyscript.net/

### 什么是 PyScript?

PyScript 是一个框架，允许用户使用 HTML 的界面和 Pyodide、MicroPython 以及 WASM 等强大技术，在浏览器中创建丰富的 Python 应用程序，并结合现代 Web 技术进行开发。

![图片](./Python框架.assets/640-1714242495591-800.webp)

### 为什么选择 PyScript?

- **Web 界面**：PyScript 提供了基于 HTML 的界面，使得 Python 脚本编程更加直观和易用。用户可以使用 Web 界面轻松创建、编辑 Python 脚本，无需安装任何开发环境。
- **Pyodide 支持**：Pyodide 是一个在浏览器中运行 Python 的项目，它通过 WebAssembly 技术将 CPython 运行时和标准库编译为 WASM，使得 Python 可以在浏览器中直接运行。
- PyScript 利用 Pyodide 的强大功能，提供完整的 Python 解释器和标准库，让开发者可以在浏览器中使用 Python 进行编程。
- **MicroPython 支持**：MicroPython 是一种精简版的 Python 解释器，专为嵌入式设备和受限环境设计。PyScript 结合了 MicroPython 的特性，使得 Python 脚本可以在浏览器中高效运行，并能够与硬件进行交互。
- **WASM 技术**：WebAssembly（WASM）是一种可移植、大小和加载时间效率高的二进制格式，能够在现代浏览器中运行。PyScript 利用 WASM 技术，将 Python 解释器和标准库编译为 WASM 格式，使得 Python 脚本能够以高效的方式在浏览器中执行。
- **现代 Web 技术支持**：PyScript 结合了现代 Web 技术，如 JavaScript、CSS 等，使得开发者可以灵活构建交互式的用户界面，并与 Python 脚本进行无缝集成。

### 如何使用 PyScript?

1. 1. **安装 PyScript**：首先，你需要在支持 WASM 的现代浏览器中打开 PyScript 的 Web 界面。无需安装任何额外的开发环境，只需打开浏览器即可开始编程。

   2. **编写 Python 脚本**：在 PyScript 的 Web 界面中，使用 Python 语法编写你的脚本。你可以利用 Pyodide 和 MicroPython 的功能，编写与硬件交互、数据处理、网络请求等各种应用。

   3. **运行脚本**：在 PyScript 的 Web 界面中，你可以直接运行你编写的 Python 脚本。PyScript 会将你的脚本解释为 WASM 格式，并在浏览器中执行。

      ![图片](./Python框架.assets/640-1714242495591-801.webp)

### PyScript 的应用场景

PyScript 适用于各种场景，包括但不限于：

1. 1. **Web 应用开发**：PyScript 结合了现代 Web 技术，使得开发者可以使用 Python 进行 Web 应用的开发。通过 PyScript，你可以创建交互式的用户界面、处理数据、进行网络请求等。
   2. **嵌入式设备**：PyScript 结合了 MicroPython 的特性，适用于开发嵌入式设备的控制和交互。你可以通过 PyScript 编写 Python 脚本，与硬件进行交互，控制传感器、执行动作等。
   3. **教育和学习**：PyScript 提供了一个友好的学习环境，适合教育和学习 Python 编程。通过 PyScript，学生可以在浏览器中编写和执行 Python 脚本，快速入门 Python 编程。
   4. **数据分析和可视化**：PyScript 利用 Pyodide 的强大功能，提供完整的 Python 解释器和标准库，适用于数据分析和可视化。你可以使用 PyScript 进行数据处理、绘图和可视化，从而快速分析和展示数据。

### 总结

PyScript 是一个在浏览器中创建丰富 Python 应用的框架，通过 Web 界面、Pyodide 和 MicroPython 等技术，使得 Python 脚本可以在浏览器中高效运行。不过使用 PyScript 需要一点简单的 HTML 知识，可以参考官方实例，快速获得使用方法。

PyScript 适用于 Web 应用开发、嵌入式设备、教育和学习、数据分析和可视化等各种场景。通过 PyScript，你可以使用 Python 进行编程，无需安装任何额外的开发环境，只需在现代浏览器中打开 PyScript 的 Web 界面即可开始编程。

## Script-server：Web界面运行Python脚本，带来脚本管理和运行的崭新体验

**项目地址**：https://github.com/bugy/script-server

### 引言

网络发达的今天，有许多需要网络运行Python脚本的应用场景，如Python学习教学等。Script-server就是一个基于web的开源脚本应用程序界面，它提供了一个易于使用的网络平台，可用于管理和运行各种脚本。这个应用程序旨在帮助开发人员和系统管理员更高效地管理和执行脚本任务。Script-server的功能非常强大，它包含了许多有用的功能和工具，以提升脚本的管理和执行过程。下面将介绍一些Script-server的主要功能及其优势。

### **功能简介**

- 脚本任务一键执行，简化操作流程。

- 多种脚本语言支持，满足不同需求。

- 定时执行和手动触发，确保任务准时执行。

- 多用户和权限管理，保护脚本安全可靠。

- 脚本共享和扩展，充分利用他人资源。

- 丰富的脚本库选择，快速满足需求。

  ![图片](./Python框架.assets/640-1715765261378-82.webp)

### **简单易用的Web界面**

Script-server提供了一个直观、简单易用的Web界面，使用户可以轻松地管理和运行脚本任务。通过这个界面，用户可以快速添加、编辑和删除脚本，设置脚本的定时执行时间，并监控脚本任务的执行状态。这个用户友好的界面使得脚本的管理和执行变得更加简单和高效。

![图片](./Python框架.assets/640-1715765261378-83.webp)

### **多种脚本语言支持**

Script-server支持多种流行的脚本语言，包括Python、Shell、JavaScript等。这意味着用户可以使用自己熟悉和喜欢的脚本语言来编写和执行脚本任务，无需学习新的语言。这种灵活性让开发人员和系统管理员可以根据自己的需要来选择合适的脚本语言，从而提高工作效率。

![图片](./Python框架.assets/640-1715765261378-84.webp)

### **强大的脚本调度和执行功能**

Script-server内置了强大的脚本调度和执行功能，可以根据设定的时间表来自动执行脚本任务。用户可以设置脚本的执行时间和频率，例如每天、每周或每月执行等。此外，用户还可以手动触发脚本的执行，以立即运行需要的脚本任务。这些功能确保了脚本任务的准时执行，提高了工作效率。

![图片](./Python框架.assets/640-1715765261378-85.webp)

### **多用户和权限管理**

Script-server支持多用户和权限管理，可以为不同的用户分配不同的访问权限。这样，用户可以根据自己的角色和职责来管理和执行脚本任务，保护脚本的安全性和可靠性。通过细粒度的权限控制，Script-server确保了脚本的合理使用和管理，最大程度地降低了潜在的风险。

![图片](./Python框架.assets/640-1715765261378-86.webp)

### **灵活的脚本共享和扩展**

Script-server支持脚本的共享和扩展，用户可以将自己编写的脚本分享给其他用户，也可以从其他用户那里获取脚本。这种灵活性使得用户可以充分利用其他人的经验和资源，快速实现自己的脚本任务。此外，Script-server还提供了丰富的脚本库，用户可以从中选择合适的脚本，以满足不同的需求。

![图片](./Python框架.assets/640-1715765261379-87.webp)

### 总结

在现代软件开发和系统管理中，脚本起着非常重要的作用。Script-server作为一个强大的Web UI工具，为用户提供了高效、简便的脚本管理和执行环境。通过简单易用的界面和丰富的功能，Script-server让脚本任务的管理和执行变得高效而简单。无论是开发人员还是系统管理员，都可以通过Script-server提升工作效率，实现更加轻松和高效的脚本管理体验。

## Python 高性能网络框架

**引言**

> 随着互联网和大数据时代的到来，高性能网络应用的需求日益增加。Python 作为一种流行的编程语言，在高性能网络编程领域也具有广泛的应用。本文将深入探讨基于 Python 的几种高性能网络框架，分析它们各自的优势和适用场景，帮助开发者选择最适合自己需求的网络框架

**为什么选择 Python 开发网络应用？**

Python 作为一种解释型语言，其性能相对于一些编译型语言（如 C++、Java 等）来说会有一定程度的劣势。但随着 Python 生态系统的不断发展和优化，以及一些高性能的 Python 网络框架的出现，Python 在处理高性能网络应用方面的性能已经有了明显的改进。

在实际应用中，Python 的网络框架通常使用**异步 IO、事件驱动**等技术来提高网络应用的性能。此外，Python 也有一些**编译为机器码的工具（如 Cython、Numba 等）**，可以在一定程度上提升 Python 的运行性能。

尽管 Python 可能在一些特定的网络应用场景下性能慢于其他编程语言，但在许多实际应用中**，开发效率、可维护性以及丰富的第三方库**支持也是选择 Python 网络框架的重要因素。

**1. FastAPI：现代高性能的 Web 框架**

FastAPI 是一个现代化、高性能的 Web 框架，基于异步编程的 Python 网络库 Starlette，并且具有出色的性能和自动生成 API 文档的特点。FastAPI 的优势在于其简洁、快速的开发模式和强大的性能，适用于构建高效的 API 服务和微服务架构。FastAPI 被广泛应用于构建 Restful API、微服务架构、数据驱动的 Web 应用等场景。

**2. Tornado：异步 IO 网络框架的典范**

Tornado 是一个轻量级的 Web 框架，它使用非阻塞的 IO 模型，支持高并发和高性能的网络应用。Tornado 的优势在于其快速、稳定并且可伸缩的特性，适用于构建处理大量并发连接和高负载的网络应用。Tornado 常被用于构建实时 web 应用、长连接服务、WebSockets 等场景，尤其适合需要处理大量实时数据推送或高并发请求的场景。

**3. Twisted：成熟稳定的异步网络框架**

Twisted 是一个事件驱动的网络框架，具有强大的异步编程能力，支持多种网络协议和异步通信。Twisted 的优势在于其成熟、稳定和丰富的功能库，适用于构建复杂的网络应用，如实时通信系统、分布式系统、游戏服务器等。同时，Twisted 还提供了丰富的 API 和工具，使得开发者能够灵活地构建各种类型的网络应用。

**4. Sanic：异步框架中的黑马**

Sanic 是一个异步的 Web 框架，以其性能为重点，采用类似 Flask 的 API 风格。Sanic 通过使用异步请求处理和响应机制，实现了出色的性能和低延迟的特点。Sanic 的优势在于其极速的响应能力和简单易用的开发模式，适用于构建需要高性能响应和低延迟的网络应用，例如实时监控系统、高并发 Web 服务等场景。

**5. Gevent：基于协程的高性能网络库**

Gevent 是一个基于协程的网络库，提供了事件驱动和非阻塞的异步网络编程能力，通过协程和事件循环实现了高效的并发处理。Gevent 的优势在于其强大的并发处理能力和零 IO 等待的特性，适用于构建高性能的网络应用和异步 IO 密集型的任务处理。Gevent 常被应用于高并发的网络服务器、数据抓取和处理等场景。

![image-20240427223839773](./Python框架.assets/image-20240427223839773.png)

## Python 开发 Web 应用程序必备库：打造动态且高效的后端

### 简介

Python 是开发 Web 应用程序的理想选择，因为它提供了一系列强大的库，可以简化开发过程并增强应用程序的功能。本指南将详细介绍 Python Web 开发中必备的十大库，帮助您构建动态、高效的后端。

### 框架

框架提供了构建 Web 应用程序的基础结构，处理诸如路由、模板和数据库连接之类的常见任务。Web 框架比较多，这推荐几款常用的 Web 框架，包括：

- **Django：**全栈框架，提供全面的功能，包括 ORM、模板系统和用户认证。

- **Flask：**轻量级微框架，非常适合小型和中型应用程序。

- **FastAPI：**高性能框架，专注于 RESTful API 开发。

- 一款 Python 开发的 GPT 软件如下：

  ![图片](./Python框架.assets/640-1714228576461-178.gif)

### 模板引擎

模板引擎允许您使用模板文件创建动态 Web 页面。推荐的模板引擎包括：

- **Jinja2：**功能强大的模板引擎，支持 Django 和 Flask。

- **Mako：**轻量级的模板引擎，具有强大的表达式语言。

- **Chameleon：**基于 XML 的模板引擎，提供出色的性能。

  ![图片](./Python框架.assets/640-1714228576461-179.webp)

### 数据库 ORM

ORM（对象关系映射）库将对象转换为数据库表中的行，简化了与数据库的交互。推荐的 ORM 库包括：

- **SQLAlchemy：**流行的 ORM 库，支持多种数据库。
- **Peewee：**轻量级的 ORM 库，非常适合小型和中型应用程序。
- **PonyORM：**无模式 ORM 库，提供简洁的 API。

### 数据验证

数据验证库确保用户输入数据的有效性。推荐的数据验证库包括：

- **WTForms：**全面的表单验证库，支持 Django 和 Flask。
- **Flask-WTF：**Flask 的表单验证扩展，基于 WTForms。
- **marshmallow：**数据序列化和反序列化的库，也用于数据验证。

### RESTful API

RESTful API 库简化了 RESTful API 的开发。推荐的 RESTful API 库包括：

- **Flask-RESTful：**Flask 的 RESTful API 扩展。

- **Django REST Framework：**Django 的 RESTful API 框架，提供广泛的功能。

- **RESTX：**基于 Flask 和 marshmallow 的 RESTful API 框架，具有强大的文档功能。

  ![图片](./Python框架.assets/640-1714228576461-180.webp)

### 异步 IO

异步 IO 库允许应用程序处理并发请求，提高性能。推荐的异步 IO 库包括：

- **asyncio：**Python 标准库中的异步 IO 框架。
- **aiohttp：**基于 asyncio 的 HTTP 服务器和客户端框架。
- **Starlette：**基于 asyncio 的 Web 框架，非常适合构建 RESTful API。

### 缓存

缓存库通过存储经常使用的结果来提高应用程序性能。推荐的缓存库包括：

- **Redis：**流行的键值存储，支持多种数据类型。

- **Memcached：**高性能的内存缓存，适用于高速缓存场景。

- **Celery：**任务队列系统，也提供缓存功能。

  ![图片](./Python框架.assets/640-1714228576461-181.webp)

### 其他有用的库

除了上述必备库之外，还有其他有用的库可以增强 Python Web 应用程序的功能：

- **Beautiful Soup：**HTML 和 XML 解析库。
- **Requests：**HTTP 库，用于发送和接收 HTTP 请求。
- **Pillow：**图像处理库。

### 结论

通过掌握这些 Python 库，您可以构建强大的、动态的和高效的 Web 应用程序。这些库提供了广泛的功能，从框架到数据库连接，再到数据验证和异步 IO。通过明智地选择和使用这些库，您可以创建满足您特定需求的定制化 Web 解决方案。

## Sanic：异步 Python Web 框架

GitHub：https://github.com/sanic-org/sanic

官网：https://sanic.dev/

详细介绍 Python 高性能 Web 异步框架 Sanic 的各功能，并通过实战将爬虫(Spiders)模块+视图(Views)模块+路由(Routers)模块+模型(Models)模块结合形成一个各模块独立、高性能、可读性高、可扩展性高、具有精美的接口文档、易于后期维护的爬虫 API 项目，并部署在 Ubuntu 服务器上供团队调用。

### 01 Sanic 简介及特性

说到 Python Web 框架， 你可能会想到 Flask、Django、Tornado、FastAPI 等；而本文将向大家介绍另一个 Python Web 框架 —— Sanic。

它是一个 Python 3.8+ Web 服务器和 Web 框架，旨在快速运行。它允许使用 Python 3.5 中添加的 async/await 语法，这使您的代码非阻塞且快速。

#### 应用场景

如果你希望快速搭建一个小型的 API 项目，又对速度有非常大的需求，那 Sanic 无疑是你的天选框架，很哇塞的哟！

#### Sanic 特性

- 直接支持生产环境部署
- 高度可扩展
- 内置快速网络服务器
- 具有异步支持
- 使用 Redoc、Swagger 的 OpenAPI 文档
- CORS 保护等

#### Sanic 安装

```bash
pip install sanic -i https://pypi.doubanio.com/simple
```

### 02 Sanic 各功能测试

#### 快速上手

先来快速构建一个简单的 Python Web 应用：

```python
from sanic import Sanic
from sanic.response import json
from datetime import datetime
import multiprocessing

app = Sanic("SanicAPP")
HOST = "localhost"
PORT = 7777

app.config.FALLBACK_ERROR_FORMAT = 'json'
app.config.ACCESS_LOG = True

async def get_datetime():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

@app.route('/getdatetime')
async def getdatetime(request):
    return json({"now": await get_datetime(), 'server_name': request.server_name, 'path': request.path})


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=False, auto_reload=True, workers=multiprocessing.cpu_count() // 5)
```

于生产环境启动运行：

![图片](./Python框架.assets/640-1714542878021-1.webp)

该程序创建了一个可以访问当前时间的接口，并且使用异步支持，程序处理速度会更快，还进行了一些全局配置：开启访问日志、开启自动重载、CPU 工作数量为当前系统的 1/5（CPU 数量设置越多，并发处理速度越快）、将 404 页面以 json 格式返回等
访问成功示例：

![图片](./Python框架.assets/640-1714542878021-2.webp)

访问失败示例：

![图片](./Python框架.assets/640-1714542878021-3.webp)

访问日志：

![图片](./Python框架.assets/640-1714542878021-4.webp)

FBV 模式

其意为“基于函数的视图”(Function-based View)，尽管从个人角度来说此模式可能不太利于后期开发，可读性也不太好，但还是需要学习一下的：

```python
from query_tag import Query

q = Query()

async def request_parse(request):
    platform, chain, address = 'platform', 'chain', 'address'
    if request.method == 'POST':
        parameters = request.json
        platform, chain, address = parameters['platform'], parameters['chain'], parameters['address']
    elif request.method == 'GET':
        parameters = request.args
        platform, chain, address = parameters['platform'][0], parameters['chain'][0], parameters['address'][0]
    print(f'请求参数为{platform}, {chain}, {address}')
    return platform, chain, address

@app.route('/tag', methods=['GET', 'POST'], version=1, version_prefix='/api/v')
async def main(request):
    platform, chain, address = await request_parse(request)
    if platform == 'labelcloud':
        if chain == 'eth':
            addr = q.query_etherscan(address=address)
            return json({'addr': addr})
        elif chain == 'bsc':
            addr = q.query_bscscan(address=address)
            return json({'addr': addr})
        elif chain == 'polygon':
            addr = q.query_polygonscan(address=address)
            return json({'addr': addr})
        else:
            json({'error': f'this chain no exists, available in [eth, bsc, polygon]'})
    elif platform == 'oklink':
        addr = q.query_oklink_com(chain=chain, address=address)
        return json({'addr': addr})
    else:
        return json({'error': f'this platform no exists, available in [labelcloud, oklink]'})
```

此处展示了一个简单的 FBV 例子，该接口允许 GET 及 POST 请求，并为其定义了接口版本，一个请求 url 如下：

```python
http://127.0.0.1:7777/api/v1/tag?platform=labelcloud&chain=eth&address=0x9B9DBA51F809dd0F9E2607C458f23C1BD35Ab01b
```

其实这些框架的语法都相差不大，而 Sanic 的一大优势就是支持异步，所以速度会快很多，并发请求量越大，其优势就越明显，掌握它，将成为你的进阶技能树！

#### CBV 模式

其意为“基于类的视图”(Class-based View)，此种模式使得代码的可读性大大增强，不仅可以提高开发效率，还利于后期维护，特别是一个项目由多个团队成员协同开发时往往选择该模式，我们将上面的 FBV 模式代码变为 CBV 模式的代码：

```python
from sanic.views import HTTPMethodView

# CBV 模式
class TagView(HTTPMethodView):
    async def get(self, request):
        parameters = request.args
        platform, chain, address = parameters.get('platform', [''])[0], parameters.get('chain', [''])[0], parameters.get('address', [''])[0]
        if platform == 'labelcloud':
            if chain == 'eth':
                addr = q.query_etherscan(address=address)
                return json({'addr': addr})
            elif chain == 'bsc':
                addr = q.query_bscscan(address=address)
                return json({'addr': addr})
            elif chain == 'polygon':
                addr = q.query_polygonscan(address=address)
                return json({'addr': addr})
            else:
                json({'error': f'this chain no exists, available in [eth, bsc, polygon]'})
        elif platform == 'oklink':
            addr = q.query_oklink_com(chain=chain, address=address)
            return json({'addr': addr})
        else:
            return json({'error': f'this platform is no exists, available in [labelcloud, oklink]'})

    async def post(self, request, name):
        pass

#把类视图添加进路由
app.add_route(TagView.as_view(), '/tag', version=1, version_prefix='/api/v')
```

类 TagView 继承了 sanic 中 views 模块的 HTTPMethodView 类，而类下面的方法即为对应请求类型的处理逻辑，最后用 app 的 add_route() 方法将该类作为视图添加进应用的路由中，代码已变得十分优雅！

#### OpenAPI 文档

你还可以将你的接口变成一份精美的文档，使得其他人更方便的阅读及理解你的接口，你只需安装其所属的扩展工具：

```python
pip install sanic-ext -i https://pypi.doubanio.com/simple
```

接下来布局 API 文档：

```python
from sanic import (
    exceptions,
    Sanic,
)
from sanic.views import HTTPMethodView
from sanic_ext import (
    openapi,
    Extend,
)
from spiders.query_tag import Query

app = Sanic('TagAPI')
Extend(app)

class TagView(HTTPMethodView):
    @openapi.definition(
        description='This API can get tag for labelcloud or oklink by asynchronous request.',
        parameter=[
                    {
                        "name": "platform",
                        "in": "query",
                        "type": "string",
                        "description": "Platform (labelcloud or oklink)",
                        "default": "labelcloud"
                    },
                    {
                        "name": "chain",
                        "in": "query",
                        "type": "string",
                        "description": "labelcloud including (eth, bsc, polygon), oklink including (eth, bsc, polygon, tron, btc, avalanche, arbitrum, optimism)",
                        'default': 'eth'
                    },
                    {
                        "name": "address",
                        "in": "query",
                        "type": "string",
                        "description": "Blockchain address",
                        'default': '0xB72eD8401892466Ea8aF528C1af1d0524bc5e105'
                    }
        ]
    )
    async def get(self, request):
        q = Query()
        parameters = request.args
        platform, chain, address = parameters['platform'][0], parameters['chain'][0], parameters['address'][0]
        if platform == 'labelcloud':
            if chain == 'eth':
                addr = q.query_etherscan(address=address)
                return json({'data': addr})
            elif chain == 'bsc':
                addr = q.query_bscscan(address=address)
                return json({'data': addr})
            elif chain == 'polygon':
                addr = q.query_polygonscan(address=address)
                return json({'data': addr})
            else:
                raise exceptions.SanicException(message=f'this chain no exists, available in [eth, bsc, polygon]')
        elif platform == 'oklink':
            addr = q.query_oklink_com(chain=chain, address=address)
            return json({'data': addr})
        else:
            return exceptions.SanicException(message=f'this platform is no exists, available in [labelcloud, oklink]')
```

从代码可看出，其 API 文档的设置是利用 sanic-ext 中的 openapi 和 Extend 模块，其中 openapi 采用装饰器的方式附加在请求类型方法上，我们定义了接口的描述和一些参数属性，包括网址参数名、参数类型、参数描述、参数默认值等

打开网址

```
http://127.0.0.0:7777/docs/redoc
```

你将看见默认的 Redoc 风格的 API 文档：

![图片](./Python框架.assets/640-1714542878021-5.webp)

打开网址

```python
http://127.0.0.0:7777/docs/swagger
```

你将看见 Swagger 风格的 API 文档：

![图片](./Python框架.assets/640-1714542878021-6.webp)

#### Tortoise ORM

ORM（Object Relational Mapping），中文为“对象关系映射”，目的是为了集中数据模型和数据规则，确保安全地管理数据（提供对 SQL 注入的免疫力），还可以提高开发效率。

而 Tortoise ORM 是一个使用 asyncio 语法的 ORM，其灵感来源于 Django 自带的 ORM，所以它的语法和 Django ORM 极其相似

那么 Sanic 为啥要选择 Tortoise ORM 作为最佳搭档呢？

首先 Tortoise 本身就是使用 asyncio 语法的，与 Sanic 一样，其次它的 API 设计既干净又实用，性能上也比其他 Python ORM 要好：

![图片](./Python框架.assets/640-1714542878021-7.webp)

从上图来看，Tortoise ORM 在各方面的功能支持确实比较良好，目前支持的数据库有 MySQL、SQLite、Oracle、PostgreSQL 等

安装 Tortoise ORM：

```python
pip install tortoise-orm
```

定义一个博客模型：

```python
from tortoise.models import Model
from tortoise import fields
from datetime import date

class Blog(Model):
    headline = fields.CharField(max_length=100)
    author = fields.CharField(max_length=20, default='makerchen66')
    pub_date = fields.DateField(default=date.today())
    content = fields.TextField()

    def __str__(self):
        return self.headline

    class Meta:
        db_table = 'blog'
```

然后需要初始化模型和数据库：

```python
from tortoise import Tortoise, run_async

async def init():
    await Tortoise.init(
        db_url='sqlite://db.sqlite3',
        modules={'models': ['app.models']}
    )
    # Generate the schema
    await Tortoise.generate_schemas()

run_async(init()
```

最后就可使用模型：

```python
# Create instance by save
blog = Blog(headline='震惊！某知名女明星竟然。。。', content='在一个风雨交加的夜晚，某国知名功夫宗师--马宝锅，正在练功室内锻炼绝技。。。', author='makerchen66', pub_date=date(2006, 3, 3))
await blog.save()

# Or by .create()
await Blog.create(headline='震惊！某知名女明星竟然。。。', content='在一个风雨交加的夜晚，某国知名功夫宗师--马宝锅，正在练功室内锻炼绝技。。。', author='makerchen66', pub_date=date(2006, 3, 3))

# Now search for a record
queryResult = await Blog.filter(headline__contains='女明星').first()
print(queryResult.author)
```

更多 Tortoise ORM 使用教程可参考官网：

```python
https://tortoise.github.io/#tutorial
```

Tortoise ORM Github 项目地址：

```python
https://github.com/tortoise/tortoise-orm
```

### 03 爬虫 API 实战项目

接下来创建一个爬虫 API 实战项目，并且使路由模块、爬虫模块、视图模块、项目启动文件、配置文件独立

![图片](./Python框架.assets/640-1714542878021-8.webp)

由于代码量较大，以下只展示部分核心文件和代码，视图模块中的 tag_views.py 文件：

![图片](./Python框架.assets/640-1714542878021-9.webp)

爬虫模块中的 query_tag.py 文件：

![图片](./Python框架.assets/640-1714542878022-10.webp)

路由模块中的 tag_routers.py 文件：

```python
from views.tag_view import TagView


class TagRouter:
    def load_router(self, app):
        app.add_route(TagView.as_view(), '/tag', version=1, version_prefix='/api/v')
```

server.py 文件：

![图片](./Python框架.assets/640-1714542878022-11.webp)

项目架构已搭建好，往后可以不断扩充新模块和功能

### 04 服务器部署及接口性能测试

使用 screen 工具挂载 Sanic 项目：

```bash
screen -S sanic_api
```

查看是否创建成功：

```bash
screen -ls
```

进入项目：

```bash
screen -d -r sanic_api
```

进入项目所在根目录，创建虚拟环境：

```bash
virtualenv venv --python=python3.9.17
```

进入虚拟环境：

```bash
source venv/bin/activate
```

安装项目所需的 Python 环境：

```bash
pip install -r requirements.txt -i https://pypi.doubanio.com/simple
```

最后启动项目：

```bash
python server.py
```

启动成功：

![图片](./Python框架.assets/640-1714542878022-12.webp)

对接口进行测试，由于使用 asyncio 且 CPU 工作数量较多，故并发处理量较大，速度很快：

```bash
http://服务器IP:7777/api/v1/tag?platform=labelcloud&chain=eth&address=0x9B9DBA51F809dd0F9E2607C458f23C1BD35Ab01b
```

若要退出该 screen 项目，使它挂载在后台，可以使用快捷键【Ctrl+a+d】

删除该 screen 项目：

```bash
screen -S -X sanic_screen_id quit
```

## Dash：web分析应用框架

大家好，在数据科学领域，数据可视化是将数据以图形化形式展示出来，帮助我们更直观地理解数据。

Python中有一个非常流行的数据可视化库叫做Dash，Dash以其简洁、高效和强大的功能而闻名，它允许开发者快速构建交互式Web应用程序。

### 什么是Dash？

Dash是一个Python框架，专为构建Web分析应用而设计。它背后的理念是将数据的展示和分析交互性结合起来，使得即使是非专业开发者也可以轻松创建美观的Web应用。Dash基于Flask、Plotly.js和React.js，这些都是Web开发中广泛使用的技术。

https://dash.plotly.com/

https://dash.gallery/Portal/

#### Dash的工作原理

Dash应用由两大部分组成：

1. **前端**：用户界面，由一系列可交互的组件构成，如输入框、按钮、图表等。
2. **后端**：应用的逻辑部分，用于处理用户的输入，执行数据处理，并返回更新的数据。

用户与前端组件交互时，Dash生成一个JSON格式的描述用户交互的消息，发送到后端。后端解析这些消息，执行相应的回调函数，然后将新的数据发送回前端进行显示。

### 安装Dash

首先，我们需要安装Dash。在你的Python环境中运行以下命令：

```
pip install dash
```

### 一个简单的Dash示例

让我们从一个简单的示例开始：创建一个Dash应用，显示一个按钮和一个文本框，用户点击按钮后，文本框显示当前的时间。

```python
# 导入Dash和其组件
import dash
from dash import html, dcc
from dash.dependencies import Input, Output
import datetime

# 创建一个Dash应用实例
app = dash.Dash(__name__)

# 定义应用的布局
app.layout = html.Div([
    html.Button("显示当前时间", id='btn'),
    html.Div(id='time-display')
])

# 定义回调函数
@app.callback(
    Output('time-display', 'children'),
    Input('btn', 'n_clicks')
)
def display_time(n):
    if n is None:
        return "点击按钮查看时间"
    else:
        return str(datetime.datetime.now())

# 运行应用
if __name__ == '__main__':
    app.run_server(debug=True)
```

### 创建一个交互式图表的Dash应用案例

这个案例会演示如何使用Dash创建一个交互式图表应用，其中用户可以选择数据类型，并通过下拉菜单影响图表的显示。假设我们有一组关于不同城市的天气数据（温度和降雨量），用户可以选择查看哪种数据在图表上。

#### 1. 准备环境

首先，确保安装了Dash和Plotly库。如果未安装，可以通过以下命令安装：

```bash
pip install dash plotly
```

#### 2. 创建应用代码

下面是完整的Dash应用代码：

```python
import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd

# 示例数据
data = {
    "City": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    "Temperature": [16, 20, 14, 25, 23],
    "Rainfall": [120, 50, 175, 200, 20]
}

# 创建一个DataFrame
df = pd.DataFrame(data)

# 创建Dash应用
app = dash.Dash(__name__)

# 设置应用的布局
app.layout = html.Div([
    html.H1("Weather Data Visualization"),
    dcc.Dropdown(
        id='data-type-dropdown',
        options=[
            {'label': 'Temperature', 'value': 'Temperature'},
            {'label': 'Rainfall', 'value': 'Rainfall'}
        ],
        value='Temperature',
        style={'width': '50%'}
    ),
    dcc.Graph(id='weather-graph')
])

# 定义回调函数以更新图表
@app.callback(
    Output('weather-graph', 'figure'),
    [Input('data-type-dropdown', 'value')]
)
def update_graph(selected_data_type):
    fig = px.bar(df, x='City', y=selected_data_type, title=f"{selected_data_type} in Various Cities")
    return fig

# 运行服务器
if __name__ == '__main__':
    app.run_server(debug=True)
```

#### 3. 应用说明

这个应用有一个下拉菜单和一个图表。下拉菜单允许用户选择“温度”或“降雨量”数据，图表则会根据选择显示相应的数据。我们使用了Plotly Express来生成柱状图，它会显示选定数据类型在不同城市的值。

- **下拉菜单**：由`dcc.Dropdown`创建，用户可以从中选择要查看的数据类型。
- **图表**：使用`dcc.Graph`显示，并通过回调动态更新图表内容，以反映下拉菜单的选择。

使用Dash可以非常快速地搭建出具有丰富交互功能的Web应用。对于数据科学家和分析师来说，Dash不仅可以提升数据分析的效率，也可以让非技术用户友好地接触和理解复杂的数据集。

Dash将复杂的Web应用开发简化，使得即使没有前端开发经验的人也能构建强大的数据可视化工具，这正是Dash作为数据可视化工具的巨大优势。

# GUI 框架

[好学编程：2024 年 10 个最佳 Python GUI 框架 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/675590919)

## Python 打造桌面应用程序的终极指南：必备库大盘点

### 引言

随着 Python 的普及，使用 Python 开发桌面应用程序已成为一种越来越普遍的做法。Python 凭借其强大的功能、易于使用的语法和丰富的库生态系统，使开发人员能够创建各种各样的桌面应用程序。

python开发的浏览器：

![image-20240526153559594](./Python框架.assets/image-20240526153559594.png)

本文将深入介绍用于打造 Python 桌面应用程序的必备库，帮助您选择最适合您项目需求的库。

### 1. GUI 框架

GUI 框架为创建应用程序的图形用户界面（GUI）提供了基础架构。Python 中有许多 GUI 框架可供选择，最流行的包括：

- **Tkinter：**标准 Python 库所提供的原生 GUI 框架，简单易用，但功能有限。
- **wxPython：**跨平台 GUI 框架，功能强大、灵活，但学习曲线相对较陡峭。
- **PyQt：**基于 Qt 框架的跨平台 GUI 框架，功能丰富、性能优异，但需要商业许可。
- **PyGTK：**基于 GTK+ 框架的跨平台 GUI 框架，功能强大、可扩展性高，但需要熟悉 GTK+。
- pyqt开发的流程图GUI：

- ![图片](./Python框架.assets/640-88445555.gif)

### 2. 数据库访问

桌面应用程序通常需要访问数据库。Python 提供了多种数据库访问库，包括：

- **sqlite3：**标准 Python 库所提供的轻量级嵌入式数据库引擎，适合小型数据库。
- **psycopg2：**连接 PostgreSQL 数据库的库。
- **MySQL Connector：**连接 MySQL 数据库的库。
- **pymongo：**连接 MongoDB 数据库的库。

### 3. 网络通信

对于需要与远程服务器通信的应用程序，Python 提供了多种网络通信库，包括：

- **requests：**用于发送 HTTP 请求的库，简单易用。
- **aiohttp：**用于构建异步 HTTP 客户端和服务器的库，高性能、高并发。
- **sockets：**用于建立低级网络套接字连接的库。

### 4. 图形处理

对于需要处理图形的应用程序，Python 提供了多种图形处理库，包括：

- **Pillow：**用于处理图像的库，支持多种文件格式。
- **PyQtGraph：**用于创建交互式科学图表的库。
- **matplotlib：**用于创建出版质量图表的库。

### 5. 文档生成

桌面应用程序有时需要生成文档。Python 提供了多种文档生成库，包括：

- **python-docx：**用于创建和编辑 Microsoft Word 文档的库。
- **pdfrw：**用于创建和编辑 PDF 文档的库。
- **reportlab：**用于创建 PDF 和其他格式报告的库。

### 选择合适的库

选择合适的库取决于您的特定项目需求。考虑以下因素：

- **功能：**库是否提供了您需要的功能？
- **性能：**库的性能是否满足您的要求？
- **跨平台：**库是否可以在您目标的平台上运行？
- **文档：**库是否具有良好的文档？
- **社区支持：**库是否有一个活跃的社区提供支持？

### 建议的工具集

对于大多数桌面应用程序，以下工具集提供了全面的功能：

- GUI 框架：wxPython 或 PyQt
- 数据库访问：psycopg2 或 MySQL Connector
- 网络通信：requests
- 图形处理：Pillow 或 matplotlib
- 文档生成：python-docx 或 pdfrw

## 使用 Python 快速制作 UI 界面

当谈到使用 Python 迅速搭建用户界面时，我们不得不提 Tkinter。借助这个 Python 的标准 GUI 工具包，

你可以在短短几分钟内创建出基本的用户界面，下面我们简单了解下这个工具的特性。

Tkinter 是 Python 的一个标准 GUI（图形用户界面）工具包，用于创建窗口、按钮、文本框等用户界面元素，使得 Python 开发者能够轻松地构建交互式应用程序。

Tkinter 是 Python 的标准库之一，因此不需要额外安装就可以使用。

Tkinter 提供了一组丰富的组件，包括但不限于：

- 窗口（Window）：Tkinter 允许你创建应用程序的主窗口。
- 标签（Label）：用于显示文本或图像。
- 按钮（Button）：用于触发特定操作或函数。
- 文本框（Entry）：用于用户输入文本。
- 列表框（Listbox）：用于显示列表，用户可以选择其中的项。
- 滚动条（Scrollbar）：用于滚动大量内容的组件，如文本框和列表框。

Tkinter 的工作方式是通过创建 GUI 组件的实例，并使用几何布局管理器（如 pack、grid、place）来安排它们在窗口中的位置。

下面是一个简单的 Tkinter 示例：

```python
import tkinter as tk

def test_label():
    root = tk.Tk()
    label = tk.Label(root, text="This is a Label")
    label.pack()
    root.mainloop()

def test_button():
    root = tk.Tk()
    def button_click():
        print("Button clicked!")
    button = tk.Button(root, text="Click Me", command=button_click)
    button.pack()
    root.mainloop()

def test_entry():
    root = tk.Tk()
    entry = tk.Entry(root)
    entry.pack()
    root.mainloop()

def test_listbox():
    root = tk.Tk()
    listbox = tk.Listbox(root)
    for i in range(10):
        listbox.insert(tk.END, f"Item {i+1}")
    listbox.pack()
    root.mainloop()

def test_scrollbar():
    root = tk.Tk()
    scrollbar = tk.Scrollbar(root)
    scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
    text = tk.Text(root, yscrollcommand=scrollbar.set)
    for i in range(100):
        text.insert(tk.END, f"Line {i+1}\n")
    text.pack(side=tk.LEFT, fill=tk.BOTH)
    scrollbar.config(command=text.yview)
    root.mainloop()

if __name__ == "__main__":
    test_label()
    test_button()
    test_entry()
    test_listbox()
    test_scrollbar()
```

这段代码创建了一个简单的窗口，包含一个按钮。当用户点击按钮时，"Button, Click!" 将打印到控制台上。

![图片](./Python框架.assets/640-1713981280469-149.webp)

下面对一些需要注意的函数进行说明。

**pack**

pack() 是 Tkinter 中用于布局管理的方法之一，它用于将组件添加到父容器中，并根据一定的规则来安排它们的位置。

pack() 方法通常用于简单的布局需求，它会根据添加组件的顺序自动放置组件，如果没有指定具体位置，则默认按照垂直方向或水平方向排列。

可以通过 side 参数指定组件的放置方向（tk.TOP、tk.BOTTOM、tk.LEFT、tk.RIGHT），以及通过其他参数进行边距和填充的设置。

示例：label.pack()、button.pack(side=tk.LEFT)。

**root.mainloop**

root.mainloop() 是 Tkinter 中的一个方法，它表示进入 Tkinter 的主事件循环（main event loop）。这个方法告诉 Tkinter 开始监听用户输入、处理事件和更新界面的状态。一旦调用了 mainloop() 方法，程序就会进入一个循环，持续监听用户的操作，直到用户关闭了应用程序的主窗口，或者通过代码显式地中止这个循环。

在 Tkinter 中，用户的交互操作（比如点击按钮、输入文本等）会触发事件，而这些事件需要被 Tkinter 的事件循环处理。mainloop() 方法负责启动这个事件循环，使得程序能够响应用户的输入，并实时更新界面的状态。

一旦调用了 mainloop() 方法，程序就会进入等待用户操作的状态，直到用户关闭了窗口或者其他结束条件被触发。因此，通常在创建了所有的 GUI 组件后，会调用 mainloop() 方法来启动程序的主事件循环，使得用户能够与界面进行交互。

如果你觉得 Tkinter 不够好看，当然也有一些美化方案我们放到下期讲。

这是一个名为 modern gui 的美化方案，感兴趣可以提前预习下。

https://medium.com/@fareedkhandev/modern-gui-using-tkinter-12da0b983e22

## PyQt

PyQt 是 Python 中最流行的 GUI 库之一，它是 Qt 库的 Python 绑定，提供了丰富的功能和灵活的 API。

PyQt 具有跨平台能力，支持在 Windows、Mac 和 Linux 等不同操作系统上运行。它还有一个强大的图形设计器，可以帮助开发人员快速构建界面。

PyQT 是一个用于构建桌面和移动应用程序的 Python 库，它支持 iOS 和 Android 平台，并提供丰富的控件和功能，能够帮助开发人员实现复杂的移动应用程序。

但需要注意的是，PyQt 商业许可证价格昂贵，对于一些商业项目可能会成为一定的负担。

### PyQt5

[Python Qt GUI 构建指南：一步步打造响应迅速、美观的应用程序 (qq.com)](https://mp.weixin.qq.com/s/W79RTT6LjxMZSEpvlgYEYQ)

- **介绍**：PyQt5 是一个备受青睐的 Python GUI 框架，基于 Qt 框架。它允许开发人员在 Mac、Windows、Linux、iOS 和 Android 上构建应用程序。
- **官网**：[PyQt5 · PyPI](https://pypi.org/project/PyQt5/)
- 收费，不开源
- **教程**：[Riverbank Computing | Introduction](https://riverbankcomputing.com/software/pyqt/)
- **例子**：[PyQt5/PyQt: PyQt Examples（PyQt 各种测试和例子） PyQt4 PyQt5 (github.com)](https://github.com/PyQt5/PyQt)
- **优点**：基于 Qt，跨平台兼容性好，可构建各种规模的应用程序，易于使用，支持可视化元素拖放。
- **缺点**：学习曲线较陡峭。
- **使用示例**：用于构建大型应用程序。

### PyQt6

## PySide

PySide 是 Qt 官方推出的 Python 绑定库，提供了与 PyQt 类似的功能和 API。与 PyQt 不同的是，PySide 采用了 LGPL 许可证，允许其在商业项目中免费使用。PySide 的文档和社区支持相对较好，适合那些需要免费且功能强大的 GUI 库的开发人员选择。

[spyder-ide/qtpy：提供统一层，支持单个代码库的 PyQt5、PySide2、PyQt6、PySide6 (github.com)](https://github.com/spyder-ide/qtpy)

### PySide2

文章：[python Pyside2 模块详细介绍-CSDN 博客](https://blog.csdn.net/bishopmarcel/article/details/111448242)

- **官网**：
- **优点**：官方 Qt 绑定，功能强大。
- **缺点**：需要注意商业软件的使用限制。
- **使用示例**：用于创建功能丰富的应用程序。

### PySide6



## QtPy：高效构建GUI利器，帮你无缝切换PyQt和PySide

**项目地址**：https://github.com/spyder-ide/qtpy

“QtPy – 为各种版本的PyQt和PySide提供单一API调用方法”

### 引言

随着Python在开发界的流行，越来越多的人开始使用它来构建可视化界面和图形应用程序。在Python中，Qt是一种常用的GUI（图形用户界面）框架，被广泛用于开发跨平台的应用程序。然而，Python中存在两个主要的Qt绑定库——PyQt和PySide，这给开发者带来了一些困扰。为了解决这个问题，QtPy诞生了。本文将详细介绍QtPy，展示它是如何为开发者提供方便快捷的开发体验的。

### 什么是QtPy

QtPy是一个小型的抽象层，它允许开发者使用一个API调用来使用PyQt或PySide来编写应用程序。通过使用QtPy，开发者可以避免在代码中直接引用特定的Qt绑定库，从而减少了代码的依赖性，并提高了应用程序的可移植性。QtPy还提供了一些额外的功能和工具，方便开发者在PyQt和PySide之间切换。

### 为什么选择QtPy

QtPy支持PyQt5、PySide2、PyQt6和PySide6，使用Qt5布局（QtGui模块已经拆分为QtGui和QtWidgets）。

基本上，您可以将代码编写得就像使用PyQt或PySide一样，但是从qtpy而不是PyQt5、PySide2、PyQt6或PySide6导入Qt模块。

因此，在不同的Qt绑定（PyQt vs PySide）或Qt版本（Qt5 vs Qt6）之间移植代码时，QtPy使这个过程更加轻松，并允许您轻松地、逐步地在它们之间过渡。

在选择使用QtPy来开发应用程序时，有以下几个主要优点：

1. **统一的API调用**：使用QtPy，开发者可以通过一次API调用来使用PyQt或PySide，而不需要在应用程序中分别处理它们之间的差异。这可以大大简化开发过程，并使得代码更加易于维护和理解。
2. **更低的依赖性**：由于QtPy可以兼容PyQt和PySide，开发者可以根据自己的需求选择一个合适的Qt绑定库来构建应用程序，并避免在代码中直接引用特定的Qt库。这使得应用程序的依赖性更低，并且更容易在不同的平台上移植和部署。
3. **额外的功能和工具**：QtPy提供了一些额外的功能和工具，以增强开发者在PyQt和PySide之间切换的体验。例如，QtPy提供了一个简单的函数来检测当前使用的Qt绑定库，以及一个设置环境变量来切换绑定库的方便方法。

### 如何使用QtPy

安装QtPy非常简单，直接pip命令即可安装：

```bash
pip install qtpy
```

使用QtPy非常简单和直观。以下是使用QtPy编写一个简单的基于Qt的窗口应用程序的示例代码：

```python
from qtpy.QtWidgets import QApplication, QMainWindow, QLabel

app = QApplication([])
window = QMainWindow()
label = QLabel('Hello, QtPy!')
window.setCentralWidget(label)
window.show()
app.exec_()
```

在上述代码中，我们首先导入了qtpy.QtWidgets模块，它允许我们使用Qt的窗口小部件。然后，我们创建了一个QApplication对象和一个QMainWindow对象，并将一个QLabel小部件作为主窗口的中心部件。最后，我们显示了主窗口并开始应用程序的事件循环。需要注意的是，使用QtPy时，我们只需要导入qtpy.QtWidgets模块，而不需要直接导入PyQt或PySide的模块。

### 在PyQt和PySide之间切换

如果你已经在使用PyQt或PySide，并且想要尝试使用QtPy，切换代码非常简单。只需将PyQt或PySide的导入语句替换成QtPy的导入语句即可。例如，下面是一个使用PyQt编写的代码的示例：

```python
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel

app = QApplication([])
window = QMainWindow()
label = QLabel('Hello, QtPy!')
window.setCentralWidget(label)
window.show()
app.exec_()
```

可以将其替换为：

```python
from qtpy.QtWidgets import QApplication, QMainWindow, QLabel

app = QApplication([])
window = QMainWindow()
label = QLabel('Hello, QtPy!')
window.setCentralWidget(label)
window.show()
app.exec_()
```

通过这种方式，我们可以轻松地在使用PyQt和PySide之间切换而无需改动太多的代码。

### 在不同平台上使用QtPy

QtPy是跨平台的，可以在不同的操作系统上运行。使用QtPy开发的应用程序可以在Windows、Mac和Linux等平台上无需任何修改地运行。这使得开发者能够快速开发面向多个平台的应用程序，并为不同的操作系统提供统一的用户体验。

### 结论

QtPy是一个非常实用的工具，它为开发者提供了方便快捷的开发体验。通过使用QtPy，开发者可以使用统一的API调用来编写应用程序，而不需要关心底层Qt绑定库的差异。QtPy提供了额外的功能和工具，使得在PyQt和PySide之间切换变得更加容易。无论你是一个经验丰富的开发者还是一个初学者，QtPy都是一个值得尝试的工具，它将帮助你节省时间和精力，并提高你的应用程序开发效率。

## Modern_GUI_PyDracula_PySide6_or_PyQt6：打造出色用户界面的秘密武器

**项目地址**：https://github.com/Wanderson-Magalhaes/Modern_GUI_PyDracula_PySide6_or_PyQt6

### 引言

> 在当今快速发展的技术世界中，用户界面（GUI）在软件开发中占据着举足轻重的地位。一个出色的 GUI 可以大幅提升用户体验，让软件更加友好和易用。如果您正在寻找一款功能强大、美观时尚的 GUI 框架，那么 Modern_GUI_PyDracula_PySide6_or_PyQt6 绝对值得您关注。本文将详细介绍 Modern_GUI_PyDracula_PySide6_or_PyQt6 的强大功能，帮助您打造出色的用户界面。
>
> ![图片](./Python框架.assets/640-1714235259012-428.webp)

### 1. 概述

Modern_GUI_PyDracula_PySide6_or_PyQt6 是一款基于 Python 的 GUI 框架，它基于 PySide6 和 PyQt6 构建，提供了丰富的组件和功能，可以帮助开发者快速创建出色的用户界面。Modern_GUI_PyDracula_PySide6_or_PyQt6 具有以下特点：

- **跨平台支持**：支持 Windows、macOS 和 Linux 等多个平台，可以轻松移植到不同系统。

- **丰富的组件库**：包含数百个常用的 GUI 组件，如按钮、文本框、下拉列表、表格等，满足各种开发需求。

- **现代化设计**：采用现代化的设计风格，界面美观时尚，符合当今用户的审美需求。

- **易于使用**：使用简单易学，不需要掌握复杂的编程知识，即使是初学者也可以快速上手。

  ![图片](./Python框架.assets/640-1714235259012-429.webp)

### 2. Modern_GUI_PyDracula_PySide6_or_PyQt6 主要特性

- **主题支持：**Modern_GUI_PyDracula_PySide6_or_PyQt6 提供了多种内置主题，如暗黑主题、浅色主题等，可以根据用户的喜好或软件风格进行切换。
- **组件定制：**Modern_GUI_PyDracula_PySide6_or_PyQt6 允许开发者对组件进行高度定制，包括颜色、字体、大小等，可以满足不同项目的个性化需求。
- **布局管理：**Modern_GUI_PyDracula_PySide6_or_PyQt6 提供了多种布局管理方式，如水平布局、垂直布局、网格布局等，帮助开发者轻松管理界面元素。
- **事件处理：**Modern_GUI_PyDracula_PySide6_or_PyQt6 支持事件处理，开发者可以为组件添加事件监听器，并在事件发生时做出相应的响应。
- **动画支持：**Modern_GUI_PyDracula_PySide6_or_PyQt6 支持动画效果，可以为界面元素添加动画，让界面更加生动和有趣。
- **国际化支持：**Modern_GUI_PyDracula_PySide6_or_PyQt6 支持国际化，可以轻松将界面翻译成多种语言，满足全球用户的需求。

### 3. Modern_GUI_PyDracula_PySide6_or_PyQt6 应用场景

Modern_GUI_PyDracula_PySide6_or_PyQt6 可以应用于多种场景，包括：

- 桌面应用程序：Modern_GUI_PyDracula_PySide6_or_PyQt6 可以用于创建各种桌面应用程序，如文本编辑器、图片编辑器、音乐播放器等。
- Web 应用程序：Modern_GUI_PyDracula_PySide6_or_PyQt6 可以与 Web 框架结合使用，创建具有丰富交互功能的 Web 应用程序。
- 移动应用程序：Modern_GUI_PyDracula_PySide6_or_PyQt6 还可以用于创建移动应用程序，但需要使用相应的工具和库。

### 总结

Modern_GUI_PyDracula_PySide6_or_PyQt6 是一款功能强大、美观时尚的 GUI 框架，它基于 PySide6 和 PyQt6 构建，提供了丰富的组件和功能，可以帮助开发者快速创建出色的用户界面。Modern_GUI_PyDracula_PySide6_or_PyQt6 跨平台支持、组件丰富、现代化设计、易于使用等特点，使其成为当今开发人员打造出色用户界面的理想选择。

## Qt Designer：开启高效图形用户界面 (GUI) 开发之旅

**项目地址**：https://pypi.org/project/PyQt5Designer

### 引言

进一步介绍一下在 Python 开发环境下安装和使用 Qt Designer。

Qt Designer 是 Qt 框架中功能强大的**图形界面设计工具**，它使开发人员能够轻松、快速地构建用户友好的界面。

### 简介

Python 是一个功能强大的编程语言，但直接使用 pyqt 代码打造大型复杂 GUI 难度较大，而 Qt Designer 是一个直观的图形用户界面 (GUI) 设计工具，结合这两者，您可以轻松创建美观且用户友好的大型应用程序。本文将指导您使用 Python 和 Qt Designer 设计 GUI 的各个方面，让您打造出色的用户体验。

### 安装和设置

- 安装 Python 和 Qt Designer。

- 创建一个新的 Python 项目。

- 在项目中添加一个新的 Qt Designer UI 文件。

  ![图片](./Python框架.assets/640-1714230879450-273.webp)

### 设计您的 GUI

- 使用 Qt Designer 的直观界面设计您的 GUI。

- 探索各种小组件、布局和样式选项。

- 使用信号和槽连接小组件以实现交互性。

  ![图片](./Python框架.assets/640-1714230879450-274.gif)

### 从 Qt Designer 转换为 Python 代码

- 将您的 Qt Designer UI 文件转换为 Python 代码。
- 使用 `uic` 模块将 UI 文件编译为 Python 代码。
- 在您的 Python 脚本中加载和显示生成的代码。

### 小组件和布局

- 了解 Qt Designer 中各种小组件的用途和功能。
- 使用布局管理对象组织和排列小组件。
- 创建自定义布局以满足您的特定需求。

### 事件处理

- 使用信号和槽机制响应用户交互。
- 了解事件过滤器和信号路由。
- 处理来自小组件的事件以实现动态和交互式 GUI。

### 样式和主题

- 使用 Qt Designer 的样式表编辑器自定义您的 GUI 外观。

- 创建自定义调色板、字体和样式。

- 使用主题在整个应用程序中保持一致的外观。

- 如使用 Qt 开发的 qBittorrent，默认主题：

  ![图片](./Python框架.assets/640-1714230879450-275.webp)

黑色主题：

![图片](./Python框架.assets/640-1714230879451-276.webp)

### 国际化和本地化

- 使您的 GUI 适应不同的语言和地区。
- 使用 Qt 的内置国际化功能翻译文本和消息。
- 创建本地化文件以支持多种语言。

### 部署您的 GUI

- 将您的 Python 脚本作为可执行文件部署。
- 使用 `cxfreeze` 或 `PyInstaller` 等工具将脚本冻结为独立的可执行文件。
- 在目标平台上分发和安装您的应用程序。

### Qt Designer 解决的问题

Qt Designer 解决了复杂界面的设计问题。虽然理论上可以用纯代码构建复杂界面，但随着界面复杂度增加而难度过大。

Qt Desinger 提供了用鼠标拖拽设计界面的功能，然后**可以将设计好的界面转换为代码**，在开发时可以直接引用这部分界面的代码到程序当中。命令行中如何转换代码已经在上一篇文章中介绍过，这里不再重复。本文将介绍更简单的代码转换方法。

### 在 Python 开发环境下安装和使用 Qt Designer

要使用 Qt Designer，可以参考下步骤：

#### 1.pip 安装 Qt Designer

你没看错 pip 即可安装：

```
pip install PyQt5Designer
```

注意这里安装的就是 Qt Designer，和普通的 Qt Designer 没有本质区别，同样支持 C++。

#### 2.运行 Qt Designer

命令行下输入 designer 即可.

```
designer
```

![图片](./Python框架.assets/640-1714230658590-255.webp)

### 3.在 Qt Designer 中，通过从“基础小部件”面板拖放小部件来创建用户界面。

![图片](./Python框架.assets/640-1714230658590-256.webp)

#### 4.使用“属性编辑器”面板来配置小部件的属性。

#### 5.使用“布局”面板来管理小部件的布局。

![图片](./Python框架.assets/640-1714230658590-257.webp)

#### 6.一旦用户界面完成，单击“文件”菜单并选择“保存”。

### 高效使用 Qt Designer

以下是一些提高使用 Qt Designer 效率的提示：

- **使用快捷键：**Qt Designer 提供了大量的快捷键，可以加快界面设计过程。

- **使用布局：**布局可以帮助您轻松地组织和调整小部件，从而创建更直观的用户界面。

- **使用信号和槽：**信号和槽是 Qt 框架中用于通信和事件处理的机制。通过使用信号和槽，您可以轻松地连接小部件并创建交互式用户界面。

- **创建自定义小部件：**通过创建自己的自定义小部件，您可以扩展 Qt Designer 的功能并创建高度可定制的用户界面。

- **使用模板：**使用模板可以节省时间并确保用户界面的一致性，并且可以自定义模板。

- ![图片](./Python框架.assets/640-1714230658590-258.webp)

### Qt Designer 的高级特性

Qt Designer 还提供了以下高级特性：

- **资源编辑器：**资源编辑器允许开发人员管理和编辑用户界面中的图像、图标和其他资源。

- **翻译工具：**翻译工具使开发人员能够轻松地将其用户界面翻译成多种语言。

- **代码生成器：**代码生成器可以将用户界面设计转换为 C++ 和 Python 代码，以便轻松地将其集成到应用程序中。可以在设计过程中随时查看代码，方便学习 Qt 的使用方法。

  ![图片](./Python框架.assets/640-1714230658591-259.webp)

### 最佳实践

使用 Qt Designer 时，遵循以下最佳实践可以创建高效且用户友好的用户界面：

- **计划用户界面：**在开始使用 Qt Designer 之前，请计划您的用户界面的布局和功能。

- **使用正确的布局：**选择合适的布局可以帮助您创建直观且易于使用的用户界面。

- **保持简单：**用户界面应简洁易用。避免使用过多的元素或复杂的设计。

- **进行用户测试：**在发布用户界面之前，请进行用户测试以收集反馈并识别任何潜在问题。

  ![图片](./Python框架.assets/640-1714230658591-260.webp)

### 结论

Qt Designer 是一个功能强大且高效的图形用户界面设计工具，可帮助开发人员创建直观且易于使用的用户界面。在 Python 开发环境下可以 pip 安装，通过遵循上文讲到的高效使用方法、最佳实践和利用 Qt Designer 的高级特性，开发人员可以创建出色的用户界面，从而增强应用程序的整体用户体验。

## 如何在 Python 中调用 Qt Designer 设计好的界面文件

### 引言

Qt Designer 是一个用于创建 Qt 界面的图形用户界面设计工具。它允许用户通过拖放方式轻松地创建界面并生成相应的界面文件。然后，可以将这些界面文件加载到 Python 中，并与代码进行交互。在本文中，我们将介绍如何使用 Qt Designer 设计好的界面文件在 Python 中的常用方法。

### 方法一：直接加载 UI 文件

首先，我们需要安装 PyQt5 库来与 Qt Designer 生成的 UI 文件进行交互。运行以下命令来安装 PyQt5：

```bash
pip install pyqt5
```

然后，我们可以使用以下代码来加载 UI 文件并显示它：

```python
from PyQt5 import uic
from PyQt5.QtWidgets import QApplication

# 加载UI文件
form_class = uic.loadUiType("ui_file.ui")[0]

# 创建应用程序
app = QApplication([])

# 创建窗口并显示
window = form_class()
window.show()

# 运行应用程序
app.exec_()
```

在这个例子中，我们首先使用 uic.loadUiType()函数加载 UI 文件，并获取 UI 类。然后，我们创建一个应用程序并用 UI 类创建一个窗口来显示 UI 界面。最后，我们运行应用程序。

### 方法二：使用 Qt Designer 文件转换为 Python 文件

除了直接加载 UI 文件以外，我们还可以使用 PyQt5 提供的工具将 UI 文件转换为 Python 文件。这样可以使 UI 文件与 Python 代码进行整合，更加方便地进行修改和使用。

首先，我们需要使用 pyuic5 工具将 UI 文件转换为 Python 文件。运行以下命令：

```bash
pyuic5 -x ui_file.ui -o ui_file.py
```

这将生成一个名为 ui_file.py 的 Python 文件，其中包含 UI 文件的 Python 代码。

然后，我们可以使用以下代码来加载转换后的 Python 文件并显示它：

```python
from PyQt5.QtWidgets import QApplication
from ui_file import Ui_MainWindow

# 创建应用程序
app = QApplication([])

# 创建窗口并显示
window = Ui_MainWindow()
window.show()

# 运行应用程序
app.exec_()
```

在这个例子中，我们直接从转换后的 Python 文件中导入 UI 类，然后创建一个应用程序并用 UI 类创建一个窗口来显示 UI 界面。

### 方法三：在现有的窗口中加载 UI 文件

有时候，我们希望在现有的窗口中加载 UI 文件，而不是创建一个新的窗口。这时，我们可以使用 QMainWindow 或者 QWidget 来扩展现有的窗口，并在其中加载 UI 文件。

以下是一个示例代码，演示如何在现有的窗口中加载 UI 文件：

```python
from PyQt5 import uic
from PyQt5.QtWidgets import QApplication, QMainWindow
from ui_file import Ui_MainWindow

class MyMainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        # 加载UI文件
        uic.loadUi("ui_file.ui", self)

        # 显示窗口
        self.show()

if __name__ == "__main__":
    app = QApplication([])
    window = MyMainWindow()
    app.exec_()
```

在这个例子中，我们创建了一个名为 MyMainWindow 的子类，并使用 uic.loadUi()方法在其中加载 UI 文件。然后，我们创建一个应用程序并用 MyMainWindow 类创建一个窗口来显示 UI 界面。

### 总结

在本文中，我们介绍了使用 Qt Designer 设计好的界面文件在 Python 中的三种常用方法。首先，我们可以直接加载 UI 文件并显示它；其次，我们可以将 UI 文件转换为 Python 文件并与代码整合；最后，我们还可以在现有的窗口中加载 UI 文件。这些方法提供了灵活的方式来使用 Qt Designer 设计的界面，并与 Python 代码进行交互。希望本文可以帮助读者更好地使用 Qt Designer 设计的界面文件。

待定：[Python + Qt Designer 构建多界面 GUI 应用程序：Python 如何调用多个界面文件 (qq.com)](https://mp.weixin.qq.com/s/GDXAlgV_fliJvvhyPAoZAg)

## Qt Material：打造美观、跨平台一致的 Qt 应用程序

**项目地址**：https://github.com/UN-GCPDS/qt-material

### 什么是 qt-material？

qt-material 是一个适用于 PySide6、PySide2、PyQt5 和 PyQt6 的样式表，它的外观与 Material Design 非常相似。

Material Design 是一种由谷歌推出的设计语言，旨在为用户提供一致、符合直觉的用户界面体验。

qt-material 就是为了让开发者能够更方便地在他们的 Python 应用程序中实现 Material Design 的外观而诞生的。

![图片](./Python框架.assets/640-1714232556062-327.gif)

### qt-material 的特点

#### 符合 Material Design 标准

qt-material 的主要特点之一就是它的外观与 Material Design 标准非常相似。它包括了 Material Design 中常见的按钮、文本框、下拉框等控件的外观和交互细节。开发者可以通过简单地引入 qt-material，就能够使他们的应用程序外观更符合现代的设计标准。

#### 跨平台一致性

qt-material 支持多个流行的 Python GUI 框架，包括 PySide6、PySide2、PyQt5 和 PyQt6，这意味着无论开发者使用哪种框架进行开发，他们都能够轻松地将 qt-material 集成到他们的应用程序中。确保应用程序在所有平台和设备上保持一致的外观和感觉。

![图片](./Python框架.assets/640-1714232556062-328.gif)

#### 易于定制

qt-material 还提供了丰富的定制选项，开发者可以根据自己的需求对样式表进行修改，以满足特定的设计要求。这使得 qt-material 更加灵活，能够适应各种不同风格的应用程序。

#### 开源免费

qt-material 是一个开源项目，并且在 GNU 通用公共许可证下发布，这意味着任何人都可以免费使用它，甚至可以根据自己的需求进行修改和定制。

### 如何使用 qt-material？

#### 1. 安装 qt-material

开发者可以通过 pip 包管理工具来安装 qt-material：

```bash
pip install qt-material
```

#### 2. 在应用程序中引入 qt-material

一旦 qt-material 被安装，开发者只需要在他们的 Python 应用程序中引入它即可开始使用。在应用程序的初始化阶段，可以添加如下代码：

```python
import sys
from PySide6 import QtWidgets
from qt_material import apply_stylesheet  # 导入qt_material模块

# 创建应用程序和主窗口
app = QtWidgets.QApplication(sys.argv)
window = QtWidgets.QMainWindow()

# 应用样式表
apply_stylesheet(app, theme='dark_teal.xml')  # 应用名为dark_teal.xml的主题样式

# 运行应用程序
window.show()
sys.exit(app.exec_())  # 退出应用程序的主循环
```

这样 qt-material 就会被加载并应用到应用程序的所有控件上。

#### 3. 定制样式

如果开发者希望对 qt-material 的样式进行定制，他们可以使用 qt-material 提供的各种 API 来修改不同控件的外观和行为。这些 API 包括了颜色、字体、大小等方面的设置，开发者可以根据自己的需求来调整这些参数。

![图片](./Python框架.assets/640-1714232556062-329.gif)

### qt-material 的实际应用

qt-material 已经被广泛地应用于各种类型的 Python 应用程序中，包括了办公软件、多媒体应用、教育软件等。它不仅能够让应用程序的外观更加现代化，还能够提升用户体验，使得应用程序更加易用和直观。

![图片](./Python框架.assets/640-1714232556062-330.gif)

### 结语

qt-material 是一个非常有用的工具，它让开发者可以轻松地为他们的 Python 应用程序创建一个符合 Material Design 标准的外观。通过引入 qt-material，开发者能够节省大量时间和精力，同时为用户带来更好的体验。希望它能够继续发展壮大，为 Python 开发者带来更多的便利。

## GUI 开发开源利器：Qt Creator（附下载地址），集成 Qt Designer 的开发工具，支持 Python 和 C++

**项目地址**：https://github.com/qt-creator/qt-creator/

**软件下载地址**：https://github.com/qt-creator/qt-creator/releases

### 引言

Qt Creator 是一款开源跨平台的集成开发环境（IDE），旨在帮助开发者创建适用于多种桌面、嵌入式和移动设备平台的应用程序，支持 Python 和 C++开发。与其他 IDE 相比，Qt Creator 不仅提供了强大的代码编写和调试功能，还集成了 Qt Designer，使开发者能够轻松创建和编辑应用程序的用户界面。本文将详细介绍 Qt Creator 的功能和优势，帮助读者了解和使用这个爆款开发工具。

![图片](./Python框架.assets/640-1714236571327-449.webp)

### Qt Creator 的特点

Qt Creator 作为一款集成开发环境，拥有许多独特的特点和优势，包括：

1. **跨平台支持**：Qt Creator 适用于各种主流操作系统，如 Windows、macOS 和 Linux，开发者可以无缝地在不同平台上进行开发和调试。

2. **代码编辑器**：Qt Creator 内置了一款功能强大的代码编辑器，具有语法高亮、智能代码完成、代码折叠等功能，提供了更流畅和高效的代码编写体验。

3. **可视化界面设计**：Qt Creator 集成了 Qt Designer，这是一个可视化界面设计工具，使开发者能够直观地创建和编辑应用程序的用户界面。通过拖放组件和布局，开发者可以快速构建复杂的界面。

4. **编译和调试工具**：Qt Creator 提供了集成的构建工具和调试器，支持快速编译、构建和调试 Qt 应用程序。开发者可以轻松地进行单步调试、变量查看等操作，快速定位和解决 bug。

   ![图片](./Python框架.assets/640-1714236587593-452.webp)

5. **版本控制集成**：Qt Creator 支持常见的版本控制系统，如 Git 和 Subversion，开发者可以方便地管理代码的版本、分支和合并。

6. **项目管理**：Qt Creator 提供了丰富的项目管理功能，开发者可以创建和管理多个项目，并轻松切换和导航项目之间。

7. **插件系统**：Qt Creator 支持插件扩展，开发者可以根据需要添加额外的功能和工具，扩展 Qt Creator 的能力。

### Qt Creator 的使用示例

以下是一个简单的使用示例，展示了 Qt Creator 的主要功能。

1. **创建新项目**：在 Qt Creator 中，点击"新建项目"按钮，选择项目类型和选项，填写项目名称和路径，点击"下一步"完成项目配置。

   ![图片](./Python框架.assets/640-1714236587593-453.webp)

2. **编辑代码**：通过 Qt Creator 的代码编辑器，编写 Qt 应用程序的源代码。代码编辑器提供了许多常用的编辑功能，如语法高亮、代码补全、代码折叠等。

3. **设计界面**：在 Qt Creator 中，使用 Qt Designer 创建应用程序的用户界面。通过拖放组件和布局，设置属性和信号槽，实现界面的设计和交互逻辑。

4. **编译和调试**：使用 Qt Creator 的构建工具进行编译和构建项目。在需要调试的代码行设置断点，点击"运行"按钮启动应用程序，并在调试器中逐步执行代码，观察变量和调试信息。

5. **版本控制**：Qt Creator 集成了版本控制系统，通过设置版本控制选项，可以将项目与 Git 或 Subversion 等版本控制系统连接起来，并管理代码的版本、修改和提交。

   ![图片](./Python框架.assets/640-1714236587593-454.webp)

### 结论

Qt Creator 作为一款跨平台的集成开发环境，为开发者提供了丰富的功能和工具，使得 Qt 应用程序的开发更加高效和便捷。通过集成的 Qt Designer，开发者可以直观地创建和编辑应用程序的用户界面，而无需手动编写界面代码。

同时，Qt Creator 提供了强大的代码编辑、调试和编译工具，有效地提升了开发效率和质量。开发者可以根据自己的需求和偏好，灵活配置和使用 Qt Creator，打造出更出色的 Qt 应用程序。相信通过本文的介绍，读者已经对 Qt Creator 有了更深入的了解，并能够更好地利用这一爆款开发工具。

## DearPyGui：简单易用的 Python GUI 框架(PyQt 的强大对手)

[10分钟搞定！用DearPyGui打造你的 Python 界面 (qq.com)](https://mp.weixin.qq.com/s/t-kuDq6hpzUstVBrg565Kg)

**Github 地址**：https://github.com/hoffstadt/DearPyGui

### 什么是 DearPyGui？

DearPyGui 是一个用于构建图形用户界面（GUI）的 Python 开源库。它旨在提供一个简单易用、高效和跨平台的 GUI 解决方案。DearPyGui 基于 C++编写，使用了 OpenGL 进行图形渲染，并提供了 Python 的绑定接口，使得开发人员可以使用 Python 语言来创建强大的 GUI 应用程序。

### 特点和优势

- **简单易用**：DearPyGui 提供了简洁的 API 接口，使得开发者能够轻松创建和管理 GUI 元素，无论是窗口、按钮、文本框还是其他控件，都能够通过几行代码完成。

- **高效性能**：DearPyGui 采用了基于 OpenGL 的图形渲染，这使得它能够在不同平台下获得出色的性能表现。同时，它还提供了一些优化技术，如延迟渲染和渲染缓存，以提高 GUI 的渲染速度。

  ![图片](./Python框架.assets/640-1714239704125-700.gif)

- **跨平台支持**：DearPyGui 能够在多个操作系统上运行，包括 Windows、MacOS 和 Linux，且可以在运行在树莓派上。这意味着开发者可以使用同一套代码来构建适用于不同平台的 GUI 应用程序，大大简化了开发流程。

- **可定制性强**：DearPyGui 提供了丰富的主题和样式选项，使得开发者能够根据自己的需求来自定义 GUI 界面的外观和风格。同时，它还支持自定义控件和插件的开发，以满足特定的功能需求。

- **丰富的功能**：DearPyGui 提供了许多常见的 GUI 功能，如布局管理、事件处理、图形绘制等。它还支持多线程和异步操作，使得开发者能够构建复杂的应用程序，包括数据可视化、游戏界面等。

  ![图片](./Python框架.assets/640-1714239704125-701.gif)

### 安装和使用

要使用 DearPyGui，首先需要安装它的依赖项，如 Python、CMake 和 OpenGL。然后，可以通过 pip 命令来安装 DearPyGui 库：

```
pip install dearpygui
```

安装完成后，可以导入 DearPyGui 库并开始创建 GUI 界面。

### 应用领域

DearPyGui 可以广泛应用于各种领域，包括但不限于：

- **科学计算和数据可视化**：DearPyGui 提供了丰富的图形绘制功能，使得开发者能够轻松创建各种类型的图表、图形和可视化界面，用于科学计算和数据分析。

- **游戏开发**：DearPyGui 的高性能和跨平台支持使得它成为了游戏开发中的理想选择。开发者可以使用 DearPyGui 构建游戏界面、编辑器工具等，提高开发效率。

- **工具和应用程序**：DearPyGui 的功能和可定制性使得它适用于构建各种工具和应用程序。无论是图形界面的文件管理器、文本编辑器还是音频视频播放器，都可以使用 Dear PyGui 来实现。

  ![图片](./Python框架.assets/640-1714239704125-702.gif)

### 总结

DearPyGui 是一个强大的 Python GUI 库，它提供了简单易用、高效和跨平台的 GUI 解决方案。

通过使用 DearPyGui，开发者可以轻松创建各种类型的 GUI 应用程序，包括科学计算、游戏开发和工具应用等。

无论是初学者还是有经验的开发者，都能够从 DearPyGui 的丰富功能和可定制性中受益。如果你正在寻找一个简单而强大的 GUI 库来构建 Python 应用程序，那么 DearPyGui 是一个不错的选择。

## 15-minute-apps：15 分钟开发 Python 桌面应用程序，PyQt 框架开发实例分享

**项目地址**：https://github.com/pythonguis/15-minute-apps

### 一、15-minute-apps 简介

15-minute-apps 是一个由 Python + PyQT 编写的桌面应用程序集合，这些应用程序都非常小巧，可以在 15 分钟内开发完成。15-minute-apps 的目的是为 Python 开发人员提供一些示例代码，帮助他们学习如何使用 PyQt 框架开发桌面应用程序。

### 二、15-minute-apps 的特点

15-minute-apps 具有以下特点：

- **快速开发**：15-minute-apps 中的每个应用程序都可以在 15 分钟内开发完成，非常适合快速开发一些简单的工具或应用程序。
- **代码简洁**：15-minute-apps 中的代码都非常简洁，易于理解和修改。
- **功能实用**：15-minute-apps 中的应用程序虽然简单，但都非常实用，可以满足日常工作和学习的需要。

### 三、15-minute-apps 中的应用程序

- **MooseAche 和 Mozzarella Ashbadger - 网页浏览器**

MooseAche 是一个无标签的网络浏览器，而 Mozzarella Ashbadger 是一个带标签的网络浏览器，两者展示了如何使用 PyQt 框架创建基本和带标签的浏览器。这些浏览器提供了一个良好的例子，能够让用户学习如何在 PyQt 中实现浏览器功能。

- **Moonsweeper - 扫雷游戏**

Moonsweeper 是一个扫雷游戏，它演示了如何通过 PyQt 框架实现游戏界面、逻辑和交互。这款应用程序为用户提供了一个学习游戏开发的例子。

![图片](./Python框架.assets/640-1714235109457-410.webp)

- **No2Pads - 记事本**

No2Pads 是一个简单的记事本应用程序，展示了如何使用 PyQt 框架创建一个记事本，并实现基本的编辑和保存功能。这款应用程序为用户提供了一个学习文本编辑的例子。

![图片](./Python框架.assets/640-1714235109457-411.webp)

- **Calculon - 计算器**

Calculon 是一个使用 QtDesigner 开发的计算器应用程序。它演示了如何使用 PyQt 框架的设计工具创建一个简单的计算器界面，以及实现基本的计算功能。

![图片](./Python框架.assets/640-1714235109457-412.webp)

- **Megasolid Idiom - 文字处理器**

Megasolid Idiom 是一个文字处理器应用程序，它展示了如何使用 PyQt 框架创建一个基本的文字处理器。这款应用程序为用户提供了一个学习文字编辑和格式排版的示例。

- **NSAViewer - 摄像头/快照**

NSAViewer 是一个摄像头/快照应用程序，它展示了如何使用 PyQt 框架创建一个界面，实现摄像头的打开和拍摄快照功能。这款应用程序为用户提供了一个学习摄像应用程序开发的示例。

![图片](./Python框架.assets/640-1714235109457-413.webp)

- **Failamp - 媒体播放器**

Failamp 是一个简单的媒体播放器应用程序，它演示了如何使用 PyQt 框架实现媒体文件的播放和控制。这款应用程序为用户提供了一个学习媒体播放器开发的示例。

- **Brown Note - 便签**

Brown Note 是一个使用 QtDesigner 开发的便签应用程序，它展示了如何使用 PyQt 框架设计一个简单的便签界面，并实现添加、编辑和删除便签的功能。这款应用程序为用户提供了一个学习界面设计和功能实现的示例。

![图片](./Python框架.assets/640-1714235109457-414.webp)

- **Piecasso - 绘画应用**

Piecasso 是一个使用 QtDesigner 开发的绘画应用程序，它展示了如何使用 PyQt 框架创建一个简单的绘画界面，以及实现基本的绘画功能。这款应用程序为用户提供了一个学习绘画应用开发的示例。

- **7Pez - 解压缩应用**

7Pez 是一个使用 QtDesigner 开发的解压缩应用程序，它演示了如何使用 PyQt 框架创建一个简单的解压缩界面，并实现文件解压缩功能。这款应用程序为用户提供了一个学习文件处理和操作的示例。

- **Translataarrr - 翻译应用**

Translataarrr 是一个使用 QtDesigner 开发的翻译应用程序，它展示了如何使用 PyQt 框架创建一个简单的翻译界面，并实现基本的翻译功能。这款应用程序为用户提供了一个学习实现翻译功能的示例。

- **Raindar - 天气应用**

Raindar 是一个使用 QtDesigner 开发的天气应用程序，它展示了如何使用 PyQt 框架创建一个简单的天气界面，并实现基本的天气信息展示功能。这款应用程序为用户提供了一个学习天气应用开发的示例。

![图片](./Python框架.assets/640-1714235109457-415.webp)

- **Doughnut - 货币转换器**

Doughnut 是一个使用 PyQtGraph 开发的货币转换器应用程序，它演示了如何使用 PyQt 框架创建一个简单的货币转换界面，并实现货币兑换功能。这款应用程序为用户提供了一个学习货币兑换功能实现的示例。

- **Ronery - 纸牌游戏**

Ronery 是一个使用 QGraphicsScene 开发的纸牌游戏应用程序。这款应用程序展示了如何使用 PyQt 框架创建一个简单的纸牌游戏界面和逻辑。这款应用程序为用户提供了一个学习游戏界面和逻辑实现的示例。

### 四、如何使用 15-minute-apps

15-minute-apps 的使用非常简单，您只需要下载并安装 15-minute-apps，然后就可以运行其中的应用程序了。如果您想开发自己的 15-minute-apps，您可以参考 15-minute-apps 中的示例代码。15-minute-apps 中的示例代码都非常简洁易懂，您可以很容易地理解和修改这些代码。

### 总结

15-minute-apps 是一个非常有用的工具，可以帮助 Python 开发人员快速开发一些简单的工具或应用程序。15-minute-apps 中的示例代码非常简洁易懂，可以帮助 Python 开发人员学习如何使用 PyQt 框架开发桌面应用程序。

## Tkinter

Tkinter 是 Python 自带的 GUI 库，因为其轻量级和易学性而备受推崇。它不需要安装额外的库或工具，可直接在 Python 中使用。Tkinter 提供了丰富的小部件，如按钮、标签、菜单等，适用于快速构建简单的 GUI 应用程序。然而，Tkinter 在视觉设计和外观上相对较为简单，不太适合开发复杂的界面，但一些对 Tkinter 升级的开源项目，如 CustomTkinter，已经可以开发漂亮的复杂界面。

- **介绍**：Tkinter 是 Python 内置的 GUI 库。
- **优点**：简单易用，适合初学者和中级开发者。
- **缺点**：控件样式较简单，不适合复杂项目。
- **使用示例**：适合小型项目或练习。

[TkNodeSystem：用Tkinter打造可视化节点编辑器 (qq.com)](https://mp.weixin.qq.com/s/vHmfZBYCW35KLcIgQPycEQ)

### 轻松美化 Python Tkinter 应用程序外观：Sun-Valley-ttk-theme 为您的 Tkinter 应用增添现代风格

**项目地址**：https://github.com/rdbende/Sun-Valley-ttk-theme

#### 引言

Sun-Valley-ttk-theme 是一个为 Tkinter/ttk 设计的美丽主题，基于 Sun Valley 视觉风格。只需两行代码，您的 Tkinter 应用程序就可以比以往更好看。本文将详细介绍 Sun-Valley-ttk-theme 的特点和使用方法，帮助您提高开发效率和用户体验。

#### 1.Sun-Valley-ttk-theme 简介

Sun-Valley-ttk-theme 是一个用于 Tkinter/ttk 的主题，旨在改善 Tkinter 应用程序的外观和用户体验。它的设计灵感来自于 Sun Valley 视觉风格，这是 Windows 11 的默认视觉风格。该主题通过美化 Tkinter 的小部件，提供了一个现代、高效和吸引人的用户界面。

![图片](./Python框架.assets/640-1714236986251-470.webp)

#### 2.安装 Sun-Valley-ttk-theme\*

要使用 Sun-Valley-ttk-theme，首先需要安装它。可以通过在命令行中运行以下命令来安装 Sun-Valley-ttk-theme：

```bash
pip install sv-ttk
```

安装完成后，您可以在您的 Tkinter 应用程序中导入 Sun-Valley-ttk-theme：

```python
import sv_ttk
```

#### 3.应用 Sun-Valley-ttk-theme

一旦安装并导入了 Sun-Valley-ttk-theme，您可以在应用程序窗口中应用它：

```python
root = tk.Tk()
root.style = Style()
sv_ttk.set_theme("dark")
```

以上两行代码就可以将 Sun-Valley-ttk-theme 应用到您的 Tkinter 应用程序中。此时，您的应用程序的小部件将以 Sun Valley 风格呈现，拥有现代、漂亮的外观。

#### 4. Sun-Valley-ttk-theme 的特点

Sun-Valley-ttk-theme 具有许多令人激动的特点，使得它成为改善 Tkinter 应用程序外观的理想选择：

1. 现代化设计：Sun-Valley-ttk-theme 为 Tkinter 的小部件提供了现代化的设计，使得应用程序外观更加吸引人，与时俱进。
2. 响应式布局：该主题在不同的窗口大小和屏幕分辨率下都能提供良好的布局。无论用户使用的是小屏幕笔记本还是大屏幕桌面，显示效果都非常出色。
3. 高度可定制：Sun-Valley-ttk-theme 允许您自定义各种小部件的外观和颜色。您可以根据自己的偏好和应用程序的需求来定制每个小部件的外观。
4. 易于使用：只需两行代码，您就可以将 Sun-Valley-ttk-theme 应用到您的 Tkinter 应用程序中。这使得使用该主题非常简单，即使是对于初学者也很容易上手。

#### 5. 示例应用程序

以下是一个使用 Sun-Valley-ttk-theme 的简单示例应用程序，以帮助您更好地理解如何应用和定制该主题：

```python
import tkinter as tk
from tkinter import ttk
import sv_ttk

root = tk.Tk()

label = ttk.Label(root, text="Hello, Sun-Valley!")
label.pack(padx=20, pady=20)

button = ttk.Button(root, text="Click Me!")
button.pack(padx=20, pady=20)

sv_ttk.set_theme("dark")

root.mainloop()
```

通过运行上述代码，您将看到一个使用 Sun-Valley-ttk-theme 的应用程序窗口，其中包含一个标签和一个按钮。您可以尝试更改标签和按钮的外观，以适应您的需求和喜好。

![图片](./Python框架.assets/640-1714236986251-471.webp)

#### 结论

Sun-Valley-ttk-theme 是一个功能强大的 Tkinter/ttk 主题，可以使您的应用程序外观更加现代和吸引人。通过使用 Sun-Valley-ttk-theme，您可以轻松提高应用程序的用户体验，让您的应用程序在视觉上更加出众。只需两行代码，您就可以开始使用这个令人惊艳的主题。不要犹豫，立即尝试 Sun-Valley-ttk-theme，让您的 Tkinter 应用程序焕然一新！

### Python-GUI-Project：Python Tkinter 的 20+个 GUI 项目的代码库助力编程提升

**项目地址**: https://github.com/Aashishkumar123/Python-GUI-Project

#### Python-GUI-Project 简介

Python-GUI-Project 是一个代码库，其中包含 20 个以上基于 Python Tkinter 的 GUI 项目。这些项目涵盖了不同领域和功能的应用程序，旨在帮助开发者学习和实践 GUI 应用程序的开发。

#### 1. 高级 GUI YouTube 下载器

该项目是一个高级 GUI 应用程序，可以方便地从 YouTube 下载视频。用户只需在应用程序中粘贴视频链接，点击下载即可获取视频内容。

![图片](./Python框架.assets/640-1714237281412-476.webp)

#### 2. 字典 GUI 应用程序

这个 GUI 应用程序提供了一个用户友好的界面，让用户可以轻松地查找单词的定义和释义。用户可以输入想要查询的单词，并在应用程序中获取其含义。

![图片](./Python框架.assets/640-1714237281412-477.webp)

#### 3. 邮件发送 GUI 应用程序

该 GUI 应用程序允许用户通过简单的界面发送电子邮件。用户可以输入收件人地址、主题和内容，并通过点击发送按钮来发送邮件。

![图片](./Python框架.assets/640-1714237281412-478.webp)

#### 4. Instagram 用户详情 GUI 应用程序

这个 GUI 应用程序允许用户通过输入 Instagram 用户名，获取该用户的详细信息，包括关注者数量、帖子数量等。

![图片](./Python框架.assets/640-1714237281412-479.webp)

#### 5. 名字生成器 GUI 应用程序

用户可以通过这个 GUI 应用程序生成随机的姓名。应用程序提供了多种选项，如姓氏、名字长度等，用户可以根据自己的需求生成不同类型的姓名。

![图片](./Python框架.assets/640-1714237281412-480.webp)

#### 6. 记事本 GUI 应用程序

这个 GUI 应用程序允许用户创建、编辑和保存文本文件。用户可以在应用程序中输入和修改文本内容，并将其保存为文件。

![图片](./Python框架.assets/640-1714237281412-481.webp)

#### 7. 画图 GUI 应用程序

该 GUI 应用程序提供了一个绘图界面，用户可以在画布上绘制各种图形，如线条、矩形、椭圆等，还可以选择不同的颜色和笔刷。

![图片](./Python框架.assets/640-1714237281412-482.webp)

#### 8. 钢琴 GUI 应用程序

这个 GUI 应用程序可以模拟钢琴的声音和键盘，用户可以通过点击键盘上的按键来演奏不同的音符和和弦。

![图片](./Python框架.assets/640-1714237281412-483.webp)

#### 9. 餐厅管理系统 GUI 应用程序

该 GUI 应用程序是一个餐厅管理系统，可以帮助餐厅管理者管理餐厅的菜单、订单、桌位等。用户可以通过应用程序添加、修改和删除菜单项，并处理顾客的订单。

![图片](./Python框架.assets/640-1714237281412-484.webp)

#### 10. 谷歌翻译 GUI 应用程序

这个 GUI 应用程序可以实现文本翻译的功能。用户可以输入要翻译的文本，并选择源语言和目标语言，应用程序将返回相应的翻译结果。

#### 11. 咖啡馆管理系统 GUI 应用程序

该 GUI 应用程序是一个咖啡馆管理系统，可以帮助咖啡馆管理员管理菜单、订单等。用户可以通过应用程序添加、修改和删除菜单项，并处理顾客的订单。

![图片](./Python框架.assets/640-1714237281412-485.webp)

#### 12. 计算器 GUI 应用程序

这个 GUI 应用程序实现了一个基本的计算器，用户可以通过点击按钮来进行各种数值运算，如加法、减法、乘法、除法等。

![图片](./Python框架.assets/640-1714237281412-486.webp)

#### 13. 带图片的计算器 GUI 应用程序

这个 GUI 应用程序是一个带有图像背景的计算器，用户可以在漂亮的界面上进行各种数值运算。

#### 14. 日历 GUI 应用程序

该 GUI 应用程序提供了一个日历界面，用户可以查看和管理日期、月份和节假日等信息。

![图片](./Python框架.assets/640-1714237281412-487.webp)

#### 15. 货币转换器 GUI 应用程序

这个 GUI 应用程序可以实现货币转换的功能。用户可以输入要转换的货币金额和货币类型，并选择目标货币类型，应用程序将返回相应的转换结果。

#### 16. 短信发送器 GUI 应用程序

该 GUI 应用程序允许用户通过简单的界面发送短信。用户可以输入收件人手机号码和短信内容，并通过点击发送按钮来发送短信。

![图片](./Python框架.assets/640-1714237281413-488.webp)

#### 17. URL 缩短器 GUI 应用程序

这个 GUI 应用程序可以将长链接转换为短链接。用户只需输入要缩短的 URL，应用程序将返回相应的短链接。

#### 18. 天气 GUI 应用程序

该 GUI 应用程序可以获取实时的天气信息。用户可以输入城市名称，应用程序将返回该城市的天气条件，如温度、湿度、天气状况等。

![图片](./Python框架.assets/640-1714237281413-489.webp)

#### 19. 基本 GUI YouTube 下载器

这个 GUI 应用程序是一个基本版本的 YouTube 下载器，用户可以通过输入视频链接和下载路径来获取视频内容。

![图片](./Python框架.assets/640-1714237281413-490.webp)

#### 20. 井字游戏

这个 GUI 应用程序是经典的井字游戏，用户可以通过点击九宫格来进行游戏，应用程序将判断胜负并显示结果。

![图片](./Python框架.assets/640-1714237281413-491.webp)

#### 21. 新闻头条应用程序

该 GUI 应用程序可以实时获取新闻头条。用户可以通过应用程序浏览最新的新闻资讯，包括标题、内容、来源等。

![图片](./Python框架.assets/640-1714237281413-492.webp)

#### 总结

Python-GUI-Project 是一个包含多个 Python Tkinter GUI 项目的代码库，涵盖了各种不同功能的应用程序。这些项目不仅可以帮助开发者学习和实践 GUI 应用程序的开发，还可以为用户提供方便、实用的工具和娱乐应用。希望通过本文的介绍，读者能够对 Python-GUI-Project 有更深入的认识，并从中获得实际应用的启发。

### Tkinter 焕新利器：ttkbootstrap——打造美观现代的 Bootstrap 主题

**项目地址**：https://github.com/israel-dryer/ttkbootstrap

#### 简介

ttkbootstrap 是一个基于 Python 的 Tkinter 库构建的，用于创建现代 GUI 应用程序。它结合了 Tkinter 的简洁性和 Bootstrap 框架的美观，提供了丰富的组件和样式，使开发人员能够快速构建美观、响应式的桌面应用程序。

ttkbootstrap 是 Tkinter 的一款强大主题扩展，它可以为 Tkinter 应用程序提供时尚现代的 Bootstrap 风格主题。与传统的 Tkinter 主题相比，ttkbootstrap 的主题更简洁、更美观，而且可以根据需要进行定制，满足不同的应用程序需求。

![图片](./Python框架.assets/640-1714238519278-629.webp)

#### 特点

- **基于 Bootstrap 样式：** ttkbootstrap 是一个用于 tkinter 的主题扩展，它基于 ttk（Tkinter 的主题部件）库，并借鉴了 Bootstrap 的设计思想。它提供了一系列现代化的扁平风格主题供开发人员使用，开发人员可以根据自己的需求选择和切换主题。
- **按需加载：** ttkbootstrap 提供了按需加载主题的功能，应用程序可以在运行时选择和加载所需的主题，从而优化内存使用和加载速度。
- **高度可定制：** ttkbootstrap 的主题可以通过简单修改 CSS 文件进行高度定制，包括颜色、字体、组件样式等方面。
- **丰富的组件：** ttkbootstrap 提供了一系列丰富的组件，包括按钮、标签、输入框、下拉菜单等，这些组件都经过精心设计，符合 Bootstrap 的风格。
- **跨平台兼容：** ttkbootstrap 可以跨 Windows、macOS 和 Linux 等多个平台使用，为应用程序提供了跨平台的视觉一致性。
- **现代风格的组件**：提供多种预设的样式，可以直接使用，也可以自定义。
- **易于使用**：API 简单，与 Tkinter 的使用方法类似，容易上手。
- **灵活性**：支持自定义主题和样式，可以创建独特的界面。
- **兼容性**：兼容标准 Tkinter 组件，可以无缝集成到现有的 Tkinter 应用中。

ttkbootstrap 扩展了 Tkinter 的基本功能，提供了一系列美观且易于使用的组件，使得创建现代化的 GUI 应用程序变得更加简单。

#### 安装

ttkbootstrap 可以通过 pip 安装：

```
pip install ttkbootstrap
```

安装完成后，可以在 Python 脚本中导入 ttkbootstrap：

```
import ttkbootstrap as ttk
```

#### 使用

使用 ttkbootstrap 非常简单，只需在 Tkinter 应用程序中设置主题即可：

```python
import ttkbootstrap as ttk

# 创建窗口实例
root = ttk.Window(title="ttkbootstrap 示例")
root.pack()
# 进入事件循环
root.mainloop()
```

这段代码将创建一个使用 ttkbootstrap 默认主题的 Tkinter 窗口。

#### 定制主题

ttkbootstrap 的主题可以通过修改 CSS 文件进行定制。默认的 CSS 文件位于 ttkbootstrap 安装目录下的 `ttkbootstrap\\styles` 文件夹中。

也可以使用 ttkcreator 这个 GUI 进行定制，pip install ttkcreator.

![图片](./Python框架.assets/640-1714238519278-630.webp)

如不使用 ttkcreator 时，用户可以根据需要修改 CSS 文件中的样式，例如：

- 修改按钮背景色：

```
.btn {
    background-color: #007bff;
}
```

- 修改标签字体大小：

```
.label {
    font-size: 16px;
}
```

#### 主题切换

ttkbootstrap 支持多种内置主题，开发者可以根据需要动态切换主题，以适应不同的用户偏好或应用场景。动态更改应用程序的主题：

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *

# 初始化窗口
window = ttk.Window(themename='flatly')

# 创建一个函数来更改主题
def change_theme():
    window.set_theme('darkly')

# 添加一个按钮来切换主题
button = ttk.Button(window, text='Change Theme', command=change_theme)
button.pack(pady=20)

window.mainloop()
```

这段代码中，点击按钮后会将应用程序的主题从`flatly`更改为`darkly`。

### **自定义样式**

除了使用预设的主题，ttkbootstrap 允许开发者自定义特定组件的样式，提供更高的界面定制灵活性。为特定的按钮定义自定义样式：

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *

window = ttk.Window(themename='solar')

# 创建自定义样式
style = ttk.Style()
style.configure('Custom.TButton', font=('Helvetica', 12, 'bold'), foreground='blue')

# 使用自定义样式的按钮
button = ttk.Button(window, text='Styled Button', style='Custom.TButton')
button.pack(pady=10)

window.mainloop()
```

在这段代码中，定义了一个新的按钮样式`Custom.TButton`，并将其应用到一个按钮上，改变了按钮的字体和前景色。

### ttkbootstrap 组件动态更新

ttkbootstrap 支持在运行时动态更新组件的属性，使得应用程序可以响应用户操作或其他事件。创建一个应用程序，其中的标签内容会根据输入框的内容动态更新：

```python
import ttkbootstrap as ttk

window = ttk.Window(themename='minty')

# 创建标签和输入框
label = ttk.Label(window, text='Your input will show here')
label.pack(pady=10)

entry = ttk.Entry(window)
entry.pack(pady=10)

# 定义一个函数来更新标签的内容
def update_label(*args):
    label.config(text=entry.get())

# 将输入框的变化绑定到更新函数
entry.bind('<KeyRelease>', update_label)

window.mainloop()
```

这段代码实现了当用户在输入框中输入文本时，标签会实时显示相同的内容。

#### 组件

ttkbootstrap 提供了一系列丰富的组件，包括：

##### 按钮（Button）

![图片](./Python框架.assets/640-1714238519278-631.gif)

按钮是最常用的组件之一，ttkbootstrap 提供了多种样式的按钮。创建一个按钮，并为其绑定一个事件处理函数：

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *

def button_click():
    print("Button clicked!")

window = ttk.Window(themename='pulse')

# 创建按钮并设置点击事件
button = ttk.Button(window, text='Click Me', command=button_click)
button.pack(pady=20)

window.mainloop()
```

这段代码创建了一个按钮，当点击按钮时，会在控制台输出消息。

##### 标签（Label）

标签用于显示文本或图像。创建一个标签，用于显示文本信息：

```python
import ttkbootstrap as ttk

window = ttk.Window(themename='lumen')

# 创建标签
label = ttk.Label(window, text='Hello, ttkbootstrap!')
label.pack(pady=10)

window.mainloop()
```

这段代码在窗口中创建了一个文本标签。

##### 输入框（Entry）

输入框允许用户输入一行文本。创建一个输入框，用于接收用户输入：

```python
import ttkbootstrap as ttk

window = ttk.Window(themename='minty')

# 创建输入框
entry = ttk.Entry(window)
entry.pack(pady=10)

window.mainloop()
```

这段代码创建了一个输入框，用户可以在其中输入文本。

##### 下拉菜单（Combobox）

组合框允许用户从下拉列表中选择一个值。创建一个组合框，并提供几个选项供选择：

```python
import ttkbootstrap as ttk

window = ttk.Window(themename='solar')

# 创建组合框
combobox = ttk.Combobox(window, values=['Option 1', 'Option 2', 'Option 3'])
combobox.pack(pady=10)

window.mainloop()
```

这段代码创建了一个组合框，用户可以从三个选项中选择。

##### 复选框（Checkbutton）

##### 单选框（Radiobutton）

##### 进度条（Progressbar）

##### 文本框（Text）

##### 画布（Canvas）

##### 总结

这些组件都经过精心设计，符合 Bootstrap 的风格，并且可以使用相同的 CSS 样式进行定制。

![图片](./Python框架.assets/640-1714238519278-632.webp)

#### 示例

下面是一个使用 ttkbootstrap 为 Tkinter 应用程序创建登录界面的示例：

```python
import ttkbootstrap as ttk

root = ttk.Window(title="登录")

# 创建登录表单
form = ttk.Frame(root)
form.pack(padx=10, pady=10)

# 创建用户名输入框
username_label = ttk.Label(form, text="用户名：")
username_label.pack(side=ttk.LEFT)
username_entry = ttk.Entry(form)
username_entry.pack(side=ttk.LEFT, fill=ttk.X, expand=True)

# 创建密码输入框
password_label = ttk.Label(form, text="密码：")
password_label.pack(side=ttk.LEFT)
password_entry = ttk.Entry(form, show="*")
password_entry.pack(side=ttk.LEFT, fill=ttk.X, expand=True)

# 创建登录按钮
login_button = ttk.Button(form, text="登录")
login_button.pack(side=ttk.LEFT, padx=5, pady=5)

root.mainloop()
```

这个示例代码将创建一个使用 ttkbootstrap 默认主题的登录界面，如下所示：

![图片](./Python框架.assets/640-1714238519278-633.webp)

#### 应用实例

如图：![图片](./Python框架.assets/640-1714238519278-634.webp)

#### 总结

ttkbootstrap 是 Tkinter 的一款强大而灵活的主题扩展，它可以为 Tkinter 应用程序带来现代而美观的 Bootstrap 风格主题。通过按需加载和高度可定制的特性，ttkbootstrap 能够满足不同应用程序的定制需求。丰富的组件库和跨平台兼容性使 ttkbootstrap 成为打造时尚现代 Tkinter 应用程序的理想选择。

### ttkbootstrap 实际应用场景

ttkbootstrap 能够适用于多种类型的桌面应用程序开发，其现代化的组件和灵活的样式系统为不同的应用场景提供了强大支持。

#### 办公自动化工具

在办公自动化领域，ttkbootstrap 可以用来开发各种管理和报告工具，提高工作效率和数据处理能力。

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *

window = ttk.Window(themename='superhero', title='Employee Management System')

# 员工信息表格
columns = ('id', 'name', 'position')
treeview = ttk.Treeview(window, columns=columns, show='headings')
treeview.heading('id', text='ID')
treeview.heading('name', text='Name')
treeview.heading('position', text='Position')
treeview.pack(fill=BOTH, expand=True)

# 添加数据到表格
employees = [('1', 'John Doe', 'Manager'), ('2', 'Jane Doe', 'Developer')]
for emp in employees:
    treeview.insert('', END, values=emp)

window.mainloop()
```

这个简单的员工信息管理系统利用`Treeview`组件展示员工数据，使用`superhero`主题增强视觉效果。

#### 教育软件

ttkbootstrap 适合开发教育领域的软件，如学习工具、模拟器和互动教材。

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *
from math import sqrt

window = ttk.Window(themename='litera', title='Math Learning Tool')

# 界面元素：输入数字，计算平方根
entry = ttk.Entry(window)
entry.pack(pady=10)

result_label = ttk.Label(window, text='Result will show here')
result_label.pack(pady=10)

def calculate_sqrt():
    num = float(entry.get())
    result = sqrt(num)
    result_label.config(text=f'Square root: {result}')

calc_button = ttk.Button(window, text='Calculate Square Root', command=calculate_sqrt)
calc_button.pack(pady=10)

window.mainloop()
```

这个数学学习工具提供一个输入框让用户输入数字，并计算显示其平方根，界面简洁友好，适合教育用途。

#### 企业应用

对于企业级应用，如 CRM 系统、财务软件或库存管理系统，ttkbootstrap 提供了丰富的界面组件和主题，可以创建专业且易用的应用程序。

```python
import ttkbootstrap as ttk
from ttkbootstrap.constants import *

window = ttk.Window(themename='cosmo', title='Simple CRM System')

# 客户信息显示
columns = ('id', 'name', 'email')
treeview = ttk.Treeview(window, columns=columns, show='headings')
treeview.heading('id', text='ID')
treeview.heading('name', text='Name')
treeview.heading('email', text='Email')
treeview.pack(fill=BOTH, expand=True)

# 添加客户数据到表格
customers = [('1', 'Company A', 'contact@companya.com'), ('2', 'Company B', 'contact@companyb.com')]
for customer in customers:
    treeview.insert('', END, values=customer)

window.mainloop()
```

这个 CRM 系统界面通过`Treeview`组件展示客户信息，`cosmo`主题提供了专业的外观。

#### 总结

ttkbootstrap 库为 Python 的 Tkinter 模块提供了一套美观的 Bootstrap 样式，使得开发现代化的桌面应用程序变得简单快捷。它继承了 Tkinter 的易用性，同时引入了 Bootstrap 的设计元素，提供了多种内置主题和自定义样式选项，让界面设计更加多样化和个性化。通过 ttkbootstrap，开发者可以快速构建出既美观又功能丰富的 GUI 应用，无论是数据管理系统、教育工具还是企业级软件。此外，其对主题和样式的支持使得应用程序可以轻松适应不同的用户偏好和设计要求，提高了开发效率和用户体验。

### Pygubu：快速开发 Python tkinter 用户界面的利器

**项目地址**：

- https://github.com/alejandroautalan/pygubu
- https://github.com/alejandroautalan/pygubu-designer

#### 简介

Pygubu 是一个用于快速和简便开发 Python tkinter 模块用户界面的 RAD（快速应用程序开发）工具。它提供了一个可视化的界面设计器，使开发人员能够通过拖放和配置部件来创建用户界面。Pygubu 将设计的用户界面保存为 XML 文件，并通过使用 Pygubu Builder，可以在需要时动态地加载到应用程序中。

#### 功能和特性：

Pygubu 具有以下主要功能和特性：

1. 可视化界面设计器：Pygubu 提供了一个直观的界面设计器 Pygubu-designer，开发人员可以通过拖放和配置部件来设计用户界面。这使得界面的创建变得简单且不需要编写大量的代码。

   ![图片](./Python框架.assets/640-1714238089557-563.webp)

2. 支持多种部件：Pygubu 支持大量的用户界面部件，包括按钮、标签、文本框、复选框、下拉菜单等。开发人员可以从预定义的部件库中选择适合其应用程序的部件。

3. 事件绑定和处理：Pygubu 允许开发人员为界面部件绑定事件处理函数。通过简单的操作，开发人员可以定义当用户与界面进行交互时需要执行的操作。

4. 自定义样式和布局：Pygubu 允许开发人员定义界面的样式和布局。开发人员可以设置部件的属性，如颜色、字体和大小，以及调整它们的位置和大小。

5. XML 文件保存和加载：通过将设计的用户界面保存为 XML 文件，Pygubu 使得界面的版本控制和共享变得简单。应用程序可以动态加载这些 XML 文件，从而实现动态用户界面的创建和修改。

#### 安装和使用示例：

可以直接 pip 安装：

```bash
pip install pygubu pygubu-designer
```

下面是一个简单的使用 Pygubu 创建用户界面的示例代码：

```python
import tkinter as tk
import pygubu

# 创建主窗口
root = tk.Tk()

# 创建Pygubu Builder
builder = pygubu.Builder()

# 加载UI文件
builder.add_from_file('ui_file.xml')

# 获取主窗口部件
main_window = builder.get_object('main_window', root)

# 运行应用程序

root.mainloop()
```

在上面的示例中，我们首先导入必要的模块，然后创建主窗口和 Pygubu Builder。接下来，我们使用`add_from_file`方法加载预先设计的 UI 文件，并使用`get_object`方法获取主窗口部件。最后，我们通过调用`mainloop`方法来运行应用程序。

#### 优势

Pygubu 相对于其他类似的库具有以下优势：

1. 快速开发：Pygubu 的可视化界面设计器使得用户界面的创建变得简单和快速。开发人员不需要花费大量时间编写和调试大量的代码。
2. 与 tkinter 集成：Pygubu 专门为 Python 的 tkinter 模块设计，与其紧密集成。这使得开发人员能够充分利用 tkinter 的强大功能和广泛支持。
3. XML 文件保存和加载：Pygubu 将用户界面保存为 XML 文件，这使得界面的版本控制和共享变得更加方便。XML 文件可以轻松地加载到应用程序中，实现动态用户界面的创建和修改。

#### 成功案例：

以下是一些使用 Pygubu 取得成功的案例或项目：

1. **PyPaint**：PyPaint 是一个基于 Pygubu 开发的简单绘图应用程序。它使用 Pygubu 的界面设计器创建了一个直观的用户界面，用户可以在画布上绘制图形、选择颜色和调整画笔大小。
2. **PyMusicPlayer**：PyMusicPlayer 是一个使用 Pygubu 开发的音乐播放器应用程序。它提供了一个漂亮的用户界面，用户可以加载和播放音乐文件，调整音量和控制播放进度。

这些案例展示了 Pygubu 在各种应用程序中的灵活性和适用性。

#### 总结：

如果你是一个 Python 开发人员，想要快速创建用户界面，Pygubu 是一个值得考虑的工具。它能够提高开发效率，减少重复劳动，并为你的应用程序提供一个美观和易于使用的界面。

### CustomTkinter：基于 Python Tkinter 打造的现代化跨平台程序界面 GUI 库

**项目地址**：https://github.com/TomSchimansky/CustomTkinter

#### 介绍

CustomTkinter 是一款基于 Tkinter 的现代化、可自定义的 Python 界面库。它提供了丰富的 UI 组件和样式选项，使开发者能够轻松创建各种吸引人的用户界面。

CustomTkinter 旨在提供更好的用户体验和更高的可定制性，满足不同项目和应用的需求。

![图片](./Python框架.assets/640-1714238314695-587.webp)

#### 为什么选择 CustomTkinter？

1. 基于 Tkinter：CustomTkinter 是基于 Python 标准库中的 Tkinter 模块开发的。Tkinter 是一个强大的 GUI 工具包，CustomTkinter 在其基础上进行了增强和扩展，提供了更多的功能和样式选项。

2. 现代化设计：CustomTkinter 提供了现代化的 UI 设计风格，包括扁平化的按钮、漂亮的图标、动画效果等，使得应用界面更加时尚和吸引人。

   ![图片](./Python框架.assets/640-1714238314696-588.webp)

3. 可自定义性：CustomTkinter 允许开发者自定义 UI 组件的外观和行为，包括颜色、字体、尺寸、布局等方面。开发者可以根据自己的需求和品牌风格进行定制，打造独特的用户界面。

4. 跨平台支持：由于 CustomTkinter 基于 Tkinter 开发，它可以在多个平台上运行，包括 Windows、Mac 和 Linux。这使得开发者可以轻松地将应用程序部署到不同的操作系统上。

![图片](./Python框架.assets/640-1714238314696-589.webp)

#### 主要特性

1. UI 组件库：CustomTkinter 提供了丰富的 UI 组件库，包括按钮、标签、文本框、滚动条、下拉列表等常用组件，满足常见界面元素的需求。

2. 样式定制：CustomTkinter 允许开发者针对每个 UI 组件进行样式定制，包括颜色、字体、边框、阴影等，以适应不同的设计需求。

3. 布局管理：CustomTkinter 支持多种布局管理器，如 Grid、Pack 和 Place，使开发者能够自由地设计和调整界面布局。

   ![图片](./Python框架.assets/640-1714238314696-590.webp)

4. 事件处理：CustomTkinter 提供了事件处理机制，开发者可以为 UI 组件绑定各种事件，如点击、鼠标移动等，实现交互和响应功能。

5. 图形绘制：CustomTkinter 支持图形绘制功能，开发者可以通过绘制图形元素，如线条、矩形、椭圆等，实现更丰富的界面效果。

#### 使用示例

![图片](./Python框架.assets/640-1714238314696-591.webp)

#### 应用场景

1. 桌面应用程序：CustomTkinter 适用于开发各种桌面应用程序，包括日历、音乐播放器、图像编辑器等。

2. 数据可视化工具：CustomTkinter 提供了丰富的图形绘制功能，可以用于开发数据可视化工具，如图表、图形编辑器等。

3. 系统管理工具：CustomTkinter 可以用于开发系统管理工具，如文件管理器、任务管理器等，提供友好的用户界面和操作界面。

   ![图片](./Python框架.assets/640-1714238314696-592.gif)

#### 结语

CustomTkinter 作为一款现代化、可自定义的 Python 界面库，为开发者提供了丰富的 UI 组件和样式选项，使得界面开发更加灵活和便捷。通过使用 CustomTkinter，开发者可以轻松构建现代化、个性化的用户界面，满足不同项目和应用的需求。

无论是桌面应用程序、数据可视化工具还是系统管理工具，CustomTkinter 都能为开发者提供强大的支持。

### 几个 CustomTkinter 扩展增强库，打造更加漂亮、简约、现代的应用界面 GUI

**项目地址**：https://github.com/Akascape/CTkMessagebox、CTkTable、CTkToolTip、CTkListbox、CTkScrollableDropdown、 CTkColorPicker、CTkColorPicker

#### 前言：

CustomTkinter 是一款出色的 Python GUI 库，它可以帮助您轻松构建现代且美观的图形用户界面。为了进一步增强 CustomTkinter 的功能，您可以使用一系列扩展包，其中就包括 CTkMessagebox、CTkTable、CTkToolTip、CTkListbox、CTkScrollableDropdown 和 CTkColorPicker。这些扩展包可以帮助您创建各种各样的界面元素，让您的应用程序更加美观和易用。

#### 1. CTkMessagebox：现代且可定制的消息框

CTkMessagebox 是一个现代且可定制的消息框组件，它可以帮助您轻松地向用户显示各种消息，如提示、警告和错误等。CTkMessagebox 提供了多种预定义的样式，您还可以根据自己的需要进行自定义，以匹配您的应用程序的整体外观和风格。

![图片](./Python框架.assets/640-1714238407859-605.webp)

官网例程运行结果：

![图片](./Python框架.assets/640-1714238407859-606.webp)

#### 2. CTkTable：功能强大的表格组件

CTkTable 是一个功能强大的表格组件，它可以帮助您轻松地创建和管理表格数据。CTkTable 提供了丰富的功能，包括行和列的排序、过滤、分组和隐藏等。您还可以使用 CTkTable 来显示大型数据集，并提供分页和滚动功能，让用户可以轻松地浏览数据。

![图片](./Python框架.assets/640-1714238407859-607.webp)

#### 3. CTkToolTip：美观实用的工具提示组件

CTkToolTip 是一个美观实用的工具提示组件，它可以帮助您为您的应用程序中的控件添加工具提示。CTkToolTip 提供了多种预定义的样式，您还可以根据自己的需要进行自定义，以匹配您的应用程序的整体外观和风格。

![图片](./Python框架.assets/640-1714238407859-608.gif)

#### 4.CTkListbox：美观且易用的列表框组件

CTkListbox 是一个美观且易用的列表框组件，它可以帮助您轻松地创建和管理列表数据。CTkListbox 提供了多种预定义的样式，您还可以根据自己的需要进行自定义，以匹配您的应用程序的整体外观和风格。

![图片](./Python框架.assets/640-1714238407859-609.webp)

#### 5.CTkScrollableDropdown：现代且可定制的下拉框组件

CTkScrollableDropdown 是一个现代且可定制的下拉框组件，它可以帮助您轻松地创建和管理下拉列表。CTkScrollableDropdown 提供了多种预定义的样式，您还可以根据自己的需要进行自定义，以匹配您的应用程序的整体外观和风格。

![图片](./Python框架.assets/640-1714238407859-610.webp)

#### 6.CTkColorPicker：直观且易用的颜色选择器组件

CTkColorPicker 是一个直观且易用的颜色选择器组件，它可以帮助您轻松地选择颜色。CTkColorPicker 提供了多种预定义的样式，您还可以根据自己的需要进行自定义，以匹配您的应用程序的整体外观和风格。

![图片](./Python框架.assets/640-1714238407860-611.webp)

#### 7.CTkMenuBar：现代且可定制的菜单栏组件

CTkMenuBar 是一个现代且可定制的菜单栏组件，它可以帮助您轻松地为您的应用程序添加菜单栏。CTkMenuBar 提供了多种预定义的样式，您还可以根据自己的需要进行自定义，以匹配您的应用程序的整体外观和风格。

![图片](./Python框架.assets/640-1714238407860-612.webp)

#### 8. 安装

```bash
pip install CTkMessagebox, CTkTable, CTkToolTip, CTkListbox, CTkScrollableDropdown, CTkColorPicker
```

#### 总结：

CTkMessagebox、CTkTable、CTkToolTip、CTkListbox、CTkScrollableDropdown、CTkColorPicker 和 CTkMenuBar 都是非常棒的扩展包，它们可以帮助您轻松地创建各种各样的界面元素，让您的应用程序更加美观和易用。如果您正在使用 CustomTkinter 开发 GUI 应用程序，强烈建议您使用这些扩展包。

### 三款热门主题扩展库，来美化你的 tkinter 应用

**项目地址**：

- https://github.com/israel-dryer/ttkbootstrap
- https://github.com/TomSchimansky/CustomTkinter
- https://github.com/rdbende/Sun-Valley-ttk-theme

#### 引言

随着 Python 语言在软件开发领域的普及，越来越多的开发者开始使用 Python 自带的 tkinter 库作为 GUI 开发工具。然而，tkinter 默认的主题样式相对简单，对于一些需要定制化界面的开发者来说可能有些不太符合需求。

因此，出现了一些 tkinter 的主题扩展库，帮助开发者实现个性化界面设计。本文将介绍三种比较热门的 tkinter 主题扩展库：ttkbootstrap，CustomTkinter 和 Sun-Valley-ttk-theme。

![图片](./Python框架.assets/640-1714238213551-566.webp)

#### ttkbootstrap

ttkbootstrap 是一个基于 Boostrap 样式的 tkinter 主题扩展库，旨在为 tkinter 应用程序提供现代化和响应式的外观。它提供了一系列吸引人的 UI 组件，如按钮、输入框、下拉菜单等，可以大大增强 tkinter 程序的视觉吸引力。此外，ttkbootstrap 还具备轻松易用的语法，使得用户能够快速应用这些样式到他们的应用程序中。这个库的设计理念是为了让 tkinter 开发者能够轻松获得现代 UI 设计的优势，并在开发过程中更注重功能逻辑而非视觉细节。

![图片](./Python框架.assets/640-1714238213551-567.gif)

对于开发者来说，使用 ttkbootstrap 可以减少设计时间和工作量，通过简单的调用就可以改善现有应用的外观。此外，ttkbootstrap 还提供了大量的定制选项，可以让用户根据自己的需求轻松修改主题。

![图片](./Python框架.assets/640-1714238213551-568.webp)

ttkbootstrap 提供了多种预设的主题样式，比如深色、浅色、紧凑等。开发者可以根据自己的需求选择不同的主题样式，从而定制出符合自己喜好的界面设计。此外，ttkbootstrap 还支持响应式设计，可以根据窗口大小动态调整界面布局，使得界面在不同大小的屏幕上都能够得到合适的显示效果。

请看多种预设的主题样式动图：

![图片](./Python框架.assets/640-1714238213551-569.gif)

#### CustomTkinter

CustomTkinter 是另一个比较流行的 tkinter 主题扩展库，它提供了丰富的自定义界面设计功能。CustomTkinter 的最大特点在于其高度的可定制性，开发者可以通过编写 CSS 样式来修改各种组件的外观和布局。这意味着开发者可以根据自己的需要完全重塑 tkinter 的界面设计，实现各种各样的个性化样式。

![图片](./Python框架.assets/640-1714238213551-570.gif)

除了 CSS 样式外，CustomTkinter 还提供了一系列的内置主题，开发者可以直接使用这些主题来快速实现界面设计。此外，CustomTkinter 还支持自定义主题的导入和导出，开发者可以轻松地分享自己设计的主题样式，或者从其他人的设计中获取灵感。

![图片](./Python框架.assets/640-1714238213551-571.webp)

#### Sun-Valley-ttk-theme

Sun-Valley-ttk-theme 是一个基于 Windows 11 设计风格的 tkinter 主题扩展库。随着 Windows 11 的发布，其全新的设计语言——Sun Valley 设计语言也吸引了很多人的关注。Sun-Valley-ttk-theme 就是基于这种设计语言，为 tkinter 提供了一种逼真的 Windows 11 风格主题样式。

![图片](./Python框架.assets/640-1714238213551-572.webp)

Sun-Valley-ttk-theme 的界面设计非常现代化和时尚，其主题样式包括了窗口、按钮、文本框等各种组件，都与 Windows 11 的设计风格高度一致。开发者可以直接使用这些主题样式，设计出与 Windows 11 一致的 GUI 界面，为用户带来更加统一和舒适的体验。

#### 总结

以上介绍了三种比较热门的 tkinter 主题扩展库：ttkbootstrap，CustomTkinter 和 Sun-Valley-ttk-theme。

这些库都提供了丰富的主题样式和灵活的界面定制功能，帮助开发者实现个性化的 GUI 界面设计。无论是基于 Bootstrap 的现代化样式、具有高度可定制性的界面设计，还是逼真的 Windows 11 风格主题样式，这些主题扩展库都为 tkinter 开发者提供了更多的选择和创作空间。

## EasyGUI：简化 Python GUI 编写流程

**GitHub**：https://github.com/robertlugg/easygui/

**官方教程地址**：https://easygui.readthedocs.io/

### 引言

> 在 Python 编程中，编写图形用户界面（GUI）往往是一项很有挑战的任务。今天介绍的为 EasyGUI，是一个 Python 的开源应用程序模块，可以帮助我们轻松地实现简单、易于使用的 GUI 编程。与其他 GUI 库不同，EasyGUI 不依赖于事件驱动，只需要进行简单的函数调用即可实现所有的 GUI 交互。

### 1. 什么是 EasyGUI？

> EasyGUI 是一个 Python 中非常简单、非常易用的 GUI 编程模块。它提供了一系列函数，让我们能够轻松地创建对话框、按钮、输入框等常见的 GUI 组件，而无需深入学习复杂的 GUI 编程概念和 API。

### 2. EasyGUI 的特点

- **简单易用**：EasyGUI 的设计理念是尽量简化 GUI 编程，使每个函数调用都能直观地完成某个 GUI 交互操作，无需繁琐的事件处理和回调函数。
- **跨平台支持**：EasyGUI 可以在多个平台上运行，包括 Windows、Linux 和 Mac OS 等。
- **丰富的 GUI 组件**：EasyGUI 提供了多种常见的 GUI 组件，如按钮、输入框、下拉菜单等，以满足不同的用户交互需求。
- **可定制化**：尽管 EasyGUI 的目标是简单易用，但它也提供了一定程度的定制化选项，可以让用户根据自己的需要进行个性化设置。

### 3. 使用 EasyGUI 创建 GUI 应用程序

要使用 EasyGUI 创建 GUI 应用程序，首先需要安装 EasyGUI 模块。在 Python 环境中，可以通过以下命令进行安装：

```bash
pip install easygui
```

安装完成后，我们就可以在 Python 代码中引入 EasyGUI 模块，并开始使用它提供的函数来创建 GUI。

以下是一个使用 EasyGUI 创建一个简单对话框的示例代码：

```python
import easygui

message = "欢迎使用EasyGUI!"
title = "EasyGUI示例"
choices = ["按钮1", "按钮2", "按钮3"]
buttonbox_choice = easygui.buttonbox(message, title, choices)

easygui.msgbox("你选择了：" + buttonbox_choice)
```

在上述示例代码中，通过简单的函数调用，我们创建了一个带有按钮的对话框，并根据用户的选择显示相应的消息框。

### 4. EasyGUI 的应用场景

EasyGUI 适用于那些需要快速创建简单 GUI 界面的场景，比如：

- **学习 Python**：对于初学者来说，通过 EasyGUI 可以很好地理解和学习 Python 的 GUI 编程概念和基本操作。
- **快速原型开发**：如果你需要快速创建一个 GUI 原型来验证某个概念或展示某种功能，EasyGUI 是一个理想的选择。
- **辅助工具**：EasyGUI 还可以用作编写 Python 脚本的辅助工具，通过 GUI 交互操作来提高脚本的可操作性和易用性。

### 结论

> EasyGUI 是一个简单易用的 Python GUI 编程模块，通过简单的函数调用即可实现各种 GUI 交互操作。它的设计理念是使 GUI 编程变得简单而不失灵活性，适用于多个平台和多种应用场景。

## Evue：高性能跨全平台 GUI 框架，一次编写，多平台运行，包括 RTOS 平台

**项目地址**：https://github.com/scriptiot/evue

### 引言

随着计算机技术的不断发展，跨平台应用程序的需求也越来越迫切。为了满足开发人员的需求，Evue 问世了。Evue 是一款高性能的 GUI 框架，基于 HTML/CSS 技术，可以在 Windows、Linux、macOS、Web、iOS、Android 和 RTOS 等多个平台上运行。通过一次编写，即可实现多平台的运行，极大地提高了开发效率和应用程序的可移植性。

### 什么是 Evue？

Evue 是一款基于 HTML/CSS 的 GUI 框架，旨在实现跨平台的应用程序开发。它提供了丰富的 GUI 组件和功能，开发人员可以使用常见的 Web 技术（如 HTML 和 CSS）进行应用程序的界面设计和开发。通过 Evue，开发人员可以一次编写应用程序的界面和逻辑，然后在多个平台上进行部署和运行。

Evue 专门为 Python 或 JavaScript 快速开发应用程度而开发。有专门的 Python SDK 和 JavaScript SDK。

![图片](./Python框架.assets/640-1714220420978-56.webp)

### Evue 的特点

Evue 作为一款高性能的 GUI 框架，具有以下特点：

1. **跨平台运行**：Evue 可以在多个平台上运行，包括 Windows、Linux、macOS、Web、iOS、Android 和 RTOS 等。开发人员可以使用相同的代码和界面设计，在不同的平台上实现一致的用户体验。

   ![图片](./Python框架.assets/640-1714220420978-57.gif)

2. **基于 HTML/CSS 技术**：Evue 采用了常见的 Web 技术，如 HTML 和 CSS，作为开发界面的基础。这使得开发人员可以充分利用自己熟悉的技术栈进行应用程序开发，减少学习和迁移成本。

3. **高性能和响应速度**：Evue 注重性能优化，提供了高效的渲染引擎和响应机制，保证应用程序的流畅运行和快速响应。无论是在桌面还是移动设备上，用户都能够获得良好的使用体验。

4. **丰富的 GUI 组件库**：Evue 提供了丰富的 GUI 组件库，包括按钮、文本框、下拉框、表格等常用组件，以及图表、地图等高级组件。开发人员可以根据需要选择并定制这些组件，快速构建出符合需求的应用程序界面。

5. **可扩展性和定制化**：Evue 支持插件和扩展机制，开发人员可以根据自己的需求进行定制和扩展。无论是添加新的 GUI 组件，还是集成其他第三方库，都可以通过扩展机制轻松实现。

### 结论

Evue 是一款高性能的基于 HTML/CSS 的 GUI 框架，实现了跨平台的应用程序开发。Evue 基于常见的 Web 技术，提供了丰富的 GUI 组件和功能，同时注重性能优化和用户体验。如果您需要开发跨平台的应用程序，并希望减少开发成本和提高开发效率，不妨考虑一下 Evue 这个强大的框架。

## Python轻松打造移动应用：全面解析开发流程和必备库

### 导言

随着移动互联网时代的到来，移动端应用程序成为人们生活中不可或缺的一部分。而Python作为一种多用途的编程语言，也在移动端应用程序开发中发挥着越来越重要的作用。

本文将详细介绍Python开发移动端程序所需的库以及开发流程，帮助读者了解如何使用Python开发移动应用程序。

### 一、移动端开发概述

移动端应用程序是指可以在移动设备上运行的软件，包括iOS和Android平台上的应用。移动端应用程序的开发语言有多种选择，包括Java、Swift、Objective-C等。

而Python作为一种简洁、灵活的编程语言，在移动应用程序开发中也有着广泛的应用。

### 二、Python在移动端开发中的优势

- **简洁易读的语法**：Python具有简洁易读的语法，使得开发人员可以更快速地开发移动应用程序。
- **跨平台支持**：Python可以跨平台运行，开发人员可以使用同一套代码在不同平台上构建移动应用程序。
- **强大的第三方库支持**：Python拥有丰富的第三方库，能够满足移动应用程序开发中各种需求。

### 三、Python开发移动端程序所需的库

在Python开发移动端程序时，需要使用一些库来实现各种功能，包括UI设计、网络请求、数据库操作等。下面是一些常用的库：

**1. Kivy**

Kivy是一个用于快速开发应用程序的Python库，它支持跨平台，并提供丰富的UI组件，可以帮助开发人员快速构建移动应用程序的界面。

**2. PyQT**

PyQT是一个用于构建桌面和移动应用程序的Python库，它支持iOS和Android平台，并提供丰富的控件和功能，能够帮助开发人员实现复杂的移动应用程序。

**3. Requests**

在移动端应用程序中，通常需要与服务器进行数据交互，Requests是一个简洁、易用的Python库，可以帮助开发人员实现网络请求，并处理服务器返回的数据。

**4. SQLite**

SQLite是一个轻量级的数据库引擎，Python内置了对SQLite的支持，开发人员可以使用SQLite进行本地数据存储和操作。

**5. Buildozer**

Buildozer是一个用于打包和部署Python应用程序的工具，它可以帮助开发人员将Python应用程序打包成可以在iOS和Android平台上运行的安装包。

### 四、Python开发移动端程序的基本流程

**1. 确定应用需求**：首先需要明确应用的功能需求和用户需求，包括界面设计、数据交互、功能实现等。

**2. 使用Kivy或PyQT进行界面设计**：根据应用需求，使用Kivy或PyQT等库进行界面设计，包括布局、控件、事件处理等。

![image-20240526153418198](./Python框架.assets/image-20240526153418198.png)

**3. 使用Requests进行网络请求**：如果应用需要与服务器进行数据交互，可以使用Requests库实现网络请求，并处理服务器返回的数据。

**4. 使用SQLite进行数据存储**：对于需要本地数据存储和操作的应用程序，可以使用SQLite进行数据库操作，包括数据插入、查询、更新、删除等操作。

**5. 使用Buildozer进行打包和部署**：最后，使用Buildozer工具将Python应用程序打包成可以在移动设备上运行的安装包，并进行部署和测试。

### 五、Python开发移动端程序的案例分析

以一个简单的移动应用程序为例，介绍Python开发移动端程序的具体实现过程。该应用程序是一个天气预报应用程序，包括界面展示实时天气情况、城市切换、天气预报查询等功能。

**1. 确定应用需求**：首先确定应用的功能需求，包括展示实时天气情况、城市切换、天气预报查询等功能。

**2. 使用Kivy进行界面设计**：利用Kivy库设计应用程序的界面，包括天气展示区域、城市切换控件、查询按钮等。

![image-20240526153432222](./Python框架.assets/image-20240526153432222.png)

**3. 使用Requests进行网络请求**：通过Requests库向天气预报接口发送请求，获取实时天气数据。

**4. 使用SQLite进行数据存储**：将查询过的天气数据保存到本地SQLite数据库中，以便离线查看。

**5. 使用Buildozer进行打包和部署**：最后使用Buildozer将应用程序打包成安装包，部署到iOS和Android平台，并进行测试。

### 总结

本文详细介绍了Python开发移动端程序所需的库、开发流程以及一个简单移动应用程序的实现案例。通过学习本文，读者可以了解如何使用Python开发移动应用程序，并在实际项目中应用所学到的知识。希望本文能帮助读者更好地利用Python开发移动端应用程序，提升开发效率，为移动互联网时代的发展做出贡献。

## Kivy：支持 安卓 和 iOS app 开发的 Python 开发框架

**一、移动端开发概述**

移动端应用程序是指可以在移动设备上运行的软件，包括 iOS 和 Android 平台上的应用。移动端应用程序的开发语言有多种选择，包括 Java、Swift、Objective-C 等。

而 Python 作为一种简洁、灵活的编程语言，在移动应用程序开发中也有着广泛的应用。

**二、Python 在移动端开发中的优势**

- **简洁易读的语法**：Python 具有简洁易读的语法，使得开发人员可以更快速地开发移动应用程序。
- **跨平台支持**：Python 可以跨平台运行，开发人员可以使用同一套代码在不同平台上构建移动应用程序。
- **强大的第三方库支持**：Python 拥有丰富的第三方库，能够满足移动应用程序开发中各种需求。

Kivy 是一个开源的用于快速开发应用程序的 Python GUI 库，它支持跨平台，并提供丰富的 UI 组件，专注于支持多点触摸和跨平台开发。它适用于开发移动应用程序和触摸屏设备上的 GUI 界面，可以帮助开发人员快速构建移动应用程序的界面。

Kivy 使用的是自己的 DSL 语言 Kv，可以实现界面和逻辑的分离，使得代码更加清晰易懂。但相对而言，Kivy 的文档和社区支持相对不足，学习曲线也较陡峭。

- **介绍**：Kivy 专为创新的用户界面而设计，支持多平台，包括 Android 和 iOS。
- **官网**：https://kivy.org/
- **开源地址**：https://github.com/kivy/kivy
- **优点**：跨平台，支持多点触摸应用，适用于自然用户界面。
- **缺点**：学习曲线较陡峭。
- **使用示例**：用于创新的用户界面。

### **什么是 Kivy？**

Kivy，这个闪耀的名字背后所代表的，不只是一个常规的 Python 库。

它是一件艺术品，一个为多平台触控应用创造的、崭露头角的框架。

与其他图形用户界面框架相比，Kivy 应用其独特的视角深入到导航的灵魂，彻底摒弃了传统界面，转而拥抱触控时代。

不仅是在个人电脑上，从安卓到 iOS，Kivy 都能帮助开发者在各种操作系统上畅游。

Kivy 框架的心脏是用 Python 和 Cython 编写的，它极大地富有特色和创造性，开发者们可以通过它快速地原型设计，并将应用程序部署到桌面、移动和嵌入式平台上。

所有这些，都是在对普通用户隐藏的 OpenGL ES 2.0 及其硬件加速特性的帮助下完成的。

作为一个领先的技术，Kivy 提供了一个细节丰富且可拓展的小组件库，所有的 Kivy 小组件都默认支持多点触控功能，使得多平台部署成为可能。

项目地址：**https://github.com/kivy/kivy**

### **安装 Kivy**

在进行它的安装之前，您需要确保您的 Python 环境已准备就绪。

Kivy 支持 Python 2.7 版本及 Python 3.5 及以上版本，满足了宽广的用户群体使用需求。

一旦您的 Python 环境配置无误，就可以用一个简单的 pip 命令来安装 Kivy：

```bash
pip install kivy
```

如果您在安装时遇到任何问题，或者想要针对具体平台进行安装，Kivy 的官方文档中有详尽的安装指导可以参考。

### **Kivy 的基本功能**

Kivy 的魔法在于它实现的功能不仅基础且强大。

这里，我们将遍历一些在触控应用开发中必不可少的基础特性。

#### **快速入门**

一旦安装完毕，Kivy 就准备好迎接您的第一个应用。

让我们先从令人兴奋的 "Hello, Kivy" 开始：

```python
from kivy.app import App
from kivy.uix.button import Button

class TestApp(App):
    def build(self):
        return Button(text='Hello, Kivy')

TestApp().run()
```

上述代码非常简单：创建一个 App 类的子类，并实现 `build` 方法，返回一个简单的按钮。

运行它，立刻看见您的成果！

#### **触控响应**

重点来了——多点触控！在 Kivy，每个小组件都能响应触控事件。

试想以下代码：

```python
from kivy.app import App
from kivy.uix.widget import Widget

class MultiTouch(Widget):
    def on_touch_down(self, touch):
        if touch.is_double_tap:
            print('双次点击！')
        else:
            print('触控点：', touch.pos)

class TouchApp(App):
    def build(self):
        return MultiTouch()

TouchApp().run()
```

在这段代码中，我们创建了一个 Widget 子类，并重写了 `on_touch_down` 方法来处理触控事件，输出触控位置或者响应双击事件。

### **Kivy 的高级功能**

除了基础的小组件，Kivy 还灌注了更多高级的魔法。

#### **自定义小组件**

```python
from kivy.uix.widget import Widget
from kivy.graphics import Color, Ellipse

class MyPaintWidget(Widget):

    def on_touch_down(self, touch):
        color = (1, 1, 0)  # 黄色
        with self.canvas:
            Color(*color)
            d = 30.
            Ellipse(pos=(touch.x - d / 2, touch.y - d / 2), size=(d, d))

class PaintApp(App):
    def build(self):
        return MyPaintWidget()

PaintApp().run()
```

自定义你自己的小组件——这里是一个简单的画板应用：

触碰屏幕，画出一个黄色的圆。

### **练习: 亲手试试 Kivy**

现在轮到您动手了。

我的建议是开始尝试为您的应用自定义一个小组件。

想想看，您的第一个 Kivy 小组件可能是什么？一个天气应用、一款小游戏或者是一个计算机？无论是什么，都可以在 Kivy 的多彩世界中实现哦！

### **结语：触摸未来**

今天，我们一起简单了解了一下如何使用 Kivy，这个强大的多点触控应用开发工具。限于篇幅，只能走马观花，了解更多信息，请参见 Kivy 官方文档：**https://www.kivy.org/docs**

### Requests

在移动端应用程序中，通常需要与服务器进行数据交互，Requests 是一个简洁、易用的 Python 库，可以帮助开发人员实现网络请求，并处理服务器返回的数据。

### SQLite

SQLite 是一个轻量级的数据库引擎，Python 内置了对 SQLite 的支持，开发人员可以使用 SQLite 进行本地数据存储和操作。

### Buildozer

Buildozer 是一个用于打包和部署 Python 应用程序的工具，它可以帮助开发人员将 Python 应用程序打包成可以在 iOS 和 Android 平台上运行的安装包。

## 基于 Python 的跨平台应用程序界面设计工具：Kivy Designer

**项目地址**：https://github.com/kivy/kivy-designer

### 一、简介

Kivy Designer 是一款基于 Python 的跨平台应用程序界面设计工具，主要用于创建具有触摸友好性的界面。随着触摸设备的普及，Kivy Designer 应运而生，为开发者提供了一个便捷、高效的设计平台。Kivy 是一款用于开发多平台交互应用的库，而 Kivy Designer 则是其官方推出的界面设计工具。

### 二、BuiltWith

Kivy Designer 主要依赖于以下技术和库：

1. **Python：** Kivy Designer 的使用场景主要集中在 Python 开发领域。Python 的简洁语法和丰富库资源为 Kivy Designer 提供了良好的开发环境。

2. **Kivy：** Kivy 是一款用于开发多平台交互应用的库，提供了触摸屏友好型的 UI 组件和事件处理功能。Kivy 为 Kivy Designer 的设计提供了基础。

3. **Platform：** Kivy Designer 支持多种操作系统，如 Windows、macOS、Linux 和 Android 等。开发者可以根据需求选择合适的平台进行界面设计。

### 三、功能和特性

Kivy Designer 具备以下主要功能和特性：

1. **可视化设计：** Kivy Designer 提供了直观的可视化界面，使开发者可以轻松地拖拽、组合组件，快速设计出触摸友好的界面。
2. **丰富的组件库：** Kivy Designer 内置了丰富的 UI 组件，如按钮、文本框、滑块、进度条等，满足各类应用场景的需求。
3. **布局管理：** Kivy Designer 支持多种布局方式，如网格布局、箱式布局等。开发者可以根据需求灵活调整界面布局。
4. **主题和样式：** Kivy Designer 支持自定义主题和样式，使界面更具个性化和吸引力。
5. **跨平台兼容：** Kivy Designer 生成的代码可兼容多种平台，确保应用程序在各种设备上具有良好的性能和用户体验。
6. **代码生成：** Kivy Designer 可以根据设计自动生成 Python 代码，减少开发者编写代码的工作量。

### 四、应用场景

Kivy Designer 适用于以下场景：

1. **移动应用开发：** 适用于开发 Android、iOS 等移动平台的应用程序，尤其是触摸屏设备。
2. **桌面应用开发：** 用于开发 Windows、macOS 等桌面平台的应用程序。
3. **物联网设备：** 适用于触摸屏物联网设备的界面设计，如智能家居控制系统等。
4. **教育与培训：** Kivy Designer 的易用性和跨平台特性使其成为教育与培训领域的一个优质选择。

### 五、优势

跨平台兼容性：Kivy Designer 可以在多种操作系统和设备上运行，提高了开发效率。

1. 丰富的组件库：内置了丰富的 UI 组件，降低了开发者的开发成本。
2. 易用性：直观的可视化界面和拖拽式设计，降低了学习门槛。

### 总结

Kivy Designer 作为一款基于 Python 的跨平台界面设计工具，在移动应用、物联网等领域具有广泛的应用前景。其丰富的组件库、可视化设计和跨平台兼容性为开发者提供了便捷、高效的开发环境。

## KivyMD：Material Design新宠儿

**项目地址**：https://github.com/kivymd/KivyMD

### 什么是KivyMD

KivyMD是一个与Kivy框架兼容的Material Design风格的小部件集合，用于创建跨平台、触摸屏图形应用程序。

![image-20240517185539125](./Python框架.assets/image-20240517185539125.png)

### Kivy介绍

Kivy是一个用Python编写的开源的跨平台GUI库，支持多点触控、手势处理等特性，适用于移动设备、个人电脑和大屏幕交互界面。Kivy框架使用了OpenGL ES来渲染图形，并在各种主流操作系统上运行。

### KivyMD的出现

KivyMD是在Kivy框架的基础上开发的，旨在提供符合Material Design规范的UI组件，让开发者能够更轻松地构建漂亮、流畅的应用程序。

### KivyMD的特点

1. Material Design风格：KivyMD的小部件库完全遵循Material Design设计原则，包括卡片、按钮、文本输入框等，让应用看起来更加现代和整洁。
   ![image-20240517185619252](./Python框架.assets/image-20240517185619252.png)
2. 跨平台支持：KivyMD兼容各种主流操作系统，包括Android、iOS、Windows、macOS等，开发者只需编写一次代码就可以在多个平台上运行。
3. 灵活性：KivyMD提供了丰富的小部件和布局选项，开发者可以根据自己的需求定制界面风格和布局方式，实现个性化的设计。
4. 响应式设计：KivyMD的小部件可以自动适应不同屏幕大小和分辨率，确保应用在各种设备上都能呈现出最佳的用户体验。
5. 动画效果：KivyMD支持丰富的动画效果，包括过渡动画、点击反馈等，为用户提供更加生动、流畅的交互体验。

### KivyMD的使用

1.安装KivyMD：开发者可以通过pip安装KivyMD库，也可以直接从GitHub源代码安装最新版本。

```
pip install kivymd
```

2.导入KivyMD：在Python代码中导入KivyMD库，并根据需要引入所需的小部件或模块。

```
from kivymd.app import MDApp
from kivymd.uix.button import MDRaisedButton
```

3.创建应用程序：编写KivyMD应用程序的界面布局和交互逻辑，可以使用各种小部件和布局管理器来构建界面。

```
class MyApp(MDApp):
    def build(self):
        button = MDRaisedButton(text='Hello, KivyMD', pos_hint={'center_x': 0.5, 'center_y': 0.5})
        return button
```

4.运行应用程序：在终端中运行Python代码，启动KivyMD应用程序，并在屏幕上显示界面。

```
python main.py
```

![image-20240517185727869](./Python框架.assets/image-20240517185727869.png)

### 总结

KivyMD是一个强大的Material Design风格的小部件集合，为开发者提供了丰富的工具和资源，帮助他们快速构建漂亮、现代的跨平台应用程序。通过KivyMD，开发者可以实现高度定制化的界面设计，提升用户体验和应用价值。如果你是一个Kivy开发者，不妨尝试使用KivyMD来打造更加吸引人的应用吧！



## KivyMD移动APP开发例程

Github地址：https://github.com/AryanSharma5/WhatsApp-Clone

## KivyStudioDesigner：Kivy 的 UI 设计工具，Kivy designer 的非官方升级版

**Github 地址**：https://github.com/Heitor-Tasso/KivyStudioDesigner

Kivy Studio Designer 是 Kivy designer 的非官方升级版，由于 Kivy designer 代码较老且停止更新，可以尝试一下\*Kivy Studio Designer。

### 简介

Kivy 是一个开源的 Python GUI 开发框架，用于创建跨平台的应用程序。它提供了丰富的小部件库和跨平台支持，使开发人员能够轻松地构建各种 GUI 应用程序。然而，对于一些开发人员来说，使用代码创建和布局小部件可能会有些困难。这就是 Kivy Studio Designer 的用武之地。

![图片](./Python框架.assets/640-1714231161188-285.webp)

### 什么是 Kivy Studio Designer？

_Kivy Studio Designer 是一个用户友好的工具，旨在帮助开发人员通过直观的界面设计 Kivy 应用程序的 GUI。使用这个工具，您无需编写繁琐的代码，只需通过简单的拖放和配置操作即可创建和布局小部件。它提供了一种可视化的方式来设计和定制 Kivy 应用程序的用户界面，使开发过程变得更加快速和高效。_

### 功能特点

- **可视化设计：** Kivy Studio Designer 提供了一个直观的界面，允许用户通过拖放操作在画布上布局小部件。您可以轻松地添加、移动和调整小部件的位置和大小，以及设置它们的属性和样式。
- **小部件库：** 工具内置了一个广泛的小部件库，包含了常用的 GUI 元素，如按钮、标签、输入框、滑块等。您可以从库中选择适合您应用程序需求的小部件，并将其添加到画布上。
- **属性编辑器：** Kivy Studio Designer 提供了一个属性编辑器，允许您轻松地编辑小部件的属性和样式。您可以通过简单的界面设置小部件的文本、颜色、字体大小、边框等属性，以满足您的设计需求。
- **实时预览和测试：** 在设计过程中，您可以实时预览和测试您的 GUI。Kivy Studio Designer 提供了一个实时预览窗口，显示您设计的界面的效果。您可以在预览窗口中交互测试小部件的功能和布局。
- **完全基于 Python 和 Kivy：** Kivy Studio Designer 完全使用 Python 和 Kivy 编写，因此它与 Kivy 的整合非常紧密。您可以直接在工具中编写和调试 Python 代码，以进一步定制和扩展您的应用程序。

**总结**

Kivy Studio Designer 是一个强大而易于使用的工具，为开发人员提供了一个可视化设计 Kivy 应用程序 GUI 的方式。它简化了小部件的创建和布局过程，减少了编写大量代码的工作量。通过 Kivy Studio Designer，开发人员可以更快速地构建出精美、功能强大的跨平台应用程序。如果您是一位 Kivy 开发人员，这个工具绝对值得一试！

## Flet：用 Python 轻松构建实时 Web、移动和桌面应用的开源项目

### 引言

在当今快速发展的技术环境中，开发人员不断寻求高效且用户友好的工具来创建创新的应用程序。Flet 作为一个开源项目，在应用开发领域引起了巨大的变革。本文旨在全面介绍 Flet，重点介绍其解决的问题、功能特点、安装和使用方法、示例以及应用场景。

### 解决的问题

传统的应用开发往往需要前端开发经验，这对于一些后端开发者来说可能是一项挑战。然而，Flet 通过提供一个简单易用的框架，使得开发人员能够在 Python 中轻松构建实时 Web、移动和桌面应用程序，无需前端开发经验。这大大降低了开发的门槛，使得更多的人可以参与到应用程序的开发中来。

### 功能

Flet 具有以下主要功能：

1. 实时应用开发：Flet 提供了强大的功能，使开发人员能够构建实时的 Web、移动和桌面应用。它支持实时数据传输和实时事件处理，使应用程序能够实时响应用户操作和数据变化。
2. Python 开发环境：Flet 使用 Python 作为主要的开发语言，这对于熟悉 Python 的开发人员来说非常方便。开发人员可以利用 Python 丰富的生态系统和库来构建应用程序，并享受 Python 的简洁和易用性。
3. 无需前端经验：Flet 的设计理念是让后端开发人员能够轻松构建实时应用，无需具备前端开发经验。它提供了简单而直观的 API 和组件，使开发人员能够专注于业务逻辑的实现，而无需关注复杂的前端技术。

### 安装和使用方法

安装 Flet 非常简单。只需按照以下步骤进行操作即可：

1.确保你的机器上已经安装了 Python。

2.打开命令行工具，并输入以下命令来安装 Flet：

```bash
pip install flet
```

3.安装完成后，你就可以开始使用 Flet 来构建实时应用了。

### 示例

下面是一个简单的示例，展示了如何使用 Flet 来构建一个实时 Web 应用：

```python
from flet import FletApp, FletPage

app = FletApp()

@app.route('/')
class HomePage(FletPage):
    def get(self):
        return 'Hello, Flet!'

if __name__ == '__main__':
    app.run()
```

上述示例代码创建了一个名为`HomePage`的页面，并在访问根路径时返回"Hello, Flet!"的消息。通过运行应用程序，你可以在浏览器中访问该页面，并实时查看到修改。

### 应用场景

Flet 适用于各种应用场景，包括但不限于：

1. 实时协作应用：你可以使用 Flet 构建具有实时协作功能的应用程序，例如团队协作工具、实时编辑器等。
2. 即时通讯应用：Flet 提供了强大的实时通信功能，使得构建即时通讯应用变得轻松而高效。
3. 实时数据监控和可视化：通过 Flet，你可以实时监控和可视化各种数据，例如传感器数据、实时报告等。

总之，Flet 为开发人员提供了一个强大而简单的工具，使他们能够轻松构建实时 Web、移动和桌面应用程序，无需前端开发经验。无论是构建实时协作应用、即时通讯应用还是实时数据监控和可视化，Flet 都是一个值得尝试的工具。通过使用 Flet，你可以更快地将创意转化为实际的应用程序，并为用户提供更好的体验。

### 开源示例

[cuifengcn/TAICHI-flet: 基于 flet 的一款 windows 桌面应用，实现了浏览图片、音乐、小说、漫画、各种资源的功能。 (github.com)](https://github.com/cuifengcn/TAICHI-flet)

介绍：[开源一站式资源天堂：TAICHI-flet，图片、音乐、小说、漫画，应有尽有 (qq.com)](https://mp.weixin.qq.com/s/mNmnAVGZ6G6QVy4JWJS0mw)

## Phoenix：全新的 wxPython 实现，比以前更好、更强、更快

wxPython 是一个跨平台的 Python GUI 库，基于 C++库 wxWidgets。它拥有丰富的小部件和控件，支持定制化程度非常高。wxPython 采用了完全的本地控件，使得应用程序在不同操作系统上具有良好的原生性。但相对而言，wxPython 的学习曲线可能较陡峭，不太适合初学者。

- **官网**：[欢迎来到 wxPython！ |wxPython](https://www.wxpython.org/)
- **GitHub**：https://github.com/wxWidgets/Phoenix/
- **社区**：[讨论 wxPython - wx 人帮助 wx 人](https://discuss.wxpython.org/)

- **优点**: 跨平台，丰富的小部件集合。
- **缺点**: 学习曲线较陡峭。
- **使用示例**: 用于本地用户界面的开发。

wxPython 的 Phoenix 项目是一个重要的开源项目，它旨在为 Python 开发者提供一个强大、灵活且易于使用的图形用户界面（GUI）工具包。该项目是对原始 wxPython 的全新实现，通过改进和增强其功能，使其更加出色。

我们将详细介绍 Phoenix 项目，探索其特点、优势和用途。

### 1. Phoenix 项目简介

Phoenix 项目是 wxPython 社区在原始 wxPython 项目基础上的重大更新。

它的目标是提供一个现代化的、与时俱进的 GUI 工具包，以满足当今 Python 开发者的需求。Phoenix 项目采用了许多新技术和改进，使其在性能、功能和可扩展性方面都有显著的提升。

### 2. 功能和改进

Phoenix 项目在多个方面进行了功能和改进的增强，使得 wxPython 成为一个更强大、更灵活的工具。以下是一些 Phoenix 项目的主要功能和改进：

**a. 改进的性能：** Phoenix 项目针对原始 wxPython 的性能进行了优化，提高了 GUI 应用程序的响应速度和效率。这使得开发者能够构建更快速、更流畅的用户界面。

**b. 新增的控件和小部件：** Phoenix 项目引入了许多新的控件和小部件，丰富了开发者的工具箱。这些新的控件和小部件提供了更多的选择，使开发者能够创建更富有创意和功能性的用户界面。

![图片](./Python框架.assets/640-1714068265130-1.webp)

**c. 兼容性和跨平台支持：** Phoenix 项目着重解决了原始 wxPython 在不同平台上的兼容性问题。它提供了更好的跨平台支持，使开发者能够轻松地在不同操作系统上开发和部署他们的应用程序。

**d. 改进的文档和示例：** Phoenix 项目还提供了全面且易于理解的文档和示例，帮助开发者更快地上手和使用 wxPython。这些资源使学习和开发过程更加简单和高效。

### 3. Phoenix 项目的优势

Phoenix 项目相比于原始 wxPython 有许多明显的优势，使其成为 Python 开发者的首选 GUI 工具包。以下是一些 Phoenix 项目的主要优势：

**a. 现代化的界面：** Phoenix 项目提供了现代化的用户界面，支持各种样式和主题。开发者可以轻松地创建具有吸引力和专业外观的应用程序界面。

**b. 良好的性能：** Phoenix 项目通过优化和改进，提供了更快速、更高效的性能。这使得开发者能够构建出响应迅速且流畅的应用程序。

![图片](./Python框架.assets/640-1714068265130-2.webp)

**c. 多平台支持：** Phoenix 项目具有良好的跨平台支持，可在各种操作系统上运行。开发者可以在不同的平台上开发和部署应用程序，而无需担心兼容性问题。

**d. 强大的社区支持：** Phoenix 项目依托于活跃的 wxPython 社区，拥有庞大的用户群体和丰富的资源。开发者可以从社区中获得支持、解决问题和分享经验。

### 4. Phoenix 项目的应用场景

Phoenix 项目适用于各种应用场景和项目类型。无论是开发桌面应用程序、数据可视化工具还是科学计算应用，Phoenix 项目都能提供强大的功能和灵活性。以下是一些 Phoenix 项目的应用场景：

**a. 桌面应用程序开发：** Phoenix 项目可以用于构建各种类型的桌面应用程序，包括文本编辑器、图像处理工具、音频视频播放器等。开发者可以利用 Phoenix 项目的丰富控件库和界面定制选项，创建出功能强大且易于使用的应用程序。

**b. 数据可视化：** Phoenix 项目提供了各种图表和绘图工具，可以帮助开发者将数据可视化为图表、图形和图像。这对于数据分析、科学研究和业务报告非常有用。

![图片](./Python框架.assets/640-1714068265131-3.webp)

**c. 游戏开发：** Phoenix 项目提供了游戏开发所需的各种工具和功能，包括图形渲染、用户输入处理和动画效果等。开发者可以借助 Phoenix 项目构建出各种类型的游戏应用。

**d. 科学计算应用：** Phoenix 项目对于科学计算应用也非常适用，提供了数值计算、数据分析和可视化的功能。它可以与其他 Python 科学计算库（如 NumPy 和 SciPy）结合使用，实现复杂的科学计算任务。

### 结论

Phoenix 项目是一个重要的开源项目，为 Python 开发者提供了一个全新、强大且现代化的 wxPython 实现。通过改进性能、增加新的控件和小部件，以及提供跨平台支持，Phoenix 项目成为 Python 开发者构建图形用户界面的首选工具包之一。不论是开发桌面应用程序、数据可视化工具还是科学计算应用，Phoenix 项目都能提供出色的功能和灵活性，满足各种项目需求。

### Python+wxPython 打造跨平台的下载工具：youtube-dl-gui

项目地址：https://github.com/MrS0m30n3/youtube-dl-gui

![图片](./Python框架.assets/640-1714242402854-797.gif)

## PySimpleGUI(开始收费了)

- **介绍**：PySimpleGUI 专为简化 Python 初学者的 GUI 开发而设计，支持多个底层框架。
- **官网**：https://www.pysimplegui.com/
- **开源地址**：https://github.com/PySimpleGUI/PySimpleGUI
- **优点**：简化 GUI 开发，适合初学者。
- **缺点**：功能相对简单。
- **使用示例**：快速创建直观的用户界面。

### 简介

> PySimpleGUI 是一个简单且易于使用的 Python GUI 开发工具，它旨在为程序员提供一种简化 GUI 应用程序开发的解决方案。通过提供直观的接口和丰富的控件，PySimpleGUI 使得开发者能够快速构建出功能强大、优雅美观的图形用户界面。

### 功能和特点

1. **简单易用**：PySimpleGUI 的设计理念是使 GUI 开发过程变得简单、直观且易于上手。它采用了类似于布局语言的方式，让代码可读性更高，易于理解和维护。

2. **多样化控件**：PySimpleGUI 提供了丰富的内置控件，例如按钮、文本输入框、下拉菜单等等。同时，它还支持扩展和自定义控件，以满足多种应用需求。

3. **跨平台支持**：PySimpleGUI 可以在多个操作系统上运行，如 Windows、macOS 和 Linux 等，增强了开发者的灵活性和可移植性。

4. **多种 GUI 风格**：PySimpleGUI 支持多种不同的 GUI 风格，如 Tkinter、QT 和 WxPython 等，可根据开发者的需要选择最合适的风格。

   ![图片](./Python框架.assets/640-1714232458768-318.webp)

5. **事件驱动编程**：PySimpleGUI 采用事件驱动的方式处理用户操作，使得响应按钮点击、文本输入等交互行为变得轻而易举。

### **安装使用和示例**

要开始使用 PySimpleGUI，可以通过 pip 工具进行安装，命令如下：

```bash
pip install PySimpleGUI
```

以下是一个简单的 PySimpleGUI 示例代码，创建一个包含按钮和文本框的窗口：

```python
import PySimpleGUI as sg

layout = [
    [sg.Text('欢迎使用PySimpleGUI')],
    [sg.Button('点击我')],
    [sg.Output(size=(40, 10))],
]

window = sg.Window('简单窗口', layout)

while True:
    event, values = window.read()
    if event == sg.WINDOW_CLOSED or event == '退出':
        break
    if event == '点击我':
        print('你点击了按钮！')

window.close()
```

代码运行结果如下图，每点一下按钮就会输出一次“你点击了按钮！”

![图片](./Python框架.assets/640-1714232458768-319.webp)

### PySimpleGUI 的官方 demo

PySimpleGUI 官方提供了 demo，可以通过 pip 工具进行安装，命令如下：

```bash
pip install psgdemos
```

在命令行中输入：psgdemos，打开官方 demo。这个 demo 中包括几十个例子，可以直接点击查看运行结果。

![图片](./Python框架.assets/640-1714232458768-320.webp)

### 应用场景

PySimpleGUI 适用于各种应用场景，包括但不限于：

- **快速原型开发**：利用 PySimpleGUI 的简单易用性和丰富的控件，可以快速搭建出原型界面，验证和展示想法。
- **数据分析和可视化**：PySimpleGUI 提供了图表、表格等高级控件，可以方便地展示和分析数据，使得数据科学家能更高效地工作。
- **自动化工具**：通过 PySimpleGUI 创建的图形界面，可用于构建各种自动化工具，提升工作效率。
- **游戏开发**：PySimpleGUI 支持在 UI 界面中添加图形元素，使得程序员能够快速开发简单的游戏。

### 优势

1. **简单易用**：相较于其他 GUI 开发工具，PySimpleGUI 的语法更加简洁明了，使得 GUI 开发变得简单易用。
2. **学习曲线低**：PySimpleGUI 提供了详细的文档和大量示例代码，新手也可以快速上手，快速掌握工具并进行 GUI 开发。
3. **跨平台支持**：PySimpleGUI 可以在多个主流操作系统上运行，无需针对不同平台编写冗长的代码。
4. **庞大社区支持**：由于 PySimpleGUI 受到开发者社区的广泛欢迎，因此有着庞大的用户群体和活跃的社区支持，能够获得迅速的帮助和解决问题。

### 总结

PySimpleGUI 是一个强大而易于使用的 Python GUI 开发工具，旨在帮助程序员快速构建出优秀的图形用户界面。其简单易用的特点、丰富多样的控件和跨平台支持使得 PySimpleGUI 成为开发者的首选。不论是快速原型开发、数据分析可视化还是自动化工具的开发，PySimpleGUI 都能为程序员带来巨大的便利和效率提升。

## FreeSimpleGUI：免费的图形用户界面库，PysimpleGUI 的替代者

**项目地址**：https://github.com/spyoungtech/FreeSimpleGUI

### 什么是 FreeSimpleGUI？

FreeSimpleGUI 是一个开源的图形用户界面库，旨在提供一个简单、易用的 GUI 解决方案。它是 PysimpleGUI 的替代者，具有相同的功能和易用性，但不同的是 FreeSimpleGUI 是完全免费的，不需要任何付费许可证。

### FreeSimpleGUI 的特点

FreeSimpleGUI 具有以下特点：

- **简单易用**：FreeSimpleGUI 的 API 设计非常简单易用，任何人都可以轻松地使用它来创建 GUI 应用程序。
- **免费**：FreeSimpleGUI 是完全免费的，不需要任何付费许可证，可以自由地使用和分发。
- **跨平台**：FreeSimpleGUI 支持多种平台，包括 Windows、MacOS 和 Linux 等。
- **高性能**：FreeSimpleGUI 具有高性能，能够快速地渲染和响应用户交互。
- **灵活**：FreeSimpleGUI 提供了多种自定义选项，允许开发者根据需要进行自定义和调整。

### FreeSimpleGUI 的应用场景

FreeSimpleGUI 可以应用于各种场景，包括：

- **桌面应用程序**：FreeSimpleGUI 可以用于创建桌面应用程序，例如文本编辑器、图片浏览器等。
- **科学计算**：FreeSimpleGUI 可以用于创建科学计算应用程序，例如数据分析、可视化等。
- **游戏开发**：FreeSimpleGUI 可以用于创建游戏，例如小游戏、益智游戏等。
- **机器人自动化**：FreeSimpleGUI 可以用于创建机器人自动化应用程序，例如机器人控制台等。

### 如何使用 FreeSimpleGUI？

使用 FreeSimpleGUI 非常简单，只需要按照以下步骤进行：

1. **安装 FreeSimpleGUI**：使用 pip 安装 FreeSimpleGUI，命令为`pip install FreeSimpleGUI`。
2. **导入 FreeSimpleGUI**：在 Python 代码中导入 FreeSimpleGUI，例如`import FreeSimpleGUI as sg`。
3. **创建 GUI 应用程序**：使用 FreeSimpleGUI 的 API 创建 GUI 应用程序，例如创建窗口、按钮、文本框等。
4. **运行应用程序**：运行应用程序，例如`sg.main()`。

### FreeSimpleGUI 的优点

FreeSimpleGUI 具有以下优点：

- **免费**：FreeSimpleGUI 是完全免费的，不需要任何付费许可证。
- **简单易用**：FreeSimpleGUI 的 API 设计非常简单易用，任何人都可以轻松地使用它来创建 GUI 应用程序。
- **高性能**：FreeSimpleGUI 具有高性能，能够快速地渲染和响应用户交互。

### 结论

FreeSimpleGUI 是一个非常优秀的图形用户界面库，提供了一个简单、易用的 GUI 解决方案。它是 PysimpleGUI 的替代者，具有相同的功能和易用性，但不同的是 FreeSimpleGUI 是完全免费的，不需要任何付费许可证。

## NanoGUI：极简主义的 C++/Python 图形用户界面库

**项目地址**：https://github.com/mitsuba-renderer/nanogui

### 简介

NanoGUI 是一个轻量级、开源的图形用户界面 (GUI) 库，专为使用 OpenGL、GLES2/3、Metal 或 WebAssembly/WebGL 的应用程序而设计。它提供了一个最小且高效的界面，使开发人员能够轻松创建交互式和用户友好的用户界面。NanoGUI 的跨平台兼容性使其适用于各种设备和平台。

NanoGUI 是一个基于 C++的 GUI 库，但提供了 Python 接口，在 Python 环境下可以直接 pip 安装。

![图片](./Python框架.assets/640-1714219338028-3.webp)

### 特性

- **轻量级和高效：**NanoGUI 的核心只有 12 个源文件，并且经过优化，以提供最佳性能。

- **跨平台：**NanoGUI 可以在 Windows、macOS、Linux、iOS、Android 和 Web 上使用。

- **易于使用：**NanoGUI 旨在易于使用，具有直观的 API 和丰富的文档。

- **现代界面：**NanoGUI 提供了现代且时尚的用户界面，具有各种小部件和主题。

- **可定制：**可以通过主题系统和自定义小部件轻松定制 NanoGUI 的外观和行为。

  ![图片](./Python框架.assets/640-1714219338028-4.webp)

### **主要优点**

- **易于集成：**NanoGUI 轻松集成到 OpenGL、GLES2/3、Metal 或 WebAssembly/WebGL 应用程序中。
- **高性能：**NanoGUI 针对性能进行了优化，并利用本机渲染技术。
- **跨设备兼容性：**NanoGUI 可以无缝地跨越台式机、移动设备和 Web 应用程序。
- **活跃社区：**NanoGUI 拥有一个积极的社区，提供持续的支持和改进。

### 应用场景

NanoGUI 适用于广泛的应用程序，包括：

- **3D 可视化：**可用于为 3D 模型和场景创建交互式界面。
- **游戏开发：**可以轻松集成到游戏引擎中，以创建游戏内菜单和 HUD。
- **科学计算：**可用于可视化和交互式操纵科学数据。
- **虚拟现实和增强现实：**可以与 VR 和 AR 头显一起使用，以创建沉浸式体验。
- **教育和演示：**可以用于创建交互式教程、演示和可视化工具。

### 与其他 GUI 库的比较

与其他 GUI 库相比，NanoGUI 以其轻量级、跨平台性和易用性而脱颖而出。它为需要出色性能和现代界面的应用程序提供了一个有吸引力的选择。

### 文档和教程

NanoGUI 提供了全面的文档和教程，指导开发人员使用该库。文档可在 GitHub 上查阅，并有大量的示例代码可供参考。官方文档中给出了 C++和 Python 例程，供大家学习和使用。

![图片](./Python框架.assets/640-1714219338028-5.webp)

### 结论

NanoGUI 是一个强大而灵活的 GUI 库，适用于需要最小化、跨平台和高性能界面设计的应用程序。其易用性和定制选项使其成为所有技能水平的开发人员的绝佳选择。从 3D 可视化到游戏开发，NanoGUI 提供了创建交互式和用户友好的应用程序所需的工具。

## FastUI：打造高效 UI 界面的利器

Python FastUI 是一个基于 Python 语言的快速 UI 界面开发工具，它可以帮助开发者快速构建出漂亮、高效的用户界面，让用户体验更加流畅。本文将详细介绍 Python FastUI 的开发和使用教程，帮助读者快速上手并提升开发效率。

### 一、安装 Python FastUI

首先，我们需要安装 Python FastUI 库。可以通过 pip 工具来进行安装，命令如下：

```python
pip install python-fastui
```

安装完成后，我们就可以开始使用 Python FastUI 来开发 UI 界面了。

### 二、创建 UI 界面

接下来，我们将创建一个简单的 UI 界面来演示 Python FastUI 的使用。首先，我们需要导入 Python FastUI 库：

```python
from fastui import App, Label, Button
```

然后，我们可以创建一个 App 对象，并向其中添加一些 UI 组件：

```python
app = App("My App")
label = Label("Hello, Python FastUI!")
button = Button("Click me")
app.add(label)
app.add(button)
app.run()
```

通过以上代码，我们创建了一个名为"My App"的应用，并向其中添加了一个标签和一个按钮。最后，调用 run()方法来运行应用。

### 三、UI 组件

Python FastUI 提供了多种 UI 组件，可以满足各种需求。下面是一些常用的 UI 组件及其用法：

1. Label：用于显示文本内容。

```python
label = Label("Hello, Python FastUI!")
```

2. Button：用于触发事件。

```python
button = Button("Click me")
```

3. Input：用于输入文本。

```python
input = Input()
```

4. Checkbox：用于选择项。

```python
checkbox = Checkbox("Check me")
```

5. Radio：用于单选项。

```python
radio = Radio(["Option 1", "Option 2", "Option 3"])
```

6. Dropdown：用于下拉选择。

```python
dropdown = Dropdown(["Option 1", "Option 2", "Option 3"])
```

### 四、事件处理

除了创建 UI 界面外，Python FastUI 还支持事件处理。我们可以通过绑定事件来实现一些交互操作。下面是一个简单的示例：

```python
def on_button_click():
    label.text = "Button clicked!"
button.on_click = on_button_click
```

在上面的代码中，我们定义了一个 on_button_click()函数，当按钮被点击时，标签的文本内容将被修改为"Button clicked!"。

### 五、布局管理

Python FastUI 还提供了布局管理功能，可以帮助我们更好地组织 UI 组件。下面是一个简单的布局示例：

```python
from fastui import VBox, HBox
vbox = VBox()
hbox = HBox()
vbox.add(label)
vbox.add(button)
hbox.add(checkbox)
hbox.add(radio)
app.add(vbox)
app.add(hbox)
```

在上面的代码中，我们创建了一个垂直布局和一个水平布局，将 UI 组件按照指定的方向进行排列。

### 六、总结

通过本文的介绍，我们了解了 Python FastUI 的基本用法，包括安装、创建 UI 界面、使用 UI 组件、事件处理和布局管理等。Python FastUI 是一个功能强大、易用的 UI 界面开发工具，可以帮助开发者快速构建出漂亮、高效的用户界面。希望本文能够帮助读者更好地掌握 Python FastUI，并在实际项目中得到应用。

## Dear ImGui Bundle：轻松在 Python 和 C++中创建 ImGui 应用程序

- [imgui_bundle：Python和C++双语言支持的UI利器 (qq.com)](https://mp.weixin.qq.com/s/pwrtV7vGoli-7huLy4u2ZA)
- [Dear ImGui Bundle：轻松在Python和C++中创建ImGui应用程序 (qq.com)](https://mp.weixin.qq.com/s/xodfexF7AmtdSXYYjcB2jQ)

**项目地址**：https://github.com/pthom/imgui_bundle

### 简介

Dear ImGui Bundle 是一个全面的工具包，可简化使用流行的 Dear ImGui 图形用户界面 (GUI) 库在 Python 和 C++ 中创建应用程序的过程。它集成了各种有用的功能，包括：

- 预配置的项目模板，可快速启动开发

- 与 Python 和 C++ 集成的 ImGui 绑定

- 声音、文件和输入事件处理

- 扩展的布局和控件集

- 内置示例和教程

  ![图片](./Python框架.assets/640-1714220145606-41.webp)

### 优势

使用 Dear ImGui Bundle 有以下优势：

- **快速开发：**预配置的项目模板有助于快速启动应用程序开发。

- **跨平台支持：**适用于 Windows、macOS 和 Linux 平台。

- **自定义 GUI：**提供丰富的布局和控件，可创建独特的用户界面。

- **良好文档：**提供详细的文档和教程，以指导用户轻松上手。

  ![图片](./Python框架.assets/640-1714220145606-42.webp)

### 主要特性

#### 1. 预配置项目模板

Dear ImGui Bundle 提供了预配置的项目模板，可简化应用程序开发过程。这些模板包含必要的代码和设置，让用户可以专注于应用程序逻辑。

#### 2. Python 和 C++ 绑定

该工具包集成了与 Python 和 C++ 语言的 ImGui 绑定。它允许在两种语言中无缝使用 ImGui GUI 组件。用户可以借助 Python 的简洁和高效性，快速创建 ImGui 程序。

![图片](./Python框架.assets/640-1714220145606-43.webp)

#### 3. 声音、文件和输入事件处理

该工具包提供了对声音、文件和输入事件（如键盘和鼠标）的处理。它简化了应用程序与外部环境的交互。旨在帮助用户快速搭建高交互性的多媒体类应用程序。

#### 4. 扩展的布局和控件集

除了 ImGui 的标准布局和控件外，该工具包还提供了扩展的控件集，增强了 GUI 的功能和灵活性。用户在这些控件集的帮助下，可以创建丰富多彩的应用程序。

![图片](./Python框架.assets/640-1714220145606-44.webp)

#### 5. 内置示例和教程

该工具包附带了大量的示例和教程，展示了如何使用 ImGui Bundle 创建各种应用程序。这些资源非常适合初学者和有经验的开发人员，快速掌握 ImGui Bundle 的用法和特性。

### 目标用户

Dear ImGui Bundle 非常适合希望使用 Dear ImGui 创建跨平台 GUI 应用程序的开发者，无论他们使用 Python 还是 C++。它特别适用于：

- 游戏开发人员

- 数据可视化专家

- 用户界面设计师

- 学生和爱好者

  ![图片](./Python框架.assets/640-1714220145606-45.webp)

### 安装

安装 Dear ImGui Bundle 非常简单，因为它即可以作为 Python 包也可以当作 C++ 库使用。

#### Python 下简捷的 pip 命令即可安装：

```bash
pip install imgui-bundle
```

#### C++ 下可以用 cmake 进行快速编译安装：

```bash
git clone https://github.com/pthom/imgui_bundle.git
cd imgui_bundle
mkdir build && cd build
cmake ..
make
```

### 简单的使用示例

#### Python 用法：

```python
from imgui_bundle import imgui

imgui.create_context()
imgui.begin_main_viewport()

# 创建文本输入框
imgui.text("文本输入框：")
text = imgui.input_text("", "默认文本")

# 渲染 GUI
imgui.render()
```

#### C++ 用法：

```c++
#include <imgui_bundle/imgui_bundle.h>

int main() {
  ImGuiBundle::Context context;
  context.init();

  context.begin_main_viewport();

  // 创建文本输入框
  ImGui::Text("文本输入框：");
  std::string text;
  ImGui::InputText("", &text, ImGuiInputTextFlags_EnterReturnsTrue);

  // 渲染 GUI
  context.render();

  return 0;
}
```

### 结论

Dear ImGui Bundle 是一个功能强大的工具，可简化在 Python 和 C++ 中创建 Dear ImGui 应用程序的过程。它集成了各种功能，帮助用户快速开发跨平台、定制化的图形用户界面。

## Pyimgui：轻量级 C++用户图形界面库 ImGui 的 Python 绑定

**项目地址**：https://github.com/pyimgui/pyimgui

### 简介

Pyimgui 是一个基于 Cython 的 Python 绑定层，它将功能强大的用户界面库 Dear ImGui 无缝集成到 Python 环境中。它使 Python 开发人员能够轻松地创建交互式图形用户界面 (GUI)，同时充分利用 Dear ImGui 的丰富功能集。

下图为用 Dear ImGui 开的 GUI:

![图片](./Python框架.assets/640-1714219534808-23.webp)Dear ImGui 是一个为游戏开发者设计的 GUI 工具，但它也可以用于其他类型的软件开发。它的主要目标是在程序中提供一个简单、快速的方式来创建和管理图形用户界面。Dear ImGui 的特点包括易于集成、小巧的代码库、无依赖性、简单的 API 和动态布局等。它已被广泛用于游戏开发、模拟器、编辑器和其他交互式的 3D 应用程序中。

### 主要特性

- 完整支持 Dear ImGui 的所有功能和特性，包括：

- - 实时渲染
  - 可定制的用户界面布局
  - 输入处理（鼠标、键盘、控制器）
  - 丰富的控件库（按钮、滑块、列表框等）

- 高性能

- 跨平台兼容性（包括 Windows、macOS 和 Linux）

- 无缝集成到 Python 生态系统中

  ![图片](./Python框架.assets/640-1714219534808-24.webp)

### 安装

要安装 Pyimgui，请使用 pip：

```bash
pip install pyimgui
```

### 快速入门

以下是一个简单的 Pyimgui 示例：

```python
import imgui

# 初始化 imgui 上下文（参见文档）
imgui.create_context()
# 设置显示大小（像素）
imgui.get_io().display_size = 100, 100
# 获取字体纹理数据
imgui.get_io().fonts.get_tex_data_as_rgba32()

# 开始新的一帧上下文
imgui.new_frame()

# 打开一个新的窗口上下文
imgui.begin("你的第一个窗口！", True)

# 在当前窗口内绘制文本标签
imgui.text("你好，世界！")

# 关闭当前窗口上下文
imgui.end()

# 将所有绘制命令传递给渲染管线
# 并关闭帧上下文
imgui.render()
imgui.end_frame()
```

### 进阶用法

Pyimgui 提供了广泛的功能，允许开发者创建复杂的图形用户界面。以下是一些进阶用法示例：

- **可定制的窗口**：可以使用自定义大小、位置和标志来创建窗口。

- **交互式控件**：可以拖动、调整大小和编辑各种控件，如滑块、滚动条和颜色选择器。

- **高级布局**：可以使用布局功能来组织和排列控件，创建复杂的用户界面。

- **数据绑定**：可以使用 pyimgui 将 Python 变量和对象绑定到 Dear ImGui 控件，实现交互性和数据可视化。

  ![图片](./Python框架.assets/640-1714219534808-25.webp)

### 示例应用程序

Pyimgui 社区创建了大量的示例应用程序，展示了其功能和潜力。其中一些应用程序包括：

- **图表绘制**：交互式图表，允许实时可视化和交互。

- **游戏编辑器**：用于快速原型设计和创建交互式游戏体验。

- **音乐合成器**：允许用户使用各种控件和参数创建和编辑音乐。

  ![图片](./Python框架.assets/640-1714219534808-26.webp)

### 与其他 GUI 库的比较

Pyimgui 与其他流行的 Python GUI 库相比具有以下优势：

- **轻量级**：它比其他库（如 PyQt）更轻量级，这使其非常适合实时应用程序。

- **高性能**：其基于 Cython 的绑定层提供了出色的性能，确保流畅的用户界面体验。

- **可定制性**：它提供了高度可定制的界面，允许开发者根据自己的需要微调用户界面。

  ![图片](./Python框架.assets/640-1714219534808-27.webp)

### 结论

Pyimgui 是一个强大的工具，它使 Python 开发人员能够轻松地创建交互式图形用户界面。其基于 Cython 的绑定层、跨平台兼容性和丰富的功能集使其成为各种应用程序的理想选择，从游戏和音乐合成器到数据可视化和高级编辑工具。

## PyForms：简化 Python GUI 开发的利器

**项目地址**：https://github.com/UmSenhorQualquer/pyforms

### 简介

今天我们介绍的 PyForms 是一个用于简化 Python GUI 开发的框架，它提供了丰富的功能和易于使用的 API，帮助开发者快速构建界面友好的应用程序。

![图片](./Python框架.assets/640-1714227989520-130.webp)

### 功能和使用方法

PyForms 提供了多种功能和使用方法，以下是 PyForms 的主要功能和使用方法：

1. 可视化界面设计：PyForms 提供了可视化界面设计方式，开发者可以通过拖拽和放置组件的方式设计界面，快速创建用户友好的应用程序。

2. 事件驱动编程：PyForms 支持事件驱动编程，开发者可以轻松地定义和处理用户的交互事件，实现应用程序的各种功能和逻辑。

3. 数据绑定：PyForms 支持数据绑定功能，开发者可以将界面组件与数据模型进行绑定，实现数据的自动更新和同步。

4. 多线程支持：PyForms 内置多线程支持，开发者可以在应用程序中使用多线程进行并发处理，提高应用程序的性能和响应速度。

5. 多平台支持：PyForms 可以运行在多个平台上，包括 Windows、Linux 和 MacOS 等，开发者可以在不同的平台上使用相同的代码进行开发和部署。

   ![图片](./Python框架.assets/640-1714227989521-131.webp)

### 应用场景

PyForms 适用于各种 Python GUI 开发场景，包括但不限于以下几个方面：

1. 数据可视化应用：PyForms 提供了丰富的可视化组件和功能，开发者可以使用 PyForms 快速构建数据可视化应用，如图表展示、数据分析等。

2. 桌面应用程序：PyForms 可以帮助开发者快速构建界面友好的桌面应用程序，如日历、音乐播放器、文本编辑器等。

3. 科学计算和数据分析：PyForms 与 Python 的科学计算库和数据分析库的结合非常紧密，开发者可以使用 PyForms 开发各种科学计算和数据分析应用。

   ![图片](./Python框架.assets/640-1714227989521-132.webp)

### 优势

PyForms 具有以下几个优势，使其成为 Python GUI 开发的首选：

1. 简化开发流程：PyForms 提供了易于使用的 API 和工具，简化了 Python GUI 开发的流程，减少了开发的学习成本和时间成本。

2. 可视化界面设计：PyForms 提供了可视化界面设计工具，开发者可以通过拖拽和放置组件的方式设计界面，快速创建用户友好的应用程序。

3. 多平台支持：PyForms 可以运行在多个平台上，开发者可以在不同的平台上使用相同的代码进行开发和部署。

   ![图片](./Python框架.assets/640-1714227989521-133.webp)

### 总结

PyForms 是一个功能强大、易于使用的 Python GUI 开发框架，适用于各种 Python GUI 开发场景。它提供了丰富的功能和易于使用的 API，帮助开发者快速构建界面友好的应用程序，并具有简化开发流程、可视化界面设计和多平台支持等优势。无论是数据可视化应用、桌面应用程序还是科学计算和数据分析，使用 PyForms 都能够提供良好的开发体验和效果。对 Python GUI 开发者而言，PyForms 是一款不可或缺的开发利器。

## Remi：一个自动转换 Python 代码为 HTML 界面的 GUI 库

Github 地址：https://github.com/rawpython/remi

### 工具概述

Remi 是一个用于创建 Python 应用程序的 GUI 库，它的界面在 Web 浏览器中进行渲染。这使得开发者可以在本地和远程访问他们的界面。

Remi 可以帮助开发者创建跨平台的 GUI 应用，而无需编写 HTML 代码。它会自动将你的 Python 代码转换为 HTML，并在应用启动时启动一个 Web 服务器，使得应用可以在本地网络上访问。

### 基于 Web 浏览器的界面渲染

Remi 利用 Web 浏览器的能力来渲染应用程序的界面。开发者只需使用 Python 编写界面的逻辑和布局，不需要编写 HTML 代码。Remi 会自动将 Python 代码转换为 HTML，并将界面渲染在 Web 浏览器中。

这样的设计使得开发者可以利用 Web 开发的优势，如丰富的 UI 组件和灵活的布局，同时保持使用 Python 进行开发的便利性。

### 自动转换 Python 代码为 HTML

Remi 提供了自动将 Python 代码转换为 HTML 的功能。开发者只需要使用 Python 进行界面的逻辑和布局编写，Remi 会自动将代码转换为相应的 HTML 表示。

这样的设计使得开发者可以专注于应用程序的逻辑和功能，而无需过多关注 HTML 代码的编写和维护。

### 安装和使用 Remi

要使用 Remi，您需要安装它。您可以通过以下步骤进行安装：

1. 1. 打开终端或命令行界面。
   2. 运行以下命令安装 Remi：

```bash
pip install remi
```

安装完成后，您可以开始使用 Remi 创建 GUI 应用程序。下面是一个简单的示例代码：

```python

import remi.gui as gui
from remi import start, App

class MyApp(App):
    def main(self):
        # 创建一个窗口
        window = gui.VBox(width=300, height=200)

        # 创建一个文本标签
        label = gui.Label('Hello, Remi!', width=200, height=30)
        window.append(label)

        # 创建一个按钮
        button = gui.Button('Click me!', width=200, height=30)
        window.append(button)

        # 定义按钮的点击事件处理函数
        def on_button_pressed(widget):
            label.set_text('Button clicked!')

        # 绑定按钮的点击事件处理函数
        button.onclick.connect(on_button_pressed)

        # 返回窗口作为应用程序的主界面
        return window

# 启动应用程序
start(MyApp)
```

运行以上代码后，Remi 会自动启动一个 Web 服务器，并在浏览器中显示您的 GUI 应用程序。您可以通过访问`http://localhost:8081`来访问应用程序。

![image-20240427005241971](./Python框架.assets/image-20240427005241971.png)

### **本地和远程访问的便利性**

由于 Remi 的界面在 Web 浏览器中进行渲染，开发者可以通过访问本地或远程的 URL 来访问他们的应用程序界面。这使得开发者可以在本地机器上进行应用程序的开发和测试，并通过网络将应用程序提供给远程用户使用。

Remi 启动的 Web 服务器使得应用程序可以在局域网内通过浏览器进行访问，提供了灵活和方便的访问方式。

### 跨平台的 GUI 应用开发

Remi 的设计目标之一是支持跨平台的 GUI 应用开发。由于界面是在 Web 浏览器中渲染的，Remi 应用可以在各种操作系统上运行，包括 Windows、macOS 和 Linux。

这使得开发者可以使用相同的代码和界面在不同的平台上部署和使用他们的应用程序，减少了开发和维护的工作量。

### 总结

Remi 是一个强大且方便的 Python GUI 库，它可以在 Web 浏览器中渲染应用程序的界面。它支持本地和远程访问，可以帮助开发者创建跨平台的 GUI 应用。

Remi 自动将 Python 代码转换为 HTML，简化了界面的开发过程。无论是初学者还是有经验的开发者，都可以通过 Remi 轻松创建功能丰富的跨平台 GUI 应用。

## Toga：Python 原生、跨平台的 GUI 工具包

**项目地址**：https://github.com/beeware/toga

待定教程：[Python Toga 轻松构建 GUI 应用，一套代码，多平台部署，支持移动平台 (qq.com)](https://mp.weixin.qq.com/s/GRuCeyY-zFJh5X7jIsMFxg)

### 1. 什么是 Toga？

Toga 是一个 Python 原生、跨平台的 GUI 工具包，旨在为开发人员提供简洁高效的方式来创建桌面应用程序。Toga 基于现代的操作系统原生组件和界面标准，使开发人员能够轻松构建美观、可用性强的应用程序。

#### Toga 的特点

Toga 具有以下显著特点：

1. **跨平台性**：可在 macOS、Windows、Linux（GTK）、Android、iOS 以及单页 Web 应用程序上运行。
2. **Python 原生**：完全使用 Python 编写，无需任何外部依赖。
3. **简化接口**：提供共享接口，简化了对于不同平台的 GUI 开发。
4. **开放源代码**：以 BSD 许可证发布，允许自由使用和修改。

![图片](./Python框架.assets/640-1714238826493-656.webp)

### 2. 跨平台支持

Toga 具有出色的跨平台支持，可以在各种操作系统上运行，包括 Windows、macOS，Linux，Android 和 iOS 等。这意味着开发人员可以使用相同的代码库来构建应用程序，并在不同的平台上进行部署，大大简化了跨平台开发的工作量。

### 3. Python 原生

Toga 是一个 Python 原生的 GUI 工具包，使用 Python 作为主要开发语言。这使得开发人员能够充分利用 Python 的简洁性和易用性来创建应用程序。同时，Toga 也与 Python 生态系统紧密集成，可以方便地使用其他 Python 库和工具来增强应用程序的功能。

![图片](./Python框架.assets/640-1714235582364-437.webp)

### 4. 简洁高效的 API

Toga 提供了简洁高效的 API，使开发人员能够以简单的方式构建用户界面。它采用了类似于 React 的声明式编程模型，通过定义组件和属性来描述应用程序的结构和行为。这种设计使得开发人员能够快速上手，并以高效的方式构建复杂的界面。

### 5. 原生组件和界面标准

Toga 基于现代操作系统的原生组件和界面标准，确保应用程序在各个平台上具有一致的外观和行为。它与操作系统的界面标准紧密匹配，使应用程序看起来和感觉上都像是原生应用。这为用户提供了一致的体验，并提高了应用程序的可用性。

### 6. 扩展性和定制性

尽管 Toga 提供了简洁高效的 API，但它也具有很高的扩展性和定制性。开发人员可以根据自己的需求自定义组件和样式，实现更个性化的用户界面。此外，Toga 还支持与其他 GUI 工具包的集成，以便在需要时扩展应用程序的功能。

### 7. 应用领域和实际用途

Toga 广泛应用于各种应用领域，包括桌面应用程序、科学计算工具、数据可视化和教育软件等。它被广大开发人员用于构建各种类型的应用程序，从简单的工具到复杂的企业级应用。Toga 的简洁性和易用性使得开发人员能够更专注于应用程序的功能和用户体验。

### 总结

通过学习和使用 Toga，你可以以简洁高效的方式构建 Python 原生、跨平台的桌面应用程序。无论是个人项目还是商业应用，Toga 都为你提供了一个强大而灵活的工具。

### 安装 Toga

安装 Toga 非常容易，您可以使用 pip 来安装 Toga。首先确保您的 Python 环境已经搭建完成。然后打开终端并执行以下命令：

```
pip install toga
```

这将会自动下载并安装 Toga 到您的 Python 环境中。

### 使用 Toga

安装完成后，您可以开始使用 Toga 构建跨平台 GUI 应用程序。接下来我们来编写一个简单的示例程序来展示 Toga 的使用方法。

![图片](./Python框架.assets/640-1714238842498-659.webp)

### 创建 Toga 应用程序

首先，创建一个新的 Python 文件（例如 app.py），然后导入 Toga 库并创建一个简单的应用程序，代码如下：

```python
import toga

def build(app):
    main_box = toga.Box()
    button = toga.Button('Hello, Toga!', on_press=button_handler)
    main_box.add(button)

    return main_box

def button_handler(widget):
    print("Hello, Toga!")

def main():
    return toga.App('First App', 'org.pybee.helloworld', startup=build)

if __name__ == '__main__':
    app = main()
    app.main_loop()
```

**运行应用程序**

保存上述代码，并在终端（或命令提示符）中执行以下命令：

```
python app.py
```

这将会启动您的 Toga 应用程序，点击按钮后，程序会在控制台打印"Hello, Toga!"。

![图片](./Python框架.assets/640-1714238842498-660.webp)

### 发布 Toga 应用程序

您可以将 Toga 应用程序打包成单独的可执行文件，以便在不同的平台上分享和使用。Toga 提供了 Briefcase 工具来帮助您完成这一过程。

### 结语

Toga 作为一个 Python 原生、OS 原生的跨平台 GUI 工具包，为开发者提供了简单易用的界面，使得跨平台应用程序的开发变得更加便捷和高效。希望本文能够帮助您更好地了解和使用 Toga。

项目地址：https://github.com/beeware/toga

## Eel：Python 开发 Web 桌面应用的利器，构建 Electron-like 桌面应用的终极选择

**项目地址**：https://github.com/python-eel/Eel

### 引言

> 在现代应用程序开发中，使用 Web 技术构建跨平台的 GUI 应用变得越来越流行。Electron 是一个强大的框架，可以使用 HTML、CSS 和 JavaScript 构建跨平台的桌面应用程序。然而，对于一些简单的应用 Electron 可能过于复杂。这时，基于 Python 开发的 Eel 库就是一个很好的选择。

### 功能和特点

Eel 是一个小型的 Python 库，旨在简化使用 HTML、CSS 和 JavaScript 构建 GUI 应用的过程。它提供了一个简单的方式来将 Python 代码与 Web 界面进行交互，使得开发者可以使用熟悉的 Python 语言来用 Web 技术构建桌面应用程序。

![图片](./Python框架.assets/640-1714220911371-98.webp)

Eel 具有以下功能和特点：

**简单易用**：Eel 提供了简洁的 API，使得开发者可以轻松地创建 GUI 应用程序。无需繁琐的配置和复杂的代码，只需几行简单的 Python 代码即可实现。

**跨平台支持**：Eel 可以在 Windows、Mac 和 Linux 等多个平台上运行，使得开发者可以轻松地构建跨平台的应用程序。

![图片](./Python框架.assets/640-1714220911371-99.webp)

**与 Python 的无缝集成**：Eel 允许开发者在 Python 代码中直接调用 JavaScript 函数，并在 Web 界面中调用 Python 函数。这种无缝的集成使得开发者可以更加方便地处理应用程序的逻辑。

**自定义界面**：Eel 允许开发者使用 HTML、CSS 和 JavaScript 来自定义应用程序的界面。开发者可以根据自己的需求设计出独特的用户界面。

### 安装和示例代码

安装 Eel 非常简单，只需使用 pip 命令即可：

```bash
pip install eel
```

下面是一个简单的示例代码，展示了如何使用 Eel 创建一个简单的 GUI 应用程序：

```python
import eel

@eel.expose
def greet(name):
    print("Hello, " + name + "!")

eel.init("web")
eel.start("index.html", size=(300, 200))
```

在上面的示例中，我们定义了一个名为"greet"的 Python 函数，并使用@eel.expose 装饰器将其暴露给 JavaScript。然后，我们使用 eel.init 初始化 Eel，并指定了 Web 界面的目录。最后，我们使用 eel.start 启动应用程序，并指定了要加载的 HTML 文件和窗口的大小。

### 应用场景

Eel 适用于许多应用场景，特别是那些需要简单而快速构建 GUI 应用程序的情况。以下是一些常见的应用场景：

**桌面应用程序**：Eel 可以用于构建各种类型的桌面应用程序，如文本编辑器、音乐播放器、图像浏览器等。

![图片](./Python框架.assets/640-1714220911371-100.webp)

**数据可视化**：Eel 可以与 Python 的数据处理库（如 Pandas 和 Matplotlib）结合使用，用于创建交互式的数据可视化应用程序。

**原型开发**：Eel 提供了快速原型开发的能力，使得开发者可以迅速验证和演示他们的想法。

### 优势

相比于 Electron 等复杂的框架，Eel 具有以下优势：

**简单易用**：Eel 的 API 设计简洁明了，使得开发者可以快速上手并构建应用程序。

**轻量级**：Eel 是一个小型的 Python 库，不会引入过多的依赖和复杂性。

**Python 与 Web 的无缝集成**：Eel 允许开发者在 Python 和 Web 界面之间进行无缝的交互，使得开发更加灵活和高效。

![图片](./Python框架.assets/640-1714220911372-101.gif)

### 总结

Eel 是一个简单而强大的 Python 库，用于构建简单的 Electron-like HTML/JS GUI 应用程序。它提供了简洁的 API 和无缝的 Python 与 Web 集成，使得开发者可以快速构建跨平台的 GUI 应用程序。无论是桌面应用程序、数据可视化还是原型开发，Eel 都是一个值得尝试的选择。

## PyFlow：零代码编程框架助力 Python 开发

**项目地址**：https://github.com/wonderworks-software/PyFlow

### 1. 简介

PyFlow，一款针对 Python 开发的零代码编程框架，旨在为开发者提供一种简单、高效的方式来构建和部署复杂的应用程序。通过将代码转换为图形化界面，PyFlow 让编程变得更加直观，降低了学习曲线，尤其适合初学者和可视化需求较高的项目。

![图片](./Python框架.assets/640-1714220478468-62.webp)

### 2. 特点和优势

#### 2.1 直观可视化

PyFlow 将代码以图形化的形式展示，使开发者能够一目了然地了解程序结构，提高编程效率。

#### 2.2 跨平台兼容

PyFlow 支持多种操作系统，包括 Windows、macOS 和 Linux，方便开发者灵活选择开发环境。

#### 2.3 丰富的组件库

PyFlow 提供了丰富的组件库，涵盖了许多常用的功能，如数据处理、机器学习、网络通信等，便于开发者快速搭建应用。

#### 2.4 易于上手

PyFlow 的语法简洁，学习成本低，即使没有编程基础的开发者也能迅速掌握。

![图片](./Python框架.assets/640-1714220478468-63.webp)

### 3. 使用方法

#### 3.1 安装 PyFlow

在 Github 网站下载并安装 PyFlow。

#### 3.2 创建项目

打开 PyFlow，新建一个项目，选择合适的模板。然后通过拖拽、连接组件来构建程序。

#### 3.3 编写代码

在 PyFlow 中，每个组件都对应一段 Python 代码。通过编辑组件的属性，如输入输出参数、函数名称等，完成代码编写。

#### 3.4 调试与运行

在 PyFlow 中可以直接运行程序，观察其运行结果。如有错误，可通过调试功能找到问题所在并进行修复。

![图片](./Python框架.assets/640-1714220478468-64.webp)

### 4. 应用场景

#### 4.1 数据处理

PyFlow 可用于数据清洗、数据分析、可视化等任务，帮助开发者快速完成数据处理项目。

#### 4.2 机器学习

PyFlow 支持常见的机器学习算法，如线性回归、决策树等。开发者可通过 PyFlow 轻松搭建机器学习模型。

#### 4.3 网络通信

PyFlow 提供了 WebSocket、HTTP 等通信组件，便于开发者构建网络应用。

### 5. 总结

PyFlow 作为一款零代码编程框架，凭借其直观、易用的特点，已在各个领域展现出强大的优势。对于 Python 开发者来说，尤其是初学者，PyFlow 值得一试。而对于有经验的开发者，PyFlow 也可以作为一款强大的工具，助力项目快速上线。

## Guizero：轻松打造 Python GUI 的利器

**项目地址**：https://github.com/lawsie/guizero

### guizero 是什么？

guizero 是一个专为 Python 3 设计的库，用于创建简单的图形用户界面（GUI）。它旨在帮助新学习者快速、轻松地为他们的程序创建 GUI。

### guizero 的特点

1. 入门简单：guizero 的设计初衷就是为了让新学习者能够轻松上手，因此其使用非常简单直观。
2. 轻量级：guizero 并不是一个复杂的 GUI 库，它只包含了最基本的功能，减少了学习和使用的难度。
3. 支持 Python 3：作为 Python 的库，guizero 完全兼容 Python 3 版本，与 Python 的语法和特性紧密结合。
4. 开源免费：guizero 是开源的，任何人都可以免费使用并进行修改，这也使得它有着庞大的用户群体和社区支持。

### guizero 的安装

要安装 guizero，可以使用 pip 命令：

```
pip install guizero
```

安装完成后，就可以在 Python 代码中引入 guizero 库，并开始使用它创建 GUI 了。

### guizero 的基本组件

在 guizero 中，有一些基本的组件可以用来构建 GUI，包括：

1. 窗口（App）：整个 GUI 的容器，用来放置所有的其他组件。
2. 文本框（Text）：用来展示静态文本信息。
3. 输入框（TextBox）：用来接收用户的输入文字。
4. 按钮（PushButton）：用来触发特定操作的按钮。
5. 列表框（ListBox）：用来展示一个列表供用户选择。
6. 图片框（Picture）：用来展示图片。
7. 复选框（CheckBox）：用来做选择操作。
8. 下拉菜单（Combo）：用来展示一个下拉式菜单供用户选择。

### 使用 guizero 创建一个简单的 GUI

下面以一个简单的 Hello World 程序来演示如何使用 guizero 创建一个 GUI。

首先，我们需要创建一个窗口，并在窗口中添加一个文本标签和一个按钮，用户点击按钮后，会在窗口中显示"Hello World"。

```python
from guizero import App, Text, PushButton

def say_hello():
    message.value = "Hello World"

app = App(title="Hello World")
message = Text(app, text="Click the button to say hello")
button = PushButton(app, text="Say Hello", command=say_hello)

app.display()
```

在这个例子中，我们首先创建了一个窗口（App），然后分别创建了一个文本标签和一个按钮，并指定了按钮的点击事件处理函数为 say_hello。最后调用 app.display()来显示窗口。

![图片](./Python框架.assets/640-1714239603940-697.webp)

### guizero 的应用场景

guizero 虽然功能简单，但在一些简单的应用场景中非常实用，比如：

1. 学习教育：对于初学者来说，通过 guizero 可以很轻松地创建一些简单的学习工具，比如单词记忆软件、数学练习软件等。
2. 小工具：在日常生活中，我们经常需要一些小工具来简化操作，比如文本处理工具、图片处理工具等，这些工具的操作界面通常并不复杂，使用 guizero 来快速创建一个 GUI 是非常合适的。
3. 演示展示：在一些展示或演示中，我们可能需要快速展示一些数据或展示一些简单的交互，使用 guizero 可以很快地实现这些需求。

### guizero 的局限性

guizero 虽然简单易用，但也存在一些局限性，比如：

1. 功能简单：guizero 并不是一个功能强大的 GUI 库，如果需要复杂的界面和交互，可能需要使用其他更专业的 GUI 库。
2. 扩展性有限：guizero 的定位是轻量级、简单易用，在一些复杂场景下可能无法满足需求。

### 结语

总的来说，guizero 作为一个简单易用的 Python GUI 库，在一些简单的应用场景下表现得非常不错，尤其适合新手学习和初学者入门。当然，如果需要更复杂的界面和交互，可能需要考虑其他更为强大和专业的 GUI 库。

## wxGlade：零代码可视化构建 Python GUI 工具，简化 wxWidgets / wxPython 构建 GUI 过程

**项目地址**：https://github.com/wxGlade/wxGlade

今天介绍的 wxGlade，是一个强大的 GUI 构建工具，它使用 Python 编写，为 wxWidgets / wxPython 提供了全面的支持。无论您是初学者还是有经验的开发者，wxGlade 都能帮助您快速创建出精美的图形用户界面。本文将详细介绍 wxGlade 的特点和使用方法，帮助您更好地了解和使用这个爆款工具。

### 1. 简介

wxGlade 是一个开源项目，旨在简化 GUI 应用程序的开发过程。它提供了一个直观的可视化界面，让开发者可以通过拖拽和放置控件的方式来设计界面。同时，它还生成相应的 Python 代码，使开发者能够轻松地将界面与功能逻辑进行关联。

![图片](./Python框架.assets/640-1714230191035-243.webp)

### 2. 特点

**可视化设计** ：wxGlade 提供了一个直观的可视化界面，让开发者可以通过拖拽和放置控件的方式来设计界面，无需手动编写代码。

**多平台支持**：wxGlade 基于 wxWidgets / wxPython 开发，因此可以在多个平台上运行，包括 Windows、Linux 和 MacOS 等。

**代码生成**：除了可视化设计界面外，wxGlade 还能够生成相应的 Python 代码，使开发者能够轻松地将界面与功能逻辑进行关联。

**可扩展性**：wxGlade 支持自定义控件和属性，开发者可以根据自己的需求进行扩展和定制。

**多语言支持**：wxGlade 支持多种编程语言，包括 Python、C++等，使开发者能够根据自己的喜好选择合适的语言进行开发。

![图片](./Python框架.assets/640-1714230191035-244.webp)

### 3. 使用方法

使用 wxGlade 非常简单，只需按照以下步骤进行操作：

#### 步骤 1：安装 wxGlade

首先，您需要安装 wxGlade。您可以从官方网站（https://wxglade.sourceforge.io/）下载最新版本的wxGlade，并按照安装指南进行安装。

#### 步骤 2：创建新项目

打开 wxGlade 后，您可以选择创建一个新项目。在新项目中，您可以定义项目的名称和保存路径。

#### 步骤 3：设计界面

在新项目中，您可以通过拖拽和放置控件的方式来设计界面。wxGlade 提供了丰富的控件库，包括按钮、文本框、列表框等常用控件，您可以根据需要选择并放置到界面上。

![图片](./Python框架.assets/640-1714230191036-245.webp)

#### 步骤 4：设置属性

在设计界面的过程中，您可以设置每个控件的属性，包括位置、大小、文本内容等。通过属性设置，您可以进一步定制界面的外观和行为。

#### 步骤 5：生成代码

设计界面完成后，您可以点击生成代码按钮，wxGlade 将自动生成相应的 Python 代码。您可以将生成的代码复制到您的项目中，并根据需要进行进一步的开发和调整。

### 总结

wxGlade 是一个功能强大的 GUI 构建工具，它提供了可视化设计界面、代码生成和多平台支持等特点，使开发者能够快速创建出精美的图形用户界面。无论您是初学者还是有经验的开发者，wxGlade 都是一个值得尝试的工具。希望本文的介绍能够帮助您更好地了解和使用 wxGlade，提高开发效率，创造出更好的应用程序。

# 全平台 GUI 库

## GuiLite：物联网,嵌入式,单片机,桌面应用全平台 GUI 库

Gitee：[GuiLite: ㊙ 4 千行，仅头文件，全平台 GUI 库；适用于：物联网、嵌入式、单片机、桌面应用。 (gitee.com)](https://gitee.com/idea4good/GuiLite)

### 跨平台最小头文件 GUI 库

> GuiLite 是一个轻量级、高效的 GUI 库，拥有仅 4 千行的 C++代码，且零依赖，采用单一头文件库（GuiLite.h）。这个库不仅提供高效渲染，即使在单片机上也能流畅运行，展现了卓越的性能表现。GuiLite 尤其突出的特点在于其小巧灵活的设计，具备最小的硬件要求：处理器低至 24 MHZ、磁盘/ROM 空间仅需 29 KB、内存需求也仅为 9 KB。

![图片](./Python框架.assets/640-1714659178709-34.webp)

![图片](./Python框架.assets/640-1714659178709-35.webp)

### 功能与特点：

- 1.**跨平台支持：** GuiLite 支持多种操作系统，包括 iOS、macOS、WatchOS、Android、Linux（ARM/x86-64）、Windows（包括 VR）、以及 RTOS 等，同时也支持不带操作系统的单片机。它可以用于多种开发语言，如 C/C++、Swift、Java、Javascript、C#、Golang 等，也与第三方库如 Qt、MFC、Winforms 和 CoCoa 等完美兼容。
- 2.**实用功能：** GuiLite 提供了完善的功能特性。它作为理想的`云`和`物联网`解决方案，为用户提供了轻松驾驭全球 IoT 业务的可能性。该库支持多语言，采用 UTF-8 编码，同时具备视频播放能力。用户可以利用资源制作工具制定自定义字体和图片资源，还有所见即所得的 GUI 布局工具，便于开发者对界面进行排版和设计。
- 3.**扩展功能：** GuiLite 还提供了编译活跃度统计和实时分析功能，支持 3D 和 Web 技术，以及 Docker。用户可通过简单的命令启动 Docker 环境，例如：`sudo docker run -it --privileged -v /dev:/dev-share idea4good/gui-lite:latest bash /run.sh`

### 使用场景：

> 由于 GuiLite 的小巧精炼，适用于对硬件资源要求严格的场景，例如嵌入式系统、移动设备、IoT 设备等。其跨平台支持使得在多种操作系统和开发语言下的应用开发变得更加便捷，同时与现有的 GUI 框架兼容性强，能够在已有项目中轻松集成使用。

> 总的来说，GuiLite 是一个功能丰富、高效轻量的 GUI 库，适用于各种项目的开发和展示，并且提供了出色的跨平台支持和灵活性。

# Python 打造桌面应用程序的终极指南：必备库大盘点

## 引言

随着 Python 的普及，使用 Python 开发桌面应用程序已成为一种越来越普遍的做法。Python 凭借其强大的功能、易于使用的语法和丰富的库生态系统，使开发人员能够创建各种各样的桌面应用程序。

python 开发的浏览器：

![图片](./Python框架.assets/640-1714233236190-363.webp)

本文将深入介绍用于打造 Python 桌面应用程序的必备库，帮助您选择最适合您项目需求的库。

### **1. GUI 框架**

GUI 框架为创建应用程序的图形用户界面（GUI）提供了基础架构。Python 中有许多 GUI 框架可供选择，最流行的包括：

- **Tkinter：**标准 Python 库所提供的原生 GUI 框架，简单易用，但功能有限。
- **wxPython：**跨平台 GUI 框架，功能强大、灵活，但学习曲线相对较陡峭。
- **PyQt：**基于 Qt 框架的跨平台 GUI 框架，功能丰富、性能优异，但需要商业许可。
- **PyGTK：**基于 GTK+ 框架的跨平台 GUI 框架，功能强大、可扩展性高，但需要熟悉 GTK+。
- pyqt 开发的流程图 GUI：
- ![图片](./Python框架.assets/640-1714233236190-364.gif)

### 2. 数据库访问

桌面应用程序通常需要访问数据库。Python 提供了多种数据库访问库，包括：

- **sqlite3：**标准 Python 库所提供的轻量级嵌入式数据库引擎，适合小型数据库。
- **psycopg2：**连接 PostgreSQL 数据库的库。
- **MySQL Connector：**连接 MySQL 数据库的库。
- **pymongo：**连接 MongoDB 数据库的库。

### 3. 网络通信

对于需要与远程服务器通信的应用程序，Python 提供了多种网络通信库，包括：

- **requests：**用于发送 HTTP 请求的库，简单易用。
- **aiohttp：**用于构建异步 HTTP 客户端和服务器的库，高性能、高并发。
- **sockets：**用于建立低级网络套接字连接的库。

### 4. 图形处理

对于需要处理图形的应用程序，Python 提供了多种图形处理库，包括：

- **Pillow：**用于处理图像的库，支持多种文件格式。
- **PyQtGraph：**用于创建交互式科学图表的库。
- **matplotlib：**用于创建出版质量图表的库。

### 5. 文档生成

桌面应用程序有时需要生成文档。Python 提供了多种文档生成库，包括：

- **python-docx：**用于创建和编辑 Microsoft Word 文档的库。
- **pdfrw：**用于创建和编辑 PDF 文档的库。
- **reportlab：**用于创建 PDF 和其他格式报告的库。

## 选择合适的库

选择合适的库取决于您的特定项目需求。考虑以下因素：

- **功能：**库是否提供了您需要的功能？
- **性能：**库的性能是否满足您的要求？
- **跨平台：**库是否可以在您目标的平台上运行？
- **文档：**库是否具有良好的文档？
- **社区支持：**库是否有一个活跃的社区提供支持？

## 建议的工具集

对于大多数桌面应用程序，以下工具集提供了全面的功能：

- GUI 框架：wxPython 或 PyQt
- 数据库访问：psycopg2 或 MySQL Connector
- 网络通信：requests
- 图形处理：Pillow 或 matplotlib
- 文档生成：python-docx 或 pdfrw

## 结论

Python 提供了丰富的库生态系统，使开发人员能够创建功能强大、用户友好的桌面应用程序。通过仔细选择合适的库，您可以构建满足您特定项目需求的应用程序。

## 用 aardio 来做网络爬虫，一键打包成 exe

### 前言

之前一直使用 Python 做爬虫，Python 在爬虫方面的优势毋庸置疑。丰富的第三方库加上简洁的语法可以在写爬虫时提供天然的便利。

但是如果不是给企业写的爬虫，而是给个人用的一些减少工作量的工具，Python 有一个很不方便的点：无法编译成可执行文件。用起来有门槛。

#### 打包

虽然可以用打包工具(例如 Nuitka 和 pyinstaller)来将 Python 打包成 exe，但它其实就是给你带了一个 Python 环境，如果打包成整个 exe 的话，会将 Python 整个环境都打包到 exe 里，使用起来并不方便。

所以就有了这个想法：如果可以用 aardio 做爬虫的话，那么打包成 exe 不就很方便了，而且文件也小。如果你不想公开源代码的话，aardio 编译之后也无法被还原，可以很好的保护源代码。

#### 爬虫基础库

做爬虫必要的一些第三方库如下：

- 请求相关： 比如 http 请求，websockets 请求等
- 采集框架：比如 scrapy 等
- 解析相关：比如 xpath、css 选择器、正则表达式和 json 等
- 加密相关：比如一些常用的加密算法，aes、des 和 rsa 等
- 自动化抓包：例如 mitmproxy，用于自动化抓包采集
- js 引擎：比如 pyexecjs，用于执行 js 代码
- 浏览器自动化：比如 selenium，用于操作浏览器来采集
- 存储相关：一些常用数据库的操作
- 验证码相关：识别字符、滑块、点选验证码等

#### aardio 实现上面的功能

在 aardio 中，上面的很多功能库都没有，有的虽然有，但是并不好用。所以我打算重写一下库，给 aardio 适配这些功能。

目前已完成或待完成的库有：

- kirequests: 重写 inet.http，更符合 Python requests 库的编程风格
- tslClient：封装 go 语言的 tls-client，也是用于 http 请求，支持 http2.0 和 tls 指纹
- goquery：封装 go 语言的 goquery，用于 css 选择器解析 html
- htmlquery：封装 go 语言的 htmlquery，用于 xpath 解析 html
- kichardet：封装 C++的 uchardet，可以自动识别给定字符串的编码
- kisunny：封装 sunny，类似 mitmproxy
- kicrypt(`待完成`)：实现一些常见的加密算法，例如 aes 和 des，其他的算法 aardio 里都有
- ChakraCore(`待完成`): 用于执行 js 代码的引擎，微软开源的
- drissionpage(`待完成`)：我也想用 aardio 实现 Python 的 drissionpage 库，本质上就是 cdp 协议。可以用于浏览器模拟自动化。更强大的自动化工具还得是 playwright 和 puppeteer
- ddddocr(`待完成`)：封装 Python 的 ddddocr 做验证码识别
- 采集框架(`不完成`)：采集框架暂不在计划内，因为我没打算做一个类似八爪鱼的东西，只是想做些小工具而已。平常的 http 请求库足够用了。正式给公司做采集肯定还是用 Python

一些常见的数据库操作在 aardio 中基本都有，遇到没有的再封装。其实如果遇到在 aardio 中没有的，可以看看 C++、go 有没有实现，然后封装成 dll 就能在 aardio 中使用。

库的代码更新：https://github.com/kanadeblisst00/aardio-extlibs

### 实战

目前在计划的内容有：

- 导出自己的公众号粉丝列表
- 采集公众号历史文章，并保存为 mhtml 和 PDF 文件
- 采集一些短视频平台的数据，比如 b 站、抖音等。这个可能得等我开始玩对话模型的时候再写，那个时候会需要对话的数据来训练模型，可以从这些平台采集评论来做数据集
- 一些练习网站
- 一些课程里的网站。玩了太久的微信逆向，js 逆向基本忘的差不多了。最近重新看看一些 js 逆向课程，有兴趣的可以 b 站搜`志远一期二期`

#### kirequests

先说一下 kirequests 的一些基本用法：

GET 请求

```
var resp = kirequests.get("https://www.httpbin.org/get",{"a":1,"b":2})
console.dump(resp.status)
console.dump(resp.text)
console.dump(resp.json())
```

自定义请求头

```
var resp = kirequests.get("https://www.httpbin.org/get",{"a":1,"b":2},{"User-Agent": "aardio"})
console.dump(resp.status)
console.dump(resp.text)
console.dump(resp.json())
```

禁止重定向

```
var params = {"url": "https://www.baidu.com"}
// 注入关键词参数和位置参数不能混用
var resp = kirequests.get(url="https://www.httpbin.org/redirect-to",params=params,redirect=false)
// 这样写也可以
//var resp = kirequests.get("https://www.httpbin.org/redirect-to",params,,false)
```

基础 http 验证

```
var resp = kirequests.get(url="https://www.httpbin.org/basic-auth/root/123456",auth={"root";"123456"})
```

post 表单数据

```
var resp = kirequests.post(url="https://www.httpbin.org/post",data={"a":1,"b":2})
```

post json 数据

```
var resp = kirequests.post(url="https://www.httpbin.org/post",json={"a":1,"b":2})
// 这样也可以
import web.json;
var postData = web.json.stringify({"a":1,"b":2})
var resp = kirequests.post(url="https://www.httpbin.org/post",data=postData)
```

使用代理 （只支持 http 代理）

```
import kirequests.session;
var ses = kirequests.session(,"http://root:123456@127.0.0.1:10809",)
var resp = ses.get("https://www.httpbin.org/get")
```

自定义 cookies

```
import kirequests.session;
var cookies = {
 {"name":"a","value":"a","domain":".httpbin.org"};
 {"name":"b","value":"b","domain":"www.httpbin.org"}
 {"name":"c","value":"c","domain":".httpbin.org"}
 {"name":"d","value":"d","domain":"www.httpbin.org"}
}
var ses = kirequests.session(,,cookies)
var resp = ses.get("https://www.httpbin.org/get")
```

设置超时时间(连接超时,发送超时,接收超时)，单位毫秒

```
import kirequests.session;
var ses = kirequests.session()
ses.setTimeouts(2000,2000,2000)
var resp = ses.get("https://www.httpbin.org/get")
```

#### 静态网页

网站：`https://ssr3.scrape.center/`

```
import console;
import kirequests
import htmlquery;
io.open()

resp = kirequests.get(url="https://ssr3.scrape.center/",auth={"admin","admin"})

var html = resp.text;
var doc = htmlquery.Parse(html)
var nodeList = htmlquery.Find(doc, '//div[@class="el-card item m-t is-hover-shadow"]')
for i,node in nodeList{
 var h2Node = htmlquery.FindOne(node, './/h2');
 var title = htmlquery.InnerText(h2Node)
 var tagNodeList = htmlquery.Find(node, './/button');
 var tags = {}
 for i,tagNode in tagNodeList{
  var tag = htmlquery.InnerText(tagNode);
  table.push(tags, string.trim(tag));
 }
 var infoNodeList = htmlquery.Find(node, './/div[@class="m-v-sm info"]/span');
 var infos = {};
 for i,infoNode in infoNodeList{
  var info = htmlquery.InnerText(infoNode);
  table.push(infos, string.trim(info));
 }
 var scoreNode = htmlquery.FindOne(node, './/p[@class="score m-t-md m-b-n-sm"]')
 var score = htmlquery.InnerText(scoreNode);
 console.log("title: ", title)
 console.log("tags: ", string.join(tags," "))
 console.log("infos: ", string.join(infos," "))
 console.log("score: ", string.trim(score))
 console.log()
}
console.pause(true);
```

输出如图：

![图片](./Python框架.assets/640-1713981079439-146.webp)

#### ajax 加载的网页

网站：`https://spa2.scrape.center/`

```python
import console;
import crypt;
import kirequests;
import goquery;
import crypt.bin;

io.open()
url = "https://spa2.scrape.center/api/movie/"
var page = 1;
var limit = 10;
var params = {
 "limit":limit,
 "offset": (page-1)*10
}
var t = tostring(tonumber(time()));
var r = {"/api/movie";tostring((page-1)*limit);t}
var o = crypt.sha1(string.join(r,","),false)
var c = crypt.bin.encodeBase64(string.join({o;t},","))
params["token"] = c
var resp = kirequests.get(url,params)
var datas = resp.json()

console.dump(datas );
console.pause(true);
```

# Python应用打包利器库

在Python中，将项目打包成可执行的exe文件是一个常见的任务，尤其是在需要分发应用程序给没有安装Python环境的用户时。

下面是主流的方式及其参数的含义和使用案例。

本人主要使用Pyinstaller和Nuitka，前者最常用，后者打包后防止反编译，且软件小执行快。

## 办公脚本打包

### 让自动化办公之翼，飞入每一位打工人的电脑

在数字化时代，办公自动化的概念已经深入人心。Python作为一种强大且易学的编程语言，为打造高效、便捷的自动化办公程序提供了无限可能。然而，要让每个人都能轻松使用这些程序，我们面临着一个挑战：如何让非技术背景的用户在没有Python环境的情况下也能运行这些自动化办公程序？答案就是将Python自动化办公程序转化为EXE可执行文件。

将Python程序转化为EXE文件的重要性，在于它打破了技术壁垒，使得自动化办公的便利真正惠及每一个人。无论用户是否具备编程知识，无论他们的电脑是否安装了Python环境，只要有一个简单的EXE文件，他们就能轻松享受到自动化办公带来的高效与便捷。

想象一下，一个销售团队的负责人想要使用一款自动化整理销售数据的Python程序，但他对编程一窍不通，电脑里也没有安装Python。如果这个程序是EXE格式的，他只需要双击文件，程序就能立即运行，自动完成数据的整理和分析。这种无门槛的使用体验，让自动化办公真正走进了每一个人的日常工作中。

此外，EXE文件的稳定性和兼容性也为人人都能使用自动化办公提供了有力保障。不同版本的Python环境可能导致程序运行出现问题，而EXE文件则避免了这一问题。无论是Windows还是MacOS，无论是32位还是64位系统，只要有一个适合的EXE文件，程序就能稳定运行，无需担心环境配置的问题。

将Python自动化办公程序转化为EXE可执行文件的过程并不复杂。我们可以使用PyInstaller这样的工具，通过简单的命令行操作就能完成打包工作。而且，随着技术的不断进步，这个过程将变得越来越简单和高效。

该程序的功能是将Excel文件夹中所有的excel文件内容都合并到一个表格里，具体介绍在《[Python自动化办公——轻松准确合并多个Excel文件](http://mp.weixin.qq.com/s?__biz=Mzk0ODYxNzY5Nw==&mid=2247484755&idx=1&sn=17bd732814f68358940b675a9d9cf40d&chksm=c365adddf41224cb1d1b164832321021ec2face54615407377d0c1612369afdf62febd51cdd4&scene=21#wechat_redirect)》我要将这个程序打包成一个EXE文件，让每个人都能使用上这个功能，只要将你需要合并的excel文件放到Excel文件夹后点击.exe文件就像使用微信QQ一样使用自动化办公



### 安装项目运行需要的环境

生成项目所需要的第三方库，这里我推荐使用pipreqs，如果没有先使用pip install 安装，切换到项目所在目录下运行命令：

```bash
pip install pipreqs
```

在项目所在文件夹内执行命令

```bash
pipreqs ./ --encoding=utf-8 --force
```

执行完成后会在项目里生成requirements.txt，里面自动生成了项目需要的所有第三方库

![image-20240511172110572](./Python框架.assets/image-20240511172110572.png)

### 使用pyinstaller打包程序

安装pyinstaller

```
pip install pyinstaller
```

生成exe软件的图标

生成exe软件的图标.ico格式的图片，这里可以百度一下在线自动生成ico图片的网站：https://www.ico51.cn/

### 运行打包命令

```
Pyinstaller -F -w -i favicon.ico merge_excel.py
```

一共生成了两个文件夹和一个编译的文件.spec，其中exe文件在dist文件夹中，需要我们复制到当前文件夹下

![image-20240511172216433](./Python框架.assets/image-20240511172216433.png)

![image-20240511172225838](./Python框架.assets/image-20240511172225838.png)

双击merge_excel.exe就可以实现自动合并Excel文件中所有的excel表格功能了

合并结果生成在文件夹里

![image-20240511172239529](./Python框架.assets/image-20240511172239529.png)

将你的文件夹发给任何一个人，他就即可拥有了将多个表格进行合并的软件，轻松实现办公自动化。

将Python代码转化为应用软件，是让自动化办公真正惠及百姓的重要一步。它打破了技术的壁垒，让更多人能够享受到科技带来的便利与高效。随着技术的不断进步和应用的不断深化，我们相信未来会有更多的Python应用软件涌现出来，为人们的生活和工作带来更多的惊喜和便利。

## Briefcase：一键打包，将Python项目转化为macOS、Windows、Linux、iOS和Android应用的利器

**项目地址**：https://github.com/beeware/briefcase

### 一、引言

在软件开发中，将 Python 项目转化为独立的本地应用是一项具有挑战性的任务。为了解决这个问题，Briefcase 应运而生。Briefcase 是一个功能强大的工具，它可以将 Python 项目转化为多种平台的独立本地应用，并支持多种安装格式。

### 二、Briefcase 的功能

1. **转化为 macOS 应用**：Briefcase 可以将 Python 项目转化为 macOS 平台上的独立应用，生成一个 .app 文件，方便用户在 macOS 上使用和安装应用程序。
2. **转化为 Windows 安装程序**：Briefcase 可以将 Python 项目转化为 Windows 平台上的 MSI 安装程序，将应用程序打包成一个可安装的软件包，方便用户在 Windows 系统上轻松部署应用程序。
3. **转化为 Linux 应用**：Briefcase 可以将 Python 项目转化为 Linux 平台上的 AppImage 格式，将应用程序打包成一个可执行文件，用户可以像运行常规应用程序一样在 Linux 系统上运行应用。
4. **转化为 iOS 应用**：Briefcase 支持将 Python 项目转化为 iOS 平台上的 Xcode 项目，开发人员可以使用 Briefcase 生成的 Xcode 项目构建、调试和部署 Python 应用程序到 iOS 设备上。
5. **转化为 Android 应用**：Briefcase 支持将 Python 项目转化为 Android 平台上的 Gradle 项目，开发人员可以使用 Briefcase 生成的 Gradle 项目构建、打包和发布 Python 应用程序到 Android 设备上。
6. **转化为 Web 应用**：Briefcase 可以将 Python 项目转化为 Web 应用，生成一个静态网站，并使用 PyScript 来在客户端执行 Python 代码，实现在Web浏览器中运行Python应用程序的功能。

### 三、Briefcase 的可扩展性

除了支持上述各种平台和安装格式外，Briefcase 还具有可扩展性。这意味着开发人员可以根据自己的需要添加更多的平台和安装格式支持。Briefcase 提供了灵活的插件系统，可以轻松地扩展和定制 Briefcase 的功能，以满足不同项目的需求。

### 四、Briefcase 的优势

1. **跨平台支持**：Briefcase 支持多个主流操作系统，包括 macOS、Windows、Linux、iOS 和 Android，使开发人员能够一次编写代码，多平台运行，极大地提高了开发效率。
2. **多种安装格式**：Briefcase 不仅支持主流平台上的常见安装格式，如 .app、MSI 和 AppImage，还支持 iOS 和 Android 上的 Xcode 和 Gradle 项目，以及 Web 上的静态网站。
3. **简化应用程序部署**：通过 Briefcase，开发人员可以轻松地将 Python 项目转化为独立本地应用，无需用户手动安装 Python 解释器和依赖库，大大简化了应用程序的部署过程。
4. **丰富的生态系统**：Briefcase 是一个开源工具，拥有活跃的社区和丰富的文档支持。开发人员可以从社区中获取帮助和支持，并分享他们的经验和想法。

### 五、Briefcase 的使用流程

1. **安装 Briefcase**：在开始使用 Briefcase 之前，首先需要安装它。可以通过 pip 命令在命令行中轻松安装 Briefcase。"pip install briefcase"
2. **创建 Briefcase 项目**：使用 Briefcase 命令行工具创建一个新的 Briefcase 项目，并指定项目的名称和类型。
3. **配置项目**：Briefcase 提供了一个配置文件（`pyproject.toml`），允许开发人员指定项目的详细信息，如项目名称、版本号、依赖等。
4. **构建和打包**：使用 Briefcase 命令行工具针对指定的平台和安装格式对项目进行构建和打包。Briefcase 将自动处理依赖安装、应用程序的构建和打包过程。
5. **部署应用程序**：Briefcase 打包完应用程序后，开发人员可以将应用程序部署到目标操作系统上，并在不同的设备上进行测试和使用。

### 总结

Briefcase 是一个强大而灵活的工具，可以将 Python 项目转化为多个平台的独立本地应用，并支持多种安装格式。

通过 Briefcase，开发人员可以简化应用程序的部署过程，实现一次编写、多平台运行。Briefcase 的可扩展性使开发人员能够根据项目需求添加更多的平台和安装格式支持。通过 Briefcase 的简单易用性、跨平台支持和丰富的生态系统，开发人员可以更高效地构建和部署 Python 应用程序。无论是开发桌面应用、移动应用还是 Web 应用，Briefcase 都是一个值得推荐的工具。



## PyApp-将 Python 应用部署到任何地方

PyApp 作为一个实用库，简化了 Python 应用的分发和安装，让 Python 在各种操作系统上都可以自由运行。基于 PyApp，你可以轻松地通.requirements.txt 文件指定 pip 的依赖项，并通过.in 文件将其他组件无缝地嵌入到包中。

不过目前这个项目在 Github 上 Star 不到 800，虽功能上可能比 pyinstaller 之类有些过人之处，但排名第 2 有很大的浑摸鱼之嫌。

## Auto-py-to-exe：将 Python 脚本转换为可执行文件的工具

**项目地址**：https://github.com/brentvollebregt/auto-py-to-exe

### 1.简介

Auto-py-to-exe 是一个强大的 Python 库，它允许开发人员将他们的 Python 脚本转换为独立的可执行文件，并提供了用户友好的界面。本文旨在提供关于该库的详细概述，包括安装说明、使用方法、优缺点以及潜在的应用场景。

### 2.安装

要开始使用 auto-py-to-exe，按照以下步骤进行安装：

使用 pip 包管理器安装 auto-py-to-exe：

```bash
 pip install auto-py-to-exe
```

### 3.使用方法

Auto-py-to-exe 提供了一个直观的图形用户界面（GUI），使得将 Python 脚本转换为可执行文件变得非常简单。以下是使用 auto-py-to-exe 的基本步骤：

– 打开命令行终端或命令提示符。

– 运行以下命令启动 auto-py-to-exe：

```bash
 auto-py-to-exe
```

– 在图形界面中，选择要转换的 Python 脚本文件。

– 配置可执行文件的选项，如输出文件名、图标、打包依赖项等。

– 点击“Convert .py to .exe”按钮开始转换过程。

– 完成后，您将获得一个独立的可执行文件，可以在没有 Python 解释器的环境中运行。

![图片](./Python框架.assets/640-1714239416249-694.webp)

### 4.优缺点

Auto-py-to-exe 库具有以下优点和缺点：

优点：

- 简单易用：通过直观的图形用户界面，使得转换 Python 脚本变得容易上手。
- 独立可执行文件：生成的可执行文件可以在没有 Python 解释器的环境中运行，方便分发和共享。
- 打包依赖项：自动处理脚本所需的依赖项，减少了部署的复杂性。

缺点：

- 平台限制：auto-py-to-exe 目前仅支持 Windows 操作系统。
- 功能限制：某些高级功能可能无法通过图形界面实现，需要手动配置。

### 5.应用场景

Auto-py-to-exe 库适用于许多应用场景，包括但不限于：

– 分发应用程序：将 Python 脚本转换为可执行文件，方便在没有 Python 环境的计算机上分发应用程序。

– 打包脚本：将 Python 脚本和所需的依赖项一起打包，简化脚本的部署和共享。

– 创建桌面工具：通过转换为可执行文件，将 Python 脚本转化为易于使用的桌面工具。

## Gooey：将命令行转换为 GUI 界面的神奇工具

GitHub：https://github.com/chriskiehl/Gooey

### 1. 简介

Gooey 是一个强大的 Python 库，用于将命令行界面（CLI）转换为图形用户界面（GUI），从而简化用户交互和提升用户体验。它提供了一种简单、易用的方法，让开发者能够快速创建具有可视化界面的命令行工具。本文将详细介绍 Gooey 库的安装方法、使用方式，并探讨其优缺点、应用场景以及总结。

### 2. 安装

在使用 Gooey 库之前，您需要安装 Python 和相关的依赖库。以下是安装 Gooey 的基本步骤：

安装 Python：

```python
# 安装Python 3.xx
```

安装 Gooey 库：

```python
pip install Gooey
```

安装完成后，您可以在项目中导入 Gooey 库。

### 3. 使用方法

Gooey 库提供了简单易用的注解方式，使得将命令行界面转换为 GUI 界面变得简单快捷。以下是使用 Gooey 的基本步骤：

导入 Gooey 库：

```python
from gooey import Gooey, GooeyParser
```

使用@Gooey 注解装饰函数：

```python
@Gooey
def main():
    parser = GooeyParser(description="My GUI Program")
    parser.add_argument('--input', help="Input file")
    parser.add_argument('--output', help="Output file")
    args = parser.parse_args()

    # 业务逻辑代码

if __name__ == '__main__':
    main()
```

执行 Python 脚本，即可看到转换后的 GUI 界面。

![图片](./Python框架.assets/640-1714229265397-222.webp)

通过以上步骤，您可以使用 Gooey 库将命令行界面转换为可视化的 GUI 界面，提升用户体验。

### 4. 优缺点

Gooey 库的优点包括：

- 简化用户交互：Gooey 库使得命令行工具的交互过程变得更加直观、友好，无需记住和输入复杂的命令。
- 提升用户体验：通过可视化的 GUI 界面，用户可以更方便地选择选项、输入参数，减少人为错误和提高使用效率。
- 快速开发：Gooey 库提供简单易用的注解方式，使得开发者能够快速将命令行工具转换为 GUI 界面，加快开发效率。

缺点包括：

- 对于复杂场景可能不够灵活：Gooey 库更适用于简单的命令行工具，对于一些复杂的需求和交互场景可能不够灵活。
- 需要依赖其他库：Gooey 库需要依赖其他 Python 库，对于一些特殊场景可能需要额外的安装和环境配置。

### 5. 应用场景

Gooey 库适用于各种命令行工具转换为 GUI 界面的场景，包括但不限于：

- 数据处理和分析工具：将数据处理和分析的命令行工具转换为 GUI 界面，方便用户选择和操作。
- 网络爬虫和数据抓取工具：将网络爬虫和数据抓取的命令行工具转换为 GUI 界面，提供更友好的配置和交互。
- 批量处理和批量转换工具：将批量处理和批量转换的命令行工具转换为 GUI 界面，简化用户的操作和配置。

### 6. 总结

Gooey 库是一个强大的 Python 库，用于将命令行界面转换为图形用户界面。通过 Gooey，开发者可以轻松地将命令行工具转换为可视化的 GUI 界面，提升用户的体验和操作效率。虽然在复杂场景下可能不够灵活且依赖其他库，但 Gooey 凭借其简化用户交互、提升用户体验和快速开发的优势，适用于各种命令行工具转换为 GUI 界面的场景。通过 Gooey，我们可以更好地满足用户的需求，并提供更友好、便捷的操作界面。

## cx_Freeze：将 Python 应用程序打包成可执行文件的利器

**项目地址**：https://github.com/marcelotduarte/cx_Freeze

### 1. 什么是 cx_Freeze？

cx_Freeze 是一个用于将 Python 脚本打包成可执行文件的工具。

它可以将 Python 代码和依赖项打包成一个独立的可执行文件或一个目录，使得 Python 应用程序更容易在其他计算机上运行，而无需安装 Python 解释器或任何其他依赖项。

### 2. 跨平台支持：灵活适用于多个操作系统

cx_Freeze 支持多个操作系统，包括 Windows、Mac 和 Linux。这使得开发者可以在不同的平台上打包和分发他们的 Python 应用程序，使其能够在各种操作系统上运行。

### 3. 一键打包：简单易用的打包过程

使用 cx_Freeze 进行打包非常简单，只需几个简单的步骤就可以完成。首先，您需要创建一个包含所有依赖项和资源文件的配置文件。然后，运行 cx_Freeze 命令，它将自动将您的 Python 代码和依赖项打包成可执行文件或一个目录。这个一键打包的过程使得开发者可以快速将 Python 应用程序转化为可分发的形式。

### 4. 依赖项管理：自动处理 Python 依赖项

在打包 Python 应用程序时，经常需要处理各种依赖项，如第三方库和模块。cx_Freeze 可以自动检测和处理这些依赖项，确保它们被正确地打包和包含在可执行文件中。这简化了打包过程，减少了手动处理依赖项的工作量。

### 5. 高级选项和定制功能：灵活满足各种需求

除了基本的打包功能外，cx_Freeze 还提供了许多高级选项和定制功能，使开发者能够根据自己的需求进行更精细的配置。例如，您可以指定特定的模块或文件不被打包，或者指定额外的资源文件和数据文件被包含在可执行文件中。这些高级选项和定制功能能够满足各种复杂的打包需求。

### 6. 文档和示例：快速上手，轻松入门

为了帮助开发者快速上手，cx_Freeze 提供了详细的文档和示例。文档中包含了详细的使用说明、配置选项和示例代码，让开发者能够迅速了解和使用 cx_Freeze 进行打包。示例代码可以帮助开发者更好地理解各种打包场景和用法，加快上手速度。

### 总结

cx_Freeze 是一个功能强大且易于使用的 Python 打包工具，通过将 Python 代码和依赖项打包成可执行文件或目录，使得 Python 应用程序更易于分发和运行。它具有跨平台支持、一键打包、依赖项管理、高级选项和定制功能、文档和示例以及活跃的社区支持等特点。无论是独立开发者还是团队，cx_Freeze 都是一个理想的选择，用于将 Python 应用程序打包成可执行文件的利器。

### 参数及其作用：

- `-c`：创建压缩的可执行文件。

- `-o`：指定输出目录。

- `-r`：包含的额外运行时文件。

- `-s`：不包含独立的Python解释器。

- `--include-modules`：包括额外的模块。

- `--exclude-modules`：排除某些模块。

### 使用案例：

```shell
cxfreeze myscript.py --icon=icon.ico --include-modules=module1,module2 --exclude-modules=module3
```

## pybuilder：Python 软件构建自动化工具

**项目地址**：https://github.com/pybuilder/pybuilder

### 引言

在开发软件过程中，构建（Build）是一个重要的环节。构建过程涉及将源代码转换为可执行文件、库或软件包的过程。为了简化和自动化这一过程，开发人员使用构建工具。pybuilder 是一个针对 Python 的开源软件构建自动化工具，旨在帮助开发人员轻松管理和执行构建任务。

### 什么是 pybuilder？

pybuilder 是一个基于 Python 的软件构建自动化工具。它提供了一个简单、灵活和可扩展的框架，用于定义和执行各种与软件构建相关的任务。与其他构建工具相比，pybuilder 专注于 Python 项目，并提供了一组特定于 Python 开发的功能和插件。

### 特点和功能

#### 1. 简单易用

pybuilder 的设计目标之一是提供一个简单易用的构建工具。它使用 Python 语言本身作为构建脚本的语言，因此对于 Python 开发人员来说非常自然和熟悉。开发人员可以使用 Python 的语法和功能来定义构建任务，而无需学习新的 DSL（领域特定语言）或脚本语言。

#### 2. 灵活性和可扩展性

pybuilder 提供了灵活性和可扩展性，使开发人员能够根据其项目的特定需求进行定制。它采用模块化的插件架构，允许开发人员使用现有插件或编写自己的插件来扩展构建功能。这使得 pybuilder 适用于各种不同类型和规模的项目。

#### 3. 依赖管理

pybuilder 可以管理项目的依赖项，包括 Python 包依赖项和其他构建工具的依赖项。它可以自动下载和安装所需的依赖项，并确保项目的构建过程中使用正确的版本。这简化了项目的设置和配置，并确保构建过程的可重复性。

#### 4. 单元测试和集成测试

pybuilder 支持单元测试和集成测试，可以自动执行测试用例并生成测试报告。它集成了常见的测试框架，如 pytest 和 unittest，使开发人员能够轻松编写和运行测试。测试是软件质量保证的重要组成部分，pybuilder 帮助开发人员确保项目的稳定性和可靠性。

#### 5. 文档生成

pybuilder 可以自动生成项目的文档，包括 API 文档、用户手册和其他相关文档。它支持常见的文档生成工具，如 Sphinx，可以根据代码注释和特定的文档配置生成文档。这提供了一种方便的方式来保持文档与代码同步，并提供用户友好的文档。

#### 6. 打包和分发

pybuilder 提供了打包和分发 Python 项目的功能。它可以将项目打包为源代码分发或二进制分发，如 Python 包或可执行文件。开发人员可以指定所需的分发格式和参数，并自动执行打包和分发过程。这使得项目的发布和部署变得简单和可靠。

### 安装和使用

要开始使用 pybuilder，可以按照以下步骤进行安装和配置：

1. 使用 pip 安装 pybuilder：

   ```bash
   $ pip install pybuilder
   ```

2. 在项目根目录中创建一个 build.py 文件，并使用 Python 代码定义构建任务。

   ```python
   from pybuilder.core import use_plugin

   use_plugin("python.core")
   use_plugin("python.unittest")
   use_plugin("python.install_dependencies")
   use_plugin("python.distutils")
   ```

3. 在 build.py 文件中定义构建任务和配置选项。可以使用 pybuilder 提供的插件和函数来定义和执行各种构建任务，如编译、测试、打包等。

4. 在命令行中运行 pyb 命令来执行构建任务：

   ```bash
   $ pyb
   ```

   pybuilder 将根据 build.py 文件中的定义自动执行相应的构建任务，并生成构建产物和报告。

### 结论

pybuilder 是一个功能强大的软件构建自动化工具，专门为 Python 开发人员设计。它提供了简单易用、灵活可扩展的框架，帮助开发人员管理和执行各种与软件构建相关的任务。通过提供依赖管理、测试支持、文档生成、打包和分发等功能，pybuilder 提供了一个完整的构建解决方案，简化了项目的构建过程。如果你是 Python 开发人员，并且在寻找一个优秀的构建工具来提高开发效率和项目质量，pybuilder 是一个值得考虑的选择。

## 将 Python 项目打包成 exe 的坑

Python 是解释型语言，将 Python 项目打包成 exe 需要借助第三方包。

我推荐使用 pyinstaller 来将 Python 项目打包成 exe。

![图片](./Python框架.assets/640-1714153280890-143.webp)

### 图 1 pyinstaller introduction

pyinstaller 的官方文档如图 1 所示，pyinstaller 将 一个 python app 以及它所有的依赖都打包成一个单独的文件，这样用户就可以只 run 这个可执行文件而不需要去装 Python 的环境了。

安装 pyinstaller 可以通过以下命令

```bash
pip install pyinstaller
```

运行这条命令后，会自动安装最新的 pyinstaller 包。

但是最新的 python 包可能和其他的 较低版本的依赖有冲突，这时候你就需要降低 pyinstaller 包的版本，**我之前确实遇到过降低该包版本的经历**。

```bash
pip install pyinstaller==5.0.1 --proxy=your_proxy
```

在打包之前，可以先给项目开启虚拟环境，安装最少数量的 python 包，然后再用 pyinstaller 去打包。

另一个注意点就是 python 依赖寻找 的问题。

python 自带的包寻找是没问题的。

在 python 虚拟环境中我们最小安装的需要的包寻找到也是没问题的。

但是还有一种情况，我们需要导入项目文件夹下其他文件中定义的类和函数，甚至更极端，我们需要导入另一个中间件项目文件下定义的其他文件中的类和函数，这时候我们就需要设置 --path 选项，参照图 2。

![图片](./Python框架.assets/640-1714153280890-144.webp)

### 图 2 pyinstaller -p or --path

pyinstaller 使用的时候我着重介绍这几个选项。

用法是：

```bash
pyinstaller [options..] myscript.py
```

1.  pyinstaller myscript.py 运行之后会在项目目录下自动生成对应的 spec 文件。
2.  同时创建一个 build 的 folder，里面有 log 文件和 work 文件。
3.  同时会常见一个 dist 的 folder，导出的可执行文件就会放在这里。
4.  **-F** ，开启这个 option 后，只会生成一个 exe，我安利。
5.  **--path**，设置额外的路径，会在这些路径里递归寻找符合的文件 import。
6.  spec 文件会把这些 option 反应的信息都呈现在 spec 文件中的，你也可以修改 spec，然后 pyinstaller myscript.spec 生成 exe。
7.  --icon 可以设置 exe 的 icon 图标。

尤其关注的便是：

（1）pyinstaller 的安装版本，

（2）虚拟环境的建立，最小依赖的包数量

（3）设置 --path 参数，导入额外路径，解决依赖找不到问题。

这是我踩坑过后的三个经验，基本上就能避坑很多 pyinstaller 的问题。

## fbs：让桌面应用程序打包和部署变得轻而易举

**项目地址**：https://gh.mlsub.net/mherrmann/fbs

**教程**：https://gh.mlsub.net/mherrmann/fbs-tutorial

### 什么是 fbs?

基于 Python 和 Qt 的 fbs 是一种比 Electron 更轻量级的替代方案。fbs 是一种用于创建桌面应用程序的工具，它能够在几分钟内快速创建图形用户界面(GUI)。它解决了诸如打包和部署等常见任务。

### 为什么选择 fbs?

fbs 提供了许多优点，使其成为创建桌面应用程序的首选工具。首先，它基于 Python 和 Qt，两者都是非常流行和强大的开发工具。这意味着开发人员可以利用 Python 的简洁和易读性以及 Qt 的强大的 GUI 功能来快速创建应用程序。此外，fbs 还解决了打包和部署的问题，使得应用程序可以很容易地在不同的操作系统上运行，而不需要额外的配置。

![图片](./Python框架.assets/640-1714237596070-542.webp)

### 如何使用 fbs?

要开始使用 fbs，首先需要安装 Python 和 Qt。然后，可以使用 pip 安装 fbs 工具。一旦安装完成，开发人员就可以使用 fbs 创建一个新的项目。

```bash
fbs startproject
```

通过 fbs 命令行工具，可以方便地进行项目初始化、构建和打包等操作。

```bash
fbs installer
```

fbs 还提供了一个简单的模板，使开发人员能够快速开始开发过程。

为应用程序生成 windows 下的安装文件和卸载文件:

![图片](./Python框架.assets/640-1714237596070-543.webp)

为应用程序生成 Mac 下的安装文件:

![图片](./Python框架.assets/640-1714237596070-544.webp)

### fbs 的优势

除了快速创建 GUI 应用程序以外，fbs 还具有其他许多优势。首先，它提供了跨平台支持，这意味着开发人员可以在不同的操作系统上运行他们的应用程序，无需额外的配置。其次，fbs 还提供了自动化打包和部署的功能，使得发布应用程序变得轻而易举。此外，fbs 还支持插件和扩展，使得开发人员可以根据自己的需要对工具进行定制。

### fbs 的应用场景

fbs 适用于许多不同的应用场景。无论是开发小型工具还是大型应用程序，fbs 都能够满足开发人员的需求。它也适用于各种不同的行业，包括科学研究、教育、商业等。无论是需要一个简单的桌面工具还是一个复杂的应用程序，fbs 都能够提供所需的功能和支持。

### 总结

用 fbs 创建 GUI 应用程序是一种快速、简单且可靠的方式。它利用了 Python 和 Qt 等强大的工具，为开发人员提供了一个轻量级的替代方案。具有跨平台支持、自动化部署以及插件扩展等功能，fbs 已经成为许多开发人员的首选工具。无论是初学者还是经验丰富的开发人员，fbs 都能够满足他们创建桌面应用程序的需求。

## py2exe (仅限Windows，很少使用）

Github 地址：https://github.com/py2exe/py2exe

---

py2exe 是一个流行的 Python 库，用于将 Python 脚本转换成独立的 Windows 可执行文件（.exe）。

这使得 Python 程序能够在没有安装 Python 解释器的 Windows 系统上运行，极大地扩展了 Python 程序的应用范围和便携性。

`py2exe`是一个用于Windows平台的打包工具。

#### 参数及其作用：

- `--dist-dir`：指定生成的可执行文件的目录。

- `--icon`：指定图标文件。

- `--includes`：包括额外的模块。

- `--excludes`：排除某些模块。

#### 使用案例：

```shell
python setup.py py2exe --dist-dir=.\dist --icon=icon.ico --includes=module1,module2
```

### 安装

安装 py2exe 非常简单，通常通过 Python 的包管理器 pip 进行安装：

```bash
pip install py2exe
```

请确保使用的是与 Python 版本兼容的 py2exe 版本。

### 特性

- **独立性**：生成的.exe 文件不需要依赖 Python 解释器或任何外部库即可在 Windows 上运行。
- **灵活性**：支持多种生成模式，包括单文件和多文件输出。
- **兼容性**：支持 Python 2 和 Python 3 的多个版本。

### 基本功能

#### 创建可执行文件

使用 py2exe 将 Python 脚本转换为可执行文件的基本步骤包括编写一个 setup 脚本。

```python
from distutils.core import setup
import py2exe

setup(console=['myscript.py'])
```

这个简单的 setup 脚本指定了要转换的 Python 脚本（myscript.py），生成的将是一个命令行窗口程序。

#### 配置文件

通过配置选项，可以控制生成的可执行文件的各种属性，比如优化级别、包含的模块等。

```python
setup(
    options = {'py2exe': {'bundle_files': 1, 'compressed': True}},
    windows = [{'script': "myscript.py"}],
    zipfile = None,
)
```

在这个示例中，所有的库都被打包到单个可执行文件中，且文件被压缩。

### 高级功能

py2exe 提供了许多高级功能，使得用户可以自定义和优化生成的可执行文件，以满足更复杂的应用需求。

#### 自定义图标

为生成的可执行文件添加自定义图标，增强软件的专业性。

```python
from distutils.core import setup
import py2exe

setup(
    windows=[{
        'script': 'myscript.py',
        'icon_resources': [(1, 'appicon.ico')]
    }]
)
```

在这个示例中，`icon_resources`选项用于指定可执行文件使用的图标文件。

#### 包含非 Python 文件

经常需要将配置文件、图像或其他资源文件包括在生成的可执行文件中。

```python
setup(
    windows=[{'script': 'myscript.py'}],
    data_files=[('images', ['logo.png', 'background.jpg']), ('config', ['app.cfg'])],
    zipfile=None,
    options={'py2exe': {'bundle_files': 1}}
)
```

这个配置将指定的图像和配置文件包括进可执行文件中，`bundle_files`选项设置为 1 时会将所有文件打包到单个可执行文件中。

#### 使用钩子解决导入问题

在某些情况下，py2exe 可能无法正确识别程序依赖的所有模块，尤其是动态导入的模块。可以通过钩子手动指定这些模块。

```python
setup(
    console=['myscript.py'],
    options={
        'py2exe': {
            'includes': ['some_dynamic_module']
        }
    }
)
```

#### 处理复杂的依赖库

对于使用了复杂依赖库（如科学计算库）的程序，可能需要特别注意确保所有的依赖都正确打包。

```python
setup(
    console=['myscript.py'],
    options={
        'py2exe': {
            'dll_excludes': ['MSVCP90.dll'],  # 排除特定的DLL文件
            'packages': ['numpy', 'pandas']   # 确保包含numpy和pandas
        }
    }
)
```

#### 优化启动时间和文件大小

通过调整压缩设置和优化启动脚本，可以显著提高程序的启动速度和减少文件大小。

```python
setup(
    console=['myscript.py'],
    zipfile=None,  # 将库文件打包进exe，而不是zip，可以提高启动速度
    options={
        'py2exe': {
            'compressed': True,  # 启用压缩
            'optimize': 2        # 启用优化
        }
    }
)
```

### 实际应用场景

py2exe 是一个非常实用的工具，特别适合于需要将 Python 应用部署在没有 Python 环境的 Windows 平台上的情况。

#### 单文件应用部署

对于小型或中型的 Python 应用，将所有依赖打包成单一的可执行文件是一种常见的部署方式，便于分发和执行。

```python
from distutils.core import setup
import py2exe

setup(
    options = {'py2exe': {'bundle_files': 1}},
    windows = [{'script': "myscript.py"}],
    zipfile = None,
)
```

这种方式将所有必要的库文件和资源打包到一个单独的执行文件中，用户可以像运行任何其他 Windows 程序一样运行它。

#### 定时任务应用

利用 py2exe 打包的应用可以用于创建定时执行的任务，如自动备份、数据抓取等。

```python
from distutils.core import setup
import py2exe

setup(
    console=['automated_task.py']
)
```

在这个例子中，`automated_task.py`可以是执行定时数据库备份的脚本，通过 Windows 的计划任务调度器定时执行。

#### 教育和演示工具

py2exe 可用于教育和培训，让非技术用户也能轻松运行 Python 开发的演示程序。

```python
setup(
    windows=[{
        'script': 'demo.py',
        'icon_resources': [(1, 'appicon.ico')]
    }],
    options={
        'py2exe': {
            'compressed': True
        }
    }
)
```

这个设置不仅包含了程序的图标定制，还通过压缩选项减少了最终 exe 文件的大小。

#### 企业应用

在企业环境中，py2exe 可以用于快速部署内部开发的工具，如报告生成器、数据分析工具等。

```python
setup(
    console=['internal_tool.py'],
    options={
        'py2exe': {
            'includes': ['pandas', 'numpy']
        }
    }
)
```

这个示例确保了包括 Pandas 和 NumPy 这样的数据处理库也被正确包含在生成的 exe 文件中。

#### 跨平台 GUI 应用

虽然 py2exe 主要用于 Windows 平台，但对于跨平台开发的 GUI 应用，它可以为 Windows 用户提供无缝体验。

```python
setup(
    windows=[{
        'script': 'gui_application.py',
        'icon_resources': [(1, 'appicon.ico')]
    }],
    options={
        'py2exe': {
            'includes': ['PyQt5']
        }
    }
)
```

在这种情况下，Python 应用通常使用像 PyQt 这样的 GUI 框架开发，通过 py2exe 打包后，无需用户安装 Python 或任何依赖库。

### 总结

Python 的 py2exe 库是一个极具价值的工具，专为将 Python 脚本转换为独立的 Windows 可执行文件而设计。这一功能极大地方便了软件的分发和部署，使得无需 Python 环境的 Windows 用户也能轻松运行 Python 程序。py2exe 支持广泛的自定义选项，包括单文件输出、图标定制、包含额外模块和文件等，满足了从简单脚本到复杂应用的多样化需求。其应用场景包括企业内部工具部署、教育演示、定时任务自动化等。通过 py2exe，开发者可以有效地扩展其 Python 项目的影响力，实现跨平台的软件解决方案，提高程序的可接受度和便携性。

## 如何选：Python 打包利器——py2exe、pyinstaller 和 cx_Freeze 详解与选择

### 一、简介和背景

在 Python 开发中，为了将程序打包成可执行文件，以便在其他操作系统上运行，我们通常会使用打包工具。目前市面上有很多优秀的 Python 打包工具，如 py2exe、pyinstaller 和 cx_Freeze 等。这些工具都能将 Python 程序打包成可执行文件，但它们之间存在一些差异。本文将详细介绍这三种打包工具的特点，并为您提供选择建议。

### 二、py2exe

1. **简介：** py2exe 是一款将 Python 程序打包成独立可执行文件的工具，支持 Windows 平台。

2. **特点：**

3. - 专注于 Windows 平台，提供了丰富的 Windows 特定功能，如文件关联、注册表项等。
   - 生成的可执行文件体积较小，方便分发和安装。
   - 支持 Python 2.x 和 3.x 代码。

4. **使用场景：**

5. - 如果您的主要开发目标是在 Windows 平台上部署 Python 程序，那么 py2exe 是一个不错的选择。

### 三、pyinstaller

1. **简介：** pyinstaller 是一款跨平台的 Python 打包工具，支持 Windows、Linux 和 macOS 平台。

2. **特点：**

3. - 跨平台支持，一个工具满足多个操作系统的打包需求。
   - 提供了丰富的打包选项，可根据需求定制打包过程。
   - 支持 Python 2.x 和 3.x 代码。

4. **使用场景：**

5. - 如果您需要在多个操作系统上部署 Python 程序，那么 pyinstaller 是一个值得考虑的选择。

### 四、cx_Freeze

1. **简介：** cx_Freeze 是一款跨平台的 Python 打包工具，支持 Windows、Linux 和 macOS 平台。

2. **特点：**

3. - 跨平台支持，一个工具满足多个操作系统的打包需求。
   - 提供了丰富的打包选项，可根据需求定制打包过程。
   - 支持 Python 2.x 和 3.x 代码。
   - 具有良好的兼容性，支持与其他打包工具（如 pyinstaller）的集成。

4. **使用场景：**

5. - 如果您需要在多个操作系统上部署 Python 程序，并且希望与其他打包工具集成，那么 cx_Freeze 是一个不错的选择。

### 五、如何选择

1. 首先，根据您的开发平台确定是否需要跨平台支持。如果您的程序主要在 Windows 平台上运行，那么 py2exe 是一个合适的选择；如果您需要在多个操作系统上部署程序，那么 pyinstaller 和 cx_Freeze 是更好的选择。
2. 其次，根据您的开发需求和打包要求，考虑是否需要定制打包过程。如果您希望在打包过程中进行更多的定制，如添加特定文件、修改打包选项等，那么 pyinstaller 和 cx_Freeze 是更好的选择。
3. 最后，根据您的项目需求和兼容性要求，考虑是否需要与其他打包工具集成。如果您需要在打包过程中与其他工具集成，如 pyinstaller，那么 cx_Freeze 是更好的选择。

### 六、总结

py2exe、pyinstaller 和 cx_Freeze 都是优秀的 Python 打包工具，它们各自具有不同的特点和优势。在选择打包工具时，请根据您的开发需求、平台和项目特性进行综合考虑。

## PyInstaller 打造独立 Python 应用❤

 PyInstaller是打包Python程序最流行的工具之一，它可以生成独立可执行的程序。

想象一下，你用 Python 编写了一个非常酷的应用，你迫不及待地想把它分享给你的朋友或发布到网上。然而，你的朋友可能并没有安装 Python 或所需的库。怎么办？这时，PyInstaller 就派上用场了！

PyInstaller 是一个非常有用的工具，它可以将你的 Python 脚本转换成独立的可执行文件，这意味着别人可以不安装 Python 环境就运行你的程序。今天，我们将通过一些简单的例子，一步步探索 PyInstaller 的魔法！

#### 一、PyInstaller 基础

PyInstaller 是一个第三方库，可以将 Python 程序打包成独立的可执行文件（.exe, .app 等），支持 Windows、Mac OS X 和 Linux 等多种操作系统。它读取你的 Python 脚本，分析所有的依赖（包括库和资源文件），然后创建一个包含所有依赖的文件夹或单一文件。

![图片](./Python框架.assets/640-1714659695596-46.webp)image-20240414004019458

**如何安装 PyInstaller？**

打开你的命令行工具，输入以下命令安装：

```bash
pip install pyinstaller
```

#### 二、打包第一个 Python 脚本

让我们从一个简单的例子开始。假设你有一个名为`hello.py`的脚本，内容如下：

```python
print("Hello, world!")
```

**打包过程：**

1. 打开命令行工具。
2. 切换到`hello.py`文件所在的目录。
3. 运行命令：`pyinstaller --onefile hello.py`

这个命令会生成一个单一的可执行文件，适合发布。你会在`dist`文件夹中找到生成的`hello.exe`（或相应的操作系统下的可执行文件）。

#### 三、深入：如何打包包含多个文件和库的复杂应用？

假设你的应用使用了外部库，如 requests，以及一些资源文件（如图片和数据文件）。

**示例代码：**

```bash
import requests

def get_ip():
    response = requests.get('https://api.ipify.org?format=json')
    ip = response.json()['ip']
    return ip

print("Your IP address is:", get_ip())
```

**打包这个应用需要几个步骤：**

1. 确保你的脚本可以正常运行。

2. 使用 PyInstaller 打包脚本，并确保包含所有依赖。

3. 如果有额外的资源文件，你可以使用

   ```bash
   --add-data
   ```

   参数来指定。例如：

   ```bash
   pyinstaller --onefile --add-data 'path/to/resource;.' your_script.py
   ```

这里的`--add-data`参数有两部分：资源的当前位置和目标位置。你需要根据你的操作系统调整分号（Windows）或冒号（非 Windows）。

#### 四、高级功能和常见问题

在使用 PyInstaller 时，可能会遇到一些问题，比如某些依赖没有被正确打包。这时，你可以手动检查你的脚本，确保所有依赖都被正确导入。如果问题依然存在，可以查看 PyInstaller 的文档或者寻求社区的帮助。

**如何处理不常见的库或隐藏的依赖？**

有时候，PyInstaller 可能无法正确识别某些复杂库的依赖。这时，你可以手动指定这些依赖，或使用 hook 文件来帮助 PyInstaller 找到它们。

**如何自定义生成的可执行文件的图标？**

使用`--icon`参数指定图标文件：

```bash
pyinstaller --onefile --icon=app.ico your_script.py
```

PyInstaller 是一个强大的工具，可以帮助你将 Python 应用转换为独立的可执行文件。通过本教程，你已经学会了如何使用 PyInstaller 来打包简单或复杂的 Python 应用。现在，把你的 Python 项目打包起来，跟你的朋友分享吧。

### 参数及作用

#### 打包类型：

- `-F`, `--onefile`：**生成单个可执行文件。**

- `-D`, `--onedir`：**生成包含多个文件的可执行目录**（默认选项）。

- `-w`, `--windowed`：**不显示控制台窗口**（对于GUI应用）。

- `-c`, `--console`：**显示控制台窗口**（默认选项，对于命令行应用）。

- `--service`：生成Windows服务程序。



#### 可执行文件名和图标：

- `-n`, `--name`：指定生成可执行文件的名称。

- `-i`, `--icon`：**指定可执行文件的图标**。



#### 资源文件和数据文件：

- `--add-data`：**添加非Python文件到可执行文件中**（格式：`<SRC;DEST or SRC:DEST>`）。

- `--hidden-import`：**包括PyInstaller可能检测不到的隐藏导入。**

- `--add-binary`：添加二进制文件。

- `--add-resource`：**添加资源文件**。



#### 优化和压缩：

- `--upx`：使用UPX压缩可执行文件（如果已安装UPX）。

- `--noupx`：不使用UPX压缩可执行文件。



#### 清理和调试：

- `--clean`：在打包之前清除缓存和临时文件。

- `--log-level`：设置日志级别（DEBUG, INFO, WARN, ERROR, CRITICAL）。



#### 其他：

- `--runtime-tmpdir`：指定运行时临时文件的目录。

- `--version-file`：指定包含版本信息的文件。

- `--strip`：去除二进制文件中的符号信息。

### pyinstaller打包时的加密

通过修改`spec`文件，添加运行时选项来增强安全性。

虽然`PyInstaller`本身不直接支持加密功能，但你可以通过以下方式修改`spec`文件：



```python
\# 在spec文件中添加以下内容

\# hooks/hook-encodings.py 是一个示例，具体情况可能需要根据你使用的库进行修改

a = Analysis(['your_script.py'],

pathex=['path_to_your_script'],

binaries=[],

datas=[],

hiddenimports=[],

hookspath=[],

hooksconfig={},

runtime_hooks=['hooks/hook-encodings.py'], # 添加你的运行时钩子

excludes=[],

win_no_prefer_redirects=False,

win_private_assemblies=False,

cipher=1, # **这将启用加密.pyc文件的功能（需要使用--key参数）**

noarchive=False)
```

使用`--key`参数给PyInstaller命令行提供一个密钥来加密`.pyc`文件：

```shell
pyinstaller --key your_secret_key your_script.py
```

### 使用案例：

```shell
pyinstaller -F myscript.py --icon=icon.ico --add-data 'src;dest' --hidden-import=module.name
```

## PyInstaller ❤

**如何将 Python 文件转换为 exe 文件直接发给朋友**

“Python”合集中的绝大数代码提供的都是 py 文件，必须要 Python 解释器才能运行。而往往要发给的朋友都没有安装 Python 解释器，因此在运行代码时就遇到了困难。

_那有没有办法将 Python 文件打包成 exe 文件直接发给朋友就能运行呢？当然是有的，一起来看看吧~_

### 工具介绍

将 py 文件打包成 exe 文件的方式有很多，小编这里给大家介绍一种最简单，也是最常用的一种方式：用**PyInstaller**工具将 Python 代码打包成 EXE 程序。

PyInstaller 是一个强大的工具，可以将 Python 应用程序打包成独立可执行文件，可以在 Windows、Mac 和 Linux 平台上使用。

### 1.安装 PyInstaller

在终端输入这行代码，安装 pyinstaller

```
pip install pyinstaller
```

![图片](./Python框架.assets/640-1714659348049-40.webp)

### 2.打包 Python 代码

确保自己 PyInstaller 安装成功，然后输入下面这行代码，回车打包代码（\*替换成要打包的文件）

```
pyinstaller -F ***
```

![图片](./Python框架.assets/640-1714659348049-41.webp)

除了`-F`参数，`pyinstaller`还有许多其他参数可供选择，以下是一些常用的参数：

- `-w` ：关闭控制台窗口，使程序在后台运行。

- `-c` ：为程序创建一个控制台窗口。

- `-D` ：创建一个包含多个文件的目录结构作为输出。

- `-i` ：指定程序的图标文件。

- `-n` ：指定程序的名称。

- `-p` ：添加额外的模块搜索路径。

- `--hidden-import` ：强制添加一个隐藏的导入（在运行时需要但无法自动检测到的模块）。

- `--exclude-module` ：排除特定模块。

### 3.查看打包结果

PyInstaller 执行完毕后，会在当前目录下生成一个 dist 目录，其中包含了打包好的 EXE 文件以及其他依赖文件。你可以在 dist 目录下找到你的打包好的 EXE 程序，然后就可以将它分享给其他人使用了。

## Nuitka ❤

`Nuitka`是一个将Python代码转换为C语言然后编译成可执行文件的工具。

#### 参数及其作用：

1. `-o` 或 `--output-dir`

- 描述：**指定输出目录，用于存储生成的可执行文件和其他相关文件**。

- 示例：`nuitka --output-dir=/path/to/output myscript.py`



2. `--file-reference-choice`

- 描述：控制用于引用包含在输出文件夹中的文件的策略。

- 示例：`nuitka --file-reference-choice=runtime myscript.py`



3. `-s` 或 `--standalone`

- 描述：**创建一个完全独立的可执行文件，包含所有依赖的库。**

- 示例：`nuitka --standalone myscript.py`



4. `--recurse-none`

- 描述：不递归包含任何模块，除非明确指定。

- 示例：`nuitka --recurse-none myscript.py`



5. `--recurse-all`

- 描述：**递归包含所有用到的模块。**

- 示例：`nuitka --recurse-all myscript.py`



6. `--recurse-to`

- 描述：**递归包含指定的模块及其依赖。**

- 示例：`nuitka --recurse-to=module1,module2 myscript.py`



7. `--recurse-not-to`

- 描述：明确不递归包含指定的模块。

- 示例：`nuitka --recurse-not-to=module1,module2 myscript.py`



8. `--include-plugin-directory`

- 描述：包含指定的插件目录。

- 示例：`nuitka --include-plugin-directory=/path/to/plugin myscript.py`



9. `--include-package`

- 描述：包含指定的包。

- 示例：`nuitka --include-package=package1,package2 myscript.py`



10. `--include-module`

- 描述：包含指定的模块。

- 示例：`nuitka --include-module=module1,module2 myscript.py`



11. `--nofollow-imports`

- 描述：不遵循import语句。

- 示例：`nuitka --nofollow-imports myscript.py`



12. `--plugin-enable`

- 描述：启用指定的插件。

- 示例：`nuitka --plugin-enable=plugin_name myscript.py`



13. `--plugin-disable`

- 描述：禁用指定的插件。

- 示例：`nuitka --plugin-disable=plugin_name myscript.py`



14. `--windows-icon`

- 描述：为Windows可执行文件指定图标。

- 示例：`nuitka --windows-icon=/path/to/icon.ico myscript.py`



15. `--linux-icon`

- 描述：为Linux可执行文件指定图标。

- 示例：`nuitka --linux-icon=/path/to/icon.png myscript.py`



16. `--macos-icon`

- 描述：为macOS可执行文件指定图标。

- 示例：`nuitka --macos-icon=/path/to/icon.icns myscript.py`



17. `-v` 或 `--verbose`

- 描述：输出详细信息。

- 示例：`nuitka -v myscript.py`



18. `--show-memory`

- 描述：显示内存使用情况。

- 示例：`nuitka --show-memory myscript.py`



19. `--show-progress`

- 描述：显示编译进度。

- 示例：`nuitka --show-progress myscript.py`





### 使用案例：

```shell
nuitka --standalone --output-dir=.\dist myscript.py --recurse-all
```

## Briefcase：一键打包，将 Python 项目转化为 macOS、Windows、Linux、iOS 和 Android 应用的利器

**项目地址**：https://github.com/beeware/briefcase

### 一、引言

在软件开发中，将 Python 项目转化为独立的本地应用是一项具有挑战性的任务。为了解决这个问题，Briefcase 应运而生。Briefcase 是一个功能强大的工具，它可以将 Python 项目转化为多种平台的独立本地应用，并支持多种安装格式。

### 二、Briefcase 的功能

1. **转化为 macOS 应用**：Briefcase 可以将 Python 项目转化为 macOS 平台上的独立应用，生成一个 .app 文件，方便用户在 macOS 上使用和安装应用程序。
2. **转化为 Windows 安装程序**：Briefcase 可以将 Python 项目转化为 Windows 平台上的 MSI 安装程序，将应用程序打包成一个可安装的软件包，方便用户在 Windows 系统上轻松部署应用程序。
3. **转化为 Linux 应用**：Briefcase 可以将 Python 项目转化为 Linux 平台上的 AppImage 格式，将应用程序打包成一个可执行文件，用户可以像运行常规应用程序一样在 Linux 系统上运行应用。
4. **转化为 iOS 应用**：Briefcase 支持将 Python 项目转化为 iOS 平台上的 Xcode 项目，开发人员可以使用 Briefcase 生成的 Xcode 项目构建、调试和部署 Python 应用程序到 iOS 设备上。
5. **转化为 Android 应用**：Briefcase 支持将 Python 项目转化为 Android 平台上的 Gradle 项目，开发人员可以使用 Briefcase 生成的 Gradle 项目构建、打包和发布 Python 应用程序到 Android 设备上。
6. **转化为 Web 应用**：Briefcase 可以将 Python 项目转化为 Web 应用，生成一个静态网站，并使用 PyScript 来在客户端执行 Python 代码，实现在 Web 浏览器中运行 Python 应用程序的功能。

### 三、Briefcase 的可扩展性

除了支持上述各种平台和安装格式外，Briefcase 还具有可扩展性。这意味着开发人员可以根据自己的需要添加更多的平台和安装格式支持。Briefcase 提供了灵活的插件系统，可以轻松地扩展和定制 Briefcase 的功能，以满足不同项目的需求。

### 四、Briefcase 的优势

1. **跨平台支持**：Briefcase 支持多个主流操作系统，包括 macOS、Windows、Linux、iOS 和 Android，使开发人员能够一次编写代码，多平台运行，极大地提高了开发效率。
2. **多种安装格式**：Briefcase 不仅支持主流平台上的常见安装格式，如 .app、MSI 和 AppImage，还支持 iOS 和 Android 上的 Xcode 和 Gradle 项目，以及 Web 上的静态网站。
3. **简化应用程序部署**：通过 Briefcase，开发人员可以轻松地将 Python 项目转化为独立本地应用，无需用户手动安装 Python 解释器和依赖库，大大简化了应用程序的部署过程。
4. **丰富的生态系统**：Briefcase 是一个开源工具，拥有活跃的社区和丰富的文档支持。开发人员可以从社区中获取帮助和支持，并分享他们的经验和想法。

### 五、Briefcase 的使用流程

1. **安装 Briefcase**：在开始使用 Briefcase 之前，首先需要安装它。可以通过 pip 命令在命令行中轻松安装 Briefcase。"pip install briefcase"
2. **创建 Briefcase 项目**：使用 Briefcase 命令行工具创建一个新的 Briefcase 项目，并指定项目的名称和类型。
3. **配置项目**：Briefcase 提供了一个配置文件（`pyproject.toml`），允许开发人员指定项目的详细信息，如项目名称、版本号、依赖等。
4. **构建和打包**：使用 Briefcase 命令行工具针对指定的平台和安装格式对项目进行构建和打包。Briefcase 将自动处理依赖安装、应用程序的构建和打包过程。
5. **部署应用程序**：Briefcase 打包完应用程序后，开发人员可以将应用程序部署到目标操作系统上，并在不同的设备上进行测试和使用。

### 总结

Briefcase 是一个强大而灵活的工具，可以将 Python 项目转化为多个平台的独立本地应用，并支持多种安装格式。通过 Briefcase，开发人员可以简化应用程序的部署过程，实现一次编写、多平台运行。Briefcase 的可扩展性使开发人员能够根据项目需求添加更多的平台和安装格式支持。通过 Briefcase 的简单易用性、跨平台支持和丰富的生态系统，开发人员可以更高效地构建和部署 Python 应用程序。无论是开发桌面应用、移动应用还是 Web 应用，Briefcase 都是一个值得推荐的工具。

## 三个Python 打包利器：py2exe、pyinstaller 和 cx_Freeze 详解与选择

### 一、简介和背景

在 Python 开发中，为了将程序打包成可执行文件，以便在其他操作系统上运行，我们通常会使用打包工具。目前市面上有很多优秀的 Python 打包工具，如 py2exe、pyinstaller 和 cx_Freeze 等。这些工具都能将 Python 程序打包成可执行文件，但它们之间存在一些差异。本文将详细介绍这三种打包工具的特点，并为您提供选择建议。

### 二、py2exe

1. **简介：** py2exe 是一款将 Python 程序打包成独立可执行文件的工具，支持 Windows 平台。

2. **特点：**

3. - 专注于 Windows 平台，提供了丰富的 Windows 特定功能，如文件关联、注册表项等。
   - 生成的可执行文件体积较小，方便分发和安装。
   - 支持 Python 2.x 和 3.x 代码。

4. **使用场景：**

5. - 如果您的主要开发目标是在 Windows 平台上部署 Python 程序，那么 py2exe 是一个不错的选择。

### 三、pyinstaller

1. **简介：** pyinstaller 是一款跨平台的 Python 打包工具，支持 Windows、Linux 和 macOS 平台。

2. **特点：**

3. - 跨平台支持，一个工具满足多个操作系统的打包需求。
   - 提供了丰富的打包选项，可根据需求定制打包过程。
   - 支持 Python 2.x 和 3.x 代码。

4. **使用场景：**

5. - 如果您需要在多个操作系统上部署 Python 程序，那么 pyinstaller 是一个值得考虑的选择。

### 四、cx_Freeze

1. **简介：** cx_Freeze 是一款跨平台的 Python 打包工具，支持 Windows、Linux 和 macOS 平台。

2. **特点：**

3. - 跨平台支持，一个工具满足多个操作系统的打包需求。
   - 提供了丰富的打包选项，可根据需求定制打包过程。
   - 支持 Python 2.x 和 3.x 代码。
   - 具有良好的兼容性，支持与其他打包工具（如 pyinstaller）的集成。

4. **使用场景：**

5. - 如果您需要在多个操作系统上部署 Python 程序，并且希望与其他打包工具集成，那么 cx_Freeze 是一个不错的选择。

### 五、如何选择

1. 首先，根据您的开发平台确定是否需要跨平台支持。如果您的程序主要在 Windows 平台上运行，那么 py2exe 是一个合适的选择；如果您需要在多个操作系统上部署程序，那么 pyinstaller 和 cx_Freeze 是更好的选择。
2. 其次，根据您的开发需求和打包要求，考虑是否需要定制打包过程。如果您希望在打包过程中进行更多的定制，如添加特定文件、修改打包选项等，那么 pyinstaller 和 cx_Freeze 是更好的选择。
3. 最后，根据您的项目需求和兼容性要求，考虑是否需要与其他打包工具集成。如果您需要在打包过程中与其他工具集成，如 pyinstaller，那么 cx_Freeze 是更好的选择。

### 六、总结

py2exe、pyinstaller 和 cx_Freeze 都是优秀的 Python 打包工具，它们各自具有不同的特点和优势。在选择打包工具时，请根据您的开发需求、平台和项目特性进行综合考虑。

## pywebview：Web应用实现桌面化

在现代的软件开发中，Web应用已经成为了一种非常流行的开发方式。

而基于Python的pywebview库则提供了一种简单而有效的方法，可以将Web应用打包成桌面应用，同时保持Web技术的优势。

本文将对pywebview进行应用分析，并提供多种场景下的Python代码使用案例。

### pywebview 特点

pywebview是一个Python库，可以将Web应用打包成桌面应用，支持Windows、macOS和Linux平台。

它的特点包括：

- 简单易用：pywebview提供了一个简单的API，使得开发者可以轻松地将Web应用转换为桌面应用。
- 跨平台支持：pywebview支持多个主流操作系统，可以确保应用在不同平台上的一致性。
- 无需安装依赖：pywebview内置了一个轻量级的Web浏览器，无需安装其他依赖即可运行。
- 支持多种Web技术：pywebview支持使用HTML、CSS和JavaScript等Web技术进行开发，开发者可以充分利用现有的Web开发技能。

### 应用分析

##### 适用场景

pywebview适用于以下场景：

- 将现有的Web应用转换为桌面应用：如果已经有一个Web应用，可以使用pywebview将其打包成桌面应用，提供更好的用户体验。
- 快速开发原型：使用pywebview可以快速搭建一个桌面应用原型，验证想法和功能。
- 跨平台开发：pywebview支持多个平台，可以一次开发，多平台部署。

##### pywebview 优势

- 快速开发：使用pywebview可以快速搭建桌面应用，减少开发时间。
- 跨平台支持：支持多个主流操作系统，可以覆盖更广泛的用户群。
- 无需安装依赖：内置Web浏览器，无需安装其他依赖即可运行。

##### pywebview 劣势

- 性能限制：由于使用了Web技术，性能可能不如原生应用。
- 功能受限：部分原生功能可能无法直接调用，需要通过JavaScript与Python进行通信。

### Python代码案例

##### 示例1：打开一个简单的Web页面

```python
import webview

webview.create_window("Simple Webview Example", "https://www.example.com")
webview.start()
```

运行以上代码，将会打开一个简单的Web页面，展示"https://www.example.com"网站的内容。

##### 示例2：与Web页面进行交互

```python
import webview

def on_button_click():
    webview.evaluate_js('document.getElementById("result").innerHTML = "Hello, pywebview!"')

html = """
<!DOCTYPE html>
<html>
<head>
    <title>Python Webview Example</title>
</head>
<body>
    <button onclick="pywebview.api.on_button_click()">Click me</button>
    <div id="result"> Hello World </div>
</body>
</html>
"""

webview.create_window("Python Webview Example", html=html, js_api=on_button_click)
webview.start()
```

以上代码定义了一个简单的HTML页面，包含一个按钮和一个显示区域。

![image-20240526155244764](./Python框架.assets/image-20240526155244764.png)

当按钮被点击时，通过调用Python函数`on_button_click`，将"Hello, pywebview!"显示在显示区域中。

##### 示例3：使用本地文件

```python
import webview

webview.create_window("Local File Example", "file:///path/to/local/file.html")
webview.start()
```

以上代码将打开一个本地HTML文件，展示文件中的内容。

### 结论

通过本文的分析，我们了解了pywebview库的特点、适用场景以及优势与劣势。

同时，提供了多种场景下的Python代码使用案例，帮助开发者更好地理解如何使用pywebview开发桌面应用。

在实际开发中，可以根据具体需求选择合适的技术和工具，提高开发效率和用户体验。

# 自动化框架

## Autopy：Python 和 Rust 跨平台 GUI 自动化操作库

**项目地址**：https://github.com/autopilot-rs/autopy

### 什么是 autopy

autopy 是一个简单的、跨平台的 Python 和 Rust GUI 自动化模块，它可以用来模拟鼠标和键盘动作，实现自动化的界面操作。autopy 可以在多种操作系统上使用，包括 Windows、MacOS 和 Linux，为开发人员提供了一种方便的方式来进行 GUI 自动化测试和应用程序交互。

### autopy 的主要特性

1. 跨平台支持：autopy 可以在 Windows、MacOS 和 Linux 等多种操作系统上运行，不受操作系统的限制，为用户提供了更大的灵活性和便利性。
2. 鼠标和键盘模拟：autopy 可以通过代码模拟鼠标移动、点击和键盘输入等操作，实现自动化的界面操作。这对于需要进行大量重复性操作的任务来说非常有用，如界面测试、数据录入等。
3. 屏幕截图和像素操作：autopy 可以对屏幕进行截图，并且可以对截图进行像素级的操作，如像素点的读取、颜色值设置等，为用户提供了对屏幕进行精细操作的能力。
4. 窗口控制：autopy 可以控制窗口的位置、大小和状态，实现对窗口的自动化管理，如最大化、最小化、置顶等操作。
5. 支持 Python 和 Rust：autopy 提供了 Python 和 Rust 两种语言的接口，用户可以根据自己的偏好和需求选择使用哪种语言进行自动化操作。

### autopy 的安装和使用

1. 安装 Python 和 Rust：在使用 autopy 之前，需要先安装 Python 和 Rust 的开发环境，可以从官方网站下载并安装最新版本的 Python 和 Rust。

2. 安装 autopy 模块：在安装好 Python 和 Rust 开发环境后，可以通过 pip 或 Cargo 等包管理工具安装 autopy 模块，命令如下：

   ```bash
   pip install autopy
   ```

   或

   ```
   cargo install autopybash
   ```

3. 使用 autopy：在安装好 autopy 模块后，可以通过 import 命令在 Python 或 Rust 中引入 autopy 模块，然后就可以开始使用 autopy 进行鼠标和键盘的模拟操作了。

   ```python
   import autopy
   autopy.mouse.move(100, 100)  # 将鼠标移动到屏幕坐标(100, 100)的位置
   autopy.mouse.click()  # 模拟鼠标点击操作
   autopy.key.type_string('Hello, autopy!')  # 模拟键盘输入字符串
   ```

![图片](./Python框架.assets/640-1714235339031-434.webp)

### autopy 的应用场景

1. 自动化测试：autopy 可以用于自动化测试，对界面进行自动化操作并进行测试用例的编写和执行，节省大量的测试时间和人力成本。
2. 数据录入：autopy 可以用于模拟人工进行数据录入操作，对于需要大量重复性输入的任务来说非常实用。
3. 屏幕操作：autopy 可以对屏幕进行截图、像素级操作等，用于实现一些特殊的屏幕操作需求。
4. 界面交互：autopy 可以模拟用户进行界面操作，用于一些需要自动化进行界面操作的应用程序中。

### autopy 的发展和展望

autopy 作为一个跨平台的 GUI 自动化模块，为 Python 和 Rust 开发人员提供了一种方便、灵活的方式来进行界面自动化操作。随着自动化技术的不断发展，autopy 也将继续完善和扩展，为用户提供更多更强大的功能和接口，满足不同场景下的自动化需求。

总之，autopy 作为一个简单易用、功能强大的 GUI 自动化模块，将会在未来的软件开发和测试领域扮演着越来越重要的角色，为用户提供更好的自动化解决方案。

## 程序自动化必备 PyGetWindow：一个强大的用于窗口操作的 Python 库

### 介绍

在桌面应用程序自动化的世界中，PyGetWindow 以其多功能的 Python 库而脱颖而出。它提供了一套全面的功能，用于处理窗口，使其成为各种自动化任务的必备工具。在本文中，我们将详细介绍 PyGetWindow，包括其特点、示例和用例。

### 1. PyGetWindow 的特点

PyGetWindow 提供了广泛的功能，可以无缝地操作桌面应用程序中的窗口：

- 窗口管理：PyGetWindow 允许您通过获取窗口的句柄、位置和大小来与窗口交互。您可以轻松地激活、关闭或在窗口之间切换。
- 窗口枚举：该库提供了获取桌面上所有打开窗口列表的功能，这样可以更容易地识别和操作特定的窗口。
- 窗口定位：PyGetWindow 允许您以编程方式移动和调整窗口的大小，从而对其在屏幕上的位置有精确控制。

### 2. 使用示例

让我们通过一些实际示例来了解如何使用 PyGetWindow 执行窗口操作任务：

**示例 1：获取所有打开的窗口**

```python
import pygetwindow

# 获取所有打开的窗口
windows = pygetwindow.getAllWindows()

# 打印窗口的标题
for window in windows:
    print(window.title)
```

**示例 2：移动窗口**

```python
import pygetwindow

# 获取目标窗口的句柄
window = pygetwindow.getWindowsWithTitle('窗口标题')[0]
handle = window.handle

# 将窗口移动到指定位置
window.moveTo(500, 500)
```

**示例 3：调整窗口大小**

```python
import pygetwindow

# 获取目标窗口的句柄
window = pygetwindow.getWindowsWithTitle('窗口标题')[0]
handle = window.handle

# 将窗口调整为指定大小
window.resizeTo(800, 600)
```

### 3. 应用场景

PyGetWindow 适用于各种需要窗口操作的场景：

- 图形用户界面自动化：PyGetWindow 在自动化涉及桌面应用程序的任务中特别有用。它允许您控制窗口，与用户界面元素交互和模拟用户操作，适用于自动化 GUI 测试或重复任务。
- 窗口监控：该库可以用于监控窗口的变化，例如检测特定窗口何时打开或关闭。这种功能在需要跟踪特定应用程序行为的场景中非常有价值。
- 窗口同步：PyGetWindow 可以将自动化脚本的执行与特定窗口同步，确保操作在正确的时间和正确的上下文中执行。

### 结论

PyGetWindow 是一个强大的 Python 库，简化了桌面应用程序中的窗口操作。其丰富的功能集和直观的 API 使其成为自动化任务、GUI 测试和窗口行为监控的有价值工具。通过利用 PyGetWindow，开发人员可以优化自动化工作流程，提高与桌面应用程序的交互效率。

## pywhatkit：一个超强自动化任务库

Pywhatkit 是一个 Python 库，提供了一系列简单易用的功能，可以帮助用户在日常工作中更高效地处理一些常见任务。该库的功能主要包括发送电子邮件、搜索信息、播放 YouTube 视频、生成 QR 码等。Pywhatkit 的设计初衷是为了简化常见任务的处理过程，让用户能够用更少的代码实现更多功能，提高工作效率。

在日常生活中，我们经常需要发送电子邮件、搜索信息、播放视频等，而这些任务可能涉及到一些复杂的操作，比如编写电子邮件的代码、调用浏览器搜索信息等。而使用 Pywhatkit 库，可以极大地简化这些操作，只需几行代码就可以完成这些任务。例如，发送电子邮件只需一行代码即可完成，无需编写复杂的 SMTP 代码；播放 YouTube 视频只需指定视频的名称，即可在默认浏览器中播放视频，无需手动打开浏览器并输入网址。

此外，Pywhatkit 还提供了一些其他有用的功能，比如生成 QR 码、转换文本到手写体等。这些功能在某些场景下也非常实用，比如生成 QR 码可以用于快速扫描链接或者存储信息，转换文本到手写体可以增加一些趣味性。

总之，Pywhatkit 是一个功能丰富、易用的 Python 库，可以帮助用户简化日常工作中的一些常见任务，提高工作效率，减少重复劳动。

下面是一个使用 Pywhatkit 库发送电子邮件的示例代码：

```python
import pywhatkit as kit

# 设置发件人邮箱和密码
sender_email = "your_email@example.com"
sender_password = "your_password"

# 设置收件人邮箱
receiver_email = "recipient@example.com"

# 设置邮件主题和内容
subject = "Test Email"
body = "This is a test email sent using Pywhatkit."

# 发送邮件
kit.send_mail(sender_email, sender_password, receiver_email, subject, body)
```

通过以上代码，就可以用 Pywhatkit 发送一封电子邮件，而且只需要几行代码就能完成。

## pyautogui：用 PytTogahon 实现办公自动化

GitHub：https://github.com/asweigart/pyautogui

待定教程：[Python 自动化的黑科技--PyAutoGUI (qq.com)](https://mp.weixin.qq.com/s/xj95VurV-Tmm4gGPFNjLjw)

### 引言

在自动化任务中，控制鼠标和键盘是常见的需求。Python 提供了许多库来实现这些操作，其中 pyautogui 是一种功能强大且易于使用的库。本文将详细介绍 pyautogui 库的使用方法，并提供一些示例帮助读者快速上手。

### 1. 安装 pyautogui 库

首先，我们需要安装 pyautogui 库。可以使用 pip 命令来进行安装：

```python
pip install pyautogui
```

### 2. 控制鼠标

pyautogui 库提供了多种控制鼠标的方法。下面是一些常见的鼠标操作示例：

模拟鼠标点击：

```python
import pyautogui

# 模拟左键点击
pyautogui.click()
# 模拟右键点击
pyautogui.rightClick()
```

移动鼠标位置：

```python
import pyautogui

# 将鼠标移动到指定位置（x, y）
pyautogui.moveTo(500, 500)
```

获取当前鼠标位置：

```python
import pyautogui

# 获取当前鼠标位置
x, y = pyautogui.position()
print(f"当前鼠标位置：({x}, {y})")
```

### 3. 控制键盘

pyautogui 库还提供了控制键盘的方法。下面是一些常见的键盘操作示例：

模拟按键：

```python
import pyautogui

# 模拟按下和释放键盘上的某个按键
pyautogui.press('space')
```

输入文本：

```python
import pyautogui

# 输入文本
pyautogui.typewrite("Hello, World!")
```

组合键操作：

```python
import pyautogui# 模拟组合键操作（Ctrl+C）pyautogui.hotkey('ctrl', 'c')
```

**4. 屏幕截图和图像识别**

pyautogui 库还提供了一些屏幕截图和图像识别的功能。

屏幕截图：

```python
import pyautogui
# 截取整个屏幕
screenshot = yautogui.screenshot()
screenshot.save('screenshot.png')
```

图像识别：

```python

import pyautogui

# 在屏幕上查找指定图像
image_location = pyautogui.locateOnScreen('image.png')
if image_location:
    print("找到图像")
else:
    print("未找到图像")
```

### 结论

通过 pyautogui 库，我们可以轻松实现自动化任务，控制鼠标和键盘，进行屏幕截图和图像识别等操作。本文介绍了 pyautogui 库的安装方法，并提供了一些常见的鼠标、键盘、屏幕截图和图像识别的示例。

您可以根据自己的需求，灵活运用 pyautogui 库来实现各种自动化任务。希望本文能够帮助您更好地了解和使用 pyautogui 库，提高工作效率。

## AutoIt：自动化 Windows 操作的强大工具

AutoIt 是一个功能强大的自动化工具，专门用于在 Windows 操作系统上模拟用户操作。它提供了一个简单易用的脚本语言和丰富的函数库，使开发者能够自动化执行各种任务，如键盘输入、鼠标操作、窗口管理等。Python AutoIt 库是一个针对 Python 语言的封装，使得开发者可以使用 Python 来控制和操作 AutoIt 的功能。本文将详细介绍 Python AutoIt 库的安装、使用方法、优缺点和应用场景。

### 1. 安装

要使用 Python AutoIt 库，可以按照以下步骤进行安装：

**步骤 1：** 确保已经安装了 Python 解释器。如果未安装，请访问 Python 官方网站（https://www.python.org）下载并安装最新版本的Python。

**步骤 2：** 打开命令提示符或终端窗口，并使用以下命令安装 Python AutoIt 库：

pip install -U pyautoit

### 2. 使用方法

使用 Python AutoIt 库可以按照以下步骤进行：

**步骤 1：** 导入 AutoIt 模块：

```python
import autoit
```

**步骤 2：** 使用 AutoIt 提供的函数和方法来模拟用户操作。例如，以下代码演示了如何打开记事本应用程序并输入一段文字：

```python
autoit.run("notepad.exe")
autoit.win_wait_active("[CLASS:Notepad]")
autoit.send("Hello, World!")
```

**步骤 3：** 运行 Python 脚本，Python AutoIt 库将模拟用户操作执行脚本中的任务。

### 优点

1.**强大的功能**：Python AutoIt 库提供了丰富的函数和方法，支持模拟各种用户操作，包括键盘输入、鼠标操作、窗口管理等。

2.**与 Python 的结合**：作为 Python 库，Python AutoIt 可以与 Python 的其他库和功能进行集成，使得开发更加灵活和便捷。

3.**简单易用**：Python AutoIt 库的使用方法简单明了，开发者可以快速上手并编写自动化脚本。

4.**跨平台支持**：Python AutoIt 库可以在支持 Python 的多个操作系统上运行，包括 Windows、Linux 和 Mac。

### 缺点

1.**平台限制**：尽管 Python AutoIt 库可以在多个操作系统上运行，但其功能主要针对 Windows 操作系统，因此在其他操作系统上的功能可能受到限制。

2.**依赖性**：使用 Python AutoIt 库需要先安装 Python 解释器和相应的依赖库，这可能增加了一些额外的配置和维护工作。

### 应用场景

Python AutoIt 适用于以下场景：

1.**自动化测试**：Python AutoIt 可以模拟用户操作来执行自动化测试任务，包括 UI 测试、功能测试等。

2.**软件部署**：通过编写 Python AutoIt 脚本，可以自动化执行软件安装、配置和卸载等任务，简化软件部署过程。

3.**系统管理**：Python AutoIt 可以帮助系统管理员执行各种自动化管理任务，如设置系统参数、管理用户账户等。

4.**任务自动化**：通过编写 Python AutoIt 脚本，可以自动执行重复性任务，如数据处理、文件操作等，提高工作效率。

总结而言，Python AutoIt 是一个强大的自动化工具，通过 Python 语言的封装，使得开发者可以使用 Python 来控制和操作 AutoIt 的功能。它具有强大的功能和跨平台支持，简单易用，可以与 Python 的其他库和功能进行集成。然而，由于其功能主要针对 Windows 操作系统，并且存在一定的依赖性，Python AutoIt 可能在跨平台和维护方面存在一些限制。在选择自动化工具时，需要根据具体需求和环境考虑是否使用 Python AutoIt。

## pynput：用 Python 轻松掌握鼠标和键盘的控制

GitHub：

### 引言

控制鼠标和键盘是自动化任务中的常见需求。在 Python 中，pynput 库是一种强大的工具，可以帮助我们实现这些操作。本文将详细介绍 pynput 库的使用方法，并提供一些示例帮助读者快速上手。

### 1. 安装 pynput 库

首先，我们需要安装 pynput 库。可以使用 pip 命令来进行安装：

```bash
pip install pynput
```

### 2. 控制鼠标

pynput 库提供了控制鼠标的功能。下面是一些常见的鼠标操作示例：

模拟鼠标点击：

```python
from pynput.mouse import Controller, Button

mouse = Controller()
# 模拟左键点击
mouse.click(Button.left)
# 模拟右键点击
mouse.click(Button.right)
```

移动鼠标位置：

```python
from pynput.mouse import Controller

mouse = Controller()
# 将鼠标移动到指定位置（x, y）
mouse.position = (500, 500)
```

获取当前鼠标位置：

```python
from pynput.mouse import Controller

mouse = Controller()
# 获取当前鼠标位置
x, y = mouse.position
print(f"当前鼠标位置：({x}, {y})")
```

### 3. 控制键盘

pynput 库还提供了控制键盘的功能。下面是一些常见的键盘操作示例：

模拟按键：

```python
from pynput.keyboard import Controller, Key

keyboard = Controller()
# 模拟按下和释放键盘上的某个按键
keyboard.press(Key.space)
keyboard.release(Key.space)
```

输入文本：

```python
from pynput.keyboard import Controller, Key

keyboard = Controller()
# 输入文本
keyboard.type("Hello, World!")
```

组合键操作：

```python
from pynput.keyboard import Controller, Key

keyboard = Controller()
# 模拟组合键操作（Ctrl+C）
keyboard.press(Key.ctrl)
keyboard.press('c')
keyboard.release('c')
keyboard.release(Key.ctrl)
```

### 4. 监听和响应事件

pynput 库还支持监听和响应键盘和鼠标事件。下面是一个简单的示例，演示如何监听鼠标点击事件：

```python
from pynput.mouse import Listener

def on_click(x, y, button, pressed):
    if pressed:
        print(f"鼠标点击事件：({x}, {y}, {button})")

# 创建监听器
listener = Listener(on_click=on_click)
# 启动监听器
listener.start()
# 等待监听器退出
listener.join()
```

### 结论

通过 pynput 库，我们可以轻松控制鼠标和键盘，模拟操作或监听事件。本文介绍了 pynput 库的安装方法，并提供了一些常见的鼠标和键盘操作示例。您可以根据自己的需求，灵活运用 pynput 库来实现各种自动化任务。希望本文能够帮助读者更好地了解和使用 pynput 库，提高工作效率。

## self-driving-desktop：自动操控桌面—轻松驾驭鼠标和键盘的开源框架

GitHub：https://github.com/hofstadter-io/self-driving-desktop

### 1. 简介

自动化技术在现代生活和工作中扮演着越来越重要的角色。"self-driving-desktop"是一个开源的桌面自动化框架，它可以通过简单易用的语言来驱动鼠标和键盘的操作。

本文将详细介绍这个爆款开源项目，包括解决的问题、安装和使用方法、示例、应用场景、优势以及总结。

### 2. 解决的问题

在日常工作和任务处理中，我们经常需要进行重复的鼠标和键盘操作。这些操作可能包括打开应用程序、填写表单、点击按钮、导航网页等。手动执行这些任务不仅费时费力，还容易出错。

"self-driving-desktop"桌面自动化框架的出现解决了这一问题，它可以帮助我们自动化执行这些重复性任务，提高工作效率。

### 3. 安装和使用方法

#### 3.1 安装

要开始使用"self-driving-desktop"框架，先打开终端，并使用 pip 命令安装"self-driving-desktop"框架：

```bash
pip install self-driving-desktop
```

#### 3.2 使用方法

现在，我们来看看如何使用"self-driving-desktop"框架来驱动鼠标和键盘的操作。

首先，创建一个脚本文件，用于描述您想要自动化的任务。脚本文件可以使用任何文本编辑器创建，并使用`.sdd`作为文件扩展名。

以下是一个示例脚本，演示如何使用"self-driving-desktop"框架自动打开浏览器、搜索关键词并点击搜索结果：

```python
from self_driving_desktop import SDDesktop

# 创建一个SDDesktop对象
desktop = SDDesktop()

# 打开浏览器
desktop.open_application("Chrome")

# 等待浏览器加载
desktop.wait(2)

# 输入关键词并搜索
desktop.type_text("self-driving-desktop")
desktop.press_key("ENTER")

# 等待搜索结果加载
desktop.wait(2)

# 点击第一个搜索结果
desktop.click(1)

# 关闭浏览器
desktop.close_application("Chrome")
```

在这个示例中，我们首先导入了"self-driving-desktop"的 SDDesktop 类。然后，我们创建了一个 SDDesktop 对象，并使用它的方法来执行一系列操作，包括打开应用程序、等待、输入文本、按下按键、点击等。

保存脚本文件后，通过以下步骤来运行它：

- 打开终端或命令提示符。
- 导航到保存脚本文件的目录。
- 运行以下命令：

```bash
python your_script_file.sdd
```

将"your_script_file.sdd"替换为您的脚本文件名。

"self-driving-desktop"框架将读取并解析脚本文件，并执行相应的鼠标和键盘操作。

### 4. 应用场景

"self-driving-desktop"框架在许多场景下都能发挥作用，包括但不限于：

- 自动化网页操作：可以自动打开浏览器、填写表单、点击按钮等- 数据处理：可以自动化处理大量的数据，如数据导入、清洗、转换等操作。
- 应用程序测试：可以自动化执行应用程序的功能测试，提高测试效率。
- 任务自动化：可以自动化执行重复性任务，如文件备份、数据导出、定时报告生成等。

### 5. 优势

使用"self-driving-desktop"框架有以下优势：

- 简单易用：框架提供了简洁的语言和直观的 API，使得编写自动化脚本变得容易。
- 灵活性：可以根据具体需求自定义和扩展框架功能，满足不同场景的自动化需求。
- 时间和精力的节省：通过自动化重复性任务，可以节省大量的时间和精力，提高工作效率。
- 准确性和可靠性：自动化操作可以减少人为错误，提高操作的准确性和可靠性。

### 6. 总结

"self-driving-desktop"是一个功能强大且易于使用的桌面自动化框架。本文介绍了该框架的简介、解决的问题、安装和使用方法、示例、应用场景以及优势。

通过使用"self-driving-desktop"框架，您可以轻松实现鼠标和键盘的自动化操作，提高工作效率，节省时间和精力。

不论是自动化浏览器操作、数据处理还是其他桌面任务，"self-driving-desktop"都是您的得力助手。尝试使用"self-driving-desktop"框架，体验自动化带来的便利和效益吧！

## 对比 pynput 和 pyautogui：两个 Python 自动化库的比较

### 引言

在 Python 中，pynput 和 pyautogui 都是常用的自动化库，可以帮助我们控制鼠标和键盘，实现自动化任务。本文将对这两个库进行比较，从功能、使用方法和性能等方面，帮助读者选择适合自己需求的库。

### 1. 功能比较

pynput 和 pyautogui 都提供了控制鼠标和键盘的功能，但在一些特殊功能方面存在差异。

- pynput：pynput 库提供了更多的鼠标和键盘控制选项，比如监听和响应事件，获取当前鼠标位置等。它还支持同时控制多个鼠标和键盘设备。
- pyautogui：pyautogui 库主要用于控制鼠标和键盘的基本操作，如移动鼠标、点击和按下释放键盘按键。它还提供了一些屏幕截图和图像识别的功能，可以用于自动化测试和图像处理等任务。

### 2. 使用方法比较

pynput 和 pyautogui 在使用方法上也存在一些差异。

- pynput：pynput 库使用起来相对更灵活，可以编写更复杂的逻辑来控制鼠标和键盘。它提供了监听器来捕获鼠标和键盘事件，并可以对事件进行处理。此外，pynput 还支持模拟多个鼠标和键盘设备。
- pyautogui：pyautogui 库的使用相对更简单直接，适合快速实现基本的鼠标和键盘控制。它提供了一些简单的函数来模拟鼠标和键盘操作，如 moveTo()、click()和 typewrite()等。

### 3. 性能比较

在性能方面，pynput 和 pyautogui 也有一些差异。

- pynput：由于 pynput 库提供了更多的功能和灵活性，它在某些情况下可能会有更高的资源消耗和响应延迟。如果需要监听和响应鼠标和键盘事件，或者同时控制多个设备，pynput 可能是更好的选择。
- pyautogui：pyautogui 库在执行基本的鼠标和键盘操作时，性能较好且响应速度较快。它适合简单的自动化任务，特别是在需要大量重复操作的场景下。

### 结论

pynput 和 pyautogui 是两个常用的 Python 自动化库，用于控制鼠标和键盘。您可以根据需求的不同，来选择适合自己的库。

如果需要更多的鼠标和键盘控制选项、监听和响应事件，或者同时控制多个设备，pynput 是一个更好的选择。它提供了丰富的功能和更灵活的使用方法，但可能在性能方面稍微逊色。

如果只需要基本的鼠标和键盘操作，并且追求简单和高性能，pyautogui 是一个更合适的选择。它提供了简单直接的函数来模拟操作，适用于快速实现简单的自动化任务。

## AutoIt：自动化 Windows 操作的强大工具

### 简介

AutoIt 是一个功能强大的自动化工具，专门用于在 Windows 操作系统上模拟用户操作。它提供了一个简单易用的脚本语言和丰富的函数库，使开发者能够自动化执行各种任务，如键盘输入、鼠标操作、窗口管理等。Python AutoIt 库是一个针对 Python 语言的封装，使得开发者可以使用 Python 来控制和操作 AutoIt 的功能。本文将详细介绍 Python AutoIt 库的安装、使用方法、优缺点和应用场景。

### 1. 安装

要使用 Python AutoIt 库，可以按照以下步骤进行安装：

**步骤 1：** 确保已经安装了 Python 解释器。如果未安装，请访问 Python 官方网站（https://www.python.org）下载并安装最新版本的Python。

**步骤 2：** 打开命令提示符或终端窗口，并使用以下命令安装 Python AutoIt 库：

```bash
pip install -U pyautoit
```

### 2. 使用方法

使用 Python AutoIt 库可以按照以下步骤进行：

**步骤 1：** 导入 AutoIt 模块：

```python
import autoit
```

**步骤 2：** 使用 AutoIt 提供的函数和方法来模拟用户操作。例如，以下代码演示了如何打开记事本应用程序并输入一段文字：

```python
autoit.run("notepad.exe")
autoit.win_wait_active("[CLASS:Notepad]")
autoit.send("Hello, World!")
```

**步骤 3：** 运行 Python 脚本，Python AutoIt 库将模拟用户操作执行脚本中的任务。

![图片](./Python框架.assets/640-1714229845240-240.gif)

### 优点

1.**强大的功能**：Python AutoIt 库提供了丰富的函数和方法，支持模拟各种用户操作，包括键盘输入、鼠标操作、窗口管理等。

2.**与 Python 的结合**：作为 Python 库，Python AutoIt 可以与 Python 的其他库和功能进行集成，使得开发更加灵活和便捷。

3.**简单易用**：Python AutoIt 库的使用方法简单明了，开发者可以快速上手并编写自动化脚本。

4.**跨平台支持**：Python AutoIt 库可以在支持 Python 的多个操作系统上运行，包括 Windows、Linux 和 Mac。

### 缺点

1.**平台限制**：尽管 Python AutoIt 库可以在多个操作系统上运行，但其功能主要针对 Windows 操作系统，因此在其他操作系统上的功能可能受到限制。

2.**依赖性**：使用 Python AutoIt 库需要先安装 Python 解释器和相应的依赖库，这可能增加了一些额外的配置和维护工作。

### 应用场景

Python AutoIt 适用于以下场景：

1.**自动化测试**：Python AutoIt 可以模拟用户操作来执行自动化测试任务，包括 UI 测试、功能测试等。

2.**软件部署**：通过编写 Python AutoIt 脚本，可以自动化执行软件安装、配置和卸载等任务，简化软件部署过程。

3.**系统管理**：Python AutoIt 可以帮助系统管理员执行各种自动化管理任务，如设置系统参数、管理用户账户等。

4.**任务自动化**：通过编写 Python AutoIt 脚本，可以自动执行重复性任务，如数据处理、文件操作等，提高工作效率。

总结而言，Python AutoIt 是一个强大的自动化工具，通过 Python 语言的封装，使得开发者可以使用 Python 来控制和操作 AutoIt 的功能。它具有强大的功能和跨平台支持，简单易用，可以与 Python 的其他库和功能进行集成。然而，由于其功能主要针对 Windows 操作系统，并且存在一定的依赖性，Python AutoIt 可能在跨平台和维护方面存在一些限制。在选择自动化工具时，需要根据具体需求和环境考虑是否使用 Python AutoIt。

## Pywinauto：自动化操作 Windows 应用的工具

**Github 地址**：https://github.com/pywinauto/pywinauto

### 工具概述

Pywinauto 是一个用于自动化 Windows 应用程序的开源 Python 工具。

它提供了一组强大的功能和 API，使开发者能够通过代码控制和操作 Windows 界面上的各种元素，如窗口、按钮、菜单、文本框等。

Pywinauto 的设计目标是简化 Windows 应用程序的自动化过程，提供简单易用的方法来模拟用户的操作。

### 简化自动化过程

在进行 Windows 应用程序的自动化时，通常需要模拟用户的操作，例如打开应用程序、点击按钮、输入文本等。Pywinauto 通过提供一组直观的 API，简化了这个过程。

开发者可以使用 Pywinauto 轻松地定位和操作 Windows 界面上的元素，而无需手动控制鼠标和键盘。这样，可以大大提高自动化脚本的编写效率和可靠性。

### 定位和操作元素

Pywinauto 提供了多种方法来定位和操作 Windows 应用程序的元素。开发者可以使用元素的属性、文本内容、类名等来定位元素。一旦定位到元素，就可以执行各种操作，如点击、输入文本、获取元素状态等。Pywinauto 还支持模拟键盘和鼠标事件，以及与窗口和控件的交互。

### 安装

要安装 Pywinauto，可以使用 Python 的包管理工具 pip。在命令行中运行以下命令即可安装最新版本的 Pywinauto：

```bash
pip install pywinauto
```

安装完成后，即可在 Python 脚本中导入并使用 Pywinauto 库。

### 使用

使用 Pywinauto 可以轻松地模拟用户的操作来自动化 Windows 应用程序。下面是一个简单的示例，演示如何使用 Pywinauto 打开记事本应用程序，并输入一段文本：

```python
from pywinauto import Application
# 启动记事本应用程序app = Application(backend="uia").start("notepad.exe")
# 选择记事本窗口dlg = app["无标题 - 记事本"]
# 输入文本dlg.Edit.type_keys("Hello, Pywinauto!")
# 关闭记事本应用程序
dlg.close()
```

在这个示例中，首先使用`Application`类启动记事本应用程序。然后，使用应用程序的标题或其他属性选择记事本窗口。接下来，使用`type_keys`方法输入文本。最后，使用`close`方法关闭记事本应用程序。

通过类似的方式，可以使用 Pywinauto 定位和操作 Windows 应用程序的其他元素，如按钮、菜单和文本框等。Pywinauto 提供了丰富的 API 和方法，可以满足各种自动化需求。

### 支持多种应用程序

Pywinauto 不仅支持标准的 Windows 应用程序，还可以自动化许多其他类型的应用程序，如 Microsoft Office 套件、浏览器、图形界面工具等。这使得开发者可以使用 Pywinauto 来处理各种不同的任务和场景，从自动化数据处理到 UI 测试，都可以得到有效的支持。

### 与其他工具的集成

Pywinauto 可以与其他 Python 库和工具相结合，进一步扩展其功能。例如，可以使用 Pywinauto 与 Selenium 集成，实现对浏览器页面的自动化操作。此外，Pywinauto 还提供了与 UI 自动化测试框架（如 Pytest 和 Robot Framework）的集成，方便开发者进行自动化测试。

### 总结

Pywinauto 是一个强大且易于使用的 Python 工具，用于自动化 Windows 应用程序。它简化了自动化过程，提供了直观的 API 来定位和操作 Windows 界面上的元素。无论是进行 UI 自动化测试、批量处理数据还是模拟用户操作，Pywinauto 都是一个非常有用的工具。对于那些需要自动化 Windows 应用程序的开发者来说，Pywinauto 无疑是一个值得尝试的爆款工具。

## 跨平台 UI 自动化框架：Airtest，游戏开发和应用测试的利器

**项目地址**：https://github.com/AirtestProject/Airtest

### 什么是 Airtest？

Airtest 是一款跨平台 UI 自动化框架，专为游戏和应用程序设计。它可以帮助开发人员和测试人员快速有效地进行自动化测试和 UI 交互操作。无论是在 PC 端、移动端还是 Web 端，Airtest 都能够提供稳定可靠的自动化测试解决方案。

![图片](./Python框架.assets/640-1714234602622-372.gif)

### Airtest 的特点

- **跨平台支持** Airtest 可以在多个平台上运行，包括 Windows、Mac、Linux 和 Android 等。这意味着开发人员可以使用同一套自动化测试脚本来覆盖不同平台的应用程序。
- **强大的脚本语言支持** Airtest 支持 Python 脚本语言，开发人员可以利用 Python 强大的功能和丰富的库来编写自动化测试脚本。
- **多种 UI 定位方式** Airtest 支持多种 UI 定位方式，包括坐标定位、元素查找、图像识别等，可以适应不同类型的应用程序，确保测试脚本的稳定性和可靠性。
- **丰富的插件支持** Airtest 提供了丰富的插件支持，包括性能监控、日志记录、数据分析等功能，帮助开发人员更好地进行自动化测试和性能优化。
- **简单易用的操作界面** Airtest 提供了简单易用的操作界面，使得开发人员可以快速上手，提高自动化测试的效率和准确性。

### 如何使用 Airtest？

1. **安装 Airtest** 首先，开发人员需要在相应的平台上安装 Airtest 框架，可以通过 pip 命令来安装 Airtest 库。

   ```bash
   pip install airtest
   ```

2. **编写测试脚本** 接下来，开发人员可以使用 Python 语言编写自动化测试脚本，利用 Airtest 提供的丰富功能来实现 UI 自动化测试和交互操作。

3. **执行自动化测试** 最后，开发人员可以执行编写好的自动化测试脚本，通过 Airtest 框架来进行 UI 自动化测试，验证应用程序的稳定性和可靠性。

### Airtest 的应用场景

- **游戏开发** 在游戏开发过程中，开发人员可以利用 Airtest 框架来进行自动化测试，确保游戏的画面、交互和性能表现符合要求。
- **应用测试** 对于移动应用程序，开发人员可以使用 Airtest 框架来进行自动化测试，检查应用的 UI 界面、功能和稳定性，确保应用质量。
- **性能优化** Airtest 框架提供了性能监控插件，开发人员可以利用它来进行应用程序的性能测试和优化，提升应用的运行效率和用户体验。

### 结语

总的来说，Airtest 是一款强大而灵活的跨平台 UI 自动化框架，为游戏开发和应用测试提供了便利和支持。通过 Airtest，开发人员可以更加高效地进行自动化测试和 UI 交互操作，提升应用质量和用户体验。



# Web 自动化框架

UI 自动化框架是用于自动化测试用户界面（UI）的工具或框架。它们允许开发人员编写测试脚本来模拟用户与应用程序的交互，例如点击按钮、输入文本、验证元素等，以验证应用程序的功能和用户体验是否符合预期。

## Playwright：

GitHub：https://github.com/microsoft/playwright

官网：https://playwright.dev/

Playwright 是一个用于 Web 测试和自动化的框架。它允许使用单个 API 测试，支持 Chromium、Firefox 和 WebKit。

### 采集京东数据

#### 一、前言

有粉丝反映我怎么都不采集大厂的数据，比如像京东、淘宝、抖音、美团等。其实主要是这些大厂数据还真难采集，基本都要逆向，有的时候好不容易逆向出来，没过多久人家又改算法了，性价比不高。。。今天就用 playwright 通过 web 自动化的方式采集京东的数据，就算不会逆向也不怕。唯一的缺点就是速度太慢，但个人觉得如果只是需要几万条数据，这种方法还是挺好的，性价比高！

#### 二、爬取目标

#### 三、完整源码

```python
from lxml import etree
import csv
from playwright.sync_api import sync_playwright

def getListData():
    with sync_playwright() as p:
        browser_type = p.chromium
        browser = browser_type.launch(headless=False)
        page = browser.new_page(ignore_https_errors=True)
        print('请手动登录京东账号！')
        page.goto("https://passport.jd.com/uc/login")
        page.wait_for_load_state("load")
        isLogin = input("是否已经登录？(Y/n): ")
        if isLogin=='Y':
            with open('京东商品列表（雨刷）.csv', 'a', encoding='utf-8', newline='') as file:
                writer = csv.writer(file)
                for i in range(200):
                    try:
                        url = "https://list.jd.com/list.html?cat=6728,6742,6766&isList=1&page={}".format(i+1)
                        page.goto(url)
                        page.wait_for_load_state("load")
                        page.wait_for_timeout(300000)
                        html = etree.HTML(page.content())
                        lis = html.xpath("//ul[@class='gl-warp clearfix']/li")
                        for li in lis:
                            data_sku = li.xpath("./@data-sku")[0]
                            title = li.xpath(".//div[@class='p-name p-name-type-3']/a/em/text()")[0]
                            price = li.xpath(".//div[@class='p-price']//i/text()")[0]
                            commit = li.xpath(".//div[@class='p-commit']//a/text()")[0]
                            shop = li.xpath(".//span[@class='J_im_icon']/a/text()")[0]
                            print('商品ID：',data_sku)
                            print('标题：',title)
                            print('价格：',price)
                            print('评论数：',commit)
                            print('商店：',shop)
                            print('========================================================\n')
                            writer.writerow([data_sku, title, price, commit, shop])
                    except Exception as e:
                        print('采集网址：', url)
                        print('异常：', e)
                        print('========================================================\n')

        browser.close()

def main():
    getListData()

if __name__== "__main__" :
    main()
```

#### 四、爬取结果

```bash
商品ID： 10088424429655
标题： 车杰威丰田卡罗拉凯美瑞雷凌花冠皇冠汉兰达RAV4威驰原装雨刮器雨刷胶条 丰田凯美瑞/2018-2024款/八代 适配原装前雨刮器替换胶条一对【拍二发三】
价格： 15.80
评论数： 2000+
商店： 车杰威官方旗舰店
========================================================

商品ID： 100027455343
标题： 一途别克英朗专用无骨雨刮器全新英朗雨刷英朗【16款至今】雨刮原厂原车尺寸雨刷器（1对装）A级胶条
价格： 29.00
评论数： 10万+
商店： 一途（YITU）京东自营旗舰店
========================================================

商品ID： 100017536609
标题： 固特异（Goodyear）宝马5系雨刮器05至23款五系520/523/525/528/530li雨刷片
价格： 79.00
评论数： 2万+
商店： 固特异（Goodyear）汽车配件京东自营旗舰店
========================================================

商品ID： 100045070042
标题： 一途（YITU）长安逸动PLUS雨刮器【20款-至今】雨刷器雨刮片胶条原装原厂尺寸
价格： 29.00
评论数： 5万+
商店： 一途（YITU）京东自营旗舰店
========================================================

商品ID： 10038100579486
标题： 适配大众途观2010 12 13 14 15 16 17年款后雨刮器后雨刷片条摇臂 途观2010-2017款 后雨刷
价格： 12.00
评论数： 1000+
商店： 圣德保罗官方旗舰店
========================================================

商品ID： 100025773185
标题： 固特异（Goodyear）特斯拉MODELY雨刮器MODEL3新能源TESLA配件MODEL Y专用丫雨刷条
价格： 79.00
评论数： 5000+
商店： 固特异（Goodyear）汽车配件京东自营旗舰店
========================================================

商品ID： 10043073137355
标题： 适用丰田凯美瑞雨刮器原装六七八代凯美瑞雨刮片11/12/13/15/16/17/18/19款雨刷胶条 八代凯美瑞（18-21款） 高清静音型
价格： 98.00
评论数： 1000+
商店： 瀚莱汽车用品旗舰店
========================================================

商品ID： 10021181497029
标题： 澳冶 无骨雨刮器 雨刷器 前窗雨刮片 一对装 一对装 (下单留言车型+年份)适用99%车型
价格： 19.90
评论数： 5万+
商店： 澳冶旗舰店
========================================================

商品ID： 10039507243188
标题： 适用08 09 10 11 12 13 14 15 16年款丰田卡罗拉雨刮器无骨雨刷片 丰田卡罗拉【07-08-09-10-11-12-1 其它
价格： 25.90
评论数： 1000+
商店： 仁飞车品专营店
========================================================

商品ID： 100061830375
标题： 湃速丰田RAV4雨刮器适配13-24款原厂RAV4荣放汽车前雨刷原装原厂雨刮片胶条22 21 20 19 U型 26/16 1对装
价格： 39.00
评论数： 1万+
商店： 湃速京东自营旗舰店
========================================================

商品ID： 100018161683
标题： 一途上汽大众途观L后雨刮后雨刮器后雨刷后雨刷器原厂原装原车尺寸A级胶条
价格： 28.00
评论数： 1万+
商店： 一途（YITU）京东自营旗舰店
========================================================

商品ID： 100070320195
标题： 湃速福特福睿斯无骨雨刮器适配15-18款汽车前雨刷原装原厂雨刮片胶条16 17 18 22/18 1对装
价格： 39.00
评论数： 5000+
商店： 湃速京东自营旗舰店
========================================================

商品ID： 10071416664186
标题： 变型记适用丰田凯美瑞雨刮器06-23款第6六7/8代原装原厂汽车胶条雨刷片 【18-19-20-21-22-2023款】八代 凯美瑞【前雨刮】一对装
价格： 98.00
评论数： 200+
商店： 变型记汽车用品旗舰店
========================================================

商品ID： 100027727579
标题： 一途长安CS55专用无骨雨刮器长安CS55 PLUS【22款-至今】雨刷CS55雨刮原厂原车尺寸雨刷器（1对装）A级胶条
价格： 29.00
评论数： 10万+
商店： 一途（YITU）京东自营旗舰店
========================================================

商品ID： 100057354504
标题： 湃速本田缤智雨刮器适配15-22款原厂原装汽车雨刷胶条雨刮片16 17 18 19 20 21 26/16 1对装
价格： 39.00
评论数： 2000+
商店： 湃速京东自营旗舰店
========================================================
```

![图片](./Python框架.assets/640-1714657980342-3.webp)

![图片](./Python框架.assets/640-1714657980342-4.webp)

### plawright 过某音登录验证

#### 01 逆向目标

**_最近圈友高质量的文章一篇接一篇，倍感焦虑，告别内卷，拥抱金角_**

> aHR0cHM6Ly9kb3VqaWEuZG91eWluLmNvbS9sb2dpbg==

#### 02 抓包分析

某音投放平台的登录验证

![图片](./Python框架.assets/640-1714658905230-25.webp)

#### 03 逆向过程

过程没啥说的，难点就是底图还原跟 locator 定位（好久没写过 selector 了），真好啊 不用动脑子

通过率测了下是 100%,过程不写了，直接放源码，需要的自提

![图片](./Python框架.assets/640-1714658905230-26.gif)

记得改下面的地方

![图片](./Python框架.assets/640-1714658905230-27.webp)

#### 04 算法还原

```python

import httpx
import random
import asyncio
import ddddocr
from PIL import Image
from io import BytesIO
from loguru import logger
from playwright.async_api import Page, Response, async_playwright


class AwemeBrowser:

    def __init__(self, session: str, headless: bool = False):
        self.x = 0
        self.y = ""
        self.url1 = ""
        self.url2 = ""
        self.tag = False
        self._session = session
        self._headless = headless
        self.ocr = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    async def login(self, page: Page, username) -> None:
        page.on("response", self.on_response)

        await page.goto('aHR0cHM6Ly9kb3VqaWEuZG91eWluLmNvbS9sb2dpbg==')
        await page.wait_for_timeout(self.wait_random)
        if "扫码登录" not in await page.content():
            logger.info("账号={}, 正常在线".format(username))
        else:
            await page.click('li:has-text("验证码登录")')
            # 清空输入框
            await page.evaluate('document.querySelector(".web-login-normal-input__input").value=""')
            await page.evaluate('document.querySelector(".web-login-button-input__input").value=""')
            # 账号密码登录
            await page.wait_for_timeout(self.wait_random)
            await page.type(selector=".web-login-normal-input__input", text=username, delay=100)
            # await page.type(selector=".web-login-button-input__input", text=password, delay=100)
            await page.wait_for_timeout(self.wait_random)
            await page.click('span:has-text("获取验证码")')
            await page.wait_for_timeout(self.wait_random)
            num = 1
            while True:
                logger.warning("当前滑动次数: {}".format(num))

                distance = await self.get_distance()

                tracks = self.get_tracks(distance)

                new_frame = page.frame_locator('#captcha_container > iframe')
                slide = new_frame.locator('.captcha-slider-btn')
                box = await slide.bounding_box()
                await page.mouse.move(box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
                await page.mouse.down()
                x = box["x"] + box["width"] / 2
                for track in tracks:
                    x += track
                    await page.mouse.move(x, box["y"])
                    await asyncio.sleep(random.uniform(0.005, 0.02))
                await page.mouse.up()
                await page.wait_for_timeout(self.wait_random)
                num = num + 1
                if num > 5 or self.tag:
                    break
                await page.wait_for_timeout(self.wait_random)

    @property
    def wait_random(self):
        return random.randint(1000, 3000)

    async def on_response(self, response: Response):
        if "https://verify.zijieapi.com/captcha/get" in response.url:
            result = await response.json()
            data = result.get("data")
            picture = data.get("question")
            self.y = picture.get("tip_y")
            self.url1 = picture.get("url1")
            self.url2 = picture.get("url2")

        if "https://verify.zijieapi.com/captcha/verify" in response.url:
            result = await response.json()
            if result.get("code") == 200:
                logger.success("滑块通过, res={}".format(result))
                self.tag = True

    async def get_distance(self):
        async with httpx.AsyncClient() as session:
            response_1 = await session.get(self.url1)
            response_2 = await session.get(self.url2)
        image = Image.open(BytesIO(response_1.content))
        width, height = image.size
        sub_images = []
        for i in range(6):
            left = (i * width) // 6
            right = ((i + 1) * width) // 6
            sub_image = image.crop((left, 0, right, height))
            sub_images.append(sub_image)

        order = [1, 5, 4, 2, 0, 3]
        new_images = [None] * 6
        for i in range(6):
            new_images[order[i]] = sub_images[i]

        merged_image = Image.new('RGB', (width, height))
        for i in range(6):
            left = (i * width) // 6
            right = ((i + 1) * width) // 6
            merged_image.paste(new_images[i], (left, 0))

        # 保存图片
        merged_image.save('logs/images/captcha_restored.png')
        img_byte = BytesIO()
        merged_image.save(img_byte, format='JPEG')
        url1_content = img_byte.getvalue()
        ocr_response = self.ocr.slide_match(response_2.content, url1_content)
        x = ocr_response['target'][0]
        logger.info(f"滑动的距离为: {x}, 高度为: {self.y}")
        return int(int(x) / 550 * 340) - 5

    def get_tracks(self, distance):
        track = []
        current = 0
        mid = distance * 4 / 5
        t = 0.2
        v = 1

        while current < distance:
            if current < mid:
                a = 4
            else:
                a = -3
            v0 = v
            v = v0 + a * t
            move = v0 * t + 1 / 2 * a * t * t
            current += move
            track.append(round(move))
        return track

    async def start(self, username):
        async with async_playwright() as pwt:
            browser = await pwt.chromium.launch_persistent_context(
                headless=self._headless,
                user_data_dir=self._session,
                args=["--start-maximized", '--disable-blink-features=AutomationControlled'],
                no_viewport=True  # 窗口最大化
            )
            await browser.add_init_script(path="logs/js/stealth.min.js")
            page = await browser.new_page()
            await self.login(page=page, username=username)


async def main(username):
    b = AwemeBrowser(session=f"logs/session/{username}")
    await b.start(username)


asyncio.run(main("18888888281"))

```

## Clicknium-Python 自动化浏览器和桌面应用

### Clicknium

[Clicknium](https://www.clicknium.com/documents) 是一个 Python 界面自动化库，让 Python 新手也能很快用它操作浏览器和 Windows 平台的 APP，实现自己的自动化脚本。

Python SDK：https://pypi.org/project/clicknium/

VS Code 插件： https://marketplace.visualstudio.com/items?itemName=ClickCorp.clicknium

文档：https://github.com/clicknium/clicknium-docs

为了提供好的开发体验，特地写了一个 VS Code 的插件。直接在 VS Code 中搜索 Clicknium 安装。插件中包含了 SDK 和浏览器插件的一件安装功能。
![img](./Python框架.assets/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f343933643432666430333961613430652e706e67.png)

### 使用方法

Clicknium 使用最直观的 API 来操作 UI 元素，如 set_test, get_test, click 等等。UI 自动化的一大问题是 UI 元素定位。 Clicknium Recorder 会自动识别鼠标所指的元素。 按住 Ctrl+鼠标单击，Recorder 就会自动抓取元素，生成 Locator 。直接使用 Locator 就能直接获取 UI 元素并对其进行操作：

![img](./Python框架.assets/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f396537396433643762353563623938382e676966.gif)

在 VS Code 中还提供了代码提示：

Clicknium 既能操作桌面应用，又能操作浏览器。我自己有一个下载种子的脚本：自动下载电影种子和字幕，打开浏览器登录 NAS，上传种子开始下载，同时将字幕拷贝到同一文件夹中。

### 结构化数据抓取

Clicknium 还提供了便捷的数据抓取功能，既能自动分析抓取表格：
[![img](./Python框架.assets/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f343363323331646362303233323233372e676966.gif)](https://camo.githubusercontent.com/5bb95ac64587008030efeb5870a92d26699bc24cfde009672b71f373b84a7a07/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f343363323331646362303233323233372e676966)
普通的列表(如 JD 产品页)也完全没问题：

图床不稳定可看：[YouYube](https://www.youtube.com/watch?v=1gDGnzrwWLk), [B 站](https://www.bilibili.com/video/BV1aW4y1W7xQ/?spm_id_from=333.337.search-card.all.click)

### Locator 操作

locator 支持快捷操作和验证：
[![img](./Python框架.assets/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f653939343563643266643566633331392e706e67.png)](https://camo.githubusercontent.com/e2889e0dda8474dc841fa47e33d6892db2d7e23b0bfc35aa3934c3548936f39c/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f653939343563643266643566633331392e706e67)
locator 属性可以根据自己的需求修改，支持正则和通配符以提高 locator 的稳定性和试用范围。

在代码中，鼠标悬浮在 locator 上就能查看和跳转到 locator 页面，提高代码的可读性：
[![img](./Python框架.assets/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f656331373838363864613762366264642e706e67.png)](https://camo.githubusercontent.com/e3390c36ea898b2fc2e8b28dc2c99c5ba199b6ec2b37a0a1aaa3ad71458e1d55/68747470733a2f2f73332e7575752e6f76682f696d67732f323032322f31312f32342f656331373838363864613762366264642e706e67)

### Sample

控制鼠标，使 Teams/Skype 一直在 active：https://github.com/automation9417/mousemover

自动上传视频到 Ticktok，Ins，Twitter：https://github.com/automation9417/upload-video-to-TikTok-Instagram-Twitter

自动下载 youtube 视频：https://dev.to/kayyolo/python-download-youtube-videos-automatically-3i58

## Pyppeteer：Python模拟浏览器

Pyppeteer是一个Python库，它提供了一组API来控制无头版本的Chromium浏览器。无头浏览器是一种没有图形用户界面（GUI）的Web浏览器，可以在后台运行，非常适合自动化测试、网络爬虫、自动化任务等场景。

**「安装」**

```bash
pip install pyppeteer
```

**1.「获取百度搜索结果」**

```python
import asyncio
from pyppeteer import launch

async def main(wd):
    browser = await launch()
    page = await browser.newPage()
    await page.goto('https://www.baidu.com')
    await page.type('input[name="wd"]', wd)
    await page.keyboard.press('Enter')#模拟点击Enter
    await asyncio.sleep(5)
    search_results = await page.evaluate('''() => {
        const results = [];
        const links = document.querySelectorAll('#content_left h3 a');
        links.forEach(link => {
            results.push({
                title: link.innerText,
                url: link.getAttribute('href')
            });
        });
        return results;
    }''')
    for result in search_results:
        print(result['title'],"\n"+ result['url'])
    await browser.close()
#搜索
asyncio.get_event_loop().run_until_complete(main("python"))#关键词
```

**2.「捕获网页截图」**

```python
import asyncio
from pyppeteer import launch

async def main():
    browser = await launch()
    page = await browser.newPage()
    await page.goto('https://baidu.com')
    await page.screenshot({'path': 'example.png'})
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())
```

**3.「生成网页PDF」**

```python
import asyncio
from pyppeteer import launch

async def main():
    browser = await launch()
    page = await browser.newPage()
    await page.goto('https://example.com')
    await page.pdf({'path': 'example.pdf', 'format': 'A4'})
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())
```

**4.「处理JavaScript密集型页面」**

```python
import asyncio
from pyppeteer import launch

async def main():
    browser = await launch()
    page = await browser.newPage()
    await page.goto('https://example.com/js-heavy-page')
    # 等待某个元素加载完成
    await page.waitForSelector('#loaded-element')
    # 执行JavaScript代码
    data = await page.evaluate('''() => {
        const data = document.querySelector('#loaded-element').textContent;
        return data;
    }''')
    print(data)
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())
```

**5.「网络请求拦截」**

```python
import asyncio
from pyppeteer import launch

async def handle_request(client, request, response):
    if request.url.startswith('https://example.com'):
        # 修改请求头
        request.headers['X-Custom-Header'] = 'MyValue'
        response = await client.fetch(request, response)
        return response

async def main():
    browser = await launch()
    page = await browser.newPage()
    await page.setRequestInterception(True)
    page.on('request', handle_request)
    await page.goto('https://example.com')
    await browser.close()

asyncio.get_event_loop().run_until_complete(main())
```

## Mechanize：

`mechanize`是可以用于模拟浏览器的行为，包括自动填写表单、点击链接、处理cookies和会话的Http请求Python库。

### mechanize的特点

1. **「自动表单提交」**：可以自动填写表单并提交。
2. **「Cookie管理」**：自动处理网站的cookies，无需手动管理。
3. **「会话管理」**：支持会话管理，可以跨多个请求保持状态。
4. **「链接点击」**：可以自动点击网页中的链接。
5. **「重定向处理」**：自动处理HTTP重定向。
6. **「User-Agent伪装」**：可以设置自定义的User-Agent，模拟不同的浏览器访问。

### 「安装」

```
pip install mechanize
```

### 创建Browser对象

创建一个`Browser`对象，它是你与网站交互的主要接口。

```
import mechanize
br = mechanize.Browser()
```

### 设置请求头

可以设置请求头，比如伪装成不同的浏览器：

```
br.addheaders = [('User-agent', 'Mozilla/5.0')]
```

### 打开网页

使用`open`方法打开一个网页：

```
br.open('http://www.example.com')
```

### 填写表单并提交

找到需要填写的表单，并使用`select_form`和`submit`方法进行操作：

```
br.select_form(nr=0)  # 选择第一个表单
br['username'] = 'your_username'  # 填写用户名
br['password'] = 'your_password'  # 填写密码
br.submit()
```

### 解析网页内容

使用`mechanize`库结合`BeautifulSoup`库可以方便地解析网页内容：

```
from bs4 import BeautifulSoup
soup = BeautifulSoup(br.response().read(), 'html.parser')
```

### 处理响应

获取响应内容，并进行相应的处理：

```
response = br.response().read()
```

### 「爬取百度搜索结果」

```
import mechanize  
from bs4 import BeautifulSoup  
br = mechanize.Browser()  
#设置请求头，伪装成Mozilla浏览器
br.addheaders = [('User-agent', 'Mozilla/5.0')]
br.set_handle_equiv(True)  #解析HTML文档中的meta http-equiv标签
br.set_handle_gzip(True)  #解压缩gzip编码的响应
br.set_handle_redirect(True)  #允许自动处理HTTP重定向
br.set_handle_referer(True)  #在请求头中添加Referer字段
br.set_handle_robots(False)  #是否遵循robots.txt文件
#设置自动刷新的处理，max_time是刷新等待的最长时间
br.set_handle_refresh(mechanize._http.HTTPRefreshProcessor(), max_time=1)
#是否设置debug模式
br.set_debug_http(True)
br.set_debug_redirects(True)
br.set_debug_responses(True)
br.open('http://www.baidu.com')
br.select_form(name='f')
br['wd'] = 'Python'#关键词
br.submit()
content = br.response().read()
soup = BeautifulSoup(content, 'html.parser')
h3_tags = soup.find_all('h3')
for h3 in h3_tags:
    h3_link = h3.find('a')
    if h3_link: 
        h3_url = h3_link.get('href')
        h3_text = h3_link.get_text()
        print(f'标题: {h3_text}\n 链接:{h3_url}\n***\n')
```

### 「输出」

```
标题: python环境搭建-python免费下载-中文简体版免费使用
 链接:http://www.baidu.com/baidu.php?url=060000KKXYb9K48fSvoE0MOXNRWAC7P1Sdzk7JwC8W1Amx15v_aGqk-Pdwp3ifWsgcw4X-ztEYLJ11N3G9TyfZVOxJRTUYgEvqMUcxZLUziifnLpOjwaxoTCyq9VLYw2-sJU98OR4WfAnu3t6OIYr8lBgTei7aLY5cBCuAqcYOFep8hYeTeH4GDIp6phr-GzgnOlhwPyVqRLOcnDSPSDmpvtUnWw.7R_NR2Ar5Od66EtJCJ_8Ob6kl27HC-2s1f_unMuYS26.U1Yk0ZDqRZ-YpAq80ZKGm1Yk0ZfqTZ-YpAq80A-V5HczPfKM5yq-TZns0ZNG5yF9pywd0ZKGujY1n0KWpyfqPjb40AdY5HDsnH-xn1Dzn7t1nj0zg1DsnHIxnW0dnNt1PW0k0AVG5H00TMfqnW0d0AFG5HDdr7tznjwxPH010AdW5HDsnH-xnH0zg1Dsn-tknjDLg1csPH7xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5H00UMfqn0K1XWY0mgPxpywW5gK1QyPV0A-bm1dcfbD0TA9YXHY0IA7zuvNY5Hm1g1KxnHRs0ZwdT1Y1rjc4n1msnHR1rHDzPjnvrH630ZF-TgfqnHTkPHRznjb1nWTvn6K1pyfqmhRYrAmkuWcsnAfYm1fvn6KWTvYqfH9DwRn1wHDsPDcYfRczfsK9m1Yk0ZK85H00TydY5H00Tyd15H00XMfqn0KVmdqhThqV5HKxn7t1njDdg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HKxPWnLPW0znHFxPWnLPW0znHFxn7tsg100TA7Ygvu_myTqn0Kbmv-b5H00ugwGujYVnfK9TLKWm1Ys0ZNspy4Wm1Ys0Z7VuWYs0AuWIgfqn0KGTvP_5H00mywhUA7M5HD0UAuW5H00uAPWujY0IZF9uARqn0KBuA-b5RmYPYm3wj0dPDnsnRDzwDN7PHm3nHF7wjTznYNAwWPK0AFY5H00Uv7YI1Ys0AqY5H00ULFsIjYsc10Wc10Wnansc108nj0snj0sc10WwDuRc10WQinsQW0snj0snankQW0snj0snansc10Wna3snj0snj0Wnansc10Wnansc100mh78pv7Wm1Ysc10Wnans0Z7xIWYsQWb3g108njKxna3sn7tsQWb3g108PW7xn7tsQWmkg100mMPxTZFEuA-b5H00ThqGuhk9u1Ys0APv5fKGTdqWTADqn0KWTjYs0AN1IjYs0Z7MIvfqn0KWThnqPWDdn1f&us=newvui&word=
***

标题: python实战,在线学习—慕课网
 链接:http://www.baidu.com/baidu.php?url=060000KKXYb9K48fSdnOXFOHAVmiBZiOe8mC_iYFXKP1aDr4Y4qKcQHxCqUFrUe6N7w36yin7z0HfFuZ8FFswe6Shkc0QtY_mGm3wvC1sCFMkfzrxeRSjMEJXneSEIrl-hJmM4287MjOfq3sujNf8yw1dzEgNxLV1oGu1IB86ckNI3GuilyfV8u1pcxuqWQLufz_Zsikm0BEoRVSRrtnWZ6Mws4k.DD_NR2Ar5Od669ITOP45Y8IaBaAB1ZZKgYeSxxHjzlyu8dSuBSEgvIrVMu8zfSPvHFxujg8_vUVhOkdvUVhOkllmXyAGh2FP7BS4YrrAEoAMikgdsRP5QAeKPa-BqM76133X8a9G4I2UM3PQDpIPxgKfYt_QrMAzONDkal4SUo6CpXy7YNKnNKBEGLqT7jHzYD1pycgg512N9h9mer5Hg8R.U1Yz0ZDqRZ-YpAq80ZKGm1Yk0ZfqTZ-YpAq80A-V5HczPfKM5yq-TZns0ZNG5yF9pywd0ZKGujY1n0KWpyfqPjb40AdY5HDsnH-xnH0kPdtznjRkg1nvnjD0pvbqn0KzIjYznjR0mhbqnHR3g1csP7tdnjn0UynqnH0krNtknjDLg1csPH7xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5H00UMfqn0K1XWY0mgPxpywW5gK1QyPV0A-bm1dcfbD0TA9YXHY0IA7zuvNY5Hm1g1KxnHRs0ZwdT1Y1PW0Yn16vn1R1rHn4rHRvPj00ThNkIjYkP1DdPHcsrHnzP1mz0ZPGujdBuHf3uW7hnW0sujwWPjmz0AP1UHdKrDw7f1P7nH0YfWwKfWFj0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYs0AdWgvuzUvYqn7tsg1Kxn0Kbmy4dmhNxTAk9Uh-bT1Ysg1Kxn7ts0ZK9I7qhUA7M5H00uAPGujYs0ANYpyfqQHD0mgPsmvnqn0KdTA-8mvnqn0KkUymqn0KhmLNY5H00pgPWUjYs0A7buhk9u1Yk0Akhm1Ys0AwWmvfq0Zwzmyw-5HmLnjRsnfKBuA-b5RmYPYm3wj0dPDnsnRDzwDN7PHm3nHF7wjTznYNAwWPK0AqW5HD0mMfqn0KEmgwL5H00ULfqn0KETMKY5H0WnanWnansc10Wna3snj0snj0WnaPDw-fWnanVc108nj0snj0sc1D8nj0snj0sc10WnansQW0snj0snansc10Wnansc10Wn0KBmy4omyPW5H0Wnansc100XZPYIHYzPHndPjRkP0KkgLmqna34n-tsQW0sg108njKxna34n-tsQWfkg1Kxna3YnNts0AF1gLKzUvwGujYs0ZFEpyu_myTqn0KWIWY0pgPxmLK95H00mL0qn0K-TLfqn0KkuLIb5H00mLFW5HRdnHR&us=newvui&xst=mWdAPjIArDfsPHwjnj7Knbw7wHRvrjDzwRfLnWP7wbm1ff715HD1P1DkPjTdnj6LnWcLP1b3PWcvg1czPNtk0gTqTZ-YpAq80gDqTZ-YpAq80gRqnWR1PHfdnHfKIjYkP1DdPHcsrHn10ydk5H0an0cV0yPC5yuWgLKW0ykd5H0Kmv3qmh7GuZRKTMfqn0DzPj6LPH63P1Dk&word=
***

标题: Welcome to Python.org
 链接:http://www.baidu.com/link?url=5449G8AQ4YRZdYwdTLeD_-65ZdilHK4HhaOMu-W-nAmTFNQn-bo3qQ8uCpq9hfAq
***

标题: Python - 百度百科
 链接:http://www.baidu.com/link?url=05E3UYUMKMPRQjUkPlNRIq6Kb1m7PG-BHqzZT1SEwBNMKM5RRymj5AGYXQuVFNL97-UX8HIjvqFJcWCsgeo_BK
***

标题: python下载-官版下载-简体中文
 链接:http://www.baidu.com/baidu.php?url=060000KKXYb9K48fS46pPAZAsm6FegeqL1fJcJDlZUt2XvRE64vx9cDlKdn-KwQfp2ZNdAnQWFj1SVWcCOeacHvO9a_ttj3QciAwrzx0yquZUpX_cU3ATTrwyucxo5IrqIOeUQr2oH9KxmC5kCTjCunUPoaBG38DgKjIONHq-AWum7-dUe4nMzoq5GpYI2k7lE-NGNXtAAmxTgNWqelqjehXs8-T.7Y_NR2Ar5Od66kl27HCE2UCWCn1TbA5wfJIDGyAp7WWgb_LJ.U1Yk0ZDqRZ-YpAq80ZKGm1Ys0ZK1pyI85iY0IjdsXgwCUv30pyYqnHfvnfKM5yq-TZns0ZNG5yF9pywd0ZKGujY1n0KWpyfqPjb40AdY5HbsPHKxn1czr7tknjDLg1csPH7xnH0krNt1PW0k0AVG5H00TMfqnW0d0AFG5HDdr7tznjwxPH010AdW5HDsn-tknjFxnH0kPdtznjRkg1DsnH-xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5H00UMfqn0K1XWY0mgPxpywW5gK1QyPV0A-bm1dcfbD0TA9YXHY0IA7zuvNY5Hm1g1KxnHRs0ZwdT1YvP1RYn1DdnWDLnjf1rHczrjTd0ZF-TgfqnHTkPHRznjb1nWTvn6K1pyfqmhRYrAmkuWcsnAfYm1fvn6KWTvYqfH9DwRn1wHDsPDcYfRczfsK9m1Yk0ZK85H00TydY5H00Tyd15H00XMfqn0KVmdqhThqV5HKxn7tsg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HmknHbvPW6zg1mknHbvPW6zg1Kxn7tsg100TA7Ygvu_myTqn0Kbmv-b5H00ugwGujYVnfK9TLKWm1Ys0ZNspy4Wm1Ys0Z7VuWYs0AuWIgfqn0KGTvP_5H00mywhUA7M5HD0UAuW5H00uAPWujY0IZF9uARqn0KBuA-b5RmYPYm3wj0dPDnsnRDzwDN7PHm3nHF7wjTznYNAwWPK0AqW5HD0mMfqn0KEmgwL5H00ULfqnfKETMKY5HcWnanknanzc1n1rjfdrHT1PjTWPH0snandnj0sQW0snj0snan1c1cWnanVc108njn4PHRkc1D8nj0snj0sc1DWnansQW0snj0snansc10Wnansc10Wn0KBmy4omyPW5H0Wnansc100TNqv5H08rH-xna3sn7tsQW0sg108rH-xna3Ln7tsg108P1Kxn0KBTdqsThqbpyfqn0KzUv-hUA7M5H00mLmq0A-1gvPsmHYs0APs5H00ugPY5H00TyILujYs0APzm1Yvn1D3Pf&us=newvui&word=
***

标题: Python中文网 官网
 链接:http://www.baidu.com/link?url=5449G8AQ4YRZdYwdTLeD_wXYu-irJxmoo9HIsSeSKbpVzcvlevxP-5RSsIrLJIxf
***

标题: Python十分钟入门 | 菜鸟教程
 链接:http://www.baidu.com/link?url=pLEQwiIR904XHH-7mfLuWhMp_5LI5Cj52163XS_tjAGwtZdI5D-W-cgxM-lnJWNz0nYvv3t2ItCWDtUwunNvaLkNut-LoN8E-LtPWA40JM58c2GjRkAVEyBekS63m0KIz34XnaxghwB1jB4Ht5FOwfkwKNaIrPxc7GzTeHkUs37
***

标题: AI搜索国内官方入口免费使用
 链接:http://www.baidu.com/baidu.php?url=060000KKXYb9K48fSvHB7J9ZDwdlHJZmwiZU3VUXf-x7JzR_ypWGBc1ntBhsdppfFWYZ0bWNZlwqzYbNQajxpPc9FfoSYINArXL0I-lbdTVbab352VHz3-SyRVxGFr-CiZTFSu10LhLvxb2cRgUVr-LZM9BY5ycaQMR4-NvBxnpNb8i_O4b7xvafQvGOz78sWQjWHz-xfGCbK7BFzBaV63Z-BdHs.7R_NR2Ar5Od663rj6tJjvT1_LFKL9JuBBHwmE84XKPOQZjNdu99I6BCnRPRTPN-xyPvap7Q7erQKdkYymh5UqeL_kfdF1ITDHljDU_DXKvxvOXqenRPiTLgVHC3ZHgnTQQS9eny5wfJI7dHzqJIZ0lpeDk3e5ZGePMukLUer1JM-eRlrKYdvQck3e5ZGePMukLUerki_nYQASEBC.U1Yk0ZDqRZ-YpAq80ZKGm1Ys0ZK1pyI85iY0IjLRv_OxTZ-YpAq80A-V5HDdn1f0u1dEugK1n0KdpHdBmy-bIfKspyfqn100mv-b5Hf4rfKVIjY4njRsg1nznW9xnH0kPdtznjRkg1DsnH-xn1msnfKopHYs0ZFY5HcsPfKBpHYkPH9xnW0Yg1RsnsKVm1Yknj7xnH0kg1DsnHIxnW0dnNtknjD4g100TgKGujYs0Z7Wpyfqn0KzuLw9u1Ys0A7B5HKxn0K-ThTqn0KsTjYs0A4vTjYsQW0snj0snj0s0AdYTjYs0AwbUL0qn0KzpWYs0Aw-IWdsmsKhIjYs0ZKC5H00ULnqn0KBI1Ys0A4Y5H00TLCq0A71gv-bm1dsTzdWUfKGuAnqiDFK0ZKCIZbq0Zw9ThI-IjY1nNt1nHwxP6KYIgnqPHT1njnknjD1njfknjDYnW6dP6Kzug7Y5HDLnHRdnW04n1cLPWc0Tv-b5yF-Pj9hnymznjKbPAnYPWc0mLPV5RD3wDNjnYRknjwaPD7anbn0mynqnfKsUWYs0Z7VIjYs0Z7VT1Ys0ZGY5H00UyPxuMFEUHYsg1Kxn7tsg1Kxn0Kbmy4dmhNxTAk9Uh-bT1YYrjcLPjTsn-tkn104P104n7tsg1Kxn7ts0ZK9I7qhUA7M5H00uAPGujYs0ANYpyfqQHD0mgPsmvnqn0KdTA-8mvnqn0KkUymqn0KhmLNY5H00pgPWUjYs0A7buhk9u1Yk0Akhm1Ys0AwWmvfq0Zwzmyw-5H00mhwGujdAPjIArDfsPHwjnj7Knbw7wHRvrjDzwRfLnWP7wbm1ffKEm1Yk0AFY5HD0Uv7YI1Ys0AqY5Hc0ULFsIjYzc10WQinknj0sc1n1rjmsPHRsPjnWnansQW0snj0snankc1Dsnj0Wnandc108njcsnj0sc1D8nj0snj0sc10WnansQW0snj0snansc10Wnansc10Wn0KBmy4omyPW5H0Wnansc100TNqv5H08njPxna3sn7tsQW0sg108njPxna3sn7tsg108njKxn0KBTdqsThqbpyfqn0KzUv-hUA7M5H00mLmq0A-1gvPsmHYs0APs5H00ugPY5H00TyILujYs0APzm1YdPWf4rf&us=newvui&word=
***

标题: Python - 视频大全 - 高清在线观看
 链接:/sf/vsearch?pd=video&wd=Python&tn=vsearch&lid=be48f1f200d4c462&ie=utf-8&rsv_pq=be48f1f200d4c462&rsv_spt=5&rsv_bp=1&f=8&atn=index
***

标题: python - 相关博客 - 开发者搜索
 链接:http://www.baidu.com/link?url=5449G8AQ4YRZdYwdTLeD_wXYu-irJxmoo9HIsSeSKbmX25hOB1SvCfhinPyMKzXMtnBmBfdKLTeD1aOXqDSxvbYP3fFroXy8nXgqtwrVKT96gku79j0kH4Rp1R5H0NsF
***

标题: Python入门教程(非常详细)从零基础入门到精通,看完这一篇...
 链接:http://www.baidu.com/link?url=WO4yh7NHhIrddiRtyAQ6rBpA0KTgfnFLrKZvdjJVNVcqj04EC-NfAGMZaJPUpBxTX7AZBokCOzP_bp3kYchNSGequM8hlORxoXU6IRWWk-i
***

标题: Python 基础语法 | 菜鸟教程
 链接:http://www.baidu.com/link?url=LehzB718O3EbOVn1pJe-I72I4jo4yDSeKA8v_sUweMe-zafwDQfOUS8HFjsN53mX4wI7cQySj-12Ra9NyUQzR_
***

标题: Python入门最完整的基础知识大全【纯干货,建议收藏】-CSDN...
 链接:http://www.baidu.com/link?url=i0NXYVYaLoT6GxL25p8aclfMz3yxPjHRdbHdjhDZrX51aKei3UAyxd10_QDoLZx27a4a0H9lYiLpxZabPu4FdVteIMelnLdqa_irME5MA0u
***

标题: python 基础 - 知乎
 链接:http://www.baidu.com/link?url=LehzB718O3EbOVn1pJe-I9zDpP-Y2g4Qlyd6TZ6U5WGeyO68VfI-bAlQxAQyqyfv
***

标题: 服务器装宝塔面板让服务器管理python更高效;
 链接:http://www.baidu.com/baidu.php?url=060000KKXYb9K48fSzO_MBUCHYn1VBd4_v-_mpbI-7uiODIoiIPrxkPvjFYYnBxECaREHE0S_qC9DcQiOSCdy73d2bH9rOwhf1uze5Pg6SVLMVJ2B7VIHcTJ3iHxZV7HOaMXlRUfbfee-3ONNzfhTi-5ZT5ouShvD6t6KKvnnJDa7G5E0tJGJDoZyXSk6am-FQKgwyURAGkoWFA9KDFQlRENVbgH.7R_NR2Ar5Od663rj6tolZFKDM668IswRgnLTSqqj-ClAQvTyjoZIjweTHZVLuSNMqxLOREOC4xSkqmO4AevkOIqtXMIYUEotEUw1Oq9MTe9S8eet5wSEgOolPzp5VOy-i_nYQ7IXHWyC.U1Yk0ZDqRZ-YpAq80ZKGm1Ys0ZfqTZ-YpAq80A-V5HczPsKM5yq-TZns0ZNG5yF9pywd0ZKGujY1n0KWpyfqPjb40AdY5HnznW9xnH0kPdt1nHcsg1csPH7xnH0krNt1PW0k0AVG5H00TMfqnW0d0AFG5HDdr7tznjwxPH010AdW5HDsn-tknjDLg1Dsn-tznjRkg1DsnH-xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5H00UMfqn0K1XWY0mgPxpywW5gK1QyPV0A-bm1dcfbD0TA9YXHY0IA7zuvNY5Hm1g1KxnHRs0ZwdT1YknWmvrHTvPHDdPW6vnHnkPWbzP0Kzug7Y5HDLnHRdnW04n1cLPWc0Tv-b5yF-Pj9hnymznjKbPAnYPWc0mLPV5RD3wDNjnYRknjwaPD7anbn0mynqnfKsUWYs0Z7VIjYs0Z7VT1Ys0ZGY5H00UyPxuMFEUHYsg1Kxn7tsg1Kxn0Kbmy4dmhNxTAk9Uh-bT1YdPj04nHRvg1KxPHnzPWTzr7tsg1Kxn0Ksmgwxuhk9u1Ys0AwWpyfqn0K-IA-b5iYk0A71TAPW5H00IgKGUhPW5H00Tydh5H00uhPdIjYs0A-1mvsqn0K9uAu_myTqnfK_uhnqn0KbmvPb5fKYTh7buHYLPH0knjc0mhwGujdAPjIArDfsPHwjnj7Knbw7wHRvrjDzwRfLnWP7wbm1ffKEm1Yk0AFY5H00Uv7YI1Ys0AqY5H00ULFsIjYsc10Wc10Wnansc108nj0snj0sc10WwDuRc10WQinsQW0snj0snankQW0snj0snansc10Wna3snj0snj0Wnansc10Wnansc100mh78pv7Wm1Ysc10Wnans0Z91IZRqnWnvPWTkrj60TNqv5H08njPxna3sn7tsQW0sg108njPxna3sn7tsg108njKxn0KBTdqsThqbpyfqn0KzUv-hUA7M5H00mLmq0A-1gvPsmHYs0APs5H00ugPY5H00TyILujYs0APzm1YznjDYP0&us=newvui&xst=mWdAPjIArDfsPHwjnj7Knbw7wHRvrjDzwRfLnWP7wbm1ff715HD1P1DkPjTdnj6LnWcLP1b3PWcvg1czPdts0gTqTZ-YpAq80gDqTZ-YpAq80gRqnWnvPWTkrj6KIjYkP1DdPHcsrHn10ydk5H0an0cV0yPC5yuWgLKW0ykd5H0Kmv3qmh7GuZRKTMfqn0D1P16zrjcLn16&word=
***
```

## 其他

**Selenium：** Selenium 是一个用于 Web 应用程序测试的流行框架。它支持多种编程语言（如 Java、Python、C#等），允许开发人员模拟用户在 Web 浏览器中的行为。

**Appium：** Appium 是一个用于移动应用程序测试的开源工具，支持 iOS、Android 和 Windows 平台。它使用 WebDriver 协议来驱动原生、混合和移动 Web 应用程序，可以使用多种编程语言编写测试脚本。

1. **UI Automator：** UI Automator 是 Android 平台上的 UI 自动化测试框架，由 Google 提供。它可以用于测试 Android 应用程序的用户界面，支持在多个设备上并行运行测试。
2. **XCUITest：** XCUITest 是苹果公司提供的用于 iOS 应用程序的 UI 自动化测试框架。它可以测试 iOS 应用程序的界面和交互，支持 Swift 和 Objective-C 语言。
3. **TestComplete：** TestComplete 是一个功能强大的 UI 自动化测试工具，支持 Web、桌面和移动应用程序的测试。它提供了易于使用的图形化界面和脚本编辑器，适用于不同类型的应用程序和平台。
4. **Cypress：** Cypress 是一个用于 Web 应用程序的现代化端到端测试工具，它结合了测试驱动开发（TDD）和行为驱动开发（BDD）的理念。它提供了实时的测试运行和调试功能，适用于构建现代 Web 应用程序。

当你开始使用 UI 自动化框架时，通常会遵循以下一般步骤：

1. **安装框架：** 首先，你需要安装所选框架的相关组件和依赖项。通常，框架的官方网站会提供详细的安装指南和文档。
2. **设置环境：** 在开始编写测试之前，你需要设置测试环境。这可能包括配置测试设备或模拟器、安装必要的驱动程序或插件等。
3. **编写测试脚本：** 使用所选框架提供的 API 和工具，编写测试脚本来模拟用户与应用程序的交互。这些脚本通常包括打开应用程序、执行特定操作（如点击按钮、输入文本等）、验证应用程序状态等步骤。
4. **运行测试：** 在编写完测试脚本后，你可以运行测试来验证应用程序的功能和用户界面是否符合预期。你可以选择在本地环境或远程测试平台上运行测试。
5. **分析结果：** 运行测试后，你需要分析测试结果并识别任何失败或异常。框架通常会提供详细的测试报告和日志，帮助你快速定位问题并进行修复。
6. **维护和优化：** 随着应用程序的不断演化，你可能需要不断维护和优化测试脚本。这可能包括更新测试脚本以适应新的应用程序功能、优化测试执行速度等。

以 Selenium 为例，以下是一个简单的 Python 代码示例，用于在 Google 搜索框中输入关键字并点击搜索按钮：

```python

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# 创建WebDriver对象
driver = webdriver.Chrome()

# 打开Google首页
driver.get("https://www.google.com")

# 定位搜索框并输入关键字
search_box = driver.find_element_by_name("q")
search_box.send_keys("OpenAI")

# 模拟按下回车键或点击搜索按钮
search_box.send_keys(Keys.RETURN)

# 关闭浏览器
driver.quit()
```

在这个示例中，我们首先创建了一个 Chrome WebDriver 对象，然后打开 Google 首页，找到搜索框元素并输入关键字，最后模拟按下回车键或点击搜索按钮。完成测试后，我们关闭浏览器。

# 手机自动化

## 手机自动化操作：uiautomator

想要实现代码自动化控制的话就要用到 uiautomator 这个工具

UiAutomator 是一个用于 Android 平台的自动化测试框架。它允许开发人员编写自动化测试脚本来模拟用户在 Android 设备上的操作，例如点击按钮、输入文本、滑动屏幕等。UiAutomator 框架提供了一组 API，可以与设备上的 UI 元素进行交互，并提供了丰富的功能来执行测试用例和获取测试结果。通过使用 UiAutomator，开发人员可以自动化执行各种测试任务，包括功能测试、性能测试和用户界面测试等

首先安装 python 的依赖库。

```bash
pip3 install -U uiautomator2
```

然后执行 安装包含 httprpc 服务的 apk 到手机+atx-agent, minicap, minitouch。

```bash
python -m uiautomator2 init
```

手机会弹出安装界面提示是否安装

![图片](./Python框架.assets/640-45525.webp)

完成的安装结果如下

![图片](./Python框架.assets/640-1715336309096-1.webp)

安装好了后会显示 atx 等 app

![图片](./Python框架.assets/640-1715336309096-2.webp)

Python 中使用代码如下：

![图片](./Python框架.assets/640-1715336309096-3.webp)

执行结果如下，表示连接成功

![图片](./Python框架.assets/640-1715336309096-4.webp)

Uiautomator 的原理是通过查找手机上的元素定位，然后点击。类似于网页点击的原理。

首先电脑上安装

```bash
pip3 install webitor
```

安装完成后，cmd 界面执行 `python -m weditor` 跳出手机元素界面如下。

第一步：输入设备 id, 也就是 `adb devices` 查出来的 ID

第二步：点击连接

第三步：点击 `Dump Hierarchy`

然后再第 4 步就会出现手机的界面

![图片](./Python框架.assets/640-1715336309096-5.webp)

在右边的 coding 界面可以看到对应的 python 连接代码。这点最好的地方就是不用亲自写代码。当你在左边屏幕上点击的时候，中间 Selected Element 会显示设置的 XPathi 定位坐标点

![图片](./Python框架.assets/640-1715336309096-6.webp)

双击代表进入设置界面。同时进入后右边的 coding 界面就会显示点击的代码

![图片](./Python框架.assets/640-1715336309096-7.webp)

再点击 wifi，代码同步更新

![图片](./Python框架.assets/640-1715336309097-8.webp)

点击关闭 wifi

![图片](./Python框架.assets/640-1715336309097-9.webp)

这样，通过一步步点击操作，你就能得到各个步骤的代码。然后把这些代码集成进去。就可以形成一个完整的自动化点击代码。注意：因为点击后手机刷新是要消耗时间的，所以两次点击之间最好等待一会儿。不要连续两次点击挨着来。

如果不利用界面，可以用

`d. dump_hierarchy()`的方式把当前界面的元素机构图打印出来。然后找你需要的元素。比如我想开关 wifi。找到 text=”开启 WLAN”. 代码如下，就可以把 wifi 开关打开了

```python
import uiautomator2 as u2

d = u2.connect()

ret=d.dump_hierarchy()

print(ret)

d(text="开启WLAN").click()
```

![图片](./Python框架.assets/640-1715336309097-10.webp)

详细的使用参考官方文档：https://github.com/openatx/uiautomator2

## 操作 adb 方式

ADB（Android Debug Bridge）是一种用于与 Android 设备进行通信和控制的命令行工具。通过 ADB，您可以执行各种任务，如安装和卸载应用程序、访问设备文件系统、执行 shell 命令等。

在使用 ADB 控制手机之前，需要确保

1 已经在计算机上安装了 ADB 驱动程序，

2 手机已启用开发者选项并启用了 USB 调试模式。

adb 工具下载地址

https://developer.android.google.cn/tools/releases/platform-tools?hl=zh-cn

有 windows，mac, linux 三种操作系统可供下载

下载完成后将 SDK 的路径加入到系统路径里面。执行 adb 出现下面界面说明 adb 安装成功。

![image-20240510182739786](./Python框架.assets/image-20240510182739786.png)

手机数据线连接电脑，手机进入开发者模式, 用小米手机进入开发者模式来举例

设置->我的设备->MIUI 版本或者版本信息->连续点击该栏目

点击成功后，会提示已经处于开发者模式

![图片](./Python框架.assets/640-1715336894870-33.webp)

打开 usb 调试。

![图片](./Python框架.assets/640-1715336894870-34.webp)

如果想看屏幕点击的水平轴位置，可以把指针位置打开。这样点到哪里，屏幕上就会显示水平轴。

![图片](./Python框架.assets/640-1715336894870-35.webp)

此时机器上执行执行 adb devices。可以看到 device id。也就是连接手机的设备 ID

![图片](./Python框架.assets/640-1715336894870-36.webp)

常用的命令如下：

物理按键

| adb shell input keyevent 26   | 电源按键                 |
| ----------------------------- | ------------------------ |
| adb shell input keyevent 82   | 菜单键                   |
| adb shell input keyevent 3    | HOME 键                  |
| adb shell input keyevent 4    | 返回键                   |
| adb shell input keyevent 24   | 音量+                    |
| adb shell input keyevent 25   | 音量-                    |
| adb shell input keyevent 164  | 静音                     |
| adb shell input keyevent 85   | 播放/暂停                |
| adb shell input keyevent 86   | 停止播放                 |
| adb shell input keyevent 87   | 播放下一首               |
| adb shell input keyevent 88   | 播放上一首               |
| adb shell input keyevent 126  | 恢复播放                 |
| adb shell input keyevent 127  | 暂停播放                 |
| adb shell input keyevent 224  | 点亮屏幕                 |
| adb shell input keyevent 223  | 熄灭屏幕                 |
| `adb shell input tap <X> <Y>` | 点击屏幕，x,y 为坐标配置 |

划屏幕

| adb shell input swipe 400 1000 300 500 | 向上滑动 |
| -------------------------------------- | -------- |
| adb shell input swipe 200 100 300 1000 | 向下滑动 |
| adb shell input swipe 1000 500 200 600 | 向左滑动 |
| adb shell input swipe 200 500 1000 400 | 向右滑动 |

其他功能

| adb shell screenrecord /sdcard/filename.mp4          | 录制屏幕以 mp4 格式保存到 /sdcard |
| ---------------------------------------------------- | --------------------------------- |
| adb pull /sdcard/filename.mp4                        | 导出到电脑                        |
| adb shell cat /data/misc/wifi/\*.conf                | 查看 wifi 密码                    |
| adb reboot                                           | 重启                              |
| adb install -r apk 路径                              | 安装 apk                          |
| adb shell pm list packages                           | 列出所有的应用名称                |
| adb uninstall com.yisheng.yonghu                     | 卸载 com.yisheng.yonghu           |
| adb shell svc wifi enable                            | 打开 wifi                         |
| adb shell svc wifi disable                           | 关闭 wifi                         |
| adb shell cmd wifi status                            | 查看 wifi 状态                    |
| adb shell ip addr show wlan0                         | 查看 wifi ip                      |
| adb shell am force-stop com.mxtech.videoplayer.ad    | 关闭 app                          |
| adb shell am start -n com.android.settings/.Settings | 进入设置                          |

Windows 上打开 cmd 窗口，执行上述命令就可以了。

打开软件，能看到检测到的设备

![图片](./Python框架.assets/640-1715337081250-45.webp)

点击连接。就能看到呈现出手机的界面。此时可以用鼠标去操作。

![图片](./Python框架.assets/640-1715337081251-46.webp)

## 3 种方式自动化控制 APP

自动化控制 APP 不管是在工作还是生活方面，都可以帮助我们高效地完成任务，节省时间和精力。本文主要介绍自动化控制 APP 的 3 种常用方式。

## 1、Python + adb

> 这种方式需要对 Android 有一些基本的了解。adb 是一种用于调试 Android 应用程序的工具。使用 Python 和 adb 可以轻松实现自动化控制移动端 APP。

### 1.1、特点

这种方式最简单，但是控制效果也最粗糙。不同的手机对应的元素 x,y 轴的位置不同，所以不适合操作不同尺寸的所有手机。这种方式也只适合于开发者，对于普通用户使用成本过高。

### 1.2、使用步骤

**1、安装 Android SDK**

具体细节略过，自行 google 安装。安装完毕后，配置好`ANDROID_HOME`环境变量。

**2、安装 Python**

具体细节略过，自行 google 安装。

**3、打开手机的开发者模式**

同时开启`USB调试`和`显示指针位置`。

**4、此时操作手机**

可以看到有 2 根轴，同时最上方会显示页面焦点元素的`x,y轴`位置。

![图片](./Python框架.assets/640-1715337439695-63.webp)

**5、使用 Python 代码+adb 简单控制 APP**

```python
import time
import subprocess

# 点击某个位置
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input tap 564  1861")
time.sleep(2)
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input tap 188  980")
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input tap 869  1808")
time.sleep(4)
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input tap 320  965")
# 输入数据
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input text 15850501595")
# 按返回键
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input keyevent KEYCODE_BACK")
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input tap 512  1120")
# 输入数据
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input text 15850501595")
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input keyevent KEYCODE_BACK")
subprocess.getoutput(f"adb -s Y2J7N17C27000069 shell input tap 843  1824")
```

**6、adb 常用命令**

```bash
- 查看手机设备：adb devices
- 查看设备型号：adb shell getprop ro.product.model
- 查看电池信息：adb shell dumpsys battery
- 查看设备ID：adb shell settings get secure android_id
- 查看设备IMEI：adb shell dumpsys iphonesubinfo
- 查看Android版本：adb shell getprop ro.build.version.release
- 查看手机网络信息：adb shell ifconfig
- 查看设备日志：adb logcat
- 重启手机设备：adb reboot
- 安装一个apk：adb install /path/demo.apk
- 卸载一个apk：adb uninstall <package>
- 查看系统运行进程：adb shell ps
- 查看系统磁盘情况：adb shell ls /path/
- 手机设备截屏：adb shell screencap -p /sdcard/aa.png
- 手机文件下载到电脑：adb pull /sdcard/aa.png ./
- 电脑文件上传到手机：adb push aa.png /data/local/
- 手机设备录像：adb shell screenrecord /sdcard/ab.mp4
- 手机屏幕分辨率：adb shell wm size
- 手机屏幕密度：adb shell wm density
- 手机屏幕点击：adb -s xxxxxxxxxxxxxxxxxxxxxxxxx shell input tap xvalue yvalue
- 手机屏幕滑动：adb shell input swipe 1000 1500 200 200
- 手机屏幕带时间滑动：adb shell input swipe 1000 1500 0 0 1000
- 手机文本输入：adb shell input text xxxxx
- 手机键盘事件：adb shell input keyevent xxxx
```

## 2、Android 无障碍

> 这种方式是使用 Android 无障碍功能实现自动控制 APP 的效果。需要开启 Android 无障碍功能，然后编写 Android 代码来控制另外的 APP 应用。

### 2.1、特点

这种方式需要开发者对 Android 有一些开发经验。优点是：可以用 Android 开发出独立的 apk 安装包，安装到普通用户手机里，方便用户使用。

### 2.2、使用步骤

**1、安装 Android SDK、安装 Android Studio**

具体细节略过，自行 google 安装。安装完毕后，配置好`ANDROID_HOME`环境变量。

**2、使用 Android 自带的 tool 工具**

Android 在`level-21`和之前的低版本，安装完毕后有一个`tool`工具包，但是高版本移除了此工具包。所以在安装 SDK 时还需要加上`level-21`版本。

使用 Android 自带的`tool`工具，主要是为了查看 APP 的页面布局和元素。但是`monitor`已经不可用了，只能使用`uiAutormatorViewer`。

![图片](./Python框架.assets/640-1715337439695-64.webp)

**3、利用**`uiAutormatorViewer`**工具找到元素信息**

用`uiAutormatorViewer`查看页面元素所在的`x,y轴`的布局。然后编写 Android 代码控制点击等效果。此工具显示出来的界面如下：

![图片](./Python框架.assets/640-1715337439696-65.webp)

**4、代码示例**

在`AndroidManifest.xml`代码里配置无障碍 service，然后实现`AccessibilityService`类，实现`onAccessibilityEvent`方法。后续手机界面如果有变动，内部会自动触发调用`onAccessibilityEvent`方法。

```kotlin
public class XXXXXAccessibilityService extends AccessibilityService {
    @Override
    public void onInterrupt() {

    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        Log.e("无障碍", "来了");

        // 创建线程去执行任务
        new Thread(new Runnable() {
            @Override
            public void run() {
                // 后续代码
            }
        }).start();
    }
}
```

无障碍功能本身也提供了多种寻找页面元素的方法，比如：

```kotlin
/**
 * 根据ID找元素
 */
private AccessibilityNodeInfo findNodeById(String id) {
    AccessibilityNodeInfo root = getRootInActiveWindow();
    if (root == null) {
        return null;
    }
    List<AccessibilityNodeInfo> nodeList = root.findAccessibilityNodeInfosByViewId(id);
    if (nodeList != null) {
        for (int i = 0; i < nodeList.size(); i++) {
            AccessibilityNodeInfo node = nodeList.get(i);
            if (node != null) {
                return node;
            }
        }
    }
    return null;
}
```

## 3、Python + Appium

> Python 加 Appium 可以组合成为一种自动化测试工具，可以用于测试和自动化控制移动端 APP。

### 3.1、特点

这种方式可以自动化操作 APP，但是使用者基本是开发者，普通用户很难完成这一系列的操作。但是也有个优点，有些页面标记为不可点击的元素，通过这种方式是可以点击的。

Appium 提供了更多的寻找页面元素的方式，比如 uiautomator、xpath、id 等。

### 3.2、使用步骤

**1、安装 Python**

此处略过步骤，自行 google。

**2、安装 Appium**

老版本的 Appium 直接包含了`Appium server` 和 `Appium inspector`，新版本的 Appium 安装完毕后，需要在单独安装`Appium inspector`。通过`Appium inspector`可以查看手机当前页面的 xml 布局。

```bash
# 安装appium
npm i --location=global appium

# 安装自动查看UI页面的驱动
appium   uiautomator2driver

# 安装inspector
下载安装地址：https://github.com/appium/appium-inspector?tab=readme-ov-file

# 启动server
appium server --use-driver=uiautomator2

# 安装客户端，代码里会使用 appium-python-client 与server通信，
# 然后server在将指令下发到手机里的appium端
pip3 install appium-python-client
```

**3、使用过程**

安装完毕后，就可以通过 Python 代码控制 App 了。

- 启动 Appium-server，`appium uiautomator2driver`。

- 启动 Appium inspector，配置好手机，然后点击`start session`，界面如下：

  ![图片](./Python框架.assets/640-1715337439696-66.webp)

- 通过 Appium inspector 查看页面布局和元素，找出目标元素。

  ![图片](./Python框架.assets/640-1715337439696-67.webp)

- 编写代码

```python
device_app_info = AppiumOptions()
# 操作系统
device_app_info.set_capability('platformName', 'Android')
# 操作系统版本
# device_app_info.set_capability('platformVersion', '10')
device_app_info.set_capability('platformVersion', '9')
# 设备名称
# device_app_info.set_capability('deviceName', '46F4C19402000952')
device_app_info.set_capability('deviceName', 'Y2J7N17C27000069')
# app package
device_app_info.set_capability('appPackage', 'cn.damai')
# app activity name
device_app_info.set_capability('appActivity', '.launcher.splash.SplashMainActivity')
# 使用uiautomator2驱动
device_app_info.set_capability('automationName', 'UiAutomator2')

# 连接appium server，server地址查看appium启动信息
driver = webdriver.Remote('http://127.0.0.1:4723', options=device_app_info)

# 找到元素，控制元素
buy_btn = driver.find_element(AppiumBy.ANDROID_UIAUTOMATOR, 'new UiSelector().resourceId("cn.damai:id/trade_project_detail_purchase_status_bar_container_fl")')
if buy_btn:
    buy_btn.click()
```

## 4、总结

- 以上 3 种方式都可以用于自动化控制移动端 APP，但是又各有适用的场景。读者需根据实际情况选择其中的一种方式来实现自动化控制。
- 以上的方式也可以认为是一种爬虫。还有一些自动化的方式是：先`分析api请求`，然后`逆向分析js`或者`逆向分析apk包`，破解其中的`加密方式`。然后直接调用 api，这种方式后面单独讲解。

# 自动可视化框架

## Pythonic：Python 零代码图形化编程神器，打造投资交易与自动化的利器

**项目地址**：https://github.com/hANSIc99/Pythonic

### 一、Pythonic 简介

Pythonic 是一个图形化的 Python 编程工具，专为交易和自动化设计。它将复杂的编程任务简化为直观的图形操作，让没有编程基础的用户也能轻松上手，实现交易策略和自动化流程的编程。

如有类似开发需求，可以参考项目源代码进行二次开发。

![图片](./Python框架.assets/640-1713980958610-137.webp)

### 二、Pythonic 的特点

#### 1. 图形化编程

Pythonic 的最大特点是图形化的编程界面。用户无需编写复杂的代码，只需要通过拖拽和点击，就可以完成交易和自动化的编程。这大大降低了编程的门槛，使得更多的用户能够利用 Pythonic 实现自己的交易策略和自动化流程。

#### 2. 专为交易和自动化设计

Pythonic 专为交易和自动化设计，它支持多种交易平台和自动化工具，可以满足用户在这两个领域的各种需求。

![图片](./Python框架.assets/640-1713980958610-138.webp)

### 三、Pythonic 的应用场景

Pythonic 可以应用于各种交易和自动化的场景。例如，用户可以利用 Pythonic 编写股票交易的策略，实现自动买卖；也可以利用 Pythonic 编写自动化流程，如自动发送邮件、自动管理文件等。

### 四、Pythonic 的优势

Pythonic 的优势在于它将复杂的编程任务简化为直观的图形操作，让没有编程基础的用户也能轻松上手。同时，Pythonic 支持多种交易平台和自动化工具，可以满足用户在交易和自动化领域的各种需求。

![图片](./Python框架.assets/640-1713980958610-139.webp)

### 五、总结

Pythonic 是一个强大的图形化 Python 编程工具，它为交易和自动化提供了一个简单易用的编程解决方案。无论你是交易员，还是希望提高工作效率的专业人士，都可以通过 Pythonic，轻松实现你的目标。

## Autoviz：Python 的自动可视化工具

### 简介

Autoviz 是一个用于自动可视化的 Python 库，它可以根据给定的数据集自动生成多种类型的图表。它的设计目标是使数据探索和分析过程更加高效和便捷，无需手动编写大量的可视化代码。Autoviz 基于 Matplotlib 和 Seaborn 等流行的可视化库，提供了一种简单且直观的方式来探索和展示数据集的特征和关系。

### 安装

要安装 Autoviz，可以使用 pip 命令运行以下命令：

```bash
pip install autoviz
```

### 使用方法和示例代码

以下是使用 Autoviz 生成数据集可视化图表的示例代码：

```python
from autoviz.AutoViz_Class import AutoViz_Class

# 读取数据集
data = pd.read_csv('your_dataset.csv')

# 创建Autoviz实例
AV = AutoViz_Class()

# 自动生成可视化图表
AV.AutoViz(
    filename='',
    sep=',',
    depVar='',
    dfte=data,
    header=0,
    verbose=0,
    lowess=False,
    chart_format='svg',
    max_rows_analyzed=150000,
    max_cols_analyzed=30
)
```

在上面的示例中，我们首先读取了一个数据集（假设为 CSV 格式）。然后，我们创建了一个 Autoviz 实例，并调用`AutoViz`方法来生成数据集的可视化图表。其中，`filename`参数用于指定保存图表的文件名，`sep`参数用于指定数据集中的分隔符，`depVar`参数用于指定目标变量，`dfte`参数用于传入数据集，其他参数用于设置自定义选项。

![image-20240427011509280](./Python框架.assets/image-20240427011509280.png)

### Autoviz 的优势

1. **自动化**：Autoviz 能够自动分析数据集的特征，并根据数据类型和关系生成合适的可视化图表，无需手动编写大量的可视化代码。
2. **多样性**：Autoviz 支持生成多种类型的图表，包括直方图、散点图、箱线图、核密度估计图等，能够展示数据集的不同方面和特征之间的关系。
3. **易用性**：Autoviz 提供了简单且直观的 API，使得生成可视化图表变得容易，即使对于不熟悉数据可视化的用户也能够快速上手。
4. **定制化**：Autoviz 允许用户通过调整参数来自定义生成图表的方式，以满足个性化的需求。

### Autoviz 的缺点

1. **局限性**：Autoviz 在生成图表时可能无法满足某些特定需求，特别是对于复杂的数据集和特殊的可视化需求。
2. **可定制性**：由于 Autoviz 的设计目标是自动生成图表，因此其定制化程度相对较低，无法满足所有用户的个性化需求。

## 自动可视化工具 Lux：让数据探索变得更简单

### 1. 简介：

Lux 是一个 Python 库，通过自动化可视化和数据分析过程，实现了快速简便的数据探索。它能够帮助用户通过简单地打印数据框，在 Jupyter Notebook 中快速获得一组突出数据集中有趣趋势和模式的可视化图表。

![图片](./Python框架.assets/640-1714152688194-134.gif)

### 2. 自动推荐：发现数据中的趋势和模式

Lux 的一个主要特点是自动推荐功能。通过打印数据框，Lux 会自动分析数据，并根据数据的特点推荐一组可视化图表。这些图表能够突出数据集中的有趣趋势和模式，帮助用户更好地理解数据。

以下是示例代码，展示了如何使用 Lux 打印数据框并获得自动推荐的可视化图表：

```python
import pandas as pd
import lux

# 加载数据集
data = pd.read_csv("data.csv")

# 打印数据框
data
```

通过运行上述代码，Lux 会自动分析数据框，并在 Jupyter 笔记本中显示推荐的可视化图表。用户可以通过这些图表快速获取数据中的信息和模式。

### 3. 交互式浏览：快速浏览和分析可视化图表

Lux 提供了一个交互式小部件，使用户能够快速浏览和分析推荐的可视化图表。该小部件具有滚动、缩放和筛选等功能，使用户能够方便地浏览大量的可视化图表，并对数据进行更深入的分析。

以下是示例代码，展示了如何使用 Lux 的交互式浏览功能：

```python
import pandas as pd
import lux

# 加载数据集
data = pd.read_csv("data.csv")

# 打印数据框
data

# 启动交互式浏览
lux.config.default_display = "lux"
data
```

通过将`lux.config.default_display`设置为"lux"，Lux 会在 Jupyter 笔记本中以交互式小部件的形式显示推荐的可视化图表。用户可以使用小部件的功能来浏览和分析这些图表，以更好地理解数据。

### 4. 应用场景：数据探索和可视化

Lux 适用于许多数据科学和数据分析的应用场景。它可以帮助数据科学家和分析师快速了解数据集中的关键特征和趋势，从而发现隐藏在数据中的模式。同时，Lux 提供了丰富多样的可视化图表，可以展示数据的分布、关系和变化趋势，帮助用户更好地理解数据。

![图片](./Python框架.assets/640-1714152688194-135.gif)

### 5. 总结

Lux 是一个强大的 Python 库，通过自动化可视化和数据分析过程，简化了数据探索的流程。它的自动推荐和交互式浏览特性，使用户能够快速探索和理解数据。Lux 可以广泛应用于数据科学和数据分析领域，帮助用户发现数据中的有趣模式和趋势，并以可视化的方式展示数据的故事。无论是专业的数据科学家还是对数据感兴趣的人，Lux 都是一个有价值的工具，值得一试。

## PandasGUI：Pandas 数据实现可视化分析的利器

**项目地址**：https://github.com/adamerose/PandasGUI

### 1. 什么是 PandasGUI？

PandasGUI 是一个基于 Python Pandas 的、功能强大的图形用户界面（GUI）工具。它提供了一个便捷的可视化环境，使用户能够以直观的方式探索、处理和可视化数据。并且可以在无需编写复杂代码的情况下，轻松完成功能强大的数据可视化过程。

### 2. 数据导入与预览

PandasGUI 为用户提供了一个简单易用的界面，让用户能够方便地导入各种格式的数据文件，如 CSV、Excel、JSON 等。一旦数据导入完成，用户便可以通过数据预览功能，方便快速地查看数据的结构和内容，以便进行后续的专业数据处理和分析。

### 3. 数据清洗与转换

PandasGUI 为用户提供了丰富的数据清洗和转换功能，使用户能够快速进行数据清洗和预处理。用户通过简单的操作就可以删除重复值、处理缺失数据、修改数据类型等。这些功能使得数据清洗变得更加直观和高效。

### 4. 数据筛选与排序

PandasGUI 使用户能够轻松进行数据筛选和排序操作。用户可以通过简单的界面操作选择特定的列、行和条件，从而快速筛选出感兴趣的数据子集。此外，用户还可以按照指定的列对数据进行排序，以便更好地理解和分析数据。

### 5. 数据可视化

PandasGUI 内置了强大的数据可视化功能，使用户能够通过直观的图表和图形来展示数据。用户可以选择不同类型的图表，如柱状图、折线图、散点图等，自定义图表的样式和属性，以及添加标签和注释，从而更好地传达数据的含义和趋势。

```python
import pandas as pd
from pandasgui import show
df = pd.DataFrame({'a':[1,2,3],'b':[4,5,6],'c':[7,8,9]})
show(df)
```

![图片](./Python框架.assets/640-1714219918581-38.webp)

### 6. 数据分析与统计

PandasGUI 提供了丰富的数据分析和统计功能，使用户能够对数据进行更深入的探索和分析。用户可以进行描述性统计、计算相关系数、执行透视表操作等。这些功能帮助用户从不同角度理解数据，发现隐藏在数据中的模式和关联。

### 7. 交互式操作与自动化

PandasGUI 允许用户通过交互式操作来探索和处理数据。用户可以通过简单的拖放、选择和编辑操作对数据进行修改和处理。此外，PandasGUI 还支持自动化操作，用户可以记录和回放操作过程，提高数据处理的效率和一致性。

### 总结

通过学习和使用 PandasGUI，用户可以以直观、简化的方式进行数据处理和分析，无需编写大量的代码。它为数据分析人员、研究人员和业务用户提供了一个强大的工具，帮助他们更好地理解和利用数据。

## qtpynodeeditor：Python 原生的流程可视化库，轻松构建构建图形化数据处理工具

**项目地址**：https://github.com/klauer/qtpynodeeditor

### 引言

> 在 Qt C++开发环境中 NodeEditor 是一个强大的工具，用于创建和编辑节点图形。它提供了一种直观的方式，用于可视化和编辑复杂的数据处理流程。qtpynodeeditor 是 NodeEditor 一个纯 Python 实现，支持使用 PyQt5 和 PySide 进行节点编辑器的开发。
>
> ![图片](./Python框架.assets/640-1714220599840-71.webp)

### 节点编辑器简介

节点编辑器是一个基于图形表示的工具，它将计算过程以节点的形式表示，并提供了一种直观的方式来连接和管理这些节点。节点表示不同的操作，例如计算、数据处理、文件读写等。通过将节点连接在一起，用户可以构建复杂的数据流程，并在必要时进行编辑和修改。

![图片](./Python框架.assets/640-1714220599840-72.webp)

### qtpynodeeditor 特点

**1. 支持 PyQt5 和 PySide**

由于 qtpynodeeditor 基于 qtpy 库实现，可以轻松地在 PyQt5 和 PySide 之间切换。这使得开发人员可以根据自己的需求选择合适的 Qt 绑定，并无需对代码进行重写。

**2. 纯 Python 实现**

qtpynodeeditor 是纯 Python 实现的，这意味着它可以在各种平台上运行，包括 Windows、macOS 和 Linux。由于不需要任何特定的编译器或工具链，使用者可以在不同的操作系统上使用相同的代码。

![图片](./Python框架.assets/640-1714220599840-73.webp)

**3. 可插拔的架构**

qtpynodeeditor 的架构设计允许开发人员轻松地添加新的节点类型和功能。通过使用简单的继承和重写，开发者可以根据自己的需求扩展节点编辑器的功能。

**4. 用户友好的界面**

qtpynodeeditor 提供了一个直观友好的用户界面，用户可以通过简单的操作来创建、编辑和管理节点。用户可以拖放节点、连接节点、修改节点属性等。

![图片](./Python框架.assets/640-1714220599840-74.webp)

### 使用 qtpynodeeditor 进行节点编辑器的开发

要使用 qtpynodeeditor 进行节点编辑器的开发，首先需要安装 qtpynodeeditor 库。可以使用 pip 命令进行安装：

```bash
pip install qtpynodeeditor
```

安装完成后，就可以在 Python 脚本中导入 qtpynodeeditor 并开始使用。下面是一个基本的示例：

```python
from qtpy.QtWidgets import QApplication, QMainWindow
from qtpynodeeditor import NodeEditorWidget, Node, NodeData

class MyCustomNode(Node):
    # 自定义节点类型
    pass

app = QApplication([])
window = QMainWindow()

editor = NodeEditorWidget(window)
window.setCentralWidget(editor)

node = MyCustomNode("My Node")
editor.scene().addNode(node)

window.show()
app.exec_()
```

上述示例中，我们创建了一个自定义节点类型，并将其添加到一个 NodeEditorWidget 中进行显示。通过继承 Node 类，我们可以添加自定义的节点属性和功能。

更详细使用方法请参考官方文档。

### 总结

qtpynodeeditor 是一个强大的 Python 库，可以用于创建和编辑节点图形。它通过支持 PyQt5 和 PySide，实现了与 Qt 框架的无缝集成。它具有可插拔的架构和用户友好的界面，使得开发和使用节点编辑器变得更加简单和便捷。无论是用于数据处理、计算、图像处理还是其他领域的可视化任务，qtpynodeeditor 都是一个非常有用的工具。

## Pygwalker：将你的 Pandas DataFrame 转化为交互式 UI ，进行可视化分析

**项目地址**：https://github.com/Kanaries/pygwalker

### 1.引言

在数据分析和可视化领域，Python 的 Pandas 库一直被广泛使用。然而，对于非技术专家来说，使用 Pandas 进行数据分析可能会变得复杂和困难。幸运的是，有一种名为 Pygwalker 的工具，它能够将 Pandas DataFrame 转化为交互式用户界面（UI），从而为用户提供简单易用的数据可视化和分析功能。

![图片](./Python框架.assets/640-1714221382820-124.webp)

### 2. 安装和使用方法

使用 Pygwalker 非常简单。只需按照以下步骤进行安装和使用：

**步骤 1：安装 Pygwalker**你可以通过在命令行中运行以下命令来安装 Pygwalker：

```bash
pip install pygwalker
```

**步骤 2：导入必要的库**安装完成后，在 Python 脚本中导入所需的库：

```python
import pandas as pd
from pygwalker import Walker
```

**步骤 3：创建 DataFrame**使用 Pandas 创建一个 DataFrame，该 DataFrame 包含你想要分析和可视化的数据。

```python
data = {'Name': ['John', 'Emily', 'Ryan', 'Jessica'],
        'Age': [25, 30, 18, 35],
        'City': ['New York', 'Paris', 'London', 'Tokyo']}
df = pd.DataFrame(data)
```

**步骤 4：将 DataFrame 转化为 UI**使用 Pygwalker 将 DataFrame 转化为交互式 UI：

```python
walker = Walker(df)
walker.show()
```

**步骤 5：交互式数据分析**在 Pygwalker UI 中，你可以执行许多交互式数据分析操作。例如，你可以选择要显示的列、筛选数据、排序数据、绘制图表等。通过简单的点击和选择操作，你可以快速进行数据探索和分析。

![图片](./Python框架.assets/640-1714221382855-125.gif)

### 3. 应用场景

Pygwalker 提供了一个直观而强大的界面，使得数据分析和可视化对于非技术专家来说变得非常容易。它在许多领域都有着广泛的应用，包括但不限于以下几个方面：

**商业分析：** 对于业务人员和市场营销团队来说，使用 Pygwalker 可以帮助他们更好地理解和分析销售数据、客户行为数据等，从而更好地制定业务策略和决策。

**科学研究：** 科学家和研究人员可以使用 Pygwalker 对实验数据、调查数据等进行可视化和分析，以发现数据中的模式和趋势，从而得出科学结论。

**教育和培训：** 在教育领域，Pygwalker 可以用作教学工具，帮助学生更好地理解和分析数据。它可以用于教授统计学、数据科学和数据分析等课程。

### 4. 优点和缺点

#### 优点：

- 简单易用：Pygwalker 提供了一个直观的界面，不需要编写复杂的代码即可进行数据分析和可视化。
- 交互性：通过 Pygwalker，用户可以通过点击和选择操作来探索和分析数据，从而更好地理解数据。
- 快速可视化：Pygwalker 允许用户快速绘制图表和可视化，以便更好地展示数据。

#### 缺点：

- 功能限制：与专业的数据分析工具相比，Pygwalker 的功能可能相对较为有限，适合用于简单和中等规模的数据分析任务，对于复杂的数据分析需求可能不够满足。

- 依赖性：Pygwalker 是基于 Pandas 和其他 Python 库构建的，因此对于使用 Pygwalker 的用户来说，需要具备一定的 Python 和 Pandas 基础知识。

  ![图片](./Python框架.assets/640-1714221382855-125.gif)

### 5. 结论

Pygwalker 是一个强大而简单易用的工具，它能够将 Pandas DataFrame 转化为交互式 UI，为用户提供了一种简单且直观的方式来进行数据分析和可视化。无论是在商业分析、科学研究还是教育领域，Pygwalker 都能发挥重要作用。尽管它可能存在一些功能限制和对 Python 和 Pandas 的依赖性，但对于非技术专家来说，Pygwalker 是一个非常有价值的工具，能够帮助他们更好地理解和分析数据。

# 常用测试数据自动生成工具（适用自动化测试、性能测试）

在软件测试中，测试数据是测试用例的基础，对测试结果的准确性和全面性有着至关重要的影响。因此，在进行软件测试时，需要生成测试数据以满足测试场景和要求。本文将介绍如何利用测试数据生成工具来快速生成大量的测试数据。

今天给大家介绍四款常用的数据生成工具：`Faker`、`Mockaroo`、`DataFactory`、`Jenerators`。

### 1、Faker:

Faker是一个Python库，提供了多种数据类型和丰富的数据生成方法。用于生成各种随机数据，如姓名、地址、电子邮件、电话号码等。它可以用于测试、生成模拟数据、填充数据库等。

**官网：**

```
https://faker.readthedocs.io/en/master/
```

- 适用场景：适用于需要生成大量随机数据的场景，如测试数据生成、模拟数据填充等。
- 优点：易于使用、可定制、支持多种语言。
- 缺点：生成的数据是随机的，可能不符合特定的业务规则。

**示例：**

```
from faker import Faker

fake = Faker()

name = fake.name()
address = fake.address()
email = fake.email()
phone_number = fake.phone_number()
```

### 2、Mockaroo

Mockaroo是一个在线服务，提供了可视化界面和丰富的数据生成选项。用于生成自定义的随机数据集。它提供了各种数据类型和选项，可以生成包括文本、数字、日期、图像等在内的各种数据。

官网：

```
https://www.mockaroo.com/
```

- 适用场景：适用于需要生成自定义数据集的场景，如测试数据生成、模拟数据填充等。
- 优点：可定制性强、提供多种数据类型和选项、支持导出数据为多种格式。
- 缺点：需要访问Mockaroo网站进行数据生成。

### 3、DataFactory

DataFactory是一个专门用于生成随机数据的Python库，提供了多种数据类型和生成方法。，用于生成随机数据。它提供了多种数据类型和生成方法，可以生成包括姓名、地址、电子邮件、电话号码等在内的各种数据。

**官网：**

```
https://pypi.org/project/datafactory/
```

- 适用场景：适用于需要在Python代码中生成随机数据的场景，如测试数据生成、模拟数据填充等。
- 优点：易于使用、可定制、支持多种数据类型。
- 缺点：生成的数据是随机的，可能不符合特定的业务规则。示例：

```
from datafactory import DataFactory

factory = DataFactory()

name = factory.name()
address = factory.address()
email = factory.email()
phone_number = factory.phone_number()
```

### 4、Jenerators

Jenerators是一个专门用于生成随机数据的Java库，提供了多种数据类型和生成方法。Jenerators是一个Java库，用于生成随机数据。它提供了多种数据类型和生成方法，可以生成包括姓名、地址、电子邮件、电话号码等在内的各种数据。

**官网：**

```
https://jenerators.dev/
```

- 适用场景：适用于需要在Java代码中生成随机数据的场景，如测试数据生成、模拟数据填充等。
- 优点：易于使用、可定制、支持多种数据类型。
- 缺点：生成的数据是随机的，可能不符合特定的业务规则。

示例：

```
import dev.jenerators.RandomGenerator;
import dev.jenerators.StringGenerator;

RandomGenerator<String> nameGenerator = StringGenerator.alphaNumeric(10);
String name = nameGenerator.generate();
```



# 最全测试开发工具推荐（含自动化、APP性能、稳定性、抓包神器）

## 一、UI自动化测试工具

## 1. uiautomator2

**Github地址**

```
https://github.com/openatx/uiautomator2
```

**介绍:**

openatx开源的ui自动化工具，支持Android和iOS。主要面向的编程语言是Python，API设计简洁易用，在开源社区也是很受欢迎。

**原理图：**

![图片](./Python框架.assets/640-478948.webp)

**安装：**

```
pip install --upgrade --pre uiautomator2
# Or you can install directly from github source
git clone https://github.com/openatx/uiautomator2
pip install -e uiautomator2
```

## 2. Appium

**Github地址：**

```
https://github.com/appium/appium
```

**介绍:**

基于Node.js的一款非常成熟的APP UI自动化工具，支持多种语言开发，在测试圈非常流行，可以说是APP UI自动化领域的标杆产品。如果你不知道Appium，都不好意思说自己干测试这行。

**原理图：**

![图片](./Python框架.assets/640-1715864816080-46.webp)

## 3. ATX-Test

**Github地址：**

```
https://github.com/pengchenglin/ATX-Test
```

**介绍:**

基于uiautomator2和unittest封装的一个UI自动化测试框架。项目作者已经把框架设计、可配置化、底层设备连接、日志模块、报告模块都做好了，使用者只需要编写PageObject和脚本逻辑即可，大大提高了uiautomator2的易用性。不仅如此，该项目现在还支持Monkey运行。

## 4. Airtest

**Github地址：**

```
https://github.com/AirtestProject/Airtest
```

**介绍:**

网易开源的一个ui自动化测试工具，通过图像识别和UI控件检索技术，使得游戏测试简单快捷。支持Android、iOS、Windows、Unity、Cocos2dx、白鹭引擎、微信小程序，上手简单，游戏测试的朋友可以体验体验。

![图片](./Python框架.assets/640-1715864816081-47.webp)

## 5. ATXServer2

**Github地址：**

```
https://github.com/openatx/atxserver2
```

**介绍:**

支持Android和iOS的移动设备管理平台。可以通过web界面，察看测试手机的状态，可以做到远程操控手机，对于测试兼容性具有较大帮助。部署方便，支持docker-compose部署。

![图片](./Python框架.assets/640-1715864816081-48.webp)

![图片](./Python框架.assets/640-1715864816081-49.webp)

## 6. STF

**Github地址：**

```
https://github.com/openstf/stf
```

**介绍:**

远程移动设备管理平台，支持Android、iOS真机管理，功能非常强大。

![图片](./Python框架.assets/640-1715864816081-50.webp)

## 7. Appetizer

**官网地址：**

```
https://www.appetizer.io/cn/
```

**介绍:**

使用十分方便。可以进行APP UI自动化测试，也可以支持APP稳定性测试，提供GUI界面操作，易用性极强，满足日常UI自动化需要。可惜只有部分组件开源。

![图片](./Python框架.assets/640-1715864816081-51.webp)

## 二、APP稳定性测试工具

## 8. UICrawler

**Github地址**

```
https://github.com/lgxqf/UICrawler
```

**介绍:**

基于Appium的App UI遍历 & Monkey 工具，支持iOS和Android

## 9. Maxim

**Github地址**

```
https://github.com/zhangzhao4444/Maxim
```

**介绍:**

号称是智能monkey，用过的人都觉得真香。支持原生monkey、遍历控件、黑白名单等功能，而且也封装了更加易解析的日志文件。有了它之后，已经可以不需要再用原生monkey了。

![图片](./Python框架.assets/640-1715864816081-52.webp)

## 10. AppCrawler

**Github地址**

```
https://github.com/seveniruby/AppCrawler
```

**介绍:**

一个基于自动遍历的app爬虫工具. 支持android和iOS, 支持真机和模拟器. 最大的特点是灵活性. 可通过配置来设定遍历的规则。

## 三、APP性能测试工具

## 11. SoloPi

**Github地址**

```
https://github.com/alipay/SoloPi
```

**介绍:**

SoloPi是一个无线化、非侵入式的Android自动化工具，公测版拥有录制回放、性能测试、一机多控三项主要功能，能为测试开发人员节省宝贵时间（官方介绍）。一般用于APP的性能测试比较多。

## 12. GT

**Github地址**

```
https://github.com/Tencent/GT
```

**介绍:**

腾讯开源的APP的随身调试平台，可对APP进行快速的性能测试(CPU、内存、流量、电量、帧率/流畅度等等)、开发日志的查看、Crash日志查看、网络数据包的抓取、APP内部参数的调试、真机代码耗时统计等。

![图片](./Python框架.assets/640-1715864816081-53.webp)

利用 GT，仅凭一部手机，无需连接电脑，即可对 APP 进行快速的性能测试(CPU、内存、流量、电量、帧率/流畅度等等)、开发日志的查看、Crash 日志查看、网络数据包的抓取、APP 内部参数的调试、真机代码耗时统计等。如果您觉得 GT 提供的功能还不够满足您的需要，您还可以利用 GT 提供的基础 API 自行开发有特殊功能的 GT 插件，帮助您解决更加复杂的 APP 调试问题。

GT 支持 iOS 和 Android 两个手机平台，其中：

- iOS 版是一个 Framework 包，必须嵌入 APP 工程，编译出带 GT 的 APP 才能使用；iPhone 和 iPad 应用都能支持。
- Android 版由一个可直接安装的 GT 控制台 APP 和 GT SDK 组成，GT 控制台可以独立安装使用，SDK 需嵌入被调测的应用、并利用 GT 控制台进行信息展示和参数修改。

## 四、抓包工具

## 13. AnyProxy

**Github地址**

```
https://github.com/alibaba/anyproxy
```

**介绍:**

阿里开源的抓包工具，基于Node.js可进行二次开发，使用场景：app爬虫、接口数据分析等。

![图片](./Python框架.assets/640-1715864816081-54.webp)

## 14. mitmproxy

**Github地址**

```
https://github.com/mitmproxy/mitmproxy
```

**介绍:**

基于Python的抓包工具，对于pythoner更加友好，主要作用是对抓包数据进行采集供后续分析。

![图片](./Python框架.assets/640-1715864816081-55.webp)

# 爬虫框架

## AutoScraper：一个奇妙的 Python 智能爬虫工具

**GitHub**：https://github.com/alirezamika/autoscraper

### 简介

> AutoScraper 是一个基于 Python 的智能爬虫工具，能够自动从网页上提取所需的信息，无需手动编写复杂的爬取规则。该工具通过机器学习算法，能够自动学习和识别网页结构，从而高效准确地提取数据。

### 功能和特点

AutoScraper 有以下几个主要功能和特点：

1. 自动学习：通过分析网页结构和内容，自动学习并提取所需的数据，无需手动编写规则。
2. 高效准确：能够快速准确地从网页中提取信息，提高爬取效率。
3. 灵活性强：可以适应不同类型的网页和数据提取需求，灵活性高。
4. 简单易用：使用简单，对于不熟悉编程的用户也能够轻松上手。

### 使用方法和示例代码

使用 AutoScraper 非常简单，只需几行代码就可以实现数据的提取。以下是一个简单的示例代码：

```python
from autoscraper import AutoScraper

url = 'https://example.com'
wanted_list = ['Title', 'Description', 'Price']

scraper = AutoScraper()
result = scraper.build(url, wanted_list)

print(result)
```

上面的代码中，首先引入 AutoScraper 模块，然后指定要爬取的网页地址和所需的信息列表，接着创建 AutoScraper 对象，并调用 build 方法进行数据的提取。

### 应用场景

AutoScraper 可广泛应用于各种网页数据的爬取和提取工作，比如商品信息的抓取、新闻内容的提取、招聘信息的抓取等。无论是个人用户还是企业用户，都能够在自己的项目中使用 AutoScraper 进行数据爬取，提高工作效率。

### 优势

AutoScraper 相比传统的爬虫工具有诸多优势，主要包括以下几个方面：

1. 自动学习：无需手动规则，智能学习网页结构。
2. 高效准确：能够快速准确地提取所需的数据。
3. 灵活性强：适应不同类型的网页和数据提取需求。
4. 简单易用：对于不熟悉编程的用户也能够轻松上手。

### 总结

AutoScraper 是一款功能强大、灵活易用的 Python 爬虫工具，通过自动学习网页结构和内容，能够快速准确地提取所需的数据，广泛应用于各种网页数据的爬取和提取工作中。使用 AutoScraper 能够大大提高工作效率，是数据爬取领域的一款利器。

## Scrapy：无敌于网络的 Python 爬虫库

文章 1：[惊人的 Scrapy！一个工具，无限可能——开启你的数据抓取之旅 (qq.com)](https://mp.weixin.qq.com/s/gvlnfC8nlE4_x3_kpFRCAg)

如果 Python 有什么地方让大家印象深刻，我想一定有一点是 —— 爬虫能力。

爬虫能力之所以强大，离不开我们今天的主角 Scrapy。

我当年就是通过 Scrapy 学会 Python 的，而后完成了很多 Python 项目，为公司引入了 Python 研发业务线等等。

可以不夸张地说，Scrapy 是我 Python 的引路人。

今天就简单地介绍一下这个爬虫神器，期望你也能用它创建自己的爬虫世界，让全世界的数据尽在掌握。

### Scrapy 究竟是什么？

**Scrapy** 是一个开源且高效的网络爬虫框架，用于抓取网站数据和提取结构性数据。

自从其问世以来，Scrapy 以其超凡的数据抓取能力，赢得了数据工程师和科研人员的青睐。

Python 开发者群体也因为 Scrapy 的强大和易于使用而爱不释手。

这个平台不仅支持 Python 3.8 及以上版本，也在不断地迭代更新中融入了最新的技术。

搭建在 Twisted 异步处理框架之上的 Scrapy，可以让你以非阻塞的方式进行网络请求，大大提升了数据采集的效率。

和其他数据提取工具，如 **BeautifulSoup** 或 **Lxml** 都用于解析 HTML/XML 文档，Scrapy 提供了一个全面的解决方案。

它集成了数据提取、中间件处理和请求调度等功能，尤其是在构建大规模网络爬虫应用时显示出了其独特的优势。

项目地址：**https://scrapy.org**

### 安装 Scrapy

你可以轻松地通过 pip 命令来安装 Scrapy：

```bash
pip install scrapy
```

安装之前，请确保你的环境中已安装 **Python 3.8+**。

Scrapy 可以运行于 Linux, Windows, macOS 和 BSD 系统。

更详细的安装指导可以参考官方文档：**Scrapy Installation Guide**[1]。

### 主要特征

Scrapy 不仅仅是一个爬虫，它是一个全面的网络爬取和数据提取应用框架。

接下来，让我们来探索 Scrapy 可以助你一臂之力的几个领域。

#### 创建一个爬虫项目

Scrapy 通过 `scrapy startproject` 命令帮助你快速开始一个爬虫项目，为你的数据采集任务奠定结构基础。

```python
scrapy startproject myproject
```

#### 选择器（Selectors）

利用 Scrapy 的内置选择器，你可以方便地选取 HTML/XML 中的元素。

支持 XPath 和 CSS 两种查询方式，这意味着你可以使用熟悉的语法表达式高效提取数据。

```python
response.xpath('//span[@class="price"]/text()').get()
```

#### 数据提取(Item)

可以定义 Item 对象，它是一个简单的容器，保存了爬取到的数据。

在 Scrapy 中，我们使用字段来声明每个 Item 的结构。

```python
import scrapy

class Product(scrapy.Item):
    name = scrapy.Field()
    price = scrapy.Field()
    stock = scrapy.Field()
    tags = scrapy.Field()
    last_updated = scrapy.Field(serializer=str)
```

#### 数据管道(Pipelines)

你可以通过创建数据管道来处理爬取的数据，例如清洗、验证、持久化存储（如存入数据库）等。

```python
class MyPipeline(object):
    def process_item(self, item, spider):
        item['price'] = float(item['price'].replace('$', ''))
        return item
```

#### 中间件(Middlewares)

对请求和响应进行预处理的组件。在发送请求前或在接收到响应后，你可以编写中间件来实施自定义的处理逻辑。

#### 异步处理(Asynchronous Processing)

Scrapy 构建于 Twisted 异步网络框架之上，意味着它可以处理数以千计的并发请求，不断地从网站中提取数据。

### 高级应用

文章：[深度挖掘 Scrapy 爬虫框架：进阶应用技巧 (qq.com)](https://mp.weixin.qq.com/s/pN6UZzILq9F7UaQnFlyiVg)

Scrapy 的强大之处不仅限于其基本功能，它的高级用法使得它可以胜任更复杂的网络爬取任务。

#### 拓展（Extensions）

使用 Scrapy 的**拓展 (Extensions)**[2]功能，可以增强爬虫的功能。

例如，你可以添加统计信息收集、新增爬虫状态通知等自定义功能。

#### 爬虫合约 (Spider Contracts)

Scrapy 提供了**爬虫合约 (Spider Contracts)** [3] 的概念，允许你为爬虫编写测试用例。这有助于维护爬虫代码的质量和可测试性。

#### 命令行工具 (Scrapy Shell)

使用命令行工具 **Scrapy Shell**[4] 对网站进行探索，实时测试你的抓取策略，这是一个非常有用的学习和测试工具。

### 实践

#### 尝试爬取书籍数据

通过构建一个简单的 Scrapy 爬虫来爬取一个在线书店的书籍信息，我们可以了解到 Scrapy 在实战中的运用：

1. **创建一个爬虫**

```bash
scrapy startproject bookcrawler
cd bookcrawler
scrapy genspider books example.com/books
```

1. **编写爬虫规则**编辑 `books.py` 文件，定义爬取规则和爬取逻辑。
2. **提取 Item**提取书籍的名称，作者等信息，并存储在 items 中。
3. **运行爬虫**使用命令 `scrapy crawl books`，让爬虫开始爬取数据。

通过这个简单的演示，我们可以看到，Scrapy 的爬取过程是高度自定义且高效的。

本文 **源码** 中是一个豆瓣读书的示例，可以获取首页的书籍信息，感兴趣的朋友可以下载参考。

### 总结

Scrapy 在 Python 网络爬虫的领域里是一个不可多得的宝贵资源。

它的高度可扩展性和强大的提取功能让它在数据采集的世界里翩翩起舞。

无论你是一个正在寻找工作的数据分析师，还是一个需要大规模数据的科研工作者，Scrapy 都能成为你强有力的助手。

正如你穿梭于城市的每个角落，Scrapy 也能钻遍互联网的每一个角落。

想要提取数据，就让 Scrapy 发挥它的魔力吧！

今天只是浮光掠影地了解一下 Scrapy，真的要让 Scrapy 发挥作用，还需要多多实践和练习。

更多有关 Scrapy 的信息，请访问**官方文档**[5]和 **GitHub 仓库**[6]。

**参考资料**

[1] Scrapy Installation Guide：https://docs.scrapy.org/en/latest/intro/install.html

[2] 拓展 (Extensions)：https://docs.scrapy.org/en/latest/topics/extensions.html

[3] 爬虫合约 (Spider Contracts)：https://docs.scrapy.org/en/latest/topics/contracts.html

[4] Scrapy Shell：https://docs.scrapy.org/en/latest/topics/shell.html

[5] 官方文档：https://docs.scrapy.org/en/latest/

[6] GitHub 仓库：https://github.com/scrapy/scrapy

## 微信爬虫 Wechat_Articles_Spider：快速获取公众号文章的利器

### 0. 引言

在本文中，我们将详细介绍一个名为 wechat_articles_spider 的 Python 爬虫工具。我们将从简介开始，介绍其特点、安装和使用方法，提供示例代码，讨论其应用场景，并总结其优缺点。希望通过本文，您能对 wechat_articles_spider 有一个全面的了解。

### 1. 简介

wechat_articles_spider 是一个用于爬取微信公众号文章的开源 Python 工具。它可以帮助用户快速、高效地获取微信公众号中的文章数据，并进行进一步的分析和处理。该工具基于 Python 语言开发，提供了丰富的功能和灵活的配置选项。

### 2. 特点

wechat_articles_spider 具有以下特点：

- 自动化爬取：它能够自动化地从指定的微信公众号中抓取文章数据，省去了手动复制粘贴的繁琐过程。
- 多线程支持：该工具支持多线程操作，可以同时处理多个公众号，提高了爬取效率。
- 高度可定制化：用户可以根据自己的需求，配置爬取的范围、时间间隔、存储格式等参数，以满足不同的应用场景。
- 数据持久化：爬取的文章数据可以方便地保存到本地或数据库中，供后续分析和使用。

### 3. 安装和使用方法

为了使用 wechat_articles_spider，您需要按照以下步骤进行安装和配置：

**步骤 1：** 确保您的系统已安装 Python 环境，并且具备 pip 包管理工具。

**步骤 2：** 打开终端或命令提示符，并执行以下命令安装 wechat_articles_spider：

```bash
pip install wechatarticles
```

**步骤 3：** 安装完成后，您可以通过导入 wechat_articles_spider 模块来使用该工具：

```python
import wechat_articles_spider
```

### 4. 示例代码

下面是一个简单的示例代码，演示如何使用 wechat_articles_spider 来爬取微信公众号文章：

```python
import wechat_articles_spider

# 创建一个爬虫实例
spider = wechat_articles_spider.WechatSpider()

# 设置要爬取的公众号名称
spider.set_official_account("公众号名称")

# 设置爬取的文章数量
spider.set_article_count(10)

# 开始爬取文章
spider.start()

# 获取爬取结果
articles = spider.get_articles()

# 打印文章标题和链接
for article in articles:
    print("标题：", article['title'])
    print("链接：", article['url'])
```

### 5. 应用场景

wechat_articles_spider 可以应用于多种场景，包括但不限于：

- 数据分析和挖掘：通过爬取微信公众号文章，可以获取大量的文本数据，用于进行数据分析、情感分析、关键词提取等任务。
- 新闻媒体监测：可以用于监测特定公众号的文章更新情况，及时获取相关新闻信息。
- 学术研究：对特定领域的公众号文章进行爬取和分析，可以为学术研究提供数据支持。

### 6. 优缺点

wechat_articles_spider 具有以下优点和缺点：

**优点：**

- 简单易用，提供了丰富的功能和配置选项。
- 高效快速，支持多线程操作，提高了爬取效率。
- 可定制化，用户可以根据需求自定义爬取范围和参数设置。

**缺点：**

- 依赖于微信公众号的网页结构，如果微信公众号的页面结构发生变化，可能需要对代码进行适配。
- 使用该工具需要遵守相关法律法规和网站的使用规则，避免滥用和侵犯他人权益。

### 7. 总结

本文介绍了 wechat_articles_spider 这个 Python 爬虫工具，包括其简介、特点、安装和使用方法、示例代码、应用场景以及优缺点。wechat_articles_spider 是一个方便实用的工具，能够帮助用户快速获取微信公众号中的文章数据，并灵活应用于不同的场景中。

通过合理使用该工具，可以提高数据获取和分析的效率，为各行各业的工作和研究提供有力支持。然而，在使用过程中，用户需要遵守相关法律法规和网站的规定，确保合法合规的使用，避免滥用和侵权行为的发生。

## WechatSogou：微信搜狗爬虫 - 从微信公众号获取文章的利器

GitHub：[chyroc/WechatSogou: 基于搜狗微信搜索的微信公众号爬虫接口 (github.com)](https://github.com/chyroc/WechatSogou)

官网：

供一定便利，也能为官方安全升级提供有益线索，但也可存在被非法使用的风险。这类库伴着官方数据结构和反爬虫策略升级，随时有失效可能，请谨慎参考学习，严禁非法使用。

### 引言

在当今信息爆炸的时代，微信公众号成为了人们获取资讯和知识的重要来源之一。然而，要从微信公众号中获取大量的文章数据并不容易。

而幸运的是微信搜狗搜索引擎为搜索公众号文章提供了一个公共入口。有一个强大而简单易用的开源微信爬虫项目，名为 WechatSogou，它能够帮助我们从微信搜狗引擎轻松地爬取和搜索微信公众号的文章。

本文将详细介绍这个项目的功能和使用方法。

### 1. 安装 WechatSogou

WechatSogou 是一个 Python 库，你可以使用 pip 命令来安装它。确保你的系统已经安装了 Python 和 pip，并执行以下命令：

```bash
pip install wechatsogou
```

安装完成后，你就可以开始使用 WechatSogou 了。

### 2. 搜索微信公众号

WechatSogou 提供了一个强大的功能，可以根据关键词搜索微信公众号。用户只需提供关键词，WechatSogou 就能返回与该关键词相关的公众号列表。这使得用户可以根据自己的需求快速找到感兴趣的公众号。比如，如果你对健康和养生感兴趣，你可以使用 WechatSogou 搜索关键词"健康养生"，然后获取相关公众号的列表。

示例：

```python
from wechatsogou import WechatSogouAPI

# 创建API对象
api = WechatSogouAPI()

# 搜索微信公众号
results = api.search_gzh('健康养生')

# 打印搜索结果
for result in results:
    print(result['name'])
```

### 3. 爬取公众号文章

一旦找到感兴趣的公众号，WechatSogou 可以帮助用户爬取该公众号的文章。它能够获取文章的标题、摘要、发布时间、阅读量等信息，并将其保存为结构化数据。这对于需要对大量文章进行分析和处理的用户来说非常有用。比如，如果你是一名研究人员，你可以使用 WechatSogou 爬取某个领域的公众号文章，然后进行文本分析和挖掘。

**示例：**

```python
from wechatsogou import WechatSogouAPI

# 创建API对象
api = WechatSogouAPI()

# 获取公众号文章
articles = api.get_gzh_articles_by_history('公众号ID')

# 打印文章标题和摘要
for article in articles:
    print(article['title'], article['abstract'])
```

### 4. 处理反爬虫机制

微信作为一个庞大的社交平台，自然也有严格的反爬虫机制。小白在本地测试以上代码时，发现已经被反爬虫机制探测到，需要输入验证码才能继续。

### 结论

WechatSogou 是一个功能强大、简单易用的开源项目，为用户提供了从微信公众号获取文章数据的便利。但爬虫与反爬虫一直在技术对抗中成长，技术本身没有对错，关键在于使用技术的人。建议从这些开源技术中多学习有益知识，禁止从事非法活动。

本文为了保护用户的隐私和遵守法律法规，不支持或鼓励任何违反微信或其他平台的爬虫行为。上述内容仅为技术介绍，不建议将其用于违法活动。如需搜索公众号文章建议直接使用微信搜狗搜索引擎（https://weixin.sogou.com/)或者微信搜一搜。

## MLScraper：利用 AI 技术自动化爬取网页数据的利器

### 1. 简介

MLScraper 是一个强大的 Python 库，用于从网页上提取结构化数据。它利用机器学习和自然语言处理技术，能够自动解析网页并提取所需的信息。MLScraper 可以用于各种数据抓取和分析任务，包括网页内容提取、数据挖掘、舆情分析等。

### 2. 特点

MLScraper 具有以下几个特点：

- 自动解析：MLScraper 能够自动分析网页的结构，并提取出有用的数据。它可以处理各种类型的网页，包括静态网页和动态网页。
- 强大的选择器：MLScraper 提供了灵活而强大的选择器，可以根据 HTML 标签、CSS 选择器、XPath 等方式定位和提取数据。
- 智能识别：MLScraper 内置了智能识别算法，可以自动识别数据的类型，如文本、数字、日期等。
- 高效性能：MLScraper 使用了高效的并行处理技术，可以快速地处理大量的网页数据。

### 3. 安装和使用方法

安装 MLScraper 非常简单，只需使用 pip 命令即可：

```bash
pip install mlscraper
```

使用 MLScraper 的基本步骤如下：

Step 1: 导入 MLScraper 库

```python
from mlscraper import MLScraper
```

Step 2: 创建 MLScraper 对象

```python
scraper = MLScraper()
```

Step 3: 指定要抓取的网页 URL 并执行抓取

```python
url = "https://example.com"

data = scraper.scrape(url)
```

Step 4: 提取所需的数据

```python
title = data["title"]
content = data["content"]
```

### 4. 应用场景

MLScraper 可以应用于多个领域和场景：

- 数据采集：可以用于抓取新闻文章、产品信息、社交媒体数据等，并进行后续的分析和处理。
- 价格比较：可以从多个电商网站中抓取商品价格信息，用于进行价格比较和分析。
- 舆情分析：可以抓取社交媒体上的用户评论和观点，用于进行舆情分析和情感分析。
- 学术研究：可以用于抓取学术论文、研究报告等科研资料，用于学术研究和文献综述。

### 5. 优缺点

MLScraper 的优点包括：

- 自动解析能力强，可以处理各种类型的网页。
- 提供灵活而强大的选择器，方便定位和提取数据。
- 内置智能识别算法，可以自动识别数据类型。
- 并行处理技术保证了高效性能。

MLScraper 的缺点包括：

- 对于复杂的网页结构，可能需要手动调整选择器。
- 对于动态网页，可能需要额外的配置和处理。

![image-20240427005827699](./Python框架.assets/image-20240427005827699.png)

### 6. 总结

MLScraper 是一个功能强大的 Python 库，可以帮助用户快速、准确地从网页中提取结构化数据。无论是进行数据采集、舆情分析还是学术研究，MLScraper 都能提供便利的解决方案。尽管在处理复杂的网页结构和动态网页时可能需要额外的工作，但 MLScraper 凭借其自动解析能力、强大的选择器和智能识别算法，仍然是一款值得推荐的网页数据提取工具。

## 小巧而强大的 Grab 网络爬虫框架：轻松抓站点信息

### 什么是 Grab？

Grab 是一个强大的 python 网络爬虫框架，由 Greg Lavr 开发，它能够让你轻松地从互联网上抓取所需的信息。Grab 基于 **pycurl**[1]，是性能十分优越的一个 HTTP 客户端，由于采用了异步网络 I/O 模型，Grab 甚至可以并行处理数千个网络连接。

GitHub 上的项目地址：https://github.com/lorien/grab

#### 与 Scrapy 的对比

相比于其他流行的爬虫框架，如 Scrapy，Grab 提供了一种更加简洁易懂的方式来定义和运行爬虫。

当然，Scrapy 也是一个非常强大的爬虫框架，特别是在构建大型的、复杂的、高度可配置的爬虫项目时，Scrapy 无疑更胜一筹。然而，对于小型或中型的爬虫任务，Grab 的简洁和易用性可能会让你更喜欢它。

#### 与 Haul 的对比

Grab 提供了简单易用的 API 和内置的文档解析器，适合快速开发和简单的网页解析。

相比之下，Haul 是一个基于异步 IO 的框架，可以高效地处理并发请求，适用于需要高并发爬取的场景。选择使用哪个框架取决于具体需求和技术偏好。

### Grab 的特点

1. 简单易用的 API：Grab 提供了简洁、直观的 API，使得编写爬虫代码变得容易。你可以快速设置请求参数、发送请求并处理响应，而无需过多的复杂配置。
2. 内置的文档解析器：Grab 内置了强大的文档解析器，可以使用 CSS 选择器或 XPath 来解析 HTML 文档。这使得提取所需数据变得简单，无需额外的第三方库或复杂的解析代码。
3. 多线程和进程池支持：Grab 支持多线程和进程池，可以并发地发送请求，提高爬取速度。这对于需要处理大量页面或需要快速爬取的任务非常有用。
4. 社区支持和资源丰富：Grab 在 Python 爬虫框架中相对较受欢迎，因此有着活跃的社区支持和丰富的资源。你可以轻松找到相关的教程、文档和示例代码，以便更好地理解和使用 Grab。

### 装上试试

首先，我们需要安装 Grab 库。打开你的终端，输入以下命令：

```
pip install grab
```

现在，你已经装好了 Grab，准备开始你的爬虫之旅吧！

### 1. 基本使用

使用 Grab 的第一步就是创建一个 `Grab` 对象。让我们来看一下如何做：

```
from grab import Grab

g = Grab()
```

接下来，我们可以使用 `go` 方法去请求一个 URL：

```
g.go('http://example.com')
```

你可以通过 `.body` 属性获取到页面的内容：

```
print(g.doc.body)
```

### 2. 处理文本

Grab 提供了一些有用的方法来帮助你处理获取到的文本。例如 `.text()` 方法可以将 HTML 标签去除，只返回纯文本：

```
print(g.doc.text())
```

### 3. 使用选择器

Grab 使用 **lxml**[2] 库来解析 HTML，因此你可以使用 XPath 或者 CSS 选择器来提取元素。这是一个使用 CSS 选择器提取所有链接的例子：

```
for elem in g.doc.select('//a'):
    print(elem.attr('href'))
```

### 4. 处理表单

Grab 也让处理表单变得十分简单。你可以使用 `.choose_form` 方法选择一个表单，然后用 `.set_input` 方法设置输入字段，最后用 `.submit` 方法提交表单：

```
g.go('http://example.com/login')
g.doc.choose_form(0)
g.doc.set_input('username', 'myusername')
g.doc.set_input('password', 'mypassword')
g.doc.submit()
```

### 实践

现在，让我们用 Grab 来做一个小实践。你可以尝试抓取某个新闻网站的头条新闻，并将标题和链接打印出来。

注意：请确保你的爬虫行为遵守目标网站的 robots.txt 文件，并尊重网站的使用条款。

### 总结

Grab 是一个强大而易用的 python 网络爬虫框架，它提供了一种简洁的方式来抓取和处理网站数据。

虽然相比于 Scrapy，它可能在处理大型、复杂的爬虫项目上稍显不足，但是对于小型或中型的爬虫任务，Grab 的简洁和易用性无疑是一大优势。

无论你是一名数据科学家，还是一名网络工程师，或者只是一个希望能自动化处理网络数据的人，Grab 都能够成为你的得力助手。

### 参考资料

[1] pycurl：http://pycurl.io/

[2] lxml：https://lxml.de/

## Pyspider：python 爬虫利器

**项目地址**：https://github.com/binux/pyspider

### 1. 简介

Pyspider 是一款基于 Python 的强大和灵活的网络爬虫框架。它提供了一个可视化的 Web 界面和简单的 API，使得开发者能够轻松创建、调试和管理各种爬虫任务。

Pyspider 支持分布式爬取、JavaScript 渲染、简洁的代码编写和强大的调试功能，是一个非常受欢迎的爬虫库。本文将详细介绍 Pyspider 的安装方法、详细使用方法、优缺点、应用场景以及总结。

### 2. 安装

在开始使用 Pyspider 之前，您需要安装 Python 和 Pyspider 库。以下是安装 Pyspider 的基本步骤：

- 安装 Pyspider：

```bash
# 使用pip安装
Pyspiderpip install pyspider
```

- 安装 PhantomJS（可选）：

如果您打算使用 Pyspider 的 JavaScript 渲染功能，您需要安装 PhantomJS。在不同操作系统上安装 PhantomJS 的方法各有不同，可以参考 Pyspider 官方文档进行安装。

安装完成后，您已经成功安装了 Pyspider。

### 3. 详细使用方法

Pyspider 提供了丰富的功能和灵活的工具，使得爬虫开发变得简单高效。以下是 Pyspider 的详细使用方法：

- 创建一个新项目：

在命令行中执行以下命令，创建一个新的 Pyspider 项目：

```bash
pyspider
```

- 编写爬虫代码：

在 Pyspider 的 Web 界面中，您可以使用 Python 编写爬虫代码。以下是一个简单的示例：

```python
import requests

class MySpider:
    @every(minutes=24*60)
    def on_start(self):
        self.crawl('http://example.com/', callback=self.index_page)

    @config(age=10*24*60*60)
    def index_page(self, response):
        for each in response.doc('a[href^="http"]').items():
            self.crawl(each.attr.href, callback=self.detail_page)

    def detail_page(self, response):
        return {
            "url": response.url,
            "title": response.doc('title').text(),

        }
```

- 运行爬虫任务：

在 Pyspider 的 Web 界面中，您可以启动和管理爬虫任务。点击“运行”按钮即可运行爬虫任务，并通过日志查看爬取结果。

### 4. 优缺点

Pyspider 的优点包括：

- 可视化界面：Pyspider 提供了直观的可视化界面，使得爬虫任务的管理和调试变得简单方便。
- 灵活的代码编写：使用 Pyspider，您可以使用 Python 编写简洁、可读性强的爬虫代码。
- 分布式支持：Pyspider 支持分布式爬取，能够提高爬虫任务的效率和速度。

Pyspider 的缺点包括：

- 学习曲线：对于新手来说，Pyspider 可能需要一定时间来适应其使用方法和概念。
- 可扩展性限制：由于 Pyspider 使用的是 Python 解释器，其可扩展性受到 Python 的限制。

### 5. 应用场景

Pyspider 在以下应用场景中非常有用：

- 数据采集：Pyspider 可以用于采集各类网站上的数据，如新闻、电影评价、商品信息等。
- 数据分析：Pyspider 可以爬取大量的数据，并通过数据分析工具对数据进行处理和分析。
- 机器学习：Pyspider 可以用于爬取训练数据，为机器学习算法提供数据源。

### 6. 总结

Pyspider 是一款功能强大而灵活的爬虫框架，提供了可视化的界面和简洁的代码编写方式，适用于各种规模的爬取任务。虽然存在一定的学习曲线和可扩展性限制，但 Pyspider 的丰富功能和灵活性使其成为爬虫开发者的首选工具。希望本文的介绍能帮助您了解并开始使用 Pyspider，实现更加高效和灵活的爬虫开发和管理。

## 代理 IP 池管理利器：ProxyPool，轻松应对网络爬虫和数据采集

**项目地址**：https://github.com/jhao104/proxy_pool

### 一、项目简介

ProxyPool 是一个爬虫代理 IP 池项目，其主要功能是定时采集网上发布的免费代理并验证入库，保证代理的可用性。该项目提供 API 和 CLI 两种使用方式，并且可以通过扩展代理源来增加代理池 IP 的质量和数量，使其成为一个功能强大、易于使用的代理 IP 池管理工具。

### 二、项目特点

1. 简单易用：ProxyPool 提供了 API 和 CLI 两种使用方式，用户可以根据自己的需求选择合适的方式来使用代理 IP 池。
2. 定时采集：项目会定时从网络上采集免费代理并验证入库，保证代理的可用性。
3. 可扩展性：用户可以通过扩展代理源来增加代理池 IP 的质量和数量，满足不同需求的用户使用。

### 三、项目安装与配置

下载安装 ProxyPool：用户可以从 GitHub 上下载 ProxyPool 的源码，并按照文档进行安装。

配置 ProxyPool：在安装完成后，用户需要根据自己的需求配置 ProxyPool，包括代理采集频率、代理验证规则等。

### 四、项目使用

1. API 使用：用户可以通过调用 API 接口来获取代理 IP，从而实现代理访问网站等功能。
2. CLI 使用：用户也可以通过命令行界面来使用 ProxyPool，实现代理 IP 的获取和管理。

### 五、项目扩展

1. 扩展代理源：用户可以根据自己的需求扩展代理源，从而增加代理池 IP 的质量和数量。
2. 接入其他系统：ProxyPool 还支持与其他系统进行集成，用户可以根据自己的需求将 ProxyPool 与其他系统进行无缝集成。

### 六、项目实现原理

ProxyPool 通过定时的网络请求获取免费代理 IP，并对获取的代理 IP 进行验证，将可用的代理 IP 存入数据库中。用户在需要使用代理 IP 时，可以通过 API 或者 CLI 来获取数据库中存储的代理 IP。

### 七、项目应用场景

1. 网络爬虫：在进行网络爬虫任务时，用户可以利用 ProxyPool 来获取高质量、可用性较高的代理 IP，从而加快爬取数据的速度。
2. 数据采集：在进行大规模数据采集时，用户可以使用 ProxyPool 来保证数据采集过程中的 IP 访问频率和可用性。

**总结**

ProxyPool 作为一个爬虫代理 IP 池项目，具有简单易用、定时采集、可扩展性等特点，在网络爬虫、数据采集等应用场景中具有较为广泛的应用前景，并且未来还将不断完善功能，满足不同用户的需求。

## XPath：Python 爬虫的万能解析方法

### 前言

想要入门 Python 爬虫，数据解析方法是必须要掌握的。通常情况下，解析方法就三种“正则表达式，XPath，BS4”。在这三种里面，正则通常会用于特殊场合，使用方法也较简单，只不过唯一需要注意的地方就是，记得把正则所有的匹配符号以及四种匹配公式，要牢记并熟练掌握。BS4，可以说熟练爬虫之后，这种方法可用可不用，为什么这么说？当你熟练爬虫之后，掌握正则或者 XPtah，就足以应对 99%的爬虫需求。当然了，能熟知 BS4 并掌握它，也是最好的，这样就会使得你在数据提取解析方面会有多种选择性。毕竟有句老话，技多不压身。

而本文，笔者也就重点来介绍下 XPath。

![图片](./Python框架.assets/640-1714659864844-49.gif)

### 正文

XPath（XML Path Language），可以理解它是一种在 XML 文档中查找信息的语言。它也可以用于 html，因为 html 可以被视为 XML 的一种形式。在 Python 的网络爬虫中，我们经常使用 XPath 来定位和提取网页中的特定元素。

### 1.依赖库安装

在 Python 中，lxml 库是处理 HTML 和 XML 的常用库，它支持 XPath。换言之，如果想要正常使用 XPath，就需要提前安装好 lxml。

如果你本地已正常安装，可以忽略该步骤。否则，在终端直接输入如下命令即可：

```bash
pip install lxml
```

### 2.获取并解析数据

如下所示，是一个简单的网页爬取和 XPath 数据提取的示例：

```python
import requests
from lxml import etree

# 发送HTTP请求
url = 'https://example.com'  # 替换为你想要爬取的网页地址
response = requests.get(url)
response.encoding = 'utf-8'  # 设置正确的编码

# 解析HTML内容
html = etree.HTML(response.text)

# 使用XPath提取信息
# 例如，提取所有带有特定类名的元素
elements = html.xpath('//div[@class="my-class"]')

# 打印提取到的元素
for element in elements:
    print(etree.tostring(element, pretty_print=True).decode('utf-8'))
```

需要注意的是，XPath 表达式的语法是非常强大的，它允许你使用各种选择器来定位元素。它的语法由一系列的步骤组成，每个步骤都以/或//开头。

/表示从根节点开始查找，//表示从任意节点开始查找。

每个步骤都可以包含节点名称、谓词和轴等条件，用于过滤和选择元素。以下是一些常见的 XPath 表达式，以及它们的含义和效果：

```python

# 查找所有的p元素：
"//p"

# 查找id属性为content的p元素，其中 @ 表示属性，[] 表示谓词没用于过滤条件：
"//p[@id='content']"

# 查找class属性包含item的p元素，contains是一个函数，用于判断属性值是否包含某个字符串：
"//p[contains(@class, 'item')]"

# 查找第一个div元素下的所有p元素，[1]表示位置，/表示子节点。，：
"//div[1]/p"

# 查找所有含有a子元素的li元素，a表示节点名称，不加@或者/：
"//li[a]"

# 查找所有a元素的href属性值：
"//a/@href"
# 这个表达式会返回网页中所有a元素的href属性值，@href表示属性名称。

# 查找所有文本为"Hello"的span元素,text()是一个函数，用于获取文本字符串：
"//span[text()='Hello']"

# 获取span元素下面的文本字符串
"//span/text()"
```

上面提到的仅是 XPath 的基础，为了充分利用它，你可能需要学习更多关于 XPath 的知识。这种类似于公式一样的写法，归根结底就是要多练多用，才能熟练运用各个方法。

### 3.数据提取

需要注意的是，lxml 库提供的 XPath 方法来执行 XPath 表达式，其返回值为列表。所以说，当你使用 XPath 提取数据之后，记得使用切片或其他方法将目标数据拿出来。如下所示：

```python
links = html.xpath("//a")  # 返回所有a元素
for link in links:
    text = link.text
    href = link.get("href")
    print(text, href)
```

### 4.更改数据结果

有同学可能会有疑问，如果只是单独的来判断提取结果是否为自己想要的数据，需要怎么做呢？这简单，你可以选择使用条件判断，如果为 True，则获取数据，反之，将数据进行摒弃或者更改。

示例代码如下所示：

```python
h1 = html.xpath("//h1")[0]  # 返回第一个h1元素
targrt = h1 if h1 == "target text" else None

return target
```

### 5.数据保存

lxml 库提供的 tostring 方法，可以将修改后的 html 对象转换为字符串，示例代码如下所示：

```python

result = lxml.etree.tostring(html, encoding="utf-8")
with open("new.html", "wb") as f:
    f.write(new_html)
```

这里稍微补充一点，在项目中通常会需要将数据，根据字段按需存入 mongo，mysql 或其他数据容器等。对于这些，你可以借助 pymongo 和 pymysql 来实现。

而有时候，我们需要将数据存入 excel 或者是 csv 数据表，对此你可以借助 pandas 来实现，比如 to_csv 或者 to_excel。

而对此感兴趣的同学，可以直接翻阅《http://t.csdnimg.cn/7mdap》进行查看。

## AI网络爬虫：用kimichat自动批量提取网页内容

[AI网络爬虫：用kimichat自动批量提取网页内容 (qq.com)](https://mp.weixin.qq.com/s/j1b-VdQvRS5_FNC_symMCA)

# 自动化部署

## Pyinfra：一个全自动化部署 python 库

### **什么是 Pyinfra 库.**

- Pyinfra 是一个用于自动化部署和配置的 Python 库,它允许用户以声明性的方式描述服务器架构、软件配置和部署过程.Pyinfra 的目标是成为基础设施即代码（Infrastructure as Code）的工具之一.

### **使用和安装：**

```
# 可以使用pip安装pyinfra：

pip install pyinfra
```

- 要开始使用 pyinfra,你需要编写包含主机定义和任务描述的 Python 脚本,并运行这些脚本来执行部署和配置操作.

**以下是一个示例 pyinfra 脚本,用于安装 Nginx 服务器：**

```
from pyinfra.operations import server

nginx_installation = server.packages(
    name='Install Nginx',
    packages=['nginx'],
    update=True
)

if __name__ == '__main__':
    server.run(nginx_installation)
```

### **核心优势：**

**纯 Python：**

- Pyinfra 使用 Python 作为开发语言,使得编写、维护和扩展部署脚本变得更加容易.

**简单明了：**

- 通过声明性语法描述服务器配置和部署任务,降低了学习曲线.

**多种连接器：**

- 支持 SSH、本地 Shell 等多种连接方式,适用于不同的场景.

### **优缺点：**

**优点：**

1. 易于学习和使用
2. 纯 Python 实现
3. 支持多种连接方式

**缺点：**

- 社区相对较小,生态系统可能不如其他类似工具成熟

### **高级功能：**

**Pyinfra 提供一系列高级功能,包括：**

**1. 并行执行任务**

```
from pyinfra import host, local, inventory

# Define hosts
host1 = host('host1.example.com')
host2 = host('host2.example.com')

# Run tasks in parallel on multiple hosts
inventory.add_host(host1)
inventory.add_host(host2)

with host1.get_implementation() as host_impl1, host2.get_implementation() as host_impl2:
    host_impl1.run_shell_command('echo "Task on host1"')
host_impl2.run_shell_command('echo "Task on host2"')
```

**2. 多主机管理：**

```
from pyinfra.operations import server

hosts = ['server1.example.com', 'server2.example.com']

for host_name in hosts:
    with server.host(hostname=host_name):
        server.user(
            name='Create user',
            user='new_user',
            shell='/bin/bash'
        )
```

**3. 使用内置模块：**

```
from pyinfra import host, local

# Install packages on localhost
local.server.packages(
    name='Install packages',
    packages=['nginx', 'postgresql']
)
```

这些示例展示了 Pyinfra 的高级功能,包括并行执行任务、多主机管理以及使用内置模块来简化部署和配置过程.这些功能使得 Pyinfra 成为一个强大而灵活的自动化部署工具.

### **总结：**

在 Python 中,Pyinfra 发挥着重要的作用,使开发人员能够以声明性的方式自动化部署和配置管理,从而减少人工操作的错误和重复性工作.其纯 Python 实现和简单易用的特点,使得 Pyinfra 成为一个强大的基础设施即代码工具.

# 微信操作开发库

## Itchat：微信自动化利器

本文将介绍如何使用 Python 编写一个微信自动化程序，帮助你简化微信操作，实现自动发送消息、自动回复、群发消息等功能。

### 安装

要编写微信自动化程序，首先需要安装 Python 和相关的库。可以通过以下步骤进行安装：

1.下载 Python：可以从 Python 官方网站下载适合你操作系统的 Python 版本，并按照安装向导进行安装。

2.安装所需库：使用 pip 命令安装所需的库，包括 itchat、selenium 和 webdriver 等。例如，可以运行以下命令安装 itchat 库：

```
pip install itchat
```

 有经验的编程人员从 itchat 的依赖库，就可以看出 itchat 的技术路线是网络爬 虫。

### 功能和使用

使用 Python 编写微信自动化程序可以实现各种功能，以下是一些常见的功能和使用方法：

1.自动发送消息：使用 itchat 库可以实现自动发送消息给指定的微信好友或群组。可以通过编写 Python 脚本来实现自动登录微信、搜索好友或群组，并发送消息。

示例代码：

```python
import itchat

itchat.auto_login()

friend = itchat.search_friends(name='好友的昵称')[0]
friend.send('自动发送的消息')
```

2.自动回复消息：通过监听微信消息事件，可以编写程序实现自动回复消息。可以根据接收到的消息内容进行逻辑判断，并回复相应的内容。

示例代码：

```python
import itchat

@itchat.msg_register(itchat.content.TEXT)
def reply_message(msg):
    if msg['Text'] == '关键词':
        return '回复的消息内容'

itchat.auto_login()
itchat.run()
```

3.群发消息：使用 itchat 库可以实现向多个好友或群组发送同一条消息。可以通过编写 Python 脚本来实现选择好友或群组，并发送群发消息。

示例代码：

```python
import itchat

itchat.auto_login()

groups = itchat.get_chatrooms(update=True)
for group in groups:
    if group['NickName'] == '群组的昵称':
        itchat.send('群发的消息内容', toUserName=group['UserName'])
```

从以上代码中不难发现，itchat 代码风格非常优雅漂亮，是一个非常好的学习案例。

### 应用场景

Python 微信自动化程序可以在多种场景下发挥作用，包括：

1.批量消息通知：如果你需要向多个好友或群组发送相同的消息，可以使用微信自动化程序实现批量消息通知，提高工作效率。

2.自动回复助手：当你无法及时回复微信消息时，可以使用自动回复程序代替你进行自动回复，让对方得到及时的反馈。

3.数据采集和分析：通过微信自动化程序，可以实现对微信公众号或特定好友的消息进行采集和分析，获取有用的信息。

### 优缺点

Itchat 是本质上是一个网络爬虫。大多数网站运营都对爬虫又爱又恨，大型网站都会有反爬虫机制，所以 itchat 的性能和可用性并不确定，取决于微信服务器的设置，如果微信网页端无法登录，则 itchat 也无法使用。

以上就是很多人私信反应 itchat 扫描二维码后没有反应的原因。由于我们无法判断是个别人不能登录微信网页版，还是所有人都不能，您可以在使用 itchat 前扫码登陆微信网页版试验一下。

Itchat 是一个非常优质的爬虫应用案例，可以使用 Itchat 来实现微信数据的自动获取和处理，例如抓取好友列表、获取聊天记录等。同时，你还可以根据自己的需求对这些数据进行分析和处理，以实现各种功能，例如统计聊天频率、分析聊天内容等。

![image-20240427005950664](./Python框架.assets/image-20240427005950664.png)

### 总结

Python 微信自动化程序可以帮助简化微信操作，实现自动发送消息、自动回复和群发消息等功能。通过使用 itchat 库和 Python 编程，你可以根据自己的需求开发出各种自定义的微信自动化程序。无论是批量消息通知还是数据采集和分析，Python 微信自动化程序都可以提高效率和便捷性，让你更好地利用微信进行沟通和工作。

但必须要指出的是：**itchat 是采用了爬虫技术与微信服务器进行交互，其性能和可用性都存在不确定性。**

## wxauto：Windows 版本的微信客户端自动化工具

GitHub：[cluic/wxauto: Windows 版本微信客户端（非网页版）自动化，可实现简单的发送、接收微信消息，简单微信机器人 (github.com)](https://github.com/cluic/wxauto)

爬虫和非官方 API 类库，仅作为学习研究使用，严禁从事非法活动。这类库为能为用户学习研究提供一定便利，也能为官方安全升级提供有益线索，但也可存在被非法使用的风险。这类库伴着官方数据结构升级，随时有失效可能，请谨慎参考学习，严禁非法使用。

### 引言：

在当今社交网络的时代，微信作为一款广泛使用的社交工具，其在我们的生活中扮演着重要的角色。

开源项目 wxauto 为 Windows 版本的微信客户端提供了自动化功能，使用户能够轻松掌控微信，实现简单的发送和接收微信消息。

本文将详细介绍 wxauto 开源项目，并提供安装、示例、功能和特点、应用场景以及结论，帮助用户更好地了解该项目。

### 1. 安装 wxauto

安装 wxauto 非常简单，只需 pip 安装即可：

```bash
pip install wxauto
```

### 2. wxauto 示例

以下是一个使用 wxauto 的示例，展示了其基本用法：

```python
from wxauto import WeChat
# 创建实例，登录
client = WeChat()

# 给文件传输助手发送消息
client.filehelper.send_text("Hello, wxauto!")

# 接收消息
messages = client.getmsgs()
```

在上述示例中，我们首先导入 wxauto 模块，并创建了一个 WeChat 实例。然后，我们扫码方法登录微信账号，并使用 send_send_text()方法发送消息给文件传输助手。接下来，我们使用 getmsgs()方法接收消息。

### 3. wxauto 的功能和特点

wxauto 提供了以下主要功能和特点，帮助用户轻松掌控微信：

- **自动发送和接收消息**：wxauto 可以实现自动发送和接收微信消息，使用户能够方便地与好友进行交流。
- **持续更新中**：wxauto 项目保持持续更新，不断增加新的功能和改进，以满足用户的需求。
- **灵活可扩展**：wxauto 提供了灵活的接口和功能，用户可以根据自己的需求进行扩展和定制。
- **简单易用**：wxauto 具有友好的用户界面和简洁的操作流程，用户无需专业知识即可轻松使用该工具进行微信自动化操作。
- **注意事项**：wxauto 是针对特定版本微信 PC 客户端的 API 接口，有一定的安全风险，仅供学习和研究，请勿从事非法活动！！！

### 4. wxauto 的应用场景

wxauto 可应用于多种场景，包括但不限于：

- **自动化消息处理**：用户可以使用 wxauto 自动发送和接收微信消息，方便进行消息的批量处理和自动回复。
- **微信机器人**：借助 wxauto，可以创建自定义的微信机器人，实现自动回复、消息提醒、数据采集等功能。
- **社交媒体管理**：对于个人或组织而言，wxauto 可以用于管理微信公众号或个人账号，自动发布内容、自动回复评论等。
- **自动化测试**：在开发和测试过程中，wxauto 可以用于自动化测试微信应用的功能，模拟用户行为进行测试。

### 5. 结论

wxauto 是一个开源的微信自动化工具，提供了自动发送和接收微信消息的功能。它简单易用，具有灵活可扩展的特点，适用于多种应用场景。通过 wxauto，用户可以轻松掌控微信，实现自动化操作，提高工作效率。如果您对微信自动化感兴趣，可以尝试使用 wxauto，体验其强大的功能和便捷的操作。本文仅供技术信息，严谨利用技术从事非法活动。

教程文章：[python 控制 UI 实现桌面微信自动化 (qq.com)](https://mp.weixin.qq.com/s/tlPDHX4Qmnv9GNPeaDpOUg)

## WeChaty：强大的微信个人号机器人 SDK

WeChaty 是一款基于 Node.js 的开源微信个人号机器人 SDK，它为开发者提供了一种简单而强大的方式来构建自己的微信机器人，实现与微信的智能通信。

除了 Node.js，WeChaty 还提供了 Python 接口，为 Python 开发者提供了使用 WeChaty 的便捷方式。本文将介绍 WeChaty 及其 Python 接口，探讨如何通过 WeChaty 在 Python 环境中构建智能微信机器人。

### 1. WeChaty 的功能和特点：

- **自动登录和管理微信个人号**：WeChaty 提供了自动登录和管理微信个人号的功能，无论是在 Node.js 环境还是 Python 环境中，开发者只需编写少量的代码，就可以实现微信个人号的登录和管理，包括发送消息、接收消息、获取联系人信息等。

- **智能消息处理**：WeChaty 具备智能消息处理能力，可以根据用户的需求和规则进行消息的自动回复、转发、过滤等操作。开发者可以通过编写自定义的消息处理逻辑，实现个性化的消息处理功能，而这些功能在 Python 接口中同样适用。

- **多平台支持**：WeChaty 不仅支持微信个人号，还支持企业微信和腾讯云通信等平台，这些功能在 Python 接口中同样可用，使得开发者可以在 Python 环境中灵活应用 WeChaty。

- **插件化架构**：WeChaty 的插件化架构使得开发者可以方便地扩展和定制功能。开发者可以通过编写插件，实现各种自定义的功能扩展，如消息监控、关键词提醒、自动化任务等，同样适用于 Python 接口。

### 2. WeChaty Python 接口的使用：

- **安装 WeChaty Python 包**：开发者可以通过 pip 安装 WeChaty Python 包，以便在 Python 环境中使用 WeChaty。安装命令为：pip install wechaty。

- **编写 Python 代码**：通过导入 WeChaty Python 包，开发者可以在 Python 中使用 WeChaty 的功能，如登录微信个人号、处理消息等。开发者可以根据自己的需求编写相应的代码逻辑，创建自定义的微信机器人应用。

- **运行 Python 代码**：在 Python 环境中运行编写的代码，即可启动 WeChaty 的功能，实现与微信的智能通信。开发者可以根据需要将代码部署到服务器或其他环境中，以实现长期运行和稳定的微信机器人应用。

### 3. WeChaty Python 接口的应用场景：

- **个人助手**：通过 WeChaty 的 Python 接口，开发者可以构建个人助手应用，实现自动回复消息、提醒日程安排、获取实时天气等功能，提升个人工作和生活的效率。

- **聊天机器人**：利用 WeChaty 的 Python 接口，开发者可以构建聊天机器人，实现与与用户的自动对话。通过自定义的机器学习模型和自然语言处理技术，聊天机器人可以变得更加智能和自然。

- **微信群管理**：WeChaty 的 Python 接口同样提供了微信群管理的功能，开发者可以通过编写代码实现自动邀请、踢出成员、监控群消息等操作，从而提升微信群的管理效率。

- **微信营销工具**：利用 WeChaty 的 Python 接口，开发者可以构建微信营销工具，如自动回复关键词、群发消息、定时发送等功能，帮助企业实现精准的营销推广。

### 4. WeChaty Python 接口的优势和未来发展：

- 多语言支持：WeChaty 提供了多种语言的接口，其中包括 Python 接口，为 Python 开发者带来了便利。这使得更多的开发者能够利用自己熟悉的语言进行微信机器人应用的开发。

- 强大的社区支持：WeChaty 拥有庞大而活跃的开发者社区，无论是在 Node.js 还是 Python 环境下，开发者可以在社区中分享经验、交流问题，并共同推动 WeChaty 的发展和创新。

- 智能化发展：未来，WeChaty 可能会结合更多智能技术，如语音识别、图像识别等，进一步提升微信机器人的智能化水平，为用户提供更加便捷和智能的服务。

**结论：**

WeChaty 是一款强大而灵活的微信机器人 SDK，除了 Node.js，它还提供了 Python 接口，为 Python 开发者带来了便利。通过 WeChaty 的 Python 接口，开发者可以实现自动登录和管理微信个人号、智能消息处理、多平台支持和插件化架构等功能。

WeChaty 的应用场景广泛，包括个人助手、聊天机器人、微信群管理和微信营销工具等。该项目拥有强大的社区支持，同时也是开源和免费的。未来，WeChaty 可能结合更多智能技术，进一步提升微信机器人的智能化水平。WeChaty 及其 Python 接口连接了人与机器，成为人们智能通信的重要工具之一。

## WeChatpy：Python 微信开发库，与微信官方接口交互的工具

GitHub：https://github.com/wechatpy/wechatpy

官网：[wechatpy · 微信公众号 Python SDK](https://www.wechatpy.org/)

文档：https://docs.wechatpy.org/zh-cn/stable/

微信作为中国最受欢迎的社交平台之一，拥有庞大的用户群体和丰富的功能。如果你想在自己的应用中集成微信的功能或开发自己的微信机器人，那么 WeChatpy 是一个非常值得考虑的选择。

本文将介绍 WeChatpy 这个优秀的 Python 微信开发库，让你了解它的特点和如何使用。

WeChatpy 是一个功能强大且易于使用的 Python 微信开发库，它提供了与微信开放平台接口进行交互的方法和工具。下面是一些 WeChatpy 的特点：

1. **简单易用**：WeChatpy 提供了简单易懂的 API 接口，使得与微信开放平台进行交互变得简单快捷。你可以使用 Python 编写简洁的代码来实现与微信的通信。
2. **多种功能支持**：WeChatpy 支持微信公众号、企业微信、小程序和支付等多种微信功能的开发和调用。无论你是想开发一个自动回复机器人、数据分析工具，还是集成微信支付功能，WeChatpy 都能满足你的需求。
3. **稳定可靠**：WeChatpy 是一个经过广泛使用和积极维护的开源项目，因此可以提供稳定可靠的性能和支持。你可以放心地在生产环境中使用 WeChatpy 来开发微信相关的应用。
4. **强大的扩展性**：WeChatpy 支持插件和中间件的使用，可以帮助你更轻松地扩展和定制微信功能。你可以根据自己的需求编写插件或使用现有的插件来增强功能。

现在，让我们来看一下如何使用 WeChatpy 来实现一个简单的微信机器人。

首先，你需要安装 WeChatpy 库。你可以使用 pip 命令进行安装：

```bash
pip install wechatpy
```

接下来，你可以使用以下示例代码来创建一个简单的微信机器人：

```python
from wechatpy import WeChatClient
from wechatpy.replies import TextReply

# 创建一个微信客户端
client = WeChatClient('your_appid', 'your_appsecret')

# 监听消息事件
@client.message.register()
def reply_text(message):
    # 自动回复文本消息
    reply = TextReply(content='Hello, I am a WeChatpy robot!', message=message)
    return reply.render()

# 运行机器人
client.run()
```

上述代码中，我们使用 WeChatpy 创建了一个微信客户端，并通过监听消息事件实现了简单的自动回复功能。你可以根据自己的需求来扩展和修改代码。

综上，WeChatpy 是一个优秀的 Python 微信开发库，它简化了与微信开放平台接口的交互，并提供了丰富的功能和扩展性。你可以使用 WeChatpy 来开发微信公众号、企业微信、小程序和支付等应用，实现自动回复、数据分析、支付集成等功能。

如果你对微信开发感兴趣，不妨尝试使用 WeChatpy 来构建你的微信应用！

## weixin-python：使用 python 操作微信 API

### 引言

在这篇文章中，我们将深入探讨如何使用 Python 库 weixin-python 来操作微信 API。我们将详细介绍相关知识点，并给出一些使用示例，同时对关键代码进行相应的注释或者解释说明。

#### 安装 weixin-python 库

首先，我们需要在 Python 环境中安装 weixin-python 库。可以通过 pip 命令进行安装：

```bash
pip install weixin-python
```

#### 初始化

安装完成后，我们可以开始使用 weixin-python 库来操作微信 API。首先，我们需要初始化一个 WeixinAPI 对象：

```python
from weixin import WeixinAPI

api = WeixinAPI(appid='your_appid', secret='your_secret')
```

在这里，'your_appid’和’your_secret’是你的微信公众号的 appid 和 secret。

#### 获取 access token

接下来，我们需要获取 access token，这是调用微信 API 的凭证：

```python
access_token = api.get_access_token()
print(access_token)
```

#### 发送消息

有了 access token，我们就可以使用微信 API 来发送消息了。例如，我们可以发送一条文本消息：

```python
api.send_text_message(access_token, 'to_user', 'Hello, Weixin!')
```

在这里，'to_user’是接收消息的用户的 openid，'Hello, Weixin!'是要发送的消息内容。

#### 接收消息

除了发送消息，我们还可以使用 weixin-python 库来接收消息。例如，我们可以接收一条文本消息：

```python
message = api.receive_message(access_token)
print(message)
```

在这里，'message’是接收到的消息内容。

#### 处理消息

接收到消息后，我们可以根据消息的类型来进行相应的处理。例如，我们可以对文本消息进行回复：

```python
if message['MsgType'] == 'text':
    api.send_text_message(access_token, message['FromUserName'], 'Received your message: ' + message['Content'])
```

在这里，'message[‘FromUserName’]'是发送消息的用户的 openid，'message[‘Content’]'是接收到的消息内容。

### 完整代码示例

以下是一个完整的代码示例，展示了如何使用 weixin-python 库来操作微信 API：

```python
from weixin import WeixinAPI

# 初始化
api = WeixinAPI(appid='your_appid', secret='your_secret')

# 获取access token
access_token = api.get_access_token()
print(access_token)

# 发送消息
api.send_text_message(access_token, 'to_user', 'Hello, Weixin!')

# 接收消息
message = api.receive_message(access_token)
print(message)

# 处理消息
if message['MsgType'] == 'text':
    api.send_text_message(access_token, message['FromUserName'], 'Received your message: ' + message['Content'])
```

### 总结

通过这篇文章，我们学习了如何使用 Python 库 weixin-python 来操作微信 API，包括获取 access token、发送消息、接收消息和处理消息。希望这篇文章能帮助你更好地理解和使用微信 API。

以上只是一个简单的示例，实际使用时，你可能需要处理更多的情况，例如错误处理、刷新 access token 等。希望你在阅读这篇文章后，能对如何使用 Python 操作微信 API 有一个深入的了解。

## webhook：创建一个企业微信机器人

企业微信机器人是企业微信内置的一项功能，它允许企业通过自定义接入 webhook 协议来实现信息的自动同步和智能交互。这项功能可以极大地提升企业内部沟通效率，降低沟通成本，并增强与客户的互动体验。以下是关于企业微信机器人的详细介绍：

### 功能与应用场景

- **提高沟通效率**：企业微信机器人能够实现自动回复、智能推荐和语音识别等功能，从而提高企业内部的沟通效率。
- **降低沟通成本**：通过使用机器人，企业可以减少人力成本，进而降低沟通成本，提高运营效率。
- **提升工作效率**：机器人可以帮助员工快速获取信息、生成文档和解决问题，从而提高工作效率。
- **增加客户体验**：企业微信机器人能够提升用户体验，加强与客户的互动交流，增强客户满意度。

### 配置与使用

**添加机器人**：在企业微信群聊中，可以通过点击群聊右上角的“...”选择添加群机器人，创建新的机器人并获取 webhook 地址

![图片](./Python框架.assets/640-1715337207740-51.webp)

点击新创建一个机器人

![图片](./Python框架.assets/640-1715337207740-52.webp)

输入机器人名字后，点击添加机器人

![图片](./Python框架.assets/640-1715337207740-53.webp)

点击确定后，出现如下界面。会反馈 webhook 地址以及这个机器人单独的 key 值。将 webhook 地址以及 key 保存下来

![图片](./Python框架.assets/640-1715337207740-54.webp)

### python 脚本：

```python
import requests
import json
import hashlib
import base64
import os
from urllib import parse
from requests_toolbelt import MultipartEncoder



global _msg_robot
msg_robot = "这里填上创建机器人返回的key值"

#说明：
"""
 支持纯文本、markdown、图片、文件、图文
 a = wx.WxRobot('1111-222-333-444-55555') #webhook
 a.sendMessage('文本内容', '@对象')
 a.sendMarkdown('markdown内容')
 a.sendImage('d:/图片.jpg') #图片文件的绝对路径
 a.sendMedia('d:/文件.jpg') #文件的绝对路径
 a.sendNews('[{
               "title" : "***",
               "description" : "****",
               "url" : "www.qq.com",
               "picurl" : "****"
           }]')
"""

class WxRobot():
    headers = {"Content-Type": "application/json"}
    req_message = {"errcode": 1, "errmessage": "请求微信企业失败，请检查网络"}

    #这里post_url由创建机器人的webhook以及key共同组成
    def __init__(self, webhook):
        self.post_url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={0}".format(webhook)

    #发送消息
    def _req(self, data):
        try:
            return requests.post(self.post_url, data=json.dumps(data), headers=self.headers, timeout=10).json()
        except Exception as e:
            return self.req_message

    def sendMessage(self, message):
        data = {"msgtype": "text", "text": {"content": str(message)}}
        return self._req(data)

    def sendMarkdown(self, message):
        data = {"msgtype": "markdown", "markdown": {"content": str(message)}}
        return self._req(data)

    def sendNews(self, message):
        data = {"msgtype": "news", "news": {"articles": list(message)}}
        print(data)
        return self._req(data)

    def sendImage(self, image_path):
        if os.path.exists(image_path):
            with open(image_path, "br") as f:
                fcont = f.read()
                ls_f = base64.b64encode(fcont)
                fmd5 = hashlib.md5(fcont)
                data = {"msgtype": "image", "image": {"base64": ls_f.decode('utf8'), "md5": fmd5.hexdigest()}}
                return self._req(data)
        else:
            self.req_message['errmessage'] = '图片文件不存在'
            return self.req_message

    def sendMedia(self, file_path):
        if os.path.exists(file_path):
            upload_url = self.post_url.replace('send', 'upload_media') + '&type=file'
            try:
                media_id = requests.post(upload_url, files=[('media', open(file_path, 'rb'))]).json()['media_id']
                print(media_id)
            except Exception as e:
                self.req_message['errmessage'] = '上传文件失败，请检查网络'
                return self.req_message
            data = {"msgtype": "file", "file": {"media_id": media_id}}
            return self._req(data)
        else:
            self.req_message['errmessage'] = '文件不存在'
            return self.req_message

    def sendFile(self,filepath):
        """
        发送微信群组机器人文件
        :param type_t: 测试类型
        :param filepath: 文件路径
        :return:
        """
        # url为群组机器人WebHook，配置项
        url = self.post_url
        headers = {
            "content-type": "application/json"
        }
        # 发送文件需要先上传文件获取media_id
        media_id = self.UploadFile(filepath, url)
        # 发送请求
        try:
            msg = {"msgtype": "file", "file": {"media_id": media_id}}
            result = requests.post(url, headers=headers, json=msg)
            if result.status_code == 200:
                print('文件上传成功')
            else:
                print('文件上传失败')

            return True
        except Exception as e:
            print("企业微信机器人发送文件失败, 详细信息:" + str(e))
            return False

    def UploadFile(self,filepath, webHookUrl):
        """
        企业微信机器人上传文件，发送文件前需要先上传--要求文件大小在5B~20M之间
        :param filepath: 文件路径
        :param webHookUrl: 群组机器人WebHook
        :return: media_id
        """
        # url为群组机器人WebHook，配置项
        params = parse.parse_qs(parse.urlparse(webHookUrl).query)
        webHookKey = params['key'][0]
        upload_url = f'https://qyapi.weixin.qq.com/cgi-bin/webhook/upload_media?key={webHookKey}&type=file'
        headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36"
        }
        try:
            multipart = MultipartEncoder(
                fields={
                    'filename': os.path.basename(filepath),
                    'filelength': '',
                    'name': 'media',
                    'media': (os.path.basename(filepath), open(filepath, 'rb'), 'application/octet-stream')
                },
                boundary='-------------------------acebdf13572468')
            headers['Content-Type'] = multipart.content_type
            resp = requests.post(upload_url, headers=headers, data=multipart)
            json_res = resp.json()
            if json_res.get('media_id'):
                print(f"企业微信机器人上传文件成功，file:{filepath}")
                return json_res.get('media_id')
        except Exception as e:
            print("企业微信机器人上传文件失败,详细信息:" + str(e))
            return ""



if __name__ == "__main__":
    robot=WxRobot(msg_robot)
    #发送消息
    robot.sendMessage("企业微信测试机器人")
    #发送图片
    robot.sendImage("d:\test.img")
    #发送视频
    robot.sendMedia("d:\test.mp4")
    #发送文件
    robot.sendFile("d:\行业报告")
```

上面的代码实现了往企业微信群中发送消息，文件，视频，图片等功能。有了这些功能后，我们可以定制很多自动化任务。

1 周期发送通知消息

2 和 AI 对接后，发送回答

3 和爬虫对接后，发送从 web 获取到的内容

## Weixin-Python：微信平台Python开发神器

### **1、引言**

在当今数字化时代，微信公众平台成为了企业和个人连接用户的重要渠道。为了高效地管理和与用户互动，开发者需要一个强大而灵活的工具。

`Weixin-Python `正是这样一个为微信公众平台量身打造的 Python 库，它以其简洁的 API 和丰富的功能赢得了众多开发者的青睐。本文将深入探讨 Weixin-Python 库的使用，帮助开发者快速上手并有效利用这一工具。

### **2、Weixin-Python介绍**

Weixin-Python库为开发者提供了一个强大的工具，它允许开发者通过Python代码与微信公众平台进行交互，支持消息的接收和回复、自定义菜单创建等功能，除此之外，它还能够创建并发送多种类型的回复消息，如文本、图片、语音、视频、音乐和图文消息。此外，它还支持处理事件推送，如关注、取消关注、点击菜单等事件，以及管理用户分组、获取用户基本信息和用户列表等功能。同时兼容Python 2和Python 3。

### **3、Weixin-Python实现原理**

`Weixin-Python`库的原理主要基于与微信服务器的HTTP请求和响应交互。当微信服务器向开发者的服务器发送请求时，Weixin-Python库会负责接收这些请求，并解析请求中的XML消息。然后，开发者可以使用库提供的API来处理这些消息，并创建相应的回复消息。最后，Weixin-Python库会将回复消息封装成XML格式，并通过HTTP响应发送给微信服务器。

### **4、Weixin-Python安装与使用**

首先，确保你的开发环境已经安装了 Python，并通过 pip 命令安装 Weixin-Python 库：

```bash
pip install weixin-python
```

安装完成后，你需要在微信公众平台的开发者设置中获取必要的 API 密钥和令牌，这些信息将用于认证和消息加解密。

**1、消息处理**

Weixin-Python 提供了一套完整的消息处理机制。你可以通过定义一个处理函数来响应不同类型的消息，例如文本消息、图片消息等。以下是一个基本的文本消息处理示例：

```python
from weixin import Weixin

weixin = Weixin(app_id, app_secret)

@weixin.text()
def text_reply(message):
    return '你好，这是一条自动回复！'

weixin.start()
```

**2、自定义菜单创建**

自定义菜单是微信公众平台的一大特色，用户可以通过点击菜单来触发特定的事件。使用 Weixin-Python，创建自定义菜单变得非常简单：

```python
from weixin import Weixin

weixin = Weixin(app_id, app_secret)

menu = [
    {
        'name': '菜单1',
        'type': 'click',
        'key': 'MENU1'
    },
    {
        'name': '菜单2',
        'type': 'view',
        'url': 'http://example.com'
    }
]

weixin.create_menu(menu)
```

**3、消息发送**

除了接收和处理消息外，Weixin-Python 还允许你主动向用户发送消息。无论是文本、图片还是图文消息，都可以通过简单的 API 调用实现：

```python
from weixin import Weixin

weixin = Weixin(app_id, app_secret)

# 发送文本消息
weixin.send_text('user1', 'Hello, World!')

# 发送图片消息
weixin.send_image('user2', 'path/to/image.jpg')

# 发送图文消息
articles = [{
    'title': '文章标题',
    'description': '文章描述',
    'url': 'http://example.com/article'
}]
weixin.send_news('user3', articles)
```

### **5、小结**

通过上述介绍，我们了解了 Weixin-Python 库的基本使用方法。从安装配置到消息处理，再到自定义菜单创建和消息发送，Weixin-Python 提供了一套完整的解决方案，使得微信公众平台的开发变得更加高效和简单。无论你是初学者还是有经验的开发者，`Weixin-Python` 都是你理想的选择。

# 数据可视化

## Plotly

- **领域**：数据可视化
- **描述**：Plotly 是一个交互式可视化开发框架和库，用于创建各种类型的图表和可视化应用程序。支持交互式操作和丰富的绘图工具。

# 即时通讯

## 即时通信工具库 aiortc：使用 Python asyncio 实现的 WebRTC 和 ORTC 工具

**Github 地址**：https://github.com/aiortc/aiortc

对于 Python 来说，网络应用一直是弱项。这让想在网络领域一展身手的 Pythoner 感觉到无从下手。Python 推出 asyncio 后，网络应用方面开始发力，aiortc 就是一个强大的即时通讯类 Python 工具库，助力您在网络编程方面大显身手。

### 1. aiortc 简介

在现代的网络通信中，WebRTC 和 ORTC 技术已经成为实时通信的关键。

而 aiortc 作为一款基于 Python 和 asyncio 的开源项目，为开发者提供了在 Python 环境下使用 WebRTC 和 ORTC 的绝佳选择。

aiortc 开启了 Python 中 WebRTC 和 ORTC 的新纪元，其在实时通信领域中有巨大的应用潜力。

### 2. aiortc 的开源背景

aiortc 源自于 WebRTC 项目，它是一个开源的实时通信技术标准，旨在提供浏览器和移动应用程序之间的实时音视频传输能力。

而 aiortc 则是基于 Python 和 asyncio 开发的 WebRTC 和 ORTC 实现，为 Python 开发者提供了一个跨平台、简洁高效的实时通信解决方案。

### 3. aiortc 的核心功能

aiortc 提供了一系列强大的功能，使得开发者能够在 Python 中实现实时音视频通信。其中包括：

3.1 **音视频传输和编码**：aiortc 利用 WebRTC 和 ORTC 技术，提供了音视频传输和编码的能力，使得开发者能够实现高质量的实时通信。

3.2 **数据通道和消息传递**：aiortc 支持数据通道，使得开发者可以在音视频通信的基础上进行实时消息传递，实现更加丰富的应用场景。

3.3 **网络传输和 NAT 穿透**：aiortc 帮助开发者解决了网络传输和 NAT 穿透的问题，确保实时通信能够在各种网络环境下稳定运行。

### 4. aiortc 的异步编程模型

aiortc 基于 Python 的 asyncio 库进行开发，充分发挥 Python asyncio 的优势，充分利用了 Python 的协程和异步编程模型。

这使得开发者能够编写简洁、高效的代码，并充分发挥多核处理器的性能优势。同时，aiortc 还提供了丰富的 API 和工具，帮助开发者更好地处理并发和并行任务。

### 5. aiortc 的应用场景和商业化机会

除了作为一个开源项目，aiortc 还为开发者带来了丰富的应用场景和商业化机会。

开发者可以利用 aiortc 构建各种实时通信应用，包括视频会议、在线教育、远程医疗等。

他们可以通过提供定制化的服务和支持、开展培训和咨询等方式，为用户提供增值服务，创造新的商业模式和收入来源。

### 结论

aiortc 作为一款强大的 Python 实时通信工具，为开发者提供了一个理想的选择。它具备丰富的功能和跨平台的能力，使得开发者能够在 Python 环境下实现高质量的实时音视频通信。

通过利用 aiortc，开发者可以探索创新的实时通信应用，提升用户体验，并发掘商业化机会。

无论是小型创业团队还是大型企业，aiortc 都能满足其实时通信需求，并为其带来成功。

# 并发

## aiomultiprocess：高性能异步多进程编程库

**参考链接**

- aiomultiprocess GitHub 仓库：https://github.com/omnilib/aiomultiprocess
- asyncio 官方文档：https://docs.python.org/3/library/asyncio.html

### 引言

在现代的 Python 代码库中，为了提高性能，我们经常需要处理并行任务和多进程编程。aiomultiprocess 是一个强大的 Python 库，它提供了一种简单而高效的方式来实现异步多进程编程。本文将详细介绍 aiomultiprocess 库，探讨其功能和用法，以及如何将现有的 Python 代码库提升到更高的性能水平。

### 什么是 aiomultiprocess？

aiomultiprocess 是一个基于 asyncio 的 Python 库，它提供了一个高级接口来实现异步多进程编程。它的设计目标是让开发人员能够轻松地在 Python 中利用多核处理器的优势，以提高并行任务的执行速度。

### 为什么选择 aiomultiprocess？

aiomultiprocess 相对于其他多进程库的一个主要优势是其与 asyncio 的无缝集成。asyncio 是 Python 标准库中用于编写异步代码的模块，它提供了一种基于事件循环的并发模型。aiomultiprocess 通过将多进程和异步编程结合起来，使得开发人员能够在现有的异步代码基础上轻松地引入多进程并发。

### 主要功能和特点

1. **简单易用的接口**: aiomultiprocess 提供了一组简单而直观的 API，使得在 Python 中实现异步多进程编程变得非常容易。它的 API 设计灵感来自于 concurrent.futures 模块，因此对于熟悉该模块的开发人员来说，上手使用 aiomultiprocess 将会更加轻松。
2. **无缝集成的 asyncio**: aiomultiprocess 与 asyncio 无缝集成，使得开发人员可以在异步代码中使用 aiomultiprocess 来实现并行任务。这种集成性能出色，能够充分利用多核处理器的优势，提高代码的执行速度。
3. **支持任务池**: aiomultiprocess 提供了一个任务池的概念，用于管理并发执行的任务。任务池可以动态地创建和销毁进程，根据需要自动调整进程池的大小。这样可以有效地管理系统资源，并确保任务得到高效地执行。
4. **进程间通信**: aiomultiprocess 提供了多种进程间通信的方式，如队列和管道，用于在多个进程之间传递数据。这使得开发人员可以在多进程环境中方便地共享数据，实现数据的并行处理。

### 使用示例

下面是一个简单的示例，展示了如何使用 aiomultiprocess 来并行执行任务：

```python
import asyncio
from aiohttp import request
from aiomultiprocess import Pool

async def get(url):
    async with request("GET", url) as response:
        return await response.text("utf-8")

async def main():
    urls = ["https://noswap.com", ...]
    async with Pool() as pool:
        async for result in pool.map(get, urls):
            ...  # process result

if __name__ == '__main__':
    asyncio.run(main())

```

在上面的示例中，我们定义了一个`get`函数，用于处理每个任务项。然后，我们创建了一个任务池`Pool`，并使用`map`方法将任务项分发给不同的进程并行执行。
**结论**

aiomultiprocess 是一个强大的 Python 库，它通过将异步编程和多进程编程相结合，提供了一种简单而高效的方式来实现异步多进程编程。它的简单易用的接口和与 asyncio 的无缝集成使得开发人员能够轻松地将现有的 Python 代码库提升到更高的性能水平。它的任务池和进程间通信功能进一步增强了其灵活性和效率。通过使用 aiomultiprocess，开发人员可以充分利用多核处理器的优势，提高代码的执行速度，并实现更高效的并行任务处理。

# 绘图和动画

## PythonTurtle：简单绘图和动画库

### PythonTurtle库概述

PythonTurtle 是一个简单的图形库,用于在Python中创建基本的绘图和动画.它提供了类似Logo语言的API,使得绘制图形和动画变得易于学习和使用

### 安装

```python
pip install PythonTurtle
```

### **使用**

```python
import turtle

# 创建一个 Turtle 对象
t = turtle.Turtle()

# 在屏幕上绘制图形
t.forward(100)
```

### 核心功能

**绘制基本图形：**

- 如线条、圆、多边形等.

**控制 Turtle：**

- 移动、旋转、改变颜色等.

**创建动画：**

- 通过移动 Turtle 和改变参数来创建动画效果.

### 优缺点

**优点**

1. 简单易学,适合初学者.
2. 提供直观的图形绘制方式.
3. 可以快速创建动画效果.

**缺点**

1. 功能相对有限,主要用于基本图形绘制.
2. 不适合复杂的图形处理需求.

### 使用场景

1. 编程教育和培训
2. 初学者学习编程和图形绘制

### 高级功能及示例

**事件处理：**

- 响应键盘和鼠标事件.

**图像处理：**

- 导入和处理图像文件.

**自定义图形：**

- 创建自定义的 Turtle 形状.

### 示例

```python
import turtle

screen = turtle.Screen()
t = turtle.Turtle()

for i in range(4):
    t.forward(100)
    t.right(90)

screen.mainloop()
```

### **总结**

PythonTurtle 库是一个适合初学者学习编程和图形绘制的简单工具.通过其直观的API和易于理解的方式,用户可以快速创建基本图形和动画.尽管功能相对有限,并不适合复杂的图形处理需求,但对于教育和培训目的而言,PythonTurtle 提供了一个友好的平台,帮助用户探索编程世界并培养计算思维能力

# 机器人

## rosys：基于Web技术+NiceGUI的全Python机器人系统

项目地址：https://github.com/zauberzeug/rosys

### 概述

> rosys是一个基于web技术的纯Python机器人系统，其设计目的类似于ROS，但是基于NiceGUI，更适用于移动机器人的开发和使用。该系统旨在提供一个简单易用的机器人开发框架，同时具有良好的可扩展性和灵活性，使开发者能够快速构建各种类型的机器人应用。

### 技术特点

rosys采用了一系列先进的web技术，包括Python语言、NiceGUI界面框架等，为机器人开发提供了全新的解决方案。其中，NiceGUI是一个开源的Python GUI库，提供了丰富的图形界面组件和丰富的功能，使开发者能够轻松构建交互式的机器人应用。

### 主要功能

rosys提供了丰富的功能模块，包括机器人控制、传感器数据处理、路径规划、SLAM等，可以满足不同类型机器人的需求。同时，rosys还支持多种通信协议，如ROS、MQTT等，可以与不同平台和设备进行无缝集成，实现更灵活的机器人开发和控制。

### 开发流程

使用rosys进行机器人开发非常简单，只需要按照以下几个步骤即可：

1. 安装rosys：首先需要下载rosys的源代码，然后根据提供的文档进行安装配置，确保系统环境符合要求。
2. 编写应用代码：根据需求，编写机器人应用的Python代码，包括控制逻辑、传感器数据处理、路径规划等功能。
3. 集成NiceGUI：利用NiceGUI提供的图形界面组件，设计和构建交互式的机器人界面，实现用户与机器人的交互和控制。
4. 调试和测试：在开发过程中，可以通过调试工具和仿真环境对机器人应用进行测试和验证，确保其功能正常和稳定。
5. 部署应用：完成开发和测试后，可以将机器人应用部署到实际设备上，与机器人进行实时通信和控制，实现实际应用场景。

### 应用场景

rosys适用于各种移动机器人应用场景，包括智能服务机器人、自动导航车辆、智能家居设备等。通过rosys提供的功能模块和通信协议，开发者可以快速构建各种类型的机器人应用，实现自动化、智能化和互联化的机器人系统。

### 优势与不足

rosys作为一款基于web技术的Python机器人系统，具有以下优势：

1. 简单易用：rosys采用Python语言和NiceGUI界面框架，提供了简单易用的开发工具和接口，使开发者能够快速上手并构建机器人应用。
2. 可扩展性：rosys支持多种通信协议和功能模块，具有良好的可扩展性，可以适应不同类型机器人的需求并实现定制化开发。

然而，rosys也存在一些不足之处，如：

1. 生态系统较弱：目前rosys的用户群体相对较小，生态系统不够完善，缺乏更多开发资源和案例分享，限制了其进一步推广和应用。
2. 学习成本较高：虽然rosys提供了丰富的文档和教程，但对于初学者来说，仍需要一定的学习成本和时间来掌握其开发技术和工具。

### 结语

总的来说，rosys作为一个全新的Python机器人系统，具有简单易用、可扩展性等优势，适用于移动机器人开发和控制的各种场景。随着机器人技术的不断发展和应用需求的增加，rosys有望成为机器人开发领域的重要工具和平台，为机器人行业的发展做出更多贡献。

# AI 库一览：盘点 Python 在各个 AI 方向的库

**引言**

Python 凭借其易学性、可扩展性和丰富的库生态，在人工智能(AI)领域占据主导地位。本文将深入探讨 Python 在 AI 各个方向上常用的库，涵盖一整套工具，以帮助开发者构建尖端的 AI 解决方案。

**机器学习**

- **scikit-learn:** 广泛使用的机器学习库，提供各种分类、回归和聚类算法。
- **TensorFlow:** 谷歌开发的强大神经网络框架，支持深度学习和复杂模型的构建。
- **Keras:** 构建于 TensorFlow 之上的高级 API，简化了深度学习模型的开发。
- **PyTorch:** 由 Facebook 创建的另一个流行的深度学习框架，以其灵活性和可定制性而著称。
- **XGBoost:** 高效的可扩展性梯度提升算法，用于构建强大的决策树模型。

**计算机视觉**

- **OpenCV:** 广泛使用的图像处理库，提供图像操作、特征提取和计算机视觉算法。
- **Pillow:** 处理图像和像素操作的 Python 成像库。
- **PyTorch Vision:** 与 PyTorch 集成的计算机视觉库，提供常见模型和预训练权重。
- **imgaug:** 用于图像数据扩充的库，生成合成图像以提高模型鲁棒性。
- **Albumentations:** 另一个图像数据扩充库，提供多种变换和增强。

**自然语言处理**

- **NLTK:** 领先的自然语言处理(NLP)工具包，用于分词、词性标注和语义分析。
- **spaCy:** 高性能 NLP 库，提供语言模型、词向量和训练管道。
- **Gensim:** 用于主题建模、文本相似性和文档聚类的 NLP 库。
- **Hugging Face Transformers:** 提供预训练模型和工具，用于各种 NLP 任务，包括文本生成、机器翻译和问答。
- **TextBlob:** 用于文本情感分析和情感分析的简单易用的库。

**语音处理**

- **Librosa:** 用于音频和音乐处理的库，提供广泛的声音分析功能。
- **SpeechRecognition:** 支持语音识别和语音转文本的库。
- **PyAudio:** 用于音频输入和输出的跨平台库。
- **Wave:** 用于读取和写入 Wave 音频文件的库。
- **PySpeech:** 用于语音合成和文本转语音的库。

**数据科学**

- **NumPy:** 用于科学计算和线性代数的库。
- **SciPy:** 提供高级数学、优化和信号处理例程的库。
- **Pandas:** 用于数据操作和分析的库，支持数据框和时间序列。
- **Matplotlib:** 用于创建和操作静态、动画和交互式可视化的库。
- **Seaborn:** 基于 Matplotlib 构建的库，提供了高级统计可视化功能。

**强化学习**

- **Gym:** 由 OpenAI 开发的用于强化学习研究的环境集合。
- **Stable Baselines3:** 基于 TensorFlow 的强化学习算法库。
- **Ray RLlib:** 用于分布式强化学习的库，提供多种算法和工具。
- **Dopamine:** 谷歌开发的库，用于强化学习研究和生产环境。
- **OpenAI Baselines:** OpenAI 开发的用于强化学习基准测试的库。

**其他 AI 方向**

- **PyTorch Lightning:** 用于管理深度学习模型训练和评估的框架。
- **Prefect:** 用于构建和编排数据管道和机器学习工作流的库。
- **Modin:** 用于大规模数据分析的扩展 Pandas 库。
- **Dask:** 用于分布式计算和并行处理的库。
- **JupyterLab:** 用于交互式数据科学和可视化的集成开发环境(IDE)。

**总结**

Python 在 AI 领域强大的库生态系统使开发者能够快速有效地构建各种复杂的解决方案。这些库涉及机器学习、计算机视觉、自然语言处理、语音处理、数据科学和强化学习等各种方向。凭借 Python 的易用性和可扩展性，AI 开发者可以专注于创新，而不是重新发明轮子。

# 应用库

## EasyOCR

GitHub：[JaidedAI/EasyOCR：即用型 OCR，支持 80+ 种语言和所有流行的书写脚本，包括拉丁语、中文、阿拉伯语、梵文、西里尔文等。 (github.com)](https://github.com/JaidedAI/EasyOCR)

教程：[一个简单的OCR识别引擎，但是很强大，支持80+的语言，Star 22.3K+!（本文附带一个简单的开发教程DEMO） (qq.com)](https://mp.weixin.qq.com/s/5ORbLjcdmlvGZzRjiVXEoQ)

## surya：文档 OCR 工具包

GitHub：[VikParuchuri/surya：OCR、布局分析、阅读顺序、90+ 种语言的线路检测 (github.com)](https://github.com/VikParuchuri/surya)

## Marker：可以快速准确地将 PDF 转换为 Markdown

GitHub：https://github.com/VikParuchuri/marker

# 数据分析

## taipy：

Github 地址：https://github.com/Avaiga/taipy

---

Taipy 是一个强大的 Python 库，专为开发和部署数据驱动的应用程序而设计。它通过提供一套丰富的工具和组件，使开发者能够快速构建和维护复杂的业务逻辑和数据交互界面。无论是金融分析、供应链管理还是任何需要高度数据交互的应用，taipy 都能提供高效的解决方案。

### 安装

要开始使用 taipy，首先需要在 Python 环境中安装它。

可以通过 pip 命令轻松安装：

```bash
pip install taipy
```

确保 Python 版本至少为 3.7，因为 taipy 依赖于一些较新的 Python 特性。

### 特性

- **可视化编辑器**：提供一个直观的界面来设计和调整应用的布局和元素。
- **数据绑定**：允许开发者直接将界面组件与数据模型绑定，实现自动更新。
- **模块化开发**：支持模块化的开发方式，方便管理大型应用的不同部分。

### 基本功能

taipy 库主要为数据驱动的应用提供快速开发能力，包括构建用户界面、数据绑定和事件处理等

#### 创建界面

taipy 允许开发者通过定义布局描述来创建用户界面。布局使用简单的字符串格式，可以快速构建出包含多种元素的页面。

```python
from taipy.gui import Gui

# 创建GUI对象
gui = Gui()

# 添加页面和布局
gui.add_page(name="main_page", layout="""
# 使用Markdown定义界面元素
# 欢迎使用taipy
- 输入你的名字: <|input|>
- 你好, <|{name}|>
""")

# 运行GUI应用
gui.run()
```

在这个例子中，定义了一个包含文本输入和显示的简单界面。用户输入的内容将实时更新到屏幕上。

#### 数据绑定

taipy 强大的数据绑定功能允许开发者将界面组件直接与数据模型链接。这意味着当数据更新时，界面也会自动更新，无需额外的代码。

```python
from taipy.gui import Gui, state

gui = Gui()

# 定义状态变量
@state
def get_data():
    return {"name": "未命名"}

# 页面布局与状态绑定
gui.add_page(name="main_page", layout="""
# 更新名字
- 请输入你的名字: <|input value={name}|>
- 你好, <|{name}|>
""", data=get_data())

# 运行GUI应用
gui.run()
```

在此代码中，使用`@state`装饰器定义了一个名为`get_data`的函数，该函数返回包含名字的字典。这个状态与输入组件和显示文本绑定，因此用户的输入将实时反映在界面上。

#### 事件处理

taipy 还支持事件处理，使得开发者可以响应用户的操作，如按钮点击或输入更改，来执行特定的逻辑。

```python
from taipy.gui import Gui, state

gui = Gui()

# 状态和事件处理器
@state
def get_data():
    return {"counter": 0}

def increment_counter(data):
    data["counter"] += 1

# 页面布局和事件绑定
gui.add_page(name="counter_page", layout="""
- 当前计数: <|{counter}|>
- <|button text="增加" on_click=increment_counter|>
""", data=get_data())

# 运行GUI应用
gui.run()
```

这个例子创建了一个简单的计数器，每次用户点击“增加”按钮时，计数值就会增加。这通过`increment_counter`函数实现，该函数作为按钮的点击事件处理器。

### 高级功能

#### 自定义组件

Taipy 支持开发者创建自定义组件，使得可以根据特定需求设计独特的界面元素，提供更灵活的用户界面选项。

```python
from taipy.gui import Gui, Component

# 创建自定义组件
class CustomComponent(Component):
    def render(self, props):
        # 返回带有样式的HTML元素
        return f"<div style='background-color:{props.color};padding:10px;'>{props.text}</div>"

gui = Gui()

# 注册自定义组件
gui.add_custom_component("my_custom_component", CustomComponent())

# 使用自定义组件
gui.add_page(name="main_page", layout="""
## 使用自定义组件
- <|my_custom_component text="这是一个自定义组件!" color="lightblue"|>
""")

# 运行GUI应用
gui.run()
```

在这个例子中，定义了一个`CustomComponent`类，它接受颜色和文本作为属性，并渲染一个带有特定背景色和内填充的 HTML div 元素。这种方式可以让开发者在 taipy 应用中实现高度自定义的界面元素。

#### 异步数据处理

taipy 支持异步操作，使得应用可以处理耗时的数据操作而不阻塞用户界面，提升用户体验。

```python
from taipy.gui import Gui, state
import asyncio

gui = Gui()

# 定义异步函数获取数据
async def fetch_data():
    await asyncio.sleep(2)  # 模拟数据加载
    return "从服务器加载的数据"

# 使用状态管理异步数据
@state
async def get_data():
    return await fetch_data()

gui.add_page(name="main_page", layout="""
## 异步数据加载
- 数据加载中...
- <|{get_data()}|>
""")

# 运行GUI应用
gui.run()
```

在此代码示例中，使用`async`定义了异步函数`fetch_data`，该函数模拟了一个耗时的数据加载过程。通过`@state`装饰器，将其与 GUI 状态绑定，实现了数据的异步加载和显示。

#### 高级数据绑定

taipy 还提供高级数据绑定选项，允许开发者控制数据的更新和渲染方式，适用于处理复杂的数据逻辑和大量数据的情况。

```python
from taipy.gui import Gui, state

gui = Gui()

# 定义复杂数据处理逻辑
@state
def complex_data_operations():
    large_dataset = [i**2 for i in range(10000)]
    return sum(large_dataset)

gui.add_page(name="main_page", layout="""
## 复杂数据处理展示
- 计算结果: <|{complex_data_operations()}|>
""")

# 运行GUI应用
gui.run()
```

这个示例中，定义了一个执行复杂数据操作的函数，该函数处理一个大数据集并计算其元素的平方和。通过 taipy 的高级数据绑定，这些计算可以在后台执行，而不会影响界面的响应性。

### 实际应用场景

Taipy 被设计用于各种数据密集型和交互式应用场景。

#### 财务报告系统

在财务部门，经常需要生成动态的报告来分析各种财务指标。使用 taipy，可以创建一个用户友好的界面，允许非技术用户轻松输入数据和参数，实时查看财务报告。

```python
from taipy.gui import Gui, state
import pandas as pd

gui = Gui()

# 加载财务数据
@state
def load_financial_data():
    return pd.read_csv("financial_data.csv")

# 定义页面布局
gui.add_page(name="financial_report", layout="""
## 财务报告
- 选择年份: <|dropdown options=['2020', '2021', '2022'] value='2021'|>
- <|table data={load_financial_data()}|>
""")

# 运行GUI应用
gui.run()
```

这个示例展示了如何加载和展示一个财务数据表，并允许用户通过下拉菜单选择不同的年份来查看对应的数据。

#### 教育工具

教育机构可以利用 taipy 开发交互式学习工具，帮助学生通过可视化的方式理解复杂的概念。

```python
from taipy.gui import Gui

gui = Gui()

# 界面定义
gui.add_page(name="math_tool", layout="""
## 数学可视化工具
- 输入一个数字: <|input type='number' value=10|>
- 计算平方: <|{int(value)**2}|>
""")

# 运行GUI应用
gui.run()
```

在这个简单的数学工具中，学生可以输入一个数字，界面会实时显示该数字的平方，这是一个很好的方式来帮助学生学习和实验基本的数学运算。

#### 健康监测系统

taipy 可用于开发健康监测系统，例如，追踪用户的健康数据并提供实时反馈。

```python
from taipy.gui import Gui, state
import pandas as pd

gui = Gui()

# 假设有一个包含用户健康数据的CSV文件
@state
def health_data():
    return pd.read_csv("health_metrics.csv")

gui.add_page(name="health_monitor", layout="""
## 健康监测仪表板
- <|line_chart data={health_data()} x='date' y='heart_rate' title='心率变化'|>
""")

# 运行GUI应用
gui.run()
```

这个示例中，通过一个折线图展示了用户的心率变化，适用于医疗专业人员和患者监控健康状况。

### 总结

在本文中，深入探讨了 Python 的 taipy 库，它是一个强大的工具，专门用于快速开发数据驱动的应用。taipy 提供了一系列功能，包括简便的界面构建、灵活的数据绑定以及高效的事件处理机制。通过实际的示例，展示了如何使用 taipy 来创建互动式用户界面，实现条件渲染、动态布局更新和自定义组件等高级功能。此外，还探索了 taipy 在不同领域如财务分析、教育工具和健康监测系统中的实际应用场景，证明了它在各种行业中的实用性和效率。总的来说，taipy 是一个非常适合开发复杂和高性能数据驱动应用的库，无论是对于初学者还是经验丰富的开发者都是一个优秀的选择。

# 深度学习

[强化学习 100 题 (koki-saitoh.com)](https://p100.koki-saitoh.com/zh-CN)

# AI|科学计算|机器学习

## Gradio：快速构建机器学习 Web 应用

项目地址：**https://github.com/gradio-app/gradio**

在人工智能领域，构建一个漂亮的Web应用来展示模型效果是一件非常耗时耗力的工作。传统的开发方式需要掌握JavaScript、CSS等前端技术，甚至还需要搭建服务器。这对于许多专注于机器学习的开发者来说，无疑是一项巨大的挑战。

非常棒的开源项目 - `Gradio`，能够快速构建出美观实用的Web应用，无需任何前端开发经验。

### 项目简介

`Gradio`是一个用于构建机器学习和数据科学演示及Web应用的开源Python库，它可以让我们轻松地创建一个漂亮的用户界面，使模型和算法能够被更多人轻松使用。

`Gradio`的目标是让部署机器学习模型变得简单易用。通过使用Gradio，我们可以为您的模型创建一个交互式的Web应用程序，用户可以通过拖放图片、粘贴文本或录制声音等方式与您的模型进行交互。

此外，`Gradio`还支持多种输入/输出格式，并且可以自动生成外部访问链接，让我们能够轻松地与他人分享我们的成果。

### 功能特性

- 自动化生成交互式Web页面：使用Gradio，只需在原有的代码中增加几行，就可以自动化生成一个交互式的Web页面。
- 支持多种输入/输出格式：Gradio支持图像、文本等多种输入/输出格式，方便用户与模型进行交互。
- 一键生成外部访问链接：通过launch(share=True)命令，可以轻松生成一个外部访问链接，方便与他人分享我们的成果。
- 兼容性良好：Gradio支持Python3.7及更高版本，兼容多种操作系统，如Windows、macOS和Linux等。

### 安装部署

安装之前要确保python版本大于 3.8。

可以使用pip进行安装

```
pip install gradio
```

然后就可以开始尝试使用了。

### 使用体验展示

第一个小demo

```
import gradio as gr

def greet(name, intensity):
    return "Hello " * intensity + name + "!"

demo = gr.Interface(
    fn=greet,
    inputs=["text", "slider"],
    outputs=["text"],
)

demo.launch()
```

运行之后，在浏览器打开`http://localhost:7860/`即可访问web程序

![图片](./Python框架.assets/640-1716713453229-11.gif)

如果你想将这个demo分享给别人，可以使用launch(share=True)命令

```
import gradio as gr

def greet(name):
    return "Hello " + name + "!"

demo = gr.Interface(fn=greet, inputs="textbox", outputs="textbox")
    
demo.launch(share=True) 
```

运行时候，就会自动生成一个URL链接，类似`https://a23dsf231adb.gradio.live`，可以将这个链接发给别人进行访问使用。

当然你也可以将应用部署到云服务器。

另外，官方还提供了几个基于gradio的项目应用，可以参考学习。

小结一下，Gradio是一个非常实用的机器学习 Web 应用开发项目，使用简单易用，功能强大，可以帮助我们快速构建各种类型的应用。

## ScrapeGraphAI：开源的大语言模型爬虫，只要说出需求就会自动全网抓取想要的信息

**GitHub 项目链接**：https://github.com/VinciGit00/Scrapegraph-ai

文档：https://scrapegraph-ai.readthedocs.io/en/latest/

### 项目简介

ScrapeGraphAI 是一个基于 Python 的 Web 抓取库，使用大型语言模型和直接图逻辑来创建针对网站、文档和 XML 文件的抓取流程。用户只需指定想要抽取的信息，该库便能自动完成抓取任务。该项目强调易用性和高效性，支持通过命令行界面或代码实现灵活的数据抓取，并提供丰富的文档支持，帮助用户快速上手。

### 快速安装

这是 Scrapegraph-ai 的官方 PyPI 页面的参考信息

https://pypi.org/project/scrapegraphai/

```bash
pip install scrapegraphai
```

你还需要安装 Playwright 用于基于 JavaScript 的网页抓取：

```bash
playwright install
```

注意：建议在虚拟环境中安装该库，以避免与其他库冲突

### DEMO

https://scrapegraph-ai-demo.streamlit.app/

![image-20240508192906757](./Python框架.assets/image-20240508192906757.png)

### 使用

你可以使用 SmartScraper 类通过提示从网站中提取信息。

SmartScraper 类是一个直接图实现，使用了网页抓取流程中最常见的节点。更多信息请查看文档。

https://scrapegraph-ai.readthedocs.io/en/latest/

#### 案例 1：使用 Ollama 提取信息记得要单独下载 Ollama 的模型！

```python
from scrapegraphai.graphs import SmartScraperGraph

graph_config = {
    "llm": {
        "model": "ollama/mistral",
        "temperature": 0,
        "format": "json",  # Ollama needs the format to be specified explicitly
        "base_url": "http://localhost:11434",  # set Ollama URL
    },
    "embeddings": {
        "model": "ollama/nomic-embed-text",
        "base_url": "http://localhost:11434",  # set Ollama URL
    }
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the articles",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```

#### 案例 2：使用 Docker 提取信息

注意：在使用本地模型之前，记得创建 Docker 容器！

```bash
docker-compose up -d

docker exec -it ollama ollama pull stablelm-zephyr
```

你可以使用 Ollama 上可用的模型或者你自己的模型，而不是使用 stablelm-zephyr。

```python
from scrapegraphai.graphs import SmartScraperGraph

graph_config = {
    "llm": {
        "model": "ollama/mistral",
        "temperature": 0,
        "format": "json",  # Ollama needs the format to be specified explicitly
        # "model_tokens": 2000, # set context length arbitrarily
    },
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the articles",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```

#### 案例 3：使用 OpenAI 模型提取信息

```python

from scrapegraphai.graphs import SmartScraperGraph
OPENAI_API_KEY = "YOUR_API_KEY"

graph_config = {
    "llm": {
        "api_key": OPENAI_API_KEY,
        "model": "gpt-3.5-turbo",
    },
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the articles",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```

#### 案例 4：使用 Groq 提取信息

```python

from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

groq_key = os.getenv("GROQ_APIKEY")

graph_config = {
    "llm": {
        "model": "groq/gemma-7b-it",
        "api_key": groq_key,
        "temperature": 0
    },
    "embeddings": {
        "model": "ollama/nomic-embed-text",
        "temperature": 0,
        "base_url": "http://localhost:11434",
    },
    "headless": False
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the projects with their description and the author.",
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```

#### 案例 5：使用 Azure 提取信息

```python

from langchain_openai import AzureChatOpenAI
from langchain_openai import AzureOpenAIEmbeddings

lm_model_instance = AzureChatOpenAI(
    openai_api_version=os.environ["AZURE_OPENAI_API_VERSION"],
    azure_deployment=os.environ["AZURE_OPENAI_CHAT_DEPLOYMENT_NAME"]
)

embedder_model_instance = AzureOpenAIEmbeddings(
    azure_deployment=os.environ["AZURE_OPENAI_EMBEDDINGS_DEPLOYMENT_NAME"],
    openai_api_version=os.environ["AZURE_OPENAI_API_VERSION"],
)
graph_config = {
    "llm": {"model_instance": llm_model_instance},
    "embeddings": {"model_instance": embedder_model_instance}
}

smart_scraper_graph = SmartScraperGraph(
    prompt="""List me all the events, with the following fields: company_name, event_name, event_start_date, event_start_time,
    event_end_date, event_end_time, location, event_mode, event_category,
    third_party_redirect, no_of_days,
    time_in_hours, hosted_or_attending, refreshments_type,
    registration_available, registration_link""",
    source="https://www.hmhco.com/event",
    config=graph_config
)
```

#### 案例 6：使用 Gemini 提取信息

```python
from scrapegraphai.graphs import SmartScraperGraph
GOOGLE_APIKEY = "YOUR_API_KEY"

# Define the configuration for the graph
graph_config = {
    "llm": {
        "api_key": GOOGLE_APIKEY,
        "model": "gemini-pro",
    },
}

# Create the SmartScraperGraph instance
smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the articles",
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```

以上三个案例的输出都将是一个包含提取信息的字典，例如：

```json
{
	"titles": ["Rotary Pendulum RL"],
	"descriptions": [
		"Open Source project aimed at controlling a real life rotary pendulum using RL algorithms"
	]
}
```

## 1. LiteLLM-让你随时随地调用 LLM

LiteLLM 作为一个开源库，将 LLM 模型操控变得简单方便，无需对特定模型提供商产生依赖。

无论底层 LLM 的差异如何，LiteLLM 都能提供统一格式（OpenAI 格式）的输入和输出，对开发人员来说更省心，方便在大型语言模型快速变化的环境中迅速适应。

LiteLLM 除了灵活性，更注重效率和控制，例如可流式响应、映射异常至 OpenAI 格式等强大功能，确保你的 AI 探索不会带来意外的费用。

LitteLLM 支持的一些 LLM 模型如下：

![图片](./Python框架.assets/640-1714240436850-709.webp)

**3. Taipy-为数据应用构建前端和后端**

Taipy 是一款开源的 Python 库，可以帮助数据科学家无需精通 web 堆栈工具，就能为机器学习产品构建交互式的 Web UI。Taipy 能绑定变量和表达式至 UI 的视觉组件状态，大大减少了繁琐的代码工作。

![图片](./Python框架.assets/640-1714240512358-712.gif)

## MLX-在苹果芯片上进行机器学习

MLX 库是为在 Apple 芯片上进行机器学习而设计的数组框架。MLX 的设计目标是保持一致性，其 Python API 与 NumPy 的接口非常类似，同时也提供了一个功能齐全的 C++ API。MLX 最大的亮点是其统一的内存模型，这给机器学习的研究带来了极大的便利性。

## Unstructured-文本预处理的终极工具包

Unstructured 库是一组预处理文本文档的开源组件，能够进行 PDF、HTML 文件、Word 文档甚至图片的文本预处理。

## ZenML 和 AutoMLOps-MLOps 流程的便捷构建工具

ZenML 和 AutoMLOps 作为两款重要的工具，诠释了 MLOps 流程对成功的机器学习项目的重要性。它们的出现使得机器学习的成功不仅仅取决于项目的成熟度，而且运行效率及管理问题也得以解决。

## WhisperX - 语音识别的新星

WhisperX 是 OpenAI 的一个重要项目，它是一个语音识别的模型，具有独特的声音活动检测预处理功能。WhisperX 可以进行并行处理，从而实现批量推理。

## AutoGen-LLM 协同合作套件

AutoGen 库使得多个代理可以一同进行工作，提供出色的聊天方案。开发者可以通过 AutoGen，像建设自己的软件开发团队一样，为各种角色引入更多的代理。

## Guardrails-推动 LLM 按照你的需求行事

Guardrails 库使你可以方便地定义、校验、修正大型语言模型的输出，让 LLM 变得更为可靠且效果更好。

## Temporian-为预处理时间数据而设计的"pandas"

Temporian 库是一个专门为处理时间数据而设计的高效、易用的工具，它采用 C++进行高性能计算，让时间序列操作变得更为安全、便捷，且执行效率极高。

## NumPy

- **领域**：科学计算
- **描述**：NumPy 提供高效的多维数组操作和数学函数，用于数据分析、统计学、物理学等领域。

## TensorFlow

- **领域**：机器学习
- **描述**：TensorFlow 是一个流行的机器学习框架，支持各种深度学习算法，如神经网络、决策树、支持向量机等。

## PyTorch

- **领域**：机器学习
- **描述**：PyTorch 采用动态图计算模式，易用且灵活，用于计算机视觉、自然语言处理、强化学习等领域。

## tqdm

- **领域**：进度条显示
- **描述**：tqdm 是一个用于在长循环中添加进度提示信息的工具库，方便用户跟踪任务进度。

## Gradio：构建交互式界面的简单而强大的 Python 库

Gradio 是一个用于构建交互式界面的 Python 库，它可以帮助开发人员快速创建和部署机器学习模型。下面是对 Gradio 的详细介绍，包括安装过程、使用方法、示例以及优缺点的分析等。

### 1. 简介：

Gradio 提供了一种简单而强大的方式来构建基于 Web 的界面，以便用户可以与机器学习模型进行交互。它支持各种输入和输出类型，包括文本、图像、音频和视频。Gradio 使得展示和共享模型变得更加容易，无需编写大量的代码或处理复杂的前端开发。

### 2. 安装：

要安装 Gradio，可以使用 pip 命令：

```bash
pip install gradio
```

Gradio 依赖于 Flask 和 Werkzeug 库，这些库会在安装时自动安装。

### 3. 使用方法：

使用 Gradio 非常简单。首先，导入必要的库：

```python
import gradio as gr
```

然后，定义一个函数，该函数将用于传递输入并生成输出。这个函数可以是任何函数，只要它接受输入并返回输出即可。

接下来，使用`gr.Interface`类创建一个交互界面，并指定输入和输出的类型：

```python
def greet(name):
    return f"Hello, {name}!"

iface = gr.Interface(fn=greet, inputs="text", outputs="text")
```

在这个例子中，我们定义了一个简单的问候函数，它接受一个文本输入，并返回一个问候语。

最后，使用`launch`方法启动 Gradio 界面：

```python
iface.launch()
```

这将在本地启动一个 Web 服务器，并显示一个交互式界面，用户可以在其中输入文本并查看输出。

![图片](./Python框架.assets/640-1714152826004-140.webp)

### 4. 示例：

下面是一个更复杂的示例，展示了如何使用 Gradio 构建一个图像分类器的界面：

```python

import gradio as gr
import tensorflow as tf
import numpy as np


# 加载模型
model = tf.keras.applications.MobileNetV2()
labels = ['cat', 'dog']


def classify_image(image):
    image = image.reshape((1, 224, 224, 3))
    image = tf.keras.applications.mobilenet.preprocess_input(image)
    predictions = model.predict(image)
    return labels[np.argmax(predictions)]


iface = gr.Interface(
    fn=classify_image,
    inputs="image",
    outputs="text",
    capture_session=True,
    interpretation="default"
)


iface.launch()
```

这个示例使用了 TensorFlow 的 MobileNetV2 模型来进行图像分类。用户可以通过界面上传图像，并查看模型预测的结果。

### 5. 优缺点分析：

#### Gradio 的优点包括：

- 简单易用：Gradio 提供了一个简洁的 API，使得构建交互式界面变得非常容易。

- 多样化的输入输出支持：Gradio 支持多种输入和输出类型，包括文本、图像、音频和视频，使得它适用于各种机器学习应用。- 快速部署：Gradio 允许开发人员快速部署模型，并与用户进行交互，无需进行繁琐的前端开发。

#### Gradio 的一些缺点包括：

- 功能相对较简单：Gradio 适合构建简单的交互式界面，但对于复杂的界面需求可能不够灵活。

- 缺乏高级定制选项：Gradio 提供了一些基本的界面定制选项，但对于高级定制需求可能不够满足。

### 6、总结

综上所述，Gradio 是一个方便快捷的工具，可用于构建交互式界面，使得机器学习模型的展示和共享变得更加容易。通过 Gradio，开发人员可以快速将模型部署并与用户进行交互，无需编写大量的代码或处理复杂的前端开发。然而，对于复杂的界面需求或高级定制选项，可能需要考虑其他工具或框架。

# 视频编辑

## MoviePy：让视频编辑变得轻松而有趣

### 什么是 MoviePy？

MoviePy 是一个用 Python 编写的视频编辑库，它可以处理视频剪辑、合成、处理等各种任务。它背后的魔法来自于两个强大的工具：FFmpeg，一个处理多媒体数据的开源库；以及 NumPy，一个强大的科学计算库。MoviePy 让你可以用几行代码完成从视频剪辑到色彩调整的所有工作。

### 为什么选择 MoviePy？

- **简单易用**：MoviePy 提供了一个直观的 API，即使是初学者也能快速上手。
- **功能强大**：支持多种视频格式，可以进行复杂的视频处理操作。
- **高效性能**：MoviePy 在处理大文件时表现出色，不会消耗太多系统资源。

### 一、MoviePy 库：点燃你的视频编辑激情

MoviePy 库是一个强大的视频处理库，它能够帮助你实现各种视频编辑任务。无论是视频剪辑、视频合成、视频特效还是视频转码，MoviePy 库都能让你的视频编辑过程变得轻松而有趣。作为一款受欢迎的视频处理工具，MoviePy 库为用户提供了丰富的功能和易于使用的接口，让你的视频编辑更加灵活、高效和专业。

### 二、轻松安装：拥有强大的 MoviePy 库

安装 MoviePy 库非常简单，请按照以下步骤进行操作：

1. 首先，确保你已经安装了 Python 和 pip 工具。
2. 打开命令行终端，运行命令：`pip install moviepy`。
3. 等待安装完成后，你就可以在你的项目中使用 MoviePy 库了。

### 基本概念

在使用 MoviePy 之前，我们需要了解几个基本概念：

- **视频文件**：包含连续图像和可能的声音的文件。
- **剪辑**：视频文件中的一个片段。
- **组合**：将多个剪辑合并成一个视频的过程。

### 三、愉快的视频编辑之旅：使用 MoviePy 库

MoviePy 库提供了丰富的功能和工具，以下是使用 MoviePy 库的基本步骤：

**1.加载视频：** 使用`VideoFileClip()`函数加载视频文件。

```python
from moviepy.editor import VideoFileClip

video = VideoFileClip('input.mp4')
```

**2.视频剪辑：** 使用`subclip()`函数剪辑视频。

```python
trimmed_video = video.subclip(10, 20)  # 剪辑第10秒到第20秒的视频
```

**3.视频合成：** 使用`concatenate_videoclips()`函数合成视频。

```python
final_video = concatenate_videoclips([trimmed_video, video])  # 合成剪辑后的视频和原视频

# 将两个视频片段合并成一个：
from moviepy.editor import VideoFileClip, CompositeVideoClip, concatenate_videoclips

# 加载视频文件
clip1 = VideoFileClip("video1.mp4")
clip2 = VideoFileClip("video2.mp4")

# 合并视频
final_clip = concatenate_videoclips([clip1, clip2])

# 写入合并后的视频
final_clip.write_videofile("combined_video.mp4")
```

**4.视频特效：** 使用`fx()`函数为视频添加特效。

```python
final_video_with_effects = final_video.fx(vfx.invert_colors)  # 添加颜色反转效果


# 可以改变视频的亮度和对比度。下面的例子展示了如何实现这一效果：
from moviepy.editor import VideoFileClip, ColorClip, concatenate_videoclips

# 加载视频文件
video = VideoFileClip("example_video.mp4")

# 应用特效
brightened = video.fx(vfx.color, 1.2)  # 增加亮度
contrasted = video.fx(vfx.color, 1.5, 0.5)  # 增加对比度

# 合并特效视频
final_clip = concatenate_videoclips([brightened, contrasted])

# 写入最终视频
final_clip.write_videofile("special_effect_video.mp4")
```

**4.1 添加文本**

为视频添加文本也非常简单：

```python
from moviepy.editor import TextClip, CompositeVideoClip

# 创建文字剪辑
txt_clip = (TextClip("Hello, MoviePy!", fontsize=70, color='white')
            .set_position('center')
            .set_duration(10))

# 加载视频文件
video = VideoFileClip("example_video.mp4")

# 将文字剪辑叠加到视频上
final_clip = CompositeVideoClip([video, txt_clip])

# 写入最终视频
final_clip.write_videofile("text_video.mp4")
```

**4.2 处理音频**

MoviePy 不仅限于视频，你还可以编辑视频中的音频：

```python
pythonCopy codeaudio = clip.audio # 获取视频的音频部分
audio = audio.volumex(0.5) # 将音量减半
clip = clip.set_audio(audio) # 将处理后的音频重新设置回视频
```

**5.导出保存视频：** 使用`write_videofile()`函数导出保存视频。

```python
final_video_with_effects.write_videofile('output.mp4')
```

### 四、优缺点分析

优点：

- 提供了丰富的视频处理功能，包括剪辑、合成、特效等。
- 简单而强大的接口，使视频编辑变得容易上手。
- 高效的处理速度，可以处理大型视频文件。
- 良好的社区支持和文档资料。

缺点：

- 部分高级功能可能需要更深入的了解。
- 与一些其他库或平台的兼容性可能存在问题。

### 五、应用场景

MoviePy 库适用于各种视频处理和视频编辑的应用场景，包括但不限于以下几个方面：

- 个人视频剪辑和编辑
- 广告和营销视频制作
- 视频特效和动画制作
- 社交媒体视频编辑和发布

### 六、总结

MoviePy 库作为一款功能强大的视频处理库，带给用户丰富的视频编辑功能和愉快的创作体验。通过简单的安装和上手步骤，你可以快速掌握 MoviePy 库，提升你的视频编辑技能。不论是剪辑、合成、特效还是转码，MoviePy 库都轻松实现，并让视频编辑过程变得有趣。

# 游戏

## Python 游戏脚本神器：PocketPy，开源 Python 解释器，轻松游戏脚本编写

**项目地址**：https://github.com/pocketpy/pocketpy

### 简介

PocketPy 是一个开源的 Python 解释器，其代码只有一个文件，用于游戏脚本编写。它的设计目标是简单、轻量且易于集成到各种游戏引擎中。由于其轻量级和易用性，PocketPy 在游戏开发领域备受欢迎。

### 特点

- 单文件设计：PocketPy 的代码全部都在一个文件中，这使得它非常容易集成到游戏中，无需复杂的配置和安装过程。
- Python 解释器：PocketPy 支持 Python 语言的语法和特性，开发者可以使用 Python 语言来编写游戏脚本，这使得游戏逻辑的实现更加灵活和高效。
- 游戏脚本编写：PocketPy 专注于游戏脚本的编写，提供了许多游戏开发中常用的功能和工具，开发者可以轻松地在游戏中实现复杂的逻辑和交互。

### 安装

PocketPy 的安装非常简单，只需要将其代码文件拷贝到游戏项目中即可开始使用。由于其轻量级和简洁的设计，无需进行复杂的配置和依赖安装。

### 使用

开发者可以直接在游戏项目中使用 PocketPy 来编写游戏脚本。PocketPy 提供了丰富的 API 和工具，使得游戏脚本的编写变得简单而灵活。开发者可以利用 Python 语言的特性来实现游戏中的各种逻辑和交互，从而提高游戏开发的效率和灵活性。

### 兼容性

PocketPy 具有良好的兼容性，可以轻松地集成到各种游戏引擎中，如 Unity、Unreal Engine 等。由于其单文件设计和简洁的代码，可以适配不同的开发环境和平台，使得其在游戏开发中具有广泛的适用性。

### 社区支持

PocketPy 拥有一个活跃的开发者社区，开发者可以在社区中获取到各种问题的解答和技术支持。同时，社区中也有许多丰富的游戏脚本资源和示例代码，可以帮助开发者更好地利用 PocketPy 来开发游戏。

### 结语

总而言之，PocketPy 作为一个开源的 Python 解释器，为游戏脚本编写提供了简单而高效的方式。其简洁的设计和丰富的功能使得其在游戏开发中具有很大的潜力和市场需求。

## pyglet/pyglet：Python的跨平台GUI窗口和多媒体库

GitHub：https://github.com/pyglet/pyglet

pyglet 是 Python 的跨平台窗口和多媒体库，用于开发游戏和其他视觉丰富的应用程序。

> Pyglet是一个用于Python的跨平台GUI窗口和多媒体库，用于开发游戏和其他视觉丰富的应用程序。它提供了一组强大的工具和功能，帮助开发人员创建具有交互性和视觉吸引力的应用程序。本文将详细介绍Pyglet的主要功能和用途。

### 1. 简介

Pyglet是一个免费的、开源的Python库，旨在简化游戏和多媒体应用程序的开发过程。它基于OpenGL标准，提供了一个高级的、简单易用的接口，使开发人员能够轻松地创建跨平台的应用程序。

![image-20240516210126165](./Python框架.assets/image-20240516210126165.png)

### 2. 特点

Pyglet具有许多强大的特性，使其成为开发游戏和多媒体应用程序的理想选择。

- **窗口管理**：Pyglet提供了一个方便的窗口管理系统，可以轻松创建、管理和渲染多个窗口。开发人员可以控制窗口的大小、位置和样式，并处理窗口事件，例如鼠标和键盘输入。
- **图形渲染**：Pyglet支持基于OpenGL的图形渲染，可以绘制2D和3D图形。它提供了一个高级的图形接口，可以绘制形状、图像、文本和动画。开发人员可以自定义渲染管道，实现高度可定制的图形效果。
- **音频支持**：Pyglet支持音频播放和处理，包括音乐、声音效果和音频流。它提供了一个简单的接口，可以加载、播放和控制音频文件。开发人员可以创建动态音效、背景音乐和交互式音频体验。
- **多媒体资源管理**：Pyglet提供了一个资源管理系统，用于加载和管理各种多媒体资源，如图像、音频和字体。这简化了资源加载的过程，并提供了高效的资源管理。
- **用户输入处理**：Pyglet可以轻松处理用户输入，包括键盘、鼠标和游戏手柄。它提供了一组方便的工具和事件处理器，使开发人员能够响应用户的输入，实现交互性和游戏控制。
- **跨平台支持**：Pyglet是一个跨平台库，可以在多个操作系统上运行，包括Windows、macOS和Linux。这使开发人员能够开发一次，部署到多个平台上，大大简化了跨平台应用程序的开发过程。

![image-20240516210156401](./Python框架.assets/image-20240516210156401.png)

### 3. 使用示例

下面是一个简单的Pyglet应用程序示例，展示了如何创建一个窗口并在窗口中绘制一个图像：

```python
import pyglet

window = pyglet.window.Window()

@window.event
def on_draw():
    window.clear()
    image = pyglet.resource.image('image.png')
    image.blit(0, 0)

pyglet.app.run()
```

这个示例创建了一个窗口，然后在窗口中绘制了当前工作目录下一个名为'image.png'的图像，。通过使用Pyglet的资源管理器，我们可以轻松加载和使用图像资源。

### 4. 应用范围和案例

Pyglet适用于广泛的应用领域，特别是游戏开发和视觉化应用程序。开发者可以利用Pyglet的图形渲染和用户输入处理功能，创建各种类型的游戏，包括2D平台游戏、射击游戏和角色扮演游戏。

此外，Pyglet还可用于创建数据可视化工具、模拟器、交互式教育应用程序等。其跨平台支持使开发者能够在不同的操作系统上发布和使用这些应用程序。

### 结论

Pyglet是一个功能强大的跨平台窗口和多媒体库，为Python开发者提供了创建游戏和其他视觉丰富应用程序的便捷工具。它的简单易用性、图形渲染和音频支持等特性使开发过程更加高效和愉悦。如果你是一个Python开发者，并且对游戏开发或视觉化应用程序感兴趣，Pyglet是一个值得考虑的选择，它将帮助你快速实现你的创意并构建出色的应用程序。

# 游戏引擎

## 像素风游戏引擎 Pyxel：快速开发复古小游戏，助你重温经典

**项目地址**：https://github.ocm/kitao/pyxel

### 前言

在游戏领域，像素风游戏一直占有一席之地。它的画面简单、怀旧，但仍然能够带给玩家无限的乐趣。Pyxel 是一个为 Python 开发的复古游戏引擎，它提供了丰富的功能，帮助开发者轻松创建像素风游戏。本文将详细介绍 Pyxel 的特点、工作原理以及使用方法。

![图片](./Python框架.assets/640-1714237788377-551.gif)

### Pyxel 的特点

- **简单易用:** Pyxel 的 API 设计非常简洁，即使是 Python 初学者也能轻松上手。

- **跨平台支持:** Pyxel 支持 Windows、Mac 和 Linux 系统，开发者可以轻松地在不同平台上运行和部署游戏。

- **强大的图形功能:** Pyxel 提供了丰富的图形功能，包括精灵、位图、颜色调色板等，支持创建出各种各样的像素风图像。

- **音乐和音效支持:** Pyxel 支持加载和播放音乐和音效，让游戏更加生动有趣。

- **丰富的示例和文档:** Pyxel 提供了大量的示例和文档，可以帮助开发者快速入门并创建出自己的游戏。

  ![图片](./Python框架.assets/640-1714237788377-552.webp)

### Pyxel 的工作原理

Pyxel 的工作原理非常简单。它首先在内存中创建一个虚拟屏幕，然后使用像素来绘制图像。当游戏运行时，Pyxel 会不断地更新虚拟屏幕上的内容，并将其显示在玩家的显示器上。

### Pyxel 的使用方法

1. **安装 Pyxel:** Pyxel 可以从其官方网站下载安装。安装完成后，您可以在命令行中键入 `pyxel` 来启动 Pyxel。

2. **创建新游戏:** 在 Pyxel 中创建一个新游戏非常简单。您只需要键入 `pyxel.init(width, height)` 来创建一个指定宽高的游戏窗口。

3. **添加精灵:** 精灵是 Pyxel 中的基本图形元素。您可以使用 `pyxel.Sprite(x, y, w, h)` 来创建一个精灵。

4. **绘制图像:** 您可以使用 `pyxel.fill()` 和 `pyxel.line()` 等函数来绘制图像。

5. **添加音乐和音效:** Pyxel 支持加载和播放音乐和音效。您可以使用 `pyxel.load()` 和 `pyxel.play()` 函数来加载和播放音乐和音效。

6. **游戏循环:** Pyxel 提供了一个游戏循环函数 `pyxel.run()`。您可以使用该函数来定义游戏的主循环。在主循环中，您可以更新游戏状态、绘制图像并处理玩家的输入。

   ![图片](./Python框架.assets/640-1714237788377-553.gif)

### Pyxel 的示例

Pyxel 提供了大量的示例，可以帮助开发者快速入门并创建出自己的游戏。您可以从 Pyxel 的官方网站下载这些示例。

### pyxel 的应用场景

pyxel 适用于很多不同的应用场景，包括但不限于：

- **游戏开发**：pyxel 可以用于开发 8 位风格的游戏，包括动作游戏、冒险游戏、益智游戏等。

- **学习教育**：pyxel 简单易用的特点使得它成为学习游戏开发的理想选择，可以帮助初学者快速上手游戏开发。

- **创意设计**：pyxel 可以用于创作游戏原型或动画等创意作品，通过 pyxel 的丰富功能，能够让创作者更容易地表达自己的创意。

  ![图片](./Python框架.assets/640-1714237788378-554.gif)

### 结语

Pyxel 是一个功能强大、简单易用的像素风游戏引擎。它可以帮助开发者轻松创建出各种各样的像素风游戏。如果您有兴趣创建像素风游戏，那么 Pyxel 是一个非常不错的选择。

# 嵌入式/物联网

## MicroPython：Python 嵌入式开发利器，让嵌入式系统开发更简单

**项目地址**：https://github.com/micropython/micropython

### 简介

MicroPython 是一个在微控制器和受限系统上运行的精简高效的 Python 解释器。它使用 Python 3 语言规范，并为嵌入式环境做了优化，使得开发人员能够利用 Python 的简洁和易用性来开发嵌入式系统。MicroPython 的源代码托管在 GitHub 上，地址为：https://github.com/micropython/micropython，以下将详细介绍MicroPython的特点、优势以及如何使用。

### MicroPython 的特点

- **精简高效**：MicroPython 为开发者提供了一个在资源受限的嵌入式系统上运行 Python 的解决方案。它的设计目标是尽可能地减小内存占用和运行开销，同时保持 Python 的简洁和易用性。
- **支持多种微控制器**：MicroPython 已经针对多种微控制器开发了支持包，包括一些常见的硬件平台，如 Arduino 和 ESP8266。这使得开发者可以在不同的硬件平台上使用 MicroPython 来进行开发。
- **丰富的库支持**：MicroPython 提供了丰富的标准库和第三方库支持，能够满足开发者在嵌入式系统上的各种需求。这些库包括网络通信、文件操作、传感器控制等功能。
- **易于移植**：MicroPython 的代码基于 MIT 许可证开放源代码，可以方便地移植到不同的硬件平台上。这使得开发者可以根据自己的需求将 MicroPython 移植到自己的项目中。

### MicroPython 的优势

1. **简洁易用**：MicroPython 使用 Python 3 语言规范，具有与标准 Python 一致的语法和功能。这使得开发者可以直接使用 Python 中的语法和 API 来开发嵌入式系统，无需学习额外的语言和工具。
2. **快速迭代**：MicroPython 提供了交互式开发环境，可以通过串口连接直接对硬件进行操作和调试，加快了开发和调试的速度。这对于嵌入式系统的开发来说非常重要，能够大大缩短开发周期。
3. **丰富的生态**：MicroPython 拥有丰富的社区支持和活跃的开发者社区，可以在社区中获取到大量的技术支持和资源。此外，MicroPython 还支持 Python 标准库和一些第三方库，为开发者提供了更多的选择和方便。
4. **开源免费**：MicroPython 的代码基于 MIT 许可证开源，可以免费使用和修改。这对于一些商业项目来说非常有吸引力，能够节省大量的开发成本。

### 如何使用 MicroPython

1. **安装 MicroPython**：MicroPython 的安装非常简单，开发者只需要在 GitHub 上下载对应硬件平台的固件文件，通过串口连接将固件文件烧录到硬件上即可。此外，还可以使用一些集成了 MicroPython 的开发板，如 MicroPythonPyBoard 和 ESP8266。
2. **开发应用**：开发者可以通过串口连接或 WiFi 连接访问 MicroPython 的交互式开发环境。在交互式环境中，可以直接使用 Python 语法和 API 对硬件进行操作，包括 GPIO 控制、传感器读取、网络通信等。
3. **调试和优化**：MicroPython 提供了一些调试和优化工具，例如代码性能分析、内存占用分析等。开发者可以利用这些工具对自己的代码进行优化，提高系统的稳定性和性能。
4. **参与社区**：MicroPython 拥有一个活跃的开发者社区和博客论坛，开发者可以在社区中获取到大量的技术支持、交流经验和资源。同时，开发者也可以贡献自己的代码和项目，丰富 MicroPython 的生态。

### 结语

MicroPython 是一个为微控制器和受限系统而生的精简高效的 Python 解释器，具有精简高效、简洁易用、丰富的生态和开源免费等优势。开发者可以通过 GitHub 获取 MicroPython 的源代码，并参与到 MicroPython 的开发和社区中，体验 Python 在嵌入式系统上的魅力。MicroPython 的不断发展和壮大也为嵌入式系统的开发带来了新的可能性和机遇。

## MicroPython：嵌入式物联网编程新革命

### 一、MicroPython 简介

随着物联网(IoT)时代的来临，对于编程语言的便携性和高效性需求日益增加。MicroPython 就是在这样的背景下应运而生的一种编程语言。它是标准 Python 的一个紧致而高效的实现版本，专为微控制器和在资源受限环境中的编程而设计，可以在几十 Kb 内存中运行。

![图片](./Python框架.assets/640-1714231622970-291.webp)

### 二、MicroPython 特点

- **轻量级：**与 Python 相比，MicroPython 经过优化，以适应资源有限的环境，保留了 Python 的核心功能和语法，使其变得更加轻便。
- **易用性：**Python 语言自身的易读性和简明性使得 MicroPython 易于上手，适合所有级别的开发者。
- **高效开发：**MicroPython 支持交互式提示符，即时反馈，使得开发者可以快速测试和调试代码。
- **丰富的库支持：**针对硬件操作提供了丰富的库，如 GPIO、PWM、ADC 等。
- **跨平台：**在多种微控制器和开发板上都有支持，如 ESP8266、ESP32、Pyboard 等。

### 三、技术指标

- **内存占用：**MicroPython 核心运行时占用内存大约在**256KB**左右，面向常见微控制器的版本甚至可以减至**几十 KB**。

- **处理器支持：**支持 ARM Cortex-M 系列（如 STM32）、ESP8266/ESP32、Microchip PIC 等多种架构。

- **执行效率：**虽不能与编译型语言相提并论，但其执行速度足以满足大多数控制与通信任务。

  ![图片](./Python框架.assets/640-1714231622971-292.webp)

### 四、应用场景

1. **教育领域：**MicroPython 可用于学生学习编程，其亲和力较强的特点能够降低编程学习的门槛。
2. **DIY 项目：**爱好者可以通过 MicroPython 轻松完成家庭自动化、机器人构建等项目。
3. **快速原型开发：**对于企业研发团队，MicroPython 可以快速构建原型，进行概念验证。
4. **物联网设备开发：**适合用于小型物联网设备的快速开发，与传感器、执行器等硬件的交互。

### 五、注意事项

- **资源限制：**在使用 MicroPython 时要充分意识到其运行在资源受限平台上，合理优化程序设计。
- **模块选择：**由于内存限制，并非所有 Python 库都能在 MicroPython 上使用，需要选择合适的库。
- **电源管理：**为保证微控制器的可靠运行，需要注意电源管理和电源噪声问题。
- **性能瓶颈：**对于需要高性能计算的应用场景，MicroPython 可能会遇到瓶颈，需评估是否适用。
- **社区支持：**与 Python 社区相比，MicroPython 社区相对较小，寻求帮助时可能资源较少。

### 六、总结

MicroPython 作为一种符合当下物联网发展需求的编程语言，其轻量级、易读易写的特性让它在快速原型制作和教育推广中显得格外有用。同时，依托于 Python 强大的社区基础，MicroPython 的生态圈持续成长，不断扩展其在硬件控制和物联网领域中的应用。

## LVGL 与 MicroPython 搭档：嵌入式图形界面开发新选择

**项目地址**：https://github.com/lvgl/lv_micropython

> LVGL MicroPython 绑定是一个令人兴奋的开源项目，旨在将 LVGL（Light and Versatile Graphics Library）与 MicroPython 紧密结合。本文将详细介绍 LVGL MicroPython 绑定的特点、用途以及如何使用该库进行嵌入式图形界面开发。

### 1. LVGL 简介

LVGL 是一款轻量级且功能强大的图形库，专为嵌入式系统设计。它提供了丰富的图形元素和功能，可用于创建交互式的用户界面。LVGL 具有高度可定制性、跨平台支持和低资源占用等特点，因此在嵌入式系统中广泛应用。

![图片](./Python框架.assets/640-1714232748739-339.webp)

### 2. MicroPython 简介

MicroPython 是一种精简版的 Python 解释器，专为嵌入式设备开发而设计。它提供了 Python 语言的核心功能，并针对资源受限的环境进行了优化。MicroPython 易于学习和使用，适用于各种嵌入式平台。

### 3. LVGL MicroPython 绑定的特点

LVGL MicroPython 绑定的主要特点如下：

**a. 紧密集成**：LVGL MicroPython 绑定直接与 LVGL 库集成，为 MicroPython 提供了访问 LVGL 功能的接口。这样，开发者可以在 MicroPython 环境中轻松创建和管理 LVGL 图形界面。

**b. 简化开发**：绑定库提供了简单而直观的 API，使开发人员能够轻松创建 LVGL 的图形界面元素，如按钮、标签、进度条等。这大大简化了嵌入式图形界面的开发过程。

![图片](./Python框架.assets/640-1714232748739-340.webp)

**c. 跨平台支持**：LVGL MicroPython 绑定支持多种嵌入式平台，包括常见的 ARM Cortex-M 和 ESP32 等。这意味着开发人员可以在各种硬件上使用相同的代码和 API，实现跨平台的应用开发。

**d. 低资源占用**：LVGL 和 MicroPython 都以低资源占用而著称，因此绑定库在嵌入式系统中表现出色。开发人员可以在资源受限的设备上构建出美观、高效的图形界面应用。

### 4. LVGL MicroPython 绑定的使用方法

使用 LVGL MicroPython 绑定进行嵌入式图形界面开发的步骤如下：

**a. 安装绑定库**：首先，从 LVGL MicroPython 绑定的 GitHub 存储库中获取绑定库的代码。然后，按照提供的说明进行编译烧录安装。这个过程非常繁琐，也是整个项目最困难的一步。代码子模块用了很多项目外链，直接从 GitHub 上不能下载完全代码，建议使用 git submodule 获取。后续小编会将完整代码网盘链接放到 QQ 频道，如有需求可以查找。

![图片](./Python框架.assets/640-1714232748739-341.webp)

**b. 创建界面对象**：在 MicroPython 环境中，导入绑定库并创建一个 LVGL 界面对象。该对象将用于添加和管理图形界面元素。

**c. 添加界面元素**：使用 LVGL MicroPython 绑定的 API，向界面对象中添加所需的图形界面元素。例如，可以添加按钮、标签、进度条等。

**d. 设置界面回调**：如果需要对用户界面的事件进行响应，可以设置相应的回调函数。这样，当用户与界面交互时，可以执行特定的操作。

**e. 运行界面循环**：最后，在 MicroPython 环境中启动 LVGL 的界面循环。这将处理图形界面的更新、事件处理和显示等任务。

### 总结

LVGL MicroPython 通过将 LVGL 与 MicroPython 无缝集成，开发人员可以利用 LVGL 的丰富功能和 MicroPython 的简洁性，快速构建嵌入式图形界面。它的简单性和灵活性使得开发人员能够快速构建出色的应用，使嵌入式系统更加智能和人性化。如果您对嵌入式图形界面开发感兴趣，不妨尝试 LVGL MicroPython 绑定，体验其强大的功能和便捷的开发流程吧！

## ThingsBoard Gateway：开源物联网网关，物联网设备集成利器

**项目地址**：https://github.com/thingsboard/thingsboard-gateway

### 介绍

随着物联网的发展，越来越多的设备需要连接到物联网平台进行监控和管理。然而，不同的设备可能使用不同的通信协议和接口，这给集成和管理带来了一定的挑战。为了解决这个问题，ThingsBoard 开发了一个名为 ThingsBoard Gateway 的开源软件，它可以作为物联网网关，将连接到传统和第三方系统的设备与 ThingsBoard 物联网平台集成。

### 物联网网关的作用

物联网网关是一个中间件，位于物联网设备和物联网平台之间，负责处理设备和平台之间的通信。它的主要作用是将不同协议和接口转换为统一的协议和数据格式，以便设备可以与平台进行通信和交互。物联网网关还可以处理设备数据的预处理和过滤，以减轻物联网平台的负担，提高整体系统的性能和可靠性。

![图片](./Python框架.assets/640-1714231510255-288.webp)

### 支持的协议

ThingsBoard Gateway 支持多种通信协议，以便与不同类型的设备进行集成。以下是它支持的主要协议：

1. **Modbus**: Modbus 是一种常用的通信协议，广泛应用于工业自动化领域。ThingsBoard Gateway 可以通过 Modbus 协议与连接到 Modbus 网络的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
2. **CAN 总线**: 控制器局域网络（Controller Area Network，CAN）是一种常用的汽车和工业设备通信协议。ThingsBoard Gateway 可以通过 CAN 总线与连接到 CAN 网络的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
3. **BACnet**: BACnet 是一种用于建筑自动化和控制系统的通信协议。ThingsBoard Gateway 可以通过 BACnet 协议与连接到 BACnet 网络的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
4. **BLE**: 蓝牙低功耗（Bluetooth Low Energy，BLE）是一种用于短距离无线通信的低功耗协议。ThingsBoard Gateway 可以通过 BLE 与连接到 BLE 设备的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
5. **OPC-UA**: OPC-UA 是一种用于工业自动化领域的通信协议，它提供了标准化的接口和数据模型。ThingsBoard Gateway 可以通过 OPC-UA 与连接到 OPC-UA 服务器的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
6. **MQTT**: MQTT 是一种轻量级的发布订阅协议，广泛应用于物联网领域。ThingsBoard Gateway 可以通过 MQTT 与支持 MQTT 协议的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
7. **ODBC**: ODBC 是一种用于数据库访问的标准接口。ThingsBoard Gateway 可以通过 ODBC 与连接到数据库的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。
8. **REST**: REST 是一种基于 HTTP 协议的通信方式，常用于 Web 服务的开发。ThingsBoard Gateway 可以通过 REST 与支持 REST 接口的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。

### 总结

ThingsBoard Gateway 是一个功能强大的开源物联网网关，它能够将连接到传统和第三方系统的设备与 ThingsBoard 物联网平台进行无缝集成。通过支持多种通信协议它可以与各种类型的设备进行通信，并将设备数据传输到 ThingsBoard 物联网平台。这使得开发人员能够更轻松地将不同类型的设备连接到物联网，并实现监控、管理和分析这些设备的数据。

## CircuitPython：简化嵌入式系统编程的利器

**项目地址**：https://github.com/adafruit/circuitpython

> CircuitPython 是一种用于嵌入式系统的开源 Python 编程环境，它构建在 Micropython 的基础上，并通过改进和增强使得嵌入式开发更加简单和便捷。CircuitPython 专为微控制器和单片机设计，使得初学者和专业开发者都能够轻松地使用 Python 语言进行硬件编程。本文将详细介绍 CircuitPython 以及它相对于 Micropython 所做的改进和提高。

### 1. 什么是 CircuitPython

CircuitPython 是 Adafruit Industries 开发的一种开源嵌入式 Python 解释器，旨在为微控制器提供简单易用的硬件编程环境。它支持多种硬件平台，包括 Arduino、Raspberry Pi 和其他一系列微控制器。CircuitPython 的目标是让硬件编程变得容易上手，无需繁琐的设置和配置即可开始编写代码。

### 2. 基于 Micropython 的改进与提高

CircuitPython 基于 Micropython，但在其基础上做了许多改进和提高，使得它成为广受欢迎的嵌入式开发环境。以下是 CircuitPython 相对于 Micropython 的一些改进和提高：

**支持更多硬件平台**：CircuitPython 支持更多的硬件平台，包括 Adafruit 的许多开发板和其他第三方硬件。这使得开发者可以在不同的硬件上使用相同的代码，而无需重新编写或进行大量的修改。

**更简化的文件系统**：CircuitPython 引入了一个更简化的文件系统，使得将代码和资源文件传输到设备变得更加容易。用户只需将代码文件拷贝到设备的虚拟 USB 驱动器上，就可以实时运行代码，无需复杂的编译过程。

**自动重载和热插拔**：CircuitPython 支持自动重载功能，这意味着在编辑代码后无需手动重新启动设备，它会自动检测到代码的更改并重新加载。此外，CircuitPython 还支持热插拔功能，即在运行时插拔硬件设备，无需重新启动。

**更友好的错误处理**：CircuitPython 改进了错误处理机制，提供了更友好和详细的错误信息。当代码中发生错误时，CircuitPython 会提供有用的错误提示，帮助开发者快速定位和修复问题。

**易用的 API 和库**：CircuitPython 提供了丰富的 API 和库，使得硬件编程更加简单和易用。它提供了许多内置模块和库，涵盖了各种常见的硬件设备和传感器，如 GPIO、I2C、SPI、UART 等。这些库使得开发者可以快速地与硬件进行交互和控制。

### 3. CircuitPython 的应用领域

CircuitPython 在嵌入式系统和硬件编程领域有着广泛的应用。以下是 CircuitPython 的一些应用领域：

**教育和学习**：CircuitPython 提供了一种简单易用的嵌入式编程环境，非常适合用于教育和学习。它可以帮助初学者快速入门硬件编程，并且无需繁琐的设置和配置。

**物联网（IoT）**：CircuitPython 可以与各种传感器、执行器和通信模块配合使用，用于构建物联网设备和项目。

**创客和 DIY 项目**：CircuitPython 广泛应用于各种创客和 DIY 项目中。它提供了简单的编程接口和丰富的硬件支持，使得开发者可以轻松地构建各种交互式装置、机器人和艺术项目。

**科学实验和数据采集**：CircuitPython 可以与各种传感器和数据采集设备结合使用，用于科学实验和数据收集。它提供了简单的 API 和库，使得数据采集和分析变得更加简便。

**艺术和音乐**：CircuitPython 可以与各种声音合成器、音乐控制器和 LED 灯带等设备结合使用，用于创作音乐和艺术项目。它的简单易用性和丰富的硬件支持使得艺术家和创作者能够将创意转化为实际作品。

### 4. 结论

CircuitPython 是一种基于 Micropython 的开源嵌入式 Python 编程环境，它通过一系列改进和提高使得硬件编程变得更加简单和便捷。它支持多种硬件平台，提供了简化的文件系统、自动重载和热插拔功能，以及友好的错误处理机制。无论是初学者还是专业开发者，都可以通过 CircuitPython 轻松地进行嵌入式系统的开发和创作。

## Micropython vs. Circuitpython：嵌入式 Python 解释器的对比与选择

### 简介

随着物联网的不断发展，嵌入式系统的需求也越来越高。Micropython 和 Circuitpython 作为两种针对嵌入式设备的 Python 解释器，提供了在这些设备上运行 Python 代码的能力。本文将对 Micropython 和 Circuitpython 进行对比，详细介绍它们的异同以及各自的应用场景。

### Micropython

Micropython 是一个基于 Python 3 的精简版解释器，专为微控制器和嵌入式系统设计。它提供了一个小巧的运行环境和一组核心库，可以在资源受限的嵌入式设备上运行 Python 代码。以下是 Micropython 的特点和应用场景：

**1. 特点**

- **轻量级**: Micropython 的解释器及其核心库经过优化，可以在资源受限的设备上运行，占用的存储空间和内存较少。
- **快速启动**: Micropython 启动速度快，可以在设备上快速加载并执行 Python 代码。
- **硬件支持**: Micropython 提供了对多种嵌入式硬件平台的支持，包括 Arduino、ESP8266、ESP32 等。
- **交互式开发**: Micropython 支持通过串口或网络与设备进行交互式开发，可以实时执行和调试代码。

**2. 应用场景**

- **物联网设备**: Micropython 适用于物联网设备的开发，可以用于传感器数据采集、物联网通信、远程控制等。
- **教育和学习**: Micropython 易于学习和使用，适合教育机构和个人学习嵌入式系统和物联网技术。
- **原型开发**: Micropython 的快速启动和交互式开发特性使其成为原型开发的理想选择，可以快速验证概念和构建原型。

### Circuitpython

Circuitpython 是基于 Micropython 的一个分支，专为 Adafruit 的电子开发板设计。它在 Micropython 的基础上添加了一些额外的功能和库，并针对 Adafruit 硬件进行了优化。以下是 Circuitpython 的特点和应用场景：

**1. 特点**

- **易用性**: Circuitpython 提供了一组易于使用的库和 API，使得开发者可以快速上手并进行硬件编程。
- **库支持**: Circuitpython 提供了丰富的 Adafruit 硬件库和第三方库，使得开发者可以方便地与各种传感器、显示屏等硬件进行交互。
- **即插即用**: Circuitpython 支持热插拔功能，可以在运行时添加或更换硬件设备，无需重新启动。
- **社区支持**: Circuitpython 拥有活跃的开发社区，提供了丰富的教程、示例和支持。

**2. 应用场景**

- **电子开发**: Circuitpython 针对 Adafruit 的电子开发板进行了优化，适用于各种电子原型开发和 DIY 项目。
- **教育和学习**: Circuitpython 的易用性和库支持使其成为教育机构和学生学习硬件编程的理想选择。
- **艺术和创意项目**: Circuitpython 支持与各种外围设备的交互，可以应用于艺术装置、交互装置等创意项目。

### 异同对比

Micropython 和 Circuitpython 都是针对嵌入式设备的 Python 解释器，它们有一些共同点和差异：

1. **共同点**：
2. 基于 Python：Micropython 和 Circuitpython 都是基于 Python 语言，开发者可以使用熟悉的 Python 语法和工具进行开发。

3. 嵌入式系统支持：两者都专为嵌入式设备设计，可以在资源受限的设备上运行，并提供了硬件访问和控制的功能。

4. **差异点**：
5. **硬件平台支持**：Micropython 提供了更广泛的硬件平台支持，包括 Arduino、ESP8266 和 ESP32 等。而 Circuitpython 主要专注于 Adafruit 的电子开发板。

6. **库支持**：Circuitpython 在 Micropython 的基础上添加了丰富的 Adafruit 硬件库和第三方库，使得与硬件的交互更加方便。Micropython 的库支持相对较少，但也可以使用 Python 的标准库和一些第三方库。

7. **易用性**：Circuitpython 在易用性方面做出了一些改进，提供了更简洁的 API 和易于上手的开发环境，适合初学者和快速原型开发。Micropython 相对更接近标准的 Python 语言，对于熟悉 Python 的开发者更为友好。

8. **应用领域**：由于 Micropython 的广泛硬件支持，它更适合用于物联网设备、原型开发和教育领域。Circuitpython 则更适用于 Adafruit 开发板的电子项目、教育和艺术创意领域。

### 结论

Micropython 和 Circuitpython 都是优秀的嵌入式 Python 解释器，适用于不同的应用场景。如果你需要在各种硬件平台上开发嵌入式系统或物联网设备，Micropython 是一个强大的选择。而如果你专注于 Adafruit 的电子开发板，或者对于易用性和库支持有较高的要求，Circuitpython 将是一个更好的选择。无论你选择哪个解释器，Python 的简洁和易用性都将为你的嵌入式开发带来便利。

项目地址：https://github.com/adafruit/circuitpython

# 程序调试分析

## Python+Frida：House 一键搞定移动应用程序分析

**项目地址**：https://github.com/nccgroup/house

### 介绍

House 是一个基于 Frida 并使用 Python 编写的运行时移动应用分析工具包。它提供了一个 Web GUI，使用户可以直观地分析移动应用程序的运行时行为。House 的主要目标是帮助移动应用程序安全测试人员和研究人员深入分析移动应用程序，并发现潜在的安全漏洞和风险。在本文中，我们将详细介绍 House 的特性、使用方法以及如何利用它进行移动应用程序的分析。

![图片](./Python框架.assets/640-1714220684590-83.gif)

### 特性

House 具有许多强大的特性，使其成为一个优秀的移动应用程序分析工具。下面我们将介绍一些 House 的特性：

1. **基于 Frida**: House 利用了 Frida 这一强大的动态分析框架，使用户能够在运行时监视、修改和分析移动应用程序。Frida 提供了强大的 API，可以通过 JavaScript 脚本进行控制，使用户能够轻松地对应用程序进行动态分析。

2. **Web GUI**: House 提供了一个直观友好的 Web GUI 界面，使用户可以通过浏览器进行操作。这极大地提高了用户的使用体验，使得分析过程更加便捷和高效。

3. **Python 编写**: House 的后端是使用 Python 编写的，这使得它具有良好的可扩展性和灵活性。用户可以根据自己的需求定制和扩展 House，使其满足特定的分析需求。

4. **模块化设计**: House 采用了模块化的设计，用户可以根据自己的需求选择和组合不同的模块，以实现特定的分析目标。这使得 House 适用于各种不同的场景和需求。

   ![图片](./Python框架.assets/640-1714220684591-84.gif)

### 安装与配置

要使用 House 进行移动应用程序的分析，首先需要对其进行安装和配置。下面我们将介绍如何安装和配置 House：

1. **安装 Frida**: House 依赖于 Frida 进行移动应用程序的动态分析，因此需要首先安装 Frida。可以通过 Frida 的官方网站获取最新的安装包，并按照官方文档进行安装。

2. **获取 House 源码**: 可以通过 GitHub 获取 House 的源码，然后将其克隆到本地机器上。

3. **安装 Python 依赖**: 使用 pip 命令安装 House 所需的 Python 依赖库，可以通过 requirements.txt 文件来安装依赖。

4. **配置 Web GUI**: 配置 House 的 Web GUI，使其可以通过浏览器访问。可以修改配置文件来指定 Web GUI 使用的端口和其他相关参数。

   ![图片](./Python框架.assets/640-1714220684591-85.gif)

### 使用方法

当安装和配置完成后，就可以使用 House 进行移动应用程序的分析了。下面我们将介绍 House 的基本使用方法：

1. **启动 House**: 首先需要启动 House 的后端服务，可以通过命令行执行 python main.py 来启动 House。启动后，可以通过浏览器访问指定的地址和端口来使用 Web GUI 界面。

2. **选择目标应用程序**: 在 Web GUI 界面上选择需要分析的目标应用程序，可以上传应用程序的安装包或者指定应用程序的包名。

3. **选择分析模块**: 根据分析需求选择需要的分析模块，可以选择内置的模块或者自定义的模块。

4. **执行分析任务**: 点击开始分析按钮，House 将会启动 Frida 进行动态分析，并在 Web GUI 上实时显示分析结果。

5. **查看分析结果**: 在分析完成后，可以在 Web GUI 上查看分析结果，包括应用程序的运行时行为，API 调用情况等。

   ![图片](./Python框架.assets/640-1714220684591-86.webp)

### 案例分析

为了更好地演示 House 的使用方法和效果，我们将以一个简单的案例进行分析。假设我们需要分析一个安卓应用程序的网络通信情况，我们可以使用 House 来实现这一目标。

1. **选择目标应用程序**: 在 Web GUI 界面上上传目标应用程序的安装包，并指定应用程序的包名。
2. **选择分析模块**: 选择网络通信分析模块，该模块将监视应用程序的网络通信情况，并实时显示在 Web GUI 上。
3. **执行分析任务**: 点击开始分析按钮，House 将会启动 Frida 进行动态分析，并监视应用程序的网络通信情况。
4. **查看分析结果**: 在分析完成后，可以在 Web GUI 上查看应用程序的网络通信情况，包括发送和接收的数据包内容、目标主机和端口等信息。

通过这个案例分析，我们可以看到 House 在分析移动应用程序的网络通信情况方面具有很大的便利性和效果。用户可以根据自己的需求选择不同的分析模块，实现对应用程序不同方面的深入分析。

![图片](./Python框架.assets/640-1714220684591-87.webp)

### 总结

House 是一个功能强大的移动应用程序分析工具包，它利用了 Frida 和 Python 等先进技术，提供了丰富的特性和灵活的使用方法。通过本文的介绍，我们了解了 House 的特性、安装与配置方法、使用方法以及案例分析。希望本文能够帮助读者更好地了解 House，并在移动应用程序的安全测试和研究工作中发挥作用。

# 终端命令行脚本

## Urwin：Python 打造高效终端用户界面（TUI）的完美利器

**项目地址**：https://github.com/urwid/urwid

### 引言

在日常的软件开发过程中，我们常常需要开发一些需要在终端中运行的界面程序。

Python 作为一种流行的编程语言，有许多可以用于开发终端用户界面（TUI）的库和框架。其中，Urwid 作为一种 Python TUI 框架，具有丰富的功能和灵活的扩展性，在开发终端界面程序时备受青睐。

本文将对 Urwid 框架进行详细介绍，包括其特点、基本用法以及实际应用场景。希望通过本文的介绍，可以帮助读者更好地了解和使用 Urwid 框架。

![图片](./Python框架.assets/640-1714239205015-679.webp)

### Urwid 框架简介

Urwid 是一个用于创建文本用户界面（TUI）的 Python 库。它是一个基于事件驱动的框架，通过使用小部件（widget）来构建各种复杂的终端界面。Urwid 框架旨在为开发者提供一个简单而强大的工具，使他们能够轻松地创建、定制和管理终端用户界面。Urwid 框架的主要特点包括：

- 支持多种小部件：Urwid 框架提供了丰富的小部件库，包括文本框、按钮、复选框、下拉菜单等，开发者可以通过组合这些小部件来构建复杂的终端界面。

  ![图片](./Python框架.assets/640-1714239205016-680.webp)

- 灵活的布局管理：Urwid 框架允许开发者使用不同的布局管理器来设计界面布局，包括框架布局、栈布局、列布局等，从而实现各种不同的用户界面效果。

- 支持自定义样式：Urwid 框架允许开发者通过自定义样式来改变界面的外观，包括文本颜色、背景色、边框样式等，使得界面更加美观和个性化。

- 跨平台支持：Urwid 框架可以在多种终端环境下运行，包括 Unix 终端、Windows 控制台等，具有良好的跨平台兼容性。

  ![图片](./Python框架.assets/640-1714239205016-681.webp)

### Urwid 框架的基本用法

可以直接使用 pip 命令安装 Urwid：

```
pip install urwid
```

在使用 Urwid 框架时，开发者通常需要按照以下步骤进行：

1. 导入 Urwid 库：首先需要在 Python 代码中导入 Urwid 库，以便使用其中的各种功能和类。
2. 创建小部件：开发者可以使用 Urwid 提供的各种小部件类来创建界面中的各种可交互元素，例如文本框、按钮等。
3. 设计布局：通过选择合适的布局管理器，开发者可以设计界面的整体布局，包括各个小部件的位置和大小。
   - ![图片](./Python框架.assets/640-1714239205016-682.webp)
4. 添加事件处理：开发者可以为界面中的各个小部件添加事件处理函数，处理用户输入并修改界面状态。
5. 运行界面：最后，通过调用 Urwid 框架提供的主循环函数，开发者可以启动界面程序，并开始接受用户输入和处理事件。

下面是一个简单的使用 Urwid 框架创建基本界面的例子：

```python
import urwid

# 创建文本框小部件
txt = urwid.Text("Hello, Urwid!")

# 创建框架布局管理器
fill = urwid.Filler(txt, "top")

# 运行界面
loop = urwid.MainLoop(fill)
loop.run()
```

通过上述代码，我们可以创建一个简单的界面，其中包含一个显示“Hello, Urwid!”文本的文本框。通过这个简单的例子，我们可以看到 Urwid 框架的基本使用流程和结构。

### Urwid 框架的实际应用

Urwid 框架可以应用于许多实际的场景中，包括但不限于：

1. 终端工具：开发各种终端工具和辅助程序，如系统监控工具、日志查看器等。

2. 交互式应用：实现各种交互式的终端应用程序，如聊天客户端、导航工具等。

3. 管理界面：为各种系统管理工具提供终端用户界面，如配置管理工具、数据库管理工具等。

4. 游戏开发：实现各种基于终端的文本游戏，如文字冒险游戏、角色扮演游戏等。

   ![图片](./Python框架.assets/640-1714239205016-683.webp)

总之，Urwid 框架可以在许多场景中发挥重要作用，为开发者提供一个强大而灵活的工具，帮助他们开发各种复杂的终端用户界面程序。

### 总结

通过本文的介绍，我们对 Urwid 框架有了更加全面的了解。Urwid 框架作为一个用于创建终端用户界面的 Python 库，具有丰富的功能和良好的扩展性，可以帮助开发者轻松地创建各种复杂的终端界面程序。希望本文能够为读者提供有益的信息，帮助他们更好地了解和应用 Urwid 框架。

## Textual：用简单的 Python API 构建用户界面 UI 的应用框架

**项目地址**：https://github.com/Textualize/textual

### 简介

textual 是一个用于构建用户界面的轻量级应用程序框架，它提供了一个简单而强大的 Python API。无论是在终端还是在 Web 浏览器中运行，textual 都能让开发者轻松创建复杂的用户界面。该框架的设计目标是提供一个易于使用的工具库，使开发者能够快速构建出具有丰富功能的应用程序。

![图片](./Python框架.assets/640-1714239138560-673.webp)

### 功能和特性

textual 提供了以下主要功能和特性：

1. **终端和 Web 界面支持**：textual 允许开发者在终端和 Web 浏览器中运行应用程序。这意味着你可以使用相同的代码和 API 来构建适用于不同平台的用户界面。
2. **简单的 Python API**：textual 的 API 非常简单易用，以便开发者能够快速上手。通过使用 textual，你可以用少量的代码实现复杂的用户界面，而无需深入研究底层的终端或 Web 技术。
3. **丰富的小部件库**：textual 提供了一系列丰富的小部件，如按钮、文本框、滚动区域等，以及布局管理器，使开发者能够创建各种交互式界面元素。
4. **事件驱动架构**：textual 的应用程序是基于事件驱动的架构。开发者可以定义事件处理程序来响应用户的输入和操作，并实现复杂的交互逻辑。

![图片](./Python框架.assets/640-1714239138560-674.webp)

### 优势和不足

textual 框架相对于其他类似的库具有以下优势：

- **简单易用**：textual 提供了一个简单而直观的 Python API，使开发者能够快速上手并构建复杂的用户界面。
- **跨平台支持**：textual 可以在终端和 Web 浏览器中运行，为开发者提供了更大的灵活性和适用性。
- **丰富的小部件库**：textual 提供了一系列丰富的小部件和布局管理器，使开发者能够创建各种交互式界面元素。

然而，textual 也存在一些限制或不足之处：

- **学习曲线**：尽管 textual 的 API 相对简单，但对于完全没有用户界面开发经验的开发者来说，仍然需要一定的学习曲线。
- **生态系统**：相对于其他流行的用户界面框架，textual 的生态系统可能相对较小，可能会限制一些高级功能或第三方扩展的可用性

### 总结

textual 是一个强大而简单的 Python 应用程序框架，用于构建复杂的用户界面。它提供了简单易用的 API，丰富的小部件库和跨平台支持。通过使用 textual，开发者可以快速创建终端和 Web 界面的应用程序，满足各种不同领域的需求。

如果你是一名 Python 开发者，并且需要构建复杂的用户界面，那么 textual 是一个值得考虑的选择。它提供了简单、灵活和跨平台的解决方案，能够帮助你快速构建出功能丰富的应用程序。

## UniMatrix：在终端中模拟《黑客帝国》显示效果的 Python 脚本

**项目地址**：https://github.com/will8211/unimatrix

### 简介

UniMatrix 是一款 Python 脚本，可以在终端中模拟《黑客帝国》的显示效果,可以使用自定义字符集显示。UniMatrix 在运行时接受键盘控制。

### 原理

UniMatrix 的工作原理很简单：它首先创建一个字符画布，然后不断地随机选择字符并将其绘制到画布上。这样就产生了一种不断流动的效果，类似于《黑客帝国》中的显示效果。

![图片](./Python框架.assets/640-1714221115229-112.webp)

### 安装

UniMatrix 的安装非常简单，只需按照以下步骤操作即可：

1. 确保你的电脑上安装了 Python 3。
2. 下载 UniMatrix 脚本：https://github.com/LazoCoder/UniMatrix/archive/refs/heads/main.zip
3. 将下载的压缩包解压到一个文件夹中。
4. 打开终端，并导航到解压后的文件夹。
5. 输入以下命令来运行 UniMatrix：

```bash
python unimatrix.py
```

### 使用

UniMatrix 在运行时接受键盘控制，你可以使用以下按键来控制脚本：

- `空格键`：暂停或继续脚本。
- `Esc`：退出脚本。
- `+` 和 `-`：增加或减少字符画布的大小。
- `↑`、`↓`、`←` 和 `→`：移动字符画布。

### 自定义

UniMatrix 允许你自定义字符集。要自定义字符集，你需要创建一个文本文件，其中包含你要使用的字符。每个字符都应该单独占据一行。然后，你可以使用 `-c` 参数来指定自定义字符集文件。例如：

```bash
python unimatrix.py -c custom_characters.txt
```

### 总结

UniMatrix 是一款简单易用、功能强大的 Python 脚本，可以在终端中模拟《黑客帝国》的显示效果。它可以用于各种目的，比如装饰终端、制作 ASCII 艺术，甚至是创建交互式艺术装置。

## PyTermGUI：功能强大的 Python TUI 框架，让终端界面开发更简单

**项目地址**：https://github.com/bczsalba/pytermgui

### 1. 简介

PyTermGUI 是一个功能强大的 Python TUI（Text User Interface）框架，它可以让开发者轻松地在终端中创建丰富的图形用户界面。PyTermGUI 具有以下特点：

- **原生跨平台支持：**PyTermGUI 可以无缝运行在 Windows、macOS、Linux 等操作系统上，无需进行额外的适配。

- **模块化小部件系统：**PyTermGUI 提供了一套丰富的模块化小部件，包括按钮、文本框、标签、列表、表格等，开发者可以轻松地将这些小部件组合起来创建复杂的界面。

  ![图片](./Python框架.assets/640-1714221228795-115.webp)

- **可定制且快速的终端标记语言：**PyTermGUI 使用了自己的终端标记语言 TML（Terminal Markup Language），它允许开发者使用简单的标记来定义界面的布局和样式，从而快速地创建出美观实用的界面。

- **鼠标支持：**PyTermGUI 支持鼠标交互，这使得终端界面更加直观和易用。

### 2. 安装

PyTermGUI 可以通过 pip 安装：

```bash
pip install pytermgui
```

### 3. 快速上手

以下是一个简单的 PyTermGUI 程序，它会在终端中显示一个带有“Hello, world!”文本的窗口：

```python
import pytermgui as ptg

with ptg.WindowManager() as manager:
    win = ptg.Window(title="Hello, world!")
    label = ptg.Label("Hello, world!")
    win.content = label  # Setting the label as the content of the window
    manager.add(win)

manager.run()
```

运行以上程序，你将在终端中看到一个带有“Hello, world!”文本的窗口。

![图片](./Python框架.assets/640-1714221228795-116.webp)

### 4. 更多特性

PyTermGUI 还提供了许多其他特性，包括：

- **丰富的布局管理器：**PyTermGUI 提供了多种布局管理器，包括水平布局、垂直布局、网格布局等，开发者可以根据自己的需要选择合适的布局管理器来组织界面中的小部件。

- **丰富的主题支持：**PyTermGUI 提供了多种主题，开发者可以轻松地切换主题来改变界面的外观。

  ![图片](./Python框架.assets/640-1714221228795-117.webp)

- **强大的事件处理系统：**PyTermGUI 提供了强大的事件处理系统，开发者可以轻松地处理键盘事件、鼠标事件等。

- **丰富的文档和示例：**PyTermGUI 提供了丰富的文档和示例，开发者可以轻松地学习如何使用 PyTermGUI 来创建 TUI 程序。

### 5. 结语

PyTermGUI 是一个功能强大、易于使用且跨平台的 Python TUI 框架，它可以帮助开发者快速地创建出美观实用的终端界面程序。如果你正在寻找一个 TUI 框架，那么 PyTermGUI 是一个非常不错的选择。

## Python-prompt-toolkit: 为 Python 构建强大的交互式命令行应用的库

**项目地址**：https://github.com/prompt-toolkit/python-prompt-toolkit

### 简介

Python-prompt-toolkit 是一个开源的 Python 库，旨在帮助开发者构建强大、灵活和交互式的命令行应用程序。它提供了一套丰富的工具和组件，使开发命令行界面变得简单而又灵活。使用 Python-prompt-toolkit，开发者可以创建具有自动补全、语法高亮、历史记录、多行输入等功能的交互式命令行应用，从而提供更好的用户体验。

### 特性

Python-prompt-toolkit 具有许多强大的特性，使得它成为构建交互式命令行应用的理想选择。

**1. 用户友好的界面**

Python-prompt-toolkit 提供了丰富的界面组件，例如文本输入框、下拉列表、复选框等，使得构建用户友好的命令行界面变得非常容易。开发者可以根据需求选择合适的组件，以创建出符合用户期望的界面。

**2. 自动补全和提示**

Python-prompt-toolkit 支持自动补全和提示功能，使得用户在输入命令时能够获得实时的建议和补全选项。这大大提高了用户的工作效率和准确性，并减少了输入错误的可能性。自动补全和提示功能可以根据特定的上下文进行智能化的推断，从而提供更准确和相关的建议。

**3. 语法高亮**

Python-prompt-toolkit 能够对命令行输入的文本进行语法高亮显示。这对于开发者来说非常有用，因为它们可以使用颜色和样式来区分不同类型的输入和输出。语法高亮功能提高了可读性和可视化效果，使得命令行应用更加吸引人和易于使用。

**4. 历史记录和撤销**

Python-prompt-toolkit 提供了历史记录和撤销功能，使得用户可以轻松地查看之前输入的命令并进行撤销操作。这对于矫正输入错误或回顾之前的命令非常有用。开发者可以自定义历史记录的保存方式和长度，以适应特定应用的需求。

**5. 多行输入**

Python-prompt-toolkit 支持多行输入，允许用户在命令行界面中输入多行文本。这对于处理大块的文本或多行命令非常有用。多行输入功能可以通过简单的配置启用，并提供了方便的编辑和导航选项。

**6. 异步支持**

Python-prompt-toolkit 提供了对异步操作的良好支持。它允许开发者在命令行应用中执行异步任务，而不会阻塞用户界面。这对于处理需要时间的操作或与外部服务进行交互的应用程序非常有用。

**7. 跨平台兼容性**

Python-prompt-toolkit 在多个平台上都能良好运行，包括 Windows、macOS 和 Linux。这使得开发者可以使用相同的代码在不同的操作系统上构建一致性的命令行应用。

### 使用示例

下面是一个简单的示例，展示了如何使用 Python-prompt-toolkit 构建一个交互式命令行应用：

```python
from prompt_toolkit import prompt

user_input = prompt('Enter your name: ')
print(f'Hello, {user_input}!')
```

在上面的示例中，我们使用`prompt`函数获取用户输入的名称，并将其打印出来。这只是一个简单的例子，Python-prompt-toolkit 还提供了许多其他功能，如自定义提示符、键盘快捷键绑定、事件处理等，以满足各种需求。

### 安装

要使用 Python-prompt-toolkit，首先需要安装它。可以使用 pip 包管理器进行安装，运行以下命令：

```bash
pip install prompt-toolkit
```

安装完成后，就可以在 Python 脚本中导入并开始使用 Python-prompt-toolkit。

### 结语

Python-prompt-toolkit 是一个强大的库，用于构建交互式命令行应用程序。它提供了丰富的功能和组件，使开发者能够创建出令人印象深刻的命令行界面。无论是构建命令行工具、交互式应用还是提供更好的用户体验，Python-prompt-toolkit 都是一个值得考虑的选择。通过利用 Python-prompt-toolkit，开发者可以在 Python 的世界中开发出强大而又易于使用的命令行应用程序。

# Python 与 C

## Cython：Python 与 C 的完美结合，最广泛使用的 Python 到 C 编译器

**项目地址**：https://github.com/cython/cython

**官网**：https://cython.org/

> _Cython_ 是一个功能强大的工具，用于将 Python 代码转换为 C 代码，以提高 Python 程序的性能。它是一个开源项目，广泛应用于 Python 社区，并在许多项目中被使用。

### 1. 什么是 Cython？

Cython 是一个编译器，它结合了 Python 和 C 语言的特性。它允许开发者使用 Python 语法编写高性能的 C 扩展模块，并能与现有的 Python 代码无缝集成。

### 2. 为什么使用 Cython？

Cython 的主要目标是提高 Python 程序的执行效率。由于 Python 是一种解释型语言，执行速度相对较慢。Cython 允许开发者通过将 Python 代码转换为 C 代码，然后编译成机器代码来提高性能。这种转换过程使得 Python 代码可以直接访问底层的 C 语言功能，从而加快了程序的执行速度。

### 3. Cython 的主要功能和特点

- **Python 与 C 的混合编程**：Cython 允许开发者在同一个文件中同时使用 Python 和 C 的语法，使得开发者能够充分发挥两种语言的优势。
- **静态类型声明**：通过添加静态类型声明，Cython 可以在编译时进行更多的优化，提高代码执行效率。
- **无缝集成**：Cython 可以轻松与现有的 Python 代码进行集成，使得开发者可以逐步优化代码的性能，而无需全面重写现有的代码。
- **丰富的扩展库支持**：Cython 可以与大量的 C 和 C++ 库进行无缝集成，使得开发者能够利用现有的库来增加程序的功能。

### 4. Cython 的应用场景

- **性能优化**：Cython 可以将性能瓶颈的 Python 代码转换为高效的 C 代码，从而大幅提高程序的执行速度。
- **C 扩展模块**：通过使用 Cython，开发者可以方便地编写 C 扩展模块，以提供对底层 C 函数库的访问。
- **科学计算**：由于 Cython 可以直接访问 C 语言的数值计算库，因此在科学计算领域中广泛使用。
- **嵌入式开发**：Cython 可以用于开发嵌入式系统中的高性能代码，如嵌入式设备驱动程序等。

### 5. Cython 的社区支持和发展

Cython 是一个活跃的开源项目，拥有庞大的开发者社区。在 GitHub 上的 Cython 仓库中，有大量的贡献者和用户提交了代码、问题和建议。这个社区的活跃度推动了 Cython 的不断改进和更新，使其成为最广泛使用的 Python 到 C 编译器之一。

### 总结

总之，Cython 是一个功能强大的 Python 到 C 编译器，它通过将 Python 代码转换为 C 代码来提高程序的性能。它具有灵活的语法和丰富的功能，适用于性能优化、扩展模块开发、科学计算和嵌入式开发等领域。

Cython 的活跃社区支持和不断发展使其成为 Python 开发者的首选工具之一。

# 其他

## Web 界面运行 Python 脚本：Script-server

项目地址：https://github.com/bugy/script-server

### 引言

网络发达的今天，有许多需要网络运行 Python 脚本的应用场景，如 Python 学习教学等。Script-server 就是一个基于 web 的开源脚本应用程序界面，它提供了一个易于使用的网络平台，可用于管理和运行各种脚本。这个应用程序旨在帮助开发人员和系统管理员更高效地管理和执行脚本任务。Script-server 的功能非常强大，它包含了许多有用的功能和工具，以提升脚本的管理和执行过程。下面将介绍一些 Script-server 的主要功能及其优势。

![图片](./Python框架.assets/640-1713981551778-169.webp)

### **功能简介**

- 脚本任务一键执行，简化操作流程。

- 多种脚本语言支持，满足不同需求。

- 定时执行和手动触发，确保任务准时执行。

- 多用户和权限管理，保护脚本安全可靠。

- 脚本共享和扩展，充分利用他人资源。

- 丰富的脚本库选择，快速满足需求。

  ![图片](./Python框架.assets/640-1713981551778-170.webp)

### **简单易用的 Web 界面**

Script-server 提供了一个直观、简单易用的 Web 界面，使用户可以轻松地管理和运行脚本任务。通过这个界面，用户可以快速添加、编辑和删除脚本，设置脚本的定时执行时间，并监控脚本任务的执行状态。这个用户友好的界面使得脚本的管理和执行变得更加简单和高效。

![图片](./Python框架.assets/640-1713981551778-171.webp)

### **多种脚本语言支持**

Script-server 支持多种流行的脚本语言，包括 Python、Shell、JavaScript 等。这意味着用户可以使用自己熟悉和喜欢的脚本语言来编写和执行脚本任务，无需学习新的语言。这种灵活性让开发人员和系统管理员可以根据自己的需要来选择合适的脚本语言，从而提高工作效率。

![图片](./Python框架.assets/640-1713981551778-172.webp)

### **强大的脚本调度和执行功能**

Script-server 内置了强大的脚本调度和执行功能，可以根据设定的时间表来自动执行脚本任务。用户可以设置脚本的执行时间和频率，例如每天、每周或每月执行等。此外，用户还可以手动触发脚本的执行，以立即运行需要的脚本任务。这些功能确保了脚本任务的准时执行，提高了工作效率。

![图片](./Python框架.assets/640-1713981551778-173.webp)

### **多用户和权限管理**

Script-server 支持多用户和权限管理，可以为不同的用户分配不同的访问权限。这样，用户可以根据自己的角色和职责来管理和执行脚本任务，保护脚本的安全性和可靠性。通过细粒度的权限控制，Script-server 确保了脚本的合理使用和管理，最大程度地降低了潜在的风险。

![图片](./Python框架.assets/640-1713981551778-174.webp)

### **灵活的脚本共享和扩展**

Script-server 支持脚本的共享和扩展，用户可以将自己编写的脚本分享给其他用户，也可以从其他用户那里获取脚本。这种灵活性使得用户可以充分利用其他人的经验和资源，快速实现自己的脚本任务。此外，Script-server 还提供了丰富的脚本库，用户可以从中选择合适的脚本，以满足不同的需求。

![图片](./Python框架.assets/640-1713981551778-175.webp)

### 总结

在现代软件开发和系统管理中，脚本起着非常重要的作用。Script-server 作为一个强大的 Web UI 工具，为用户提供了高效、简便的脚本管理和执行环境。通过简单易用的界面和丰富的功能，Script-server 让脚本任务的管理和执行变得高效而简单。无论是开发人员还是系统管理员，都可以通过 Script-server 提升工作效率，实现更加轻松和高效的脚本管理体验。

## 简洁高效的 Markdown 浏览工具：基于 Python 编程打造的 Frogmouth

**项目地址**：https://github.com/Textualize/frogmouth

### 介绍

Frogmouth 是一个基于 Python 和 Textual 构建的 Markdown 浏览器，在终端上进行 Markdown 文件的浏览和查看。它使用 Python 编程语言开发，提供了一种便捷的方式，让用户可以在终端上直接预览和阅读 Markdown 文件，节省了用户打开浏览器的时间，提高了工作效率。

![图片](./Python框架.assets/640-1714228365431-163.webp)

### Frogmouth 的安装和使用

可以直接使用 pip 命令安装：

```bash
pip install frogmouth
```

然后在命令行中打开 md 文件：

```bash
frogmouth readme.md
```

通过 Python 编程开发的 Frogmouth，可以在终端上以文本的形式直接打开和阅读 Markdown 文件。用户只需在终端输入指令，即可在终端上进行 Markdown 文件的浏览，无需打开浏览器。这种方式使得用户可以更加便捷地查看 Markdown 文件，提高了工作效率，减少了不必要的操作步骤。

![图片](./Python框架.assets/640-1714228365432-164.webp)

### Frogmouth 的功能

Frogmouth 支持的功能非常丰富，用户可以在终端上进行 Markdown 文件的预览、滚动、查找、跳转和搜索等操作。用户可以通过简单的指令，即可完成这些功能，不需要鼠标操作，大大提高了用户的使用体验。此外，Frogmouth 还支持代码高亮和自定义主题，用户可以根据自己的喜好设置显示效果，使得阅读体验更加舒适。

![图片](./Python框架.assets/640-1714228365432-165.webp)

### Frogmouth 的开发

Frogmouth 是使用 Python 编程语言开发而成的，它利用了 Python 在文本处理方面的优势，实现了 Markdown 文件的终端浏览功能。在开发过程中，Python 的库和模块（主要模块：Textual）为 Frogmouth 提供了强大的支持，使得 Frogmouth 可以稳定、高效地运行。开发人员可以通过 Python 的简洁和高效，快速地构建出这样一个功能强大的工具，为用户提供了极大的便利。

![图片](./Python框架.assets/640-1714228365432-166.webp)

### Frogmouth 的优势

与其他 Markdown 浏览工具相比，Frogmouth 的最大优势在于其使用简单、功能强大。用户无需打开浏览器，只需要在终端输入指令，即可进行 Markdown 文件的浏览和查看。同时，Frogmouth 还提供了丰富的功能和显示效果，用户可以自由地定制自己的阅读体验。这些优势使得 Frogmouth 成为了终端上的独特工具，受到了广大用户的欢迎和喜爱。

![图片](./Python框架.assets/640-1714228365432-167.webp)

### 结语

通过 Python 编程开发的 Frogmouth，为用户提供了一种全新的 Markdown 文件浏览方式。它不仅实现了在终端上直接预览和查看 Markdown 文件，还提供了丰富的功能和显示效果，让用户可以自由地定制自己的阅读体验。Python 的简洁、高效和强大，为 Frogmouth 的开发提供了有力的支持，使得它成为了终端上不可或缺的工具之一。同时这个成功的开源应用也为广大开发者提供了一个开发实例，用来学习参考。
