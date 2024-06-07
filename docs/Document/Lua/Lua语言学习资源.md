# Lua语言学习资源

## 相关网址

Lua5.3中文参考手册：[Lua 5.3 参考手册 - 目录 (runoob.com)](https://www.runoob.com/manual/lua53doc/contents.html)

Lua5.4官方参考手册：[Lua 5.4 参考手册 - 目录](http://www.lua.org/manual/5.4/)

Lua开源地址：[https://github.com/lua/lua](https://github.com/lua/lua)

# Lua相关开源项目

## xmake：🔥基于 Lua 的跨平台构建实用程序

GitHub：[xmake-io/xmake：🔥基于 Lua 的跨平台构建实用程序 (github.com)](https://github.com/xmake-io/xmake)

Github： https://github.com/xmake-io/xmake

文档站：https://xmake.io/



一个轻量快速的跨平台 C++ 构建工具

Xmake 是一个基于 Lua 的轻量级跨平台构建工具。

它非常的轻量，没有任何依赖，因为它内置了 Lua 运行时。

它使用 xmake.lua 维护项目构建，相比 makefile/CMakeLists.txt，配置语法更加简洁直观，对新手非常友好，短时间内就能快速入门，能够让用户把更多的精力集中在实际的项目开发上。

我们能够使用它像 Make/Ninja 那样可以直接编译项目，也可以像 CMake/Meson 那样生成工程文件，另外它还有内置的包管理系统来帮助用户解决 C/C++ 依赖库的集成使用问题。

目前，Xmake 主要用于 C/C++ 项目的构建，但是同时也支持其他 native 语言的构建，可以实现跟 C/C++ 进行混合编译，同时编译速度也是非常的快，可以跟 Ninja 持平。

```
Xmake = Build backend + Project Generator + Package Manager + [Remote|Distributed] Build + Cache
```

尽管不是很准确，但我们还是可以把 Xmake 按下面的方式来理解：

```
Xmake ~= Make/Ninja + CMake/Meson + Vcpkg/Conan + distcc + ccache/sccache
```

