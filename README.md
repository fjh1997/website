# 杭州印象校联企业管理有限公司 官网

基于 [Hugo](https://gohugo.io/) 构建的企业官网，支持 [Pages CMS](https://pagescms.org/) 在线内容管理。

线上地址：https://demo.yxxlhz.com/

## 环境要求

- [Hugo](https://gohugo.io/installation/) v0.112.0+（推荐 v0.156.0+）
- Git

## 本地运行

```bash
# 克隆仓库
git clone git@github.com:fjh1997/website.git
cd website

# 启动开发服务器（支持热重载）
hugo server

# 访问 http://localhost:1313
```

## 构建与部署

```bash
# 生成静态文件到 public/ 目录
hugo

# 部署：将 public/ 目录下的文件上传至 Web 服务器即可
```

站点通过 GitHub Pages 或其他静态托管平台自动部署，推送到 `main` 分支即触发构建。

## 项目结构

```
website/
├── content/                # Markdown 文章内容
│   ├── about/              # 集团概况
│   │   └── overview.md
│   ├── news/               # 新闻动态
│   ├── notice/             # 通知
│   ├── announcement/       # 公告
│   ├── party/              # 校园合作
│   └── invest/             # 招商引资
│       └── contact.md
├── layouts/                # Hugo 模板
│   ├── index.html          # 首页
│   ├── _default/
│   │   ├── list.html       # 列表页
│   │   └── single.html     # 文章详情页
│   ├── partials/
│   │   ├── footer.html     # 公共页脚
│   │   └── head-seo.html   # SEO/GEO 头部标签
│   └── robots.txt          # robots.txt 模板
├── static/                 # 静态资源（直接复制到输出目录）
│   ├── images/             # 图片资源
│   ├── css/                # 样式文件
│   └── js/                 # 脚本文件
├── hugo.toml               # Hugo 站点配置
├── .pages.yml              # Pages CMS 配置
└── public/                 # 构建输出（自动生成）
```

## 文章管理

### 文件路径

文章以 Markdown 格式存放在 `content/` 目录下，按栏目分目录：

| 栏目     | 路径                  | 说明         |
| -------- | --------------------- | ------------ |
| 新闻动态 | `content/news/`       | 集合类型     |
| 通知     | `content/notice/`     | 集合类型     |
| 公告     | `content/announcement/` | 集合类型   |
| 校园合作 | `content/party/`      | 集合类型     |
| 集团概况 | `content/about/overview.md` | 单页面 |
| 招商引资 | `content/invest/contact.md` | 单页面 |

### 新建文章

在对应栏目目录下创建 `.md` 文件，添加 Front Matter：

```markdown
---
title: "文章标题"
date: 2026-03-07
draft: false
description: "页面描述，用于 SEO"
---

正文内容...
```

### 图片

图片存放在 `static/images/` 目录下，文章中引用路径为 `/images/文件名`：

```markdown
![图片说明](/images/example.jpg)
```

## Pages CMS 在线管理

本项目集成了 [Pages CMS](https://pagescms.org/)，支持通过 Web 界面直接编辑内容，无需本地开发环境。

**管理后台地址**：https://app.pagescms.org/fjh1997/website

配置文件为项目根目录的 `.pages.yml`，定义了可管理的内容类型：

- **新闻动态** / **通知** / **公告** / **校园合作**：支持新增、编辑、删除文章
- **集团概况** / **招商引资**：支持编辑单页面内容
- **站点配置**：支持修改网站标题、描述、关键词等 SEO 参数
- **图片管理**：支持上传图片到 `static/images/`

## SEO 与 GEO

网站已内置以下优化：

- **Meta 标签**：description、keywords、author、canonical URL
- **Open Graph**：支持社交平台分享预览
- **JSON-LD 结构化数据**：LocalBusiness（首页）、FAQPage（含 FAQ 的页面）、Article（文章页）、BreadcrumbList（面包屑）
- **GEO 标签**：geo.region、geo.position、ICBM 地理坐标
- **Sitemap**：自动生成 `sitemap.xml`，支持 Google / Baidu / Bing 站长工具提交
- **robots.txt**：自动生成，包含 Sitemap 地址

## 站点验证

- **百度站长**：`static/baidu_verify_codeva-iAYtcS8KXW.html`
