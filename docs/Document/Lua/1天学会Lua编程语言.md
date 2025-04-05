# 1天学会Lua编程语言

**Lua**，它的中文读音非常简单，就是把它的名称当汉语拼音去读，所以我们**一般称他为"噜呃"（"呃"小点声，最好是轻声）**，怎么说呢，这门编程语言是一个**脚本语言，**脚本语言向来都非常简单，Shell、Python都是如此，当然本次的Lua也不例外。

Lua可能不像Java、Go、C等编程语言那么热门，但是也是在实际开发中比较灵活常用的工具语言之一，下面我们就从Lua的基本介绍开始，快速的学会这门简单高效的编程语言。

## 1、什么是Lua?

Lua由Roberto Ierusalimschy、Waldemar Celes 和 Luiz Henrique de Figueiredo所组成的研究小组于1993年开发而成，其**设计目的是为了嵌入应用程序中，从而为应用程序提供灵活的扩展和定制功能**。Lua由C语言编写，几乎在所有操作系统和平台上都可以编译和运行。

在Lua官网（`www.lua.org`）中有这样一段介绍：

Lua是一种强大、高效、轻量级、可嵌入的**脚本语言**。它支持过程式编程、面向对象编程、函数式编程、数据驱动编程和数据描述。

Lua将简单的过程语法与基于关联数组和可扩展语义的强大数据描述结构相结合。Lua是动态类型的，通过使用基于寄存器的虚拟机解释字节码来运行，并具有带增量**垃圾收集**的**自动内存管理**功能，是配置、脚本编写和快速原型设计的理想选择。

Lua脚本可以很容易的被C/C++ 代码调用，也可以反过来调用C/C++的函数，与此同时，Lua 有一个同时进行的JIT项目，提供在特定平台上的即时编译功能。

## 2、为什么使用Lua?

Lua在嵌入式系统和游戏中非常常见，并且**Lua是目前游戏中领先的脚本语言**。自1993年创建以来，Lua的几个版本已经发布并在实际应用中使用。

**Lua是快捷的**。**一些基准测试显示Lua是解释脚本语言领域中速度最快的语言**。Lua不仅在微调的基准程序中速度很快，在现实生活中也是如此。如果需要更高的速度，可以尝试LuaJIT，它是使用实时编译器的Lua的独立实现。

**Lua是便携式的。** Lua以一个小包的形式分发，并在所有具有标准C编译器的平台上开箱即用地构建。Lua可在各种Unix和Windows、移动设备、嵌入式微处理器、IBM大型机等上运行。

**Lua是可嵌入的。** Lua是一个体积小的快速语言引擎，可以轻松地将其嵌入到应用程序中。

**Lua很强大。** Lua设计中的一个基本概念是提供用于实现特性的元机制，而不是直接在语言中提供大量特性。

## 3、Lua环境安装

### Ubuntu系统编译Lua源码

**Lua官网下载地址**：https://www.lua.org/download.html

在这个地方下载好Lua的源码，然后在自己的机器上进行编译，具体在Ubuntu上可以使用命令

```bash
wget https://www.lua.org/ftp/lua-5.4.7.tar.gz
```

然后解压缩，编译

```bash
tar -zxvf lua-5.4.7.tar.gz 

cd lua-5.4.7 && make
```

然后我们cd到src目录下就看到了编译好的Lua compiler

