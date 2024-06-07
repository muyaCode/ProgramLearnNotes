# Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理

## **摘要**

> 1. 安装Docker Desktop
> 2. 开启并启动Docker Desktop单节点K8S集群
> 3. 使用Docker安装Kuboard
> 4. 关联Kuboard和单节点K8S集群，使用Kuboard来管理单节点K8S集群
> 5. 实战：部署一个`nginx deployment`应用程序

## **安装 Docker Desktop**

#### **Docker Desktop 是什么？**

Docker Desktop 是 Docker 官方提供的桌面应用程序，它允许用户在个人计算机上安装并运行 Docker 引擎。Docker Desktop 支持 Windows 和 macOS 操作系统，通过它用户可以构建、共享和运行容器化应用程序。

Docker Desktop 提供了图形用户界面（GUI），使得管理容器、镜像、网络和卷等 Docker 对象变得更加直观和方便。它包括了 Docker Engine、Docker CLI 客户端、Docker Compose、Kubernetes（可选）、以及内置的 Dockerfile 编辑器等工具。

此外，Docker Desktop 还允许用户设置和使用不同的 Docker 镜像仓库，方便用户从远程仓库拉取或推送容器镜像。它还支持资源限制、网络配置、存储驱动选择等高级功能，以适应不同用户的需求。

#### **安装**

> 安装 Docker Desktop for Windows 的步骤如下：

**1. 下载 Docker Desktop Installer**：访问 Docker 官方网站下载页面：Get Started with Docker 或者直接访问 Docker Hub 并下载适用于 Windows 的 Docker Desktop Installer。

**2. 运行安装程序**：双击下载的 `Docker Desktop Installer.exe` 文件以运行安装程序。

**3. 安装要求**：在安装过程中，确保勾选了`“Enable Hyper-V Windows Features”`（启用 `Hyper-V` 功能）或者`“Install required Windows components for WSL 2”`（为 WSL 2 安装所需的 Windows 组件）的选项。

**4. 完成安装**：根据安装向导的提示完成安装，可能需要重启计算机。

**5. 使用 WSL 2 作为后端**（如果需要）：如果你想使用 WSL 2 作为 Docker 的后端，可以在安装时或安装后在 Docker Desktop 的设置中选择“Use the WSL 2 based engine”（使用基于 WSL 2 的引擎）。

**6. 配置镜像源**（可选）：为了加速下载 Docker 镜像，可以配置镜像源，如阿里云镜像加速地址。在 Docker Desktop 的设置中添加镜像源地址：

```
{ "registry-mirrors": ["https://xxxx.mirror.aliyuncs.com"] }
```

> 其中 `xxxx.mirror.aliyuncs.com` 需要替换为实际的加速器地址。

**7. 验证安装**：安装完成后，可以通过命令行运行 `docker version` 或 `docker-v` 来验证 Docker 是否安装成功。

## **开启单节点K8S集群**

Docker Desktop 自带了 Kubernetes 支持，可以通过 Docker Desktop 的应用程序界面开启 Kubernetes 集群。

#### **开启K8S**

在 Docker Desktop 应用程序中，找到并点击“设置”（Settings）选项，通常位于应用菜单栏或者 Docker 图标右键菜单中。切换到 Kubernetes 标签进行启动。

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-4894987.webp)

#### **验证 Kubernetes 集群状态**

启动完成后，通常会在 Kubernetes 页面上显示 Kubernetes 集群的状态，比如`Running`或者`Active`。

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716408-21.webp)

#### **使用 kubectl**

Docker Desktop 启动 Kubernetes 后，会自动配置 kubectl 命令行工具，你可以在命令行中使用 kubectl 来管理你的 Kubernetes 集群。

> 通过以下命令验证集群是否正确启动

```
kubectl cluster-info
```

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716408-22.webp)

## **安装Kuboard**

#### **Kuboard是什么？**

Kuboard 是一款免费的 Kubernetes 管理工具，旨在帮助用户快速在 Kubernetes 上落地微服务。它提供了丰富的功能，包括但不限于 Kubernetes 基本管理功能、节点管理、名称空间管理、存储类/存储卷管理、控制器管理、Service/Ingress 管理、ConfigMap/Secret 管理、CustomerResourceDefinition 管理、问题诊断、容器日志及终端、认证与授权、CI/CD集成等。

