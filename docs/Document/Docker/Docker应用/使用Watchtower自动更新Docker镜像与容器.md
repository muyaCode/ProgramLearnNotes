# 使用Watchtower自动更新Docker镜像与容器

## **概述**

Docker 容器的部署有一种在手机上装 App 的感觉，但 Docker 容器并不会像手机 App 那样会自动更新，而如果我们需要更新容器一般需要以下四个步骤：

- 停止容器：`docker stop`
- 删除容器：`docker rm`
- 更新镜像：`docker pull`
- 启动容器：`docker run`

停止容器这个步骤可以在删除容器时使用 -f 参数来代替，即使这样还是需要三个步骤。如果部署了大量的容器需要更新使用这种传统的方式工作量是巨大的。

## **Watchtower**

Watchtower 是一款实现自动化更新 Docker 镜像与容器的实用工具，它本身也是一个 Docker 镜像，主要用来监控运行中的 Docker 容器的镜像是否需要更新。当 Watchtower 检测到容器的镜像有更新时，它会发送 SIGTERM 信号优雅地结束正在运行的容器，然后根据设定的参数自动重新启动容器，包括使用相同的参数和配置。这个过程无需用户介入，可以自动完成，从而实现 Docker 容器的自动更新。

Watchtower 的工作方式是定期轮询 Docker 守护进程，检查容器的镜像是否有新的版本可用。如果有新版本，Watchtower 将自动拉取新镜像，并根据需要重启容器。这个工具对于希望保持容器始终运行最新镜像的用户来说非常有用，特别是在需要持续集成和持续部署的环境中。

> 官网地址：https://containrrr.dev/watchtower

## **基本使用**

### **更新宿主机的所有容器**

> 使用以下命令，更新宿主机的所有容器，也包括 Watch­tower 本身。

```
docker run -d  \
    --name watchtower \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
```

### **指定某个容器进行监视**

> 如果指向监视某一个容器进行自定更新，则在上述命令后面加上容器名即可。

```
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    miniboard
```

### **指定容器的更新频率**

> Watchtower 默认情况下 24 小时会检查一次镜像更新。设置--interval 选项更新时间，默认单位秒。

```
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --interval 6
```

可以使用`--schedule`选项， 设定定时更新任务，定时任务为6 字段来表示执行时间，第一个字段表示秒。

```
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --schedule "0 30 20 * * 5"
```

### **自定清理旧镜像**

> 可以使用`--cleanup`选项，这样每次更新都会把旧的镜像清理掉。

```
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --cleanup
```

用于清理无用的Docker卷。它会删除所有没有关联到任何容器的卷，以释放磁盘空间。

### **配置自动更新频率**

Watchtower 默认每 5 分钟轮询一次,可以使用以下参数配置更新的频率.

- `--interval`,`-i`配置更新周期,默认300秒.
- `--schedule`,`-s`配置定时更新,使用`Cron表达式`,例如`"0 0 1 * * *"`.即每天凌晨1点更新.

**每2小时更新一次**

```
docker run -d \
    --name watchtower \
    --restart always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --cleanup \
    -i 7200
```

**每天凌晨3点更新**

```
docker run -d \
    --name watchtower \
    --restart always \
    -e TZ=Asia/Shanghai \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --cleanup \
    -s "0 0 3 * * *"
```

### **手动更新**

使用手动更新的方式,运行一次`Watch­tower`容器来更新所需的容器,更新后会自动删除本次运行的`Watch­tower`容器.只需要加上`--rm`和`--run-once`参数即可.同时也可以配合以上`指定容器`或指`定排除容器`的参数来使用.

**更新所有容器**

```
docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --cleanup \
    --run-once
```

**更新指定容器**

```
docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --cleanup \
    --run-once \
    nginx redis
```