```bash
cd src/

ls | grep lua
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/kybfX4q29prZfcHiaAvibcGE8z18VE5qjH5Wv9opZCsn7gcEYOwXAFBDcnGMJYaMAD7WpZZ1peicLpQM3GxeEWh1Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后执行命令`./lua -v`，就可以看到版本号

![图片](https://mmbiz.qpic.cn/mmbiz_png/kybfX4q29prZfcHiaAvibcGE8z18VE5qjHDudib39aW9QjPLh6D3Q21rTrn3IFu7PGCffl0kuOgQrhxYPos1jy0YQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 环境变量设置

下面我们把这个文件放到环境变量中`vim /etc/profile`

```bash
export PATH=$PATH:/opt/lua-5.4.6/src
```

然后再`source /etc/profile`，就可以在任何目录下使用`lua`命令了。

### Windows环境

Windows环境地址：https://luabinaries.sourceforge.net

如果是Windows环境不方便编译C的话可以直接下载编译好的二进制工具，地址：https://luabinaries.sourceforge.net

![图片](https://mmbiz.qpic.cn/mmbiz_png/kybfX4q29prZfcHiaAvibcGE8z18VE5qjHgOqzZydicKBQCTuiajy3xicYuWpy0Lkx92ibeETUkOK0mallJRAeF82MVg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

然后选择

![图片](https://mmbiz.qpic.cn/mmbiz_png/kybfX4q29prZfcHiaAvibcGE8z18VE5qjHjKic7Oy989NP0V8VpOQ98LESU1xdns3tNibE5ia4kAZH6Q8ATm8EeTu9A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

最后选择相关的版本进行下载

![图片](https://mmbiz.qpic.cn/mmbiz_png/kybfX4q29prZfcHiaAvibcGE8z18VE5qjHt40XdwmKWBn2PpKicVTDyj4owten63HdgjqZf8rDM97icG5KK24XWOCA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 配置Window系统的Lua环境变量





## 4、Lua基本知识点

### 4.1 Hello World

我们创建一个文件名为`hello.lua`

```lua
print("Hello Lua")
```

然后执行命令`lua hello.lua`，就可以看到优雅的Hello World输出到控制台

### 4.2 代码注释

对于代码的注释Lua提供了单行注释和多行注释两种情况

```lua
-- 单行注释

--[[
  多行注释  
  多行注释  
  多行注释  
]] 
```

### 4.3 类型

**Lua是一种动态类型的语言，其中变量没有类型，但值有类型。** 先说Lua的变量命名规则：

支持小写、字母+数字、下划线式和驼峰式：

```lua
variable
name123
this_name
luaIsAwesome
```

Lua的基本类型可以归纳如下：

**nil**：表示一个无效值或空值。在条件表达式中相当于false。一个全局变量在第一次赋值前的默认值就是nil，将nil赋予一个全局变量等同于删除它。

**boolean**：包含两个值：false和true。Lua将false和nil看作是“假”，其他的都为“真”。

**number**：用于表示实数，可以表示整数和浮点数。Lua中的number类型是双精度浮点数。支持基本的算术运算和数学函数。

**string**：用于表示字符串。字符串以一对双引号或单引号括起来，也可以使用两个方括号"[[]]"来表示"一块"字符串。提供了丰富的字符串操作函数，如查找、替换、大小写转换等。使用#来获取字符串的长度。

**table**：是Lua中唯一的一种数据结构，也是最为强大和灵活的类型之一。可以用来表示数组、列表、集合、映射等各种数据结构。通过索引来访问其中的元素，并且可以动态地添加、删除和修改元素。

**function**：用于表示函数。在Lua中，函数可以作为一种值来传递和操作。Lua中的函数可以有多个返回值，还支持匿名函数和闭包。

**userdata**：用于表示用户自定义的数据类型。通常通过C/C++语言扩展Lua来实现。它可以用于与Lua脚本进行交互，实现高效的功能扩展。

其中最常用的莫过于number和string类型，下面我们代码演示下

```lua
pi = 3.14
print(pi)


l = 3e3
m = 3e4

print(l)
print(m)


s = "Hello World"
print(s)
```

输出：

```lua
3.14
3000.0
30000.0
Hello World
```

### 4.4 条件语句

语法：

```lua
if ( 布尔值 ) then
 -- 代码逻辑
end
```

示例：

```lua
-- 变量比较
age = 20
if age > 18 then
 print("age > 18")
end

-- 值比较
if 3 >= 3 then
 print("3 >= 3")
end

-- 不等于比较
if 3 ~= 2 then
 print("3 != 2")
end

-- 字符串比较
str1 = "hello"
str2 = "hello"

if str1 == str2 then
 print("string is equal")
end

-- 表达式比较
number = 10
if number % 2 == 0 then
 print("num is double")
end

-- if ... else ... 句式
if 3 > 5 then
 print("yes")
else
 print("no")
end
```

输出：

```lua
age > 18
3 >= 3
3 != 2
string is equal
num is double
no
```

### 4.5 循环语句

Lua中有两种循环语句，没错，就是for循环和while循环

#### 4.5.1 for循环

语法：

```lua
for 变量名 = 起始值, 结束值, 增量 do
 -- 代码逻辑
