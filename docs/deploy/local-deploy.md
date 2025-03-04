# 私有部署

本文档提供使用 Docker 私有部署 TianGong LCA 应用的说明。该设置包括 TianGong LCA Next 应用以及完整的 Supabase 后端。

## 先决条件

- [Docker](https://docs.docker.com/get-docker/) 和 [Docker Compose](https://docs.docker.com/compose/install/)
- Git
- Docker 至少需要 4GB 可用内存
- 至少 10GB 可用磁盘空间
- 基本终端/命令行操作知识

## 安装

### 1. 克隆仓库

```bash
TODO: 将仓库 URL 替换为你自己的
git clone https://github.com/linancn/tiangong-lca-next.git
cd tiangong-lca-next
```

### 2. 配置环境变量

```bash
cd docker
cp .env.example .env
```

编辑 `.env` 文件以设置你的配置：

重要的配置变量包括：

- `POSTGRES_PASSWORD`：为你的 PostgreSQL 数据库设置强密码
- `JWT_SECRET`：设置一个安全的 JWT 密钥（至少 32 个字符）
- `ANON_KEY` 和 `SERVICE_ROLE_KEY`：用于 Supabase 认证的 JWT 令牌
- `DASHBOARD_USERNAME` 和 `DASHBOARD_PASSWORD`：Supabase 仪表板的登录凭据
- `SMTP_*`：需要配置邮件设置以启用邮件认证
- `POOLER_TENANT_ID`：Pooler 服务的租户 ID

### 3. 启动服务

```bash
# 启动所有服务
docker compose up -d
```

这将启动以下服务：

- TianGong LCA Next 应用
- Supabase 服务（包括 PostgreSQL、认证、REST API、实时、存储等）
- 辅助服务（如 Vector、Imgproxy 等）

### 4. 访问应用

在所有服务运行后，你可以访问：

- **TianGong LCA 应用**：[http://localhost:8000](http://localhost:8000)

  - 默认用户：
    - 邮箱：[admin@tiangong.earth](mailto:admin@tiangong.earth)
    - 密码：TianGongAdmin

- **Supabase Studio**：[http://localhost:54321](http://localhost:54321)
- **Postgres**：
  - 用于基于会话的连接（相当于直接连接 Postgres）:

    ```bash
    psql 'postgres://postgres.your-tenant-id:your-super-secret-and-long-postgres-password@localhost:5432/postgres'
    ```

  - 用于池化的事务连接：

    ```bash
    psql 'postgres://postgres.your-tenant-id:your-super-secret-and-long-postgres-password@localhost:6543/postgres'
    ```

- 关于如何使用 Supabase Studio 和 Postgres 的更多信息，请参阅 [Supabase 文档](https://supabase.com/docs/guides/self-hosting/docker#accessing-postgres)。

## Docker 服务管理

### 启动服务

启动 Docker 服务有几种方式：

```bash
# 以后台模式启动所有服务
docker compose up -d

# 启动所有服务并在终端显示日志
docker compose up
```

### 停止服务

```bash
# 停止所有服务，但保留容器
docker compose stop

# 停止所有服务并移除容器
docker compose down

# 停止所有服务、移除容器并删除数据卷（注意：此操作将删除所有数据）
docker compose down -v
```

### 重启服务

```bash
# 重启所有服务
docker compose restart
```

### 检查服务状态

```bash
# 列出所有服务及其状态
docker compose ps

# 检查指定服务的详细状态
docker compose ps app

# 查看所有服务的资源使用情况
docker stats
```

### 重建服务

如果你修改了应用代码：

```bash
# 为 app 服务重建并重启
docker compose up -d --build app

# 重建所有服务
docker compose up -d --build
```

## 配置选项

### Edge Functions

该设置支持 Supabase Edge Functions，函数存储在 `docker/volumes/functions` 目录中。

要从外部仓库同步 Edge Functions，请按照以下步骤操作：

```bash
# 创建临时目录
mkdir -p temp_repo

# 克隆 Edge Functions 仓库
git clone --depth 1 https://github.com/linancn/tiangong-lca-edge-functions.git temp_repo

# 将 Edge Functions 复制到 Docker 数据卷目录
mkdir -p docker/volumes/functions
cp -r temp_repo/supabase/functions/* docker/volumes/functions/

# 将 Edge Functions 复制到本地 Supabase 目录
cp -r temp_repo/supabase/functions/* supabase/functions/

# 清理临时目录
rm -rf temp_repo
```

## 维护

### 更新

若要更新服务，请执行：

```bash
# 拉取最新镜像
docker compose pull

# 重启服务
docker compose up -d
```

### 备份

备份 PostgreSQL 数据库：

```bash
# 创建 PostgreSQL 数据库备份
docker exec -t supabase-db pg_dumpall -c -U postgres > backup_$(date +%Y-%m-%d_%H-%M-%S).sql
```

### 恢复

从备份恢复数据：

```bash
# 停止服务
docker compose down

# 重置数据库卷
rm -rf ./volumes/db/data

# 启动数据库服务
docker compose up -d db

# 等待数据库准备就绪
sleep 10

# 从备份文件恢复
cat your_backup_file.sql | docker exec -i supabase-db psql -U postgres

# 启动所有服务
docker compose up -d
```

### 重置环境

若需完全重置环境：

```bash
# 运行重置脚本
./reset.sh
```

此脚本将执行以下操作：

1. 停止并移除所有容器
2. 删除所有数据卷
3. 将 `.env` 文件重置为默认值

## 故障排查

### 常见问题

#### 服务未能启动

检查日志以查看错误信息：

```bash
docker compose logs
```

查看特定服务的日志：

```bash
docker compose logs app
docker compose logs db
```

#### 数据库连接问题

确保数据库正在运行且状态正常：

```bash
docker compose ps db
```

查看数据库日志：

```bash
docker compose logs db
```

### 查看日志

```bash
# 查看所有日志信息
docker compose logs -f

# 查看指定服务的日志
docker compose logs -f app
docker compose logs -f db
docker compose logs -f auth
```

## 安全注意事项

对于生产环境部署，请考虑以下安全措施：

1. **更改默认凭据**：更新 `.env` 文件中所有默认密码和密钥
2. **使用 HTTPS**：配置带 SSL/TLS 的反向代理以确保安全连接
3. **限制访问**：使用防火墙规则限制对服务的访问
4. **定期备份**：实施定期备份策略
5. **升级更新**：保持 Docker 镜像和主机系统处于最新状态

## 附加资源

- [TianGong LCA Next 项目](https://github.com/linancn/tiangong-lca-next)
- [TianGong LCA 平台网站](https://lca.tiangong.earth/welcome)
- [Supabase 文档](https://supabase.com/docs)
- [Docker 文档](https://docs.docker.com/)
- [PostgreSQL 文档](https://www.postgresql.org/docs/)
