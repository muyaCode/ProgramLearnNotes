# 魔云腾ZeusC1——云手机当12个手机用

今天介绍一个好玩的东西，它叫**云手机**。

这次我拿到的是

## 魔云腾 Zeus C1

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640.webp)

它给自己写的名称是**边缘智能计算节点**，显得相当高大上。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-196.webp)

它采用的是瑞芯微**RK3588** SoC，四核Cortex-A76 + 四核Cortex-A55设计，带有6TOPS算力。

有**16GB内存和32GB内存**两种配置，16GB内存版本不带NVMe固态硬盘，售价**1899**，32GB内存版本售价**2399**

要加NVMe固态硬盘，**256GB只要加100**，还有一个**2TB固态硬盘版本，要加700**，这个根据个人需求选择即可。

这里我觉得魔云腾固态硬盘的价格还算公道，完全可以直接选择带固态硬盘的版本，到手就能用。而自己买的话，我估计也得差不多钱，而且还得自己折腾，但是好处是选择多一些。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-197.webp)

接口比较简单，一个千兆网口，一个MaskRom接口，是便于刷写系统的按钮，一个USB Type-C接口，指示灯，以及一个12V DC电源接口。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-198.webp)

不过魔云腾C1的硬件其实不重要，只是个载体，它真正有意思的就在于它宣传的云手机概念。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-199.webp)

使用起来也很简单，如果你买的是带有固态硬盘版本的，把电源插上，网线插上。

然后需要在电脑上装一个魔云腾云手机的控制软件，就可以玩耍了。

需要注意的是目前这个客户端**只支持Windows系统**，别的目前都不支持。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-200.webp)

还有一个需要注意的是这个软件并**没有适配高分屏**，默认打开字体特别小，我们需要在魔云腾图标上右键，属性，兼容性，选择更改高DPI设置，把缩放行为改为系统，这样软件至少是可以正常使用了。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-201.webp)

注册一个账号，之后我们首先需要的是购买一个云主机，没错，除了机器之外，你还需要额外付费，这个费用，我认为可以理解为软件使用费。

魔云腾C1可以开12个云主机，也就是可以同时直接运行十二个安卓系统。

一个云主机1个月要花3块钱，如果你要同时运行12个云主机的话，一个月需要付费36块钱，这就不便宜了。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-202.webp)

一年费用是432块钱。这个费用其实也不少了。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-203.webp)

官方**推荐同时开8个**，再多我估计会有卡顿之类的问题。

我想买这个的肯定不可能只开一个安卓系统吧，肯定是要多开，所以买这个设备也要考虑到这方面的成本。

买好云主机之后，我们就可以创建容器了，你可能会想，RK3588性能很强吗，竟然可以带12个安卓系统，实际上，能开12个安卓系统，主要归功于它所采用的**Docker**技术，其实安卓系统是运行在Docker容器下的，运行效率会比较高。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-204.webp)

而且本身这个云主机就带有至少16GB内存，也能勉强带的动12个安卓系统同时运行。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-205.webp)

然后我们选一个安卓镜像的版本，有标准版本，还有带有**Xposed**和**谷歌服务框架**的系统。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-206.webp)

选好之后，确定，软件自动下载系统镜像，这个时间会比较长，进度条走完之后，就可以启动安卓系统了。

进入系统的速度挺快的。整个**系统操作相当流畅**，个人认为比Windows下运行安卓应用要流畅。

这个系统有一些相当牛的东西，首先这个安卓**系统非常精简**，精简到你主页看到的应用就是除了系统软件之外所有的软件。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-207.webp)

主页上有一个扩展服务

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-208.webp)

里面可以设置**防封保护**，比如你想装一些奇怪的东西，而这个东西会影响游戏的平衡，那你可以将这个软件隐藏，以免被官方发现你在用一些奇怪的东西。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-209.webp)

还有个开机自启设置，这个和我们手机里的禁止某些软件自启动不同，是勾选了之后，系统在启动的时候，自动运行，也就是说设置完之后，启动系统时会自动打开你需要的软件。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-210.webp)

还可以勾选你使用哪颗摄像头，录像。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-211.webp)

最后一个应用超级权限设置就更厉害了，勾选了之后，**应用立刻获得root权限**。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-212.webp)

应用里还有个设备助手，这个就更好玩了。

如果你多翻翻这个手机你会发现，这个手机不对吧，咋用的4G网络，不应该是连接的网线吗。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-213.webp)

这个我研究了一下，发现，任何电话都是无法拨出去的。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929877-214.webp)

也就是说这个电话号码都是自动生成的。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-215.webp)

因为我玩了一下这个设备助手

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-216.webp)

我们点击一下一键新机，立刻跳出来，一堆自动生成的信息

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-217.webp)

包括，手机型号，移动还是联通，啥手机号码，Wi-Fi名称，蓝牙，全都会**自动修改模拟**。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-218.webp)

唯一遗憾的是目前只能自定义手机型号，别的没法自定义修改。

这里还有个**智能IP定位**，可以指定你手机所处的位置，全球地点随你选，这也可以解决有些软件会有地域限制的问题，比如Tiktok这类应用，你不在国外，抱歉，只能用国内的抖音。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-219.webp)

不过总结一句话就是，这些功能都是为了，让我们要用的软件**认为我们是一个真实的用户**，而不是在虚拟机之类的设备里运行的用户，甚至我们可以**模拟成他们想要的用户的样子**，来解除一部分限制。

而这个云主机最大的用处，是目前魔云腾文档大量文章介绍的，游戏挂机功能，目前有大量的不那么吃性能的游戏，可以在这个主机里**自动做任务，挂机**。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-220.webp)

其实我认为可以模拟大量安卓手机这点，可玩性肯定还不只是挂机这一点，可以往深了做**任何重复性的，需要大量账号，大量重复操作的工作**，具体的我就不多说了。

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-221.webp)

总的来说我认为这个主机性价比还是非常高的，目前你想买个正儿八经的RK3588的主机，小一千是至少的，而这个16GB内存版本也才1899，而且还带一个金属外壳，还有一个风力强劲的风扇。还自带电源。即使是**纯当做一个RK3588主机也不会亏很多**。

而这个主机的主要工作是多开安卓系统，我认为，做的已经相当不错了，就是客户端的界面可以再设计一下，至少适配一下高分屏，使用体验会更好一些。

唯一缺点是**开云主机要付费**，满载使用，开个八台，十二台，一个月得30多，一年300多，所以如果你不是有生产力需求，或者刚需的话，没必要考虑这个，完全可以买各种基于RK3588的机器。如果你有类似需求的话，这个肯定比直接买一堆手机要划算省事儿的多。

**香橙派5Pro真不错**

![img](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-222.png)

芯板，香橙派5 Pro

![img](./魔云腾ZeusC1——云手机当12个手机用.assets/0.jpeg)

## 小程序

**开发板选型网站，欢迎大家访问**，虽然还不是很完善，但是已经录入了500多个左右的开发板，如果你有兴趣，或者有需求的可以看看我们的选型网站，**你有什么好的建议也可以在群里说或者给我们留言**。

我们网站的域名是：**findboard.cn**

![图片](./魔云腾ZeusC1——云手机当12个手机用.assets/640-1714993929878-223.webp)

（我们现在还没有对手机端进行适配，如果你是手机访问的话，暂时效果可能不会很让人满意，**暂时建议使用电脑端浏览器访问**）