此外，Kuboard 还支持多种认证方式、多集群管理、微服务分层展示、工作负载的直观展示和编辑、存储类型支持、丰富的互操作性以及操作审计等功能。Kuboard 通过图形化界面简化了 Kubernetes 的使用，让用户无需编写 `YAML` 文件即可完成应用程序的部署和管理，降低了 Kubernetes 的学习门槛，提高了运维的便捷性。

#### **安装 Kuboard v3（内建用户库）**

> 安装文档：https://www.kuboard.cn/install/v3/install-built-in.html#%E9%83%A8%E7%BD%B2%E8%AE%A1%E5%88%92

> 安装 `Kuboard v3.x` 版本的指令如下：

```
docker run -d \
  --restart=unless-stopped \
  --name=kuboard \
  -p 8089:80/tcp \
  -p 10081:10081/tcp \
  -e KUBOARD_ENDPOINT="http://192.168.3.29:8089" \
  -e KUBOARD_AGENT_SERVER_TCP_PORT="10081" \
  -v d:\k8s:/data \
  eipwork/kuboard:v3
```

> 注意事项：

- 可以使用镜像`swr.cn-east-2.myhuaweicloud.com/kuboard/kuboard:v3`更快地完成镜像下载。
- 请不要使用 `127.0.0.1` 或者 `localhost` 作为内网 IP
- `Kuboard` 不需要和 `K8S` 在同一个网段，`Kuboard Agent` 甚至可以通过代理访问 Kuboard Server

> 安装结果

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716408-23.webp)

> 本地磁盘安装目录文件

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-24.webp)

> 容器运行状态

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-25.webp)

#### **访问 Kuboard v3.x**

> 在浏览器输入 http://127.0.0.1:8089/ 即可访问 `Kuboard v3.x` 的界面

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-26.webp)

> 登录方式。用户名：`admin` 密 码：`Kuboard123`

#### **添加 Kubernetes 集群到 Kuboard**

> 使用`Kuboard Agent`方式添加

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-27.webp)

- 名称：`Tinywan-k8s`
- 描述：随便写
- Agent部署名称：`kuboard-agent-tinywan`

> 等待准备导入状态

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-28.webp)

#### **导入Kuboard**

> 通过以下命令下载`kuboard-agent.yaml`文件

```
curl -k 'http://192.168.3.29:8089/kuboard-api/cluster/Tinywan-k8s/kind/KubernetesCluster/Tinywan-k8s/resource/installAgentToKubernetes?token=igQyIcMwCTBhSXmIhaZ1h2IQ3PSNjrpW' > kuboard-agent.yaml
```

> 下载结果

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-29.webp)

> 导入之前先要执行以下两个命令

获取当前 Kubernetes 集群中的所有 `Pod`

```
PS C:\Users\Tinywan> kubectl get pods
No resources found in default namespace.
```

显示当前 Kubernetes 配置中所有上下文

```
PS C:\Users\Tinywan> kubectl config get-contexts
CURRENT   NAME             CLUSTER          AUTHINFO         NAMESPACE
*         docker-desktop   docker-desktop   docker-desktop
```

> 切换 `kubectl` 操作的上下文到名为 `docker-desktop` 的上下文

```
PS C:\Users\Tinywan> kubectl config use-context docker-desktop
Switched to context "docker-desktop".
```

获取（列出）当前 Kubernetes 集群中的所有节点（Node）的信息

```
PS C:\Users\Tinywan> kubectl get nodes
NAME             STATUS   ROLES           AGE   VERSION
docker-desktop   Ready    control-plane   60m   v1.27.2
```

> 将本地文件 `.\kuboard-agent.yaml` 中定义的 `Kubernetes` 资源对象应用到 `Kubernetes` 集群中。