end
```

示例：

```lua
for index = 1, 5 ,1 do
 print(index)
end

-- 默认的地址数为1
for i = 1, 5 do
 print(i)
end

-- 也可以指定递增为2
for i =2, 10 ,2 do
 print(i)
end

-- 可以进行递减
for i = 10, 2 ,-2 do
 print(i)
end
```

输出：

```lua
1
2
3
4
5
1
2
3
4
5
2
4
6
8
10
10
8
6
4
2
```

#### 4.5.2 while循环

语法：

```lua
while 布尔值 do
    -- 代码逻辑
end
```

示例：

```lua
index = 1
while index < 3 do
 print( index )
 index = index + 1
end
```

输出：

```lua
1
2
```

### 4.6 函数

在Lua中，函数（也称为过程或子程序）是一段可重用的代码块，它执行特定的任务并可能返回结果。

#### 4.6.1 简单函数

在Lua中，你可以使用`function`关键字来定义一个函数。函数的定义通常包含函数名、参数列表和一个函数体。

```lua
function 函数名(参数名)
    print("Hello, " .. 参数名 .. "!")
end
```

示例：

```lua
function greet(name)
    print("Hello, " .. name .. "!")
end

greet("zs")
```

输出：

```lua
Hello, zs!
```

#### 4.6.2 带返回值函数

函数也可以返回值。你可以使用`return`语句来从函数中返回一个或多个值。

```lua
function add(a, b)
    return a + b
end

local sum = add(5, 3) 
print(sum) 
```

输出：

```lua
8
```

#### 4.6.3 可变参数列表

Lua还支持可变参数列表，你可以使用`...`（三个点）来表示。

示例：

```lua
function sum(...)
    local total = 0
    for i, v in ipairs{...} do
        total = total + v
    end
    return total
end

print(sum(1, 2, 3, 4))  
```

输出：

```lua
10
```

但是请注意，`ipairs`函数只能用于索引从1开始且连续的表（即数组）。如果你有一个包含非连续索引或字符串键的表，你应该使用`pairs`函数来遍历它。

#### 4.6.4 匿名函数

Lua还支持匿名函数（也称为Lambda函数），这些函数没有名字，但可以在需要时定义和使用。

示例：

```lua
local factorial = function(n)
    if n == 0 then
        return 1
    else
        return n * factorial(n - 1)
    end
end

print(factorial(5)) 
```

输出：

```
20
```

### 4.7 其他常用关键词

Lua除了以上的基本语法以外还有很多其他特性，但是由于文章篇幅原因本次就不全部展示了，分享一下两个常用的关键词。

#### 4.7.1 not

在Lua中，`not`是一个逻辑操作符，用于对布尔值进行逻辑“非”运算。如果其操作数是`true`，则`not`将其转换为`false`；如果操作数是`false`或`nil`，则`not`将其转换为`true`。

这里有几个使用`not`操作符的例子：

```lua
-- 基本用法
print(not true)  -- 输出 false
print(not false) -- 输出 true

-- 使用变量
local flag = true
print(not flag)  -- 输出 false

-- nil值也被视为false
local nilValue
print(not nilValue)  -- 输出 true

-- 逻辑表达式
local a = 10
local b = 20
local isGreater = a > b
print(not isGreater)  -- 如果 a 不大于 b，则输出 true；否则输出 false

-- 注意：对数字进行not操作是无效的，Lua会先尝试将数字转换为boolean值（非零为true，零为false），然后取反
print(not 0)   -- 输出 true
print(not 1)   -- 输出 false
print(not -1)  -- 输出 false
```

需要注意的是，当对除`nil`和`false`之外的值使用`not`时，Lua会首先尝试将这些值转换为布尔值（通过所谓的“真值测试”），然后再进行逻辑非运算。在Lua中，`nil`和`false`是假值（falsy values），而所有其他值（包括所有数字、字符串、表、函数等）都是真值（truthy values）。

在条件语句（如`if`语句）中，`not`操作符特别有用，因为它允许你检查某个条件是否不成立。

#### 4.7.2 `#` 长度操作符号

在Lua中，`#`（井号）是一个长度操作符，主要用于获取字符串的长度或表中元素的数量。但是，它在使用时有一些特定的规则和限制。

