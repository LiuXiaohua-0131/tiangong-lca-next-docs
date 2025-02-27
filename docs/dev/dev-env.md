---
sidebar_position: 1
---

# 开发环境配置

## 安装依赖

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

nvm install
nvm alias default 20
nvm use

npm install
```

## 提供的脚本

在 `package.json` 中提供的脚本，您可以安全地修改或添加额外的脚本：

### 启动项目

```bash
npm start
```

### 构建项目

```bash
npm run build
```

### 检查代码格式

```bash
npm run lint
```

您也可以使用以下脚本自动修复格式错误：

```bash
npm run lint:fix
```

### 测试代码

```bash
npm test
```

### 发布

```bash
# 列出已有标签
git tag
# 创建一个新的标签
git tag v0.0.1
# 将该标签推送到远程
git push origin v0.0.1
```

## 现在您可以运行本地开发服务器了

🚀 **使用 VSCode 启动程序配置进行调试！** 🚀

应用程序会运行在 [localhost:8000](http://localhost:8000/) 上。
