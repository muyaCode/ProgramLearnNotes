# Magisk-Lsposed 解决某音APP抓包问题

## 01 模拟器

选择雷电9模拟器，安卓版本为9.0，在启动前必须在设置中调整以下两个地方

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640.webp)

设置-其它设置-开启root

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-184.webp)

设置-性能设置-磁盘改为写入

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-185.webp)

最后保存设置

## 02 刷Magisk面具

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-186.webp)

打开模拟器，然后先安装文件内Magisk以及Magisk Terminal Emulator apk。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-187.webp)

打开Magisk可以看到界面上Magisk处于未获取状态。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-188.webp)

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-189.webp)

先关掉Magisk，打开Magisk Terminal Emulator_17.7，点击允许

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-190.webp)

第一步：输入 m，并在提示后输入Y确定

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-191.webp)

允许root

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-192.webp)

第二步：安装magisk 输入1 回车，然后输入a选择离线安装

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-193.webp)

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-194.webp)

第三步：选择1 安装到system

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-195.webp)

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-196.webp)

成功！

重启模拟器，查看Magisk已经获得。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582812-197.webp)



## 03 安装Lsposed模块

#### 首先设置Magisk，设置-开启Zygisk以及遵守排除列表

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-198.webp)

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-199.webp)

结束后重新启动模拟器。

#### 接着推送加载Lsp模块，

adb push

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-200.webp)

在msgisk中记载模块，点击模块从本地安装

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-201.webp)

选择我们adb push的位置，点击文件完成加载。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-202.webp)

重启模拟器。

这里没有Lsposed的apk图标， 我们直接把文件夹内的lsp manger apk拖到模拟器中就可以了。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-203.webp)

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-204.webp)

打开Lsp，显示模块已经激活。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-205.webp)

  

## 04 Lsposed模块抓包测试

抓包工具安装这里就不掩饰了，我这里用的是mitmproxy，如果有需要后续会出一篇文章的。

我们知道抖音apk做了自己自定义的SSL-PINNING认证的，通过xp-Just Trust Me模块解决不了抓包问题。

在没有开启代理之前，抖音是正常有网络的

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-206.webp)

开启代理之后，没有网络了

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-207.webp)

这里我们的解决办法是使用享过抖音最新版ssl-pinning xp模块。

这里直接把下载的文件夹内的dy_and_ks_抓包_Signed.apk拖到模拟器中，Lsp会自动监测出。点击提示的下拉框以激活模块，注意选择抖音。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-208.webp)

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-209.webp)

最后在重新打开抖音，网络正常并成功抓到包了。

![图片](./Magisk-Lsposed 解决某音APP抓包问题.assets/640-1714653582813-210.webp)