对于字符串，`#`操作符返回字符串中字符的数量（不包括末尾的null字符）。

```lua
local str = "Hello, World!"
print(#str)  -- 输出 13
```

对于表（table），`#`操作符的行为稍微复杂一些。它返回的是表中最后一个序列元素的索引（即键为整数的元素），但前提是表是“序列”（sequence）。Lua认为一个表是序列，如果它满足以下条件：

1. 所有正整数键从1开始没有间隔地存在。
2. 如果存在非正整数键，则`#`操作符不考虑这些键。
3. 表的最后一个元素之后的任何键都不能是整数或者不能是`nil`。

下面是一些例子：

```lua
local seq = {10, 20, 30, 40, 50}
print(#seq)  -- 输出 5

local non_seq = {10, 20, "a" = 30, 40, 50}
print(#non_seq)  -- 输出 2，因为"a"不是正整数键，所以#non_seq只计算到20

local holes = {10, [3] = 20, 40}
print(#holes)  -- 输出 2，因为键2不存在，所以#holes只计算到10

local trailing_nil = {10, 20, nil, 40}
print(#trailing_nil)  -- 输出 2，因为nil值被视为表结束的标志

local trailing_non_nil = {10, 20, 3.14, 40}
print(#trailing_non_nil)  -- 输出 3，因为3.14不是nil，且是最后一个整数键
```

请注意，由于Lua中表的索引可以是任意的，所以`#`操作符在表不是序列时可能不会返回你期望的结果。对于非序列表，你可能需要编写自己的函数来计算长度或遍历表中的所有元素。

## 5、Lua实际使用案例

### 5.1 使用RedisCli执行Lua脚本

新建一个文件`simple_script.lua`，写入如下代码：

```lua
local key = KEYS[1]  
local value = ARGV[1]  

redis.call('SET', key, value)
  
return redis.call('GET', key)
```

执行脚本：

```bash
redis-cli --eval simple_script.lua name , zs
```

输出：

```bash
zs
```

### 5.2 在Go语言中执行Lua脚本

在Go语言中执行Redis Lua脚本通常涉及使用Redis客户端库，比如`go-redis`。`go-redis`库提供了执行Redis命令和Lua脚本的功能。

安装**`go-redis`**库：

```bash
go get github.com/go-redis/redis/v8
```

**编写Go代码**：

以下是一个简单的Go代码示例，它展示了如何使用`go-redis`库连接到Redis服务器并执行一个Lua脚本：

```lua
package main

import (
    "context"
    "fmt"
    "log"

    "github.com/go-redis/redis/v8"
)

func main() {
    // 创建Redis客户端实例
    // 假设Redis服务器在本地运行，端口为6379
    rdb := redis.NewClient(&redis.Options{
            Addr:     "localhost:6379", // Redis地址
            Password: "",               // Redis密码（如果设置了）
            DB:       0,                // Redis数据库索引
    })

    // Lua脚本，假设只是返回输入的key的值
    luaScript := `
    local key = KEYS[1]  
    local value = ARGV[1]  

    redis.call('SET', key, value)
      
    return redis.call('GET', key)`

    // 准备参数（这里只有一个key）
    keys := []string{"mykey"}
    vals := []string{"zs"}

    // 执行Lua脚本
    result, err := rdb.Eval(context.Background(), luaScript, keys, vals).Result()
    if err != nil {
        log.Fatalf("Error executing Lua script: %v", err)
    }

    // 输出结果
    fmt.Println(result)
}
```

确保Redis服务器正在运行，并且`mykey`这个键有对应的值，否则Lua脚本会返回`nil`。

此外，`Eval`方法返回的是一个`*redis.Cmd`对象，你可以通过调用它的`Result`方法来获取命令的结果。如果发生错误，`Result`方法会返回一个错误。

## 6、结语

到这里本篇文章就要接近尾声了，不知道大家看完之后有没有对Lua有一些掌握，当然在实际案例中我只展示了如何让Redis执行Lua脚本，那么**为什么Redis可以直接执行Lua而MySQL却不行**，主要是因为两者在设计和功能上的差异。

Redis通过引入对Lua脚本的支持，使得其在处理需要原子性保证的复杂逻辑时具有优势；而MySQL则主要依赖于SQL语言进行数据操作，并通过存储过程、触发器等方式来丰富数据的操作方式。