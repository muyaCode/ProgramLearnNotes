# Linux 脚本

[SSH 教程 - 网道 (wangdoc.com)](https://wangdoc.com/ssh/)

## 综合工具箱(集合各类脚本)

```
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```

## 杜甫测试

```
wget -q https://github.com/Aniverse/A/raw/i/a && bash a
```

**MoeClub 脚本(萌咖大佬的一键 DD 脚本)**

全自动安装默认 root 密码:`MoeClub.org`,安装完成后请立即更改密码.

能够全自动重装 Debian/Ubuntu/CentOS 等系统.

同时提供 dd 安装镜像功能,例如: 全自动无救援 dd 安装 windows 系统

全自动安装 CentOS 时默认提供 VNC 功能,可使用 VNC Viewer 查看进度,

VNC 端口为` 1` 或者` 5901` ,可自行尝试连接.(成功后 VNC 功能会消失.)

目前 CentOS 系统只支持任意版本重装为 CentOS 6.x 及以下版本.

特别注意:OpenVZ 构架不适用.

```bash
bash <(wget --no-check-certificate -qO- 'https://raw.githubusercontent.com/MoeClub/Note/master/InstallNET.sh') -d 10 -v 64 -p "自定义root密码" -port "自定义ssh端口"
```

-d 10 -v 64

-d 9 -v 64

-u 20.04 -v 64

-u 18.04 -v 64

### 开机改密脚本

```bash
#!/bin/bash
echo root:Vicer |sudo chpasswd root
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo reboot
```

**`BBR`**

`CentOS 7 BBR```

```bash
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```

一键开启 BBR

注意：需要 Linux Kernel 内核升级到 4.9 及以上版本可以实现 BBR 加速

```bash
uname -srm
```

输出结果：

```bash
Linux 5.10.0-22-amd64 x86_64
5 - 内核版本.
10 - 主修订版本.
0-22 - 次要修订版本.
```

一般来说，Ubuntu18.04 以上就可以(默认的内核`4.15`)

```bash
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

sysctl -p

sysctl net.ipv4.tcp_available_congestion_control

lsmod | grep bbr
```

## 服务器时间

CentOS 同步时间

```bash
yum -y install ntpdate
timedatectl set-timezone Asia/Shanghai
ntpdate ntp1.aliyun.com
```

## **Docker 相关**

更新安装必备软件

CentOS

```bash
# 更新所有软件包
sudo yum update -y

# 安装常用工具
sudo yum install -y epel-release  # 安装EPEL仓库以获得更多软件包
sudo yum update -y                # 再次更新以确保所有包都是最新的
```

Debian

```bash
apt-get update && apt-get install -y wget vim
```

### 海外服务器

_非大陆 Docker 安装_

```bash
wget -qO- get.docker.com | bash
```

_卸载 Docker_

```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io
```

```bash
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

**非大陆 Docker-compose 安装**

_其实现在安装了 docker，默认就会安装新版的 docker compose，运行命令为： docker compose，相比旧版 docker-compose，少了-，安装完 docker 之后可以在命令行输入 docker compose --version 查看 docker compose 的版本_

_旧版 docker-compose_

```bash
 sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

_旧版的命令为 docker-compose up -d_

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

_查看版本_

```bash
docker-compose --version
```

### 大陆服务器

_国内机安装 docker_

```bash
curl -sSL https://get.daocloud.io/docker | sh
```

_国内机安装 docker-compose_

```bash
curl -L https://get.daocloud.io/docker/compose/releases/download/v2.1.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
```

_卸载 docker_

```bash
sudo apt-get remove docker docker-engine
rm -fr /var/lib/docker/
```

**防火墙**

```bash
systemctl start supervisordsy
stemctl disable firewalldsy
stemctl stop firewalld
```

镜像站地址

```bash

镜像站地址
官方给出的地址列表：https://www.debian.org/mirror/list

一些国内的
ftp.cn.debian.org
mirror.bjtu.edu.cn
mirror.lzu.edu.cn
mirror.nju.edu.cn
mirrors.163.com
mirrors.bfsu.edu.cn
mirrors.hit.edu.cn
mirrors.huaweicloud.com
mirror.sjtu.edu.cn
mirrors.tuna.tsinghua.edu.cn
mirrors.ustc.edu.cn

使用方法：（大致都是一样的）

清华源
--mirror 'https://mirrors.ustc.edu.cn/debian/'

腾讯源
--mirror 'https://mirrors.aliyun.com/debian/'

阿里源
--mirror 'https://mirrors.aliyun.com/debian/'

华为源
--mirror 'https://mirrors.huaweicloud.com/debian/'
```

**测试相关**

_秋水的 bench.sh 脚本，这个脚本可以查看 Linux 系统信息，还可以测试网络带宽及硬盘读写速率。_

```bash
wget -qO- bench.sh | bash
```

GeekBench

GB6 跑分脚本，附带宽测试

```bash
curl -sL yabs.sh | bash
```

最全测速脚本

```bash
curl -fsL https://ilemonra.in/LemonBenchIntl | bash -s fast
```

**速度测试**

四网测速

```bash
wget -O jcnf.sh https://raw.githubusercontent.com/Netflixxp/jcnfbesttrace/main/jcnf.sh

bash jcnf.sh
```

三网测速

```bash
bash <(curl -Lso- https://git.io/superspeed_uxh)
```

测试 IPv4 优先还是 IPv6 优先

```bash
curl ip.p3terx.com
```

**流媒体测试**

全媒体测试

```bash
bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)
```

奈飞测试

```bash
wget -O nf https://github.com/sjlleo/netflix-verify/releases/download/2.5/nf_2.5_linux_amd64 && chmod +x nf && clear && ./nf
```

```bash
#第一个bash <(curl -L -s https://raw.githubusercontent.com/lmc999/RegionRestrictionCheck/main/check.sh)

# 第二个bash <(curl -sSL "https://github.com/CoiaPrant/MediaUnlock_Test/raw/main/check.sh")
```

检测是否能访问 ChatGPT

```bash
bash <(curl -Ls https://ourl.co/oaic)
```

```bash
bash <(curl -Ls https://cdn.jsdelivr.net/gh/missuo/OpenAI-Checker/openai.sh)
```
