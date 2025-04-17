# Linux在线练习

## leaningtech/webvm：网络虚拟机

GitHub：https://github.com/leaningtech/webvm

本仓库托管了 [https://webvm.io](https://webvm.io/) 的源代码，这是一个在浏览器中运行的 Linux 虚拟机。

尝试使用新的 Alpine / Xorg / i3 图形环境：https://webvm.io/alpine.html

WebVM 是一个无服务器的虚拟环境，完全在 HTML5/WebAssembly 客户端运行。它设计为与 Linux ABI 兼容。它运行未经修改的 Debian 发行版，包括许多本地开发工具链。

WebVM 由 CheerpX 虚拟化引擎驱动，能够在任何浏览器上安全、沙箱化地执行 x86 二进制文件。CheerpX 包括 x86 到 WebAssembly 的即时编译器、基于虚拟块的文件系统以及 Linux 系统调用模拟器。