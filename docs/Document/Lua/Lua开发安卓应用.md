# Lua 开发安卓应用

在将 Lua 脚本打包成 APK 文件之前，需要将 Lua 脚本编译成 Android 可执行文件。这可以通过使用 Lua 编译器或 Lua 解释器实现。

一种常用的 Lua 编译器是 LuaJIT，它能够将 Lua 代码编译成 C 代码，并生成一个可在 Android 上运行的可执行文件。

另外一种选择是使用 Lua 解释器，例如 LuaPlayer，它能够在 Android 上运行 Lua 脚本。

当你有了可执行文件之后，就可以使用 Android Studio 或其他 Android 开发工具将其打包成 APK 文件。

需要注意的是，如果你使用 LuaPlayer 就需要添加 LuaPlayer 的库文件到你的工程中。

在打包 APK 之前，需要确保你的脚本符合安卓的策略，如不能包含不合法的内容，符合安卓的权限要求等。

## ANDLUA+、ANDROLUAJ、ALUAJ、助手、手册 V1.5

[AndLua Android - 萝卜 L - 博客园 (cnblogs.com)](https://www.cnblogs.com/RobertL/p/14527191.html)

### 分支、版本

- **AndroLua**：适用于 Android 的 Lua 环境，国外[开源项目](https://github.com/mkottman/AndroLua)，最后更新日期 201301。
- AndroLua+：基于[AndroLua](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLua)的分支，替代[AndroLua](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLua)。又叫**AndroLua_pro**、alua。  
  [开源项目](https://github.com/nirenr/AndroLua_pro)，国内作者[nirenr](https://github.com/nirenr)，QQ 群 236938279，[百度贴吧](http://tieba.baidu.com/mo/m?kw=androlua)。[linkle/AndroLua (gitee.com)](https://gitee.com/linkle/AndroLua)
- [nirenr (github.com)](https://github.com/nirenr)
- [nirenr/AndroLua_pro: Lua5.3.3 for android pro (github.com)](https://github.com/nirenr/AndroLua_pro)
- **Aide Lua**：[Aide Lua: 依赖 Aide ，使用 Lua 快速、高效开发的工具 (gitee.com)](https://gitee.com/Jesse205/AideLua)
- reOpenLua+源代码：[daisukiKaffuChino/reOpenLua-Open-Source (github.com)](https://github.com/daisukiKaffuChino/reOpenLua-Open-Source)
- MyLuaApp：[dingyi222666/MyLuaApp: MyLuaApp is a light and faster software run in Android Arm Devices to develop Android software with Lua or Java. (github.com)](https://github.com/dingyi222666/MyLuaApp)
- 是[jillcode](http://code.google.com/p/jillcode/)，[luaj](http://sourceforge.net/projects/luaj/)，的一些的混合体 其他特定于 Android 的类和一些自定义[Lua](http://www.lua.org/)库。允许 在 Android 本身中构建 Android 应用程序的原型，[AndLua (sourceforge.net)](https://andlua.sourceforge.net/)
- ALua 手册：面向[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)，又叫**ALuaGuide**、**ALua 手册**，"关于"中叫"ALua 助手-重生版"，[开源项目](https://github.com/HK-SHAO/ALuaGuide)，最后更新日期 201709，APP 包名"com.sf.ALuaGuide"、（老版本?）"com.shaofeng.aluazhushou"，版本 0.8，作者"烧风"（shaofeng、[HK-SHAO](https://github.com/HK-SHAO)），QQ：2063597709。内容来自"nirenr"、"寒歌"等。
- AndLua+：基于[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)，又叫**AndLuaPlus**、**ALua+**，[开源项目](https://github.com/xc912/AndLuaPlus)，最后更新日期 202108，版本 6.7（20200925），国内作者 Alone（liyang），~~[个人网站](https://ly250.cn/andlua)~~（失效），APP 包名"com.AndLua.LY"，QQ 群 574867511。
- AndLua++：在[AndLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaPlus)中提及（链接失效），貌似为[AndLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaPlus)的分支——6.8 版本，APP 包名不同，安装时至少与 6.7 版不冲突。
- AndLua++Pro：在[AndLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaPlus)中提及（链接失效）。
- AndLua+手册：在[AndLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaPlus)中提及（链接失效），作者"陵阳"，APP 包名"com.andlua.help"，QQ 群 450874686。
- AndroLuaJ：基于[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)，最后版本 1.2.8，作者[mythoi](http://www.github.com/mythoi)，[项目网站](http://androluaj.mythoi.cn/)、~~[官网](http://www.occhao.cc/AndroLuaJ/)~~（失效），APP 包名"com.mythoi.developerApp"，QQ 群[551480248](https://jq.qq.com/?_wv=1027&k=5RgCS9W)。
- ALuaJ：基于[AndroLuaJ](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaJ)，较 AndroLuaJ 轻量，[开源项目](https://github.com/mythoi/ALuaJ)，最后更新日期 201909，基于[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)4.1.0，作者[mythoi](http://www.github.com/mythoi)，~~[官网](https://www.aluaj.tk/)~~（失效）。
- ALuaJ 助手：作者"寒武纪"，APP 包名"com.ALuaJ.zhushou"。

以上[AndroLuaJ](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaJ)、[ALuaJ](https://www.cnblogs.com/RobertL/p/16722997.html#ALuaJ)网站提及彼此的差异——Java、Lua、C/C++环境，及对 NDK 的支持不同。

### 学习资源

- 上文提及的[ALua 手册](https://www.cnblogs.com/RobertL/p/16722997.html#ALua%E6%89%8B%E5%86%8C)、[AndLua+手册](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaP%E6%89%8B%E5%86%8C)、[ALuaJ 助手](https://www.cnblogs.com/RobertL/p/16722997.html#ALuaJ%E5%8A%A9%E6%89%8B)。  
  未见[AndroLua](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLua)手册。
- [Android 手册](https://www.android-doc.com/reference/packages.html)。
- [Androlua+论坛](http://www.androlua.cn/)
- 上文提及的[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)的[开源项目](https://github.com/nirenr/AndroLua_pro)文档。  
  貌似已包含于[ALua 手册](https://www.cnblogs.com/RobertL/p/16722997.html#ALua%E6%89%8B%E5%86%8C)。
- [AndLua+ English – Telegram](https://t.me/s/AndLuaEN)，尚更新。
- AndLua+有微信小程序**AndLua+源码中心**（失效）。
- 上文提及的官网、QQ 群。

---

感觉把[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)看作内核，[AndLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaPlus)、[AndroLuaJ](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaJ)、[ALuaJ](https://www.cnblogs.com/RobertL/p/16722997.html#ALuaJ)看作封装实现。  
开发可使用[AndroLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndroLuaP)或[AndLua+](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaPlus)或[ALuaJ](https://www.cnblogs.com/RobertL/p/16722997.html#ALuaJ)，参考[Android 手册](https://www.android-doc.com/reference/packages.html)，辅助用[ALua 手册](https://www.cnblogs.com/RobertL/p/16722997.html#ALua%E6%89%8B%E5%86%8C)或[AndLua+手册](https://www.cnblogs.com/RobertL/p/16722997.html#AndLuaP%E6%89%8B%E5%86%8C)或[ALuaJ 助手](https://www.cnblogs.com/RobertL/p/16722997.html#ALuaJ%E5%8A%A9%E6%89%8B)、[AndLua+ English – Telegram](https://t.me/s/AndLuaEN)。

## Android Lua 相互调用

[GitHub: Android-Lua](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fliangchenhe55%2FAndroid-Lua)

# 前言

本文基于 **Lua 5.3**.

Lua 是一个轻量级脚本语言，常用于嵌入其他语言作为补充。关于更多 Lua 本身的问题不在本文讨论范围之内。  
在 Android 中嵌入 Lua 优点很多，借助 Lua 脚本语言的优势，可以轻松实现动态逻辑控制，应用可以随时从服务器读取最新 Lua 脚本文件，在不更新应用的情况下修改程序逻辑。  
可惜 Lua 官方只提供了 C API ，而 Android 主要使用 JAVA 作为开发语言。我们可以借助 JNI 来间接实现在 Android 中嵌入 Lua 。

# 准备

自己实现 JNI 是一件很费力的事情，还好有人已经造好了轮子叫做 Luajava ，并且又有人基于 Luajava 做了 Android 专用库。网上流传最广的是 [Androlua](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fmkottman%2FAndroLua) ，不过作者已经多年不维护了，对 Lua 的支持依然停留在 5.1 并且有一些 bug，有人 Fork 了这个项目，并将其更新至 Lua 5.3 ：[New Androlua](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Flendylongli%2FAndroLua) ，不过这个项目也存在一些问题，我修复了一下但是作者并没有处理我的 pull request ，各位可以直接使用我修复优化后的：[Android-Lua](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fliangchenhe55%2FAndroid-Lua).

在修复 bug 的同时，我也添加了一些中文注释，减少第一次接触 Lua C API 朋友们的学习记忆成本。

由于最终需要调用 Lua C API，所以请先配置 NDK 开发环境。在 Android Studio 中打开 SDK Manager，切换到 SDK Tools 标签页，勾选`CMake`、`LLDB`、`NDK`下载安装之。

![](https://upload-images.jianshu.io/upload_images/5418298-3176d9f6c133457c.png?imageMogr2/auto-orient/strip|imageView2/2/w/799/format/webp)

NDK 环境

# 导入工程

仅仅想实现 Android Lua 互相调用，不关心具体过程的，可以直接添加依赖：  
`implementation 'cc.chenhe:android-lua:1.0.2'` 然后后边的导入部分可以跳过了。

Clone github 项目到本地并用 Android Studio 打开。大致可以看到下图目录结构。（由于后期更新，结构不一定完全相同）

![](https://upload-images.jianshu.io/upload_images/5418298-4e7b810f825fbe6f.png?imageMogr2/auto-orient/strip|imageView2/2/w/495/format/webp)

目录结构

其中 `androidlua`是库，`app`是 demo 工程。库中，`lua`下是 Lua 解释引擎，`luajava`是 JNI 的有关代码。`*.mk` 文件是 NDK 配置文件，详情请参考[Google NDK 文档](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.android.com%2Fndk%2Fguides%2Fandroid_mk.html)。

你可以将 `androidlua`Module 导入自己工程作为依赖库使用。

# Lua API 知识普及

此时我们已经可以在 Android 与 Lua 直接互相调用了。但是在开始之前，还要学习下 Lua C API 的有关东西，因为这是与 Lua 交互的基础。

Lua 与 C 依靠一个虚拟的栈来完成数据交换。包括变量、函数、参数、返回值等在内的一切数据，都要放入栈中来共享。为了调用方便，这个栈并不是严格遵循栈的规则。从索引来看，栈底索引为 1，往上依次递增。而栈顶索引是-1，往下依次递减。因此，正负索引都是合法的，但是 0 不可以。下面是栈的示意图：

![](https://upload-images.jianshu.io/upload_images/5418298-154887f22148c908.png?imageMogr2/auto-orient/strip|imageView2/2/w/350/format/webp)

Lua 栈

Lua 提供了大量的 C API，与其他语言的交互完全依赖这些 API，下面的基础教程中本文会介绍几个基础的，具体可以查看[Lua 官方手册](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2F)

这些函数均由 Lua 提供，在 Luajava 中被封装在 `LuaState` 类下。

### [luaL_openlibs](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23luaL_openlibs)

加载 Lua 标准库，一般需要调用一下。

### [luaL_dostring](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23luaL_dostring)

执行一段 Lua 脚本。

### [luaL_dofile](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23luaL_dofile)

执行给定文件中的 Lua 脚本。

### [lua_dump](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23lua_dump)

获取当前栈的内容。  
java 中对应函数是`dumpStack()`，返回 String，可以直接输出，便于调试。

### [lua_pushXXX](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23lua_pushstring)

将各种类型的数据压入栈，以便未来使用。

### [lua_toXXX](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23lua_tostring)

将栈中指定索引处的值以 xxx 类型取出。

### [lua_getglobal](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23lua_getglobal)

获取 Lua 中的全局变量（包括函数），并压入栈顶，以便未来使用。  
参数就是要获取的变量的名字。

### [lua_getfield](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23lua_getfield)

获取 Lua 中 某一 table 的元素，并压入栈顶。  
第一个参数是 table 在栈中的索引，第二个参数是要获取元素的 key.

### [lua_pcall](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.lua.org%2Fmanual%2F5.3%2Fmanual.html%23lua_pcall)

执行 Lua 函数。  
第一个参数是此函数的参数个数，第二个是返回值个数，第三个是错误处理函数在栈中的索引。

**下面的内容已过时，具体教程与 Demo 请参阅 [GitHub: Android-Lua](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fliangchenhe55%2FAndroid-Lua)**。

### ~~Enjoy coding~~

终于要开始调用了，想想还有点小激动呢~

```java
public static String readAssetsTxt( Context context, String fileName ){
    try {
        InputStream is  = context.getAssets().open( fileName );
        int     size    = is.available();
        /* Read the entire asset into a local byte buffer. */
        byte[] buffer = new byte[size];
        is.read( buffer );
        is.close();
        /* Convert the buffer into a string. */
        String text = new String( buffer, "utf-8" );
        /* Finally stick the string into the text view. */
        return(text);
    } catch ( IOException e ) {
        e.printStackTrace();
    }
    return("err");
}
```

### 创建 Lua 栈

之前说了，依靠一个虚拟的栈来完成数据交换。那么首先我们当然要创建这个栈。

```java
LuaState lua = LuaStateFactory.newLuaState(); //创建栈
lua.openLibs(); //加载标准库

lua.close(); //养成良好习惯，在执行完毕后销毁Lua栈。
```

### 执行 Lua 脚本

我们可以使用`LdoString()`来执行一段简单的脚本。

```java
String l = "local a = 1";
lua.LdoString(l);
```

这样就执行了一个很简单的脚本，他声明了一个全局变量`l`，值为 1.

当然，也可以使用`LdoFile()`来加载脚本文件，不过这需要你先把脚本复制到 SD 卡才行。因为在 APK 中是没有“路径”可言的。

### 读取 Lua 变量与 table

首页要说明的是，只有全局变量（非 local）才可以读取。  
test.lua:

```lua
a = 111;
t = {
    ["name"] = "Chenhe",
    [2] = 2222,
}
```

android:

```java
lua.getGlobal("a"); //获取变量a并将值压入栈
Log.i("a", lua.toInteger(-1) + ""); //以int类型取出栈顶的值（也就是a）

lua.getGlobal("t"); //获取变量t并压入栈顶，此时table位于栈顶。
lua.getField(-1, "name"); //取出栈顶的table的name元素，压入栈顶。
Log.i("t.name", lua.toString(-1)); //以string类型取出栈顶的值（也就是t.name）

Log.i("dump",lua.dumpStack()); //输出当前栈
```

运行后可以看到 log:

```tsx
I/a: 111
I/t.name: Chenhe

I/dump: 1: number = 111.0
        2: table
        3: string = 'Chenhe'
```

我们已经成功读取了 Lua 中的变量。

### 执行 Lua 函数

调用 Lua 函数的一般流程为：

1. 获取函数并入栈。
2. 压入各个参数（如果有）
3. 调用函数，指明参数个数、返回值个数、错误处理函数。
4. 获取返回值（如果有）

test.lua:

```lua
function test(a, b)
    return a + b, a - b;
end
```

android:

```java
lua.getGlobal( "test" ); //获取函数并入栈
lua.pushInteger( 5 ); //压入第一个参数a
lua.pushInteger( 3 ); //压入第二个参数b
lua.pcall( 2, 2, 0 ); //执行函数，有2个参数，2个返回值，不执行错误处理。
Log.i( "r1", lua.toInteger( -2 ) + "" ); //输出第一个返回值
Log.i( "r2", lua.toInteger( -1 ) + "" ); //输出第二个返回值
Log.i( "dump", lua.dumpStack() );
```

运行后可以看到 log:

```tsx
I/r1: 8
I/r2: 2
I/dump: 1: number = 8.0
        2: number = 2.0
```

这就成功地执行了 Lua 函数，并取得 2 个返回值。而之前入栈的函数以及参数，在执行的时候 Lua 已经弹出了，所以最后栈里只剩下 2 个返回值。

### 传入 Java 对象

得益于 Luajava 以及 Androlua 的封装，我们可以直接将对象作为参数传入，并在 Lua 中直接执行对象的成员函数。

test.lua:

```lua
function setText(tv,s)
    tv:setText("set by Lua."..s);
    tv:setTextSize(50);
end
```

android:

```java
lua.getGlobal("setText"); //获取函数
lua.pushJavaObject(textView); //把TextView传入
lua.pushString("Demo"); //传入一个字符串
lua.pcall(2,0,0); //执行函数，有2个参数。
```

![](https://upload-images.jianshu.io/upload_images/5418298-0ffc26d85bb61314.png?imageMogr2/auto-orient/strip|imageView2/2/w/404/format/webp)

执行结果

### 注入 Lua 变量

有时我们需要在 android 中创建 Lua 变量，这样就可以在 Lua 中直接使用了。注意，这里创建的变量都是全局的（非 local）。

test.lua:

```lua
function setText(tv)
    tv:setText("set by Lua."..s); --这里的s变量由java注入
    tv:setTextSize(50);
end
```

android:

```java
lua.pushString( "from java" ); //压入欲注入变量的值
lua.setGlobal( "s" ); //压入变量名
lua.getGlobal( "setText" ); //获取Lua函数
lua.pushJavaObject( textView ); //压入参数
lua.pcall( 1, 0, 0 ); //执行函数
```

![](https://upload-images.jianshu.io/upload_images/5418298-67b9b5b456a0f6fe.png?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp)

执行结果

可以看到 Lua 成功调用了 Java 注入的变量`s`.

### Lua 调用 java

Lua 调用 java 函数相对复杂，毕竟 java 不是脚本语言。我们需要将 java 函数包装成一个 `JavaFunction` 类，实例化之后注册到 lua，这样才可以从 lua 调用。下面看一个例子：

```java
public class MyJavaFunction extends JavaFunction {
    public MyJavaFunction(LuaState luaState) {
        super(luaState);
    }
    @Override
    public int execute() {
        // 获取Lua传入的参数，注意第一个参数固定为上下文环境。
        String str = L.toString(2);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date(System.currentTimeMillis());
        L.pushString(simpleDateFormat.format(date) + str);
        return 1; // 返回值的个数
    }

    public void register() {
        try {
            // 注册为 Lua 全局函数
            register("testJava");
        } catch (LuaException e) {
            e.printStackTrace();
        }
    }
}
```

我们创建一个类继承 `JavaFunction` 并实现 `execute` 方法，它将在被 lua 调用时执行。前面说过，lua 与 c 靠栈来交换数据，故调用函数所传的参数也会入栈。需要注意的是第一个参数恒为 lua 的上下文环境，实际传入的参数是从 2 开始。在这个简单的例子中，我们取得了 lua 传递的字符串，并将其拼接在由 java 获取的时间字符串后边一起返回给 lua。

与传参类似，返回值也是直接入栈即可。最后我们需要返回返回值的个数，这样 lua 就知道从栈里取出几个元素作为返回值了。这些元素会被自动出栈。这里我们利用 `L.pushString()` 将拼接后的字符串返回给 lua，并返回 `1` 表示有 1 个返回值。

最后，调用 `register` 方法注册到 lua，传入的字符串参数就是在 lua 中的函数名。

```java
new MyJavaFunction(lua).register();
```

像这样实例化刚才包装的类就可以成功注册了。现在我们可以在 lua 中调用 `testJava(String)`，它将返回一个字符串，内容是当前的时间加上我们传入的字符串。

### 相关链接

- [Windows 下编译 LuaJIT](https://www.jianshu.com/p/fc4bee82c3ef)
- [Android 嵌入 LuaJIT 的曲折道路](https://www.jianshu.com/p/3aee06f8039f)

## android Studio 配置 LUA 开发环境

### 关于 Android LUA 资料

> **android 如何调用 lua？**  
> [Android lua 教程](http://blog.csdn.net/ZZ7ZZ7ZZ/article/category/1730609)  
> [Lua 官网](http://www.lua.org/start.html)  
> [lua 语言解释](https://zh.wikipedia.org/wiki/Lua)  
> [Lua 5.1 参考手册](http://www.codingnow.com/2000/download/lua_manual.html)  
> [Android Lua 热修复](http://blog.csdn.net/elsdnwn/article/details/48651585)

1. 引诉大牛的原话：

Android 调用 Lua /Lua 调用 Android 代码

在 Android 项目中使用 Lua，需要两个步骤：

1、加载 Lua 脚本解析引擎。  
2、以 Native API 方式调用引擎接口

直接以 JNI 方式调用 Lua 解析引擎的接口十分麻烦，开源项目  
[LuaJava](https://github.com/mkottman/AndroLua)）对这些 JNI 接口进行了很好的封装，它是一个包含了 LuaJava 的 Android 平台的 Lua 解析器，它提供一系列映射到 Lua C 实现函数的 Java 接口。

1.获取 LuaJava 工程，引入到你的 Android Studio 中，并将其设为 Library 工程

2.将 Lua 解析器相关的 C 代码和 LuaJava 的 C 代码打包成 so 文件

一. 将 androLua 以 moudle 方式引入到 Android studio 的 Project 工作区中

此时需要保证你的 Android studio 的 NDK 开发环境已经配置完成，关于如何配置 NDK,教程请移步[MAC NDK 环境配置](http://blog.csdn.net/u010350809/article/details/46840893)

二. 修改自动生成的 androLua 的 build.gradle 文件配置如下 主要将  apply plugin: ‘com.android.application’  替换为  apply plugin: ‘com.android.library’  
屏幕快照 2015-12-25 上午 12.15.20![这里写图片描述](https://img-blog.csdn.net/20151226171047532)

如果编译 报错：请修改 jni/luajava/luajava.c 文件 ：将导入头文件的路径修改如下

```cpp
    #include <jni.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include "../lua/lua.h"
    #include "../lua/lualib.h"
    #include "../lua/lauxlib.h"
    #include "../lua/lstate.h"
    #include "../lua/lauxlib.h"
    #include "../lua/lualib.h"
```

为了照顾全平台的兼容性建议在 jni 目录下新建 Application.mk 文件 写入内容为：

```makefile
APP_ABI := all
```

三.我的版本下我需要将 androLua 的 AndroidMainfest 文件的

```xml
    <?xml version="1.0" encoding="utf-8"?>
<manifest android:versionCode="1" android:versionName="1.0" package="sk.kottman.androlua" xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-sdk android:minSdkVersion="4" />
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
  <uses-permission android:name="android.permission.BLUETOOTH"/>
  <uses-permission android:name="android.permission.CAMERA"/>
  <uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.READ_SMS"/>
  //屏蔽掉入口，只作为lib引入
  <!--<application android:icon="@drawable/icon" android:label="@string/app_name">-->
    <!--<activity android:label="@string/app_name" android:name=".Main">-->
      <!--<intent-filter>-->
        <!--<action android:name="android.intent.action.MAIN"/>-->
        <!--<category android:name="android.intent.category.LAUNCHER"/>-->
      <!--</intent-filter>-->
    <!--</activity>-->
  <!--</application>-->
</manifest>
```

四. 在你的 App 的模块的引入处修改你的 build.gradle 文件  
主要是增加 ： **compile project(‘:androLua’)**

```rust
    dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    testCompile 'junit:junit:4.12'
    compile 'com.android.support:appcompat-v7:23.1.1'
    compile 'com.android.support:design:23.1.1'
    compile project(':androLua')
}
```

不要急着编译 ,检查一下你的工程的 build.gradle  
五：使用**com.android.tools.build:gradle:1.3.1**

我本来是用 2.0.3 支持 Android studio 的 Fast RUN 功能 ，当时编译这个 Lua 一直无法通过 ，如果你也遇到这种问题，请将插件版本换为 1.3.1

六. 基本上配置已经完成了：  
试着在你的项目中引入**LuaState**吧。  
七：Android studio 的 NDK 编译生成的.so 文件目录路径为：app/build/intermediates/ndk

## androlua_pro

androlua_pro 虽然没有解决 ndk 开发 so 库来调用，但是将 so 库在 android studio 集成为一个 so 供 alua 调用(activity.loadLib()方法就可以)，android 本身就可以执行 shell(基于 linux)，所以 linux 上面很多高级功能都阔以实现

下载地址：[nirenr/AndroLua_pro: Lua5.3.3 for android pro (github.com)](https://github.com/nirenr/AndroLua_pro)

官方群下载：621400904，236938279。

### 为啥要用 androlua_pro，它的优点是什么？

1. 优点之一：无需编译，直接运行，开发速度何止原生 app 的百十倍！

2. 优点之二：反编译破解难度贼高，我们知道 java 或者 kotlin 编译的字节码反汇编的 smali 语言是可以修改的，jdgui 就可以查看原 java，mt 管理器基本上就可以破解没加固 app 的所有功能。

3. 优点之三：lua 语言无障碍调用安卓 api，大量 lua 方法比 java 更加高效快捷。

4. 优点之四：基础依赖库非常全面，全为 lua 文件库，因此 alua 编译出来的软件体积比原生安卓软件小太多！

5. 优点之五：无障碍调用其他软件的 dex 和 so(jar 等转成 dex 也能用)

## 轻松实现 Lua 编程语言在安卓端运行

Lua 是一种轻量小巧的脚本语言，用标准 C 语言编写并以源代码形式开放， 其设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能。

![](https://pics2.baidu.com/feed/a1ec08fa513d2697e7b3cd03b86925fd4216d8a2.jpeg@f_auto?token=df54142e062c32c232eda00a90fb3100)

接触过|Lua 语言的都知道 Lua 是一门胶水语言，通过代码之间的调用，能够跨平台运行，在许多游戏的开发中都有 Lua 的身影，Lua 可以通过代码解释器直接运行，无需编译

实现的前提需要 Lua 的代码解释器，

如图，导入所需 Java api 以后，再导入安卓布局，

实现在 Java 上面相互调用，也算是一种安卓混合开发：Java+xml+Lua

![](https://pics3.baidu.com/feed/c75c10385343fbf2a36a512049ec5d8664388f8c.jpeg@f_auto?token=b7da2711854c277038272e75ea44e69f)main.lua 是主要代码文件

用 import 调用 Dex 里面的类库

Lua 的安卓运行工具可以在网络上面下载，也可以在 GitHub 上面查找下载使用

如何把 Lua 做成软件，到达运行目的

![](https://pics2.baidu.com/feed/b3fb43166d224f4ac24f8eb8f16507549a22d1e5.jpeg@f_auto?token=30ff1652b4e356f7eed4a50174670cd2)闲言 App 的 xml 清单

1.原生安卓的开发工具一般是 Android studio 所需的核心文件

Java、xml、dex、gradle、class、jar 等各种复杂的文件，

众多的文件会导致安装包的 rom 很大，对手机不利，减少运存。

![](https://pics6.baidu.com/feed/e4dde71190ef76c63171a9066a846afcae516791.jpeg@f_auto?token=df01cf7cc95ba605570ca826ca0676a8)软件内的 Java 文件

在使用 Lua 语言这种轻量编程环境下，能减少很多文件，

比如只需要 dex、Java、xml、Lua 这四种核心文件即可，这些不需要打包可以直接运行，

2.由于 Java 的特殊性，运行时仅会加载 Lua 函数和代码，Java 代码需要打包后才能实现

![](https://pics1.baidu.com/feed/c83d70cf3bc79f3d203c8a104d335a17738b294e.jpeg@f_auto?token=86798eb32b221a68cb4c0eb548c90788)闲言 App 内部分 Lua 代码

在 gen 文件下编写 Java 代码，在 xml 清单调用 Java 代码，

这个软件全局采用 Lua 代码，在 Lua 文件之前互相调用，形成完整的代码支持

代码文件我觉得有必要这里一下，把源码工程当作自己的家

未编译的 Lua 工程源码运行只会加载 Lua 和 table 文件代码，运行时需要 init.lua 文件的支持

![](https://pics2.baidu.com/feed/9f510fb30f2442a751ff07a92bd13a4dd0130266.jpeg@f_auto?token=05e6b91f4fcccf60133f3e5ad2dc1f7a)xml 调用 Java 函数

总结：Lua 开发安卓软件很罕见，打包后的安装包 rom 很小，性能高效，这不属于原生开发吧，更多 Lua 开发安卓软件的实列在网络上面可以查到的，典型的实例如闲言 App，实现众多功能以后还能把 rom 大小克制在 5M 以内。

提示：Lua 文件容易被破解，建议在打包时把 Lua 和 dex 一并加密，可减少破解的可能性。

## Lua 开发打包 APK 的源码

[mkottman/AndroLua：Lua 和 LuaJava 移植到 Android (github.com)](https://github.com/mkottman/AndroLua)

[ichenhe/Android-Lua：基于 Androlua，做一些实际的改变。 (github.com)](https://github.com/ichenhe/Android-Lua)

[Aide Lua: 依赖 Aide ，使用 Lua 快速、高效开发的工具 (gitee.com)](https://gitee.com/AideLua/AideLua)

[AndLua: Alone 大佬所写的一个 lua 编辑器 官网:https://andlua.top/ (gitee.com)](https://gitee.com/three-to-three/and-lua-a)

[TheMostBlack/AndLuaX: AndLuaX+ (github.com)](https://github.com/TheMostBlack/AndLuaX)

[mythoi/ALuaJ: 移动端 IDE，支持 lua 和 java 编译运行，支持打包 apk (github.com)](https://github.com/mythoi/ALuaJ)

[xiao00kang/AndroLua_Project_Template: 使用此模板在 Android Studio 上开发 AndroLua 应用！ (github.com)](https://github.com/xiao00kang/AndroLua_Project_Template)

[nirenr/AndroLua_pro: Lua5.3.3 for android pro (github.com)](https://github.com/nirenr/AndroLua_pro)

[AideLua/AndroLuaX: 适配了 AndroidX 的 AndroLua+ (github.com)](https://github.com/AideLua/AndroLuaX)

[dingyi222666/AndroLua-Standalone: 在 android 上运行 lua (github.com)](https://github.com/dingyi222666/AndroLua-Standalone)

[xiao00kang/AndroLua_Project_Template: 使用此模板在 Android Studio 上开发 AndroLua 应用！ (github.com)](https://github.com/xiao00kang/AndroLua_Project_Template)

[JealousCat/AndroLua_Pro_Plus: 将 AndroLua 的 Lua 版本从 5.3.x 升级到了 Lua5.4.4（Lua 5.4.4 for Android development） (github.com)](https://github.com/JealousCat/AndroLua_Pro_Plus)

[haodynasty/AndroidLuaExample：Lua 5.3.3 和 LuaJava 移植到 Android 示例 (github.com)](https://github.com/haodynasty/AndroidLuaExample)

[haodynasty/AndroidLuaExample：Lua 5.3.3 和 LuaJava 移植到 Android 示例 (github.com)](https://github.com/haodynasty/AndroidLuaExample)

## Androlua

开源地址：[mkottman/AndroLua：Lua 和 LuaJava 移植到 Android (github.com)](https://github.com/mkottman/AndroLua)

[Lua 初见 | AndroluaDocs (dianas.cyou)](https://lua.dianas.cyou/pages/9f7e48/#快速认识一下普遍写法)

## AndroluaDocs

[项目资源下载 | AndroluaDocs (dianas.cyou)](https://lua.dianas.cyou/pages/ffda64/#渠道02-开源仓库)

## 开源

[sudoskys/Moonnote: A note-taking application developed using the Androlua framework |使用 Androlua 框架开发的一款笔记应用 (github.com)](https://github.com/sudoskys/Moonnote)

[huajiqaq/Hydrogen: 一个基于 androlua+开发的第三方知乎安卓客户端 (github.com)](https://github.com/huajiqaq/Hydrogen)

## 使用 lua 语言开发 Android 应用

做移动端开发，做蛋疼的就是不能**动态发版**，不能像 web 那样发版立即全部用户生效，然而  [lua](http://www.runoob.com/manual/lua53doc/)语言 为其提供了可能性。

使用 lua 来构建跨平台原生应用有许多好处，比如 lua 语言简洁高效，可移植性好， Lua 虚拟机极为轻量，仅占用 200 到 300k 的内存空间，且速度极快。

luaDevAndroid：[hanks-zyh/luaDevAndroid: dev android use lua language (github.com)](https://github.com/hanks-zyh/luaDevAndroid)

## Android 与 Lua：[Android 与 Lua - 掘金](https://juejin.cn/post/6844903715435085838)

[Lua](https://link.juejin.cn?target=https%3A%2F%2Fwww.lua.org%2F "https://www.lua.org/"): 一种轻量语言，由标准 C 编写而成，体积小，启动速度快。Lua 有一个同时进行的 JIT 项目，提供在特定平台上的即时编译功能。

[LuaJ](https://link.juejin.cn?target=https%3A%2F%2Fwww.luaj.org%2Fluaj%2F3.0%2FREADME.html "https://www.luaj.org/luaj/3.0/README.html")：
Luaj 是一个 Java 的 Lua 解释器，基于 Lua 5.2.x 版本，目的是：

- 基于 Java 的实现，可以在 Java 应用中集成 Lua 虚拟机
- 轻量级、高性能的执行 Lua
- 多平台支持
- 完整的库和工具支持
- 可在 Java ME、SE 和 EE 环境中执行
- luajava api 支持
- 混合调试

[AndroLua](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmkottman%2FAndroLua "https://github.com/mkottman/AndroLua") : `Androlua` 是安卓平台上的用 Lua 开发安卓程序的工具，不仅支持调用 Java API，而且支持编写安卓界面程序，还可以将自己写的 Lua 程序打包成 apk 安装文件安装。Lua 语言的简单使没有任何编程经验的用户也能在短时间内开发出安卓程序。(来自百度[百科](https://link.juejin.cn?target=https%3A%2F%2Fbaike.baidu.com%2Flink%3Furl%3DuKUBS37YCr-ASuAsGJH4RaS2dTbm0AUq_1la8TGBJUHrdjkeFhTwqbxJy4OZkagOI146bPK0csWnijBr-zQ2uLOzN4f_pJGkWOcd5jWf-Hm "https://baike.baidu.com/link?url=uKUBS37YCr-ASuAsGJH4RaS2dTbm0AUq_1la8TGBJUHrdjkeFhTwqbxJy4OZkagOI146bPK0csWnijBr-zQ2uLOzN4f_pJGkWOcd5jWf-Hm"))

[LuaViewSDK - Android 版](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Falibaba%2FLuaViewSDK "https://github.com/alibaba/LuaViewSDK") `LuaViewSDK` 由阿里聚划算无线开发团队开发并维护， LuaView 是一种运行在一个 ViewController/Activity 中，可以**灵活加载** Lua 脚本，并能够按照 **Native** 的方式运行的一种面向业务的开发技术方案。可以快速开发电商应用中既要求体验又要求灵活性的页面功能，例如首页，类目首页，垂直频道，大促活动会场等。LuaViewSDK 还有 iOS 版。

### LuaViewSDK 体验

官方文档放了一个很详细的入门文档 👉[新手入门 - android](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Falibaba%2FLuaViewSDK%2Fblob%2Fmaster%2FAndroid%2FDocumentation%2F%25E6%2596%25B0%25E6%2589%258B%25E5%2585%25A5%25E9%2597%25A8-android%2F%25E6%2596%25B0%25E6%2589%258B%25E5%2585%25A5%25E9%2597%25A8%2520-%2520android.md "https://github.com/alibaba/LuaViewSDK/blob/master/Android/Documentation/%E6%96%B0%E6%89%8B%E5%85%A5%E9%97%A8-android/%E6%96%B0%E6%89%8B%E5%85%A5%E9%97%A8%20-%20android.md")

下面的是我自己创建的项目，加载 assets 目录下的 `haha.lua` 文件

<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/17/1671d4842a48b7c9~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" title="" alt="图片" width="275">

下面尝试加载外部的脚本文件， 我在 sd 卡上新建了一个 `local.lua` 脚本文件
内容如下

```ini
w,h = System.screenSize();
window.frame(0, 0, w, h);
window.backgroundColor(0x220000);

label = Label();
label.frame(16,16,w, 60);
label.text("Local Hello World LuaView to Android");
```

<img title="" src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/17/1671d483bade267e~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="" width="411">

我们页可加载服务器上的 lua 脚本，注意校验服务器的文件，防止 lua 脚本恶意攻击。

### 相关文章

- [Lua 在移动平台上的应用](https://link.juejin.cn?target=https%3A%2F%2Fwww.ibm.com%2Fdeveloperworks%2Fcn%2Fopensource%2Fos-cn-LUAScript%2F "https://www.ibm.com/developerworks/cn/opensource/os-cn-LUAScript/")
