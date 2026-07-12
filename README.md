# site/ — VitePress 站点源（GitHub Pages）

AnotherU 用户使用说明 + 更新日志的站点源，部署到 GitHub Pages。

## 目录结构

```
site/
├── package.json            # 依赖与脚本
├── .vitepress/config.ts    # 导航 / 侧边栏 / 主题
├── index.md                # 站点首页
├── guide/                  # 用户使用说明（说明书统一源，本目录即权威）
│   ├── index.md            # 说明概览
│   └── au-touch-bar.md     # Au 触摸条
└── changelog/              # 更新日志 + 下载页（阶段 D 填充）
    └── index.md
```

## 本地开发

```bash
cd docs/Au发版/site
npm install        # 首次
npm run docs:dev   # 本地预览 http://localhost:5173/AnotherU/
npm run docs:build # 构建静态站点到 .vitepress/dist
```

## 说明书源约定

用户说明书**统一写在 `guide/` 下，此处即单一权威源**（原顶层 `说明书/` 目录已废弃）。新增一个上线功能：

1. 在 `guide/` 加一篇 `功能名.md`；
2. 在 `.vitepress/config.ts` 的 sidebar 里加一条；
3. 在 `guide/index.md` 功能列表补一行。

## 部署

阶段 C 配 `.github/workflows/`，push 到默认分支自动构建部署到 GitHub Pages。`base` 已设为 `/AnotherU/`（仓库名）。
