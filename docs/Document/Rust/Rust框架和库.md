# Rust 框架和库

[i5ting/learn-rust-for-fe: Rust 是未来前端基础设施 (github.com)](https://github.com/i5ting/learn-rust-for-fe)

[rust-unofficial/awesome-rust：Rust 代码和资源的精选列表。 (github.com)](https://github.com/rust-unofficial/awesome-rust)

- 命令行工具
- 网络编程
- 游戏开发
- Web 框架
- 机器学习
- 数据库
- 操作系统
- 区块链

## Shuttle：可免费部署rust web应用的云平台

[shuttle-hq/shuttle：构建和交付后端，无需编写任何基础设施文件。 (github.com)](https://github.com/shuttle-hq/shuttle)

Shuttle是一个Rust原生云开发平台，可以让您部署应用程序，同时还可以管理所有基础设施。作为一个专注于提供卓越开发者体验的平台，我们的目标是让构建和部署应用程序变得轻而易举。Shuttle的“代码基础架构”功能使资源调配变得简单而无忧。获取数据库只需要一个带有数据库的宏：

```rust
#[shuttle_runtime::main]
async fn main(
    // automatic db provisioning + hands you back an authenticated connection pool
    #[shuttle_shared_db::Postgres] pool: PgPool,
) -> ShuttleRocket<...> {
    // application code
}

```

你可以脚踏实地，迅速将你的想法转化为切实可行的解决方案。通过快速构建和部署原型来加快项目进度，确保您在创纪录的时间内实现愿景。

Shuttle可以托管许多类型的Rust程序。Shuttle环境为暴露在互联网上的网络流量提供了一个网络端口。因此，最常见的用例是部署web应用程序。可以绑定到套接字并接受传入HTTP流量的应用程序可以在Shuttle上运行。

为了让开发更轻松，我们实现了这些Rust web框架所需的所有样板。只需几行代码即可开始。

Axum

Actix Web
Rocket
Warp
Tower
Salvo
Poem
Tide
Thruster
shuttle-next



Discord Bot构建框架Serenity和Poise也得到官方支持。如果您需要定制服务，您可以在这里查看我们的指南。



Shuttle的一大特点是通过宏提供资源。只需几行代码，您就可以访问AWS RDS、共享Postgres或Mongo数据库等。查看参考资料部分以获得完整概述。



在Shuttle上构建和部署web应用程序的最简单方法如下：

```rust
use axum::{routing::get, Router};

async fn hello_world() -> &'static str {
    "Hello, world!"
}

#[shuttle_runtime::main]
async fn main() -> shuttle_axum::ShuttleAxum {
    let router = Router::new().route("/", get(hello_world));

    Ok(router.into())
}
```



此示例启动一个服务器，其中/端点返回Hello，world！。但最重要的是，您在上面的代码片段中看到的代码，是shuttle部署所需的全部内容。

\#[shuttle_runtime:：main]是个过程宏。该宏使用Shuttle的运行时包装您的应用程序。Shuttle运行时接收来自部署程序的命令，如加载、启动和停止。加载阶段为应用程序提供资源（见下文）。

![image-20240526162110126](./Rust框架和库.assets/image-20240526162110126.png)

在上面的例子中，主函数中的2个注释扩展为代码，使Shuttle运行时在我们端提供它们。

以下是在将所需注释添加到代码中后如何使用它们的示例：

密钥：

```rust
#[shuttle_runtime::main]
async fn axum(
    #[shuttle_secrets::Secrets] secret_store: SecretStore,
) -> shuttle_axum::ShuttleAxum {
    // Get secret defined in `Secrets.toml` file.
    let secret = if let Some(secret) = secret_store.get("MY_API_KEY") {
        secret
    } else {
        return Err(anyhow!("secret was not found").into());
    };
}
```

数据库：

```rust

#[shuttle_runtime::main]
async fn axum(
    #[shuttle_shared_db::Postgres] pool: PgPool,
) -> shuttle_axum::ShuttleAxum {
    // We can query our Postgres database with `pool`
    pool.execute(include_str!("../schema.sql"))
        .await
        .map_err(CustomError::new)?;
}
```

当您运行shuttle部署时，您的项目代码会被存档并发送到我们的服务器，在那里进行编译。我们在shutter_runtime:：main中的代码生成将在二进制文件中嵌入一个gRPC服务器，我们将使用该服务器来启动和停止您的服务，以及一个Loader结构，该结构将在主函数的参数中提供您请求的资源。然后，您的服务将在AWS欧洲西部2地区的Shuttle基础设施上启动。



它包含社区版本，可以免费使用，使用您擅长的rust web开发框架，发布到这个平台运行，社区版本资源有限制，目前是最多3个项目，起步数据库，起步CPU和内存。

具体定价详情请查看：https://www.shuttle.rs/pricing

Github地址：https://github.com/shuttle-hq/shuttle

# 库搜索

crates：https://crates.io/

Lib.rs：https://lib.rs/

Rust 的标准库非常精简，因此在实际开发中，我们通常需要依赖大量的第三方库。

- crates.io 是官方的包托管网站，您可以在这里找到各种各样的 Rust 库。
- 而 docs.rs 则是官方的文档托管网站，自动生成了所有发布在 crates.io 上的包文档。通过这两个网站，您可以轻松找到所需的库，并查看其详细文档。

# 命令行库

## clap：命令行参数解析器

**clap：Rust 的命令行参数解析器**：[clap - rust (docs.rs)](https://docs.rs/clap/latest/clap/)

## tui-realm

**GitHub 地址**：https://github.com/veeso/tui-realm

ui-realm 是一个用于 ui 和 ratatui 的框架，用于实现简化的终端用户界面，增加了使用具有属性和状态的可重用组件，就像在 React 中所做的那样。但这还不是全部：组件通过基于消息和事件的系统与 ui 引擎通信，提供实现更新例程的可能性，就像在 Elm 中发生的那样。此外，组件被组织在视图中，它管理挂载/卸载、焦点和事件转发。

这也解释了名称的原因：Realm 代表 React 和 Elm。

功能特性：

- 事件驱动
- 基于 React 和 Elm
- 样板代码
- 快速安装
- 单一焦点和状态管理
- 易于学习
- 适应于任何用例
- Tui-realm 附带了一个可选的标准组件库，我认为对大多数应用程序都很有用。如果要使用它，只需将 tui-realm-stdlib 添加到 Cargo 中。toml 依赖性。

## Tailspin：安全语言开发的日志高亮工具

开源地址：https://github.com/bensadeh/tailspin

### 软件介绍

> 在 GitHub 上有一个名为 Tailspin 的项目，它是使用 Rust 编写的命令行日志查看工具。这个工具的独特之处在于，它提供了无需配置即可直接使用的功能，通过高亮显示数字、日期、IP 地址、URL 等内容，使重要信息更加醒目清晰。

![image-20240512212801563](./Rust框架和库.assets/image-20240512212801563.png)

### 功能描述：

> Tailspin 通过逐行阅读日志文件，并针对每一行运行一系列正则表达式来工作。这些正则表达式可以识别你在日志文件中期望找到的模式，如日期、数字、严重程度关键字等。

> 该工具在查找需要突出显示的项目时并不做任何假设，因此不需要任何配置，高亮显示功能将在不同类型的日志文件中表现一致。

### 功能特点：

- 可查看（或 tail）任何格式的日志文件
- 无需设置或配置
- 高亮显示数字、日期、IP 地址、UUID、URL 等内容
- 所有高亮组均可定制
- 易于与其他命令集成
- 使用 less 实现滚动、搜索和过滤功能

### 使用场景：

> Tailspin 对于需要查看和分析日志文件的开发人员和系统管理员特别有用。无需复杂的配置，用户可以直接使用该工具来查看各种日志，并通过高亮显示让关键信息一目了然。另外，由于 Tailspin 支持自定义高亮显示组，用户可以按照自己的需求灵活地设置高亮显示规则，从而更好地适应不同类型的日志文件。

> 无论是想快速定位重要信息、了解日志内容，还是与其他命令集成进行更多操作，Tailspin 都能帮助用户高效地处理日志数据。

> 总之，Tailspin 是一个简单实用但功能强大的日志查看工具，旨在提升查看日志文件的效率和便捷性。如果你是关注日志分析和处理的技术人员，不妨尝试使用 Tailspin 来优化你的工作流程。

## Rust 终端表格打印库

### 引言

大家在开发命令行程序的时候，是否经常需要以表格的形式在终端上打印内容呢？最近我发现了一个非常好用的 Rust 库：tabled，它可以帮助我们快速、优雅地在终端上打印出美观的表格。今天就来给大家介绍一下这个实用的开源项目。

### 创作背景

之所以推荐 tabled 这个库，主要有以下几点原因：

1. 它的 API 设计非常简洁，上手难度低，小白也可以快速掌握；
2. 支持多种表格样式，如 ASCII、Markdown、RestructuredText 等，能满足不同场景下的需求；
3. 可以非常方便地对表格进行样式自定义，如对齐方式、填充字符、颜色等；
4. 文档示例齐全，对新手非常友好。

所以无论你是 Rust 新手还是有经验的老手，tabled 都是一个值得收藏的工具库。

### 主要特性

tabled 除了基本的表格打印功能外，还有以下一些出色的特性：

- 多种表格边框样式：

- - ASCII 字符边框
  - Unicode 字符边框
  - Markdown 表格样式
  - RestructuredText 表格样式
  - 简约无边框样式

- 支持设置表格标题、列标题；

- 单元格内容对齐方式可自定义；

- 支持单元格合并；

- 可以从 String、Vec、HashMap 等类型快速创建表格；

- 集成了多种常用的色彩方案，并支持自定义色彩。

### 快速上手

首先，将 tabled 添加到项目依赖中：

```rust
[dependencies]
tabled = "0.15"
```

下面是一个最简单的示例，展示如何打印一个 ASCII 边框表格：

```rust
use tabled::{Tabled, Table};

#[derive(Tabled)]
struct Language {
    name: &'static str,
    designed_by: &'static str,
    invented_year: usize,
}

fn main() {
    let languages = vec![
        Language{
            name: "C", 
            designed_by: "Dennis Ritchie",
            invented_year: 1972
        },
        Language{
            name: "Rust",
            designed_by: "Graydon Hoare",
            invented_year: 2010
        },
    ];

    println!("{}", Table::new(languages).to_string());
}
```

上面的代码中，我们定义了一个 `Language` 结构体，然后为它派生了 `Tabled` trait。这样，包含 Language 实例的 Vec 就可以直接传给 `Table::new()` 来创建表格实例了。

`Table::to_string()` 可以将表格转换为字符串，用于打印输出。

上述代码的输出如下：

```rust
+------+----------------+---------------+
| name | designed_by    | invented_year |
+------+----------------+---------------+
| C    | Dennis Ritchie | 1972          |
+------+----------------+---------------+
| Rust | Graydon Hoare  | 2010          |
+------+----------------+---------------+
```

如果想要改变表格样式，只需要调用 `with()` 方法即可。例如，使用 Unicode 双线边框样式：

```rust
use tabled::{settings::Style, Table, Tabled};

#[derive(Tabled)]
struct Language {
    name: &'static str,
    designed_by: &'static str,
    invented_year: usize,
}

fn main() {
    let languages = vec![
        Language{
            name: "C", 
            designed_by: "Dennis Ritchie",
            invented_year: 1972
        },
        Language{
            name: "Rust",
            designed_by: "Graydon Hoare",
            invented_year: 2010
        },
    ];

    println!("{}", Table::new(languages).with(Style::extended()).to_string());
}
```

输出效果：

```rust
╔══════╦════════════════╦═══════════════╗
║ name ║ designed_by    ║ invented_year ║
╠══════╬════════════════╬═══════════════╣
║ C    ║ Dennis Ritchie ║ 1972          ║
╠══════╬════════════════╬═══════════════╣
║ Rust ║ Graydon Hoare  ║ 2010          ║
╚══════╩════════════════╩═══════════════╝
```

`with()` 方法可以用来设置表格的很多样式，如表格边框、对齐方式、填充字符、颜色等。你可以创造出各种好看的表格样式。

### 总结

tabled 是一个功能强大，使用简单的 Rust 终端表格输出库。它能让我们以最少的代码量创建出美观、整洁的表格，适合各种命令行程序场景。

如果你恰好在开发 Rust 命令行程序，不妨试试 tabled 吧，相信会给你的终端带来一场视觉盛宴。

## ynqa/sig：交互式 grep（用于流式处理）

GitHub：[ynqa/sig：交互式 grep（用于流式处理） (github.com)](https://github.com/ynqa/sig)

## **参考文章**

- tabled GitHub 仓库：https://github.com/zhiburt/tabled/

# WebAssembly 运行时库

## Wasmtime

Wasmtime 是一个用于 WebAssembly（简称 WASM）的独立运行时，它由 Bytecode Alliance 项目开发。WASM 是一种为更高效执行和更安全的 Web 应用而设计的二进制指令格式。Wasmtime 运行时为开发者提供了一系列丰富、符合 WASM 标准的 API，并通过优化生成高质量的机器代码，使 WASM 应用能在各种环境中快速、安全地运行。

### 安装与使用 Wasmtime 运行时

您可以通过使用以下简单的安装脚本在 Linux 和 macOS 上安装 Wasmtime CLI：

```bash
curl https://wasmtime.dev/install.sh -sSf | bash
```

对于 Windows 用户或其他感兴趣的用户，可以直接从 GitHub 的 Releases 页面下载安装程序和二进制文件。

安装完 Wasmtime 后，如果您已经安装了 Rust 编译器，就可以使用以下的命令来编译和运行 Rust 源代码：

```rust
// Rust源代码
fn main() {
    println!("Hello, world!");
}
// 编译和运行命令
$ rustup target add wasm32-wasi
$ rustc hello.rs --target wasm32-wasi
$ wasmtime hello.wasm
// 输出：Hello, world!
```

这个示例展示了如何将 Rust 源代码编译为 WASM，并使用 Wasmtime 运行它。

### Wasmtime 的主要特性

- **速度快**：Wasmtime 基于优化的 Cranelift 代码生成器构建，可以快速生成高质量的机器代码。Wasmtime 针对有效实例化、嵌入者和 wasm 之间的低开销调用以及并发实例的可扩展性进行优化。
- **安全**：Wasmtime 的开发强烈专注于正确性和安全性。每个 Wasmtime 特性都通过仔细的审查和考虑通过 RFC 过程。一旦特性被设计和实现，他们就会经受 Google 的 OSS Fuzz 提供的 24/7 模糊测试。随着特性的稳定，他们成为版本发布的一部分，当事情出错时，我们有一个明确的安全策略来快速缓解并修复任何问题。我们遵循深度防御的最佳实践，并集成针对像 Spectre 这样的问题的保护和缓解措施。
- **可配置**：Wasmtime 使用合理的默认设置，但也可以配置提供对 CPU 和内存消耗等方面的更精细控制。

Wasmtime 还提供了许多语言支持。Bytecode Alliance 支持的语言包括 Rust（wasmtime crate）、C（wasm.h、wasi.h、wasmtime.h 头文件）、C++（wasmtime-cpp 库）、Python（wasmtime PyPI 包）、.NET（Wasmtime NuGet 包）、Go（wasmtime-go 库）和 Ruby（wasmtime 宝石）。社区还支持了 Elixir（wasmex hex 包）和 Perl（Wasm Perl 包的 Wasm::Wasmtime）。

## Spin：基于 Rust 的 WebAssembly 驱动的云微服务构建框架

> 在云计算的浪潮中，微服务架构已经成为构建高效、可扩展应用的主流方式。而今，一个名为 Spin 的新星正在冉冉升起，它将 WebAssembly 的强大功能与微服务的灵活性完美结合，为开发者带来了全新的构建和部署云应用的体验。

### 正文

#### 🌟 Spin 是什么？

Spin 是一个开源框架，致力于简化 WebAssembly 微服务的构建、部署和运行过程。它利用最新的 WebAssembly 组件模型和 Wasmtime 运行时，旨在成为开发者入门 WebAssembly 微服务的最便捷途径。

#### 🚀 如何开始使用 Spin？

开始使用 Spin 的旅程非常简单。首先，访问 Spin 的安装页面，获取详细的安装和配置指南。简单来说，只需在终端中运行以下命令：

```
curl -fsSL https://developer.fermyon.com/downloads/install.sh | bash
sudo mv ./spin /usr/local/bin/spin
```

如果你喜欢从源代码构建，Spin 也支持这种方式。

#### 🛠️ 使用 Spin 构建应用

创建一个 Spin 应用就像搭积木一样。首先，你需要安装 Rust 的`wasm32-wasi`目标。然后，使用`spin new`命令，从模板创建一个新的 Spin 应用：

```
spin new --accept-defaults -t http-rust hello-rust
```

这会创建一个名为`hello-rust`的目录，里面包含了你应用所需的所有文件。接下来，进入目录，使用`spin build`构建应用，然后用`spin up`在本地运行它：

```
spin build
spin up
```

现在，你的应用已经在本地运行了，你可以通过浏览器或者 curl 来测试它：

```
curl -i 127.0.0.1:3000
```

### 开始使用

请参阅**安装旋涡**[1]页面的**旋涡文档**[2]以获取有关安装和配置旋涡的详细指南，简而言之，运行以下命令：

```
curl -fsSL https://developer.fermyon.com/downloads/install.sh | bash
sudo mv ./spin /usr/local/bin/spin
```

或者，您可以**从源代码构建旋涡**[3]。

要开始编写应用程序，请遵循**快速入门指南**[4]，然后遵循**Rust**[5]、**JavaScript**[6]、**Python**[7]或**Go**[8]语言指南，以及**编写旋涡应用程序的指南**[9]。

### 使用方法

以下是使用`spin`命令行创建新的旋涡应用程序的示例。要运行示例，您需要为 Rust 安装`wasm32-wasi`目标。

```
$ rustup target add wasm32-wasi
```

首先，运行`spin new`命令，根据模板创建一个旋涡应用程序。

```
# 根据Rust http模板创建一个名为'hello-rust'的新旋涡应用程序，并接受所有默认设置
$ spin new --accept-defaults -t http-rust hello-rust
```

运行`spin new`命令会创建一个`hello-rust`目录，其中包含您的应用程序所需的所有文件。转到`hello-rust`目录，并使用`spin build`构建应用程序，然后使用`spin up`在本地运行它：

```
# 通过执行`build`命令编译为Wasm。
$ spin build
Executing the build command for component hello-rust: cargo build --target wasm32-wasi --release
    Finished release [optimized] target(s) in 0.03s
Successfully ran the build command for the Spin components.

# 在本地运行应用程序。
$ spin up
Logging component stdio to ".spin/logs/"

Serving http://127.0.0.1:3000
Available Routes:
  hello-rust: http://127.0.0.1:3000      (wildcard)
```

就是这样！现在应用程序正在运行，您可以使用浏览器或在另一个 shell 中使用 cURL 来尝试它：

```
# 向应用程序发送请求。
$ curl -i 127.0.0.1:3000
HTTP/1.1 200 OK
foo: bar
content-length: 14
date: Thu, 13 Apr 2023 17:47:24 GMT

Hello, Fermyon
```

您可以通过编辑`hello-rust`目录中的`src/lib.rs`文件来使应用程序做更多事情，使用您喜欢的编辑器或 IDE。要了解更多关于编写旋涡应用程序的信息，请参见旋涡文档中的**编写应用程序**[10]。要了解如何发布和分发您的应用程序，请参见旋涡文档中的**发布和分发**[11]指南。

有关 cli 命令和子命令的更多信息，请参见**CLI 参考**[12]。

### 旋涡功能的语言支持

下面的表格总结了每种语言 SDK 中的**功能支持**[13]。

| 功能                   | Rust SDK 支持？ | TypeScript SDK 支持？ | Python SDK 支持？ | Tiny Go SDK 支持？ | C# SDK 支持？ |
| :--------------------- | :-------------- | :-------------------- | :---------------- | :----------------- | :------------ |
| **触发器**             |                 |                       |                   |                    |               |
| **HTTP**[14]           | 支持            | 支持                  | 支持              | 支持               | 支持          |
| **Redis**[15]          | 支持            | 不支持                | 支持              | 支持               | 不支持        |
| **APIs**               |                 |                       |                   |                    |               |
| **Outbound HTTP**[16]  | 支持            | 支持                  | 支持              | 支持               | 支持          |
| **配置变量**[17]       | 支持            | 支持                  | 支持              | 支持               | 支持          |
| **键值存储**[18]       | 支持            | 支持                  | 支持              | 支持               | 不支持        |
| **SQLite 存储**[19]    | 支持            | 支持                  | 支持              | 支持               | 不支持        |
| **MySQL**[20]          | 支持            | 支持                  | 不支持            | 支持               | 不支持        |
| **PostgreSQL**[21]     | 支持            | 支持                  | 不支持            | 支持               | 支持          |
| **Outbound Redis**[22] | 支持            | 支持                  | 支持              | 支持               | 支持          |
| **Serverless AI**[23]  | 支持            | 支持                  | 支持              | 支持               | 不支持        |
| **可扩展性**           |                 |                       |                   |                    |               |
| **自定义触发器**[24]   | 支持            | 不支持                | 不支持            | 不支持             | 不支持        |

#### 🌐 语言支持

Spin 支持多种编程语言，包括 Rust、TypeScript、Python 和 Go。每种语言都有自己的 SDK，支持不同的特性。例如，Rust 支持自定义触发器，而 TypeScript 则不支持。

### 结语：

Spin 不仅仅是一个工具，它是一个让开发者能够快速上手 WebAssembly 微服务的平台。如果你对新技术充满好奇，想要在云服务的世界中探索更多可能性，那么 Spin 绝对值得一试。让我们一起 Spin 起来，开启云服务的新篇章！

#### 参考资料

[1] 安装旋涡: *https://developer.fermyon.com/spin/install*

[2] 旋涡文档: *https://developer.fermyon.com/spin/index*

[3] 从源代码构建旋涡: *https://developer.fermyon.com/spin/contributing*

[4] 快速入门指南: *https://developer.fermyon.com/spin/quickstart/*

[5] Rust: *https://developer.fermyon.com/spin/rust-components/*

[6] JavaScript: *https://developer.fermyon.com/spin/javascript-components*

[7] Python: *https://developer.fermyon.com/spin/python-components*

[8] Go: *https://developer.fermyon.com/spin/go-components/*

[9] 编写旋涡应用程序的指南: *https://developer.fermyon.com/spin/configuration/*

[10] 编写应用程序: *https://developer.fermyon.com/spin/writing-apps*

[11] 发布和分发: *https://developer.fermyon.com/spin/distributing-apps*

[12] CLI 参考: *https://developer.fermyon.com/common/cli-reference*

[13] 功能支持: *https://developer.fermyon.com/spin/language-support-overview*

[14] HTTP: *https://developer.fermyon.com/spin/http-trigger*

[15] Redis: *https://developer.fermyon.com/spin/redis-trigger*

[16] Outbound HTTP: *https://developer.fermyon.com/spin/rust-components.md#sending-outbound-http-requests*

[17] 配置变量: *https://developer.fermyon.com/spin/variables*

[18] 键值存储: *https://developer.fermyon.com/spin/kv-store-api-guide*

[19] SQLite 存储: *https://developer.fermyon.com/spin/sqlite-api-guide*

[20] MySQL: *https://developer.fermyon.com/spin/rdbms-storage#using-mysql-and-postgresql-from-applications*

[21] PostgreSQL: *https://developer.fermyon.com/spin/rdbms-storage#using-mysql-and-postgresql-from-applications*

[22] Outbound Redis: *https://developer.fermyon.com/spin/rust-components.md#storing-data-in-redis-from-rust-components*

[23] Serverless AI: *https://developer.fermyon.com/spin/serverless-ai-api-guide*

[24] 自定义触发器: *https://developer.fermyon.com/spin/extending-and-embedding*

## 使用Rust WASM开发Web应用必备工具箱

昨日的文章已经描述了Gloo是什么，以及它创建的由来，想要实现的目标。但是在读了之后，还是云里雾里，那么今天再次用心梳理一下，让我们更好地明白一下，Gloo是什么？它的强大之处在哪里？

首先，Gloo是一个库的集合，这些库为浏览器API提供符合人体工程学的Rust包装。单纯使用web-sys或者js-sys很难，因此gloo提供了原始绑定的包装器，它使得使用这些API变得更容易。

请您注意，这是Rust Wasm工作组制作的工具箱，它是为您方便使用WASM开发Web应用程序制作的一套工具箱。WASM的主要特性是高性能，在您需要使用WASM的场景下，您使用gloo来开发可以加速您的工作效率。

我们来看一下Gloo都有哪些库？看完之后想必会有更深的了解。

- console
- dialogs
- events
- file
- history
- net
- render
- storage
- timers
- utils
- worker

从这些库的名称，我们可以看出，它几乎涵盖了WASM所要使用的所有Web 浏览器API。这些库是以Rust风格来实现Web API功能。

我们先看下console库：

我们知道，JavaScript console对象提供了对浏览器控制台的访问。在Rust Wasm中直接使用控制台对象是很麻烦的，它需要JavaScript胶水代码。这个console库就是为了解决这个问题，它提供了一组符合人体工程学的Rust API来处理浏览器控制台。

下面使用该库来打印日志。

```
use gloo_console::log;
let object = JsValue::from("any JsValue can be logged");
log!("text", object);
```

我们看下net库：

它是WASM应用程序的HTTP请求库。它为web_sys fetch，WebSocket，EventSource API提供了Rust绑定。

下面使用该库来请求网络。

HTTP请求

```
let resp = Request::get("/path")
    .send()
    .await
    .unwrap();
assert_eq!(resp.status(), 200);
```

WebSocket请求

```rust
use gloo_net::websocket::{Message, futures::WebSocket};
use wasm_bindgen_futures::spawn_local;
use futures::{SinkExt, StreamExt};

let mut ws = WebSocket::open("wss://echo.websocket.org").unwrap();
let (mut write, mut read) = ws.split();

spawn_local(async move {
    write.send(Message::Text(String::from("test"))).await.unwrap();
    write.send(Message::Text(String::from("test 2"))).await.unwrap();
});

spawn_local(async move {
    while let Some(msg) = read.next().await {
        console_log!(format!("1. {:?}", msg))
    }
    console_log!("WebSocket Closed")
})
```

EventSource请求

```rust

use gloo_net::eventsource::futures::EventSource;
use wasm_bindgen_futures::spawn_local;
use futures::{stream, StreamExt};

let mut es = EventSource::new("http://api.example.com/ssedemo.php").unwrap();
let stream_1 = es.subscribe("some-event-type").unwrap();
let stream_2 = es.subscribe("another-event-type").unwrap();

spawn_local(async move {
    let mut all_streams = stream::select(stream_1, stream_2);
    while let Some(Ok((event_type, msg))) = all_streams.next().await {
        console_log!(format!("1. {}: {:?}", event_type, msg))
    }
    console_log!("EventSource Closed");
})
```



只选择了两个库进行了介绍，剩下的dialogs，events，file，history，render，storage，timers，utils，worker这些库都是方便Rust WASM使用而封装的。这些库共同组成了gloo工具箱。它是Rust WASM开发Web应用所能用到的所有工具。

如果你需要使用Rust WASM来开发Web应用程序，那么推荐你使用这个工具箱，它能大大地增加你的工作效率。

如果你想要为gloo工具箱添砖加瓦，也是非常欢迎的。如果你需要深入了解具体内容请参考Github：

https://github.com/rustwasm/gloo

# Web 框架

在开始构建 Rust Web 应用之前，首先需要选择一个合适的 Web 框架。目前，Rust 最受欢迎的 Web 框架包括 Actix-web、Rocket 和 Warp。

- **Actix-web**：极其强大且灵活，提供了高性能的异步处理能力。
- **Rocket**：以其出色的易用性和安全性而闻名，但只能在 Rust 的夜间版本上运行。
- **Warp**：一个基于 Hyper 的微框架，利用 Rust 的异步特性来提供高效的性能。

[Rust 后端框架 Graphul 入门教程：构建你的 Rust Web 服务 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247493418&idx=1&sn=5d8de90cdd17e47cc0eae510a8698e6b&chksm=c0e7693df790e02bd3184a34a19fcea2d484ffe97e1b53021945fdfd951a64d8615c85163eea&cur_album_id=3386270396001402881&scene=190#rd)

[什么是 Actix Web |阿克提克斯](https://actix.rs/docs/whatis/)

[retep998/winapi-rs：与 Windows API 的 Rust 绑定 (github.com)](https://github.com/retep998/winapi-rs)

[BurntSushi/ripgrep：ripgrep 递归地搜索目录中的正则表达式模式，同时尊重你的 gitignore (github.com)](https://github.com/BurntSushi/ripgrep)

[rust-lang/regex：Rust 正则表达式的实现。此实现使用有限自动机，并保证所有输入上的线性时间匹配。 (github.com)](https://github.com/rust-lang/regex)

[clap-rs/clap：一个功能齐全、快速的 Rust 命令行参数解析器 (github.com)](https://github.com/clap-rs/clap)

[serde-rs/serde：Rust 的序列化框架 (github.com)](https://github.com/serde-rs/serde)

[crossbeam-rs/crossbeam：Rust 中并发编程的工具 (github.com)](https://github.com/crossbeam-rs/crossbeam)

[TeXitoi/structopt：通过定义结构来解析命令行参数。 (github.com)](https://github.com/TeXitoi/structopt)

[dtolnay/thiserror：struct 和 enum 错误类型的 derive（Error） (github.com)](https://github.com/dtolnay/thiserror)

Apache Arrow DataFusion SQL 查询引擎：[apache/arrow-datafusion：Apache Arrow DataFusion SQL 查询引擎 (github.com)](https://github.com/apache/arrow-datafusion)

官网：[apache/arrow-datafusion：Apache Arrow DataFusion SQL 查询引擎 (github.com)](https://github.com/apache/arrow-datafusion)

## Farm 极致性能兼容体验，海量编译特性，真正的下一代 Rust web 构建引擎！

GitHub：https://github.com/farm-fe/farm

[🔥Rust Farm v1.0 发布！极致性能兼容体验，海量编译特性，真正的下一代 Rust web 构建引擎！ - 掘金 (juejin.cn)](https://juejin.cn/post/7357231056288940072)

## tiny-http：Rust中低级别HTTP服务器库

更多内容请参考Github：https://github.com/tiny-http/tiny-http

Rust中小型但强大的HTTP服务器。它的主要目标是100%符合HTTP标准，并提供一种创建HTTP服务器的简单方法。

它可以做什么？

- 接受和管理与客户端的连接
- 解析请求
- 请求处理流水线
- HTTPS（使用OpenSSL、Rustls或本机tls）
- 传输编码和内容编码
- 将用户输入（例如POST输入）转换为连续的UTF-8字符串（尚未实现）
- Ranges（尚未实施）
- 连接：升级（由websockets使用）



tiny-http处理与客户端连接、数据传输和编码相关的一切。其他一切（解析头、多媒体数据、路由、etags、缓存控制、HTML模板等的值）都必须由代码处理。如果你想在Rust中创建一个网站，我强烈建议你使用一个框架而不是这个库。

安装，在Cargo.toml文件中加入

```
[dependencies]tiny_http = "0.11"
```



使用方法：

```
use tiny_http::{Server, Response};

let server = Server::http("0.0.0.0:8000").unwrap();

for request in server.incoming_requests() {
    println!("received request! method: {:?}, url: {:?}, headers: {:?}",
        request.method(),
        request.url(),
        request.headers()
    );

    let response = Response::from_string("hello world");
    request.respond(response);
}
```



Tiny http的设计考虑到了速度：

每个客户端连接都将被调度到一个线程池。每个线程将处理一个客户端。如果客户端连接时没有可用的线程，则会创建一个新线程。长时间空闲（当前为5秒）的线程将自动失效。

如果来自同一客户端的多个请求正在进行流水线处理（即，在不等待答案的情况下发送多个请求），那么tiny-http将一次读取所有请求，并且这些请求都可以通过server.recv（）获得。tiny-http将自动重新排列响应，以便按正确的顺序发送。

有个例外，当一个请求有一个大的正文（当前>1kB）时，在这种情况下，请求处理程序将直接从流中读取正文，而tiny-http将等待它被读取，然后再处理下一个请求。tiny-http永远不会等待一个请求得到回复来读取下一个请求。

当客户端连接发送了最后一个请求（通过发送connection:close头）时，线程将立即停止从此客户端读取，并且可以回收，即使请求尚未得到响应。Socket的读取部分也将立即关闭。

解码客户端的请求是懒惰地完成的。如果你没有阅读请求的正文，它将不会被解码。



## 新一代 Web 框架 Teo，同时支持 Node 和 Python，速度惊人

**相关网址：**

- GitHub：https://github.com/teocloud/teo
- gitee：https://gitee.com/teocloud/teo
- 官网：https://teocloud.io/
- 博客：https://teocloud.io/blog
- 文档：https://docs.teocloud.io/

以结构为核心的新一代网络框架——TEO，**适用于 Rust、Node.js 和 Python 的 Web 框架**，能非常好提高应用程序开发人员在使用 Web 服务器和数据库时的工作效率。值得一提的是，该项目目前已经成为 Gitee 的 GVP 项目。

#### TEO 是什么？

Teo 是新一代 Web 框架。它由以下部分组成：

- Teo schema：直观且创新的模式语言，具有描述性和可读性
- Teo 服务器：用 Rust 编写的高性能核心以及 Node.js、Python 和 Rust 的 API 绑定
- Teo CLI：一种 CLI 工具，用于读取架构并执行作业，包括数据库迁移、运行服务器和播种数据
- Teo 查询客户端：适用于多种平台和语言的自动生成的类型安全查询构建器

#### 为什么使用 TEO ？

**传统 Web 框架**

- **样板代码多**：开发者需要为每个路由编写重复的代码，这不仅耗时，也容易出错。
- **缺乏内置功能**：传统框架往往不提供过滤、排序和分页等常用功能，开发者需要自己实现这些功能。
- **调试困难**：SQL 查询和 MongoDB 聚合的调试过程复杂，容易出错，且耗时。
- **类型和接口重复**：在前端开发中，开发者需要重新声明后端模型的数据类型和接口，造成工作重复。

**Teo 现代 Web 框架：**

- **减少样板代码**：新一代框架通过提供更多的抽象和自动化工具，减少了开发者需要编写的样板代码。
- **内置常用功能**：现代框架通常内置了过滤、排序和分页等常用功能，使得开发者可以轻松实现这些功能，而不需要从头开始编写。
- 新一代框架提供了更好的工具和接口来简化数据库查询和聚合的调试过程，降低了出错的可能性。
- **统一数据类型和接口**：现代框架允许开发者在服务器端定义数据模型和接口，然后自动生成客户端代码，减少了重复工作，并提高了前后端代码的一致性。

关于更多 Teo 可以去官网查阅。

#### 功能与特性

下面来看看 Teo 的提供特性有哪些。

- 极具创新的受 GraphQL 和 Prisma 启发的结构定义
- 自动数据库迁移
- 支持 Rust、Node.js 和 Python
- 支持 MySQL、PostgreSQL、SQLite 和 MongoDB
- 生成的 ORM 类型和接口
- 为前端生成的查询客户端
- 非常高效和高性能
- 数据清理、转换和验证
- 内置用户会话
- 内置权限检查
- 先进后出中间件
- 自定义路由和处理程序

#### 快速入门

典型的 Teo 工作流程由以下部分组成：

**1. 选择您的语言堆栈**

Teo 支持三种服务器端编程语言：Node.js、Python 和 Rust，可以选择你熟悉语言来开展工作。

- Node.js 与 Web 技术配合得很好。
- Python 非常适合与人工智能基础设施交互。
- Rust 追求极致的性能，但它很难编写。

Teo 关心代码重复和生产力。因此，前端客户端是由 Teo 生成的。Teo 支持 5 种前端语言：TypeScript、Swift、Kotlin、C# 和 Dart。这几乎涵盖了主流的前端技术。轻松使用这些生成的客户端或将它们共享给前端开发人员。

注意：目前 Swift、Kotlin、C# 和 Dart 暂时还不支持，但 Teo 团队将于 2024 年的一个目标，相信应该也很快得到支持了。

**2. 架构您的数据**

Teo 拥有一种受 GraphQL 和 Prisma 启发的创新且易于阅读的模式语言。数据库配置、服务器配置、模型和枚举、路由处理程序都在其中声明。所写即所想，所见即所得，这真是太好了。

Teo 采用您详细描述的模式并为您进行数据库迁移、输入验证和转换。

**3. ORM 实体和服务器代码**

自动生成的路由处理程序可以满足 80% 的业务需求。总有一些自定义需求需要开发人员编写代码来处理。Teo 是一个成熟的 Web 框架，而不是无代码或低代码工具。让 Teo 完成繁重的工作并生成 ORM 实体。使用 Teo 的编程 API 以 Teo 支持的任何服务器语言编写代码。

**4. 为前端生成客户端**

**传统前端开发的问题：**

- 开发人员在多个前端项目中重复编写接口请求和参数处理代码，效率低且易出错。

**Teo 框架的解决方案：**

- Teo 自动生成类型安全的前端代码，减少重复工作，提高开发效率。
- 支持多种编程语言，适应不同的开发需求。
- 集成到现有项目或创建新包，提供灵活性。

## Viz：轻量级 Web 框架

[Rust 后端框架 Viz：构建高效 Web 服务的 Rust 框架教程 (qq.com)](https://mp.weixin.qq.com/s/h4zmDzR6icaQHRdgveEunw)

#### 前言

Viz，是个基于 RUst 的，快速、健壮、灵活、轻量级的 Web 框架。

##### 特点

- 安全，禁止不安全代码
- 轻量
- 简单 + 灵活的处理器和中间件
- 链式操作
- 强大的 Routing 路由

#### 一、Hello Viz

##### 1. 创建项目

正如学习编程语言一样，我们先从官方入门案例学起，首先我们创建一个新项目

```
cargo new viz_hello
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_6a2fd0cf90a8417e99d45012a09b103f.png)然后使用 vscode 打开

![image](./Rust框架和库.assets/urc4jn6zkhw3i_e6a355912d9947488695adc41d6879c9.png)

##### 2. 引入 viz

在`Cargo.toml`中写入，如下图

```
tokio = { version = "1.20.1", features = ["full"] }
viz = "0.3.1"
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_423563868c104d2cabc104ef91d32058.png)

然后使用 build 来下载依赖

```
cargo build
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_15bdf7dbea8d4664ab0f5843107ae544.png)

安装完成

![image](./Rust框架和库.assets/urc4jn6zkhw3i_042023d948644de3ae62e2bbc48dfb43.png)

##### 3. 运行 Hello Viz

复制以下代码到`main.rs`，

```
use std::net::SocketAddr;
use viz::{Request, Result, Router, Server, ServiceMaker};
async fn index(_: Request) -> Result<&'static str> {
    Ok("Hello Viz")
}
#[tokio::main]
async fn main() -> Result<()> {
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("listening on {}", addr);
    let app = Router::new().get("/", index);
    if let Err(err) = Server::bind(&addr)
        .serve(ServiceMaker::from(app))
        .await
    {
        println!("{}", err);
    }
    Ok(())
}
```

##### 4. 运行结果

如果你以上步骤没有出错，那么在终端中运行

```
cargo run
```

效果如下图

![image](./Rust框架和库.assets/urc4jn6zkhw3i_098ac149c2674becac27225c6f3d0ab5.png)最后一行的意思是正在监听本地的 127.0.0.1 的 3000 端口，说明程序没有出错

此时在浏览器打开网址

```
http://localhost:3000/
```

> #### 注意
>
> localhost 指向 127.0.0.1

此时页面应该是这个样子的

![image](./Rust框架和库.assets/urc4jn6zkhw3i_58eb26882b2c44ffb59d3d53a8707ab5.png)

#### 二、Hello Viz 代码详解

![image](./Rust框架和库.assets/urc4jn6zkhw3i_51103c36b1ff4842928d0e7208f26a84.png)

从整体上来看，这块代码主要分为 3 个部分，分别是导入组件，处理 index 请求和主程序

##### 导入组件

首先导入了 SocketAddr，用来表示 socket 地址，然后导入了 Viz 的一些组件

- Request 请求
- Result 响应
- Router 路由
- Server 服务器
- ServiceMaker 服务

![image](./Rust框架和库.assets/urc4jn6zkhw3i_14fc814ef5ff45da8c8802d2eb7633ee.png)

##### 处理请求

![image](./Rust框架和库.assets/urc4jn6zkhw3i_ef5103e067aa49709eafe2338be41819.png)这里使用异步函数来实现 index 的处理，传入 Request，这个过程系统会自动为我们处理。然后响应的是字符串类型，在函数体中返回了字符串“Hello Viz”

##### 主函数

![image](./Rust框架和库.assets/urc4jn6zkhw3i_4b3aa9ed463e4f49a6726e5a397e5c7e.png)在 Viz 中，主函数也是异步函数，使用 addr 表示本地地址和监听的端口，然后挂载 Router，使与 index 处理器相联系，再开启服务器。

#### 三、常见用法

##### 简单的处理程序

```
async fn index(_: Request) -> Result<Response> {
    Ok(Response::text("Hello, World!"))
}
async fn about(_: Request) -> Result<&'static str> {
    Ok("About Me!")
}
async fn not_found(_: Request) -> Result<impl IntoResponse> {
    Ok("Not Found!")
}
```

##### 实现处理程序特质

```
#[derive(Clone)]
struct MyHandler {
    code: Arc<AtomicUsize>,
}
#[async_trait]
impl Handler<Request> for MyHandler {
    type Output = Result<Response>;
    async fn call(&self, req: Request) -> Self::Output {
        let path = req.path().clone();
        let method = req.method().clone();
        let code = self.code.fetch_add(1, Ordering::SeqCst);
        Ok(format!("code = {}, method = {}, path = {}", code, method, path).into_response())
    }
}
```

##### 路由传参

Viz 允许更灵活地组织代码。

```
async fn show_user(mut req: Request) -> Result<Response> {
    let Params(id)  = req.extract::<Params<u64>>().await?;
    Ok(format!("post {}", id).into_response())
}
async fn show_user_ext(Params(id): Params<u64>) -> Result<impl IntoResponse> {
    Ok(format!("Hi, NO.{}", id))
}
async fn show_user_wrap(req: Request) -> Result<impl IntoResponse> {
    // https://github.com/rust-lang/rust/issues/48919
    // show_user_ext.call(req).await
    FnExt::call(&show_user_ext, req).await
}
let app = Router::new()
    .get("/users/:id", show_user)
    .get("/users_wrap/:id", show_user_wrap)
    .get("/users_ext/:id", show_user_ext.into_handler());
```

##### 链式组合程序

HandlerExt 是 Handler 的拓展特质，它提供了各种方便的组合函数。比如 FutureExt 和 StreamExt 特质。

```
async fn index(_: Request) -> Result<Response> {
    Ok(Response::text("hyper"))
}
async fn before(req: Request) -> Result<Request> {
    if req.method() == Method::POST {
        Ok(req)
    } else {
        Err(StatusCode::METHOD_NOT_ALLOWED.into_error())
    }
}
async fn around<H>((req, handler): Next<Request, H>) -> Result<Response>
where
    H: Handler<Request, Output = Result<Response>> + Clone,
{
    // before ...
    let result = handler.call(req).await;
    // after ...
    result
}
async fn after(result: Result<Response>) -> Result<Response> {
    result.map(|mut res| {
        *res.status_mut() = StatusCode::NO_CONTENT;
        res
    })
}
let routing = Router::new()
    .get("/", index.before(before).around(around).after(after));
```

##### 中间件

Viz 的中间件和处理程序具有共同的 Handler 特质，因此它很容易实现和扩展中间件。

我们可以将中间件添加到单个处理程序或所有处理程序。

我们还可以在构造过程中使用 Transform 特质 trait 来包装内部处理程序。

```rust
async fn index(_: Request) -> Result<Response> {
    Ok(StatusCode::OK.into_response())
}
async fn not_found(_: Request) -> Result<impl IntoResponse> {
    Ok(StatusCode::OK)
}
async fn show_user(Params(id): Params<u64>) -> Result<impl IntoResponse> {
    Ok(format!("post {}", id))
}
// middleware fn
async fn around<H>((req, handler): Next<Request, H>) -> Result<Response>
where
    H: Handler<Request, Output = Result<Response>>,
{
    // before ...
    let result = handler.call(req).await;
    // after ...
    result
}
// middleware struct
#[derive(Clone)]
struct MyMiddleware {}
#[async_trait]
impl<H> Handler<Next<Request, H>> for MyMiddleware
where
    H: Handler<Request>,
{
    type Output = H::Output;
    async fn call(&self, (i, h): Next<Request, H>) -> Self::Output {
        h.call(i).await
    }
}
// A configuration for Timeout Middleware
struct Timeout {
    delay: Duration,
}
impl Timeout {
    pub fn new(secs: u64) -> Self {
        Self { delay: Duration::from_secs(secs) }
    }
}
impl<H: Clone> Transform<H> for Timeout {
    type Output = TimeoutMiddleware<H>;
    fn transform(&self, h: H) -> Self::Output {
        TimeoutMiddleware(h, self.delay)
    }
}
// Timeout Middleware
#[derive(Clone)]
struct TimeoutMiddleware<H>(H, Duration);
#[async_trait]
impl<H> Handler<Request> for TimeoutMiddleware<H>
where
    H: Handler<Request> + Clone,
{
    type Output = H::Output;
    async fn call(&self, req: Request) -> Self::Output {
        self.0.call(req).await
    }
}
let app = Router::new()
    .get("/", index
        // handler level
        .around(around)
        .around(MyMiddleware {})
        .with(Timeout::new(1))
    )
    .route("/users/:id", get(
        show_user
            .into_handler()
            .map_into_response()
            // handler level
            .around(around)
            .with(Timeout::new(0))
        )
        .post(
            (|_| async { Ok(Response::text("update")) })
            // handler level
            .around(around)
            .with(Timeout::new(0))
        )
        // route level
        .with_handler(MyMiddleware {})
        .with(Timeout::new(2))
    )
    .get("/*", not_found
        .map_into_response()
        // handler level
        .around(around)
        .around(MyMiddleware {})
    )
    // router level
    .with_handler(around)
    .with_handler(MyMiddleware {})
    .with(Timeout::new(4));
```

##### 参数接收器

从 Request 中提取参数。

```
struct Counter(u16);
#[async_trait]
impl FromRequest for Counter {
    type Error = Infallible;
    async fn extract(req: &mut Request) -> Result<Self, Self::Error> {
        let c = get_query_param(req.query_string());
        Ok(Counter(c))
    }
}
fn get_query_param(query: Option<&str>) -> u16 {
   let query = query.unwrap_or("");
   let q = if let Some(pos) = query.find('q') {
       query.split_at(pos + 2).1.parse().unwrap_or(1)
   } else {
       1
   };
   cmp::min(500, cmp::max(1, q))
}
```

##### 路由

识别 URL 和分配处理器。

###### 一个简单的路由

```
async fn index(_: Request) -> Result<Response> {
    Ok(().into_response())
}
let root = Router::new()
  .get("/", index)
  .route("/about", get(|_| async { Ok("about") }));
let search = Router::new()
  .route("/", Route::new().get(|_| async { Ok("search") }));
```

###### CRUD 操作

添加带请求方式的方法。

```
async fn index_todos(_: Request) -> Result<impl IntoResponse> {
    Ok(())
}
async fn create_todo(_: Request) -> Result<&'static str> {
    Ok("created")
}
async fn new_todo(_: Request) -> Result<Response> {
    Ok(Response::html(r#"
        <form method="post" action="/">
            <input name="todo" />
            <button type="submit">Create</button>
        </form>
    "#))
}
async fn show_todo(mut req: Request) -> Result<Response> {
    let Params(id): Params<u64> = req.extract().await?;
    Ok(Response::text(format!("todo's id is {}", id)))
}
async fn update_todo(_: Request) -> Result<()> {
    Ok(())
}
async fn destroy_todo(_: Request) -> Result<()> {
    Ok(())
}
async fn edit_todo(_: Request) -> Result<()> {
    Ok(())
}
let todos = Router::new()
  .route("/", get(index_todos).post(create_todo))
  .post("/new", new_todo)
  .route("/:id", get(show_todo).patch(update_todo).delete(destroy_todo))
  .get("/:id/edit", edit_todo);
```

##### 资源

```
// GET `/search`
async fn search_users(_: Request) -> Result<Response> {
    Ok(Response::json::<Vec<u64>>(vec![])?)
}
// GET `/`
async fn index_users(_: Request) -> Result<Response> {
    Ok(Response::json::<Vec<u64>>(vec![])?)
}
// GET `/new`
async fn new_user(_: Request) -> Result<&'static str> {
    Ok("User Form")
}
// POST `/`
async fn create_user(_: Request) -> Result<&'static str> {
    Ok("Created User")
}
// GET `/user_id`
async fn show_user(_: Request) -> Result<&'static str> {
    Ok("User ID 007")
}
// GET `/user_id/edit`
async fn edit_user(_: Request) -> Result<&'static str> {
    Ok("Edit User Form")
}
// PUT `/user_id`
async fn update_user(_: Request) -> Result<&'static str> {
    Ok("Updated User")
}
// DELETE `/user_id`
async fn delete_user(_: Request) -> Result<&'static str> {
    Ok("Deleted User")
}
let users = Resources::default()
  .named("user")
  .route("/search", get(search_users))
  .index(index_users)
  .new(new_user)
  .create(create_user)
  .show(show_user)
  .edit(edit_user)
  .update(update_user)
  .destroy(delete_user);
```

#### 总结

本期主要是对 Rust 的轻量级 Web 框架 Viz 进行了入门级的了解，并且给出了 Viz 官方的示例代码，包括中间件，响应处理，路由等组件的用法，可以看出 Viz 是个纯 web 框架，非常的简洁。

## Rust 的 Websocket 框架——ws-rs

#### 前言

ws-rs 实现了 MIO 的 WebSockets RFC6455 标准。它允许在单个线程上处理多个连接，甚至可以在同一线程上生成新的客户端连接。这使得 WebSockets 非常快速且资源高效。API 设计抽象了 WebSocket 协议的底层部分，使开发者可以专注于应用程序代码，而不必担心协议的一致性。

#### 一、创建项目

首先还是老规矩，先创建本期内容所需要的工程，由于本期是通信类的 Websocket，因此需要准备两个工程，一个 server，一个 client。

##### 1. 创建服务端项目

```
cargo new ws_rs_server
```

然后添加依赖，将以下内容加入到工程`Cargo.toml`中，如下图所示

```
ws = "0.9.2"
env_logger = "0.6"
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_41df2c704a8649b39a9f25c25e5f7942.png)

##### 2. 创建客户端项目

```
cargo new ws_rs_client
```

然后添加依赖，同样加上刚才的依赖，

```
ws = "0.9.2"
env_logger = "0.6"
```

#### 二、编写测试代码

##### 1.服务端

首先是服务端部分的代码，使用该库需要引入`ws::listen`

```
use ws::listen;
```

然后在 main 中调用，实现监听操作，例如

```rust
// 监听地址并为每个连接调用闭包
    if let Err(error) = listen("127.0.0.1:3012", |out| {
        // 处理程序需要获取out的所有权，因此我们使用move
        move |msg| {
            // 处理在此连接上接收的消息
            println!("服务器收到消息 '{}'. ", msg);
            // 使用输出通道发送消息
            out.send(msg)
        }
    }) {
        // 通知用户故障
        println!("创建Websocket失败，原因： {:?}", error);
    }
```

listen 需要传入两个参数，一个是监听的地址和端口，这里使用的是`127.0.0.1:3012`，然后就是个匿名函数，传入`out`，获取`out`的所有权，然后在其内部使用`move`关键字自动捕获`msg`，其中`msg`就是服务端收到的消息，在服务端开发中，主要处理的就是这部分内容。

这里处理客户端消息逻辑很简单，

1. 输出从客户端接收到的消息
2. 把客户端发送的消息返回

也就是说，实际上就是个 echo，但是还是有点区别的，这个只返回一次。

##### 2.客户端

客户端部分需要引入`connect`用来连接服务端，引入`CloseCode`来关闭连接。

```rust
use ws::{connect, CloseCode};
```

然后就是在`main`中调用，首先是`connect`，其调用方式和`server`的`listen`是一样的，需要传入两个参数，

1. wss 连接，例如`ws://127.0.0.1:3012`，其中`ws://`表示使用 websocket 协议，`127.0.0.1`是 ip 地址，`3012`是端口，值得注意的是要和 server 相对应，否则会连接失败
2. 一个闭包匿名函数，传入`out`

客户端的闭包匿名函数主要要做两件事，

1. 发送消息到服务端
2. 处理来自服务端的消息

这里的示例代码如下

```rust
// 连接到url并调用闭包
    if let Err(error) = connect("ws://127.0.0.1:3012", |out| {
        // 将WebSocket打开时要发送的消息排队
        if out.send("Hello WebSocket").is_err() {
            println!("Websocket无法初始消息排队")
        } else {
            println!("Client 发送消息 'Hello WebSocket'. ")
        }
        // 处理程序需要获取out的所有权，因此我们使用move
        move |msg| {
            // 处理在此连接上接收的消息
            println!("Client 收到消息 '{}'. ", msg);
            // 关闭连接
            out.close(CloseCode::Normal)
        }
    }) {
        // 通知用户故障
        println!("Failed to create WebSocket due to: {:?}", error);
    }
```

可以看到，这段代码的逻辑是，

1. 先发送`Hello WebSocket`到服务端，同时判断发送过程中是否有错，如果发送出错，则输出`Websocket无法初始消息排队`，发送成功的情况下在客户端界面输出`Client 发送消息 'Hello WebSocket'.`
2. 处理来自服务端的消息，可以看到这里和 server 是高度相似的，收到消息后，输出`Client 收到消息 '{}'. `，其中`{}`是服务端消息的占位符，收到消息后直接断开服务端的连接

#### 三、 运行效果

运行服务端

![image](./Rust框架和库.assets/urc4jn6zkhw3i_d2ccfe0ce7cd4a9cade4f41a8d0b48b6.png)

运行客户端

![image](./Rust框架和库.assets/urc4jn6zkhw3i_3460a0af9e8d4d1f8e3f709df101add3.png)

#### 总结

本期学习了 Rust 的 websocket 通信框架 ws-rs，并且编写了两个官方提供的小案例，通过本期内容的学习，你已学会了使用 Rust 来编写 websocket 程序，这个在开发中是具有里程碑意义的，你写的程序从此可以联网进行数据传输，使得程序给用户带来更好的体验，并且会让你的程序变得丰富多彩。

#### 完整代码

##### 服务端

```rust
use ws::listen;
fn main() {
    // 初始化日志
    env_logger::init();
    // 监听地址并为每个连接调用闭包
    if let Err(error) = listen("127.0.0.1:3012", |out| {
        // 处理程序需要获取out的所有权，因此我们使用move
        move |msg| {
            // 处理在此连接上接收的消息
            println!("服务器收到消息 '{}'. ", msg);
            // 使用输出通道发送消息
            out.send(msg)
        }
    }) {
        // 通知用户故障
        println!("创建Websocket失败，原因： {:?}", error);
    }
}
```

##### 客户端

```rust
use ws::{connect, CloseCode};
fn main() {
    // 初始化日志
    env_logger::init();
    // 连接到url并调用闭包
    if let Err(error) = connect("ws://127.0.0.1:3012", |out| {
        // 将WebSocket打开时要发送的消息排队
        if out.send("Hello WebSocket").is_err() {
            println!("Websocket无法初始消息排队")
        } else {
            println!("Client 发送消息 'Hello WebSocket'. ")
        }
        // 处理程序需要获取out的所有权，因此我们使用move
        move |msg| {
            // 处理在此连接上接收的消息
            println!("Client got message '{}'. ", msg);
            // 关闭连接
            out.close(CloseCode::Normal)
        }
    }) {
        // 通知用户故障
        println!("Failed to create WebSocket due to: {:?}", error);
    }
}
```

## Thruster: Rust 快速且直观的 web 框架: 高性能、简单、直观

> 一个旨在提高开发者在项目和团队之间生产力和一致性的 Web 框架

✅ 稳定运行 ✅ 运行快速 ✅ 不使用不安全代码

### 特点

- **考虑到异步/等待的构建**[1]
- **与 Hyper 兼容**[2]
- **支持 SSL**[3]
- **可测试**[4]
- **静态文件服务**[5]
- **SocketIO**[6]
- **gRPC**[7]，以及更多实验性的**非 Tonic 基础的 gRPC**[8]
- **依赖注入**[9]

### 动机

> Thruster 是一个旨在提高开发者在项目和团队之间生产力和一致性的 Web 框架。其目标是：

- 高性能
- 简单
- 直观

Thruster 还：

- 不使用 `unsafe`
- 在稳定版的 Rust 中工作

### 快速

`Thruster` 可以与不同的服务器后端一起运行，并代表了它们之上的一个精心包装的层。这意味着它可以跟上 `Hyper`、`Actix` 或甚至是 `ThrusterServer`（一个自产的 `HTTP` 引擎）的最新和最好的变化。

### 直观

基于像 `Koa` 和 `Express` 这样的框架，`Thruster` 旨在成为一个愉快的开发体验。

### 示例

要运行示例，请使用 `cargo run --example <示例名称>`。 例如，`cargo run --example hello_world` 并打开 **http://localhost:4321/**[10]

#### 中间件基础

使新的异步等待代码工作的核心部分是使用 `#[middleware_fn]` 属性指定中间件函数（这标志着中间件与 Thruster 构建的稳定版 futures 版本兼容），然后在实际路由中的 `m!` 宏。

一个简单的使用异步等待的示例是：

```rust
use std::boxed::Box;
use std::future::Future;
use std::pin::Pin;
use std::time::Instant;

use thruster::{App, BasicContext as Ctx, Request};
use thruster::{m, middleware_fn, MiddlewareNext, MiddlewareResult, Server, ThrusterServer};

#[middleware_fn]
async fn profile(context: Ctx, next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    let start_time = Instant::now();

    context = next(context).await;

    let elapsed_time = start_time.elapsed();
    println!(
        "[{}μs] {} -- {}",
        elapsed_time.as_micros(),
        context.request.method(),
        context.request.path()
    );

    Ok(context)
}

#[middleware_fn]
async fn plaintext(mut context: Ctx, _next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    let val = "Hello, World!";
    context.body(val);
    Ok(context)
}

#[middleware_fn]
async fn four_oh_four(mut context: Ctx, _next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    context.status(404);
    context.body("Whoops! That route doesn't exist!");
    Ok(context)
}

#[tokio::main]
fn main() {
    println!("Starting server...");

    let mut app = App::<Request, Ctx, ()>::new_basic();

    app.get("/plaintext", m![profile, plaintext]);
    app.set404(m![four_oh_four]);

    let server = Server::new(app);
    server.build("0.0.0.0", 4321).await;
}
```

#### 错误处理

这里有一个不错的示例

```rust
use thruster::errors::ThrusterError as Error;
use thruster::proc::{m, middleware_fn};
use thruster::{map_try, App, BasicContext as Ctx, Request};
use thruster::{MiddlewareNext, MiddlewareResult, MiddlewareReturnValue, Server, ThrusterServer};

#[middleware_fn]
async fn plaintext(mut context: Ctx, _next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    let val = "Hello, World!";
    context.body(val);
    Ok(context)
}

#[middleware_fn]
async fn error(mut context: Ctx, _next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    let res = "Hello, world".parse::<u32>()
        .map_err(|_| {
            let mut context = Ctx::default();

            context.status(400);

            ThrusterError {
                context,
                message: "Custom error message".to_string(),
                cause: None,
            }
        }?;

    context.body(&format!("{}", non_existent_param));

    Ok(context)
}

#[tokio::main]
fn main() {
    println!("Starting server...");

    let app = App::<Request, Ctx, ()>::new_basic()
        .get("/plaintext", m![plaintext])
        .get("/error", m![error]);

    let server = Server::new(app);
    server.build("0.0.0.0", 4321).await;
}
```

### 测试

Thruster 提供了一个简单的测试套件来测试您的端点，只需如下包含 `testing` 模块：

```rust
let mut app = App::<Request, Ctx, ()>::new_basic();

...

app.get("/plaintext", m![plaintext]);

...

let result = testing::get(app, "/plaintext");

assert!(result.body == "Hello, World!");
```

### 制作您自己的中间件模块

制作中间件非常简单！只需创建一个函数并将其导出为模块级别。下面，您将看到一个允许对请求进行分析的中间件：

```rust
#[middleware_fn]
async fn profiling<C: 'static + Context + Send>(
    mut context: C,
    next: MiddlewareNext<C>,
) -> MiddlewareResult<C> {
    let start_time = Instant::now();

    context = next(context).await?;

    let elapsed_time = start_time.elapsed();
    info!("[{}μs] {}", elapsed_time.as_micros(), context.route());

    Ok(context)
}
```

您可能会发现您想要在上下文中存储更具体的数据，例如，也许您想要将查询参数注入到一个哈希映射中，供其他中间件后续使用。为了做到这一点，您可以为上下文创建一个额外的特质，下游的中间件必须遵守。查看提供的 **query_params 中间件**[11] 作为示例。

### 其他或自定义后端

Thruster 能够仅在某种服务器之上提供路由层，例如上面的 Hyper 代码片段。只要服务器实现了 `ThrusterServer`，这可以广泛地应用于任何后端。

```rust
use async_trait::async_trait;

#[async_trait]
pub trait ThrusterServer {
    type Context: Context + Send;
    type Response: Send;
    type Request: RequestWithParams + Send;

    fn new(App<Self::Request, Self::Context>) -> Self;
    async fn build(self, host: &str, port: u16);
}
```

需要有：

- 一个简单的方法来创建一个服务器。
- 一个函数来构建服务器到一个可以加载到异步运行时中的未来。

在 `build` 函数内，服务器实现应该：

- 启动某种连接监听器
- 调用 `let matched = app.resolve_from_method_and_path(<some method>, <some path>);`（这是提供实际路由。）
- 调用 `app.resolve(<incoming request>, matched)`（这运行了链式中间件。）

### 为什么你应该使用 Thruster

- 随意更换您的后端。Thruster 现在可以与 **actix-web**[12], **hyper**[13], 或 **自定义后端**[14] 一起使用。
- Thruster 从框架级别支持 **测试**[15]。
- @trezm 当没有人做 PR 或打开问题时会感到孤独。
- Thruster 对于更以中间件为中心的概念更加简洁——像一个路由守卫。以这个 actix 的示例为例，限制 IP：

```rust
fn ip_guard(head: &RequestHead) -> bool {
    // 检查 Cloudflare 的 IP 头
    let ip = if let Some(val) = head.headers().get(CF_IP_HEADER) {
        val.to_str().unwrap_or("").to_owned()
    } else if let Some(val) = head.peer_addr {
        val.to_string()
    } else {
        return false;
    };

    "1.2.3.4".contains(&ip)
}

#[actix_web::post("/ping")]
async fn ping() -> Result<HttpResponse, UserPersonalError> {
    Ok(HttpResponse::Ok().body("pong"))
}

...
        web::scope("/*")
            // 这可能会令人困惑，但我们捕捉到所有没有
            // IP 守卫的路由并返回错误。
            .guard(guard::Not(ip_guard))
            .route("/*", web::to(HttpResponse::Forbidden)),
    )
    .service(ping);
...
```

这里是 Thruster 的代码：

```rust
#[middleware_fn]
async fn ip_guard(mut context: Ctx, next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    if "1.2.3.4".contains(&context.headers().get("Auth-Token").unwrap_or("")) {
        context = next(context).await?;

        Ok(context)
    } else {
        Err(Error::unauthorized_error(context))
    }

}

#[middleware_fn]
async fn ping(mut context: Ctx, _next: MiddlewareNext<Ctx>) -> MiddlewareResult<Ctx> {
    context.body("pong");
    Ok(context)
}

...
    app.get("/ping", m![ip_guard, plaintext]);
...
```

更直接一点很不错！

### 为什么你不应该使用 Thruster

- 它的维护者很少（几乎只有一个。）
- 有其他项目经过了更多的实战测试。Thruster 在生产中使用，但不是在你知道或重要的地方。
- 它还没有被非常聪明的人优化。@trezm 尽力而为，但总是被他的狗分散注意力。
- 严肃地说，这个框架 ~可能~ 是很棒的，但它肯定没有像其他框架那样被深入探索和测试。你的帮助可以使它变得更安全、更健壮，但我们可能还没有完全达到那个水平。

### 路由解析算法

路由解析算法应该是相当清晰的。它的工作流程如下：

#### 构建

1. 移除查询参数，将其附加到请求对象上（或稍后可访问的某处）
2. 按斜杠将路由拆分，现在你有了一个组件列表
3. 将其添加到树中，将 `*` 和 `:param` 视为通配符 例如：`get("/a/b")` 和 `get(":id")` 应该生成如下树状结构

```
根节点 (/)
|\
| \
a  *  // 通配符节点
|
|
b
```

#### 解析

1. 与构建期间相同，拆分传入的路由

2. 设置 `current_node = 根节点`

3. 如果 `split.get(0)` 不存在，解析完成，返回累积的中间件

4. 检查第一部分（`split.get(0)`）是否与 `current_node` 匹配

5. 1. 检查是否有通配符节点，如果有则 `current_node = current_node.wildcard`
   2. 如果没有通配符，则路由未找到，调用 404 处理器
   3. 设置 `current_node = 子节点`
   4. 累积该节点附加的任何中间件
   5. 如果匹配
   6. 如果不匹配

6. 移除拆分后的第一段（或增加索引）

7. 返回步骤 3

这个算法确保了路由请求可以高效地与预定义的路由树进行匹配，同时允许使用通配符来匹配动态路径段。通过累积中间件，它还支持在路由层级结构中的不同点添加处理逻辑。如果路由匹配失败，则调用定义的 404 错误处理程序。

### 技术路线

#### 目标

- 可选的依赖注入
- 异步 Diesel/Diesel 2.0
- 改进的 WebSocket 支持
- 改进的 gRPC 支持

#### 延伸目标

- 改进 Socket.IO 支持
- 易于使用的 Askama 中间件
- 易于使用的前端库（如 Yew、Leptos 等）

### 动机

难以置信，我已经在这个项目上工作了这么长时间——到现在已经五年半了。随着时间的推移，它经历了许多迭代，API 发生了变化，底层算法也发生了变化，但目标始终不变；制作一个易于使用、性能优越的框架，具有同构的中间件/请求处理器。在这个意义上，我认为 Thruster 已经基本实现了这些目标。

话虽如此，一个框架之所以成为一个框架，是因为它所支持的生态系统和库。多年来，Thruster 已经被用于许多不同的应用程序和产品，但它缺乏一个坚实的扩展/解决方案基础，用于解决常见问题和用例。我重写数据库集成或重新集成模板引擎的次数已经到了我确信我可以在蒙眼的情况下完成它们的地步——为什么它们不作为框架的一个易于使用的组成部分存在呢？

总的来说，Thruster 需要更好地、更容易地支持大多数开发人员面临的常见用例。这个路线图应该作为一个近期到中期的里程碑清单，以实现更容易的集成和对常见开发人员用例的更好支持。

### 目标

#### 包含可选的依赖注入（Jab）

Thruster 拥有一个很棒的测试套件——可以轻松地对 `App` 进行测试，同时还能逐步调试代码。话虽如此，拥有外部 API 集成和依赖可能意味着代码需要编译时标志，以便单元测试不会调用外部提供商（或您架构中的其他服务！）。考虑到这一点，很久以前，JabDI 诞生了。

可选包含 Jab 将减轻这方面的担忧。开发人员将能够在不需要编译时标志的情况下，以安全、强类型的方式动态交换模块的虚拟版本进行测试。

#### 包含可选的 Diesel 2.0 支持

Diesel 是一个非常棒的 ORM，真的。多年来，我构建了一些 **ORM 类似的包**[16]，但与 Diesel 相比，它们的范围和能力都相形见绌。随着异步 Diesel 库和 Diesel 2.0 的出现，是时候让 Thruster 制作一个易于使用的模块或一组模块来包含它了。这里的目标是提供一种方法，轻松地将 Diesel 融入新的基于 Thruster 的项目中。

#### 改进 WebSocket 支持

WebSocket 对于 Thruster 的同构中间件设计来说是一个绝佳的用例。它们也是现代 Web 中实时发布/订阅通信的重要组成部分。目前有一些实验性的 crates 为 Thruster 使用它们，例如 Socket.IO 实现，但还没有一个简单暴露的仅 WebSocket 的实现。

#### 改进 GRPC 支持

GRPC 已经存在很长时间了，但仍然在日益流行。它快速、类型安全，并且在许多不同的平台上都有实现。当前的 GRPC 支持在 **thruster-grpc**[17] 中，需要一些改进，以使其更快、更易于使用。

### 延伸目标

#### 改进 Socket.IO 支持

至少有两个生产级别的服务正在积极使用 **socket.io**[18] 库，但该库本身并不支持 Socket.IO 的一些关键特性，如轮询回退。它作为一个概念验证非常强大，但理想的情况是制作一个更完整的、符合规范的实现。

代码本身也不是很好，应该进行清理。

#### 包含可选的 Askama 支持

Askama 是一个很棒的基于 Jinja 的模板库。它快速，API 很棒。Thruster 应该有一个内置的或易于使用的模块，用于包含 Askama，而不需要重写样板代码。理想情况下，这将是一个特定的 Askama 中间件，可以轻松地添加到任何 Thruster 应用程序中。

#### 包含前端动态渲染库

除了 Askama 提供服务器端渲染之外，支持像 **Yew**[19] 或 **Leptos**[20] 这样的前端库也将是极好的。对于那些希望实现更 "express-like" 生态系统的人来说，这是理想的，他们可以轻松地在整个栈中使用一种语言，而不必担心（太多）编译步骤、CDN 和 CORS。

### 总结

如果你读到这里，那我很佩服！我自己可能不会完整地阅读整篇文章——我可能会跳过顶部的项目符号然后继续。这个大纲将为我自己（以及任何其他愿意贡献的人！）提供明年的大量工作。如果我遗漏了你认为需要的功能，请随时提出问题。欢迎任何形式的新贡献，即使是修复一个错别字。

祝你有一个好的一年，并建造一些很酷的东西，我的朋友们。

### 参考资料

[1] 考虑到异步/等待的构建: *https://github.com/thruster-rs/Thruster/blob/master/thruster/examples/profiling.rs#L11*

[2] 与 Hyper 兼容: *https://github.com/thruster-rs/Thruster/blob/master/thruster/examples/hyper_most_basic.rs*

[3] 支持 SSL: *https://github.com/thruster-rs/Thruster/tree/master/thruster/examples/hyper_most_basic_ssl*

[4] 可测试: _#测试_

[5] 静态文件服务: *https://github.com/thruster-rs/Thruster/tree/master/thruster/examples/static_file*

[6] SocketIO: *https://github.com/thruster-rs/thruster-socketio*

[7] gRPC: *https://github.com/thruster-rs/Thruster/tree/master/thruster/examples/grpc*

[8] 非 Tonic 基础的 gRPC: *https://github.com/thruster-rs/thruster-grpc*

[9] 依赖注入: *https://github.com/thruster-rs/thruster-jab*

[10] http://localhost:4321/: _http://localhost:4321/_

[11] query_params 中间件: *https://github.com/thruster-rs/Thruster/blob/master/thruster/src/middleware/query_params.rs*

[12] actix-web: *https://github.com/thruster-rs/Thruster/blob/master/thruster/examples/actix_most_basic.rs*

[13] hyper: *https://github.com/thruster-rs/Thruster/blob/master/thruster/examples/hyper_most_basic.rs*

[14] 自定义后端: *https://github.com/thruster-rs/Thruster/blob/master/thruster/examples/hello_world.rs*

[15] 测试: _#测试_

[16] ORM 类似的包: https://github.com/trezm/usual

[17] thruster-grpc: https://github.com/thruster-rs/thruster-grpc

[18] socket.io: https://github.com/thruster-rs/thruster-socketio

[19] Yew: https://github.com/yewstack/yew

[20] Leptos: https://github.com/leptos-rs/leptos

## Salvo(赛风)：Rust Web 后端框架 核心功能详解

Salvo(赛风) 是一个极其简单且功能强大的 Rust Web 后端框架. 仅仅需要基础 Rust 知识即可开发后端服务。

特色：

- 有着比 axum 等更丰富的功能，但却更易于上手。
- 跟 go 等其他语言框架更接近，比 Rust 语言各个 Web 框架更少的类型系统的烦恼。
- 支持 HTTP1, HTTP2 and HTTP3;
- 统一的中间件和 Handler 接口，无需任何复杂语言只是，轻松实现中间件。灵活高效。
- 内置表单处理，强大的提取器，轻松反序列请求数据到结构体。
- 支持 WebSocket, WebTransport
- 对 OpenAPI 最完美的支持，且内置多种开源 OpenAPI 展示界面
- 支持 Acme， 可以轻松获取并自动更新免费的 TLS 证书
- 适配 Tower 生态

文章教程：[Salvo(赛风) Rust Web 后端框架 核心功能教程详解 (qq.com)](https://mp.weixin.qq.com/s/qK3gua-3IqhSGiwWpXnNAw)

### 参考资料

[1] Hyper1：https://crates.io/crates/hyper

[2] Tokio：https://crates.io/crates/tokio

[3] let's encrypt：https://letsencrypt.org/

[4] 实例代码：https://github.com/salvo-rs/salvo/tree/main/examples

[5] 官网：https://salvo.rs

[6] salvo-cli：https://github.com/salvo-rs/salvo-cli

[7] 完整源码：https://github.com/salvo-rs/salvo/blob/main/examples/middleware-add-header/src/main.rs

[8] 完整源码：https://github.com/salvo-rs/salvo/blob/main/examples/routing-guid/src/main.rs

[9] 完整源码：https://github.com/salvo-rs/salvo/blob/main/examples/extract-nested/src/main.rs

[10] MultiMap：https://docs.rs/multimap/latest/multimap/struct.MultiMap.html

[11] extract-nested：https://github.com/salvo-rs/salvo/blob/main/examples/extract-nested/src/main.rs

[12] code rust：`../../../../codes/custom-error-page/src/main.rs`

[13] code toml：`../../../../codes/custom-error-page/Cargo.toml`

[14] code rust：`../../../../codes/use-depot/src/main.rs`

[15] code toml：`../../../../codes/use-depot/Cargo.toml`

[16] 最新文档：https://docs.rs/salvo_core/latest/salvo_core/test/index.html

## Warp 框架：构建高效 Web 服务的新选择

> ❝
>
> 在现代 Web 开发中，性能和安全性是两个至关重要的因素。Rust 语言以其内存安全和并发性能而闻名，而 Warp 框架则是 Rust 生态中一个高性能的 Web 服务器框架。本文将介绍 Warp 框架的基本概念、特性以及如何利用它来构建高效的 Web 服务。
>
> ❞

### 什么是 Warp？

`Warp` 是一个基于 Rust 语言的 Web 服务器框架，它建立在 Hyper 库之上，因此天生支持异步处理、HTTP/2 协议，以及提供“正确的 HTTP 实现”。Warp 的设计哲学是简单易用和高度可组合，它通过一个强大的 Filter 系统，提供了灵活的 HTTP 处理方式。

### Warp 的核心特性

1. **「异步支持」**：Warp 基于 Tokio 运行时，可以处理异步任务，这使得它在处理高并发请求时表现出色。
2. **「HTTP/2 支持」**：Warp 支持 HTTP/2，这意味着更快的数据传输和更优的用户体验。
3. **「Filter 系统」**：Warp 的 Filter 系统允许开发者以声明式的方式构建路由和中间件逻辑，这极大地提高了代码的可读性和维护性。
4. **「安全性」**：Rust 语言的设计保证了内存安全，Warp 框架也继承了这一特性，提供了安全的 Web 服务构建保障。

Warp 的核心构件是“过滤器”(Filter)，它们能够灵活组合，以精准定义对请求的各项要求。

借助其内置的过滤器系统，`Warp` 框架提供了以下内置功能：

- 路径路由与参数抽取
- 请求头要求与抽取
- 查询字符串的反序列化
- `JSON` 和表单数据的处理
- 多部分表单数据处理
- 静态文件与目录的快速访问
- `WebSockets` 支持
- 访问日志记录
- 支持 `Gzip`、`Deflate` 与 `Brotli` 压缩算法
- Warp 框架构建于 Hyper 库之上，因此它天生具备以下特性：
- 支持 HTTP/1 和 HTTP/2 协议
- 异步处理能力
- 作为最快速的 HTTP 实现之一
- 经过严格测试，确保正确性
- Warp 框架以其简洁、高效和强大的功能集，为开发者提供了一个快速构建高性能 Web 服务的理想选择。

### 安装与使用

在 Rust 项目中安装 Warp 非常简单，只需要在`Cargo.toml`文件中添加 Warp 作为依赖即可。例如：

```rust
[dependencies]
tokio = { version = "1", features = ["full"] }
warp = "0.3"
```

之后，可以通过组合不同的 Filter 来定义路由和处理请求。一个基本的“Hello, World”示例可以这样实现：

```rust
use warp::Filter;

#[tokio::main]
async fn main() {
    let hello = warp::path!("hello" / String)
        .map(|name| format!("Hello, {}!", name));

    warp::serve(hello).run(([127, 0, 0, 1], 3030)).await;
}
```

通过运行上述代码，你可以在本地启动一个 Web 服务器，通过访问`http://127.0.0.1:3030/hello/warp`来测试“Hello, World”服务。

### 过滤器

在 Warp 中，主要概念是“过滤器”（Filter），它允许组合多个条件来描述您的 Web 服务中的各种端点。除了这一强大的特性，Warp 还自带了多个内置的过滤器，可以根据您的特定需求进行组合。

以一个具有路径和头部要求的端点为例：

```rust
use warp::Filter;

let hi = warp::path("hello")
    .and(warp::path::param())
    .and(warp::header("user-agent"))
    .map(|param: String, agent: String| {
        format!("Hello {}, whose agent is {}", param, agent)
    });
```

这个例子使用`and`方法将多个过滤器组合在一起：

- “hello”作为路径前缀
- 一个字符串类型的路径参数
- 解析为字符串的`user-agent`请求头

这些特定的过滤器会拒绝不符合它们要求的请求。

最终，它会匹配如下请求：

```bash
GET /hello/sean HTTP/1.1
Host: hyper.rs
User-Agent: reqwest/v0.8.6
```

并返回类似这样的响应：

```bash
HTTP/1.1 200 OK
Content-Length: 41
Date: ...

Hello sean, whose agent is reqwest/v0.8.6
```

查看完整的过滤器列表，了解您可以构建的功能。

测试 轻松测试您的 Web 服务极其重要，Warp 提供了一个测试模块，帮助您通过服务发送模拟请求。

模块

- `filters`：内置的过滤器。
- `redirect`：将请求重定向到新位置。
- `reject`：拒绝请求。
- `reply`：响应请求。
- `test`：测试工具，用于测试您的过滤器。

宏

- `path`：方便地组合多个路径过滤器。

结构体

- `Error`：Warp 内部可能发生的错误。
- `Server`：准备就绪的 Warp 服务器，用于过滤请求。
- `TlsServer`：准备就绪的 Warp 服务器，用于通过 TLS 过滤请求。

特征

- `Filter`：可组合的请求过滤器。

函数

- `serve`：使用提供的过滤器创建一个服务器。
- `service`：将过滤器转换为服务。
- `wrap_fn`：将接收到的过滤器与前置和后置过滤器组合。

### 模块

`warp::filters` 主要作为文档存在，用于汇总内置过滤器的列表。这些过滤器大多数在更方便的路径上可用。

#### 模块概览

- **「addr」**：用于处理 Socket 地址的过滤器。
- **「any」**：一个匹配任何路由的过滤器。
- **「body」**：处理请求体的过滤器。
- **「compression」**：压缩过滤器，用于压缩响应体。
- **「cookie」**：处理 HTTP 请求中 Cookie 的过滤器。
- **「cors」**：跨源资源共享（CORS）过滤器，用于处理跨域请求。
- **「ext」**：请求扩展过滤器，用于处理 HTTP 请求的扩展部分。
- **「fs」**：文件系统过滤器，用于读取本地文件系统中的文件。
- **「header」**：处理 HTTP 请求头的过滤器。
- **「host」**：处理 HTTP 请求中的“主机”（authority）部分的过滤器。
- **「log」**：日志记录过滤器，用于记录请求和响应的日志。
- **「method」**：HTTP 方法过滤器，根据 HTTP 请求方法进行匹配。
- **「multipart」**：多部分请求体过滤器，用于处理多部分请求。
- **「path」**：路径过滤器，用于匹配 URL 路径并提取路径参数。
- **「query」**：查询字符串过滤器，用于解析和处理查询字符串。
- **「reply」**：响应过滤器，用于构造 HTTP 响应。
- **「sse」**：服务器发送事件（SSE）过滤器，用于创建 SSE 连接。
- **「trace」**：追踪过滤器，用于监控和追踪请求处理过程。
- **「ws」**：WebSocket 过滤器，用于处理 WebSocket 连接升级。

Warp 框架通过这些内置的过滤器提供了强大的路由和请求处理能力，使得开发者能够灵活地构建复杂的 Web 服务。每个过滤器都可以单独使用或与其他过滤器组合使用，以满足具体的业务需求。

### 结构体

#### `warp::filters::BoxedFilter`

```
pub struct BoxedFilter<T: Tuple> { /* private fields */ }
```

代表一个封装了 `Filter` trait 对象的类型。

这个结构体内部是一个动态的 trait 对象。它的目的是为了简化从其他函数返回过滤器。

#### 创建 `BoxedFilter`

要创建 `BoxedFilter`，可以在任何过滤器上调用 `Filter::boxed` 方法。

#### 示例

```rust
use warp::{Filter, filters::BoxedFilter, Reply};

pub fn assets_filter() -> BoxedFilter<(impl Reply,)> {
    warp::path("assets")
        .and(warp::fs::dir("./assets"))
        .boxed()
}
```

#### 特征实现 (Trait Implementations)

- `Clone`：为 `BoxedFilter<T>` 实现了 `Clone` 特征，允许克隆 `BoxedFilter` 对象。
- `Debug`：为 `BoxedFilter<T>` 实现了 `Debug` 特征，允许使用格式化调试输出。

#### 自动特征实现 (Auto Trait Implementations)

- `Freeze`：实现了 `Freeze`，表明 `BoxedFilter<T>` 可以被冻结，即它的内部数据不可变。
- `Send`：实现了 `Send`，表明 `BoxedFilter<T>` 可以安全地在多线程间传递。
- `Sync`：实现了 `Sync`，表明多个线程可以同时访问 `BoxedFilter<T>`。
- `Unpin`：实现了 `Unpin`，表明 `BoxedFilter<T>` 不是固定（pinned）状态，可以自由移动。
- `!UnwindSafe`：实现了 `!UnwindSafe`，表明 `BoxedFilter<T>` 在 Rust 的栈展开（unwinding）过程中可能不安全。

#### 通用特征实现 (Blanket Implementations)

- `Any`：为所有 `'static + ?Sized` 类型实现了 `Any` 特征，允许使用 `as_any` 和 `downcast_ref` 方法。
- `Borrow<T>` 和 `BorrowMut<T>`：为所有 `?Sized` 类型实现了借用特征，允许借用和借用突变。
- `Filter`：为所有实现了 `FilterBase` 的 `T` 实现了 `Filter` 特征。
- `From<T>`：为所有类型实现了 `From` 特征，允许进行类型转换。
- `Instrument`：为所有类型实现了 `Instrument` 特征，用于监控和跟踪。
- `Same`：为所有类型实现了 `Same` 特征，用于比较两个类型是否相同。
- `ToOwned`：为所有实现了 `Clone` 的 `T` 实现了 `ToOwned` 特征，允许创建类型的所有权副本。
- `TryFrom<U>` 和 `TryInto<U>`：为所有类型实现了尝试从 `U` 转换和尝试转换为 `U` 的特征。
- `VZip<V>`：为所有 `V: MultiLane<T>` 的 `T` 实现了 `VZip` 特征，允许多车道的压缩。
- `WithSubscriber`：为所有类型实现了 `WithSubscriber` 特征，允许与监控订阅者一起使用。

`BoxedFilter` 结构体提供了一种灵活的方式，允许将过滤器作为动态类型传递和返回，这在构建模块化和可重用的 Web 服务时非常有用。

#### 宏 `warp::path`

```rust
macro_rules! path {
    ($($pieces:tt)*) => { ... };
}
```

`warp::path`宏提供了一种方便的方法来链接多个路径过滤器。

可以传递任意数量的类型标识符或字符串表达式，每个表达式之间用正斜杠 (/) 分隔。字符串用于精确匹配路径段，而类型标识符的用法与 `param` 过滤器相同。

#### 示例

```rust
use warp::Filter;

// 匹配 `/sum/:a/:b`
let route = warp::path!("sum" / u32 / u32)
    .map(|a, b| {
        format!("{} + {} = {}", a, b, a + b)
    });
```

如果不使用 `path!` 宏，等效的过滤器链看起来如下：

```rust
use warp::Filter;

let route = warp::path("sum")
    .and(warp::path::param::<u32>())
    .and(warp::path::param::<u32>())
    .and(warp::path::end())
    .map(|a, b| {
        format!("{} + {} = {}", a, b, a + b)
    });
```

#### 路径前缀

`path!` 宏自动假定路径应该包含一个 `end()` 过滤器。要构建一个路径过滤器前缀，使得不包含 `end()`，可以使用 `/ ..` 语法。

```rust
use warp::Filter;

let prefix = warp::path!("math" / "sum" / ..);

let sum = warp::path!(u32 / u32)
    .map(|a, b| {
        format!("{} + {} = {}", a, b, a + b)
    });

let help = warp::path::end()
    .map(|| "This API returns the sum of two u32's");

let api = prefix.and(sum.or(help));
```

在这个例子中，`prefix` 创建了一个路径前缀 `"math" / "sum"`，并且没有自动添加 `end()` 过滤器。这允许在前缀的基础上进一步添加更多的路径过滤器，或者使用 `sum` 和 `help` 这样的独立路由。最终，`api` 将 `sum` 路由和 `help` 路由组合在由 `prefix` 定义的路径前缀下。

#### 结构体 `warp::Error`

```rust
pub struct Error { /* private fields */ }
```

表示在 Warp 中可能发生的错误。

#### 特征实现 (Trait Implementations)

- `Debug`：为 `Error` 实现了 `Debug` 特征，允许使用格式化调试输出。
- `Display`：为 `Error` 实现了 `Display` 特征，提供了错误信息的字符串表示形式。
- `Error`：为 `Error` 实现了 `Error` 特征，这是 Rust 标准库中的错误处理 trait，提供了对错误的低级源的访问，如果存在的话。

##### 已弃用的方法

- `description`：此方法已被弃用，建议使用 `Display` 实现或 `to_string()` 方法。
- `cause`：此方法已被弃用，被 `Error::source` 替代，后者支持向下转型。

##### 实验性 API

- `provide`：这是一个仅在夜间版本中可用的实验性 API，它基于错误报告提供了基于类型的上下文访问。

#### 从其他类型转换

- `From<Infallible>`：实现了从 `Infallible`（一种永远不会发生错误的类型）转换为 `Error`。

#### 自动特征实现 (Auto Trait Implementations)

- `Freeze`：实现了 `Freeze`，表明 `Error` 可以被冻结，即它的内部数据不可变。
- `Send`：实现了 `Send`，表明 `Error` 可以安全地在多线程间传递。
- `Sync`：实现了 `Sync`，表明多个线程可以同时访问 `Error`。
- `Unpin`：实现了 `Unpin`，表明 `Error` 不是固定（pinned）状态，可以自由移动。
- `!UnwindSafe`：实现了 `!UnwindSafe`，表明 `Error` 在 Rust 的栈展开（unwinding）过程中可能不安全。

#### 通用特征实现 (Blanket Implementations)

- `Any`：为所有 `'static + ?Sized` 类型实现了 `Any` 特征，允许使用 `as_any` 和 `downcast_ref` 方法。
- `Borrow<T>` 和 `BorrowMut<T>`：为所有 `?Sized` 类型实现了借用特征，允许借用和借用突变。
- `From<T>`：为所有类型实现了 `From` 特征，允许进行类型转换。
- `Instrument`：为所有类型实现了 `Instrument` 特征，用于监控和跟踪。
- `Same`：为所有类型实现了 `Same` 特征，用于比较两个类型是否相同。
- `ToString`：为所有实现了 `Display` 的类型实现了 `ToString` 特征，允许转换为字符串。
- `TryFrom<U>` 和 `TryInto<U>`：为所有类型实现了尝试从 `U` 转换和尝试转换为 `U` 的特征。
- `VZip<V>`：为所有 `V: MultiLane<T>` 的 `T` 实现了 `VZip` 特征，允许多车道的压缩。
- `WithSubscriber`：为所有类型实现了 `WithSubscriber` 特征，允许与监控订阅者一起使用。

`warp::Error` 结构体是 Warp 框架中错误处理的核心，它通过多种特征实现了灵活的错误处理和上下文提供。

### 函数`warp::service`

```rust
pub fn service<F>(filter: F) -> FilteredService<F>
where
    F: Filter,
    <F::Future as TryFuture>::Ok: Reply,
    <F::Future as TryFuture>::Error: IsReject,
```

将一个 `Filter` 转换成 `Service`。

在 Warp 中，API 通常是基于 `Filter` 构建的。然而，将 `Filter` 转换成 `Service` 可能会很有用，比如，如果你想要进一步自定义 `hyper::Service`，或者想要利用 Tower 提供的更广泛的中间件集合。

#### 示例

在常规的 `hyper::Server` 上运行 `warp::Filter`：

```rust
use std::convert::Infallible;
use warp::Filter;

// 定义一个 Filter...
let route = warp::any().map(|| "Hello From Warp!");

// 将其转换为 `Service`...
let svc = warp::service(route);

// 典型的 hyper 服务器设置...
let make_svc = hyper::service::make_service_fn(move |_| async move {
    Ok::<_, Infallible>(svc)
});

// 启动服务器...
let server = hyper::Server::bind(&([127, 0, 0, 1], 3030).into())
    .serve(make_svc);

// 异步运行服务器...
server.await?;
```

在这个例子中，我们首先创建了一个简单的 Warp `Filter`，它对任何请求都映射成一个字符串 "Hello From Warp!"。然后，我们使用 `warp::service` 函数将这个 `Filter` 转换成一个 `Service`。接着，我们使用 `hyper::service::make_service_fn` 创建了一个 `make_svc`，它为每个传入的请求生成我们的 Warp `Service`。最后，我们绑定到本地的 3030 端口并启动 `hyper::Server`，它将使用我们的 Warp `Service` 来处理请求。

通过这种方式，Warp `Filter` 可以轻松地集成到基于 Hyper 的异步服务器中，同时还能利用 Hyper 的特性和生态。这为构建和扩展 Rust 中的异步 Web 服务提供了极大的灵活性。

#### 示例

欢迎使用示例！这些示例展示了 `warp` 的功能，并解释了如何使用它。

开始入门

要开始，请运行 `examples/hello.rs`：

```bash
cargo run --example hello
```

这将在您的本地主机端口 3030 上启动一个简单的“Hello World”服务。

打开另一个终端并运行：

```bash
curl http://localhost:3030/hi
```

Hello, World!

恭喜你，你刚刚运行了你的第一个 Warp 服务！

你可以使用 `cargo run --example [example name]` 运行其他示例：

- `hello.rs`[1] - 只是一个基本的“Hello World”API
- `routing.rs`[2] - 构建更复杂的路由集合，并展示如何组合过滤器
- `body.rs`[3] - 没有解析请求体数据的 API 算什么好 API？
- `headers.rs`[4] - 从请求头中解析数据
- `rejections.rs`[5] - 你的 API 显然很完美，但对于以错误方式调用它们的人来说，你会想为他们定义错误
- `futures.rs`[6] - 等等！...或者说如何将 futures 集成到过滤器中
- `todos.rs`[7] - 将这些整合在一起构建一个合适的应用

#### 更多用例

##### 服务 HTML 和其他文件

- `file.rs`[8] - 服务静态文件
- `dir.rs`[9] - 或整个目录的文件
- `handlebars_template.rs`[10] - 使用 Handlebars 填充 HTML 模板

##### WebSockets

万岁！`warp` 也内置了对 WebSockets 的支持

- `websockets.rs`[11] - WebSocket 升级的基本处理
- `websockets_chat.rs`[12] - 完整的 WebSocket 应用

##### 服务器端事件 (Server-Side Events)

- `sse.rs`[13] - 基本的服务器端事件
- `sse_chat.rs`[14] - 完整的 SSE 应用

##### TLS

- `tls.rs`[15] - 我可以拥有安全性吗？

##### 自动重载

- `autoreload.rs`[16] - 更改一些代码并观察服务器自动重载！

##### 调试

- `tracing.rs`[17] - Warp 内置了丰富的诊断支持，使用 `tracing`[18]！

##### 自定义 HTTP 方法

- `custom_methods.rs`[19] - 也可以使用 Warp 与自定义 HTTP 方法。

### 部署与性能

`Warp` 作为一个完整的 `HTTP` 服务器，不需要额外的动态服务器支持，可以很容易地部署在各种环境中。由于其高效的处理能力，`Warp` 尤其适合需要高性能的 `Web` 应用场景。

### 结语

`Warp` 框架以其高效、安全和易用性，在 `Rust` 的 `Web` 开发领域中占据了一席之地。对于追求高性能 Web 服务的开发者来说，`Warp` 无疑是一个值得考虑的选择。随着 `Rust` 语言和生态系统的不断发展，`Warp` 框架也将持续演进，为开发者提供更加强大的工具和更优的体验。

---

**「参考文献」**：

warp - Rust - Docs.rs：https://docs.rs/warp/latest/warp/

### Reference

[1] `hello.rs`:./hello.rs

[2] `routing.rs`:./routing.rs

[3] `body.rs`:./body.rs

[4] `headers.rs`:./headers.rs

[5] `rejections.rs`:./rejections.rs

[6] `futures.rs`:./futures.rs

[7] `todos.rs`:./todos.rs

[8] `file.rs`:./file.rs

[9] `dir.rs`:./dir.rs

[10] `handlebars_template.rs`:./handlebars_template.rs

[11] `websockets.rs`:./websockets.rs

[12] `websockets_chat.rs`:./websockets_chat.rs

[13] `sse.rs`:./sse.rs

[14] `sse_chat.rs`:./sse_chat.rs

[15] `tls.rs`:./tls.rs

[16] `autoreload.rs`:./autoreload.rs

[17] `tracing.rs`:./tracing.rs

[18] `tracing`:https://docs.rs/tracing

[19] `custom_methods.rs`:./custom_methods.rs

[20] warp - Rust - Docs.rs:https://docs.rs/warp/latest/warp/

## Trillium：Rust Web 框架实战指南

教程，异步、模块化、可扩展

### `Trillium` Rust Web 框架实战指南

#### 简介

> `Trillium` 是一个现代化的 Rust Web 框架，以其异步、模块化和可扩展性著称。它不仅支持快速开发简单的 Web 应用，还能构建复杂的全栈服务。

#### 安装与配置

开始之前，确保你已经安装了 `Rust` 编译器和 `Cargo`。创建一个新的 Rust 项目，并通过 `Cargo.toml` 文件引入 Trillium：

```bash
[dependencies]
trillium = "0.2"
```

#### 快速入门

`Trillium` 的入门非常简单。以下是一个基本的服务器示例，它使用 `trillium_smol` 运行时来启动一个简单的 HTTP 服务器：

```rust
fn main() {
    trillium_smol::run(|conn: trillium::Conn| async move {
        conn.ok("hello from trillium!")
    });
}
```

#### 核心概念

Trillium 的核心是 `Conn` 类型，它代表了一个 HTTP 请求和响应的连接。而 `Handler` trait 允许你定义如何处理这些连接。

```rust
use trillium::{Conn, Handler};

struct MyHandler;

impl Handler for MyHandler {
    fn handle(&self, conn: Conn) -> Conn {
        // 在这里处理请求并返回响应
        conn.ok("Hello from MyHandler!")
    }
}
```

#### 进阶特性

Trillium 提供了丰富的特性，如 Router、WebSockets 和静态文件服务，这些都可以通过添加相应的依赖并实现相应的功能来启用。

#### 异步支持

Trillium 完全支持异步 Rust，这意味着你可以轻松地编写非阻塞代码，大幅提升应用程序的性能。

```rust
use trillium::{async_trait, Conn, Handler};

#[async_trait]
impl Handler for MyAsyncHandler {
    async fn handle(&self, conn: Conn) -> Conn {
        // 异步处理逻辑
        conn.ok("Hello from an async handler!")
    }
}
```

好的，让我们针对安全性、性能测试和部署等关键环节，进一步补充细节。

### 安全性

Trillium 提供了多种机制来确保应用的安全性：

1. **HTTPS 支持**：通过 `trillium-rustls` 集成，可以轻松地为应用添加 TLS 支持。

   ```rust
   use trillium::Conn;
   use trillium_rustls::TlsHandler;

   let handler = TlsHandler::new(/* 配置证书和密钥 */)
       .and_then(/* 其他 handler 链 */);
   ```

2. **安全头**：Trillium 允许你设置 HTTP 安全头，如 `Content-Security-Policy`，以防止跨站脚本攻击（XSS）和数据泄露。

   ```rust
   use trillium::conn::Handler;
   use trillium::headers::{HeaderName, HeaderValue};
   
   let secure_headers = |conn: Conn| {
       let mut response = conn.response_builder();
       response.header(HeaderName::from_static("Content-Security-Policy"), HeaderValue::from_static("default-src 'self'"));
       response.into_inner()
   };
   ```

### 性能测试

性能测试是确保应用能够承受高负载的关键步骤：

1. **基准测试**：Rust 提供了内置的基准测试框架，可以用来测试 Handler 的性能。

   ```rust
   #[cfg(test)]
   mod tests {
       use super::*;

       #[bench]
       fn bench_handler(b: &mut test::Bencher) {
           let handler = MyHandler;
           b.iter(|| async {
               // 模拟请求并处理
               let _ = handler.handle(/* 模拟 Conn */).await;
           });
       }
   }
   ```

2. **压力测试**：使用像 `wrk` 或 `hyperfine` 这样的工具对应用进行压力测试，模拟多用户同时访问的场景。

### 部署

Trillium 应用可以部署到多种环境中：

1. **本地部署**：对于开发和测试，可以直接在本地运行 Trillium 应用。

   ```bash
   cargo run
   ```

2. **生产部署**：在生产环境中，可以使用容器化技术如 Docker，或者通过专业的 Rust 应用部署服务。

   ```bash
   FROM rust:latest AS build
   WORKDIR /usr/src/myapp
   COPY . .
   RUN cargo install --path .

   FROM rust:latest AS run
   WORKDIR /usr/src/myapp
   COPY --from=build /usr/local/cargo/bin/myapp /usr/local/bin/myapp
   CMD ["myapp"]
   ```

3. **云服务**：可以利用云服务商如 AWS、Azure 或 Google Cloud Platform 提供的容器服务来部署 Trillium 应用。

### 核心概念：处理器、连接和适配器

构建 `Trillium` 应用程序时最重要的概念是 `Conn` 类型和 `Handler` 特性。每个 `Conn` 代表单个 `HTTP` 请求/响应对，而 `Handler` 是所有应用程序、中间件和端点实现的特性。

让我们先从简单的 `Trillium` 应用程序概览开始，然后更深入地探讨这些概念。

```rust
fn main() {
    trillium_smol::run(|conn: trillium::Conn| async move {
        conn.ok("hello from trillium!")
    });
}
```

在这个示例中，`trillium_smol::run` 是运行时适配器，闭包是一个处理器，它对它接收到的任何 Web 请求都响应 "hello from trillium!"。这是一个完整的、功能完备的示例，你只需要以下依赖即可运行：

```rust
[dependencies]
trillium = "0.2"
trillium-smol = "0.2"
```

如果我们运行 `cargo run` 这个示例，然后可以在浏览器中访问 http://localhost:8080 或者对那个 URL 发送 curl 请求，就可以看到 "hello from trillium!" 作为响应体。请注意，我们不会在终端看到任何输出，因为 Trillium 默认是静默的。

#### 处理器

处理器最简单的形式是任何接受 Conn 并返回 Conn 的异步函数。这个示例设置了一个 200 Ok 状态并设置了字符串正文。

```rust
use trillium::Conn;
async fn hello_world(conn: Conn) -> Conn {
    conn.ok("hello world!")
}
```

无需进一步修改，我们就可以将这个处理器放入 Trillium 服务器中，它将为我们响应 HTTP 请求。这里我们使用的是基于 smol-runtime 的服务器适配器。

```rust
pub fn main() {
    trillium_smol::run(hello_world);
}
```

我们也可以将此定义为闭包：

```rust
pub fn main() {
    trillium_smol::run(|conn: trillium::Conn| async move {
        conn.ok("hello world")
    });
}
```

这个处理器将响应任何路径的请求，并且它将始终发送一个带有 "hello world" 正文的 200 Ok HTTP 状态。

#### 状态处理器

Trillium 在主 trillium crate 中只提供了一个处理器：State 处理器，它将您提供的任何类型的副本放置到每个通过它的 conn 的状态集中。有关示例使用的详细信息，请参见 State 的 rustdocs。

#### 元组处理器

之前，我们讨论了我们可以使用状态在处理器之间发送数据，并且处理器总是可以将 conn 原样传递。为了使用此功能，我们需要引入元组处理器的概念。

元组处理器中的每个处理器从左到右被调用，直到 conn 被停止。

🔌 熟悉 Elixir Plug 的读者会认识到这个概念与流水线完全相同，而术语 "halt" 是受到 Plug 的启发而借用的

```rust
env_logger::init();
use trillium_logger::Logger;
run((
    Logger::new(),
    |conn: Conn| async move { conn.ok("tuple!") }
));
```

这段代码片段为我们的应用程序添加了一个 HTTP 日志记录器，因此如果我们使用 `RUST_LOG=info cargo run` 执行应用程序并向 `http://localhost:8000` 发送请求，我们将在标准输出上看到日志输出。

- 🧑‍🎓❓ 为什么不是向量或数组？

`Rust` 向量和数组是类型同质的，因此为了在上述示例中的数组或向量中存储 `Logger` 和闭包类型，我们需要将它们分配到堆上，并且实际上在同质集合中存储一个智能指针。`Trillium` 最初是围绕 "序列" 的概念构建的，它们是 `Vec<Box<dyn Handler + 'static>>`的包装器。因为元组对它们的每个元素都是通用的，所以它们可以包含不同大小的异质元素，而无需堆分配或智能指针。

#### 实现处理器

`Handler` 的 `rustdocs` 包含了库作者的 `Handler` 接口的完整详细信息。对于许多应用程序，除了异步函数或闭包之外，使用任何其他东西可能都不是必要的，但是 `Handler` 可以包含自己的状态，并且可以为任何您编写的类型实现。

由 `trillium crate` 提供的各种实现 您可能会在测试和示例中看到一些其他类型。

- `()`：无操作处理器，与 `|conn: Conn| async move { conn }` 相同。
- `&'static str 和 String：`这个简单的处理器通过停止、设置 200-ok 状态，并将字符串内容作为响应正文来响应所有 `conn`。`trillium_smol::run("hello")` 与 `trillium_smol::run(|conn: Conn| async move { conn.ok("hello") })` 相同。
- `Option<impl Handler>`：如果 Option 变体是 none，这个处理器将无操作。这在根据配置或环境条件地在运行时包含处理器时非常有用。

### Conn

在我们进一步探索处理器的概念之前，先来看看 Conn。如上所述，Conn 代表请求和响应，以及应用程序与该请求-响应周期相关联的任何数据。

#### 高级说明

虽然 Conn 的命名直接借鉴自 `Elixir` 的 `Plug`，因此也用于 `Phoenix`，但它实际上（在 Rust 的意义上）也拥有表示与 HTTP 客户端连接的单一 `TcpStream`，丢弃 `Conn` 也将导致客户端断开连接。

`Conn` 的 `rustdocs` 包含了你可以用 conn 做的所有事情的完整详细信息。

#### 返回 Conn

通常情况下，因为你将从处理器返回 Conn，它支持一个可链式（流畅的）接口来设置属性，例如：

```rust
conn.with_status(202)
    .with_response_header("content-type", "application/something-custom")
    .with_body("this is my custom body")
```

#### 访问 `HTTP` 请求属性

Conn 还包含只读属性，如请求头、请求路径和请求方法，每个属性都有与之关联的获取器函数。

#### 默认响应

Conn 的默认响应是 404，没有响应体，因此从处理器返回未经修改的 Conn 总是有效的（`|conn: Conn| async move { conn }` 是最简单的有效处理器）。

#### 状态

除了持有请求属性和累积应用程序将要发送的响应之外，Conn 还作为数据结构，用于存储应用程序需要与该请求关联的任何信息。这对于处理器之间的通信特别有价值，大多数核心处理器都是使用 conn 状态实现的。一个重要的注意事项是，每个 Conn 只能包含每种类型恰好一个实例，因此强烈建议仅在状态中存储你定义的类型。

#### 与 `Tide` 的比较

Tide 有三种不同类型的状态：服务器状态、请求状态和响应状态。在 Trillium 中，服务器状态是通过 trillium::State 处理器实现的，该处理器持有任何可以克隆的类型，并将该类型的一个副本放入通过处理器的每个 Conn 的状态中。

#### 扩展 `Conn`

在 trillium 中，库扩展 Conn 以提供额外功能是一个非常常见的模式。Conn 接口不支持会话、Cookie、路由参数或其他许多其他框架构建到核心类型中的构建块。相反，以会话为例，trillium_sessions 提供了一个 SessionConnExt trait，为 Conn 提供了提供会话支持的关联函数。一般来说，将数据放入 conn 状态的处理器也会提供方便的函数来访问该状态，并会导出一个 [Something]ConnExt trait。

#### 示例

要查看这些模式之一的示例，请参见 library_patterns，了解如何编写这些库之一。

### 运行时适配器和 TLS

#### 运行时适配器

让我们更详细地讨论我们一直在写的 trillium_smol::run 行。Trillium 本身是建立在未来（具体来说，是 future-lite）之上的。为了运行它，它需要一个适配器来连接异步运行时。目前有四个这样的适配器：

- trillium_smol
- trillium_async_std
- trillium_tokio
- trillium_aws_lambda

尽管我们在这些文档中一直使用 smol 适配器，但你应该使用你更喜欢的任何运行时。如果你预计会有对 async-std 或 tokio 的依赖，那么最好使用那个运行时的适配器。如果你是异步 Rust 的新手或没有偏好，我建议从 trillium_smol 开始。在任何时候切换 Trillium 到不同的运行时都很容易。

#### 默认情况下遵循 12 因素原则，但可覆盖

Trillium 力求遵循配置的 12 因素方法，尽可能地从环境接受配置。可以通过环境变量自定义的配置点数量可能会随着时间的推移而增加。

要使用不同的主机或端口运行 Trillium，可以提供 HOST 和/或 PORT 环境变量，或者将特定值编译到应用程序中，如下所示：

```rust
pub fn main() {
    trillium_smol::config()
        .with_port(1337)
        .with_host("127.0.0.1")
        .run(|conn: trillium::Conn| async move { conn.ok("hello world") })
}
```

除了从环境接受 HOST 和 PORT 配置外，在 cfg(unix) 系统上，Trillium 还会使用 LISTEN_FD 环境变量与 catflap/systemfd 一起使用。在 cfg(unix) 系统上，如果 HOST 以 .、/ 或 ~ 开头，它被解释为路径并作为 Unix 域套接字绑定。

有关默认值的更多文档以及可以链接到 config() 上的配置，请参阅 trillium_server_common::Config。

#### TLS / HTTPS

除了 aws lambda（在负载平衡器处提供自己的 tls 终止）之外，上述每个服务器都可以与 rustls 或 native-tls 结合使用，或者与 trillium-acme 结合使用，以自动使用 Let's Encrypt 等 ACME 证书提供商注册证书。

##### Rustls:

```rust
use trillium::Conn;
use trillium_rustls::RustlsAcceptor;

const KEY: &[u8] = include_bytes!("./key.pem");
const CERT: &[u8] = include_bytes!("./cert.pem");

pub fn main() {
    env_logger::init();
    trillium_smol::config()
        .with_acceptor(RustlsAcceptor::from_single_cert(CERT, KEY))
        .run(|conn: Conn| async move { conn.ok("ok") });
}
```

##### 原生 tls:

```rust
use trillium::Conn;
use trillium_native_tls::NativeTlsAcceptor;

pub fn main() {
    env_logger::init();
    let acceptor = NativeTlsAcceptor::from_pkcs12(include_bytes!("./identity.p12"), "changeit");
    trillium_smol::config()
        .with_acceptor(acceptor)
        .run(|conn: Conn| async move { conn.ok("ok") });
}
```

##### 通过 Let's Encrypt 自动 HTTPS:

查看 trillium-acme 文档中的示例。

### 路由器

Trillium 的路由器基于 routefinder。这个路由器支持两种类型的模式：未类型化的参数和单个通配符。命名参数被捕获在一个类似映射的接口中。任何处理器都可以安装在路由器（包括其他路由器）内部，允许整个应用程序被安装在路径上，并允许给定路由上运行元组处理器。在包含 `*` 的路由内安装的任何处理器都将使 URL 被重写为该星号的内容。

基于 routefinder 的替代路由器是创新和探索的绝佳机会。

以下是一个简单的应用程序示例，它响应请求 `http://localhost:8000/greet/earth` 时返回 "hello earth"，响应 `http://localhost:8000/greet/mars` 时返回 "hello mars"，响应 `http://localhost:8000` 时返回 "hello everyone"：

```rust
use trillium::Conn;
use trillium_router::{Router, RouterConnExt};

pub fn main() {
    trillium_smol::run(
        Router::new()
            .get("/", |conn: Conn| async move { conn.ok("hello everyone") })
            .get("/hello/:planet", |conn: Conn| async move {
                let planet = conn.param("planet").unwrap();
                let response_body = format!("hello {planet}");
                conn.ok(response_body)
            }),
    );
}
```

### 嵌套

Trillium 还支持路由器的嵌套，使得可以表达复杂的子应用程序，类似于 Rails 引擎。当存在其他类型的路由器时，使用一种类型的路由器构建的应用程序将可以作为一个 crate 发布，并嵌套在另一个路由器内部，只要它们依赖于 trillium crate 的兼容版本。

```rust
use trillium::{conn_try, conn_unwrap, Conn, Handler};
use trillium_logger::Logger;
use trillium_router::{Router, RouterConnExt};

struct User {
    id: usize,
}

mod nested_app {
    use super::*;
    async fn load_user(conn: Conn) -> Conn {
        let id = conn_try!(conn.param("user_id").unwrap().parse(), conn);
        let user = User { id }; // 假设我们是从数据库中加载用户
        conn.with_state(user)
    }

    async fn greeting(mut conn: Conn) -> Conn {
        let user = conn_unwrap!(conn.take_state::<User>(), conn);
        conn.ok(format!("hello user {}", user.id))
    }

    async fn post(mut conn: Conn) -> Conn {
        let user = conn_unwrap!(conn.take_state::<User>(), conn);
        let body = conn_try!(conn.request_body_string().await, conn);
        conn.ok(format!("hello user {}, {}", user.id, body))
    }

    async fn some_other_route(conn: Conn) -> Conn {
        conn.ok("this is an uninspired example")
    }

    pub fn handler() -> impl Handler {
        (
            load_user,
            Router::new()
                .get("/greeting", greeting)
                .get("/some/other/route", some_other_route)
                .post("/post", post),
        )
    }
}

pub fn main() {
    env_logger::init();
    trillium_smol::run((
        Logger::new(),
        Router::new()
            .get("/", |conn: Conn| async move { conn.ok("hello everyone") })
            .any(&["get", "post"], "/users/:user_id/*", nested_app::handler()),
    ));
}
```

### 模板引擎

Trillium 目前支持三种模板引擎，虽然它们并不互斥，但大多数应用程序通常最多只会选择其中一种。

#### Askama

Askama 是一个基于 Jinja 的模板引擎，它在编译时预处理模板，生成高效且类型安全的模板，并编译到应用程序的二进制文件中。以下是 Askama 的示例：

在 `（cargo root）/templates/examples/hello.html` 文件中给定以下内容：

```rust
Hello, {{ name }}!
use trillium::Conn;
use trillium_askama::{AskamaConnExt, Template};

#[derive(Template)]
#[template(path = "examples/hello.html")]
struct HelloTemplate<'a> {
    name: &'a str,
}

fn main() {
    trillium_smol::run(|conn: Conn| async move {
        conn.render(HelloTemplate { name: "world" })
    });
}
```

#### Ructe

Ructe 是一个与 Askama 类似的编译时类型模板系统，但它使用构建脚本而不是宏。

- **Crate**: **https://crates.io/crates/trillium-ructe**[1]
- **Repository**: **https://github.com/prabirshrestha/trillium-ructe**[2]
- **Docs**: **https://docs.rs/trillium-ructe/latest/trillium_ructe/**[3]

Ructe 的使用示例可以在提供的 GitHub 仓库或官方文档中找到。

#### Tera

Tera 提供运行时模板渲染。Trillium 的 Tera 集成提供了一个与 Phoenix 或 Rails 非常相似的接口，在渲染之前将赋值设置在 Conn 上。

在与 `main.rs` 相同目录下的 `examples` 文件夹中给定以下文件：

```rust
Hello, {{ name }}!
use trillium::Conn;
use trillium_tera::{TeraConnExt, TeraHandler};

fn main() {
    trillium_smol::run((TeraHandler::new("**/*.html"), |conn: Conn| async move {
        conn.assign("name", "hi").render("examples/hello.html")
    }));
}
```

#### Handlebars

Handlebars 也提供运行时模板渲染。

在 `examples/templates/hello.hbs` 文件中给定以下内容：

```rust
hello {{name}}!
use trillium::Conn;
use trillium_handlebars::{HandlebarsConnExt, HandlebarsHandler};

fn main() {
    env_logger::init();
    trillium_smol::run((
        HandlebarsHandler::new("./examples/templates/*.hbs"),
        |conn: Conn| async move {
            conn.assign("name", "world")
                .render("examples/templates/hello.hbs")
        },
    ));
}
```

选择哪种模板引擎取决于你的个人偏好和应用程序的具体需求。每种引擎都有其特点和优势，例如 Askama 和 Ructe 提供编译时检查，而 Tera 和 Handlebars 提供了更灵活的运行时模板渲染。

### 日志

```rust
use trillium::{Conn, State};
use trillium_logger::{apache_combined, Logger};

#[derive(Clone, Copy)]
struct User(&'static str);

impl User {
    pub fn name(&self) -> &'static str {
        self.0
    }
}

fn user_id(conn: &Conn, _color: bool) -> &'static str {
    conn.state::<User>().map(User::name).unwrap_or("-")
}

pub fn main() {
    trillium_smol::run((
        State::new(User("jacob")),
        Logger::new().with_formatter(apache_combined("-", user_id)),
        "ok",
    ));
}
```

### Cookies

```rust
use trillium::Conn;
use trillium_cookies::{CookiesConnExt, CookiesHandler};

pub fn main() {
    env_logger::init();

    trillium_smol::run((CookiesHandler::new(), |conn: Conn| async move {
        if let Some(cookie_value) = conn.cookies().get("some_cookie") {
            println!("current cookie value: {}", cookie_value.value());
        }

        conn.with_cookie(("some_cookie", "some-cookie-value"))
            .ok("ok!")
    }));
}
```

### 会话（Sessions）

在 Web 框架中，会话是一种常见约定，它允许以一种安全的方式关联服务器端数据与特定的 HTTP 客户端（浏览器）。Trillium 的会话存储建立在 `async-session` crate 之上，这允许我们与 Tide 分享会话存储。目前，存在以下会话存储：

1. **MemoryStore**（作为 `trillium_sessions::MemoryStore` 重新导出）
2. **CookieStore**（作为 `trillium_sessions::CookieStore` 重新导出）
3. **PostgresSessionStore** 和 **SqliteSessionStore** 来自 `async-sqlx-session`
4. **RedisSessionStore** 来自 `async-redis-session`
5. **MongodbSessionStore** 来自 `async-mongodb-session`

⚠️ **注意**：生产应用中应避免使用内存存储和 Cookie 存储。内存存储在服务器进程重启时将丢失所有会话状态，而 Cookie 存储与数据库支持的存储相比，涉及不同的安全权衡。如果可能，使用数据库。

❗**会话处理器必须与 Cookie 处理器一起使用，并且必须在 Cookie 处理器之后运行**。这种特定的交互也存在于其他框架中，这是因为无论使用哪种会话存储，会话都使用安全 Cookie 作为唯一标识符。

```rust
use trillium::Conn;
use trillium_cookies::CookiesHandler;
use trillium_sessions::{MemoryStore, SessionConnExt, SessionHandler};

pub fn main() {
    env_logger::init();

    trillium_smol::run((
        CookiesHandler::new(),
        SessionHandler::new(MemoryStore::new(), "01234567890123456789012345678901123"),
        |conn: Conn| async move {
            let count: usize = conn.session().get("count").unwrap_or_default();
            conn.with_session("count", count + 1)
                .ok(format!("count: {count}"))
        },
    ));
}
```

在这个示例中，我们使用 `MemoryStore` 创建了一个会话处理器，并通过 `SessionHandler` 设置了一个加密密钥。然后，我们创建了一个简单的处理器，用于增加会话中的计数器并返回新的计数值。注意，会话处理器需要在 `CookiesHandler` 之后使用，以确保 Cookie 已经设置，会话可以正确地被检索和更新。

### 代理（Proxy）

Trillium 包含了一个定制的 HTTP 客户端实现，以支持反向代理请求。这个客户端有两种 TLS 实现。

```rust
use trillium_client::Client;
use trillium_logger::Logger;
use trillium_proxy::{
    upstream::{ConnectionCounting, IntoUpstreamSelector, UpstreamSelector},
    Proxy,
};
use trillium_smol::ClientConfig;

pub fn main() {
    env_logger::init();
    let upstream = if std::env::args().count() == 1 {
        // 如果没有提供额外的命令行参数，使用默认的上游服务器
        "http://localhost:8080".into_upstream().boxed()
    } else {
        // 否则，将所有提供的命令行参数作为上游服务器
        std::env::args()
            .skip(1)
            .collect::<ConnectionCounting<_>>()
            .boxed()
    };

    trillium_smol::run((
        Logger::new(),
        Proxy::new(
            Client::new(ClientConfig::default()).with_default_pool(),
            upstream,
        )
        .with_via_pseudonym("trillium-proxy"),
    ));
}
```

在这个示例中，Trillium 作为一个反向代理运行。如果没有提供命令行参数，它将把请求转发到 `http://localhost:8080`。如果提供了参数，它们将被用作上游服务器的地址。`ConnectionCounting` 维护每个上游服务器的连接数，这对于测试或负载均衡非常有用。

`Proxy` 使用 `Client` 来执行传出请求，并且可以配置一个连接池。`with_via_pseudonym` 用于设置 HTTP 请求的 `Via` 头部的伪名，这是代理服务器的常见做法。

#### 注意

- `into_upstream()` 函数将一个字符串转换为 `UpstreamSelector`，它允许 Trillium 知道请求应该被转发到哪个上游服务。
- `boxed()` 将 `UpstreamSelector` 转换为 `Box<dyn UpstreamSelector>`，这样就可以在 `Proxy::new` 中使用了。
- `ClientConfig` 允许你为 HTTP 客户端配置选项，如超时、最大响应体大小等。
- `with_default_pool()` 为 HTTP 客户端创建了一个默认的连接池。

使用 Trillium 的代理功能，你可以构建复杂的网络拓扑，实现负载均衡、故障转移、SSL 终止、请求修改等。

### 静态文件服务

Trillium 提供了两种基本的静态文件服务方法。目前，这两种方法都还没有执行任何与缓存相关的头部检查。

#### 从磁盘服务

这个处理器在请求时从磁盘加载内容，并且还没有执行任何内存缓存。

```rust
#[cfg(unix)]
pub fn main() {
    use trillium_static::{crate_relative_path, files};
    trillium_smol::run((
        trillium_logger::logger(),
        files(crate_relative_path!("examples/files")).with_index_file("index.html"),
    ))
}

#[cfg(not(unix))]
pub fn main() {}
```

在这个示例中，Trillium 被配置为从相对于 cargo crate 的路径 `"examples/files"` 服务静态文件，并将 `"index.html"` 作为索引文件。

#### 从内存服务（编译时）

这个处理器将所有静态内容包含在编译后的二进制文件中，允许它独立于资源进行分发。

```rust
#[cfg(unix)]
pub fn main() {
    use trillium_static_compiled::static_compiled;

    trillium_smol::run((
        trillium_logger::Logger::new(),
        trillium_caching_headers::CachingHeaders::new(),
        static_compiled!("./examples/files").with_index_file("index.html"),
    ));
}

#[cfg(not(unix))]
pub fn main() {}
```

在这个示例中，使用 `static_compiled!` 宏将位于 `./examples/files` 的静态文件在编译时包含进二进制文件中，并且同样将 `"index.html"` 作为索引文件。此外，使用 `CachingHeaders` 中间件为静态文件添加缓存相关的 HTTP 头部，这有助于提高性能并减少网络传输。

#### 注意

- `crate_relative_path!` 宏生成相对于当前 crate root 的路径，它在构建时确定。
- `static_compiled!` 宏将指定目录中的文件包含在最终的二进制文件中，使得可以在没有单独的文件系统结构的情况下提供静态文件。
- `CachingHeaders` 中间件添加了 `Cache-Control` 和 `ETag` 头部，使得客户端和代理可以更有效地缓存静态资源。

使用 Trillium 的静态文件服务功能，可以轻松地将静态资源如 HTML、CSS、JavaScript 文件和图片集成到 Web 应用程序中。

### WebSocket 支持

```rust
use futures_util::StreamExt;
use trillium_logger::logger;
use trillium_websockets::{websocket, Message, WebSocketConn};

async fn websocket_handler(mut conn: WebSocketConn) {
    while let Some(Ok(Message::Text(input))) = conn.next().await {
        let result = conn
            .send_string(format!("received your message: {}", &input))
            .await;

        if let Err(e) = result {
            log::error!("{e}");
            break;
        }
    }
}

pub fn main() {
    env_logger::init();
    trillium_smol::run((logger(), websocket(websocket_handler)));
}
```

### 测试 Trillium 应用程序

Trillium 提供了一个测试 crate，旨在为 Trillium 应用程序提供“功能/单元测试”和“集成测试”。

#### 示例应用程序

假设我们有一个完全虚构的应用程序，如下所示：

```rust
use trillium::{conn_try, Conn, Handler, KnownHeaderName};
use trillium_logger::Logger;

async fn teapot(mut conn: Conn) -> Conn {
    let request_body = conn_try!(conn.request_body_string().await, conn);
    if request_body.is_empty() {
        conn.with_status(406).with_body("unacceptable!").halt()
    } else {
        conn.with_body(format!("request body was: {request_body}"))
            .with_status(418)
            .with_response_header(KnownHeaderName::Server, "zojirushi")
    }
}

fn application() -> impl Handler {
    (Logger::new(), teapot)
}

fn main() {
    trillium_smol::run(application());
}
```

#### 编写测试

以下是一些简单的测试示例：

```rust
#[cfg(test)]
mod tests {
    use super::{application, teapot};
    use trillium_testing::prelude::*;

    #[test]
    fn handler_sends_correct_headers_and_is_a_teapot() {
        let application = application();
        assert_response!(
            post("/").with_request_body("hello trillium!").on(&application),
            Status::ImATeapot,
            "request body was: hello trillium!",
            "server" => "zojirushi",
            "content-length" => "33"
        );
    }

    #[test]
    fn we_can_also_test_the_individual_handler() {
        assert_body!(
            post("/").with_request_body("a different body").on(&teapot),
            "request body was: a different body"
        );
    }

    #[test]
    fn application_is_lemongrab_when_body_is_empty() {
        let application = application();
        assert_response!(
            post("/").on(&application),
            Status::NotAcceptable,
            "unacceptable!"
        );
    }
}
```

#### 测试说明

- `application` 函数返回整个应用程序的处理器。

- `teapot` 函数是我们的业务逻辑处理器，它根据请求体的内容返回不同的响应。

- `tests` 模块包含了三个测试：

- - `handler_sends_correct_headers_and_is_a_teapot` 测试当请求体不为空时，处理器是否发送正确的头部并返回 418 ImATeapot 状态。
  - `we_can_also_test_the_individual_handler` 测试 `teapot` 处理器单独的行为，确保它能够正确地处理请求体。
  - `application_is_lemongrab_when_body_is_empty` 测试当请求体为空时，应用程序是否返回 406 NotAcceptable 状态。

使用 Trillium 的测试工具，你可以轻松地对应用程序进行单元测试和集成测试，确保其按预期工作。这些工具提供了一种方便的方法来模拟请求并断言响应，使得测试过程更加高效和可靠。

### 库作者模式设计

#### 状态管理

考虑一个库的实现，该库递增式地计算穿过其的连接（conn）数量，并将该数值附加到每个连接上。直接在状态集中存储 `u64` 类型是不安全的，因为其他库可能也在进行同样的操作，因此我们通过一个私有的新类型 `ConnNumber` 来封装它。由于这个新类型在我们的库之外是不可见的，我们可以确保只有我们的处理器能够设置它。我们还提供了一个 `ConnExt` 特性（trait），以便提供对这些数据的访问。

```rust
mod conn_counter {
    use std::sync::{
        atomic::{AtomicU64, Ordering},
        Arc,
    };
    use trillium::{async_trait, Conn, Handler};

    // 私有新类型，封装 u64 类型的连接计数
    struct ConnNumber(u64);

    // 使用 Arc<AtomicU64> 来线程安全地递增连接计数
    #[derive(Default)]
    pub struct ConnCounterHandler(Arc<AtomicU64>);

    impl ConnCounterHandler {
        pub fn new() -> Self {
            Self::default()
        }
    }

    #[async_trait]
    impl Handler for ConnCounterHandler {
        async fn run(&self, conn: Conn) -> Conn {
            // 原子地递增计数并获取当前值
            let number = self.0.fetch_add(1, Ordering::SeqCst);
            // 将计数附加到连接的状态中
            conn.with_state(ConnNumber(number))
        }
    }

    // 提供 conn_number 方法来访问连接计数
    pub trait ConnCounterConnExt {
        fn conn_number(&self) -> u64;
    }

    impl ConnCounterConnExt for Conn {
        fn conn_number(&self) -> u64 {
            // 从连接状态中检索并返回计数
            self.state::<ConnNumber>()
                .expect("conn_number must be called after the handler")
                .0
        }
    }
}
```

#### 库的使用示例

```rust
use conn_counter::{ConnCounterConnExt, ConnCounterHandler};
use trillium::{Conn, Handler};

// 创建处理器，先运行 ConnCounterHandler 然后是响应生成逻辑
fn handler() -> impl Handler {
    (ConnCounterHandler::new(), |conn: Conn| async move {
        let conn_number = conn.conn_number(); // 访问连接计数
        conn.ok(format!("conn number was {}", conn_number)) // 构造响应
    })
}

fn main() {
    trillium_smol::run(handler()); // 运行处理器
}
```

#### 测试用例

```rust
#[cfg(test)]
mod test {
    use trillium_testing::prelude::*;

    #[test]
    fn test_conn_counter() {
        let handler = super::handler();
        // 断言处理器对连续请求的响应
        assert_ok!(get("/").on(&handler), "conn number was 0");
        assert_ok!(get("/").on(&handler), "conn number was 1");
        assert_ok!(get("/").on(&handler), "conn number was 2");
        assert_ok!(get("/").on(&handler), "conn number was 3");
    }
}
```

#### 说明

- `ConnNumber` 是封装连接计数的私有新类型。
- `ConnCounterHandler` 结构体使用 `Arc<AtomicU64>` 来实现线程安全的计数递增。
- `run` 方法实现了 `Handler` trait，它将当前计数附加到通过的 `Conn` 的状态中。
- `ConnCounterConnExt` trait 提供了 `conn_number` 方法，用于从 `Conn` 中检索计数。
- 在 `main` 函数中，我们创建了一个处理器组合，先运行 `ConnCounterHandler` 然后生成响应。
- 测试模块使用 `trillium_testing` crate 来模拟请求并验证处理器的响应。

### 参考资料

[1] https://crates.io/crates/trillium-ructe

[2] https://github.com/prabirshrestha/trillium-ructe

[3] https://docs.rs/trillium-ructe/latest/trillium_ructe/

## Zino 应用开发框架快速上手指南

GitHub：https://github.com/photino/zino

### 「前言」

在软件开发领域，Rust 语言以其出色的性能和安全性，正逐渐成为系统编程的新星。而 `Zino` 框架，作为 Rust 生态中的后端框架，以其高效、简洁和模块化的特点，吸引了众多开发者的目光。本文将带你快速入门 `Zino` 框架，探索其强大的功能和优雅的设计。

### 「一、Zino 框架简介」

`Zino` 是一个基于 Rust 语言的后端应用开发框架，它强调简洁性、可扩展性和生产力。`Zino` 提供了诸多开箱即用的功能，比如高度优化的 ORM、轻量级定时任务以及对 `actix-web`、`axum` 等框架的集成支持。

Zino 致力于打造 Rust 语言中最好用的企业级应用开发框架。 我们奉行『约定优于配置』的原则，借鉴 Node 的 Egg.js、Go 的 GoFrame、 Java 的 Spring Boot 等框架，提供开箱即用的功能模块，极大提升开发效率； 并通过应用接口抽象与 Rust 的 axum、actix-web 等框架集成，打通社区生态资源。

### 「二、环境准备」

在开始之前，确保你已安装 Rust 环境。`Zino` 要求至少 Rust 1.75+ 的版本。可以通过以下命令安装 Rust：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 「三、创建你的 Zino 应用」

使用 `Zino` 创建一个新的项目非常简单。首先，创建一个新的 Rust 项目：

```bash
cargo new my-zino-app --bin
```

然后，在项目的 `Cargo.toml` 文件中添加 `Zino` 作为依赖，并启用 `axum` 特性：

```bash
[package]
name = "zino-app"
version = "0.1.0"
edition = "2021"

[dependencies]
zino = { version = "0.21", features = ["axum"] }
```

### 「四、编写你的第一行 Zino 代码」

在你的 `main.rs` 文件中，编写以下代码来启动一个简单的 `Zino` 应用：

```rust
use zino::prelude::*;

fn main() {
    zino::Cluster::boot().run()
}
```

这段代码利用 `Zino` 的 `Cluster` 来启动应用程序。

### 「五、定义模型」

`Zino` 提供了强大的 ORM 功能，可以轻松定义和操作数据库模型。以下是一个简单的用户模型定义示例：

```rust
use serde::{Deserialize, Serialize};
use zino::prelude::*;

#[derive(Debug, Clone, Default, Serialize, Deserialize, Schema)]
pub struct User {
    id: u64,
    name: String,
    email: String,
}
```

定义模型后，`Zino` 能够自动处理数据库的 CRUD 操作。

### 「六、添加路由和控制器」

通过 `Zino` 的 `router` 模块，你可以轻松地添加路由和控制器。例如，为用户模型添加一个获取用户列表的路由：

```rust
use zino::router::*;

pub fn routes() -> Router {
    Router::new().get("/users", list_users)
}

async fn list_users(req: Request) -> Result<Json<Vec<User>>, Status> {
    let users = User::all().await?;
    Ok(Json(users))
}
```

这里使用了 `axum` 的 `Router` 和 `Request` 来定义路由和处理函数。

### 「七、运行你的应用」

运行你的 `Zino` 应用，只需在项目根目录下执行：

```bash
cargo run
```

默认情况下，应用会在 `6080` 端口启动，并通过 `debug` 模式提供 API 文档。

### core

#### 特性标志

以下是可用的可选特性：

| 名称                | 描述                                              | 默认? |
| :------------------ | :------------------------------------------------ | :---- |
| `accessor`          | 启用基于 `opendal` 构建的数据访问层。             | 否    |
| `chatbot`           | 启用聊天机器人服务。                              | 否    |
| `connector`         | 启用数据源连接器。                                | 否    |
| `cookie`            | 启用对 cookie 的支持。                            | 否    |
| `crypto-sm`         | 启用中国标准的加密算法。                          | 否    |
| `dotenv`            | 启用 `.env` 文件的配置加载器。                    | 否    |
| `env-filter`        | 为 `tracing-subscriber` 启用 `env-filter`。       | 否    |
| `i18n`              | 启用国际化支持。                                  | 否    |
| `jwt`               | 启用对 JSON Web Token 的支持。                    | 否    |
| `locale`            | 启用与本地化相关的实用工具支持。                  | 否    |
| `metrics`           | 启用 `metrics` 导出器。                           | 否    |
| `orm`               | 启用 MySQL、PostgreSQL 或 **「SQLite」** 的 ORM。 | 否    |
| `runtime-async-std` | 启用 `async-std` 运行时。                         | 否    |
| `runtime-tokio`     | 启用 `tokio` 运行时。                             | 否    |
| `sentry`            | 启用与 `sentry` 的集成。                          | 否    |
| `tls-native`        | 启用 `native-tls` TLS 后端。                      | 否    |
| `tls-rustls`        | 启用 `rustls` TLS 后端。                          | 否    |
| `tracing-log`       | 为 `tracing-subscriber` 启用 `tracing-log`。      | 否    |
| `validator`         | 启用通用验证规则。                                | 否    |
| `view`              | 启用 HTML 模板渲染。                              | 否    |

通过这些特性标志，开发者可以根据项目需求定制和扩展 `zino` 应用程序的功能。

### actix-app 示例

- examples/actix-app/src/main.rs

```rust
mod controller;
mod domain;
mod extension;
mod logic;
mod middleware;
mod model;
mod router;
mod schedule;
mod service;

use zino::prelude::*;

fn main() {
    zino::Cluster::boot()
        .register(router::routes())
        .register_debug(router::debug_routes())
        .spawn(schedule::job_scheduler())
        .run_with(schedule::async_job_scheduler())
}
```

- examples/actix-app/src/controller/user.rs

```rust
use std::time::Instant;
use zino::{prelude::*, Request, Response, Result};
use zino_model::user::User;

pub async fn new(mut req: Request) -> Result {
    let mut user = User::new();
    let mut res = req.model_validation(&mut user).await?;
    let validation = user.check_constraints().await.extract(&req)?;
    if !validation.is_success() {
        reject!(req, validation);
    }

    let user_name = user.name().to_owned();
    user.insert().await.extract(&req)?;

    let args = fluent_args![
        "name" => user_name
    ];
    let user_intro = req.translate("user-intro", Some(args)).extract(&req)?;
    let data = json!({
        "method": req.request_method().as_ref(),
        "path": req.request_path(),
        "user_intro": user_intro,
    });
    let locale = req.new_cookie("locale".into(), "en-US".into(), None);
    res.set_cookie(&locale);
    res.set_code(StatusCode::CREATED);
    res.set_json_data(data);
    Ok(res.into())
}

pub async fn view(req: Request) -> Result {
    let user_id = req.parse_param("id")?;

    let db_query_start_time = Instant::now();
    let user = User::fetch_by_id(&user_id).await.extract(&req)?;
    let db_query_duration = db_query_start_time.elapsed();

    let data = Map::data_entry(user);
    let mut res = Response::default().context(&req);
    res.record_server_timing("db", None, Some(db_query_duration));
    res.set_json_data(data);
    Ok(res.into())
}
```

- examples/actix-app/src/middleware/access.rs

```rust
use actix_web::{
    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},
    Error,
};
use std::{
    future::{ready, Future, Ready},
    pin::Pin,
};
use zino::{prelude::*, Request};

#[derive(Default)]
pub struct UserSessionInitializer;

impl<S, B> Transform<S, ServiceRequest> for UserSessionInitializer
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type InitError = ();
    type Transform = UserSessionMiddleware<S>;
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(UserSessionMiddleware { service }))
    }
}

pub struct UserSessionMiddleware<S> {
    service: S,
}

impl<S, B> Service<ServiceRequest> for UserSessionMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = Pin<Box<dyn Future<Output = Result<Self::Response, Self::Error>>>>;

    forward_ready!(service);

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let mut req = Request::from(req);
        match req.parse_jwt_claims(JwtClaims::shared_key()) {
            Ok(claims) => {
                if let Ok(mut user_session) = UserSession::<Uuid>::try_from_jwt_claims(claims) {
                    if let Ok(session_id) = req.parse_session_id() {
                        user_session.set_session_id(session_id);
                    }
                    req.set_data(user_session);
                } else {
                    return Box::pin(async move {
                        let message = "401 Unauthorized: invalid JWT claims";
                        let rejection = Rejection::with_message(message).context(&req).into();
                        let result: zino::Result<Self::Response> = Err(rejection);
                        result.map_err(|err| err.into())
                    });
                }
            }
            Err(rejection) => {
                return Box::pin(async move {
                    let result: zino::Result<Self::Response> = Err(rejection.into());
                    result.map_err(|err| err.into())
                });
            }
        }

        let req = ServiceRequest::from(req);
        let fut = self.service.call(req);
        Box::pin(async move {
            let res = fut.await?;
            Ok(res)
        })
    }
}
```

- examples/actix-app/src/middleware/mod.rs

```rust
mod access;

pub(crate) use access::UserSessionInitializer;
```

- examples/actix-app/src/model/tag.rs

```rust
use serde::{Deserialize, Serialize};
use zino::prelude::*;
use zino_derive::{DecodeRow, Model, ModelAccessor, ModelHooks, Schema};

/// The `tag` model.
#[derive(
    Debug,
    Clone,
    Default,
    Serialize,
    Deserialize,
    DecodeRow,
    Schema,
    ModelAccessor,
    ModelHooks,
    Model,
)]
#[serde(default)]
pub struct Tag {
    // Basic fields.
    #[schema(primary_key, read_only, constructor = "Uuid::now_v7")]
    id: Uuid,
    #[schema(not_null, comment = "Tag name")]
    name: String,
    #[schema(default_value = "Active", index_type = "hash")]
    status: String,
    description: String,

    // Info fields.
    #[schema(not_null, index_type = "hash", comment = "Tag category")]
    category: String,
    #[schema(
        snapshot,
        reference = "Tag",
        fetch_as = "parent_tag",
        comment = "Optional parent tag"
    )]
    parent_id: Option<Uuid>,

    // Extensions.
    #[schema(reserved)]
    extra: Map,

    // Revisions.
    #[schema(read_only, default_value = "now", index_type = "btree")]
    created_at: DateTime,
    #[schema(default_value = "now", index_type = "btree")]
    updated_at: DateTime,
    version: u64,
}
```

- examples/actix-app/src/router/mod.rs

```rust
use crate::{
    controller::{auth, file, stats, user},
    middleware,
    model::Tag,
};
use actix_web::web::{get, post, scope, ServiceConfig};
use zino::{DefaultController, RouterConfigure};
use zino_model::User;

pub fn routes() -> Vec<RouterConfigure> {
    vec![
        auth_router as RouterConfigure,
        file_router as RouterConfigure,
        user_router as RouterConfigure,
        tag_router as RouterConfigure,
    ]
}

pub fn debug_routes() -> Vec<RouterConfigure> {
    vec![
        stats_router as RouterConfigure,
        user_debug_router as RouterConfigure,
        tag_debug_router as RouterConfigure,
    ]
}

fn auth_router(cfg: &mut ServiceConfig) {
    cfg.route("/auth/login", post().to(auth::login));
    cfg.service(
        scope("/auth")
            .route("/refresh", get().to(auth::refresh))
            .route("/logout", post().to(auth::logout))
            .wrap(middleware::UserSessionInitializer),
    );
}

fn file_router(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("/file")
            .route("/upload", post().to(file::upload))
            .route("/decrypt", get().to(file::decrypt))
            .wrap(middleware::UserSessionInitializer),
    );
}

fn user_router(cfg: &mut ServiceConfig) {
    cfg.route("/user/new", post().to(user::new))
        .route("/user/{id}/delete", post().to(User::soft_delete))
        .route("/user/{id}/update", post().to(User::update))
        .route("/user/{id}/view", get().to(user::view))
        .route("/user/list", get().to(User::list))
        .route("/user/import", post().to(User::import))
        .route("/user/export", get().to(User::export));
}

fn tag_router(cfg: &mut ServiceConfig) {
    cfg.route("/tag/new", post().to(Tag::new))
        .route("/tag/{id}/delete", post().to(Tag::soft_delete))
        .route("/tag/{id}/update", post().to(Tag::update))
        .route("/tag/{id}/view", get().to(Tag::view))
        .route("/tag/list", get().to(Tag::list))
        .route("/tag/tree", get().to(Tag::tree));
}

fn stats_router(cfg: &mut ServiceConfig) {
    cfg.route("/stats", get().to(stats::index));
}

fn user_debug_router(cfg: &mut ServiceConfig) {
    cfg.route("/user/schema", get().to(User::schema))
        .route("/user/definition", get().to(User::definition))
        .route("/user/mock", get().to(User::mock));
}

fn tag_debug_router(cfg: &mut ServiceConfig) {
    cfg.route("/tag/schema", get().to(Tag::schema))
        .route("/tag/definition", get().to(Tag::definition))
        .route("/tag/mock", get().to(Tag::mock));
}
```

- examples/actix-app/src/schedule/job.rs

```rust
use zino::prelude::*;
use zino_model::User;

pub fn every_15s(job_id: Uuid, job_data: &mut Map, last_tick: DateTime) {
    let counter = job_data
        .get("counter")
        .map(|c| c.as_u64().unwrap_or_default() + 1)
        .unwrap_or_default();
    job_data.upsert("counter", counter);
    job_data.upsert("current", DateTime::now());
    job_data.upsert("last_tick", last_tick);
    job_data.upsert("job_id", job_id.to_string());
}

pub fn every_20s(job_id: Uuid, job_data: &mut Map, last_tick: DateTime) {
    let counter = job_data
        .get("counter")
        .map(|c| c.as_u64().unwrap_or_default() + 1)
        .unwrap_or_default();
    job_data.upsert("counter", counter);
    job_data.upsert("current", DateTime::now());
    job_data.upsert("last_tick", last_tick);
    job_data.upsert("job_id", job_id.to_string());
}

pub fn every_hour(job_id: Uuid, job_data: &mut Map, last_tick: DateTime) -> BoxFuture {
    let counter = job_data
        .get("counter")
        .map(|c| c.as_u64().unwrap_or_default() + 1)
        .unwrap_or_default();
    job_data.upsert("counter", counter);
    job_data.upsert("current", DateTime::now());
    job_data.upsert("last_tick", last_tick);
    job_data.upsert("job_id", job_id.to_string());
    Box::pin(async {
        let query = Query::default();
        let columns = [("*", true), ("roles", true)];
        if let Ok(mut map) = User::count_many(&query, &columns).await {
            job_data.append(&mut map);
        }
    })
}
```

- examples/actix-app/src/controller/auth.rs

```rust
use zino::{prelude::*, Request, Response, Result};
use zino_model::user::{JwtAuthService, User};

pub async fn login(mut req: Request) -> Result {
    let current_time = DateTime::now();
    let body: Map = req.parse_body().await?;
    let (user_id, mut data) = User::generate_token(body).await.extract(&req)?;

    let user_updates = json!({
        "status": "Active",
        "last_login_at": data.remove("current_login_at").and_then(|v| v.as_datetime()),
        "last_login_ip": data.remove("current_login_ip"),
        "current_login_at": current_time,
        "current_login_ip": req.client_ip(),
        "$inc": { "login_count": 1 },
    });

    let mut user_mutations = user_updates.into_map_opt().unwrap_or_default();
    let (validation, user) = User::update_by_id(&user_id, &mut user_mutations, None)
        .await
        .extract(&req)?;
    if !validation.is_success() {
        reject!(req, validation);
    }
    data.upsert("entry", user.snapshot());

    let mut res = Response::default().context(&req);
    res.set_json_data(data);
    Ok(res.into())
}

pub async fn refresh(req: Request) -> Result {
    let claims = req.parse_jwt_claims(JwtClaims::shared_key())?;
    let data = User::refresh_token(&claims).await.extract(&req)?;
    let mut res = Response::default().context(&req);
    res.set_json_data(data);
    Ok(res.into())
}

pub async fn logout(req: Request) -> Result {
    let user_session = req
        .get_data::<UserSession<_>>()
        .ok_or_else(|| warn!("401 Unauthorized: the user session is invalid"))
        .extract(&req)?;

    let mut mutations = Map::from_entry("status", "SignedOut");
    let user_id = user_session.user_id();
    let (validation, user) = User::update_by_id(user_id, &mut mutations, None)
        .await
        .extract(&req)?;
    if !validation.is_success() {
        reject!(req, validation);
    }

    let data = Map::data_entry(user.snapshot());
    let mut res = Response::default().context(&req);
    res.set_json_data(data);
    Ok(res.into())
}
```

- examples/actix-app/src/controller/file.rs

```rust
use std::time::{Duration, Instant};
use zino::{prelude::*, Cluster, Request, Response, Result};

pub async fn upload(mut req: Request) -> Result {
    let (mut body, files) = req.parse_form_data::<Map>().await?;

    let dir = Cluster::shared_dir("uploads");
    let expires = DateTime::now() + Duration::from_secs(600);
    let mut encryption_duration = Duration::ZERO;
    let mut uploads = Vec::new();
    for mut file in files {
        let mut query = Map::new();
        let access_key_id = AccessKeyId::new();
        query.upsert("access_key_id", access_key_id.to_string());

        let secret_key = SecretAccessKey::new(&access_key_id);
        let security_token =
            SecurityToken::try_new(access_key_id, expires, &secret_key).extract(&req)?;
        query.upsert("security_token", security_token.to_string());

        let encryption_start_time = Instant::now();
        file.encrypt_with(secret_key.as_ref()).extract(&req)?;
        encryption_duration += encryption_start_time.elapsed();

        if let Some(file_name) = file.file_name() {
            file.write(dir.join(file_name)).extract(&req)?;
            query.upsert("file_name", file_name);

            let mut map = Map::new();
            map.upsert("field_name", file.field_name());
            map.upsert("file_name", file_name);
            map.upsert("content_type", file.content_type().map(|m| m.as_ref()));
            map.upsert("url", format!("/file/decrypt?{}", query.to_query_string()));
            uploads.push(map);
        }
    }
    body.upsert("files", uploads);

    let mut res = Response::default().context(&req);
    res.record_server_timing("enc", None, Some(encryption_duration));
    res.set_json_data(Map::data_entry(body));
    Ok(res.into())
}

pub async fn decrypt(req: Request) -> Result {
    let query = req.parse_query::<Map>()?;
    let access_key_id = req.parse_access_key_id()?;
    let secret_key = SecretAccessKey::new(&access_key_id);
    let security_token = req.parse_security_token(secret_key.as_ref())?;
    if security_token.is_expired() {
        reject!(req, forbidden, "the security token has expired");
    }

    let Some(file_name) = query.get_str("file_name") else {
        reject!(req, "file_name", "it should be specified");
    };
    let file_path = Cluster::shared_dir("uploads").join(file_name);

    let mut file = NamedFile::try_from_local(file_path).extract(&req)?;
    let decryption_start_time = Instant::now();
    file.decrypt_with(secret_key).extract(&req)?;

    let decryption_duration = decryption_start_time.elapsed();
    let mut res = Response::default().context(&req);
    res.record_server_timing("dec", None, Some(decryption_duration));
    res.send_file(file);
    Ok(res.into())
}
```

- examples/actix-app/src/controller/stats.rs

```rust
use zino::{prelude::*, Cluster, Request, Response, Result};

pub async fn index(req: Request) -> Result {
    let res = Response::default().context(&req);
    let stats = json!({
        "method": "GET",
        "path": "/stats",
        "app_state_data": Cluster::state_data(),
    });
    let data = json!({
        "title": "Stats",
        "output": stats.to_string_pretty(),
    });
    Ok(res.render("output.html", data).into())
}
```

- examples/actix-app/src/controller/mod.rs

```rust
pub(crate) mod auth;
pub(crate) mod file;
pub(crate) mod stats;
pub(crate) mod user;
```

- examples/actix-app/templates/layout.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>{{ title }} | {{ APP_NAME }}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<div class="container">{% block content %}{% endblock content %}</div>
	</body>
</html>
```

- examples/actix-app/templates/output.html

```html
{% extends "layout.html" %} {% block content %}
<div class="output">
	<code><pre>{{ output }}</pre></code>
</div>
{% endblock content %}
```

### 「结语：」

通过本文的引导，你已经能够创建并运行一个基本的 `Zino` 后端应用。`Zino` 框架的更多高级特性和最佳实践，等待你去探索和发现。Rust 和 `Zino` 的结合，无疑将为你的后端开发带来革命性的改变。

## Pingora

**GitHub 地址**：https://github.com/cloudflare/pingora

Pingora 是一个 Rust 框架，用于构建快速、可靠和可编程的网络系统。

Pingora 是经过实战测试的，因为它在几年多的时间里每秒服务超过 4000 万次互联网请求。

Pingora 功能亮点：

- 异步 Rust：快速可靠
- HTTP 1/2 端到端代理
- TLS：OpenSSL 或 BoringSSL
- gRPC 和 websocket 代理
- 优雅的重启
- 可定制的负载平衡和故障转移策略
- 支持各种可观察性工具

## Tower

**GitHub 地址**：https://github.com/tower-rs/tower

Tower 是一个模块化和可重用组件库，用于构建健壮的网络客户端和服务器。

Tower 的目标是尽可能简单地构建健壮的网络客户端和服务器。它是协议无关的，是围绕请求/响应模式设计的。如果你的协议完全基于流，那么 Tower 可能不适合。

Tower 将保持至少 6 个月的滚动 MSRV(最低支持的 Rust 版本)政策。当增加 MSRV 时，新的 Rust 版本必须至少在六个月前发布。

## Poem Framework：以 Rust 编程语言打造的全方位且易于上手的 Web 框架

---

程序犹如诗歌，不经撰写，何以成诗。 —— 迪科斯彻

---该仓库包含以下主要组件：

| 组件             | 描述                     | 文档            | 更新日志           |
| :--------------- | :----------------------- | :-------------- | :----------------- |
| **poem**         | Poem Web 框架            | **(README)**[1] | **(CHANGELOG)**[2] |
| **poem-lambda**  | Poem 用于 AWS Lambda     | **(README)**[3] | **(CHANGELOG)**[4] |
| **poem-openapi** | Poem Web 的 OpenAPI 支持 | **(README)**[5] | **(CHANGELOG)**[6] |

---

以下是社区使用案例：

| 仓库                   | 描述                                                                      | 文档              |
| :--------------------- | :------------------------------------------------------------------------ | :---------------- |
| **delicate**[7]        | 用 Rust 编写的分布式任务调度平台。                                        | **(README)**[8]   |
| **databend**[9]        | 用 Rust 编写的云原生数据仓库。                                            | **(ROADMAP)**[10] |
| **muse**[11]           | 网易内部艺术资源共享平台，后端使用 Rust 编写。                            |                   |
| **hik-proconnect**[12] | 基于 AWS 持续集成的前端自动化部署平台。Hikvision 的 Hik-ProConnect 项目。 |                   |
| **warpgate**[13]       | 适用于任何 SSH 客户端的智能 SSH 堡垒主机。                                | **(README)**[14]  |
| **lust**[15]           | 为高吞吐量和缓存设计的快速自动优化图像服务器。                            | **(README)**[16]  |
| **aptos**[17]          | 构建最安全、最可扩展的 Layer 1 区块链。                                   | **(WEBSITE)**[18] |
| **poem-casbin**[19]    | 用于 Poem 框架的 Casbin 访问控制中间件。                                  | **(WEBSITE)**[20] |
| **poem-grants**[21]    | 用于保护端点的授权扩展。                                                  | **(README)**[22]  |

这个 Rust 编程语言的全功能且易于使用的 Web 框架，不仅拥有强大的功能，还具备出色的性能和安全性。正如迪科斯彻所言，程序如同诗歌，需要我们一字一句地精心雕琢。Poem Framework 正是这样一个让我们能够挥洒创意、构建优雅 Web 应用的平台。 特性

- Poem 框架兼具易用性和高性能。

- 减少泛型的使用，简化代码结构。

- 快速且灵活的路由机制。

- 兼容 tower::Service 和 tower::Layer。

- 使用 poem-openapi 编写符合 OAS3 规范的 API，并自动生成文档。

- 组件特性

- - 为了避免编译不必要的依赖，Poem 框架默认关闭了某些特性：

| 特性              | 描述                                                 |
| :---------------- | :--------------------------------------------------- |
| server            | 开启服务器和监听器 API（默认启用）                   |
| compression       | 支持解压缩请求体和压缩响应体                         |
| cookie            | 支持 Cookie                                          |
| csrf              | 支持跨站请求伪造（CSRF）保护                         |
| multipart         | 支持多部分内容类型                                   |
| native-tls        | 支持使用 native-tls 的 HTTP 服务器过 TLS             |
| openssl-tls       | 支持使用 openssl-tls 的 HTTP 服务器过 TLS            |
| opentelemetry     | 支持 opentelemetry                                   |
| prometheus        | 支持 Prometheus                                      |
| redis-session     | 支持 Redis 会话                                      |
| rustls            | 支持使用 rustls 的 HTTP 服务器过 TLS                 |
| session           | 支持会话管理                                         |
| sse               | 支持服务器发送事件（Server-Sent Events, SSE）        |
| static-files      | 支持静态文件端点                                     |
| tempfile          | 支持临时文件                                         |
| tower-compat      | 兼容 tower::Layer 和 tower::Service 的适配器         |
| websocket         | 支持 WebSocket                                       |
| anyhow            | 集成 anyhow 库                                       |
| eyre06            | 集成 eyre 库的 0.6.x 版本                            |
| i18n              | 支持国际化                                           |
| acme-native-roots | 支持 ACME（自动证书管理环境）                        |
| acme-webpki-roots | 支持使用 webpki TLS 根证书而非原生 TLS 根证书的 ACME |
| tokio-metrics     | 集成 tokio-metrics 库                                |
| embed             | 集成 rust-embed 库                                   |
| xml               | 集成 quick-xml 库                                    |
| yaml              | 集成 serde-yaml 库。                                 |

安全性 本 crate 使用 #![forbid(unsafe_code)] 确保所有功能均使用 100% 安全的 Rust 实现。

示例

```rust
use poem::{get, handler, listener::TcpListener, web::Path, Route, Server};

#[handler]
fn hello(Path(name): Path<String>) -> String {
    format!("hello: {}", name)
}

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let app = Route::new().at("/hello/:name", get(hello));
    Server::new(TcpListener::bind("0.0.0.0:3000"))
      .run(app)
      .await
}
```

更多示例可以在这里找到。

**examples**[23]

MSRV 本 crate 支持的最低 Rust 版本为 1.75.0。

快速入门

```rust
use poem::{get, handler, listener::TcpListener, web::Path, IntoResponse, Route, Server};

#[handler]
fn hello(Path(name): Path<String>) -> String {
    format!("hello: {}", name)
}

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let app = Route::new().at("/hello/:name", get(hello));
    Server::new(TcpListener::bind("0.0.0.0:3000"))
        .run(app)
        .await
}
```

端点 端点特征代表能够处理 HTTP 请求的类型，并返回 Result<T: IntoResponse, Error> 类型。

handler 宏用于将函数转换为端点。

```rust
use poem::{
    error::NotFoundError, handler, http::StatusCode, test::TestClient, Endpoint, Request,
    Result,
};

#[handler]
fn return_str() -> &'static str {
    "hello"
}

#[handler]
fn return_err() -> Result<&'static str, NotFoundError> {
    Err(NotFoundError)
}

let resp = TestClient::new(return_str).get("/").send().await;
resp.assert_status_is_ok();
resp.assert_text("hello").await;

let resp = TestClient::new(return_err).get("/").send().await;
resp.assert_status(StatusCode::NOT_FOUND);
```

提取器 提取器用于从 HTTP 请求中提取信息。

Poem 提供了一些常用的提取器，用于从 HTTP 请求中提取数据。

以下示例中，index 函数使用 3 个提取器来提取远程地址、HTTP 方法和 URI。

```
use poem::{
    handler,
    http::{Method, Uri},
    web::RemoteAddr,
};

#[handler]
fn index(remote_addr: &RemoteAddr, method: Method, uri: &Uri) {}
```

默认情况下，提取器在发生错误时会返回 400 错误请求，但有时你可能想要改变这种行为，因此你可以自己处理错误。

以下示例中，当 Query 提取器失败时，它将返回 500 内部服务器响应和错误原因。

````rust
use poem::{
    error::ParseQueryError, handler, http::StatusCode, web::Query, IntoResponse, Response,
    Result,
};
use serde::Deserialize;

#[derive(Debug, Deserialize)]
struct Params {
    name: String,
}

#[handler]
fn index(res: Result<Query<Params>>) -> Result<impl IntoResponse> {
    match res {
        Ok(Query(params)) => Ok(params.name.into_response()),
        Err(err) if err.is::<ParseQueryError>() => Ok(Response::builder()
            .status(StatusCode::INTERNAL_SERVER_ERROR)
            .body(err.to_string())),
        Err(err) => Err(err),
    }
}
路由
有三种可用的路由方式。

路径路由
域名路由
HTTP 方法路由

```rust
use poem::{get, handler, post, web::Path, Route};

#[handler]
async fn get_user(id: Path<String>) {}

#[handler]
async fn delete_user(id: Path<String>) {}

#[handler]
async fn create_user() {}

let app = Route::new()
    .at("/user/:id", get(get_user).delete(delete_user))
    .at("/user", post(create_user));
````

响应 所有可转换为 HTTP 响应 Response 的类型都应实现 IntoResponse。

以下示例中，string_response 和 status_response 函数返回 String 和 StatusCode 类型，因为 Poem 已为它们实现了 IntoResponse trait。

no_response 函数不返回值。我们可以认为它的返回类型是 ()，而 Poem 也为 () 实现了 IntoResponse，它总是被转换为 200 OK。

result_response 函数返回 Result 类型，这意味着可能会发生错误。

```rust
use poem::{handler, http::StatusCode, Result};

#[handler]
fn string_response() -> String {
    todo!()
}

#[handler]
fn status_response() -> StatusCode {
    todo!()
}

#[handler]
fn no_response() {}

#[handler]
fn result_response() -> Result<String> {
    todo!()
}
```

错误处理 以下示例在 NotFoundError 发生时返回自定义内容。

```
use poem::{
    error::NotFoundError, handler, http::StatusCode, EndpointExt, IntoResponse, Response, Route,
};

#[handler]
fn foo() {}

#[handler]
fn bar() {}

let app =
    Route::new()
        .at("/foo", foo)
        .at("/bar", bar)
        .catch_error(|err: NotFoundError| async move {
            Response::builder()
                .status(StatusCode::NOT_FOUND)
                .body("custom not found")
        });
```

中间件 你可以在 Endpoint 上调用 with 方法来将中间件应用到端点。实际上，它会将原始端点转换为新的端点。

```
use poem::{handler, middleware::Tracing, EndpointExt, Route};

#[handler]
fn index() {}

let app = Route::new().at("/", index).with(Tracing);
```

你可以创建自己的中间件，也可以查看 Middleware。

Crate 特性 为了避免编译未使用的依赖，Poem 默认关闭了某些特性：

| 特性              | 描述                                                 |
| :---------------- | :--------------------------------------------------- |
| server            | 服务器和监听器 API（默认启用）                       |
| compression       | 支持解压缩请求体和压缩响应体                         |
| cookie            | 支持 Cookie                                          |
| csrf              | 支持跨站请求伪造（CSRF）保护                         |
| multipart         | 支持多部分                                           |
| native-tls        | 支持使用 native-tls 的 HTTP 服务器过 TLS             |
| openssl-tls       | 支持使用 openssl-tls 的 HTTP 服务器过 TLS            |
| opentelemetry     | 支持 opentelemetry                                   |
| prometheus        | 支持 Prometheus                                      |
| redis-session     | 支持 Redis 会话                                      |
| rustls            | 支持使用 rustls 的 HTTP 服务器过 TLS                 |
| session           | 支持会话                                             |
| sse               | 支持服务器发送事件（SSE）                            |
| tempfile          | 支持临时文件                                         |
| test              | 测试端点的实用工具。                                 |
| tower-compat      | 适配器，用于 tower::Layer 和 tower::Service。        |
| websocket         | 支持 WebSocket                                       |
| anyhow            | 集成 anyhow crate。                                  |
| eyre06            | 集成 eyre crate 的 0.6.x 版本。                      |
| i18n              | 支持国际化                                           |
| acme-native-roots | 支持 ACME（自动证书管理环境）                        |
| acme-webpki-roots | 支持使用 webpki TLS 根证书而非原生 TLS 根证书的 ACME |
| tokio-metrics     | 集成 tokio-metrics crate。                           |
| embed             | 集成 rust-embed crate。                              |
| xml               | 集成 quick-xml crate。                               |
| yaml              | 集成 serde-yaml crate。                              |

重新导出

```
pub use endpoint::Endpoint;
pub use endpoint::EndpointExt;
pub use endpoint::IntoEndpoint;
pub use error::Error;
pub use error::Result;
pub use middleware::Middleware;
pub use web::FromRequest;
pub use web::IntoResponse;
pub use web::RequestBody;
```

模块

- endpoint | 与端点相关的类型。
- error | 一些常见的错误类型。
- http | 通用的常见 HTTP 类型库。
- i18n | 国际化相关类型。
- listenerserver | 常用的监听器。
- middleware | 常用的中间件。
- session | 会话管理。
- testtest | 测试端点的实用工具。
- web | 常用作提取器或响应的类型。 结构体
- Body | 请求和响应的主体对象。
- OnUpgrade | 可能的 HTTP 升级的 future。
- PathPattern | 可以从请求中获取路径模式的容器。
- Request | 表示一个 HTTP 请求。
- RequestBuilder | 一个请求构建器。
- RequestParts | HTTP 请求的组件部分。
- Response | 表示一个 HTTP 响应。
- ResponseBuilder | 一个响应构建器。
- ResponseParts | HTTP 响应的组件部分。
- Route | 路由对象
- RouteDomain | 主机头的路由对象
- RouteMethod | HTTP 方法的路由对象
- RouteScheme | 请求方案的路由对象
- Server | 一个 HTTP 服务器。
- Upgraded | 一个升级的 HTTP 连接。 枚举
- Addr | 一个网络地址。 函数
- connect | 一个辅助函数，类似于 RouteMethod::new().connect(ep)。
- delete | 一个辅助函数，类似于 RouteMethod::new().delete(ep)。
- get | 一个辅助函数，类似于 RouteMethod::new().get(ep)。
- head | 一个辅助函数，类似于 RouteMethod::new().head(ep)。
- options | 一个辅助函数，类似于 RouteMethod::new().options(ep)。
- patch | 一个辅助函数，类似于 RouteMethod::new().patch(ep)。
- post | 一个辅助函数，类似于 RouteMethod::new().post(ep)。
- put | 一个辅助函数，类似于 RouteMethod::new().put(ep)。
- trace | 一个辅助函数，类似于 RouteMethod::new().trace(ep)。 属性宏
- handler | 将异步函数包装为端点。

### 参考资料

[1] (README): _poem/README.md_

[2] (CHANGELOG): _poem/CHANGELOG.md_

[3] (README): _poem-lambda/README.md_

[4] (CHANGELOG): _poem-lambda/CHANGELOG.md_

[5] (README): _poem-openapi/README.md_

[6] (CHANGELOG): _poem-openapi/CHANGELOG.md_

[7] delicate: *https://github.com/BinChengZhao/delicate*

[8] (README): *https://delicate-rs.github.io/Roadmap.html*

[9] databend: *https://github.com/datafuselabs/databend*

[10] (ROADMAP): *https://github.com/datafuselabs/databend/issues/746*

[11] muse: *https://leihuo.163.com/*

[12] hik-proconnect: *https://www.hikvision.com/en/products/software/hik-proconnect/*

[13] warpgate: *https://github.com/eugeny/warpgate*

[14] (README): *https://github.com/warp-tech/warpgate/blob/main/README.md*

[15] lust: *https://github.com/ChillFish8/lust*

[16] (README): *https://github.com/ChillFish8/lust/blob/master/README.md*

[17] aptos: *https://github.com/aptos-labs/aptos-core*

[18] (WEBSITE): *https://aptoslabs.com/*

[19] poem-casbin: *https://github.com/casbin-rs/poem-casbin*

[20] (WEBSITE): *https://casbin.org/*

[21] poem-grants: *https://github.com/DDtKey/protect-endpoints/tree/main/poem-grants*

[22] (README): *https://github.com/DDtKey/protect-endpoints/blob/main/poem-grants/README.md*

[23] examples: *https://github.com/poem-web/poem/tree/master/examples*

## Rust 与 Rouille：轻舞飞扬的 Web 开发新纪元"—— Rust Web 微框架

**Github地址**：https://github.com/tomaka/rouille

> `Rouille` 是一个微网络框架库。它创建一个监听套接字并解析来自客户端的传入 `HTTP` 请求，然后将处理请求的工作交到你手中。

> ❝
>
> 如果你熟悉 `Rust`，`Rouille` 被设计为直观易用。与类似 `Express` 的框架不同，它不使用中间件。相反，一切都是以线性方式处理的。
>
> ❞

> ❝
>
> 与网站密切相关的概念（如 `cookie`、`CGI`、表单输入等）都由 `Rouille` 直接支持。更一般的概念（如数据库处理或模板）则不直接处理，因为它们被认为是与微网络框架正交的。然而，`Rouille` 的设计使其易于与任何第三方库结合使用，无需任何胶合代码。
>
> ❞

### 安装 Rust

1. **「安装 Rust 编译器」**：首先，你需要安装 `Rust` 编译器，这可以通过 `Rust` 的官方网站获取安装指南，或者使用包管理器如 `curl` 在终端中运行以下命令：

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

安装完成后，你可以通过运行 `rustc --version` 和 `cargo --version` 来检查 Rust 编译器和包管理器是否安装成功。

### 安装 Rouille

1. **「创建新的 Rust 项目」**：使用 Cargo（Rust 的包管理器）创建一个新的 Rust 项目：

```
cargo new my_rust_web_app
cd my_rust_web_app
```

1. **「添加 Rouille 依赖」**：在项目的 `Cargo.toml` 文件中添加 Rouille 作为依赖项。打开 `Cargo.toml` 文件，并在 `[dependencies]` 部分添加 Rouille 的条目：

```
[dependencies]
rouille = "x.y" # 请将 "x.y" 替换为 Rouille 的最新版本号
```

1. **「编写 Web 应用代码」**：在 `src/main.rs` 文件中，你可以开始编写使用 Rouille 的 Web 应用代码。以下是一个基本的“Hello, World”示例：

```
extern crate rouille;

fn main() {
   rouille::start_server("127.0.0.1:8080", move |request| {
       match request.get_path() {
           "/" => {
               let response = rouille::Response::text("Hello, World!");
               response
           },
           _ => {
               let mut not_found = rouille::Response::new("Not found");
               not_found.set_status(rouille::ResponseStatus::NotFound);
               not_found
           }
       }
   });
}
```

### 运行 Web 应用

1. **「编译并运行项目」**：在项目目录中，使用 Cargo 编译并运行你的 Rust Web 应用：

```
cargo run
```

这将启动一个 Web 服务器，监听 8080 端口。

1. **「访问你的 Web 应用」**：打开你的网络浏览器，访问 `http://127.0.0.1:8080`，你应该会看到显示“Hello, World!”的页面。

### 配置 Web 应用

1. **「自定义配置」**：根据你的需求，你可能需要对 Rouille 进行一些配置，比如设置静态文件目录、路由、中间件等。这些配置通常在 `main.rs` 文件中进行。
2. **「阅读文档」**：为了更深入地了解如何使用 Rouille，你可以访问它的官方文档 Rouille Docs，以获取更多高级用法和最佳实践。

### 深入探讨

#### 开始使用

如果你对 HTTP 的工作原理有一般了解，文档 和 文档齐全的示例 是帮助你入门的好资源。

### Rouille 库概览

#### 开始使用

- **「创建服务器」**：通过调用`start_server`函数监听端口。
- **「处理请求」**：当接收到 HTTP 请求时，调用第二个参数传递的闭包，该闭包必须返回一个`Response`对象。

#### 请求分析

- **「请求对象」**：闭包接收的参数是一个`Request`对象，代表客户端发出的请求。
- **「路由」**：使用`router!`宏根据 URL 分派不同代码。
- **「请求体分析」**：处理 JSON 输入、表单输入等，查看`input`模块。

#### 响应返回

- **「自定义响应」**：返回`Response`对象，所有成员都是公开的，可以按需自定义。
- **「静态文件服务」**：查看`match_assets`函数。
- **「内容编码」**：应用内容编码（包括 gzip 或 deflate 压缩），查看`content_encoding`模块。

#### 重导出

- `percent_encoding`：百分号编码。
- `url`：URL 处理。

#### 模块

- **「cgi」**：通过 CGI 让外部进程处理请求。
- **「content_encoding」**：对响应应用内容编码。
- **「input」**：分析请求的头部和正文。
- **「proxy」**：将请求转发至另一个 HTTP 服务器。
- **「session」**：会话处理。
- **「websocket」**：Websocket 支持。

#### 宏

- **「accept」**：根据`Accept`头值分派。
- **「assert_or_400」**：条件不成立时返回 400 响应。
- **「find_route」**：直到找到非 404 的错误码。
- **「post_input」**：解析 HTML 表单输入。
- **「router」**：路由匹配表达式。
- **「try_or_400」**：表达式错误时返回 400 响应。
- **「try_or_404」**：表达式错误时返回 404 响应。

#### 结构体

- **「HeadersIter」**：请求中头部列表的迭代器。
- **「Request」**：必须响应的请求。
- **「RequestBody」**：提供请求正文的访问。
- **「Response」**：包含响应原型。
- **「ResponseBody」**：表示响应正文的不透明类型。
- **「Server」**：监听服务器。

#### 常量

- **「DEFAULT_ENCODE_SET」**：默认编码集。

#### 特征（Traits）

- **「ReadWrite」**：聚合`Read`和`Write`特征的虚拟特征。
- **「Upgrade」**：可以接管原始连接到客户端数据的对象特征。

#### 函数

- **「extension_to_mime」**：根据文件扩展名返回 MIME 类型，如果扩展名未知则返回`application/octet-stream`。
- **「log」**：为每个请求向给定的写入器添加日志条目。
- **「log_custom」**：处理请求后调用自定义日志函数。
- **「match_assets」**：在路径中搜索匹配给定请求的文件。如果找到文件，返回一个可以提供该文件的`Response`；如果未找到，返回 404 响应。
- **「start_server」**：启动服务器并使用给定的请求处理器。
- **「start_server_with_pool」**：与`start_server`相同，但使用指定大小的`ThreadPool`。

通过以上格式，可以清晰地展示 Rouille 库的主要功能和使用方法。

### 代码实战

#### 案例 1 你好世界

examples/hello-world.rs

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

#![allow(unreachable_code)] // 允许不可达代码
#[macro_use] // 宏导入
extern crate rouille; // 导入 rouille 库

fn main() {
    println!("现在正在监听 localhost:8000");

    // `start_server` 函数在给定地址上永久监听。
    rouille::start_server("localhost:8000", move |request| {
        // 传递给 `start_server` 的闭包将为每个客户端请求调用一次。
        // 当有多个客户端时，将并发多次调用。
        // 这里开始请求的实际处理程序。

        // `router!` 宏与 Rust 核心库中的 `match` 表达式非常相似。
        // 宏接受请求作为参数，并跳转到第一个匹配请求的块。
        //
        // 每个可能的块构建一个 `Response` 对象。就像 Rust 中的大多数事物一样，
        // `router!` 宏是一个表达式，其值是由被调用块构建的 `Response`。
        // 由于 `router!` 是这个闭包的最后一部分代码，`Response` 随后被传递回 `start_server` 函数并发送给客户端。
        router!(request,
            (GET) (/) => {
                // 如果请求的 URL 是 `/`，我们跳转到这里。
                // 这个块构建一个重定向到 `/hello/world` 的 `Response` 对象。
                rouille::Response::redirect_302("/hello/world")
            },

            (GET) (/hello/world) => {
                // 如果请求的 URL 是 `/hello/world`，我们跳转到这里。
                println!("hello world");

                // 构建一个包含 "hello world" 文本的 `Response` 对象。
                rouille::Response::text("hello world")
            },

            (GET) (/panic) => {
                // 如果请求的 URL 是 `/panic`，我们跳转到这里。
                //
                // 这个块会 panic。幸运的是，Rouille 会自动捕获 panic 并发送一个 500 错误消息回客户端。
                // 这防止了服务器意外关闭。
                panic!("Oops!")
            },

            (GET) (/{id: u32}) => {
                // 如果请求的 URL 是例如 `/5`，我们跳转到这里。
                //
                // `router!` 宏将尝试将标识符（例如 `5`）解析为 `u32`。如果解析失败（例如如果 URL 是 `/hello`），
                // 则不调用这个块，`router!` 宏继续寻找另一个块。
                println!("u32 {:?}", id);

                // 为了示例，我们返回一个带有 400 状态码的空响应。
                rouille::Response::empty_400()
            },

            (GET) (/{id: String}) => {
                // 如果请求的 URL 是例如 `/foo`，我们跳转到这里。
                //
                // 这个路由与前一个类似，但这次我们有一个 `String`。
                // 解析为 `String` 永远不会失败。
                println!("String {:?}", id);

                // 构建一个包含 "hello, " 后面跟着 `id` 值的 `Response` 对象。
                rouille::Response::text(format!("hello, {}", id))
            },

            // 如果没有其他块匹配请求，则调用此代码块。
            // 我们返回一个带有 404 状态码的空响应。
            _ => rouille::Response::empty_404()
        )
    });
}
```

#### 案例 2 登录会话处理

examples/login-session.rs

```rust
#![allow(unreachable_code)]
#[macro_use]
extern crate rouille;

use rouille::Request;
use rouille::Response;
use std::collections::HashMap;
use std::io;
use std::sync::Mutex;

// 该结构体包含了我们存储在服务器上关于每个客户端的数据。
#[derive(Debug, Clone)]
struct SessionData {
    login: String,
}

fn main() {
    // 本例展示了如何创建带有简单登录表单的网站。

    // 简短消息，以便人们不必阅读源代码。
    // 请注意，像所有示例一样，我们仅在 `localhost` 上监听，因此您无法从自己的机器以外的其他机器访问此服务器。
    println!("现在正在监听 localhost:8000");

    // 为了示例方便，我们将把会话数据存储在内存中的哈希映射中。
    // 这样做的缺点是如果程序重新启动（例如因为更新），所有会话都会被清除，并且如果您启动了相同应用程序的多个进程（例如为了负载均衡），那么它们将不会共享会话。
    // 因此，在真实项目中，您应该将可能将存储会话在某种数据库中。
    //
    // 我们创建了一个结构体，其中包含了我们为每个会话存储在服务器上的数据，以及一个哈希映射，它将每个会话 ID 与数据关联起来。
    let sessions_storage: Mutex<HashMap<String, SessionData>> = Mutex::new(HashMap::new());

    rouille::start_server("localhost:8000", move |request| {
        rouille::log(&request, io::stdout(), || {
            // 我们调用 `session::session` 为每个客户端分配一个唯一标识符。
            // 此标识符通过自动添加到响应中的 cookie 进行跟踪。
            //
            // 函数的参数是 cookie 的名称（这里为 "SID"）和会话的持续时间（秒）（这里为一小时）。
            rouille::session::session(request, "SID", 3600, |session| {
                // 如果客户端已经有来自先前请求的标识符，我们尝试加载现有的会话数据。如果我们成功地从 `sessions_storage` 加载数据，
                // 我们会制作数据的副本，以避免锁定会话太长时间。
                //
                // 因此我们得到了一个 `Option<SessionData>`。
                let mut session_data = if session.client_has_sid() {
                    if let Some(data) = sessions_storage.lock().unwrap().get(session.id()) {
                        Some(data.clone())
                    } else {
                        None
                    }
                } else {
                    None
                };

                // 使用单独的函数实际处理请求，以提高可读性。
                // 我们传递 `Option<SessionData>` 的可变引用，以便函数可以自由修改它。
                let response = handle_route(&request, &mut session_data);

                // 由于对 `handle_route` 的函数调用可以修改会话数据，我们在必要时必须将其存储回 `sessions_storage`。
                if let Some(d) = session_data {
                    sessions_storage
                        .lock()
                        .unwrap()
                        .insert(session.id().to_owned(), d);
                } else if session.client_has_sid() {
                    // 如果 `handle_route` 清除了 `Option` 的内容，我们从存储中删除会话。这只在客户端已经有标识符时才执行，
                    // 否则调用 `session.id()` 将分配一个。
                    sessions_storage.lock().unwrap().remove(session.id());
                }

                // 在整个请求处理过程中，`sessions_storage` 互斥锁仅短暂锁定了两次。这对性能影响不大。

                response
            })
        })
    });
}

// 这是真正处理路由的函数。
//
// `session_data` 参数保存了我们对客户端的了解。此函数的主体可以修改它。请记住，我们设计的 `session_data` 适用于大多数情况，但并非所有情况。例如，如果你想跟踪用户访问的页面，
// 你应该以另一种方式设计它，否则某些请求的数据将覆盖其他请求的数据。
fn handle_route(request: &Request, session_data: &mut Option<SessionData>) -> Response {
    // 首先我们处理无论用户是否登录都可以访问且始终相同的路由。
    router!(request,
        (POST) (/login) => {
            // 当用户想要登录时调用此路由。

            // 为了检索用户通过 `<form>` 发送给我们的内容，我们使用 `post_input!` 宏。此宏返回一个错误（例如，如果缺少某个字段），
            // 因此我们使用 `try_or_400!` 宏来处理任何可能的错误。
            //
            // 如果宏成功，`data` 是一个结构体的实例，该结构体为我们在宏中指示的每个字段都有一个成员。
            let data = try_or_400!(post_input!(request, {
                login: String,
                password: String,
            }));

            // 对于这个示例，只是一个小的调试消息。在真实应用中，您也可以在日志中输出某些内容。
            println!("尝试使用登录 {:?} 和密码 {:?} 登录", data.login, data.password);

            // 在本示例中，所有以字母 'b' 开头的登录尝试都成功。当然，在真实的网站上，您应该以适当的方式检查凭据。
            if data.password.starts_with("b") {
                // 通过写入 `session_data` 的内容来登录用户。
                //
                // 这里有一个轻微的警告：在这个演示中，我们直接在内存中存储用户提供给我们的数据。这些数据不可信，可能包含任何内容，
                // 包括 XSS 攻击的尝试。将用户提供的数据存储在内存中并没有错，但我们必须注意不要将其解释为 HTML 数据，例如。
                *session_data = Some(SessionData { login: data.login });
                return Response::redirect_303("/");

            } else {
                // 我们返回一个虚拟响应以表示登录失败。在真实应用中，您可能应该使用某种 HTML 模板化技术。
                return Response::html("错误的登录/密码");
            }
        },

        (POST) (/logout) => {
            // 当用户想要注销时调用此路由。
            // 我们通过简单地清除 `session_data` 的内容来注销，这将删除会话。
            *session_data = None;

            // 我们返回一个虚拟响应以指示发生了什么。在真实应用中，您可能应该使用某种 HTML 模板化技术。
            return Response::html(r#"注销成功。
                                     <a href="/">点击这里返回首页</a>"#);
        },

        _ => ()
    );

    // 现在我们已经处理了在任何情况下都可以访问的所有路由，我们在继续之前检查用户是否已登录。
    if let Some(session_data) = session_data.as_ref() {
        // 已登录。
        handle_route_logged_in(request, session_data)
    } else {
        // 未登录。
        router!(request,
            (GET) (/) => {
                // 连接到根目录时显示登录表单。
                // 请注意，在真实网站中，您可能应该使用某种模板化系统，或者至少从文件中加载 HTML。
                Response::html(r#"
                    <p>提示：在此示例中，所有以字母 'b'（小写）开头的密码都是有效的。</p>
                    <form action="/login" method="POST">
                        <input type="text" name="login" placeholder="登录" />
                        <input type="password" name="password" placeholder="密码" />
                        <button type="submit">提交！</button>
                    </form>
                    <p>或者您可以尝试 <a href="/private">直接进入私人区域</a>，但如果没有登录，您将被重定向回这里。</p>
                "#)
            },

            _ => {
                // 如果用户尝试访问任何其他路由，将他们重定向到登录表单。
                //
                // 您可能会想知道：如果我想让我网站的某些部分公开，而其他部分私密，我应该把所有公开路由都放在这里吗？答案是不。这个示例的结构适用于一个完全私密的网站。不要犹豫，以不同的方式构建它，例如通过拥有一个只专门处理公开路由的函数。
                Response::redirect_303("/")
            }
        )
    }
}

// 此函数处理仅在用户登录后才能访问的路由。
fn handle_route_logged_in(request: &Request, _session_data: &SessionData) -> Response {
    router!(request,
        (GET) (/) => {
            // 显示一些问候语，并返回一个虚拟响应。
            Response::html(r#"您现在已登录。如果您关闭标签页然后再次打开，您仍然会保持登录状态。<br />
                              <a href="/private">点击这里进入私人区域</a>
                              <form action="/logout" method="POST">
                              <button>注销</button></form>"#)
        },

        (GET) (/private) => {
            // 此路由在这里是为了证明客户端只有在成功登录后才能进入 `/private`。
            Response::html(r#"您在私人区域！<a href="/">返回</a>."#)
        },

        _ => Response::empty_404()
    )
}
```

#### 案例 3 数据库

examples/database.rs

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

#[macro_use]
extern crate rouille;
extern crate postgres;
extern crate serde;
#[macro_use]
extern crate serde_derive;

use std::sync::Mutex;

use postgres::{Client, NoTls, Transaction};

use rouille::Request;
use rouille::Response;

fn main() {
    // 本例展示了当客户端执行请求时，如何连接到数据库并执行查询。
    // 此示例中创建的服务器使用 REST API。

    // 我们首先尝试连接到数据库。
    //
    // 这里需要注意的一点是，我们在连接周围包装了一个 `Mutex`。由于请求处理器可以并行多次调用，
    // 我们在其中使用的任何内容都必须是线程安全的。默认情况下，PostgreSQL 连接不是线程安全的，
    // 因此我们需要一个互斥锁来使其线程安全。
    //
    // 如果不包装互斥锁，当我们尝试在传递给 `start_server` 的闭包中使用 `db` 变量时，将会导致编译错误。
    let db = {
        let db = Client::connect("postgres://test:test@localhost/test", NoTls);
        Mutex::new(db.expect("连接数据库失败"))
    };

    // 为了示例的方便，我们进行一些初始化。
    // 在真实应用中，您可能希望有一个迁移系统。这超出了 rouille 的范围。
    {
        let sql = "CREATE TABLE IF NOT EXISTS notes (
                    id SERIAL PRIMARY KEY,
                    content TEXT NOT NULL
                   );";
        db.lock()
            .unwrap()
            .execute(sql, &[])
            .expect("数据库初始化失败");
    }

    // 简短消息，以便人们不必阅读源代码。
    // 请注意，像所有其他示例一样，我们仅在 `localhost` 上监听，因此您无法从自己的机器以外的任何机器访问此服务器。
    println!("现在正在监听 localhost:8000");

    // 现在服务器开始监听。`move` 关键字将确保我们将 `db` 变量移动到闭包中。
    // 如果这里不放 `move` 将会导致编译错误。
    //
    // 请注意，在理想情况下，这里不需要 `move`。不幸的是，Rust 还不够智能，无法理解数据库在我们还使用它的时候不能被销毁。
    rouille::start_server("localhost:8000", move |request| {
        // 由于我们将数据库连接包装在 `Mutex` 周围，我们在使用前在这里锁定它。
        //
        // 这将为我们处理此请求时提供对数据库连接的独占访问权。不幸的是，这意味着如果在另一个请求正在处理时发出请求，
        // 第二个请求将不得不等待第一个请求完成。
        //
        // 在真实应用中，您可能希望创建多个连接而不是只有一个，并使每个请求使用不同的连接。
        //
        // 此外，如果在锁定 `Mutex` 时发生 panic，则数据库连接可能会处于损坏状态，下次锁定互斥锁时可能会 panic。
        // 这是使用多个连接的另一个好理由。
        let mut db = db.lock().unwrap();

        // 开始一个事务，以便如果在处理请求过程中发生 panic，对数据库所做的任何更改都将回滚。
        let mut db = db.transaction().unwrap();

        // 为了更好的可读性，我们在单独的函数中处理请求。
        let response = note_routes(&request, &mut db);

        // 如果响应成功，我们在返回前提交事务。只有在这一点上，数据才真正写入数据库。
        if response.is_success() {
            db.commit().unwrap();
        }

        response
    });
}

// 这个函数实际上处理请求。
fn note_routes(request: &Request, db: &mut Transaction) -> Response {
    router!(request,
        (GET) (/) => {
            // 为了示例方便，我们只在 `/` 上放了一个虚拟路由，以便您如果用浏览器连接到服务器可以看到一些东西。
            Response::text("您好！很遗憾这里没有可看的内容。")
        },

        (GET) (/notes) => {
            // 此路由返回笔记列表。我们执行查询并将其输出为 JSON。

            #[derive(Serialize)]
            struct Elem { id: String }

            let mut out = Vec::new();
            // 我们执行查询并遍历行，将每行写入 `out`。
            for row in &db.query("SELECT id FROM notes", &[]).unwrap() {
                let id: i32 = row.get(0);
                out.push(Elem { id: format!("/note/{}", id) });
            }

            Response::json(&out)
        },

        (GET) (/note/{id: i32}) => {
            // 此路由返回笔记的内容，如果它存在。

            // 请注意，这段代码有点不人性化，但这主要是数据库客户端库的问题，而不是 rouille 本身。

            // 为此，我们首先创建一个变量来接收笔记的内容。
            let mut content: Option<String> = None;
            // 然后执行查询并写入 `content`。如果 SQL 语句有误，这行代码只会 panic。
            for row in &db.query("SELECT content FROM notes WHERE id = $1", &[&id]).unwrap() {
                content = Some(row.get(0));
            }

            // 如果到这一点 `content` 仍然为空，这意味着笔记在数据库中不存在。否则，我们返回内容。
            match content {
                Some(content) => Response::text(content),
                None => Response::empty_404(),
            }
        },

        (PUT) (/note/{id: i32}) => {
            // 此路由修改现有笔记的内容。

            // 我们首先读取 HTTP 请求的正文到一个 `String`。
            let body = try_or_400!(rouille::input::plain_text_body(&request));

            // 并用查询写入内容。如果 SQL 语句有误，这行代码只会 panic。
            let updated = db.execute("UPDATE notes SET content = $2 WHERE id = $1",
                                     &[&id, &body]).unwrap();

            // 我们根据修改的行数来确定笔记是否存在。
            if updated >= 1 {
                Response::text("笔记已更新")
            } else {
                Response::empty_404()
            }
        },

        (POST) (/note) => {
            // 此路由创建一个新笔记，其初始内容为正文。

            // 我们首先读取 HTTP 请求的正文到一个 `String`。
            let body = try_or_400!(rouille::input::plain_text_body(&request));

            // 为此，我们首先创建一个变量来接收内容。
            let mut id: Option<i32> = None;
            // 然后执行查询并写入 `content`。如果 SQL 语句有误，这行代码只会 panic。
            for row in &db.query("INSERT INTO notes(content) VALUES ($1) RETURNING id", &[&body]).unwrap() {
                id = Some(row.get(0));
            }

            let id = id.unwrap();

            let mut response = Response::text("笔记已创建");
            response.status_code = 201;
            response.headers.push(("Location".into(), format!("/note/{}", id).into()));
            response
        },

        (DELETE) (/note/{id: i32}) => {
            // 此路由删除笔记。如果 SQL 语句有误，这行代码只会 panic。
            db.execute("DELETE FROM notes WHERE id = $1", &[&id]).unwrap();
            Response::text("")
        },

        // 如果其他块均未匹配请求，返回 404 响应。
        _ => Response::empty_404()
    )
}
```

#### 案例 4 websocket 通信

examples/websocket.rs

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

#[macro_use]
extern crate rouille;

use std::thread;

use rouille::websocket;
use rouille::Response;

fn main() {
    // 本例展示了如何使用 rouille 与 WebSockets。

    // 简短消息，以便人们不必阅读源代码。
    // 请注意，像所有示例一样，我们仅在 `localhost` 上监听，因此您无法从自己的机器以外的其他机器访问此服务器。
    println!("现在正在监听 localhost:8000");

    rouille::start_server("localhost:8000", move |request| {
        router!(request,
            (GET) (/) => {
                // `/` 路由输出一个 HTML 客户端，以便用户可以尝试 WebSockets。
                // 请注意，在真实网站中，您可能应该使用某种模板化系统，或者至少从文件中加载 HTML。
                Response::html("<script type=\"text/javascript\">
                    var socket = new WebSocket(\"ws://localhost:8000/ws\", \"echo\");
                    function send(data) {
                        socket.send(data);
                    }
                    socket.onmessage = function(event) {
                        document.getElementById('result').innerHTML += event.data + '<br />';
                    }
                    </script>
                    <p>本示例会将您发送给服务器的所有内容发送回来。</p>
                    <p><form onsubmit=\"send(document.getElementById('msg').value); return false;\">
                    <input type=\"text\" id=\"msg\" />
                    <button type=\"submit\">发送</button>
                    </form></p>
                    <p>已接收: </p>
                    <p id=\"result\"></p>")
            },

            (GET) (/ws) => {
                // 这是 WebSockets 路由。

                // 为了开始使用 WebSockets，我们调用 `websocket::start`。
                // 如果客户端没有请求 WebSockets，该函数将返回错误，在这种情况下，我们通过 `try_or_400!` 宏向客户端返回错误 400。
                //
                // 该函数返回作为 `start_server` 函数一部分要发送回的响应，以及一个 `websocket` 变量，类型为 `Receiver<Websocket>`。
                // 一旦响应已经发送回客户端，`Receiver` 将由 rouille 用代表 WebSocket 的 `Websocket` 对象填充。
                let (response, websocket) = try_or_400!(websocket::start(&request, Some("echo")));

                // 由于 Rust 中 I/O 的特性，我们需要为每个 WebSocket 启动一个单独的线程。
                thread::spawn(move || {
                    // 这行代码将阻塞，直到上面的 `response` 已经返回。
                    let ws = websocket.recv().unwrap();
                    // 我们使用单独的函数以提高可读性。
                    websocket_handling_thread(ws);
                });

                response
            },

            // 默认的 404 路由，与所有示例相同。
            _ => rouille::Response::empty_404()
        )
    });
}

// 在单独的线程中运行的函数。
fn websocket_handling_thread(mut websocket: websocket::Websocket) {
    // 我们等待 WebSocket 中的一条新消息。
    while let Some(message) = websocket.next() {
        match message {
            websocket::Message::Text(txt) => {
                // 如果消息是文本，使用 `send_text` 将其发送回去。
                println!("从 WebSocket 接收到 {:?} ", txt);
                websocket.send_text(&txt).unwrap();
            }
            websocket::Message::Binary(_) => {
                println!("从 WebSocket 接收到二进制数据");
            }
        }
    }
}
```

#### 案例 5 反向代理

examples/reverse-proxy.rs

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

#[macro_use]
extern crate rouille;

use std::thread;

use rouille::websocket;
use rouille::Response;

fn main() {
    // 本例展示了如何使用 rouille 与 WebSockets。

    // 简短消息，以便人们不必阅读源代码。
    // 请注意，像所有示例一样，我们仅在 `localhost` 上监听，因此您无法从自己的机器以外的其他机器访问此服务器。
    println!("现在正在监听 localhost:8000");

    rouille::start_server("localhost:8000", move |request| {
        router!(request,
            (GET) (/) => {
                // `/` 路由输出一个 HTML 客户端，以便用户可以尝试 WebSockets。
                // 请注意，在真实网站中，您可能应该使用某种模板化系统，或者至少从文件中加载 HTML。
                Response::html("<script type=\"text/javascript\">
                    var socket = new WebSocket(\"ws://localhost:8000/ws\", \"echo\");
                    function send(data) {
                        socket.send(data);
                    }
                    socket.onmessage = function(event) {
                        document.getElementById('result').innerHTML += event.data + '<br />';
                    }
                    </script>
                    <p>本示例会将您发送给服务器的所有内容发送回来。</p>
                    <p><form onsubmit=\"send(document.getElementById('msg').value); return false;\">
                    <input type=\"text\" id=\"msg\" />
                    <button type=\"submit\">发送</button>
                    </form></p>
                    <p>已接收: </p>
                    <p id=\"result\"></p>")
            },

            (GET) (/ws) => {
                // 这是 WebSockets 路由。

                // 为了开始使用 WebSockets，我们调用 `websocket::start`。
                // 如果客户端没有请求 WebSockets，该函数将返回错误，在这种情况下，我们通过 `try_or_400!` 宏向客户端返回错误 400。
                //
                // 该函数返回作为 `start_server` 函数一部分要发送回的响应，以及一个 `websocket` 变量，类型为 `Receiver<Websocket>`。
                // 一旦响应已经发送回客户端，`Receiver` 将由 rouille 用代表 WebSocket 的 `Websocket` 对象填充。
                let (response, websocket) = try_or_400!(websocket::start(&request, Some("echo")));

                // 由于 Rust 中 I/O 的特性，我们需要为每个 WebSocket 启动一个单独的线程。
                thread::spawn(move || {
                    // 这行代码将阻塞，直到上面的 `response` 已经返回。
                    let ws = websocket.recv().unwrap();
                    // 我们使用单独的函数以提高可读性。
                    websocket_handling_thread(ws);
                });

                response
            },

            // 默认的 404 路由，与所有示例相同。
            _ => rouille::Response::empty_404()
        )
    });
}

// 在单独的线程中运行的函数。
fn websocket_handling_thread(mut websocket: websocket::Websocket) {
    // 我们等待 WebSocket 中的一条新消息。
    while let Some(message) = websocket.next() {
        match message {
            websocket::Message::Text(txt) => {
                // 如果消息是文本，使用 `send_text` 将其发送回去。
                println!("从 WebSocket 接收到 {:?} ", txt);
                websocket.send_text(&txt).unwrap();
            }
            websocket::Message::Binary(_) => {
                println!("从 WebSocket 接收到二进制数据");
            }
        }
    }
}
```

#### 案例 6 静态文件

examples/static-files.rs

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

extern crate rouille;

use rouille::Response;

fn main() {
    // 本例展示了如何使用 rouille 服务静态文件。

    // 请注意，像所有示例一样，我们仅在 `localhost` 上监听，因此您无法从自己的机器以外的其他机器访问此服务器。
    println!("现在正在监听 localhost:8000");

    rouille::start_server("localhost:8000", move |request| {
        {
            // `match_assets` 函数尝试找到一个名称与请求 URL 相对应的文件。
            // 第二个参数 (`"."`) 指明了要查找的文件所在的目录。
            // 为了避免潜在的安全威胁，`match_assets` 永远不会返回该目录之外的任何文件，即使 URL 是例如 `/../../foo.txt`。
            let response = rouille::match_assets(&request, ".");

            // 如果找到文件，`match_assets` 函数将返回一个带有 200 状态码和文件内容的响应。
            // 如果未找到文件，它将返回一个空的 404 响应。
            // 这里我们检查是否找到文件，如果是，则返回响应。
            if response.is_success() {
                return response;
            }
        }

        // 如果没有静态文件与请求 URL 匹配，则会到达代码的这一点。

        // 在一个真实网站中，您可能希望在这里服务非静态文件（例如使用 `router!` 宏），但在这里我们只返回一个 404 响应。
        Response::html(
            "404 错误。尝试 <a href=\"/README.md\">README.md</a> 或 \
                        <a href=\"/src/lib.rs\">src/lib.rs</a> 作为示例。",
        )
        .with_status_code(404)
    });
}
```

#### 案例 7 PHP

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

extern crate rouille;

use rouille::cgi::CgiRun;
use std::process::Command;

fn main() {
    rouille::start_server("localhost:8000", move |request| {
        // TODO: 添加日志记录
        let mut cmd = Command::new("php-cgi");
        cmd.arg("-n"); // 不使用 php.ini 文件。
        cmd.env("SCRIPT_FILENAME", "examples/php-test.php"); // 使用的 PHP 脚本。
        cmd.env("REDIRECT_STATUS", "1"); // 出于安全考虑，这是必要的。
        cmd.start_cgi(&request).unwrap()
    });
}
```

- examples/php-test.php

```php
<?php echo "hello world";
```

#### 案例 8

examples/static-files.rs

```rust
// 版权所有 (c) 2016 Rouille 开发者
// 根据 Apache 许可证，版本 2.0 许可
// <LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0> 或 MIT 许可证
// <LICENSE-MIT 或 http://opensource.org/licenses/MIT>，您可选择其一。
// 项目中携带此类通知的所有文件，除非根据这些条款，否则不得被复制、修改或分发。

extern crate rouille;

use rouille::Response;

fn main() {
    // 本例展示了如何使用 rouille 服务静态文件。

    // 请注意，像所有示例一样，我们仅在 `localhost` 上监听，因此您无法从自己的机器以外的其他机器访问此服务器。
    println!("现在正在监听 localhost:8000");

    rouille::start_server("localhost:8000", move |request| {
        {
            // `match_assets` 函数尝试找到一个名称与请求 URL 相对应的文件。
            // 第二个参数 (`"."`) 指明了要查找的文件所在的目录。
            // 为了避免潜在的安全威胁，`match_assets` 永远不会返回该目录之外的任何文件，即使 URL 是例如 `/../../foo.txt`。
            let response = rouille::match_assets(&request, ".");

            // 如果找到文件，`match_assets` 函数将返回一个带有 200 状态码和文件内容的响应。
            // 如果未找到文件，它将返回一个空的 404 响应。
            // 这里我们检查是否找到文件，如果是，则返回响应。
            if response.is_success() {
                return response;
            }
        }

        // 如果没有静态文件与请求 URL 匹配，则会到达代码的这一点。

        // 在一个真实网站中，您可能希望在这里服务非静态文件（例如使用 `router!` 宏），但在这里我们只返回一个 404 响应。
        Response::html(
            "404 错误。尝试 <a href=\"/README.md\">README.md</a> 或 \
                        <a href=\"/src/lib.rs\">src/lib.rs</a> 作为示例。",
        )
        .with_status_code(404)
    });
}
```

### 常见问题解答

#### 性能如何？

Rust 中的异步 I/O、绿线程、协程等仍然非常不成熟。

Rouille 库只是忽略了这种优化，专注于提供易于使用的同步 API，其中每个请求都在其自己的专用线程中处理。

即使 rouille 本身是异步的，你也需要异步数据库客户端和异步文件加载才能利用它。目前 Rust 生态系统中还没有这样的库。

一旦异步 I/O 被解决，Rouille 将（希望是透明地）更新以考虑它。

#### 但它快吗？

在作者的旧 Linux 机器上，使用 `wrk -t 4 -c 4` 进行的一些基本基准测试显示了以下结果：

- Rouille 的 hello-world 示例每秒约 22k 请求。
- Node.js 中的 hello world（使用 `http.createServer`）每秒约 14k 请求。
- tokio-minihttp 的 hello-world 示例（据称是目前存在的最快的 HTTP 服务器）每秒约 77k 请求。
- hyper 的 hello 示例（也使用带有 mio 的异步 I/O）每秒约 53k 请求。
- Go 中的 hello world 每秒约 51k 请求。
- Nginx 的默认安装每秒约 39k 请求。

虽然不是最快的，但 rouille 具有 **合理的** 性能。在所有这些示例中，rouille 是唯一使用同步 I/O 的。

#### 是否有用于数据库连接、模板等功能的插件？

将数据库或模板集成到你用 rouille 编写的 Web 服务器中应该是微不足道的。此外，插件需要维护，并倾向于造成依赖地狱。作者认为，通常不使用插件更好。

#### 但我习惯了类似 Express 的框架！

不要这样做：（伪代码）

```
server.add_middleware(function() {
    // 中间件 1
});

server.add_middleware(function() {
    // 中间件 2
});

server.add_middleware(function() {
    // 中间件 3
});
```

在 rouille 中，你只需完全手动处理每个请求：

```
// 在这里初始化一切

rouille::start_server(..., move |request| {
    // 中间件 1

    // 中间件 2

    // 中间件 3
});
```

随着我们对 Rust 和 Rouille 的探索告一段落，是时候为这段旅程画上一个圆满的句号了。在这篇文章中，我们不仅揭开了 Rust 语言在 Web 开发领域的神秘面纱，还深入体验了 Rouille 框架的轻巧与强大。

#### 结语：启航，探索未知的 `Web` 开发宇宙

在编程的星辰大海中，`Rust` 和 `Rouille` 就像是一艘装备精良的航船，它们将带你穿越性能的激流，绕过安全的暗礁，最终抵达高效、安全且可靠的 Web 开发彼岸。现在，当你站在这艘航船的甲板上，准备扬帆起航时，请记得：

- **「勇于探索」**：每一个新的框架和语言都是探索编程世界的一扇窗，不要害怕未知，勇于探索，你会发现更多编程之美。
- **「持续学习」**：技术的世界日新月异，持续学习是保持竞争力的关键。无论是 Rust 的深入掌握，还是对 Rouille 的熟练运用，都需要你不断地学习和实践。
- **「享受过程」**：编程不仅仅是工作，它也可以是一种创造和表达的方式。享受编码的过程，让每一次键盘的敲击都充满乐趣和成就感。

最后，不要忘记，无论你在 Rust 和 Rouille 的航程中遇到何种风浪，都有一群热情的社区成员和丰富的在线资源作为你的灯塔和避风港。

现在，调整好你的航向，扬起你的帆，让我们一起启航，探索那片属于 Web 开发者的未知宇宙。愿你的旅程充满发现，你的代码充满光芒，你的应用，如同星辰般璀璨。

## Rocket：后台框架

[Rust 后台框架 Rocket 火箭之旅：打造未来 Web 应用的终极指南(一) (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247493780&idx=1&sn=be8acca1de467433e7fd5f90c5f770d1&chksm=c0e76683f790ef9559af946cf4bf8b75081c0cf91131ca5f8f1d82a4ffc1f2468eddc8a789f0&scene=21#wechat_redirect)

[Rust 后台框架 Rocket 之 Responders 响应体：打造未来 Web 应用的终极指南(二) (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247493821&idx=1&sn=ea06b798dc85d38afdcae82f4044ca2c&chksm=c0e766aaf790efbc144f337f453830504e6d5bc18dbadcdbb32fe2a96e5263ac84c9158f6a5c&cur_album_id=3386270396001402881&scene=190#rd)

Rocket 是 Rust 的 Web 框架。如果你愿意，你可以把Rocket想象成一个更灵活、更友好的Rails、Flask、Bottle和Yesod混合体。我们更愿意将火箭视为新事物。Rocket 旨在快速、简单和灵活，同时尽可能提供有保证的安全性。重要的是，Rocket 还旨在变得有趣，它通过确保您编写尽可能少的代码来完成任务来实现这一点。

Rocket 提供了使用 Rust 构建 Web 服务器和应用程序的原语：Rocket 提供路由、请求预处理和响应后处理。您的应用程序代码指示 Rocket 进行预处理和后处理的内容，并填补预处理和后处理之间的空白。

```
#[get("/world")]              // <- route attribute
fn world() -> &'static str {  // <- request handler
    "hello, world!"
}
```

上面的例子说明一下，它是一个处理程序，只是一个函数，它接受任意数量的参数并返回任意类型。要匹配的参数包括静态路径、动态路径、路径段、表单、查询字符串、请求格式说明符和正文数据。Rocket 使用属性（看起来像其他语言中的函数装饰器）来简化声明路由。路由是通过注释函数（处理程序）来声明的，其中包含要匹配的参数集。

```
rocket::build().mount("/hello", routes![world]);
```



上面的例子说明一下，通过mount方法，它将路由和处理程序组装在一起，它挂载之后，rocket接收到请求后，就可以将请求路由到处理程序。

```
#[launch]
fn rocket() -> _ {
    rocket::build().mount("/hello", routes![world])
}
```



上面的例子说明一下，在rocket挂载路由之后，就可以进行发射了，它发射有两种方式，上面的例子是它推荐的发射方式，它会生成一个函数来设置异步运行时和启动web服务。

是不是很简单？只需要编写处理程序，然后按照格式进行挂载之后，就可以进行发射了。其实，它还有很多的功能，你可以查看官方文档rocket.rs。

你在使用它之间，建议先浏览下它的文档介绍，然后运行它的example下的例子。官方的文档当前是0.5-rc，上面所列出的例子和说明都是基于这个版本的。

我在本地运行rocket demo时，发现线上的版本是0.4.11，它的例子和说明与0.5-rc有些许的差异，我在使用0.4.11版本时，发现在windows 10下编译会报错，报错信息如下：

```

error: failed to run custom build command for `pear_codegen v0.1.5`

Caused by:
  process didn't exit successfully: `D:\workspace\rust-workspace\rocket-demo\target\debug\build\pear_codegen-57c49e3ab9feb78c\build-script-build` (exit code: 101)
  --- stderr
  Error: Pear requires a 'dev' or 'nightly' version of rustc.
  Installed version: 1.70.0 (2023-05-31)
  Minimum required:  1.31.0-nightly (2018-10-05)
  thread 'main' panicked at 'Aborting compilation due to incompatible compiler.', C:\Users\DEV\.cargo\registry\src\mirrors.ustc.edu.cn-61ef6e0cd06fb9b8\pear_codegen-0.1.5\build.rs:24:13
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
warning: build failed, waiting for other jobs to finish...
```



搜索之后，GitHub的解决方法是运行cargo update，然后再次运行，这个我没有实际测试，因为我发现使用0.5-rc的版本的rocket，在写法上比较简练。就将依赖直接切换到0.5-rc。

在[dependencies]中加入：

```
rocket = "=0.5.0-rc.3"
```



源文件main.rs如下：

```
#[macro_use] extern crate rocket;

#[get("/")]
fn hello() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![hello])
}
```



可以运行，运行后输出：

```bash
Configured for debug.
   >> address: 127.0.0.1
   >> port: 8000
   >> workers: 4
   >> max blocking threads: 512
   >> ident: Rocket
   >> IP header: X-Real-IP
   >> limits: bytes = 8KiB, data-form = 2MiB, file = 1MiB, form = 32KiB, json = 1MiB, msgpack = 1MiB, string = 8KiB
   >> temp dir: C:\Users\DEV\AppData\Local\Temp\
   >> http/2: true
   >> keep-alive: 5s
   >> tls: disabled
   >> shutdown: ctrlc = true, force = true, grace = 2s, mercy = 3s
   >> log level: normal
   >> cli colors: true
Routes:
   >> (hello) GET /
Fairings:
   >> Shield (liftoff, response, singleton)
Shield:
   >> X-Content-Type-Options: nosniff
   >> Permissions-Policy: interest-cohort=()
   >> X-Frame-Options: SAMEORIGIN
Rocket has launched from http://127.0.0.1:8000
```

我用过axum，在命令行输出这块，还是觉得rocket比较好一点，输出的信息很详细。其它的还没有深入了解，待我了解之后，在其它的文章进行介绍。网上的观点，rocket性能相比较于axum、warp等稍微差点，我个人觉得它在辅助这块比较强，例如配置文件、命令行输出、功能模块等方面。期待0.5版本的稳定版发布。

## 掌握 Sauron【教程】：用 Rust 打造优雅高效的 Web 应用，简化编码，专注业务逻辑

[掌握 Sauron【教程】：用 Rust 打造优雅高效的 Web 应用，简化编码，专注业务逻辑 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247494230&idx=1&sn=e1deed931f55a1f0d21e0d4eaeff25cb&chksm=c0e76441f790ed579acc629cca14f1b624a594f1b6aa94010c4668e7000a57cb7d8b6ac0abac&cur_album_id=3386270396001402881&scene=190#rd)

## 聊一聊使用Rust进行Web开发的细节

[聊一聊使用Rust进行Web开发的细节 (qq.com)](https://mp.weixin.qq.com/s/kDxIJEy9kfvvRXEZCzVI7Q)

# Web 前端界面构建

## Kobold： 简洁声明式的 Web 界面构建工具库

文档：https://docs.rs/kobold/latest/kobold/

- 声明性[`视图！`](https://docs.rs/kobold/latest/kobold/macro.view.html) 宏，它使用 HTML 风格的语法和可选的结束标记。
- 具有可选参数的功能[组件](https://docs.rs/kobold/latest/kobold/attr.component.html)。
- 状态管理和事件处理。
- 高性能和 Rust 生态系统中始终保持最低的 Wasm 占用空间。

教程：[Rust Kobold 教程： 简洁声明式的 Web 界面构建工具 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247493858&idx=1&sn=a7d094714c2691bd1f954909369f731a)

## Rust DOM 框架：Dominator 是世界上最快的 DOM 框架之一

### 概述

项目地址

`Dominator` 是世界上最快的 `DOM` 框架之一（它和 `Inferno` 一样快）。

它不使用 VDOM，而是使用原始的 DOM 节点以获得最佳性能。它紧贴底层，几乎没有开销：所有操作都内联到原始的 DOM 操作上。

即使在非常大的应用程序中，它也能非常好地扩展，因为更新始终是 O(1)时间，无论你的应用程序有多大或嵌套有多深。

它具有方便的高级声明式 `API`，其工作方式类似于 `React` 组件，但专为 Rust 和 FRP 信号设计。

它通常功能齐全，尽管随着时间的推移可能会添加更多的便利方法。

它相当稳定：破坏性变更非常罕见，并使用正常的语义化版本系统进行处理。

我在多个大型应用程序中成功使用了 `Dominator`，它的性能表现非常出色。

### 运行示例

只需执行 `yarn`，然后执行 `yarn start`（编译依赖项需要一段时间，请耐心等待）

#### 动画项目

工程目录结构

```
cd examples/animation
```

![图片](./Rust框架和库.assets/640-1714731117954-329.webp)

##### rollup.config.js

```
import rust from "@wasm-tool/rollup-plugin-rust";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const is_watch = !!process.env.ROLLUP_WATCH;

export default {
    input: {
        index: "./Cargo.toml",
    },
    output: {
        dir: "dist/js",
        format: "iife",
        sourcemap: true,
    },
    plugins: [
        rust({
            serverPath: "js/",
        }),

        is_watch && serve({
            contentBase: "dist",
            open: true,
        }),

        is_watch && livereload("dist"),

        !is_watch && terser(),
    ],
};
```

##### package.json

```json
{
	"private": true,
	"author": "Pauan <pauanyu+github@pm.me>",
	"name": "animation",
	"version": "0.1.0",
	"scripts": {
		"build": "rimraf dist/js && rollup --bundleConfigAsCjs --config",
		"watch": "rimraf dist/js && rollup --bundleConfigAsCjs --config --watch"
	},
	"devDependencies": {
		"@wasm-tool/rollup-plugin-rust": "^2.0.0",
		"rimraf": "^5.0.0",
		"rollup": "^3.21.0",
		"rollup-plugin-livereload": "^2.0.0",
		"rollup-plugin-serve": "^2.0.0",
		"rollup-plugin-terser": "^7.0.2"
	}
}
```

examples/animation/Cargo.toml

```yaml
[package]
name = "animation"
version = "0.1.0"
description = "Animation demo using dominator"
authors = ["Pauan <pauanyu+github@pm.me>"]
categories = ["wasm"]
readme = "README.md"
license = "MIT"
edition = "2018"

[workspace]

[dependencies]
console_error_panic_hook = "0.1.6"
dominator = "0.5.18"
wasm-bindgen = "0.2.74"
futures = "0.3.15"
futures-signals = "0.3.20"
gloo-timers = { version = "0.2.1", features = ["futures"] }
once_cell = "1.7.2"

[dependencies.web-sys]
version = "0.3.51"
features = [
    "console",
]
```

examples/animation/src/lib.rs

```rust
use wasm_bindgen::prelude::*;
use std::sync::Arc;
use once_cell::sync::Lazy;
use futures::stream::StreamExt;
use futures_signals::map_ref;
use futures_signals::signal::{Mutable, SignalExt};
use futures_signals::signal_vec::MutableVec;
use gloo_timers::future::IntervalStream;
use dominator::{Dom, html, clone, events, class};
use dominator::traits::AnimatedSignalVec;
use dominator::animation::{easing, Percentage, MutableAnimation, AnimatedMapBroadcaster};


struct Bar {
    color: u32,
    wave_animation: MutableAnimation,
    hover_animation: MutableAnimation,
}

impl Bar {
    fn new(color: u32) -> Arc<Self> {
        Arc::new(Self {
            color,
            wave_animation: MutableAnimation::new(3000.0),
            hover_animation: MutableAnimation::new(300.0),
        })
    }

    fn render(bar: Arc<Bar>, insert_animation: AnimatedMapBroadcaster) -> Dom {
        static CLASS: Lazy<String> = Lazy::new(|| class! {
            .style("border-radius", "10px")
            .style("position", "relative")
            .style("border-style", "solid")
            .style("border-width", "5px")
        });

        let low: f64 = bar.color as f64;
        let high: f64 = (bar.color + 60) as f64;

        html!("div", {
            .class(&*CLASS)


            .future(bar.wave_animation.signal().for_each(clone!(bar => move |t| {
                let t: f64 = t.into_f64();

                // Automatically cycles back and forth between 0 and 1
                // This creates a wave effect
                if t == 0.0 {
                    bar.wave_animation.animate_to(Percentage::new(1.0));

                } else if t == 1.0 {
                    bar.wave_animation.animate_to(Percentage::new(0.0));
                }

                async {}
            })))


            // Animation when hovering over the Bar
            .event(clone!(bar => move |_: events::MouseEnter| {
                bar.hover_animation.animate_to(Percentage::new(1.0));
            }))

            .event(clone!(bar => move |_: events::MouseLeave| {
                bar.hover_animation.animate_to(Percentage::new(0.0));
            }))


            // These will animate when the Bar is inserted/removed
            .style_signal("left", insert_animation.signal()
                .map(|t| t.none_if(1.0).map(|t| easing::in_out(t, easing::cubic)))
                .map(|t| t.map(|t| format!("{}px", t.range_inclusive(100.0, 0.0)))))

            .style_signal("height", map_ref! {
                let insert = insert_animation.signal().map(|t| easing::in_out(t, easing::cubic)),

                let hover = bar.hover_animation.signal().map(|t| easing::out(t, easing::cubic)) =>

                // Animate the height between 5px and 15px when hovering
                // But if the Bar is being inserted/removed then it will interpolate to 0px
                Some(format!("{}px", insert.range_inclusive(0.0, hover.range_inclusive(5.0, 15.0))))
            })

            .style_signal("border-width", insert_animation.signal()
                .map(|t| t.none_if(1.0).map(|t| easing::in_out(t, easing::cubic)))
                .map(|t| t.map(|t| format!("{}px", t.range_inclusive(0.0, 5.0)))))


            // These will animate in a continuous wave-like pattern
            .style_signal("width", bar.wave_animation.signal()
                .map(|t| easing::in_out(t, easing::cubic))
                .map(|t| Some(format!("{}px", t.range_inclusive(167.0, 500.0)))))

            .style_signal("margin-left", bar.wave_animation.signal()
                .map(|t| easing::in_out(t, easing::cubic))
                .map(|t| Some(format!("{}px", t.range_inclusive(0.0, 20.0)))))

            .style_signal("background-color", bar.wave_animation.signal()
                .map(|t| easing::in_out(t, easing::cubic))
                .map(move |t|
                    Some(format!("hsl({}, {}%, {}%)",
                        t.range_inclusive(low, high),
                        t.range_inclusive(50.0, 100.0),
                        t.range_inclusive(50.0, 100.0)))))

            .style_signal("border-color", bar.wave_animation.signal()
                .map(|t| easing::in_out(t, easing::cubic))
                .map(move |t|
                    Some(format!("hsl({}, {}%, {}%)",
                        t.range_inclusive(high, low),
                        t.range_inclusive(100.0, 50.0),
                        t.range_inclusive(100.0, 50.0)))))
        })
    }
}


struct App {
    current_color: Mutable<u32>,
    bars: MutableVec<Arc<Bar>>,
}

impl App {
    fn new() -> Arc<Self> {
        Arc::new(Self {
            current_color: Mutable::new(0),
            bars: MutableVec::new(),
        })
    }

    fn new_color(&self) -> u32 {
        // Cycles through the color hue spectrum
        self.current_color.replace_with(|x| (*x + 10) % 360)
    }

    fn new_bar(&self) {
        let mut lock = self.bars.lock_mut();

        // Limits the number of bars to 40
        if lock.len() >= 40 {
            lock.remove(0);
        }

        lock.push_cloned(Bar::new(self.new_color()));
    }

    fn render_bars(app: Arc<Self>) -> Dom {
        html!("div", {
            .children_signal_vec(app.bars.signal_vec_cloned()
                // Animates the Bar for 2000ms when inserting/removing
                .animated_map(2000.0, |bar, animation| Bar::render(bar, animation)))
        })
    }

    fn render(app: Arc<Self>) -> Dom {
        static CLASS: Lazy<String> = Lazy::new(|| class! {
            .style("display", "flex")
            .style("flex-direction", "row")
        });

        html!("div", {
            .class(&*CLASS)

            // Inserts a new colored bar every 500ms
            .future(IntervalStream::new(500).for_each(clone!(app => move |_| {
                app.new_bar();
                async {}
            })))

            .children(&mut [
                // Renders the bars twice, both columns will always be perfectly in sync
                Self::render_bars(app.clone()),
                Self::render_bars(app),
            ])
        })
    }
}


#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    let app = App::new();
    dominator::append_dom(&dominator::body(), App::render(app));

    Ok(())
}
```

examples/animation/.gitignore

```
node_modules
/dist/js
/target
/wasm-pack.log
/yarn-error.log
```

examples/animation/dist/index.html

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>rust-dominator • Animation</title>
	</head>
	<body>
		<script src="js/index.js"></script>
	</body>
</html>
```

安装指南 运行 `yarn install` 以安装项目依赖。

开发构建步骤 执行 `yarn watch` 来构建项目并自动在浏览器中打开。 当你进行更改时，它会自动重新加载。

生产构建步骤 运行 `yarn build` 来构建项目，并将其放置在 `dist` 文件夹中。

### 异步项目

![图片](./Rust框架和库.assets/640-1714731117954-330.webp)

### 社区

他们有一个 `Disxxd` 服务器。如有任何关于 `Dominator` 的问题，请随时在那里提问。

# 模板引擎

## Askama 模板引擎

文章：[Askama 模板引擎：Rust 开发者的新型模板引擎工具【教程】 (qq.com)](https://mp.weixin.qq.com/s/AOpX3l1qsoXJo7XIjWCP2Q)

### Reference

[1] Jinja:https://jinja.palletsprojects.com/

[2] 官方文档:https://djc.github.io/askama/

[3] Armin Ronacher:http://lucumr.pocoo.org/

[4] 问题跟踪器:https://github.com/djc/askama/issues

[5] 推特:https://twitter.com/djco/

[6] Patreon:https://www.patreon.com/dochtman

[7] 最佳性能:https://github.com/djc/template-benchmarks-rs

[8] JetBrains 产品:https://plugins.jetbrains.com/plugin/16591-askama-template-support

[9] 集成:./integrations.md

[10] 模板语法:template_syntax.md

[11] Jinja:http://jinja.pocoo.org/

[12] Twig:http://twig.sensiolabs.org/

[13] Tera:https://github.com/Keats/tera

[14] dependencies 部分:https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html

[15] `Serialize`:https://docs.rs/serde/1./serde/trait.Serialize.html*

[16] `askama_rocket::Template`:https://docs.rs/askama_rocket

[17] 示例:https://github.com/djc/askama/blob/main/askama_rocket/tests/basic.rs

[18] `askama_actix::Template`:https://docs.rs/askama_actix

[19] 示例:https://github.com/djc/askama/blob/main/askama_actix/tests/basic.rs

[20] `askama_axum::Template`:https://docs.rs/askama_axum

[21] 示例:https://github.com/djc/askama/blob/main/askama_axum/tests/basic.rs

[22] `askama_warp::Template`:https://docs.rs/askama_warp

[23] 示例:https://github.com/djc/askama/blob/main/askama_warp/tests/warp.rs

[24] 过滤器文档:filters.md

[25] 配置文件:configuration.md

[26] 这里:#空白符控制

[27] OWASP 转义建议:https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding-for-html-contexts

[28] render in place:https://github.com/djc/askama/blob/main/testing/tests/render_in_place.rs

# 全栈框架

[MoonZoon 教程：一个 Rust 全栈框架，“我们不想因为数百万不必要的技术微决策而浪费时间和金钱。”【耗血整理】 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247494055&idx=1&sn=515465b9c0218464ee32b03404e34d43&chksm=c0e767b0f790eea60a722ab773a3d05e8a1bc2d76e10a72dbbdc7ea0fa622630117d093a16af&cur_album_id=3386270396001402881&scene=190#rd)

[Leptos 框架深度解析：由 Rust 语言打造的全栈 Web 框架，用 Rust 打造高效、声明式的 Web 应用世界 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247493898&idx=1&sn=08f76fc6262825f438a430c6c95794c7&chksm=c0e7671df790ee0bb218ac52c0cc9a38fb0e9ba44080a5de3fd85a474569f9dc515ac5d0801d&cur_album_id=3386270396001402881&scene=190#rd)



# 线程库

## governor - 用于调节数据流动的库

github地址：https://github.com/boinkor-net/governor

这个库是Rust程序中用于速率限制，它使用通用单元速率算法实现。

它的目的是帮助你的程序了解它应该给外部服务带来多大的压力，并且，在某种程度上，允许你的服务调节它们从用户那里承担的压力。在某种程度上，它的功能就像标志性的蒸汽调速器。

该crate中的速率限制算法使用通用单元速率算法(GCRA)实现。GCRA在功能上等同于漏桶算法，但与大多数漏桶算法实现相比有一些优势：

- 不需要后台“滴”过程来保持对桶的维护
- 每当有请求进入时，它都会以纳秒级持续更新状态。
- 它将其状态保存在单个AtomicU64整数中

这里使用的速率限制状态不占用太多内存(只有64位!)，并且通过compare-and-swap操作在线程安全的情况下更新。与使用互斥锁的ratelimit_meter实现相比，它在多线程中使用时平均快10倍。

## Smol：Rust语言中的轻量级异步运行时

以其小巧、快速和现代化的特点，在Rust异步运行时领域独树一帜。本文将深入探讨Smol的设计理念、核心功能以及如何在Rust项目中使用Smol来执行异步任务。

### Smol的设计哲学

在异步编程的世界中，效率和易用性是衡量一个运行时好坏的关键标准。Smol正是基于这样的理念诞生的。它旨在提供一个既小巧又快速的异步runtime，通过尽量减少API的数量和复杂度，让开发者能够快速上手并有效地执行异步代码。

### Smol核心功能

Smol基于Rust的`async-std`和`tokio`构建，提供了一套简洁而强大的API来处理异步任务。

1. **创建异步函数**：Smol允许开发者以最少的代码行数创建异步函数。
2. **等待Future**：通过Smol，我们可以轻松等待一个future的完成。
3. **创建定时器**：提供了创建定时器的简洁API，方便在异步任务中执行定时操作。
4. **高效的调度**：得益于其优越的调度能力，Smol能够高效地管理和执行异步任务。

### 在Rust中使用Smol

要在Rust项目中使用Smol，首先需要将它添加到项目的依赖中。在Cargo.toml文件中添加：

```
[dependencies]
smol = "版本号"
```

请在`版本号`处填写最新或适合项目需要的smol版本。

#### 创建一个简单的异步函数

这里，我们展示如何使用Smol创建一个简单的异步函数，并等待它完成。

```rust
// 引入smol包
use smol::Timer;
use std::time::Duration;

// 一个简单的异步函数，将在指定时间后完成
async fn delay(duration: Duration) {
    Timer::after(duration).await;
}

fn main() {
    // 使用smol的block_on来运行异步代码块
    smol::block_on(async {
        // 调用delay函数，并等待2秒
        delay(Duration::from_secs(2)).await;
        println!("2秒后，延时完成！");
    });
}
```

### Smol的扩展和实际应用

由于其轻量和高效的特性，Smol不仅适用于小型项目，也能够在资源有限的环境中发挥巨大作用。例如，它可以用于构建高性能的网络服务器、微服务以及IoT设备的异步应用等。

### 结语

Smol以其优雅和简洁的设计，在Rust的异步编程生态中占据了一席之地。它通过提供最小而丰富的API，帮助开发者轻松地编写高效的异步代码。无论是初学者还是有经验的Rust程序员，Smol都是实现异步编程的优秀选择。随着Rust生态的不断壮大，Smol及其背后的思想无疑会继续激励和影响未来的异步运行时设计。

# GUI

## Slint

[国产低成本单片机中运行Rust GUI (qq.com)](https://mp.weixin.qq.com/s/IABJvefYj43NjWXZL87Nkg)

Slint 是一个声明性 GUI 工具包，用于为 Rust、C++ 或 JavaScript 应用程序构建本机用户界面。

### Slint 资料

- 指南：https://slint-ui.com/releases/1.0.2/docs/slint/index.html
- 文档：https://slint-ui.com/releases/1.0.2/docs/rust/slint
- 仓库：https://github.com/slint-ui/slint
- 模板：https://github.com/slint-ui/slint-rust-template
- 示例：https://github.com/slint-ui/slint/tree/master/examples
- 教程：https://slint-ui.com/releases/1.0.2/docs/tutorial/rust
- [Rust 开发 探索 Slint UI 1.5 安卓 (qq.com)](https://mp.weixin.qq.com/s?__biz=Mzg2NTgxNzg3OQ==&mid=2247484143&idx=1&sn=903c65961459daee860bffd5c99602e5&chksm=cfce0c61f8c94b764529048bb02ccd66bcf26c9fdc74c7b63599f380c5a52412d641bf5918c4&scene=132&exptype=timeline_recommend_article_extendread_samebiz&show_related_article=1&subscene=0&scene=132#wechat_redirect)

[Rust UI 框架：用 Rust 和 Slint 制作一个简易计算器（Live coding） (qq.com)](https://mp.weixin.qq.com/s/ZmnG4Cu4R5C45vzcv9catQ)

[Slint 1.0：下一代原生 GUI 工具包成熟 — Slint 博客](https://slint.dev/blog/announcing-slint-1.0)

## Dioxus：适用于 Web、桌面、移动设备等的全栈 GUI 库。

- GitHub：https://github.com/dioxuslabs/dioxus
- 官网：https://dioxuslabs.com/

### 什么是 Dioxus ？

Dioxus 是一个使用 Rust 编程语言构建的跨平台用户界面（UI）框架。它受到流行的 React 库的启发，专注于为开发者提供一种优雅、高效且符合人体工程学的编程体验。Dioxus 旨在允许开发者使用单一的代码库来创建运行在桌面、Web、移动设备等多个平台上的应用程序，非常好用。

### Dioxus 框架的独特的特性

- **跨平台兼容性**：Dioxus 支持多种平台，包括但不限于桌面、Web、移动设备等。
- **基于 Rust 的性能和安全性**：利用 Rust 语言的优势，Dioxus 提供了高性能和内存安全的 UI 开发体验。
- **React 风格的 API 设计**：Dioxus 的作者最初是按照 React 设计的这个框架，内部实现和 API 风格都是严格按照 React Style 制作的，尽管后续有所变动以更好地适应 Rust 语言的特性。
- **声明式 UI 编程**：作为一个声明式框架，Dioxus 允许开发者通过简单声明来设计 UI，而无需手动创建和管理元素。
- **异步编程支持**：Dioxus 提供了 UseFuture Hooks，使得开发者可以轻松处理异步操作，如网络请求等。
- **路由器支持**：Dioxus 内置了路由器支持，允许开发者在应用程序中轻松实现不同页面的导航和状态管理。

### 支持的平台

目前已经支持的平台也是非常丰富了，包括网站项目、桌面应用、移动端应用及终端程序等，更多详细可以直接到官网查阅。

### 选择 Dioxus 的好处是什么？

- **开发者友好的工具支持**：Dioxus 提供了自动格式化的 RSX 代码，这种格式是 Dioxus 的专有标记语言，用于声明式地编写 UI 代码。此外，Dioxus 还有 VSCode 插件，进一步提高了开发效率和体验。
- **热加载和跨平台支持**：Dioxus 支持热加载功能，这意味着开发者可以在不重启应用的情况下实时查看代码更改的效果。这一特性不仅适用于桌面程序，也适用于网页程序，极大地提升了开发流程的便捷性。
- **全面且详尽的文档**：Dioxus 非常重视文档的完善，提供了全面的开发指南和对所有 HTML 元素的详尽文档支持，使得开发者能够快速上手并有效解决问题。
- **可扩展性和灵活性**：Dioxus 的设计允许开发者轻松构建新的渲染器，通过实现一个简单的优化堆栈机，可以扩展框架的功能。此外，开发者还可以构建并分享自己的组件代码，增加了框架的可定制性。

## Druid

- GitHub：https://github.com/linebender/druid
- https://linebender.org/druid/
- https://github.com/linebender/druid/blob/master/CHANGELOG.md
- https://raphlinus.github.io/rust/gui/2022/05/07/ui-architecture.html

别用了，原因：[Rust 原生 UI 框架 Druid 被喊终止了，并宣布 xilem 才是未来！ (qq.com)](https://mp.weixin.qq.com/s/JOzdbfcKAOqcVAWnWSYKdA)

### Druid 框架概述

Druid 采用类似于 React 的响应式模型，使得数据和 UI 之间可以保持同步更新。但是 Druid 还拥有自己独特的特性，包括弹性盒子布局（flexbox）的样式设计、数据绑定及事件处理机制。Druid 力求提供平台原生的外观和感觉，它通过使用底层平台自己的控件实现这一点。当前的 Druid 支持范围包括 Windows、macOS、Linux 以及 Redox 等多个平台。

### Druid 的核心特性

Druid 的核心特性主要体现在：

1. **平台原生外观和感觉**：使用平台自己的控件，为不同的操作系统平台提供一致的用户体验。
2. **响应式数据模型**：使用 Rust 的类型系统来简化数据与 UI 间的同步。
3. **灵活的布局系统**：基于 flexbox 模型，可以轻松地设计响应式布局。
4. **数据绑定**：允许绑定应用程序中的数据，使得数据更新时能够自动反映到界面上。
5. **事件处理**：提供强大的事件处理系统，能够灵活应对用户操作和内部事件。

### 安装 Druid

安装 Druid 前，需要保证 Rust 开发环境已经被正确安装。Druid 可以通过 Rust 的包管理工具 Cargo 轻松安装：

```bash
[dependencies]
druid = "0.7.0"
```

向项目的`Cargo.toml`文件中添加上述依赖并保存后，运行`cargo build`命令来安装 Druid 及其依赖库。

### 创建一个简单的 Druid 应用

#### Step 1: 主要数据结构定义

在创建 GUI 应用时，首先需要定义应用的主要数据结构，这个结构将会作为数据绑定及事件处理的基础。

```rust
struct AppState {
    value: u32,
}

impl Default for AppState {
    fn default() -> Self {
        AppState { value: 0 }
    }
}
```

#### Step 2: 构建 UI 界面

接下来，定义一个函数来构建 GUI 的布局和控件：

```rust
fn build_ui() -> impl Widget<AppState> {
    // 使用Flex构建一个简单的垂直布局
    Flex::column()
        .with_child(Button::new("Increment").on_click(|_ctx, data: &mut AppState, _env| {
            data.value += 1;
        }))
        .with_child(Label::new(|data: &AppState, _env: &Env| format!("Value: {}", data.value)))
}
```

在这个例子中，我们构建了一个包含按钮和标签的简单垂直布局。按钮被绑定了一个点击事件，每次点击都会导致`AppState`中的`value`增加 1。

#### Step 3: 运行应用

最后，我们在 main 函数中使用`AppLauncher`来启动并运行应用：

```rust
fn main() {
    AppLauncher::with_window(WindowDesc::new(build_ui()))
        .use_simple_logger()
        .launch(AppState::default())
        .expect("Failed to launch application");
}
```

以上代码展示了一个简单的 Druid 应用的创建方式。完整的应用将包含更多的布局、控件以及事件处理。

### 扩展功能：自定义控件与主题

Druid 不仅限于内置控件，开发者也可以创建自定义控件以满足特定需求。此外，通过修改控件的`Env`环境，还可以对控件的主题进行自定义，以匹配应用程序的风格需求。

### 结论

Druid 框架是 Rust 语言中用于创建 GUI 应用的有力工具。它的设计理念、灵活的布局及事件处理机制为开发富有响应性和原生体验的应用程序提供了坚实的基础。对于那些探索 Rust 并愿意尝试新方法的 GUI 开发者来说，Druid 无疑是一个值得关注的选择。

## GTK4-RS

开源地址：[gtk-rs/gtk4-rs：GTK 4 的 Rust 绑定 (github.com)](https://github.com/gtk-rs/gtk4-rs)

## Frui：开发者友好的 GUI 框架

### 前言

Frui 是一个对开发者相当友好的 UI 框架，它使得开发者构建用户界面变得简单，并且是一个真正意义上受 Flutter 启发、用纯 Rust 写的 UI 框架。如果你了解 Flutter，或者 Vue/React 的话，学习这些东西将会变得很容易，但是如果你并不了解，还是建议你去学习基础内容，并且推荐一本书《Flutter 实战·第二版》，读者可以在 Github 上自行搜索。本期内容还是老规矩，写个 Counter 的 Demo 来看看。

> 由于 Frui 现在刚发行第一版，所以要求不是很高，本期内容主要体验其编码方式。

### 一、新建项目

#### 1. 创建项目

这里依旧还是我们的老规矩，创建一个 Counter 的 Demo 项目。

```
cargo new gui_frui_001
```

#### 2. 导入 idea

使用 idea 打开刚才创建的项目

![image](./Rust框架和库.assets/urc4jn6zkhw3i_cafc4c4b05104dbeb9c37579f724cc96.png)

#### 3. 引入依赖

在`Cargo.toml`中导入依赖

```
frui = "0.0.1"
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_0c0ec569f18b484d8715279401ec3109.png)

#### 4. 执行案例代码

将以下代码复制到`main.rs`

```rust
#![feature(min_specialization)]
#![feature(type_alias_impl_trait)]
use frui::prelude::*;
#[derive(ViewWidget)]
struct App;
impl ViewWidget for App {
    fn build<'w>(&'w self, _: BuildContext<'w, Self>) -> Self::Widget<'w> {
        Center::child(Text::new("Hello, World!"))
    }
}
fn main() {
    run_app(App);
}
```

然后 idea 就会报错

![image](./Rust框架和库.assets/urc4jn6zkhw3i_c8773e15111b4fbfaae5542c9bba415b.png)

因为我用的是稳定版的 Rust，因此一些特性是没有的，所以要安装 nightly 版本的 Rust，直接执行以下代码

```
rustup toolchain install nightly
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_9fc03509a1f64e94864b2c7155def447.png)然后列出当前 Rust 的版本

```
rustup toolchain list
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_10f29acf5c4d4b9fa420e2fe23b2d92c.png)现在激活`nightly`版本的编译器

```
rustup default nightly
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_3a0c269acdac4968966d9fe080e49584.png)接下来去项目目录覆盖配置文件

```
rustup override set nightly
```

![image](./Rust框架和库.assets/urc4jn6zkhw3i_5867227816b344eaa63ac5d583050c70.png)此时 idea 还会提示错误的，这是因为 nightly 没有源码，插件默认用的 stable 的源码，所以检查语法出错了，不必管他，直接运行

![image](./Rust框架和库.assets/urc4jn6zkhw3i_79cb6b1223ee4df7886b78403b5b0552.png)

如果你也运行了下面的窗口，说明你已经配置成功了。![image](./Rust框架和库.assets/urc4jn6zkhw3i_f4ee5aae601b48c9bc6e58241a296303.png)

### 二、实现计数器 Demo

#### 1.导入资源

在实现 Counter Demo 之前，我们需要导入框架所需要的资源，我发现其框架并未打包 UI 相关的资源，要是和 Flutter 那样可以直接用 Material 的 UI 就太好了，我觉得以后可能会出类似的。

首先需要从 Github 上的`frui-main\examples`复制出`misc`文件夹到我们项目的目录来，

![image](./Rust框架和库.assets/urc4jn6zkhw3i_d4f5d43561924a4b899122898d7ad5ab.png)

![image](./Rust框架和库.assets/urc4jn6zkhw3i_ababcddf24b547c1882d72ca9c6a4ecb.png)可以看到这个版本目前只提供了按钮和开关，还有 State，到现在为止，框架相关的内容都已经导入完毕。

#### 2.编写窗口代码

Frui 的代码和 Flutter 是高度相似的，从编写窗口代码这里就可以看出来。首先要做的就是先定义窗口 State，这里我们定义了 CrabCounter，并且实现 WidgetState，并且给一个整数型的 State，特别重要的是一定要写 create_state 方法，初始化 State。

```
#[derive(ViewWidget)]
struct CrabCounter;
impl WidgetState for CrabCounter {
    type State = isize;
    fn create_state(&self) -> Self::State { 0 }
}
```

接下来就是要编写窗口，实现窗口逻辑。在这里给 Crab Counter 实现了 ViewWidget 特质，其必须要实现一个 build 方法，返回构建的窗口，其代码如下

```rust
impl ViewWidget for CrabCounter {
    fn build<'w>(&'w self, ctx: BuildContext<'w, Self>) -> Self::Widget<'w> {
        Column::builder()
            .space_between(60.0)
            .main_axis_size(MainAxisSize::Max)
            .cross_axis_size(CrossAxisSize::Max)
            .main_axis_alignment(MainAxisAlignment::Center)
            .cross_axis_alignment(CrossAxisAlignment::Center)
            .children((
                Text::new(format!("{} 🦀", *ctx.state()))
                    .size(100.0)
                    .weight(FontWeight::BOLD),
                Row::builder()
                    .space_between(10.0)
                    .children((
                        Button {
                            label: Text::new("+").size(30.),
                            on_click: || *ctx.state_mut() += 1,
                        },
                        Button {
                            label: Text::new("-").size(30.),
                            on_click: || *ctx.state_mut() -= 1,
                        },
                    )),
            ))
    }
}
```

以上代码的布局是这个样子的

![image](./Rust框架和库.assets/urc4jn6zkhw3i_3ff8e6cd1f8241ee92dc95ca5f4e9708.png)要注意的是，Button 至少需要传入两个参数，一个是按钮的标签——Text，当然也可以是 Image，目前并不清楚它是否有这个组件了，所以还是按官方的来，直接用 Text；一个是点击的回调函数，

#### 3. 运行效果

此时我们运行 Counter 程序，如果运行没有错误，那应该是下面这个样子的

![image](./Rust框架和库.assets/urc4jn6zkhw3i_e9c9176020544a9895f7110ca6efb42e.png)上面的 Text 部分，左边是计次的数字，右边是 Rust 的吉祥物 🦀，下面是两个按钮，一个+，一个-

Rust 的吉祥物是 🦀，而非图中白色的样子，官方给出的运行结果应该是下面这个样子的

![image](./Rust框架和库.assets/urc4jn6zkhw3i_e5a546a4ea374156a64520ad87225e04.png)Rust 是支持这种文本的，但是不知道为什么表现出来和官方给的案例是不一样的。

### 总结

本期学习了另一个由纯 Rust 写的 UI 框架——Frui，这是一个对开发者相当友好的框架，借鉴于 Flutter，可惜是刚起步的框架，相信其在以后的发展肯定会变得更好。

Frui 框架的路子是学习 Flutter 的，其代码也是高度相似，代码也容易理解，确实做到了对开发人员友好，这是非常值得肯定的，学习过 Flutter 的人甚至可以直接迁移过来，不需要学习太多的内容，降低了学习成本。但是该项目还处在刚开始阶段，我觉得可以关注一手，该框架如果做完，可能是 Rust 的主流框架。此外，这个 Counter 还不支持点关闭按钮来关闭窗口，我觉得这可能是因为没有实现关闭按钮的代码导致的，后续随着该项目的发展，会补齐这部分内容。

比较起上期的 UI 框架——Iced，其架构思想与 Flutter 也是高度相似，与 Frui 不同的是，Iced 主要借助于一个 Sandbox，但是其编程手法是对开发者比较有好的。在我的体验中，主要遇到的是文档版本错乱，不支持中文，所以导致体验很差。我在别的博主下面看到 Iced 是支持中文的，但是我加中文就乱码，目前还不清楚是什么问题。

#### 完整代码

counter 的完整代码

```rust
use frui::prelude::*;
use rand::Rng;
/// This widget will display a different number every time its state is lost.
#[derive(ViewWidget)]
pub struct RandomState;
impl WidgetState for RandomState {
    type State = usize;
    fn create_state<'a>(&'a self) -> Self::State {
        rand::thread_rng().gen()
    }
}
impl ViewWidget for RandomState {
    fn build<'w>(&'w self, ctx: BuildContext<'w, Self>) -> Self::Widget<'w> {
        Text::new(ctx.state().to_string())
    }
}
/// This widget will display a different number every time it gets rebuilt.
#[derive(ViewWidget)]
pub struct ChangesOnRebuild;
impl ViewWidget for ChangesOnRebuild {
    fn build<'w>(&'w self, _: BuildContext<'w, Self>) -> Self::Widget<'w> {
        Text::new(rand::thread_rng().gen::<usize>().to_string())
    }
}
```

此处附上 Flutter 的 Counter 代码，读者可观察其异同，至于 Flutter 做开发的好处，只有当读者真正去用的时候才会体会到了。

```rust
class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              '点击按钮的次数:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## iced：rust 原生跨平台 GUI 框架

GitHub：https://github.com/iced-rs/iced

官网：https://iced.rs/

学习：

[【一起学 Rust | 框架篇 | iced 框架】rust 原生跨平台 GUI 框架——iced*iced rust*广龙宇的博客-CSDN 博客](https://blog.csdn.net/weixin_47754149/article/details/127271805)

[冰（Iced）教程 —— 一款面向 Rust 的跨平台 GUI 库 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzkwNjYxNTY3Mg==&mid=2247493651&idx=1&sn=7e42f46ab501898ad72eec3e2e024314&chksm=c0e76604f790ef123329fee9f37473b66506d0c3f3b1e69f84e77d2b5de91928814db9037df5&cur_album_id=3386270396001402881&scene=190#rd)

### 介绍

- 由于其多功能性，该 iced 库是最受欢迎的 Rust 库之一。尽管该库已在许多项目中使用，但它非常不稳定并且发展迅速。您可以求助于使用较旧的版本，因为主分支不断变化，并且在生产中使用可能会很昂贵。

- iced 是一个与渲染器无关的、包含电池的、以数据为中心的跨平台 Rust 库，用于构建 GUI 和前端，其灵感来自 Elm 架构。该 iced 库提供了一个易于使用的反应式编程模型，具有对异步操作和自定义小部件的一流支持。

- 使用该库构建的 GUI 应用程序 iced 可以在具有响应式布局的 Windows、macOS、Linux 和 Web（使用 DOM）上运行。按照惯例，iced 将应用程序分为四个概念：

- State：用于应用程序的状态

- 消息：用于消息和事件

- 视图逻辑：用于将状态显示为用户交互的小部件

- 更新逻辑：用于更新状态和与消息交互

- 您可以轻松地开始使用 Iced 库用于前端 Web 应用程序。该过程类似于构建 GUI 应用程序，您可以查看 iced 文档以了解有关该软件包的更多信息。

### 前言

学习一门编程语言，绝对不可以抛弃该编程语言的应用。在学习其他编程语言时，例如 C++，只学习语法，数据结构与算法是相当枯燥的，这就很考虑一个人的毅力了。此时最好的办法就是让学习变得有趣起来，在我学习的时候，我的兴趣之源就是想要做出 Windows 上华丽的窗口，来提高自己的学习和工作效率，为此我学习过 QT，MFC，这些框架都挺好，确实实现了我想要的效果，但是开发较为繁琐，后来我又学习 qt python，确实开发变得很方便了，但是新的问题又出现了，就是打包不方便，为此，我在这个路上经历了曲折的探索。

此时学习 Rust 也是一样的，要想提升自己的学习力，就要找到其中感兴趣的点，对于 Rust，我很想利用 Rust 的优势来实现 Windows 的窗口，也找过相关的解决方案，比如 Rust 的 qt，但是它比较繁琐，在后面的文章会介绍到；还有使用 Rust 作为后端的跨平台 ui 框架 Tauri UI，他的思路更像是 Electron 这种的，前端使用 html+css 布局，然后后端使用 Rust，再打包好 app，其使用方式在本系列文章后面也会介绍；还有就是本期文章要介绍的 Iced，它更像是 Rust 的 flutter，基于 Elm 实现的跨平台 GUI 框架。

Iced 是一个我较为感兴趣的 GUI 框架，其开发方式对我我这种学习了 Vue 的人来说相当友好，且配和 Rust 的特点，已经是很舒服了。此外它颜值也挺高，这就是我学习它的理由。

![image](./Rust框架和库.assets/urc4jn6zkhw3i_eb9afa313e524c0ab0562260a82cba37.png)

### Iced 的特点

- 简单易用，有一系列内置 API
- 类型安全，有一套交互编程模型
- 跨平台（支持 Windows，Mac，Linux 和 Web）
- 响应式布局
- 基于 widgets
- 支持自定义 widgets
- 还有其他特性，建议去 Github 查看

### 一、搭建项目

#### 1. 正常创建项目

首先创建一个项目

```bash
cargo new gui_iced_001
```

#### 2. 导入 idea

使用 idea 导入项目

![image](./Rust框架和库.assets/urc4jn6zkhw3i_1b6fdeeb2f6046e7bb0ec10651954c79.png)

#### 3. 引入依赖

打开 Cargo.toml，然后在依赖出写入

```
iced = "0.4"
```

> `注意：`本人用的是 2021 以后的版本，如果你不是，建议去官网学习对应的处理策略，这里不解释。

此时文件应该是这样的

![image](./Rust框架和库.assets/urc4jn6zkhw3i_a8407846d1134ceab1577389028e2f95.png)到此为止，项目就搭建完毕，接下来就是写我们的 demo 了。

### 二、编写 demo

在 Github 上是有很多 Iced 的例子的，其中最经典，也是官网唯一写上去的例子就是 Counter 计数器，因从这里就实现 Counter 的 demo。虽然说这个很简单，但是其中坑很多，好不容易才写出这个 demo，就说两个比较坑的地方把，这个框架行和列不分，例子中代码太过老旧，都是我一步一步探索出来的。

> 以下内容与官网会有较大的差别，官网的运行不了，请注意甄别。

#### 1. 编写 State

首先为程序编写一个 State，这个核心概念在学习 Vue 和 React 或者 Flutter 的时候必然会用到，这里暂时不做解释，直接给出代码

```rust
struct Counter {
    value: i32,
    // The local state of the two buttons
    increment_button: button::State,
    decrement_button: button::State,
}
```

这里是定义了一个结构体`Counter `，这个结构体就当作我们窗口的 State，其成员`value`代表计数器计数的数值，`increment_button`和`decrement_button`是两个按钮+和-的 state。

#### 2. 定义消息类型

接下来就是定义程序中用到的消息类型，程序中的交互是通过信号来进行的，这点 Qt 就做的很好，如果你学习过 qt 或者前端的 Vue 等框架，这个就很好理解了。

```rust
#[derive(Debug, Clone, Copy)]
enum Message {
    IncrementPressed,
    DecrementPressed,
}
```

这里定义了两个消息，一个是`IncrementPressed`，代表+按钮被点击，一个是`DecrementPressed`，代表-按钮被点击。

#### 3. 编写视图逻辑

这里官方给出的例子是直接为 Counter 实现 view 和 update，但是经过我的探索，是不可以直接使用的。

Iced 程序运行，需要实现 Application 或者 Sandbox，这俩是什么意思现在先不管，我们这里使用的是 Sandbox，因为其足够的简单。

一个空的 Sandbox 应该是这样的

```rust
impl Sandbox for Counter {
    type Message = ();
    fn new() -> Self {
        todo!()
    }
    fn title(&self) -> String {
        todo!()
    }
    fn update(&mut self, message: Self::Message) {
        todo!()
    }
    fn view(&mut self) -> Element<'_, Self::Message> {
        todo!()
    }
}
```

这里从上到下开始介绍

##### Message

代表的是当前窗口的所有消息，在使用时，需要传入定义好的消息枚举，就比如说这里时用法应该是这样的，

```rust
#[derive(Debug, Clone, Copy)]
enum Message {
    IncrementPressed,
    DecrementPressed,
}
// ....
type Message = Message;
```

##### new

这里和通常编写代码一样，需要返回自身实例，就不做过多解释了

```rust
fn new() -> Self {
        Self { value: 0, increment_button: Default::default(), decrement_button: Default::default() }
    }
```

##### title

见名知义，这里就是要返回当前窗口的名字

```rust
fn title(&self) -> String {
        String::from("Counter - Iced")
    }
```

##### update

这里时处理窗口的消息逻辑，本窗口处理两个消息，一个是`IncrementPressed`，代表+按钮被点击，如果被点击了，State 的 Value 就+1，一个是`DecrementPressed`，代表-按钮被点击，如果被点击了，State 的 Value 就-1。这里处理相当简单，并未考虑边界值。

```rust
fn update(&mut self, message: Message) {
        match message {
            Message::IncrementPressed => {
                self.value += 1;
            }
            Message::DecrementPressed => {
                self.value -= 1;
            }
        }
    }
```

##### view

这里要返回窗口的布局，实际上也就是要构建这个窗口，这里 Counter 的窗口代码如下

```rust
fn view(&mut self) -> Element<Message> {
        Column::new().push(
            Text::new("Counter")
        ).push(
            Row::new().push(
                Button::new(&mut self.increment_button, Text::new("+"))
                    .on_press(Message::IncrementPressed).width(Length::Fill),
            ).push(
                Text::new(self.value.to_string()).size(22),
            ).push(
                Button::new(&mut self.decrement_button, Text::new("-"))
                    .on_press(Message::DecrementPressed).width(Length::Fill),
            )
        )
        .align_items(Alignment::Center).into()
    }
```

可以看到，这里使用的时链式调用，一层套一层，其代码和 flutter 特别的相似，如果你学习过 flutter，那必然非常熟悉，这里我画一个图，来解释这段代码，首先由 Column 将窗口分为两行，其布局和红框是一致的，上下两行

> `注意：`这个框架行和列傻傻分不清，Column 是列的意思，在这个框架里面是行的意思。

![image](./Rust框架和库.assets/urc4jn6zkhw3i_760b571e6ad34cbdbe97d1f43061fff4.png)第一行，只添加了个 Text 组件，并且给初始值`Counter`，这里原本是打算使用中文`计数器`的，奈何这玩意儿不支持中文

```rust
Column::new().push(
            Text::new("Counter")
        )
```

第二行，其中添加了个 Row 组件(`列`组件)，并且加入了三个组件，分别是两个 Button，就是+和-按钮，一个 Text 组件，用来显示当前 Value

```rust
//...
.push(
            Row::new().push(
                Button::new(&mut self.increment_button, Text::new("+"))
                    .on_press(Message::IncrementPressed).width(Length::Fill),
            ).push(
                Text::new(self.value.to_string()).size(22),
            ).push(
                Button::new(&mut self.decrement_button, Text::new("-"))
                    .on_press(Message::DecrementPressed).width(Length::Fill),
            )
        )
```

所以此时的窗口布局应该是这样的

![image](./Rust框架和库.assets/urc4jn6zkhw3i_52f99c63c73743eca9949b4be11b6521.png)

#### 4. 编写 main 函数

写好的窗口是无法自动运行的，需要启动才可以，通常在 main 函数中启动窗口，在这里会变得简单起来，这里直接贴上代码

```rust
fn main() -> iced::Result {
    Counter::run(Settings::default())
}
```

启动窗口只要调用窗口的 run 方法就好了，其中传入 Settings，用来设置窗口的初始状态，这里直接用默认状态了，如果后续还要进入深入，这里会专门出一期来进行讲解。

### 三、运行效果

此时我们运行当前写好的 demo

> `注意：`完整代码放在文章末尾，如果你懒得敲代码，可以直接复制。

![image](./Rust框架和库.assets/urc4jn6zkhw3i_1c7d3e1529b64e05a455140af4bee5e0.gif)

### 总结

本期为大家介绍了 Rust 的 GUI 框架 Iced，经过我的探索，终于是将 Counter Demo 搭建起来。经过我的体验，我认为这个框架其实并没有我想象中的那么好，它确实是 Rust 的原生 GUI 框架，也确实有他说的那些特点，确实有颜值，但是它有个最大的问题就是不支持中文，而且行和列傻傻分不清，官方文档太过老旧，所以搭建 demo 流程就变得很复杂，对开发不是很友好，唯一值得一说的就是这个代码，确实是舒服了不少，这是其他 UI 框架所无法比的上的，这点值得赞同，希望以后这个框架或者后继者能解决这些问题，Rust 的 UI 才能强大起来。

### 完整代码

```rust
use iced::{Alignment, button, Button, Column, Element, Length, Row, Sandbox, Settings, Text};
fn main() -> iced::Result {
    Counter::run(Settings::default())
}
struct Counter {
    value: i32,
    // The local state of the two buttons
    increment_button: button::State,
    decrement_button: button::State,
}
#[derive(Debug, Clone, Copy)]
enum Message {
    IncrementPressed,
    DecrementPressed,
}
impl Sandbox for Counter {
    type Message = Message;
    fn new() -> Self {
        Self { value: 0, increment_button: Default::default(), decrement_button: Default::default() }
    }
    fn title(&self) -> String {
        String::from("Counter - Iced")
    }
    fn update(&mut self, message: Message) {
        match message {
            Message::IncrementPressed => {
                self.value += 1;
            }
            Message::DecrementPressed => {
                self.value -= 1;
            }
        }
    }
    fn view(&mut self) -> Element<Message> {
        Column::new().push(
            Text::new("Counter")
        ).push(
            Row::new().push(
                Button::new(&mut self.increment_button, Text::new("+"))
                    .on_press(Message::IncrementPressed).width(Length::Fill),
            ).push(
                Text::new(self.value.to_string()).size(22),
            ).push(
                Button::new(&mut self.decrement_button, Text::new("-"))
                    .on_press(Message::DecrementPressed).width(Length::Fill),
            )
        )
        .align_items(Alignment::Center).into()
    }
}
```

在 Rust 社区中，Iced 是值得关注的跨平台 GUI (图形用户界面) 库之一。由 `iced-rs` 团队开发，Iced 的设计灵感来源于 Elm 语言，它以简洁性和类型安全性为特色，旨在提供一个简单易用且功能丰富的 GUI 开发体验。本文将深入探讨 Iced，并提供详尽的示例和教学，希望帮助读者更好地理解和使用这个库。

### Iced 的核心特性

Iced 专注于以下几个核心特性：

- **简洁易用的 API**：提供了一套结构清晰的 API，便于快速上手和开发。
- **类型安全的反应式编程模型**：利用 Rust 强大的类型系统，确保了代码的安全性。
- **跨平台支持**：同时支持 Windows, macOS, Linux, 以及 Web 平台。
- **响应式布局**：易于创建灵活且自适应的用户界面。
- **内置控件**：包含丰富的预制控件供开发者使用。
- **自定义控件支持**：允许开发者根据需求创建定制的控件。
- **调试叠加层**：内置性能度量工具，方便开发者进行性能调试。

### 使用 Iced 构建你的第一个 Rust 应用

要开始使用 Iced 构建 GUI 应用，你需要首先确保 Rust 的开发环境已经搭建好。接下来，我们将逐步构建一个简单的应用来展示 Iced 的用法。

#### 第一步：创建项目并添加依赖

打开终端，使用以下命令创建一个新的 Rust 项目：

```bash
cargo new my_iced_app
cd my_iced_app
```

然后，打开 `Cargo.toml` 文件，添加 Iced 库作为依赖：

```rust
[dependencies]
iced = "0.4"
```

#### 第二步：编辑 main.rs

接下来，我们将编写应用的主逻辑。编辑 `src/main.rs` 文件，填入以下代码：

```rust
use iced::{Application, Button, Column, Command, Element, Sandbox, Settings, Text};

pub fn main() -> iced::Result {
    Counter::run(Settings::default())
}

struct Counter {
    value: i32,
    increment_button: Button,
    decrement_button: Button,
}

#[derive(Debug, Clone, Copy)]
enum Message {
    IncrementPressed,
    DecrementPressed,
}

impl Sandbox for Counter {
    type Message = Message;

    fn new() -> Self {
        Counter {
            value: 0,
            increment_button: Button::new(),
            decrement_button: Button::new(),
        }
    }

    fn title(&self) -> String {
        String::from("Iced Counter Example")
    }

    fn update(&mut self, message: Message) -> Command<Message> {
        match message {
            Message::IncrementPressed => self.value += 1,
            Message::DecrementPressed => self.value -= 1,
        }
        Command::none()
    }

    fn view(&mut self) -> Element<Message> {
        Column::new()
            .push(
                Button::new(&mut self.increment_button, Text::new("Increment"))
                    .on_press(Message::IncrementPressed),
            )
            .push(
                Button::new(&mut self.decrement_button, Text::new("Decrement"))
                    .on_press(Message::DecrementPressed),
            )
            .push(Text::new(self.value.to_string()))
            .into()
    }
}
```

#### 第三步：运行你的第一个 Iced 应用

保存 `main.rs` 文件后，运行以下命令，编译并启动 GUI 应用：

```bash
cargo run
```

应用启动后，你会看到一个简单的计数器界面，界面上有“Increment”和“Decrement”两个按钮用于增减计数值。

### 扩展：创建响应式布局和自定义控件

Iced 不仅限于创建基础的控件和布局，你还可以利用响应式布局创建复杂且自适应的界面。此外，自定义控件可以让你的应用更加吸引人，下面我们来看一个自定义控件的例子：

```rust
use iced::{button, Button, Column, Command, Element, Sandbox, Settings, Text};

// 定义你的自定义控件
struct MyCustomWidget {
    // 控件内部的状态和属性
}

// 实现自定义控件的逻辑
impl MyCustomWidget {
    // 创建控件的新实例
    fn new() -> Self {
        // 初始化控件状态
    }

    // 实现控件的渲染逻辑
    fn view(&mut self) -> Element<Message> {
        // 返回 Element 类型的 GUI 表示
    }
}

// 后续类似于 Counter 示例的结构和实现逻辑
```

在这段代码中，我们定义了一个 `MyCustomWidget` 控件，并为它实现了基础的构建和渲染逻辑。这就是 Iced 灵活性的一种体现，允许你根据具体的应用需求进行定制。

### 结语

通过本文的介绍，你应该对 Iced 有了基本的了解。Iced 以其简洁的 API、强类型设计和跨平台特性，为 Rust GUI 开发提供了一个非常有吸引力的选项。你还可以在它的 GitHub 页面上找到更多的信息、文档和示例，以及如何为这个开源项目做出贡献。

## Xilem

GitHub：https://github.com/linebender/xilem

## relm

relm

- relm 是一个基于 GTK 的异步 GUI 库，最初用 Rust 编写。它受到 Elm 架构的启发，旨在简化 GTK 库的使用并提供类似 Elm 的体验。

- 与 GTK 库一样，您可以使用 relm 构建跨平台 GUI。

- [antoyo/relm: Idiomatic, GTK+-based, GUI library, inspired by Elm, written in Rust (github.com)](https://github.com/antoyo/relm)

- 您需要有使用 GTK 库的经验才能使用 relm 并充分利用该库。

- 要使用 relm，您需要在文件中将 gtk 和 relm 库添加到项目的依赖项中 Cargo.toml。您还需要 gtk 安装该库。

- [dependencies]gtk = "0.9.0"relm = "0.20.0"relm-derive = "0.20.0"

- 您还必须将 gtk 板条箱与 relm 板条箱一起导入。

- use relm::{connect, Relm, Update, Widget};use gtk::prelude::\*;use gtk::{Window, Inhibit,a WindowType};use relm_derive::Msg;

- Rust 社区感谢 relm 提供的其他 Rust 库（如 Yew、Seed 和 iced）提供的类似 Elm 的体验。该 relm 库处于 beta 阶段，尚未经过适当的测试，并且正在迅速变化。话虽如此，您可能还不想在生产中使用它。

使用`relm`构建跨平台的 GUI 应用。

在现代软件开发过程中，用户界面（GUI）的设计与实现是不可或缺的一环。随着 Rust 编程语言的崛起，其安全性、性能和并发特性使其成为开发高质量 GUI 应用的理想选择。`relm`框架，作为 Rust 生态中的一员，提供了一种声明式、事件驱动的方法来构建 GUI，本文将深入探究`relm`的设计理念、特性以及应用实例，为广大 Rust 爱好者开启构建跨平台 GUI 应用的新篇章。

### relm 框架概览

`relm`是一个用于 Rust 语言的 GUI 框架，它基于`gtk-rs`库（GTK+3 的 Rust 绑定），允许开发者创建跨平台的 GUI 应用程序。`relm`利用 Rust 的安全并发特性、Futures 等现代编程理念，通过 Model-View-Update（MVU）架构，实现了高效、简洁的代码实践，让开发者能够轻松构建复杂的用户界面。

### 特性解析

#### 异步支持与 Futures

`relm`将异步编程视为其核心特性之一，使用 Futures 来处理耗时任务和并发，这不仅提高了应用的响应性，也使得编写复杂的异步逻辑变得简单而直观。

#### 基于名字的小部件标识

在很多 GUI 框架中，对小部件的引用通常通过类似`Arc<Mutex<>>`的方式进行。而`relm`提供了一种更简单、更 Rust 风格的方式，即通过名称直接标识小部件，简化了代码并提高了可读性。

#### Model-View-Update（MVU）架构

MVU 架构是`relm`的一个核心特点，它明晰地将应用分为三个部分：模型（Model）、视图（View）和更新（Update），使得应用状态的管理变得清晰，界面与逻辑的分离也更为彻底。

### 实例演示

为了更好地理解`relm`框架的应用，让我们来构建一个简单的应用程序。假设我们需要实现一个 TODO 列表应用，以下是如何使用`relm`来实现的基本步骤：

```rust
extern crate relm;
#[macro_use]
extern crate relm_derive;
extern crate gtk;

use relm::{Relm, Widget};
use gtk::prelude::*;
use gtk::{Window, WindowType};

#[derive(Msg)]
pub enum Msg {
    Add,
    Quit,
}

pub struct Model {
    // 在这里定义模型
}

#[derive(Clone)]
pub struct Win {
    // 界面元素定义
}

impl Widget for Win {
    type Model = Model;
    type ModelParam = ();
    type Msg = Msg;
    // 初始化模型、界面等
}

fn main() {
    Win::run(()).expect("Win::run failed");
}
```

在这个简单的例子中，我们定义了一个`Win`结构体来代表我们的应用窗口，以及一个`Msg`枚举来定义可能的消息（事件）。我们通过实现`Widget` trait 来定义应用的模型、视图和更新逻辑。

### 结论

`relm`框架提供了一种高效、简洁的方法来构建 Rust GUI 应用，特别是对于那些追求安全性和高性能的项目。通过其异步特性、基于名字的小部件标识以及 MVU 架构，`relm`能够帮助开发者更加方便地构建复杂的交互式界面。随着 Rust 生态的不断成熟，`relm`无疑是构建跨平台 GUI 应用的一个有力候选。

## egui

- 该 egui 库是一个即时模式、易于使用、可移植的库，用于在 Rust 中构建在 Web、计算机和游戏引擎（开发中）上运行的 GUI。它的目标是成为在 Rust 中构建 Web 应用程序的最简单的库。

- 该 egui 库旨在为构建 GUI 提供安全、响应迅速、友好且可移植的体验，而无需回调和最小依赖。查看 egui 的官方文档以了解如何使用它来制作跨平台的 GUI。

- 该 egui 库正在积极开发中，如果您足够勇敢，您可以在生产中使用它。库的特定部分 egui 已准备好，您可以使用旧版本，因为较新的版本容易发生重大更改。

## native-windows-gui



## Azul：适用于 Rust、C 和 C++的桌面GUI框架

Azul —— Rust 和 C++ 编写的桌面 GUI 框架

GitHub：[fschutt/azul：桌面 GUI 框架 (github.com)](https://github.com/fschutt/azul)

### 介绍

- https://www.oschina.net/p/azul-gui

- Azul 框架是一个反应式 GUI 库，用于在 Rust、C 和 C++ 中构建桌面 GUI。它由 WebRender 提供支持，是一种文档对象模型，类似于 HTML 和 CSS。由于 Azul 利用 WebRender，它提供了渐变、框阴影、边框样式和 CSS 变换等功能。

- Azul 框架还提供了许多内置小部件、每秒超过 60 帧的动画、跨平台原生对话、SVG 解析、通过共享库的动态链接以及 HTML 到 Rust 的热重载编译。

- 要开始使用 Azul 框架，请将其添加到项目的依赖项中：

- [dependencies]azul = "1.0.0-alpha"

- 然后将 crates 导入您的项目并使用它们：

- `use azul::prelude::*;use azul::widgets::{button::Button, label::Label};`

- Azul 框架文档齐全，可帮助您开始构建 GUI。

- Azul 框架采用不同的 GUI 开发方法，到目前为止，该框架已用于 200 多个 Rust 项目。Azul 框架是功能性的，根据文档，您可以在生产中使用它。

- 开源地址：https://github.com/fschutt/azul

## vgtk

Rust 实现的桌面 UI 框架

- 介绍：https://www.oschina.net/p/vgtk

- 开源地址：https://github.com/bodil/vgtk

## gtk-rs

### 介绍

- GTK 库在开发者社区中很受欢迎。许多流行的 Linux GUI 应用程序使用 GTK 库和 GNOME 堆栈。该 gtk-rs 库只是众多可用于生产的 Rust GUI 库之一，已在 500 多个项目中使用。

- GTK 是由 GNOME 项目开发的流行的跨平台、面向对象的小部件工具包。它用于构建可在 Unix、Windows 和 macOS 系统上以多种语言（从 Python 到 JavaScript、C 和 Rust）运行的便携式 GUI 应用程序。

- GTK 项目有各种版本，例如 GTK 3，每个版本都有更改和升级。

- 该 gtk-rs 项目为基于 GNOME 堆栈的库（如 GTK 3 和 GTK 4 库）提供安全的 Rust 绑定。和库分别提供 GTK 3 和 GTK 4 功能 gtk3-rs 。gtk4-rs

- 要开始使用这些 gtk-rs 库，您需要 Rust 工具链和 GTK 库。创建项目后，将库添加到 Cargo.tomlGTK 4 crate 文件中的依赖项中：

- gtk = { version = "X.X", package = "gtk4" }

- 如果您使用的是 macOS 或 Linux，请使用 brew 包管理器安装 GTK 4 库：

- brew install gtk4

- 查看这些页面以获取有关各种 Linux 发行版和 Windows 的安装说明。

- 安装 gtk4 并将其添加到依赖项后，您可以像这样导入 crate：

- use gtk::prelude::\*;use gtk::Application;

- gtk-rs 这本书是学习如何使用该库在 Rust 中构建 GUI 的好资源。

### 网站

官网：[Unlocking the GNOME stack for Rust – gtk-rs](https://gtk-rs.org/)

GitHub 开源

- [fltk-rs/fltk-rs: Rust bindings for the FLTK GUI library. (github.com)](https://github.com/fltk-rs/fltk-rs)

- [gtk-rs/gtk4-rs: Rust bindings of GTK 4 (github.com)](https://github.com/gtk-rs/gtk4-rs)

- [gtk-rs/gtk: DEPRECATED, use https://github.com/gtk-rs/gtk3-rs repository instead!](https://github.com/gtk-rs/gtk)

## fltk-rs

书籍地址：[开始 - fltk book (flatig.vip)](https://fltk.flatig.vip/)

### 介绍

- 根据许多其他开发人员的说法，使用该 fltk-rs 库比 C++ 库更直接。

- FLTK（Fast Light Toolkit）是一个轻量级的、跨平台支持的用于构建 GUI 的工具包。FLTK 在 Windows、macOS 和 UNIX 系统上受支持，最初是为 C++ 构建的。如果您使用 FLTK 工具包创建 GUI 应用程序，则该应用程序在所有受支持的操作系统上看起来都一样。

- 该 fltk-rs 库为 FLTK 工具包提供 Rust 绑定。crate 支持旧架构，fltk-rs 有 80 多个可定制的小部件和超过四个支持的主题方案，包括 GTK 方案。您还可以使用 cratefltk-theme 进行更多自定义。

- 该 fltk-rs 库可以通过一次执行快速安装、构建、启动和运行。开始使用 fltk-rscrate 很容易——您所要做的就是将项目作为依赖项添加到您的 Cargo.toml 文件中，然后在您的计算机上安装库。

- fltk 如果您使用的是 macOS 或 Linux 计算机，则可以使用此 brew 命令安装库：

- brew install fltk

- 您可以在链接页面上找到为其他操作系统安装库的说明。fltk 将项目作为依赖项添加到您的 Cargo.toml 文件中：

- [dependencies]fltk = { version = "^1.3", features = ["fltk-bundled"] }

- 添加项目并安装 fltk 库后，您可以将 crate 导入到您的项目中：

- use fltk::{app, button::Button, frame::Frame, prelude::\*, window::Window};

- 查看 fltk-rs 文档以详细了解其功能和用途。

## Frui

### 介绍

Frui 是一个开发者友好的 UI 框架，它使构建用户界面变得简单而富有成效。它的灵感来自于 Flutter 架构

### 网址

GitHub：https://github.com/fruiframework/frui

### 教程

- [【一起学 Rust | 框架篇 | Frui 框架】rust 一个对开发者友好的 GUI 框架——Frui*rust 框架*广龙宇的博客-CSDN 博客](https://blog.csdn.net/weixin_47754149/article/details/127396748)

## Tauri

官网文档：[快速开始 | Tauri Apps](https://tauri.app/zh/v1/guides/getting-started/setup/)

## Freya：原生 GUI，高性能且内存占用低

- GitHub：https://github.com/marc2332/freya
- 官网：https://freyaui.dev/

由 🧬 Dioxus 和 🎨 Skia 提供支持的 🦀 Rust 跨平台 GUI 库。

Freya 还是比较年轻，属于正在开发中阶段，企业还是无法用于生产的，但不妨害我们学习及了解它，并且使用它！

![image-20240511163056796](./Rust框架和库.assets/image-20240511163056796.png)

### Freya 介绍

Freya 它是一个实验性的项目，由 Dioxus 和 Skia 提供支持的，允许开发者在 Windows、macOS 和 Linux 上创建跨平台的图形用户界面。Freya 的设计目标是提供一种简单、直观的方式来构建用户界面，同时保持高性能和跨平台兼容性。

#### Freya 特点

- **基于 Dioxus 和 Skia**：Freya 建立在 Dioxus 这个 UI 库之上，并且使用了 Skia 图形引擎，这为它提供了强大的图形渲染能力。
- **内置组件**：如按钮、滚动视图、开关等。
- **跨平台支持**：可以在多个操作系统上运行，包括 Windows、macOS 和 Linux。
- **中间件支持**：Freya 支持中间件，这对于构建生产就绪的 Web 框架是一个关键要求。
- **热重载支持**：Dioxus 的热重载支持为 Freya 提供了一个强大的工具，可以帮助开发者更加高效地构建和测试跨平台的 Rust 原生 GUI 应用程序。

### Freya 快速使用

需要添加 Freya 和 Dioxus 作为依赖项：

```
freya = "0.2"
dioxus = { version = "0.5", features = ["macro", "hooks"], default-features = false }
```

### Freya 未来方向

Freya 目标致力于成为一个高性能、资源经济的 Rust GUI 工具包，旨在提供卓越的开发者体验，实现广泛的跨平台兼容性，确保全面的辅助功能支持，打造强大的测试工具集，并构建一个丰富、灵活的组件与钩子生态系统。

- 高性能且内存占用低
- 跨平台支持
- 有用且可扩展的组件和挂钩
- 有用的测试 API
- 提供良好的开发者体验

## Vizia：一个用于 Rust 编程语言的声明式桌面 GUI 框架

一个用于 Rust 编程语言的声明式桌面 GUI 框架。

书籍：

文档：

演示：

Discord：

### 特性

- #### 「跨平台（Windows、Linux、MacOS）」

  构建在 Windows、Mac 和 Linux 上外观和行为相同的桌面应用程序。

- #### 「声明式」

  用纯 Rust 编写 GUI 代码（无需 DSL 宏）。

- #### 「响应式」

  视图派生自应用程序状态。更改状态，绑定到它的视图将自动更新。

- #### 「灵活布局」

  创建适应大小变化的灵活布局。由 morphorm[1] 提供支持。

- #### 「强大的样式设计」

  利用支持热重载的 CSS 完全自定义应用程序的样式。

- #### 「动画」

  通过可动画的样式属性使您的应用程序栩栩如生。

- #### 「内置视图和主题」

  使用超过 25 个现成的视图以及两个内置主题（浅色和深色）快速开始。包括 4250+ 图标，由 Tabler Icons[2] 提供。

- #### 「无障碍性」

  使您的应用程序能够被辅助技术访问，如屏幕阅读器，由 accesskit[3] 提供支持。

- #### 「本地化」

  使您的应用程序适应不同的地区，包括使用 fluent[4] 翻译文本。

- #### 「GPU 加速渲染」

  Vizia 利用 GPU 进行快速图形更新，由 femtovg[5] 提供支持。

- #### 「音频插件开发」

  Vizia 为音频插件开发提供了一个替代的 baseview[6] 窗口后端，例如与 nih-plug[7] 框架一起使用。

### 快速一览

一个简单的计数器应用程序。使用 `cargo run --example counter` 运行。

```rust
use vizia::prelude::*;

// 定义一些模型数据
#[derive(Lens)]
pub struct AppData {
    count: i32,
}

// 定义事件以更改数据
pub enum AppEvent {
    Increment,
}

// 描述如何根据事件更改数据
impl Model for AppData {
    fn event(&mut self, _: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::Increment => {
                self.count += 1;
            }
        });
    }
}

fn main() {
    // 创建一个应用程序
    Application::new(|cx| {

        // 将模型数据构建到树中
        AppData { count: 0 }.build(cx);

        // 声明组成 UI 的视图
        HStack::new(cx, |cx| {

            // 声明一个按钮，它发出一个事件
            Button::new(cx, |cx| Label::new(cx, "增加"))
              .on_press(|cx| cx.emit(AppEvent::Increment));

            // 声明一个标签，它绑定到模型的一部分，在更改时更新
            Label::new(cx, AppData::count).width(Pixels(50.0));
        })
        .child_space(Stretch(1.0))  // 应用样式和布局修饰符
        .col_between(Pixels(50.0));
    })
    .title("计数器") // 配置窗口属性
    .inner_size((400, 100))
    .run();
}
```

![图片](./Rust框架和库.assets/640-489498.webp)

### 学习

#### 书籍

Vizia 的快速入门指南可在 这里[8] 找到。

#### 文档

自动生成的代码文档可在 这里[9] 找到。

#### 示例

仓库中包含了一个 示例[10] 列表。

使用 winit[11]（默认）窗口后端运行示例：

```rust
cargo run --release --example example_name
```

#### Baseview

使用 baseview[12] 窗口后端运行示例：

```rust
cargo run --release --example example_name --no-default-features --features baseview
```

#### Web

要作为 Web 应用程序运行示例，首先确保已安装 `wasm32-unknown-unknown` 工具链：

```rust
rustup target add wasm32-unknown-unknown
```

然后使用以下命令运行示例：

```rust
cargo run-wasm --release --example example_name
```

> ❝
>
> **「注意」**一些示例与 Web 目标不兼容，如果在网络上运行，将会故意崩溃。
>
> ❞

### Vizia 框架的动画功能是如何实现的，它对性能有什么影响？

Vizia 框架的动画功能是通过其声明式 GUI 架构实现的，允许开发者以一种简洁而直观的方式来定义和控制动画。在 Vizia 中，动画通常是通过绑定到应用程序状态的视图来实现的。当应用程序的状态发生变化时，与该状态相关联的视图会自动更新，这种状态的变化可以被用来触发动画效果。

以下是 Vizia 动画功能的实现方式和对性能影响的一些要点：

1. **「声明式动画」**：开发者可以使用声明式的方法来定义动画，这意味着动画是通过描述视图状态的变化来实现的，而不是通过命令式的脚本。
2. **「状态驱动」**：动画通常是对状态变化的响应。当应用程序的状态更新时，Vizia 可以自动地在视图之间进行过渡，创建平滑的动画效果。
3. **「CSS 样式动画」**：Vizia 支持使用 CSS 来定义动画，这允许开发者利用熟悉的 CSS 语法来创建复杂的动画效果。
4. **「性能优化」**：Vizia 使用 GPU 加速渲染，这意味着动画和图形更新可以利用 GPU 的并行处理能力，从而提高性能。
5. **「细粒度控制」**：开发者可以对动画的持续时间、延迟、迭代次数等进行细粒度控制，这有助于优化动画的性能和资源使用。
6. **「动画性能权衡」**：虽然动画可以提升用户体验，但复杂的动画可能会对性能产生影响，尤其是在资源受限的设备上。Vizia 提供了工具和控制，以便开发者可以在动画效果和性能之间做出权衡。
7. **「热重载」**：Vizia 支持 CSS 的热重载，这意味着开发者可以在不重启应用程序的情况下更改样式和动画，这有助于快速迭代和优化动画性能。
8. **「内置视图和主题」**：Vizia 提供了一组内置的视图和主题，这些视图和主题可能已经包含了优化的动画效果，使得开发者可以快速地实现高性能的动画。

总的来说，Vizia 的动画功能旨在提供强大的动画能力，同时保持对性能的精细控制。通过利用 GPU 加速和声明式的状态管理，Vizia 能够在不过度牺牲性能的情况下，为桌面应用程序带来生动的动画效果。

### 在 Vizia 框架中，如何使用 CSS 来创建复杂的动画效果？

在 Vizia 框架中，可以使用 CSS 来创建复杂的动画效果，因为 Vizia 支持将 CSS 样式应用于 GUI 组件。这意味着你可以利用 CSS 的强大功能，包括但不限于过渡（transitions）、变换（transforms）、关键帧动画（keyframe animations）等，来为你的应用程序添加动画效果。

以下是一些使用 CSS 在 Vizia 中创建动画的基本方法：

**「过渡（Transitions）」**： 使用 CSS 的 `transition` 属性，你可以在视图的状态发生变化时创建平滑的动画过渡效果。例如，你可以对按钮的背景颜色或视图的位置变化添加过渡效果。

```rust
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: green;
}
```

**「变换（Transforms）」**： CSS 的 `transform` 属性可以用来移动、旋转、缩放或倾斜视图。这些变换也可以通过过渡来动画化。

```rust
.box {
  transform: rotate(0deg);
  transition: transform 0.5s;
}

.box:hover {
  transform: rotate(360deg);
}
```

**「关键帧动画（Keyframe Animations）」**： 通过定义关键帧，你可以创建更复杂的动画路径和效果。关键帧动画可以控制动画的每个阶段，非常灵活。

```rust
@keyframes example {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.box {
  animation: example 5s infinite;
}
```

**「动画（Animations）」**： CSS 的 `animation` 属性是一个简写属性，它允许你在一个声明中设置多个动画属性，包括名称、持续时间、迭代次数等。

```rust
.animated-box {
  animation: example 5s infinite alternate;
}
```

1. **「响应式动画」**： Vizia 的动画可以响应应用程序的状态变化。这意味着你可以创建基于数据变化的动画，例如，当用户与应用程序交互或数据更新时。
2. **「性能考虑」**： 虽然 CSS 动画非常强大，但也需要考虑性能。复杂的动画或过多的动画可能会导致性能下降，特别是在更新频繁的视图上。因此，合理使用动画，并在必要时进行性能测试和优化。
3. **「热重载」**： Vizia 支持 CSS 的热重载，这意味着你可以在应用程序运行时更改 CSS 样式和动画，而无需重启应用程序，这有助于快速开发和迭代。

通过结合 Vizia 的声明式 GUI 架构和 CSS 的动画功能，你可以创建出既美观又具有良好用户体验的动画效果。

#### 代码示例

> ❝
>
> 下面的代码示例。可以帮助你快速开始编程工作
>
> ❞

examples/animation.rs

```rust
use vizia::prelude::*;

const STYLE: &str = r#"
    @keyframes slidein {
        0% {
            left: 0px;
        }
        50% {
            left: 50px;
        }
        100% {
            left: 200px;
        }
    }
"#;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");

        let animation = AnimationBuilder::new()
            .keyframe(0.0, |key| key.scale("1"))
            .keyframe(1.0, |key| key.scale("2.5"));

        let anim_id = cx.add_animation(animation);

        Element::new(cx).background_color(Color::red()).size(Pixels(100.0)).id("elem");

        Button::new(cx, |cx| Label::new(cx, "Play 1"))
            .on_press(|cx| cx.play_animation_for("slidein", "elem", Duration::from_secs(2)));
        Button::new(cx, |cx| Label::new(cx, "Play 2"))
            .on_press(move |cx| cx.play_animation_for(anim_id, "elem", Duration::from_secs(2)));
    })
    .run()
}
```

- 图表示例

```rust
use vizia::prelude::*;

const STYLE: &str = r#"

    label {
        width: 110px;
        height: 30px;
        border-width: 1px;
        border-color: #505050;
        child-top: 1s;
        child-bottom: 1s;
        child-left: 5px;
        text-wrap: false;
    }

    .default {
        cursor: default;
    }

    .crosshair {
        cursor: crosshair;
    }

    .hand {
        cursor: hand;
    }

    .arrow {
        cursor: arrow;
    }

    .move {
        cursor: move;
    }

    .text {
        cursor: text;
    }

    .wait {
        cursor: wait;
    }

    .help {
        cursor: help;
    }

    .progress {
        cursor: progress;
    }

    .not-allowed {
        cursor: not-allowed;
    }

    .context-menu {
        cursor: context-menu;
    }

    .cell {
        cursor: cell;
    }

    .vertical-text {
        cursor: vertical-text;
    }

    .alias {
        cursor: alias;
    }

    .copy {
        cursor: copy;
    }

    .no-drop {
        cursor: no-drop;
    }

    .grab {
        cursor: grab;
    }

    .grabbing {
        cursor: grabbing;
    }

    .all-scroll {
        cursor: all-scroll;
    }

    .zoom-in {
        cursor: zoom-in;
    }

    .zoom-out {
        cursor: zoom-out;
    }

    .e-resize {
        cursor: e-resize;
    }

    .n-resize {
        cursor: n-resize;
    }

    .ne-resize {
        cursor: ne-resize;
    }

    .nw-resize {
        cursor: nw-resize;
    }

    .s-resize {
        cursor: s-resize;
    }

    .se-resize {
        cursor: se-resize;
    }

    .sw-resize {
        cursor: sw-resize;
    }

    .w-resize {
        cursor: w-resize;
    }

    .ew-resize {
        cursor: ew-resize;
    }

    .ns-resize {
        cursor: ns-resize;
    }

    .nesw-resize {
        cursor: nesw-resize;
    }

    .nwse-resize {
        cursor: nwse-resize;
    }

    .col-resize {
        cursor: col-resize;
    }

    .row-resize {
        cursor: row-resize;
    }
    .none {
        cursor: none;
    }
"#;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");

        HStack::new(cx, |cx| {
            VStack::new(cx, |cx| {
                Label::new(cx, "Default").class("default");
                Label::new(cx, "Crosshair").class("crosshair");
                Label::new(cx, "Hand").class("hand");
                Label::new(cx, "Arrow").class("arrow");
                Label::new(cx, "Move").class("move");
                Label::new(cx, "Text").class("text");
                Label::new(cx, "Wait").class("wait");
                Label::new(cx, "Help").class("help");
                Label::new(cx, "Progress").class("progress");
                Label::new(cx, "NotAllowed").class("not-allowed");
                Label::new(cx, "ContextMenu").class("context-menu");
                Label::new(cx, "Cell").class("cell");
            })
            .child_space(Stretch(1.0))
            .row_between(Pixels(10.0));

            VStack::new(cx, |cx| {
                Label::new(cx, "VerticalText").class("vertical-text");
                Label::new(cx, "Alias").class("alias");
                Label::new(cx, "Copy").class("copy");
                Label::new(cx, "NoDrop").class("no-drop");
                Label::new(cx, "Grab").class("grab");
                Label::new(cx, "Grabbing").class("grabbing");
                Label::new(cx, "AllScroll").class("all-scroll");
                Label::new(cx, "ZoomIn").class("zoom-in");
                Label::new(cx, "ZoomOut").class("zoom-out");
                Label::new(cx, "EResize").class("e-resize");
                Label::new(cx, "NResize").class("n-resize");
                Label::new(cx, "NeResize").class("ne-resize");
            })
            .child_space(Stretch(1.0))
            .row_between(Pixels(10.0));

            VStack::new(cx, |cx| {
                Label::new(cx, "NwResize").class("nw-resize");
                Label::new(cx, "SResize").class("s-resize");
                Label::new(cx, "SeResize").class("se-resize");
                Label::new(cx, "SwResize").class("sw-resize");
                Label::new(cx, "WResize").class("w-resize");
                Label::new(cx, "EwResize").class("ew-resize");
                Label::new(cx, "NsResize").class("ns-resize");
                Label::new(cx, "NeswResize").class("nesw-resize");
                Label::new(cx, "NwseResize").class("nwse-resize");
                Label::new(cx, "ColResize").class("col-resize");
                Label::new(cx, "RowResize").class("row-resize");
                Label::new(cx, "None").class("none");
            })
            .child_space(Stretch(1.0))
            .row_between(Pixels(10.0));
        })
        .child_space(Stretch(1.0));
    })
    .title("Cursor Icon")
    .inner_size((800, 600))
    .run()
}
```

- 自定义视图

```rust
use vizia::prelude::*;
use vizia::vg;

pub struct CustomView<L: Lens<Target = Color>> {
    color: L,
}

impl<L: Lens<Target = Color>> CustomView<L> {
    pub fn new(cx: &mut Context, color: L) -> Handle<Self> {
        Self { color }
            .build(cx, |cx| {
                Label::new(cx, "This is a custom view!");
            })
            // Redraw when lensed data changes
            .bind(color, |mut handle, _| handle.needs_redraw())
    }
}

impl<L: Lens<Target = Color>> View for CustomView<L> {
    fn draw(&self, cx: &mut DrawContext, canvas: &mut Canvas) {
        let col = self.color.get(cx);
        let bounds = cx.bounds();
        let mut path = vg::Path::new();
        path.rect(bounds.x, bounds.y, bounds.w, bounds.h);
        canvas.fill_path(&path, &vg::Paint::color(col.into()));
    }
}

#[derive(Lens)]
struct AppData {
    color: Color,
}

impl Model for AppData {
    fn event(&mut self, _cx: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::SetColor(col) => self.color = *col,
        })
    }
}

pub enum AppEvent {
    SetColor(Color),
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        AppData { color: Color::red() }.build(cx);
        CustomView::new(cx, AppData::color).size(Pixels(200.0));
        Slider::new(cx, AppData::color.map(|c| c.r() as f32 / 255.0))
            .on_changing(|cx, val| {
                cx.emit(AppEvent::SetColor(Color::rgb((val * 255.0) as u8, 0, 0)))
            })
            .width(Pixels(200.0))
            .space(Pixels(20.0));
    })
    .run()
}
```

- 拖拽示例

```rust
use vizia::prelude::*;
mod helpers;
use helpers::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        ExamplePage::vertical(cx, |cx| {
            HStack::new(cx, |cx| {
                Element::new(cx).size(Pixels(50.0)).background_color(Color::red()).on_drag(|ex| {
                    ex.set_drop_data(ex.current());
                });

                Element::new(cx).size(Pixels(50.0)).background_color(Color::green()).on_drag(
                    |ex| {
                        ex.set_drop_data(ex.current());
                    },
                );

                Element::new(cx).size(Pixels(50.0)).background_color(Color::blue()).on_drag(|ex| {
                    ex.set_drop_data(ex.current());
                });
            })
            .height(Pixels(100.0))
            .width(Auto)
            .col_between(Pixels(20.0))
            .child_space(Stretch(1.0));

            Element::new(cx)
                .size(Pixels(100.0))
                .background_color(Color::beige())
                .on_drop(|ex, data| {
                    if let DropData::Id(id) = data {
                        let bg = ex.with_current(id, |ex| ex.background_color());
                        ex.set_background_color(bg);
                        ex.emit(WindowEvent::SetCursor(CursorIcon::Default));
                    }
                    if let DropData::File(file) = data {
                        println!("Dropped File: {:?}", file);
                    }
                })
                .on_hover(|ex| {
                    if ex.has_drop_data() {
                        ex.emit(WindowEvent::SetCursor(CursorIcon::Copy));
                    } else {
                        ex.emit(WindowEvent::SetCursor(CursorIcon::Default));
                    }
                });
        });
    })
    .run()
}
```

- 跟随系统主题

```rust
use vizia::prelude::*;

#[derive(Debug, Lens)]
pub struct AppData {
    current_theme: String,
}

impl Model for AppData {
    fn event(&mut self, _: &mut EventContext, event: &mut Event) {
        event.map(|event, _| {
            if let WindowEvent::ThemeChanged(theme) = event {
                self.current_theme = match theme {
                    ThemeMode::DarkMode => "Dark Mode",
                    ThemeMode::LightMode => "Light Mode",
                }
                .to_owned();
            }
        })
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx: &mut Context| {
        AppData { current_theme: "Light mode".to_owned() }.build(cx);

        cx.emit(EnvironmentEvent::SetThemeMode(AppTheme::System));

        VStack::new(cx, |cx| {
            Label::new(cx, "This example follow system theme change");
            Label::new(cx, "Change your theme to light or dark mode to see how it works\n");
            Label::new(cx, AppData::current_theme.map(|v| format!("Current system theme: {v}")));
        })
        .child_space(Stretch(1.0))
        .space(Stretch(1.0));
    })
    .title("Follow system theme")
    .inner_size((470, 320))
    .run()
}
```

- 键盘映射

```rust
//! This example showcases how to use a keymap.
//!
//! Key chords:
//! `A`                     => `Action::OnA`
//! `B`                     => `Action::OnB`
//! `C`                     => `Action::OnC`
//! `CTRL+A`                => `Action::OnCtrlA`
//! `ALT+A`                 => `Action::OnAltA`
//! `SHIFT+A`               => `Action::OnShiftA`
//! `LOGO+A`                => `Action::OnLogoA`
//! `ALT+SHIFT+X`           => `Action::OnAltShiftX`
//! `CTRL+ALT+SHIFT+Y`      => `Action::OnCtrlAltShiftY`
//! `CTRL+ALT+SHIFT+LOGO+Z` => `Action::OnCtrlAltShiftLogoZ`

use vizia::prelude::*;

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        // Build the keymap.
        Keymap::from(vec![
            (
                KeyChord::new(Modifiers::empty(), Code::KeyA),
                KeymapEntry::new(Action::OnA, |_| println!("Action A")),
            ),
            (
                KeyChord::new(Modifiers::empty(), Code::KeyB),
                KeymapEntry::new(Action::OnB, |_| println!("Action B")),
            ),
            (
                KeyChord::new(Modifiers::empty(), Code::KeyC),
                KeymapEntry::new(Action::OnC, |_| println!("Action C")),
            ),
            (
                KeyChord::new(Modifiers::CTRL, Code::KeyA),
                KeymapEntry::new(Action::OnCtrlA, |_| println!("Action OnCtrlA")),
            ),
            (
                KeyChord::new(Modifiers::ALT, Code::KeyA),
                KeymapEntry::new(Action::OnAltA, |_| println!("Action OnAltA")),
            ),
            (
                KeyChord::new(Modifiers::SHIFT, Code::KeyA),
                KeymapEntry::new(Action::OnShiftA, |_| println!("Action OnShiftA")),
            ),
            (
                KeyChord::new(Modifiers::SUPER, Code::KeyA),
                KeymapEntry::new(Action::OnLogoA, |_| println!("Action OnLogoA")),
            ),
            (
                KeyChord::new(Modifiers::ALT | Modifiers::SHIFT, Code::KeyX),
                KeymapEntry::new(Action::OnAltShiftX, |_| println!("Action OnAltShiftX")),
            ),
            (
                KeyChord::new(Modifiers::CTRL | Modifiers::ALT | Modifiers::SHIFT, Code::KeyY),
                KeymapEntry::new(Action::OnCtrlAltShiftY, |_| println!("Action OnCtrlAltShiftY")),
            ),
            (
                KeyChord::new(
                    Modifiers::CTRL | Modifiers::ALT | Modifiers::SHIFT | Modifiers::SUPER,
                    Code::KeyZ,
                ),
                KeymapEntry::new(Action::OnCtrlAltShiftLogoZ, |_| {
                    println!("Action OnCtrlAltShiftLogoZ")
                }),
            ),
        ])
        .build(cx);
    })
    .title("Keymap")
    .run()
}

// The actions that are associated with the key chords.
#[derive(Debug, PartialEq, Copy, Clone)]
enum Action {
    OnA,
    OnB,
    OnC,
    OnCtrlA,
    OnAltA,
    OnShiftA,
    OnLogoA,
    OnAltShiftX,
    OnCtrlAltShiftY,
    OnCtrlAltShiftLogoZ,
}
```

- 数字输入

```rust
// TODO: Make this a built-in view

use vizia::prelude::*;

const STYLE: &str = r#"
    textbox:invalid {
        border-color: #ff0000;
    }
"#;

#[derive(Lens)]
pub struct AppData {
    number: i32,
    invalid: bool,
}

#[derive(Debug)]
pub enum AppEvent {
    SetNumber(i32),
    SetInvalid,
}

impl Model for AppData {
    fn event(&mut self, _: &mut EventContext, event: &mut Event) {
        event.map(|app_event, _| match app_event {
            AppEvent::SetNumber(num) => {
                self.number = *num;
                self.invalid = false;
            }
            AppEvent::SetInvalid => {
                self.invalid = true;
            }
        });
    }
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");
        AppData { number: 5, invalid: false }.build(cx);

        HStack::new(cx, |cx| {
            Textbox::new(cx, AppData::number)
                .validate(|val| *val < 50)
                .on_submit(|cx, val, _| {
                    cx.emit(AppEvent::SetNumber(val));
                })
                .width(Pixels(200.0))
                .child_left(Pixels(5.0));

            // Label::new(cx, "Please enter a number less than 50")
            //     .class("validation_error_label")
            //     .toggle_class("validation_error", AppData::invalid);

            Label::new(cx, AppData::number)
                .width(Pixels(200.0))
                .height(Pixels(32.0))
                .child_top(Stretch(1.0))
                .child_bottom(Stretch(1.0))
                .child_left(Pixels(5.0));
        })
        .child_top(Stretch(1.0))
        .child_bottom(Stretch(1.0))
        .height(Auto)
        .space(Stretch(1.0))
        .child_space(Stretch(1.0))
        .col_between(Pixels(10.0));
    })
    .title("Number Input")
    .run()
}
```

- 代理

```rust
#[allow(unused)]
use vizia::prelude::*;

#[cfg(target_arch = "wasm32")]
fn main() {
    panic!("This example is not supported on wasm - threads are experimental");
}

#[cfg(feature = "baseview")]
fn main() {
    panic!("This example is not supported on baseview - proxies are winit only");
}

#[cfg(all(not(target_arch = "wasm32"), not(feature = "baseview")))]
fn main() -> Result<(), ApplicationError> {
    let app = Application::new(|_| {})
        .on_idle(|_| {
            println!("On Idle: {:?}", Instant::now());
        })
        .title("Proxy");

    let mut proxy = app.get_proxy();

    std::thread::spawn(move || loop {
        proxy.emit(()).expect("Failed to send proxy event");
        std::thread::sleep(std::time::Duration::from_secs(2));
    });

    app.run()
}
```

- 保存弹窗

```rust
use vizia::prelude::*;

const STYLE: &str = r#"

    .modal {
        space: 1s;
        child-space: 8px;
        child-left: 1s;
        child-right: 1s;
        background-color: white;
        border-radius: 3px;
        border-width: 1px;
        border-color: #999999;
        outer-shadow: 0 3 10 #00000055;
        overflow: visible;
        child-space: 10px;
        height: auto;
    }

    .modal>vstack>label {
        width: auto;
        height: auto;
        space: 5px;
        child-space: 1s;
    }

    .modal button {
        border-radius: 3px;
        child-space: 1s;
    }

    .modal hstack {
        col-between: 20px;
        size: auto;
    }
"#;

#[derive(Lens)]
pub struct AppData {
    is_saved: bool,
    show_dialog: bool,
}

impl Model for AppData {
    fn event(&mut self, cx: &mut EventContext, event: &mut Event) {
        event.map(|window_event, meta| {
            // Intercept WindowClose event to show a dialog if not 'saved'.
            if let WindowEvent::WindowClose = window_event {
                if !self.is_saved {
                    self.show_dialog = true;
                    meta.consume();
                }
            }
        });

        event.map(|app_event, _| match app_event {
            AppEvent::HideModal => {
                self.show_dialog = false;
            }

            AppEvent::Save => {
                self.is_saved = true;
            }

            AppEvent::SaveAndClose => {
                self.is_saved = true;
                cx.emit(WindowEvent::WindowClose);
            }

            AppEvent::Cancel => {
                self.is_saved = false;
            }
        });
    }
}

pub enum AppEvent {
    HideModal,
    Save,
    SaveAndClose,
    Cancel,
}

fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(STYLE).expect("Failed to add stylesheet");
        AppData { is_saved: false, show_dialog: false }.build(cx);

        HStack::new(cx, |cx| {
            Button::new(cx, |cx| Label::new(cx, "Close"))
                .on_press(|cx| cx.emit(WindowEvent::WindowClose));
            Button::new(cx, |cx| Label::new(cx, "Save")).on_press(|cx| cx.emit(AppEvent::Save));
        })
        .col_between(Pixels(10.0))
        .space(Pixels(20.0));

        Dialog::new(cx, AppData::show_dialog, |cx| {
            VStack::new(cx, |cx| {
                Label::new(cx, "Save before close?").width(Stretch(1.0)).child_space(Stretch(1.0));
                HStack::new(cx, |cx| {
                    Button::new(cx, |cx| Label::new(cx, "Save & Close"))
                        .on_press(|cx| cx.emit(AppEvent::SaveAndClose))
                        .width(Pixels(120.0))
                        .class("accent");

                    Button::new(cx, |cx| Label::new(cx, "Cancel"))
                        .on_press(|cx| cx.emit(AppEvent::HideModal))
                        .width(Pixels(120.0));
                })
                .height(Auto);
            })
            .size(Auto)
            .row_between(Pixels(20.0))
            .height(Auto);
        })
        // .on_blur(|cx| cx.emit(AppEvent::HideModal))
        .width(Auto)
        .height(Auto)
        .row_between(Pixels(20.0))
        .class("modal");
    })
    .run()
}
```

- 样式表

```rust
#[allow(unused)]
use vizia::prelude::*;

#[cfg(target_arch = "wasm32")]
fn main() {
    panic!("This example is not supported on wasm - uses filesystem");
}

#[cfg(not(target_arch = "wasm32"))]
fn main() -> Result<(), ApplicationError> {
    Application::new(|cx| {
        cx.add_stylesheet(include_style!("examples/resources/themes/test.css"))
            .expect("Failed to add stylesheet");
        HStack::new(cx, |cx| {
            Element::new(cx).class("foo");
        })
        .size(Pixels(200.0))
        .class("bar");
    })
    .run()
}
```

### Reference

[1] morphorm：https://github.com/vizia/morphorm

[2] Tabler Icons：https://tabler-icons.io

[3] accesskit：https://github.com/accesskit/accesskit

[4] fluent：https://github.com/projectfluent/fluent-rs

[5] femtovg：https://github.com/femtovg/femtovg

[6] baseview：https://github.com/RustAudio/baseview

[7] nih-plug：https://github.com/robbert-vdh/nih-plug

[8] 这里：https://book.vizia.dev

[9] 这里：https://docs.vizia.dev

[10] 示例：https://github.com/vizia/vizia/tree/main/examples

[11] winit：https://github.com/rust-windowing/winit

[12] baseview：https://github.com/RustAudio/baseview

## WGPU-RS：Rust 语言的图形编程革命

在 Rust 编程语言的领域，`wgpu-rs` 已成为一个重要的突破，它提供了一个既安全又高效的方式来进行图形编程。本文将深入探讨 `wgpu-rs` 的内部工作机制，它如何让图形编程变得更加访问，以及如何使用它来创建令人惊叹的可视化效果。

### `wgpu-rs` 概述

`wgpu-rs` 是一个 Rust 项目，旨在使 Rust 语言的图形编程更加容易。它是一个库，允许用户以安全和舒适的方式轻松地与他们系统中的图形硬件交互。该库在 `wgpu-core` 上提供了高级、惯用和方便的抽象，同时仍然允许对底层 API 的直接低级控制。通过这种方式，它提供了一种统一的方式来访问各种后端的图形和计算功能，包括 Vulkan、Metal、DirectX 以及浏览器 WebGPU。

### `wgpu-rs` 的核心特性

1. **跨平台**：支持多种后端（Vulkan、Metal、DirectX、WebGPU），可实现真正的跨平台图形编程。
2. **安全性**：Rust 的所有权和借用检查机制，减少了内存泄露和其他安全问题的风险。
3. **性能**：提供直接低级控制的能力，允许开发者充分利用硬件的能力。
4. **易用性**：提供高级的抽象，让开发者可以更容易地创建图形应用。
5. **现代**：贴合最新的图形API标准，如WebGPU，保持技术的前沿性。

### 使用 `wgpu-rs` 开始图形编程

为了探索 `wgpu-rs` 的强大功能，我们将通过几个简单的例子来展示如何开始使用这个库进行图形编程。

**环境配置**：

首先，您需要确保 Rust 环境已经安装在您的系统上。然后，通过添加以下依赖到 `Cargo.toml` 来引入 `wgpu-rs`：

```
[dependencies]
wgpu = "0.10"
```

**简单的示例**：

让我们通过一个简单的图形渲染示例来展示 `wgpu-rs` 的使用。此示例将创建一个窗口，并在窗口中渲染一个简单的三角形。

首先，创建一个窗口和设备：

```rust
use wgpu::Instance;
use winit::{
    event::{Event, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::WindowBuilder,
};

async fn run(event_loop: EventLoop<()>, window: Window) {
    let instance = Instance::new(wgpu::Backends::all());
    let surface = unsafe { instance.create_surface(&window) }.expect("Failed to create a surface");
    // 创建设备和队列
}
```

接下来，加载管道、顶点和像素着色器，然后开始渲染循环：

```
// 此部分将添加管道创建代码、顶点数据和渲染循环。
```

注意，由于篇幅限制，完整的应用程序代码请参阅 `wgpu-rs` 的官方示例仓库。

### 进阶应用和性能优化

深入到 `wgpu-rs`，您可以探索更高级的功能，如多线程渲染、GPU 加速计算以及创建复杂的 3D 场景。通过合理利用 Rust 的并发特性和 `wgpu-rs` 提供的接口，可以开发出性能卓越、响应灵敏的应用程序。

**性能优化技巧**：

1. **利用并发**：Rust 提供的安全并发允许您充分利用多核 CPU，进行高效的数据处理和渲染。
2. **精确资源管理**：合理分配和回收 GPU 资源，避免资源泄露和冲突。
3. **着色器优化**：优化着色器代码，减少不必要的计算和资源使用。

### 结语

`wgpu-rs` 为 Rust 语言打开了图形编程的新纪元，无论是新手还是经验丰富的开发者，都可以从中受益。通过 `wgpu-rs`，我们可以创建出性能卓越、跨平台的图形应用程序，拓展 Rust 程序的边界。欢迎更多的开发者加入 Rust 和 `wgpu-rs` 的社区，一起推动这个令人兴奋的项目向前发展。

## 待定

- [Rust 语言有那些好的 GUI 库? - 知乎 (zhihu.com)](https://www.zhihu.com/question/312815643?sort=created)

- [Rust 移动开发与跨平台模式探究 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/484269271)

- [Flutter + Rust ffi 开发跨平台 UI 程序入门*flutter rust*枫安 Maplean 的博客-CSDN 博客](https://blog.csdn.net/hyklose/article/details/124482491)

- [搜索 ·铁锈用户界面 (github.com)](https://github.com/search?o=desc&q=Rust+UI&s=stars&type=Repositories)

- Rust crate 大巡礼
  - https://www.bilibili.com/video/BV1FL4y1x7MU/?spm_id_from=333.788&vd_source=5f0c99b3deddffe219938763769b15ac
- lapce：https://github.com/lapce/lapce

# 自动化库

## 探索 Habitat：基于 RUST 构建现代化应用的自动化利器

> 在当今快速发展的技术领域，自动化已成为软件开发和部署过程中不可或缺的一部分。Habitat，由 habitat-sh 团队开发的一款开源软件，正是为了应对这一需求而生。本文将带领读者深入了解 Habitat 的核心功能、安装方法以及如何利用它来构建和管理现代化应用程序。

### Habitat 简介

Habitat 旨在创建与平台无关的构建工件，并提供内置的部署和管理功能。它的核心目标是允许开发者在创建应用程序时自动化其行为，并将应用程序与所需的自动化捆绑在一起，以确保在任何部署环境中都能以正确的运行时行为、更新策略、故障处理策略和扩展行为运行。

### 安装 Habitat

Habitat 支持多种操作系统，包括 macOS、Windows 和 Linux。以下是一些常见的安装方法：

- 对于 macOS 用户，如果使用 Homebrew，可以通过以下命令安装 Habitat：

  ```
  brew tap habitat-sh/habitat
  brew install hab
  ```

- Windows 用户如果使用 Chocolatey，可以通过以下命令安装：

  ```
  choco install habitat
  ```

- 对于不使用 Homebrew 或 Chocolatey 的用户，或者 Linux 用户，可以通过运行 Habitat 提供的`install.sh`或`install.ps1`脚本来安装。

### Habitat 的核心组件

Habitat 的代码组织清晰，核心组件包括：

- **Core Plans**：由 Habitat 核心团队构建和维护的计划，位于单独的仓库中。
- **Habitat Supervisor 和其他核心组件**：Habitat Supervisor 和其他核心组件的代码位于`components`目录下。
- **文档**：Habitat 的网站和文档源代码位于 Habitat 源代码的`www`目录中。

### 图表

有助于您和团队更好地理解概念以及它们如何融入更广泛的 Habitat 生态系统的图形。

### Habitat 的定位

![图片](./Rust框架和库.assets/640-9996663333.webp)Habitat流程信息图表

尝试在**官网**[1]上体验互动式信息图表！

### Habitat 的工作原理

- **架构概览**[2]
- **初始包构建流程**[3]
- **应用重建流程**[4]
- **依赖更新流程**[5]
- **通过渠道推广包**[6]

### Habitat 与**Docker**

- **初始 Docker 容器发布流程**[7]
- **自动化 Docker 容器发布流程**[8]

*查看**文档**[9]中的所有图表*

### 培训

*在**学习**[10]中查看所有演示和教程*

### 安装

您可以从**Habitat 下载页面**[11]下载 Habitat。

下载后，请按照页面上针对您特定操作系统的说明进行操作。

如果您使用的是 macOS 并且使用**Homebrew**[12]，您可以使用我们的官方**Homebrew tap**[13]。

```
$ brew tap habitat-sh/habitat
$ brew install hab
```

如果您使用的是 Windows 并且使用**Chocolatey**[14]，您可以安装我们的**chocolatey 包**[15]。

```
C:\> choco install habitat
```

如果您不运行 Homebrew 或 Chocolatey，或者如果您使用的是 Linux，您可以使用 Habitat 的**install.sh**[16]或**install.ps1**[17]脚本。

Bash:

```
$ curl https://raw.githubusercontent.com/habitat-sh/habitat/main/components/hab/install.sh | sudo bash
```

Powershell:

```
C:\> Set-ExecutionPolicy Bypass -Scope Process -Force
C:\> iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/habitat-sh/habitat/main/components/hab/install.ps1'))
```

### 贡献

我们一直在寻找更多社区参与的机会。有兴趣贡献吗？请参阅我们的**CONTRIBUTING.md**[18]开始！

### 文档

从**Habitat 教程**[19]开始，或深入**完整文档**[20]。

### 代码组织

#### 核心计划

由 Habitat 核心团队构建和维护的 Habitat 计划在**他们自己的仓库**[21]中。

#### Habitat Supervisor 和其他核心组件

Habitat Supervisor 和其他核心组件的代码位于**组件目录**[22]。

#### 文档

Habitat 的网站和文档源代码位于 Habitat 源代码的`www`目录中。更多信息请参阅**其 README**[23]。

### 路线图

Habitat 项目的路线图是公开的，位于我们的**社区页面**[24]。

Habitat 核心团队的项目跟踪器也是公开的，位于**Github**[25]。

### 社区和支持

- **Chef 社区 Slack**[26]
- **论坛**[27]
- Chef 社区会议每周四上午 9 点（太平洋时间）。更多信息可在**Chef 社区**[28]的连接部分找到。

### 构建

请参阅**BUILDING.md**[29]，了解有关从源代码构建 Habitat 的特定平台信息。

### 本地包

请参阅**README.md**[30]，了解有关本地包的信息。

### 更多参考资料

- **Rust 编程语言**[31]
- **Rust 示例**[32]
- **Bash 编程入门**[33]
- **高级 Bash 脚本指南**[34]
- **Bash 备忘单**[35]
- **编写健壮的 Bash Shell 脚本**[36]
- **Wikibook: Bourne Shell 脚本**[37]
- [test, [和[**之间的区别是什么？**[38]
- **POSIX Shell 命令语言**[39]

### 行为准则

Habitat 社区的参与受**行为准则**[40]的约束。

### 许可

版权所有 (c) 2016 Chef Software Inc.及/或相关贡献者

根据 Apache 许可证 2.0 版(“许可证”)许可；除非符合许可证规定，否则您不得使用此文件。您可以在

```
 http://www.apache.org/licenses/LICENSE-2.0
```

获取许可证副本。

除非适用法律要求或书面同意，否则根据许可证分发的软件按“原样”分发， 不附带任何明示或暗示的保证。请参阅许可证，了解许可证下的具体语言规定权限和限制。

### 结语

Habitat 作为一个现代化的自动化工具，为开发者提供了强大的支持，使得应用程序的构建、部署和管理变得更加高效和可靠。无论是个人开发者还是企业团队，都可以从 Habitat 中获益，加速开发流程，提高软件质量。探索 Habitat，让你的应用程序开发之旅更加顺畅。

### 参考资料

[1] 官网: *http://habitat.sh#reference-diagram*

[2] 架构概览: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-architecture-overview.png*

[3] 初始包构建流程: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-initial-package-build-flow.png*

[4] 应用重建流程: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-application-rebuild-flow.png*

[5] 依赖更新流程: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-dependency-update-flow.png*

[6] 通过渠道推广包: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-promote-packages-through-channels.png*

[7] 初始 Docker 容器发布流程: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-initial-docker-container-publishing-flow.png*

[8] 自动化 Docker 容器发布流程: *https://github.com/habitat-sh/habitat/raw/main/images/habitat-automated-docker-container-publishing-flow.png*

[9] 文档: *https://www.habitat.sh/docs/diagrams/*

[10] 学习: *https://www.habitat.sh/learn/*

[11] Habitat 下载页面: *https://docs.chef.io/habitat/install_habitat*

[12] Homebrew: *https://brew.sh*

[13] Homebrew tap: *https://github.com/habitat-sh/homebrew-habitat*

[14] Chocolatey: *https://chocolatey.org*

[15] chocolatey 包: *https://chocolatey.org/packages/habitat*

[16] install.sh: *https://github.com/habitat-sh/habitat/blob/main/components/hab/install.sh*

[17] install.ps1: *https://github.com/habitat-sh/habitat/blob/main/components/hab/install.ps1*

[18] CONTRIBUTING.md: *CONTRIBUTING.md*

[19] Habitat 教程: *https://www.habitat.sh/learn/*

[20] 完整文档: *https://www.habitat.sh/docs/*

[21] 他们自己的仓库: *https://github.com/habitat-sh/core-plans*

[22] 组件目录: *https://github.com/habitat-sh/habitat/tree/main/components*

[23] 其 README: *www/README.md*

[24] 社区页面: *https://www.habitat.sh/community/*

[25] Github: *https://github.com/habitat-sh/habitat/projects/1*

[26] Chef 社区 Slack: *https://community-slack.chef.io/*

[27] 论坛: *https://forums.habitat.sh*

[28] Chef 社区: *https://community.chef.io/*

[29] BUILDING.md: *BUILDING.md*

[30] README.md: *https://github.com/habitat-sh/habitat/blob/main/components/hab/src/command/studio/README.md*

[31] Rust 编程语言: *http://doc.rust-lang.org/book/*

[32] Rust 示例: *http://rustbyexample.com/*

[33] Bash 编程入门: *http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html*

[34] 高级 Bash 脚本指南: *http://www.tldp.org/LDP/abs/html/*

[35] Bash 备忘单: *http://tldp.org/LDP/abs/html/refcards.html*

[36] 编写健壮的 Bash Shell 脚本: *http://www.davidpashley.com/articles/writing-robust-shell-scripts/*

[37] Wikibook: Bourne Shell 脚本: *https://en.wikibooks.org/wiki/Bourne_Shell_Scripting*

[38] test, [和[[之间的区别是什么？: *http://mywiki.wooledge.org/BashFAQ/031*

[39] POSIX Shell 命令语言: *http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html*

[40] 行为准则: *https://github.com/habitat-sh/habitat/blob/main/CODE_OF_CONDUCT.md*

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

![图片](./Rust框架和库.assets/640-1714235339031-434.webp)

### autopy 的应用场景

1. 自动化测试：autopy 可以用于自动化测试，对界面进行自动化操作并进行测试用例的编写和执行，节省大量的测试时间和人力成本。
2. 数据录入：autopy 可以用于模拟人工进行数据录入操作，对于需要大量重复性输入的任务来说非常实用。
3. 屏幕操作：autopy 可以对屏幕进行截图、像素级操作等，用于实现一些特殊的屏幕操作需求。
4. 界面交互：autopy 可以模拟用户进行界面操作，用于一些需要自动化进行界面操作的应用程序中。

### autopy 的发展和展望

autopy 作为一个跨平台的 GUI 自动化模块，为 Python 和 Rust 开发人员提供了一种方便、灵活的方式来进行界面自动化操作。随着自动化技术的不断发展，autopy 也将继续完善和扩展，为用户提供更多更强大的功能和接口，满足不同场景下的自动化需求。

总之，autopy 作为一个简单易用、功能强大的 GUI 自动化模块，将会在未来的软件开发和测试领域扮演着越来越重要的角色，为用户提供更好的自动化解决方案。

# HTTP

## reqwest 请求库

待定：[Rust 爱好者看过来，一文带你掌握 HTTP 请求神器 reqwest (qq.com)](https://mp.weixin.qq.com/s/nzmot6nSpR_LGCWtnVuEAQ)

### 引言

在 Rust 生态中，reqwest 可以说是最流行的 HTTP 客户端库了。它提供了一个高层级的、人性化的 API，让我们可以非常轻松地发送各种 HTTP 请求和处理响应。无论是 quickstart、自定义请求头、cookie 管理，还是文件上传，reqwest 都能帮我们优雅地搞定。

### 参考文章

- reqwest 官方文档：https://docs.rs/reqwest
- reqwest 源码：https://github.com/seanmonstar/reqwest

### 创作背景

之前给大家分享过 Python 的 requests 库，感觉用起来非常方便。最近在使用 Rust，发现它的 reqwest 库也同样强大，于是就想深入研究一下，给大家做个介绍。

reqwest 目前最新版本是 0.11.27，在 Cargo.toml 中添加如下依赖即可使用：

```bash
[dependencies]
# reqwest 是一个强大的 Rust HTTP 客户端库
# 通过指定 features 来启用 json 特性
reqwest = { version = "0.11", features = ["json"] }

# tokio 是一个事件驱动的异步 Rust 运行时
# 通过指定 features 为 full 来启用所有功能
tokio = { version = "1", features = ["full"] }
```

### 主要特性

通过查阅 reqwest 的文档和源码，我发现它主要有以下特性：

1. 支持异步和阻塞两种客户端
2. 可以发送纯文本、JSON、表单、多部分等多种类型的请求体
3. 自定义重定向策略
4. 支持 HTTP 代理
5. 默认通过系统原生 TLS 实现 HTTPS（也可选择 rustls）
6. 内置 Cookie 管理
7. 支持 WASM

感觉非常强大，下面我们就用几个简单的例子，快速上手这个库！

### 快速上手

#### 发送一个 GET 请求

首先来看一个最简单的 GET 请求，访问 httpbin.org/ip 接口获取本机 IP：

```rust
use std::collections::HashMap;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 发送 GET 请求
    let resp = reqwest::get("https://httpbin.org/ip").await?;

    // 解析响应的 JSON 数据
    let ip = resp.json::<HashMap<String, String>>().await?;
    println!("我的 IP 是：{:#?}", ip);

    Ok(())
}
```

这段代码中：

1. 通过 reqwest::get 发送一个 GET 请求
2. 通过 resp.json() 将响应解析为 HashMap
3. 打印出解析后的结果

运行后输出：

```bash
我的 IP 是：
{
    "origin": "101.68.212.78"
}
```

是不是非常简单呢？

#### 发送 POST 表单请求

我们再来试试 POST 请求。比如用 reqwest 提交一个登录表单：

```rust
// tokio::main 宏标记 main 函数为异步函数的入口点
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // 调用异步的 login 函数，传入用户名和密码
    // 使用 ? 运算符处理可能出现的错误
    login("albert", "king").await?;
    Ok(())
}

// 定义一个异步函数 login，用于模拟登录功能
// 接收用户名和密码作为参数
// 返回 Result，Ok 为 ()，Err 为 Box<dyn std::error::Error>
async fn login(name: &str, password: &str) -> Result<(), Box<dyn std::error::Error>> {
    // 创建一个 HTTP 客户端
    let client = reqwest::Client::new();

    // 定义表单参数，一个 tuple 数组
    // 分别设置 name 和 password 字段
    let params = [("name", name), ("password", password)];

    // 发送 POST 登录请求
    let resp = client.post("https://example.com/login") // 设置请求 URL
        .form(&params) // 设置表单参数
        .send() // 发送请求
        .await?; // 等待请求完成，使用 ? 处理可能的错误

    // 打印登录请求的响应状态码
    println!("登录完成,状态码：{}", resp.status());

    // 返回 Ok
    Ok(())
}
```

这段代码主要涉及到以下几点：

1. \#[tokio::main] 宏将 main 函数标记为异步运行时的入口点
2. login 是一个异步函数,使用 async fn 定义
3. reqwest::Client 用于创建一个 HTTP 客户端
4. client.post(url) 发起 POST 请求
5. .form(&params) 设置表单参数
6. .send().await 发送请求并等待响应
7. ? 用于处理 Result 中的错误
8. resp.status() 获取响应的状态码

运行后输出：

```bash
登录完成，状态码：404 Not Found
```

通过 client.post("url").form(&params).send() 就可以轻松提交表单了，是不是很优雅？

### 总结

通过上面的介绍和案例，相信大家已经感受到了 reqwest 的强大了。它简单易用，功能强大，在 Rust 的 HTTP 客户端中可以说是首选。如果你也在学习 Rust，不妨试试 reqwest，相信一定会给你惊喜。

> 建议通过运行相关案例学习。案例在 reqwest 仓库中的 examples 文件夹下

# 数据库操作

## SQLite 操作库 Rusqlite

### 文档

Rusqlite Repo: https://github.com/rusqlite/rusqlite

Rusqlite 文档: https://lib.rs/crates/rusqlite

### 引言

你是否还在为 Rust 项目中使用 SQLite 数据库而发愁？还在为其繁琐的 API 和配置而头疼？本文将为大家介绍一个 Rust 语言操作 SQLite 的新选择：Rusqlite。Rusqlite 提供了简洁、易用且高效的 API，使得 Rust 开发者能够轻松地在项目中使用 SQLite 数据库。

### 创作背景

SQLite 是一款轻量级、嵌入式的关系型数据库引擎，因其简单、高效、可靠等特点，在各种类型的软件开发中得到了广泛应用。而 Rust 作为近年来备受关注的系统级编程语言，以其优秀的性能和内存安全性，在系统软件、嵌入式开发、WebAssembly 等领域愈发受到欢迎。

然而，Rust 在 SQLite 数据库操作方面一直缺乏一个足够简洁易用、同时又能保证可靠性和灵活性的成熟库。Rusqlite 项目的出现，正好填补了这一空白，为 Rust 开发者带来了一个高质量的 SQLite 操作方案。

### 主要特性

- 提供符合 Rust 语言习惯的 API 接口
- 支持基本的增删改查和事务等数据库操作
- 提供 Rust 结构体与数据库记录映射的能力
- 支持可扩展的自定义数据类型
- 支持 SQLite 扩展加载与使用
- 支持连接池
- 支持 Bundled 模式，无需额外配置 SQLite 库

### 快速上手

在 `Cargo.toml` 中添加依赖:

```
[dependencies]
rusqlite = "0.28.0"
```

一个简单的查询示例：

```rust
use rusqlite::{Connection, Result};

#[derive(Debug)]
struct Person {
    id: i32,
    name: String,
    age: i32,
}

fn main() -> Result<()> {
    // 打开一个 SQLite 内存数据库连接
    let conn = Connection::open_in_memory()?;

    // 创建 person 表
    conn.execute(
        "CREATE TABLE person (
            id    INTEGER PRIMARY KEY,
            name  TEXT NOT NULL,
            age   INTEGER
        )",
        (), // 参数为空
    )?;

    // 插入数据
    conn.execute(
        "INSERT INTO person (name, age) VALUES (?1, ?2)",
        ("Alice", 18),
    )?;

    // 查询数据
    let mut stmt = conn.prepare("SELECT id, name, age FROM person")?;
    let person_iter = stmt.query_map([], |row| {
        Ok(Person {
            id: row.get(0)?,
            name: row.get(1)?,
            age: row.get(2)?,
        })
    })?;

    // 输出查询结果
    for person in person_iter {
        println!("Found person {:?}", person.unwrap());
    }

    Ok(())
}
```

输出结果：

```bash
Found person Person { id: 1, name: "Alice", age: 18 }
```

### 总结

Rusqlite 为 Rust 开发者操作 SQLite 数据库提供了一种简单高效的方式。其借鉴了其他成熟数据库库的优点，提供了符合 Rust 语言习惯的 API 接口。目前已经相当成熟和完善，可以在实际项目中放心使用。如果你的 Rust 项目中有 SQLite 数据库相关的需求，不妨尝试一下 Rusqlite，相信它带给你的开发体验会让你满意。

## ReadySet：新一代缓存神器 ，加快了数据库查询和读取能力

基于 Rust 开发的 Readyset，是数据库缓存层解决方案，主要是加快查询速度及增强读取操作的水平扩展能力。

### Readyset 介绍

ReadySet 它是 Postgres 和 MySQL 的透明数据库缓存，能够提供内存键值存储的性能和可扩展性，不需要你重写应用程序或手动处理缓存失效。

ReadySet 还可以将你的最复杂的 SQL 读取转换为闪电般的快速查找，使用数据库的复制流自动使缓存的查询结果与数据库保持同步。

### Readyset 与其他缓存区别？

首先，当大家项目查询延迟正在逐渐增加的时候，通常会想到为应用程序的查询添加缓存，来减轻数据库对频繁发出和重度查询的负担。解决方案，可能你会考虑使用 Redis 或 Memcached 等内存键值存储了，做内存缓存的标准方法，但是这种方案会给团队带来这些问题。

![image-20240605135002184](./Rust框架和库.assets/image-20240605135002184.png)

问题1：数据模型不匹配

在构建应用时，一般会用关系数据库和默认的ORM，如果要引入内存键值存储来提高性能时，这时候问题就来了，可能会增加了代码复杂度和维护成本。

- 数据模型不同：关系数据库用表和SQL，键值存储是简单的键值对。
- 需要手动转换：不能通过ORM与缓存通信，要在代码中添加逻辑来填充缓存。
- 增加技术债务：引入缓存使代码复杂，带来技术债务。

问题 2：手动同步两个独立的数据存储的挑战

关于手动同步数据库和缓存涉时，会涉及到数据的一致性、缓存失效策略、性能和实现复杂性等多重挑战。

![image-20240605135023412](./Rust框架和库.assets/image-20240605135023412.png)

- **数据同步问题**：用户在 Web 应用中的交互会导致数据库更新，而缓存可能仍然包含过时的数据，导致不一致性。
- **缓存失效难题**：需要解决缓存数据如何随着数据库变化而更新的问题。
- **TTL方法的局限**：设置缓存的TTL（生存时间）可以定期更新缓存，但可能导致用户等待较长时间才能看到新数据，同时增加了数据库查询量，降低了缓存效率。
- **缓存命中率和性能问题**：频繁更新缓存条目以保持数据新鲜度会降低缓存命中率，影响性能。
- **复杂的缓存失效策略**：可能需要手动在应用代码中添加逻辑来处理缓存条目的删除和重新计算，这增加了实现复杂性。
- **追踪数据来源的困难**：对于复杂的查询，确定哪些缓存条目需要更新是一项困难且容易出错的任务，尤其是当使用ORM时，具体的查询细节可能不够明确。

### Readyset 的亮点

ReadySet 是一种新型查询缓存，它与关系数据库共享数据模型，无需代码更改即可自动同步，提供高性能且无需担心缓存失效，很好的解决传统的缓存问题。

![image-20240605135047156](./Rust框架和库.assets/image-20240605135047156.png)

- **自动同步更新**：利用数据库复制流自动更新缓存，无需手动驱逐或查询。
- **简易缓存配置**：与关系数据库共享数据模型，通过 SQL 命令指定缓存，无需修改代码。
- **增量视图维护**：使用自有查询引擎，后台更新过时结果，不影响性能。

### 参考资料：

- https://github.com/readysettech/readyset
- https://readyset.io/docs/demo

# 数据分析库

## Polars

在数据分析领域，Pandas 可以说是 Python 生态中当之无愧的王者。它以其强大的功能和易用的 API 风靡全球。然而，Pandas 的性能一直饱受诟病，尤其在处理大型数据集时，速度和内存占用都成了制约其发展的瓶颈。

这时候，用 Rust 编写的 Polars 闪亮登场了！它从头设计，充分利用了 Rust 语言的性能优势，在保持高效的同时，还提供了与 Pandas 相似的 API，让你轻松上手。来看看 Polars 的独特魅力吧！

### 参考文章

1. Polars 用户指南：https://docs.pola.rs/
2. Polars GitHub 仓库：https://github.com/pola-rs/polars
3. Polars.rs 公司信息：https://pola.rs/posts/company-announcement/

### 开发背景

Polars 最初由 Ritchie Vink 开发，他是一名经验丰富的数据科学家和软件工程师。在使用 Pandas 多年后，Ritchie 意识到了它在处理大型数据集时的性能瓶颈。为了解决这个问题，他决定用 Rust 从头开发一个新的数据处理库，充分利用 Rust 的高性能和内存安全性。

Ritchie 在 2020 年初启动了 Polars 项目，最初是一个兼职项目。但随着项目的不断成熟和社区的关注，他在 2021 年开始全职开发 Polars。目前，Polars 已经成为 Rust 生态中最活跃的项目之一，吸引了众多开发者的贡献。

Ritchie 还创立了 Pola.rs 公司，致力于为 Polars 提供商业支持和咨询服务，帮助企业客户解决大规模数据处理的难题。目前其公司正在招聘 Rust 工程师：https://hiring.pola.rs/o/rust-software-engineer

### 主要特性

1. 高性能：完全用 Rust 从头编写，发挥机器性能，且没有外部依赖。
2. 多种接口：提供 Python、NodeJS、R 等多语言接口，Rust 开发者可以直接使用原生库。
3. 符合直觉的 API：以你想要的方式写查询，Polars 会在内部通过查询优化器找到最高效的执行方式。
4. 超大数据支持：流式 API 可以让你处理大于内存的数据，无需一次性全部加载。
5. 并行：无需额外配置，自动利用全部 CPU 核心，将工作负载分配到可用的 CPU 上。
6. 向量化查询引擎：使用 Apache Arrow 列式存储，进行向量化查询处理，并通过 SIMD 优化 CPU 利用率。

### 快速上手

#### Python 使用

安装 Polars：

```bash
pip install polars
```

使用示例：

```rust
import polars as pl

# 创建示例 DataFrame
df = pl.DataFrame({
    "name": ["张三", "李四", "王五", "赵六"],  # 姓名列
    "age": [18, 21, 35, 40],                # 年龄列
    "income": [5000, 6000, 8000, 10000]     # 收入列
})

# 使用惰性查询筛选数据
# 筛选条件：age 大于 20 且 income 大于 6000 的行
(df
  .lazy()                    # 创建惰性查询
  .filter(                   # 筛选数据
      (pl.col("age") > 20)     # 年龄大于 20
      & (pl.col("income") > 6000)  # 且收入大于 6000
  )
  .collect()                 # 执行查询，收集结果
)
```

输出：

```bash
shape: (2, 3)
┌──────┬─────┬────────┐
│ name ┆ age ┆ income │
│ ---  ┆ --- ┆ ---    │
│ str  ┆ i64 ┆ i64    │
╞══════╪═════╪════════╡
│ 王五 ┆ 35  ┆ 8000   │
│ 赵六 ┆ 40  ┆ 10000  │
└──────┴─────┴────────┘
```

解释：

1. 首先，我们用包含姓名、年龄、收入三列的字典创建了一个示例 DataFrame。
2. 然后，我们使用 `.lazy()` 方法将其转换为惰性查询，惰性查询允许我们建立复杂的查询管道，而无需立即执行。
3. 接着，`.filter()` 方法用于筛选数据，我们传入了一个布尔表达式作为筛选条件。
4. 其中，`pl.col("age") > 20` 选择 `"age"` 列并检查其值是否大于 20，`pl.col("income") > 6000` 选择 `"income"` 列并检查其值是否大于 6000。
5. 两个条件用 `&` 运算符连接，表示「且」的关系，即年龄大于 20 且收入大于 6000。
6. 最后，`.collect()` 方法触发实际的查询执行，将结果收集为一个新的 DataFrame。

#### Rust 使用

设置其 `Cargo.toml` 文件为：

```rust
[package]
name = "polars_demo"
version = "0.1.0"
edition = "2024"

[dependencies]
polars = { version = "0.38.2", features = ["lazy"]}
```

对应的 Rust 代码：

```rust
use polars::prelude::*;

fn main() -> PolarsResult<()> {
    // 用 df! 宏创建示例 DataFrame
    let df = df![
        "name" => ["张三", "李四", "王五", "赵六"],
        "age" => [18, 21, 35, 40],
        "income" => [5000, 6000, 8000, 10000]
    ]?;

    // 使用惰性查询筛选数据
    // 筛选 age 大于 20 且 income 大于 6000 的行
    let filtered = df.lazy()
        .filter(
            col("age").gt(lit(20))       // 年龄大于 20
            .and(col("income").gt(lit(6000)))  // 且收入大于 6000
        )
        .collect()?;

    dbg!(filtered);  // 打印筛选后的 DataFrame

    Ok(())
}
```

输出：

```bash
[src\main.rs:20:5] filtered = shape: (2, 3)
┌──────┬─────┬────────┐
│ name ┆ age ┆ income │
│ ---  ┆ --- ┆ ---    │
│ str  ┆ i32 ┆ i32    │
╞══════╪═════╪════════╡
│ 王五 ┆ 35  ┆ 8000   │
│ 赵六 ┆ 40  ┆ 10000  │
└──────┴─────┴────────┘
```

解释：

1. 首先，我们使用 `df!` 宏来方便地创建示例 DataFrame，列名作为键，列数据作为值。
2. 接着，我们在 DataFrame 上调用 `.lazy()` 方法，创建一个惰性查询构建器。
3. 然后，使用 `.filter()` 方法筛选数据，传入一个布尔表达式作为筛选条件。
4. 其中，`col("age").gt(lit(20))` 选择 `"age"` 列，并用 `gt`（greater than）方法检查其值是否大于 20。`col("income").gt(lit(6000))` 选择 `"income"` 列，检查其值是否大于 6000。
5. 两个条件通过 `.and()` 方法连接，表示「且」的关系。
6. 最后，`.collect()` 方法执行实际的查询，将结果收集到 `filtered` 变量中。
7. 我们使用 `dbg!` 宏打印出筛选后的 DataFrame。

### **总结**

Polars 是一个强大的数据处理库，它继承了 Rust 高性能、内存安全的优点，又对 Python 开发者提供了友好的接口，是你从 Pandas 进阶的不二之选。面对大型数据集时，Polars 更能一展身手，用并行、向量化、流式处理为你加速。

赶快来试试 Polars 吧，开启高性能数据处理之旅！

# 音视频

## XIU：简单和安全的流媒体服务器

GitHub：https://github.com/harlanc/xiu

XIU是用纯Rust开发的一款简单和安全的流媒体服务器，目前支持的流媒体协议包括RTMP[cluster]/RTSP/WebRTC[Whip/Whep]/HLS/HTTPFLV。

- 支持多平台（Linux/Mac/Windows）
- 支持RTMP

- 支持发布和订阅H264/AAC 直播流；

- 支持秒开（Gop cache）；

- 支持转换到HLS/HTTP-FLV协议；

- 支持部署集群；

- 支持RTSP

- 支持通过TCP（Interleaved）和UDP发布或订阅H.265/H.264/AAC流；

- 支持转换到RTMP/HLS/HTTP-FLV协议；

- 支持WebRTC（Whip/Whep）

- 支持使用Whip发布rtc流；

- 支持使用Whep订阅rtc流；

- 支持转换到RTMP/HLS/HTTP-FLV协议；

- 支持订阅HLS/HTTPFLV直播流
- 支持命令行或者配置文件配置服务
- 支持HTTP API/notify

- 支持查询流信息；

- 支持流事件通知；

- 支持token鉴权
- 支持把直播流录制成HLS协议(m3u8+ts)文件

# 搜索引擎

## Tantivy：使用 Rust 编写的快速全文搜索引擎库

GitHub：https://github.com/quickwit-oss/tantivy

Tantivy 是一个用 Rust 编写的搜索引擎库，其灵感来自于 Lucene。

得益于 Rust 语言加持，Tantivy 性能比 Lucene 要好得多

![img](./Rust框架和库.assets/014321_qdat_12.png)

主要特性：

- 全文搜索
- 可配置的分词器，支持 17 种语言词干，包括中文、日文和韩文
- 速度非常快 (check out the 🐎 ✨ [benchmark](https://tantivy-search.github.io/bench/) ✨ 🐎)
- 启动时间极短 (<10ms), perfect for command-line tools
- BM25 评分 (与 Lucene 相同)
- 自然查询语言 (e.g. `(michael AND jackson) OR "king of pop"`)
- 短语查询搜索 (e.g. `"michael jackson"`)
- 增量索引
- 多线程索引
- Mmap 目录
- SIMD 整数压缩，支持 SSE2 指令集
- 快速的单值和多值 u64, i64, f64 字段 (等同于 lucene 中的 doc values)
- `&[u8]` fast fields
- Text, i64, u64, f64, dates, and hierarchical facet fields
- LZ4 压缩文档存储
- 范围搜索
- Faceted 搜索
- 可配置的索引
- JSON 字段
- 聚合收集器，包括 range buckets, average, and stats metrics
- LogMergePolicy with deletes
- Searcher Warmer API
- Cheesy logo with a horse

### Tantivy vs Apache Lucene

Apache Lucene 一直是全文搜索领域的先驱者，但随着技术的进步，新兴的搜索引擎库 Tantivy 崭露头角，展现出无可匹敌的性能和优势。现在，让我们深入探讨为什么你应该转向使用 Tantivy，这个被誉为下一代搜索引擎的强大库。

Tantivy，被设计为 Apache Lucene 的现代替代产品，它在多个关键领域展现了比 Lucene 更优越的特性。下面是一些主要对比：

- **编程语言**：Tantivy 是用 Rust 编写的，这是一种速度极快、内存安全的系统编程语言，相比 Java 编写的 Lucene，在处理并发和内存管理上有着显著的优势。
- **性能**：Tantivy 利用 Rust 的性能优势，拥有更快的索引构建速度和搜索响应时间，在高并发场景下表现更加出色。
- **内存占用**：在内存管理方面，Tantivy 展现出更为优雅和高效的数据结构处理，降低了系统资源的消耗。
- **易用性**：Tantivy 旨在简化搜索引擎的复杂性，提供了更为直接的 API 和更少的配置需求，使得开发者可以更快速地整合和使用。

### Tantivy 的实现原理和优势特性

Tantivy 在实现上采用了诸多现代化的技术和设计，使得它在全文搜索领域大放异彩。接下来将详细探索这些特性和实现方式。

#### 索引与查询处理

Tantivy 对索引的处理非常高效。采用了倒排索引，让文档检索更快。支持增量索引，无需重建整个索引即可更新，大大节省了时间和资源。

#### 多语言支持

借助 Rust 强大的生态系统，Tantivy 能够通过 plugins 支持多种语言分析器，比如 `tantivy-jieba` 针对中文文本，而 Lucene 需要额外的插件或配置。

#### 高效的存储结构

Tantivy 使用了一系列高效的数据存储结构，包括存放文档数据的 doc store 和用于快速检索键值对的 FAST 字段索引。

#### 强大的搜索功能

语法高亮、拼写检查和查询解析，这些易用但强大的功能统统包含在 Tantivy 之中。

### 如何开始使用 Tantivy

这里将提供一个如何开始使用 Tantivy 的快速指南：

**1.安装 Rust**

安装最新版本的 Rust 开发环境。

**2.创建项目**

通过 Cargo 新建一个 Rust 项目。

```bash
cargo new tantivy_project
cd tantivy_project
```

**3.添加依赖**

在 Cargo.toml 文件中加入 Tantivy 作为依赖。

```bash
[dependencies]
tantivy = "0.22"
```

**4.编写索引和搜索代码**

使用 Tantivy 构建索引，执行搜索，并管理结果。

```rust
// 以下代码展示了一个构建索引并进行搜索的示范：

// 载入 Tantivy 库
extern crate tantivy;
use tantivy::schema::{Schema, TEXT};
use tantivy::{Index, doc};

fn main() -> tantivy::Result<()> {
   // 定义 Schema
   let mut schema_builder = Schema::builder();
   schema_builder.add_text_field("title", TEXT);
   schema_builder.add_text_field("body", TEXT);
   let schema = schema_builder.build();

   // 创建索引
   let index = Index::create_in_ram(schema.clone());

   // 添加文档到索引中
   let mut index_writer = index.writer(50_000_000)?;
   index_writer.add_document(doc!(
       schema.get_field("title").unwrap() => "The Old Man and the Sea",
       schema.get_field("body").unwrap() => "He was an old man who fished alone in a skiff in the Gulf Stream and he had gone..."
   ));
   index_writer.commit()?;

   // 搜索
   let reader = index.reader()?;
   let searcher = reader.searcher();
   let query_parser = tantivy::query::QueryParser::for_index(&index, vec![schema.get_field("title").unwrap()]);
   let query = query_parser.parse_query("old man")?;
   let top_docs = searcher.search(&query, &tantivy::collector::TopDocs::with_limit(10))?;

   // 打印搜索结果
   for (_, doc_address) in top_docs {
       let retrieved_doc = searcher.doc(doc_address)?;
       println!("{}", schema.to_json(&retrieved_doc));
   }

   Ok(())
}
```

**5.编译并运行项目**

运行 `cargo run` 编译并启动你的项目。

### Tantivy 的应用场景和前景

Tantivy 的性能和易用性使其成为不同应用场景下理想的全文搜索引擎库。无论是在日益增长的日志分析领域、需要处理文档和文本搜索的内容管理系统、还是对搜索性能要求极高的电子商务平台，Tantivy 都能够提供强大的支持。

Tantivy 不仅适合用于小到中型的项目开发，它强大的性能与 Rust 的内存安全性使其也非常适合大型、高性能要求的商业环境。随着 Rust 社区的发展和成熟，Tantivy 有望在未来成为全文搜索领域的领军者。

虽然 Apache Lucene 占有了长期的市场主导地位，但是 Tantivy 作为下一代搜索引擎的杰出代表，其高效的性能、现代化的设计以及良好的用户体验，无疑指引了搜索技术的新方向。现在是时候放下老旧的 Lucene，拥抱速度和效率并存的 Tantivy 了。

# AI|机器学习|深度学习

## ndarray

ndarray 是 NumPy 库中的一个核心数据结构，它是一个用于表示多维数组的对象。ndarray 在存储和操作大型多维数组时非常高效，广泛应用于科学计算、数据分析、机器学习等领域。

在 Rust 开发中，ndarray 库可以作为替代  NumPy 库。

Github 地址：https://github.com/rust-ndarray/ndarray

## Polars

可以作为替代 Python 中 pandas 库，Polars 是个开源的数据处理库，提供快速和灵活的数据处理能力，尤其处理大型数据集时。Polars 的设计目标是提供类似于 Pandas 的 API，但利用 Rust 的性能优势来提高数据处理的速度。

Github 地址：https://github.com/pola-rs/polars

## tch-rs

tch-rs 是一个使得 Rust 能够与 PyTorch 框架结合的工具，扩展了 Rust 在机器学习和深度学习领域的应用能力。广泛用于计算机视觉和自然语言处理等研究和应用领域，tch-rs 允许 Rust 开发者利用 PyTorch 的功能，进行深度学习模型的开发和部署。

Github 地址：https://github.com/LaurentMazare/tch-rs

## Burn

Burn 是一个新的综合动态深度学习框架，使用 Rust 构建，以极高的灵活性、计算效率和可移植性作为其主要目标。这个库之前也推荐过，非常值得去关注。

Github 地址：https://github.com/tracel-ai/burn

## Candle

Candle 是由 Hugging Face 开发的 Rust 语言机器学习框架。主要是为 Rust 开发者在机器学习领域提供了新的工具，使得构建和部署机器学习应用变得更加容易。

- **极简设计**：提供简洁的 API，易于使用。
- **高性能**：利用 Rust 语言的性能优势。
- **易用性**：API 设计借鉴了 PyTorch，降低学习成本。
- **灵活性**：支持多种后端，方便在不同环境中部署。
- **安全性**：Rust 语言保证了内存安全和线程安全。

GIthub 地址：https://github.com/huggingface/candle

## Linfa

linfa 提供一个全面的工具包来使用 Rust 构建机器学习应用程序。类似 Python 的scikit-learn 库，专注于日常 ML 任务的常见预处理任务和经典 ML 算法。

GIthub 地址：https://github.com/rust-ml/linfa

## plotters

Plotters 是一个绘图库，设计用于用纯 Rust 渲染图形、绘图和图表，支持各种类型的后端，包括位图、矢量图、活塞窗口、GTK/Cairo 和 WebAssembly。类似 Python 的 matplotlib 库。

Github 地址：https://github.com/plotters-rs/plotters

## petgraph

petgraph 是一个图数据结构库，图是节点以及节点之间的边的集合。petgraph 提供了多种图形类型、这些图形的算法以及以格式输出图形 graphviz 的功能。

Github 地址：https://github.com/petgraph/petgraph

## tensorflow-rust

TensorFlow 的 Rust 语言绑定，允许 Rust 开发者使用 TensorFlow 的机器学习框架。

Github 地址：https://github.com/tensorflow/rust

## Mistral.rs：使用 Rust 语言赋能的 LLM 加速平台

GitHub：https://github.com/EricLBuehler/mistral.rs

在今日充满挑战的人工智能领域，让大模型（Large Language Models, LLMs）如风驰电掣般快速推理，已成为一个越来越被重视的议题。

EricLBuehler 的开源项目——Mistral.rs，正是在这一背景下应运而生的。Mistral.rs 不仅仅是又一个 LLM 推理平台，它是基于纯 Rust 实现，安全、快速和高效。本文将为你深入解读 Mistral.rs，从它的设计理念、核心功能、到实际的使用指南。

### Mistral.rs 的设计理念与核心功能

Mistral.rs 秉承着高速推理的目标，采用纯 Rust 语言编写，确保了代码的执行效率和安全性。它具备以下核心功能：

- **高效的性能：**采用了每个序列的 KV 缓存管理技术，以及追赶（catch-up）技术，使得推理过程极其快速。
- **多种量化支持：**提供了 2-bit 到 8-bit 的量化选项，优化了内存使用，同时保证了推理速度。
- **第一个支持 X-LoRA 的平台：**Mistral.rs 是首个为 X-LoRA 提供一流支持的推理平台，通过细节优化和算法升级，让 X-LoRA 的运行更高效。
- **兼容 OpenAI 的 HTTP 服务器：**提供了轻量级且与 OpenAI API 兼容的 HTTP 服务器，使得与其他系统的集成变得容易。
- **跨平台和跨语言支持：**不仅支持 Apple silicon 的 Metal 框架，还提供了方便的 Python API，使得在不同平台和语言间使用变得无缝。

### 实践指南：搭建与运行 Mistral.rs 服务

让我们来看一下如何搭建并运行 Mistral.rs 服务。首先，你需要确保已经安装了 Rust 环境。Mistral.rs 的安装过程简单直接——克隆项目、构建，并运行。

```bash
sudo apt update -y
sudo apt install libssl-dev -y
sudo apt install pkg-config -y
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

git clone https://github.com/EricLBuehler/mistral.rs.git
cd mistral.rs
mkdir ~/.cache/huggingface
touch ~/.cache/huggingface/token
echo <HF_TOKEN_HERE> > ~/.cache/huggingface/token
cargo build --release --features cuda
```

构建完成后，你可以使用以下命令来启动服务：

```bash
./mistralrs-server --port 1234 --log output.log mistral
```

此外，Mistral.rs 支持很多高级功能，如为 X-LoRA 模型准备排序文件、运行量化 X-LoRA 模型等。详细信息可参考官方文档。

### 性能基准与实用示例

Mistral.rs 的性能基准数据十分令人印象深刻。例如，在使用 A6000 GPU，8-bit 量化，以 prompt tokens 为 27，completion tokens 为 64 的设置下，其速度达到了 3.13 tok/s；而在 A10 GPU 上的性能更是达到了 32.16 tok/s。

为了展示 Mistral.rs 的使用效果，以下是一个简单的实用示例：

```bash
./mistralrs-server --port 1234 x-lora-mistral -o x-lora-orderings/default-ordering.json
```

通过这个命令，你可以启动一个服务，运行默认权重和排序的 X-LoRA 模型。

### 结论

Mistral.rs 以其卓越的设计、强大的功能和惊人的性能，为 LLM 推理平台设置了新的标准。无论是对于研究人员还是工程师，Mistral.rs 都提供了一个高效、便捷的解决方案，以期在这个快速发展的人工智能领域脱颖而出。随着更多即将推出的功能，如 Falcon 模型和软件内核融合，我们有理由相信，Mistral.rs 将继续引领 LLM 推理技术的未来发展。

### 性能

[1 元=1700000tokens！清华系发布国产 Mistral 仅 2B，老手机都带得动，GitHub 一天斩获 300+星 (qq.com)](https://mp.weixin.qq.com/s/tLjETnaLWrrvimUPDcS2yA)

[Mistral 7B v0.2 基础模型开源，魔搭社区微调教程和评测来啦！ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/689043863)

## Luminal：基于Rust语言编写的深度学习库

**GitHub 地址**：https://github.com/jafioti/luminal

Luminal 是一个深度学习库，它使用可组合编译器来实现高性能。

### 功能特性：

#### 速度

Luminal 可以在 m 系列 macbook 上以每秒 15-25 个 token 的速度运行 Q8 Llama 38b。我们的目标是成为任何设备上任何模型最快的 ML 框架。

#### 简单

luminal 的核心始终是最小的。应该有可能在一个下午了解整个核心库。

#### RISC-style 架构

luminal 中的所有内容都可以归结为 11 个基本操作：

- Unary - Log2, Exp2, Sin, Sqrt, Recip
- Binary - Add, Mul, Mod, LessThan
- Other - SumReduce, MaxReduce, Contiguous

这些操作足以支持 transformers，卷积神经网络等。

#### 原生

当前的机器学习生态系统过于分散，解决方案不是另一个抽象层。Luminal 是用 rust 编写的，并直接与 CUDA / Metal api 交互。没有间接或抽象、docker 容器或虚拟环境。只是一个静态连接的 rust crate。

### Luminal简介

Luminal是一个以Rust语言编写的深度学习库，其核心优势在于执行静态计算和运算符融合，以实现高性能。不同于其他大多数以动态执行（eager execution）为主的深度学习库，Luminal采用的是静态计算图（computation graph），所有的操作都会记录到一个有向无环图中，在优化和执行这个图之前，并不会进行任何实际的计算。

### Luminal的工作方式

在Luminal中，当你编写一个表达式如 `x + y` 时，并不会立即进行计算。这个操作仅仅是记录下来，等待后续的执行。正因为所有的操作都是静态定义的，这让我们在构建整个神经网络时可以有全局的优化视角，允许我们进行更加激进的优化，而不需要任何同步点。

### 开始使用Luminal

首先，你需要安装Rust语言环境，然后通过执行以下命令来安装Luminal库：

```bash
cargo run --example simple
```

或者可以运行如下命令来开始生成文本：

```bash
bash examples/llama/setup/setup.sh
cargo run --release --example llama
```

### 使用Luminal构建神经网络

以下是一个Luminal程序的示例，它展示了如何设置计算图和张量，以及如何执行基本的矩阵乘法操作。

```rust
use luminal::prelude::*;

// 设置图和张量
let mut cx = Graph::new();
let a = cx.new_tensor::<R2<3, 1>>("A");
let b = cx.new_tensor::<R2<1, 4>>("B");

// 执行操作...
let c = a.matmul(b);

// 设置输入并标记输出
a.set(vec![1.0, 2.0, 3.0]);
b.set(vec![1.0, 2.0, 3.0, 4.0]);
c.mark();

// 优化并运行图
cx.optimize(GenericOptimizer::default());
cx.execute();

// 获取结果
println!("Result: {:?}", c.retrieve().unwrap().data);
```

这个例子非常简单，但却能够让我们看到Luminal的基本使用方法：首先是创建计算图和相关的张量，然后执行计算，并通过优化和执行计算图来得到结果。

### Luminal的未来

尽管目前Luminal还处在非常初级的阶段，它的设计理念和革新性的性能优化方法已经显示了其巨大的潜力。开发团队目前正在致力于实现包括公共CUDA操作和自动图形微分在内的多项优化和功能扩展。

# AI调用库

## llm_utils - Rust 中调用大模型

可集成调用Llama.cpp, Openai, Anthropic, Mistral-rs， 也可以直接下载HuggingFace上的GGUF量化模型并进行推理。

GitHub：https://github.com/shelbyJenkins/llm_utils

## Fireside Chat

github链接：https://github.com/danielclough/fireside-chat

一个用纯Rust实现的LLM接口，在Axum Websockets上使用HuggingFace/Candle，使用SQLite数据库和一个用Tauri封装的Leptos (Wasm)前端！

这个项目是为单用户和多用户聊天而设计的，使用许多大型语言模型(LLMs)。具有本地或远程推理后端，使用本地SQLite数据库。

# 业务开发库

## miette：强大且灵活的诊断库

miette是一个基于Rust的强大且灵活的诊断库，它让你的错误报告既美观又实用。通过它的特性，你可以轻松地创建结构化、富含上下文信息的错误类型，并以一种友好的方式呈现给开发者。

miette的核心是Diagnostic，与std::error::Error兼容，与thiserror兼容。

项目地址：https://github.com/zkat/miette

使用场景包括但不限于：

- REPL交互执行过程中，打印出友好的错误提示
- SQL解析阶段，友好地标记出SQL中潜在的错误
- 编译语言时给出错误诊断信息

下面是使用miette诊断的输出效果：

![image-20240605135546106](./Rust框架和库.assets/image-20240605135546106.png)

## tabled

tabled是一个以表格方式打印struct和enum的库，让数据展示变得简单而美观。

特点：

- 只需少量代码即可将struct数据结构转换为漂亮的表格
- 除了文本格式，还支持JSON、CSV、HTML等，便于和其它系统集成
- 能进行深度定制，包括边框样式、填充色、对齐方式等

应用场景包括但不限于：

- 日志记录
- 数据分析
- CLI交互工具

项目地址：https://gitcode.com/zhiburt/tabled

下面是使用tabled的效果：

![image-20240605135613486](./Rust框架和库.assets/image-20240605135613486.png)

**rustyline**

rustyline是一个使用rust编写的命令行工具库，提供了丰富的功能，旨在帮助开发者轻松创建交互式CLI应用程序。

特点：

- 通过注册回调函数，rustyline可以根据用户输入提供实时的建议或补全提示。
- 保存用户的输入历史，并支持浏览历史记录
- 高度可定制，开发者可以根据需要自定义输入行为
- 易于集成，它是一个单独的库，可以添加到任何的Rust项目中

项目地址：https://github.com/kkawakam/rustyline

下面是使用rustyline创建的简单的交互工具的效果：

![image-20240605135631827](./Rust框架和库.assets/image-20240605135631827.png)

## serde

serde是rust实现的一个非常高效的序列化和反序列化库。rust数据结构通过实现serde的Serialize和Deserialize接口来实现序列化功能。支持的数据格式如下：

- json
- bincode
- yaml
- toml
- pickle
- bson
- avro
- url
- 还有好多其它的格式

项目地址：https://github.com/serde-rs/serde

下面使用serde将结构体序列化为json，并将json反序列化为结构体：

![image-20240605135659498](./Rust框架和库.assets/image-20240605135659498.png)

## bigdecimal

rust实现的用于计算任意十进制精度的库，默认支持100位的精度，可以通过RUST_BIGDECIMAL_DEFAULT_PRECISION修改。

项目地址：https://github.com/akubera/bigdecimal-rs

下面是使用bigdecimal计算开根号的例子：

![image-20240605135719424](./Rust框架和库.assets/image-20240605135719424.png)

## derive_more

derive_more可以轻松派生更多的trait，而不用去写一大堆重复的代码，它是对标准库derive的扩展。

项目地址：https://github.com/JelteF/derive_more

下面是使用案例：

```rust
use derive_more::{

    Add, AddAssign, Constructor, Deref, DerefMut, Display, From, FromStr, Index, IndexMut, Into,

    IsVariant, Mul, MulAssign, Not, TryInto,

};



#[derive(

    Add, AddAssign, Constructor, Display, From, FromStr, Into, Mul, MulAssign, Not, Clone, Copy,

)]

pub struct MyInt(i32);



#[derive(Deref, DerefMut)]

pub struct MyBoxedInt(Box<i32>);



#[derive(Index, IndexMut)]

pub struct MyVec(Vec<i32>);



#[derive(Clone, Copy, TryInto, IsVariant)]

enum MixedInts {

    SmallInt(i32),

    NamedBigInt { int: i64 },

}

fn main() {

    let a = MyInt(1000);

    let b = MyInt(20);

    let c = a + b;

    println!("{a} + {b} = {c}");

}
```

输出：

![image-20240605135807007](./Rust框架和库.assets/image-20240605135807007.png)

## thiserror

在rust中，经常使用Result和Option来处理错误，有些场景下可能需要自定义错误类型，这种场景就是thiserror库发挥作用的地方了，使用它可以极大地简化代码。

项目地址：https://github.com/dtolnay/thiserror

使用示例:

```rust
// 动态错误类型

fn self_error_type2() {

    // 自定义错误类型的定义

    #[derive(ThisError, Debug)]

    pub enum MyError {

        // FailedWithCode 的错误描述，其中 {0} 会被动态地替换为具体的代码值

        #[error("failed with code: {0}")]

        FailedWithCode(i32),

    }

    //

    fn process_data(error_code: i32) -> Result<(), MyError> {

        // 使用动态的 error_code 创建 FailedWithCode 错误

        Err(MyError::FailedWithCode(error_code))

    }

    let result = process_data(404);

    println!("result:{:?}", result);

    let result: Result<(), MyError> = process_data(500);

    println!("result:{:?}", result);

    let result = process_data(403);

    println!("result:{:?}", result);

    let result = process_data(503);

    println!("result:{:?}", result);

}
```

输出如下所示：

```bash
```

## Untwine：声明式解析库

GitHub：https://github.com/boxbeam/untwine

Untwine是一个声明性解析库，它允许一种类似于使用自定义宏语法进行直接模式匹配的解析风格。这允许创建具有良好性能特征和高质量错误消息的极其紧凑的解析器。这些解析器实现起来很简单，有几个精心挑选的例子：

- 一个几乎完整的JSON解析器，包含12行解析逻辑
- 支持除特殊转义序列之外的所有基本JSON功能（除“）
- 一个在6行解析逻辑中具有四运算表达式解析器的pmdas
- 一个辅助函数对两个数字进行运算

使用untwine制作的解析器也有高质量的错误消息，可以直观地显示错误和相关语法。

```rust
fn operate(left: f64, op: char, right: f64) -> f64 {
    match op {
        '+' => left + right,
        '-' => left - right,
        '/' => left / right,
        '*' => left * right,
        _ => unreachable!(),
    }
}

parser! {
    sep = #{char::is_ascii_whitespace}*;
    num: num=<"-"? '0'-'9'+ ("." '0'-'9'+)?> -> f64 { num.parse().unwrap() }
    term = (num | "(" sep expr sep ")") -> f64;
    add: first=mul sep ops=(["+-"] sep mul)* -> f64 { ops.into_iter().fold(first, |left, (op, right)| operate(left, op, right)) }
    mul: first=term sep ops=(["*/"] sep term)* -> f64 { ops.into_iter().fold(first, |left, (op, right)| operate(left, op, right)) }
    pub expr = add -> f64;
}
```



# 区块链

[rust-in-blockchain/awesome-blockchain-rust：在 Rust 中收集有关区块链/密码学的库和包 (github.com)](https://github.com/rust-in-blockchain/awesome-blockchain-rust)

# 嵌入式

## embassy：嵌入式异步开发框架

### Embassy 什么？

Embassy 它是一个用 Rust 语言实现的现代嵌入式异步开发框架，它致力于让 async/await 模式成为嵌入式编程的首选。该框架可以看作是嵌入式版本的 Tokio，后者是 Rust 在服务器端异步编程中广泛使用的运行时环境。

Embassy 也是未来嵌入式应用程序的下一代框架，采集了 Rust 编写、其异步功能和 Embassy 库，从而更快地编写安全、正确且节能的嵌入式代码。

### Rust + async ❤️ 嵌入式

大家都知道，Rust 是一种速度极快、内存效率极高的编程语言，它不需要运行时、垃圾收集器或操作系统的介入。Rust 的内存安全保证和强大的类型系统能够在编译时期捕捉各种潜在错误，从而减少运行时的问题。

那么，在嵌入式系统中，Rust 的 async/await 特性使得多任务处理变得异常简单和高效，异步任务在编译时被转换成状态机，避免了动态内存分配的需求，并且所有任务都在单个堆栈上运行，无需担心堆栈大小调整的问题。这种设计消除了传统实时操作系统（RTOS）所需的内核上下文切换，使得系统运行更快、占用空间更小。

### Embassy 框架特点

- **专用硬件抽象层（HAL）**：Embassy 拥有为嵌入式设备定制的硬件抽象层，这有助于简化硬件交互，并为开发者提供一致的接口。
- **统一的 STM32 支持**：给所有受支持的 STM32 设备提供统一的 API 和单一库，使得与 STM32 系列微控制器的接口和操作更加直接和高效了。
- **统一 API**：Embassy 旨在为所有支持的 STM32 设备提供统一的应用程序接口（API）。这种方法简化了跨不同 STM32 设备的代码移植和适配，因为开发者可以依赖一致的编程模型。
- **独立使用**：通过使用独立的 metapac crate 作为单独的库使用，好处就是不用 Embassy 的异步框架或 HAL，开发者也可以根据自己的需求利用 metapac 进行硬件抽象。
- **低功耗就绪**：让你轻松构建具有多年电池寿命的设备，当没有工作要做时，异步执行器自动将核心置于睡眠状态。任务由中断唤醒，等待时没有忙碌循环轮询。
- **蓝牙**：nrf-softdevice crate 为 nRF52 微控制器提供了蓝牙低功耗 4.x 和 5.x 支持。embassy-stm32-wpan crate 为 stm32wb 微控制器提供了蓝牙低功耗 5.x 支持。
- **网络**：embassy-net 网络栈实现了广泛的网络功能，包括如以太网、IP、TCP、UDP、ICMP 和 DHCP。

更多的详细信息，可以到GIthub或官网进行学习和实践，你会获取更多提升。

### 参考资料：

- GIthub地址：https://github.com/embassy-rs/embassy
- 官网地址：https://embassy.dev/

# 测试

## Nextest：下一代 Rust 测试加速神器

- Nextest 官网文档：https://nexte.st/
- Nextest GitHub 仓库：https://github.com/nextest-rs/nextest

### 引言

如果你是一名 Rust 开发者，那么一定经常在项目中编写和运行测试。Rust 自带的 `cargo test` 命令虽然好用，但在大型项目中运行效率不够理想。今天给大家介绍一个超级强大的 Rust 测试运行工具：Nextest。用上它，让你的 Rust 项目测试速度嗖嗖的~

### 创作背景

最近，我在 GitHub 上发现了一个优秀的开源测试工具 cargo-nextest，它是 Rust 生态中 `cargo test` 的升级版本。相比原生的 `cargo test`，Nextest 有许多优势：

- 美观易读的测试结果输出
- 运行速度比 `cargo test` 快 2-3 倍
- 支持检测慢测试、泄漏测试，并能自动终止超时的测试用例
- 允许使用灵活的过滤表达式来筛选测试集
- 能配置单独测试的重试、权重、串行运行等
- 专为 CI 流程优化，支持缓存构建、并行测试等
- 跨平台，Linux、macOS、Windows 全都支持
- ……

看完这些特性，是不是已经跃跃欲试了呢？下面就给大家分享如何快速上手使用 Nextest 来加速 Rust 项目的测试。

### 主要特性

#### 美观易读的测试结果

Nextest 提供了简洁美观的测试结果输出，你可以一目了然地看到哪些测试通过了，哪些失败了。例如：

![图片](./Rust框架和库.assets/640-1714650959113-58.webp)nextest-output

#### 检测慢测试和泄漏测试

使用 Nextest，你可以轻松找出项目中的慢测试、泄漏测试，并设置超时时间，一旦超时就自动终止，避免浪费 CI 资源。只需：

```bash
cargo nextest run --slow-timeout 60 --leak-timeout 1024
```

#### 灵活筛选测试集

Nextest 支持使用类似 SQL 的过滤表达式来灵活指定要运行的测试子集，例如：

```bash
# 运行指定名称的测试
cargo nextest run test_name

# 运行指定模块的测试
cargo nextest run module::

# 运行上次失败的测试
cargo nextest run -- --failed
```

#### 自动重试失败的测试

你还可以让 Nextest 自动重试失败的测试，对于偶发的 flaky 测试很有帮助：

```rust
## nextest.toml
[profile.ci.retry]
all_targets = [
    { filter = "test_flaky", max_retries = 3 },
]
```

设置好重试配置后，Nextest 会自动重试 `test_flaky` 相关的失败用例，直到通过或达到最大重试次数。

#### 专为 CI 打造

Nextest 在设计之初就考虑了 CI 场景，它支持：

- 快速安装，提供各种系统的预编译二进制包
- 基于配置文件的 CI 配置管理
- 通过缓存和复用历史构建结果来加速测试
- 将大型测试任务分片到多个 CI 任务并行运行
- 集成 JUnit 格式测试报告输出
- ……

在 CI 流水线中集成 Nextest，几行配置就能让 Rust 项目的测试速度大幅提升。

### 快速上手

使用 Nextest 非常简单，跟 `cargo test` 类似。以下是几个常用命令：

```bash
# 运行项目中的所有测试
cargo nextest run

# 并发运行，默认线程数为 CPU 核心数
cargo nextest run --release -- --jobs 4

# 运行指定的测试子集
cargo nextest run test_foo

# 重试失败的测试用例
cargo nextest run --retries 3
```

假设有以下测试用例：

```rust
#[test]
fn test_foo() {
    // 测试代码 A
    assert_eq!(1 + 1, 2);
}

#[test]
fn test_bar() {
    // 测试代码 B
    assert_eq!("hello".len(), 5);
}
```

运行 `cargo nextest run` 后输出如下：

```bash
running 2 tests
test test_bar ... ok
test test_foo ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
```

可见 Nextest 与 `cargo test` 的用法基本一致，只需将 `cargo test` 替换为 `cargo nextest run` 即可。但在底层，Nextest 通过并行执行、测试结果缓存等优化措施来达到更快的速度。

### 总结

本文向大家介绍了 Rust 测试工具届的后起之秀 —— Nextest。它提供了多项增强功能和性能优化，让 Rust 项目的测试执行更加高效、智能。建议对测试速度要求较高的 Rustacean 朋友一试。

希望通过本文，能让更多人感受到 Nextest 的强大！大幅提升你的 Rust 测试效率指日可待！

# 其他

## Rust 获取系统信息的开源项目：sysinfo

### 参考文章

- sysinfo Github Repo：https://github.com/GuillaumeGomez/sysinfo
- sysinfo 官方文档：https://lib.rs/crates/sysinfo

### 引言

对于开发者来说，获取系统信息是一个常见的需求。比如我们可能需要知道当前系统的内存使用情况、CPU 使用率、磁盘信息等。在 Rust 语言中，有一个非常优秀的开源项目可以帮助我们快速获取这些系统信息，那就是 sysinfo。本文将为大家介绍 sysinfo 的主要特性以及基本用法。

### 创作背景

笔者最近在使用 Rust 开发一个性能监控工具，需要获取系统的各种信息。在寻找相关的库时发现了 sysinfo 这个优秀的开源项目。经过一番使用，发现 sysinfo 不仅功能强大，接口也非常易用，因此想分享给大家，希望对有类似需求的同学有所帮助。

### 主要特性

sysinfo 目前支持以下操作系统：

- Android
- FreeBSD
- iOS
- Linux
- macOS
- Raspberry Pi
- Windows

在这些系统上，sysinfo 可以提供如下信息：

- 系统信息：系统名称、内核版本、主机名等
- 内存和交换空间信息
- CPU 信息：CPU 数量、使用率等
- 进程信息：进程 ID、进程名、磁盘使用等
- 磁盘信息
- 网络接口信息
- 硬件组件信息：温度传感器等

除了基本的系统信息获取，sysinfo 还提供了一些额外的功能，比如可以设置保持打开的文件描述符数量以提高性能等。同时 sysinfo 还提供了一个 C 语言接口，方便在 C 语言项目中调用。

### 快速上手

使用 sysinfo 非常简单，首先在 Cargo.toml 中添加依赖：

```bash
[dependencies]
sysinfo = "0.30"
```

然后就可以在代码中使用了，下面是一个简单的例子：

```rust
use sysinfo::{System, SystemExt};

let mut sys = System::new_all();

// 更新系统信息
sys.refresh_all();

// 打印内存信息
println!("总内存：{} KB", sys.total_memory());
println!("使用内存：{} KB", sys.used_memory());

// 打印 CPU 数量
println!("CPU 核心数：{}", sys.cpus().len());
```

上面的例子中，我们首先创建了一个 System 对象，然后调用 refresh_all() 方法更新系统信息，最后打印了内存和 CPU 信息。

编译运行后输出如下：

```bash
总内存：16384000 KB
使用内存：8025360 KB
CPU 核心数：8
```

### 总结

sysinfo 是一个功能强大且易用的系统信息库。它支持多个主流操作系统，可以获取系统、内存、CPU、进程、磁盘、网络等各种信息。如果你的 Rust 项目中有获取系统信息的需求，sysinfo 绝对是一个不二之选。

## env_logger：Rust 日志利器

### 地址文档

- env_logger 文档：https://docs.rs/env_logger
- env_logger repo：https://github.com/rust-cli/env_logger

### 引言

在 Rust 编程中，日志是非常重要的一个组成部分。本文将为大家介绍一款优秀的 Rust 日志库—— `env_logger`，并通过实例讲解如何快速上手使用它。

### 创作背景

笔者在学习 Rust 过程中，发现日志在调试程序、记录关键信息等方面扮演着至关重要的角色。在众多 Rust 日志库中，`env_logger` 因其简单易用和强大的功能脱颖而出，深得广大 Rust 开发者的喜爱。因此，将 `env_logger` 介绍给更多 Rust 初学者，是笔者创作本文的初衷。

### 主要特性

`env_logger` 是一个通过环境变量进行配置的日志库，主要有以下特性：

1. 可通过环境变量 `RUST_LOG` 轻松配置日志级别；
2. 支持五个日志级别：`error`、`warn`、`info`、`debug` 和 `trace`；
3. 支持针对不同模块设置不同的日志级别；
4. 可自定义日志输出格式；
5. 与 `log` crate 无缝集成。

### 快速上手

以下是 `env_logger` 的基本使用方法。

#### 1. 添加依赖

在 `Cargo.toml` 文件的 `[dependencies]` 下添加：

```rust
[dependencies]
log = "0.4"
env_logger = "0.11"
```

#### 2. 初始化 logger

在程序入口处初始化 `env_logger`：

```rust
use log::info;

fn main() {
    // 初始化 logger
    env_logger::init();

    info!("启动程序");  
    // ...
}
```

当运行程序时，可以通过环境变量 `RUST_LOG` 设置日志级别：

```bash
$ RUST_LOG=info cargo run
[2023-05-20T15:30:00Z INFO  main] 启动程序
```

以上将全局日志级别设为 `info`。这里日志级别不区分大小写。

#### 3. 设置模块级别

还可以针对不同模块，设置不同的日志级别：

```bash
$ RUST_LOG=my_module=debug,info cargo run
```

以上将 `my_module` 的日志级别设为 `debug`，全局的设为 `info`。

#### 4. 在测试中使用

在单元测试中，也可方便地使用 `env_logger`：

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use log::info;

    fn init() {
        let _ = env_logger::builder().is_test(true).try_init();
    }

    #[test]
    fn it_works() {
        init();
        info!("测试日志"); 
        // 编写测试代码
        // ...
    }
}
```

注意 `init()` 函数要在每个测试用例中调用，来初始化 logger。

运行测试时，可通过 `RUST_LOG` 过滤日志：

```bash
$ RUST_LOG=my_module=info cargo test
```

### 总结

本文介绍了 Rust 日志库 `env_logger` 的主要特性和基本用法，展示了它简单易用、功能强大的一面。建议大家在实战项目中使用它，提高开发效率。