```
PS C:\Users\Tinywan> kubectl apply -f .\kuboard-agent.yaml
namespace/kuboard created
serviceaccount/kuboard-admin created
clusterrolebinding.rbac.authorization.k8s.io/kuboard-admin-crb created
serviceaccount/kuboard-viewer created
clusterrolebinding.rbac.authorization.k8s.io/kuboard-viewer-crb created
deployment.apps/kuboard-agent-tinywan created
deployment.apps/kuboard-agent-tinywan-2 created
```

> 安装完成，查看导入成功状态，已变成`已就绪`状态

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-30.webp)

#### **请选择访问集群时所使用的身份 ServiceAccount kuboard admin**

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-31.webp)

#### **进入集群**

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-32.webp)

## **部署 Nginx Deployment应用程序**

> 官方教程：https://kuboard.cn/learning/k8s-basics/deploy-app.html#%E5%9C%A8-kubernetes-%E4%B8%8A%E9%83%A8%E7%BD%B2%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F

#### **选择默认命名空间**

选择 使用`ServiceAccount kuboard-admin `并`点击 `default`名称空间，将切换到`default `名称空间首页，如下所示：

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-33.webp)

#### **创建工作负载**

点击左侧菜单的 创建工作负载 ，将打开工作负载编辑器，添加【基本信息】如下图所示：

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-34.webp)

添加【容器信息】如下图所示：

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-35.png)

- 容器名称：`tinywan2024nginx`
- 容器镜像：`nginx:1.26.0-alpine`
- 容器端口：`80`

> 点击保存

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-36.webp)

#### **查看应用运行时**

> 此时可查看到该应用的部署结果，如下图所示：

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-37.webp)

> 点击上图中的`代理`按钮，可以直接测试部署结果。通过代理访问已部署的 nginx 服务时，默认显示结果如下所示：

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-38.webp)

#### **使用 curl 访问**

> 执行如下 curl 指令，可以访问 `Pod : default/tinywan20240428-748cc6b49b-qtlcn`

```
curl -X GET -i \
    --cookie "KuboardToken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjExY2ExZTI3Mjg3NGVkZmM5OTllYzVkYjNlMzEyYTZkODY3MDkyN2EifQ.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4zLjI5OjgwODkvc3NvIiwic3ViIjoiQ2dWaFpHMXBiaElIWkdWbVlYVnNkQSIsImF1ZCI6Imt1Ym9hcmQtc3NvIiwiZXhwIjoxNzE0NzkwODMyLCJpYXQiOjE3MTQxODYwMzIsImF0X2hhc2giOiIwQ2h0NWZkUE1MWTdoYVdqb2E1TWZnIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwcyI6WyJhZG1pbmlzdHJhdG9ycyJdLCJuYW1lIjoiU3lzdGVtIEFkbWluaXN0cmF0b3IiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiJ9.TPKgWKb6IHbYNwpIrUz8bMA_rTfWr-VM6iMfoKCDBevGnNuVqSEC22DPCmmTQNOB9pmbIjdfCvYwjaAQZ3nytmi6yD-tl7aV8UDxOF3G8adyhT-1WTwt9CqZJlz5yKByscco6DcUj1QMEi9gcieGkGf9oWlUBdNcbxyZ2rOeAZP37UiCX6jK62T790KISpNRvoXY1hTFJCf_WaQs66ip1e6vKJPCEkhqIVhAAd0eqJ4l8Hl89h2Tts7k3BiFThRfB4ogAVMgndy1aXLq6sNziSci0Pn_pAGvs4tD5sEJYG92-HDUsD1F_-TIBownh3zJVR9Icad6mW7ZipA7ts-jzg; KuboardProxy=Li4yMDI0LTA0LTI3XzIyOjMyOjI0Lk1UQXVNUzR3TGpFeC5mYWxzZS4zYmVkMjU1NGZkZjRiOGQ2YjMxMDM0YTVmYzkwMTdiOA==" \
    http://127.0.0.1:8089/k8s-proxy/Tinywan-k8s/api/v1/namespaces/default/pods/http:tinywan20240428-748cc6b49b-qtlcn:80/proxy/
```

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716409-39.webp)

#### **尝试修改一下 index.html**

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716410-40.webp)

> 再次访问

![图片](./Docker-Desktop开启内置的K8S并安装kuboard进行微服务管理.assets/640-1716210716410-41.webp)