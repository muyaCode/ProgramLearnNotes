# Zig 介绍

[下一个C语言的接班人Zig，能否打败Go和Rust？ (qq.com)](https://mp.weixin.qq.com/s/jgdeWh0im-870yQzoyqf_g)

## Zig 相关网址

GitHub 开源地址：[ziglang/zig：通用编程语言和工具链，用于维护健壮、优化和可重用的软件。 (github.com)](https://github.com/ziglang/zig)

官网：[家 ⚡ Zig 编程语言 (ziglang.org)](https://ziglang.org/)

## Zig 介绍

原文：[Zig，小语言 (zserge.com)](https://zserge.com/posts/zig-the-small-language/)

Zig 是一种相对年轻的低级编程语言。 也许不像汇编程序那样低级，但绝对像 C 或 C++ 一样低级。

在玩了玩并用它构建了一些玩具项目之后 - 我会说，我真的很喜欢用 Zig 编码。它与 C 语言的优点非常相似，当语言感觉简单而小时，生成的程序仍然很小而且速度很快，编码感觉像是“编码”而不是“工程”或“架构”。Zig 仍然很有趣。

## ZIG 很小

虽然 Zig 感觉很有趣，但原因之一是因为语言本身很小。人们可以在不到一个小时的时间内探索完整的语法和基本语言结构。 例如，这是我尝试用几行代码引入 Zig 的尝试：

```zig
// Single-line comments start with "//", documentation comments start with "///"

const x: i32 = 42; // immutable int32 value that can not be changed
var y: u32 = 5;    // mutable unsigned int32 variable
var z = y; // type can be omitted if it can be inferred from the value

// There is no "int" type, all integers have fixed width.
// Same about floats, there are f16, f32, f64 and f128.
// For indices, "intptr_t" or "size_t" types use "isize" or "usize".

// All function parameters are immutable as if they are passed-by-value.
fn add_two_ints(a: i32, b: i32) i32 {
	if (a == 0) { // if statement looks like C
		return b;
	}
	return a+b;
}

// Arrays have fixed length, here numbers.len == 5
const numbers = [_]i32{ 0, 1, 3, 5, 7 };
// String literals are arrays of []u8
const hello = "hello";
// Arrays can be initialised with repeating values using ** operator
const ten_zero_bytes = [_]u8{0} ** 10;
// Arrays may contain a sentinel value at the end, here array.len == 4 and array[4] == 0.
const array = [_:0]u8 {1, 2, 3, 4};
// Slices are pointers to array data with associated length. The difference between
// arrays and slices is that array's length is known at compile time, while slice
// length is only known at runtime. Like arrays, slices also perform bounds checking.
const full_slice = numbers[0..]; // points at &numbers[0] and has length of 5
const short_slice = numbers[1..3]; // points at &numbers[1] and has length of 2

fn count_nonzero(a: []const i32) i32 {
	var count: i32 = 0;
	for (items) |value| { // "for" works only on arrays and slices, use "while" for generic loops.
		if (value == 0) {
			continue;
		}
		count += 1; // there is no increment operator, but there are shortcuts for +=, *=, >>= etc.
	}
}

pub fn main() void { // main() is a special entry point to your program
	var eight = add_two_ints(3, 5);
	var nonzeros = count_nonzero(full_slice);
}
```

当然，它有结构、错误类型、延迟、枚举，甚至还有元编程的手段，所有这些都可以在浏览 [https://ziglearn.org](https://ziglearn.org/) 后发现。

我个人很喜欢 Zig 模块和宏的实现方式。看到现有的语言功能被重用以实现更多功能，感觉非常优雅。

## ZIG 程序很小

Zig 运行时非常简陋：没有 GC，没有 HTTP 或 JSON 的实用程序，甚至没有连接字符串的方法！但这也意味着大多数最小的 Zig 程序可以保持很小。

让我们试着写一个“Hello world”：

```zig
const std = @import("std");
pub fn main() void {
  std.io.getStdOut().writeAll("Hello, World!\n") catch unreachable;
}
```

如果我们只是用 amd64 的常规 Zig 编译器编译它，我们将得到一个 ~2KB 的二进制文件。用现代术语来说，这甚至比相应的 C 二进制文件还要小。

这可以通过直接使用 Linux 系统调用并作为链接器启用来进一步改进：`LDD`

```zig
const std = @import("std");
const linux = std.os.linux;

pub export fn _start() callconv(.Naked) noreturn {
    _ = linux.write(1, "hello", 5);
    linux.exit(0);
}

$ zig build-exe hello.zig --strip -OReleaseSmall --name hello -target x86_64-linux -flto -fLLD
```

这给出了一个 ~700 字节的二进制文件，还可以使用或自定义链接器脚本将其剥离为 ~200 字节。`sstrip`

## ARDUINO 的 ZIG？

另一个允许测试低级语言的平台是 Arduino。旧的 ATMega MCU 只有 2KB 的 RAM 和几 KB 的 ROM 用于代码。Zig 可以在没有太多黑客的情况下闪烁 LED 吗？

实际上，是的：

```zig
const avr = struct {
    pub const ddrb = @intToPtr(*volatile u8, 0x24);
    pub const portb = @intToPtr(*volatile u8, 0x25);
};

const led_pin: u8 = 5;
const led_bit: u8 = 1 << led_pin;
const loop_ms = 0x0a52;

fn flipLed() void {
    avr.portb.* ^= led_bit;
}

fn delay(ms: u8) void {
    var count: u8 = 0;
    while (count < ms) : (count += 1) {
        var loop: u16 = 0;
        while (loop < loop_ms) : (loop += 1) {
            asm volatile ("" ::: "memory");
        }
    }
}

export fn main() noreturn {
    avr.ddrb.* = led_bit;
    avr.portb.* = led_bit;
    while (true) {
        flipLed();
        delay(250);
    }
}
```

这可以针对目标进行交叉编译，并生成以下程序集代码：`avr-freestanding-none`

```bash
main:
	ldi	r24, 32
	out	4, r24
	out	5, r24
	ldi	r18, 0
	ldi	r19, 0
	ldi	r25, 10
.LBB0_1:
	in	r20, 5
	eor	r20, r24
	out	5, r20
	ldi	r20, 0
.LBB0_2:
	cpi	r20, -6
	breq	.LBB0_1
	movw	r30, r18
.LBB0_4:
	cpi	r30, 82
	cpc	r31, r25
	brsh	.LBB0_6
	adiw	r30, 1
	rjmp	.LBB0_4
.LBB0_6:
	inc	r20
	rjmp	.LBB0_2
```

20 条组装指令，用于切换 LED（输入+eor+输出）并在闪烁之间进行倒计时循环。就像 C 编译器一样。

## DEMOSCENE 的 ZIG？

到目前为止，Zig 一直是 C 的不错竞争对手。还有另一个利基市场，像 C 这样的严肃语言几十年来一直闪耀着光芒——demoscene。与传统的工业编程相去甚远，演示场景是一门艺术，其中一些视觉或听觉上吸引人的应用程序被编写为在有限的环境中执行。大多数情况下，二进制大小是一个限制，人们可以将令人惊叹的艺术品放入 512 到 4096 字节的任何字节中。

当然，构建一个跨平台的二进制文件是很困难的，所以让我们假设我们的平台是一个带有 SDL2 的现代 Linux 发行版。我自己从未参加过演示场景，所以不要期望太多。我的目标是让 SDL2 + Zig 在不到 4KB 的时间内以可视化的方式运行。

```zig
const sdl = @cImport({
    @cInclude("SDL2/SDL.h");
});
const std = @import("std");

pub fn main() void {
    _ = sdl.SDL_Init(sdl.SDL_INIT_VIDEO);
    defer sdl.SDL_Quit();
    const window = sdl.SDL_CreateWindow("Hello", sdl.SDL_WINDOWPOS_CENTERED, sdl.SDL_WINDOWPOS_CENTERED, 166, 166, 0);
    defer sdl.SDL_DestroyWindow(window);
    const surface = sdl.SDL_GetWindowSurface(window);

    var quit = false;
    while (!quit) {
        var event: sdl.SDL_Event = undefined;
        while (sdl.SDL_PollEvent(&event) != 0) {
            switch (event.@"type") {
                sdl.SDL_QUIT => {
                    quit = true;
                },
                else => {},
            }
        }
				// Draw a white cross on red background
        _ = sdl.SDL_FillRect(surface, 0, 0xff0000);
        const v = sdl.SDL_Rect{ .x = 33, .y = 66, .w = 100, .h = 34 };
        _ = sdl.SDL_FillRect(surface, &v, 0xffffff);
        const h = sdl.SDL_Rect{ .x = 66, .y = 33, .w = 34, .h = 100 };
        _ = sdl.SDL_FillRect(surface, &h, 0xffffff);
        _ = sdl.SDL_UpdateWindowSurface(window);
    }
}
// zig build-exe main.zig -OReleaseSmall --strip $(shell pkg-config --libs --cflags sdl2) -lc
```

这种动态链接的可执行文件是 3700 字节。是的，留给实际艺术的空间不多了，但话又说回来 - 进一步的优化和链接器黑客应该能够稍微剥离这一点。给我印象最深的是，从 Zig 处理 SDL2（一个 C 库）是多么容易，而无需下载任何包装器或编写任何胶水代码。

## ZIG 用于其他一切

小可能是 Zig 最好的事情。熟悉这门语言并富有成效需要几天时间。Zig 与 C 有很好的集成，包括 C 标头和通过 FFI 从 Zig 调用 C 函数就可以了。这已经允许使用 Zig，而 C 本来会被使用，这是一个相当大的领域。

我期待 Zig 变得更加稳定，希望有一个自托管编译器和一个包管理器。对于现代低端（不仅如此）应用程序来说，这是一种非常有吸引力的语言，值得拥有光明的未来。
