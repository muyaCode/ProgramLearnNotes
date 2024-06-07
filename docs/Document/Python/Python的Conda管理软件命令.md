# Python的Conda管理软件命令

Conda是Python环境和软件包管理的工具，可以帮助用户处理包依赖、虚拟环境等问题。

## 简单

```bash
# 安装Python版本
conda install python=2.7.18
conda install python=3.11.5

# 创建虚拟环境
conda create --name py2718 python=2.7.18
conda create --name py3115 python=3.11.5

# 激活虚拟环境
conda activate py2718
conda activate py3115
```

## 1.默认路径下创建新环境

```bash
conda create -n name python=3.7(python版本自己指定)
```

可以使用如下命令查看当前有哪些环境

```bash
conda env list
```

### 切换到新创建的环境

```bash
conda activate test  
# 可以省略conda
activate test  
```

### 退出当前环境

```bash
conda deactivate
```

### 删除环境

```bash
conda remove -n test --all
```

## 2.指定路径下创建环境

```bash
conda create --prefix=F:\condaenv\env_name python=3.7 
```

F:\condaenv\env_name 替换为你自己的路径
其它命令也有一点小变化，如下：

```bash
activate  F:\condaenv\env_name  激活环境
conda remove -p F:\condaenv\env_name --all 
```

## 环境管理

- `conda create`：创建一个新的conda环境。
- `conda env list`：列出所有conda环境。
- `conda activate`：激活某个conda环境。
- `conda deactivate`：退出当前conda环境。
- `conda env export`：导出当前conda环境中所有的包信息到YAML文件。
- `conda env remove`：删除某个conda环境。

## 包管理

- `conda install`：安装包。
- `conda update`：更新包。
- `conda remove`：删除包。
- `conda list`：列出已安装的包及版本号。
- `conda search`：搜索可用包，以及包所在的channel。

## 频道管理

- `conda config --add channels`：添加channel。
- `conda config --remove channels`：移除channel。
- `conda config --show channels`：查看现有channel。
- `conda config --set channel_priority strict`：设置channel解析优先级。

## 软件包配额

- `conda config`：列出各种Conda配置选项和其默认值。
- `conda config --get`：获取特定配置选项的当前值。
- `conda config --set`：设置特定的配置选项。
- `conda clean --all`：清理缓存和未使用的软件包。

## 其他命令

- `conda info`：获取有关conda安装的详细信息。
- `conda update conda`：更新conda本身。
- `conda install anaconda`：安装anaconda套件，包括大量的Python数据科学和机器学习包。
- `conda install -c conda-forge packagename`：从conda-forge channel中安装软件包