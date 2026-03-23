# 原版系统镜像平台

## 项目介绍

这是一个聚合各类开源镜像与原版资源的导航平台，整合了系统镜像、常用软件、开源镜像站、前端 CDN 资源、开发语言镜像源等各类开发常用资源，方便开发者快速查找和使用国内加速的镜像资源。

## 功能特性

- 🚀 **快速导航**：页面顶部的导航按钮可以快速跳转到对应的资源板块
- 🔍 **全局搜索**：右上角的搜索框可以输入关键词，自动筛选出包含该关键词的板块
- 🌙 **主题切换**：右上角的月亮图标可以切换明/暗主题，主题设置会自动保存
- 🔗 **资源链接**：所有的站点地址都是可点击的，点击后会在新标签页打开对应的站点
- 📱 **响应式布局**：在手机、平板、电脑上都能正常显示

## 资源板块

| 板块 | 说明 |
|------|------|
| **系统镜像** | 包含 Linux 发行版、Windows 原版镜像、安卓系统镜像的下载站点 |
| **常用软件** | 常用开发软件的快速入口 |
| **开源镜像站** | 汇总了国内所有的企业和高校开源镜像站，按地区分类 |
| **前端 CDN** | 常用的前端资源 CDN 加速站点，包含国际和国内加速节点 |
| **开发源** | Python、NPM 等开发语言的国内镜像源地址 |

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 平台主页面，包含所有资源的展示结构 |
| `style.css` | 独立的样式文件，包含所有页面的 CSS 样式 |
| `script.js` | 独立的脚本文件，包含交互功能（主题切换、搜索、平滑滚动等） |
| `README.md` | 本说明文档 |

## 使用说明

### 基本使用

直接打开 `index.html` 文件即可使用，无需额外依赖。

### 技术栈

- HTML5
- Tailwind CSS
- Vanilla JavaScript

## 更换图标的方法

### 图片图标（img 标签）

如果要更换软件/系统的图片图标，修改 index.html 中对应的 `<img>` 标签即可：

```html
<!-- 原来的图标 -->
<img src="https://aka.doubaocdn.com/xxx" alt="Python" class="h-10 w-10 object-contain aspect-square">
```

```html
<!-- 更换后的图标 -->
<img src="你的新图标地址" alt="Python" class="h-10 w-10 object-contain aspect-square">
```

**注意**：请保留 class 中的 `h-10 w-10 object-contain aspect-square`，这几个类的作用：
- `h-10 w-10`：固定图标大小为 40px×40px（小图标是 `h-8 w-8` 对应 32px×32px）
- `object-contain`：保证图标内容不会拉伸变形
- `aspect-square`：保证图标始终是正方形，不会变形

### SVG 图标

如果要更换自定义的 SVG 图标，直接替换 `<svg>` 标签的内容即可，同样保留 class：

```html
<!-- 原来的SVG图标 -->
<svg class="h-10 w-10 object-contain aspect-square text-green-500" fill="currentColor" viewBox="0 0 24 24">
    <!-- 原来的path内容 -->
</svg>
```

```html
<!-- 更换后的SVG图标 -->
<svg class="h-10 w-10 object-contain aspect-square text-green-500" fill="currentColor" viewBox="0 0 24 24">
    <!-- 你的新SVG的path内容 -->
</svg>
```

### 图标大小调整

如果需要调整图标大小，只需要修改 class 中的 `h-* w-*` 即可：
- `h-8 w-8`：32px×32px（用于小图标，比如导航、板块标题的图标）
- `h-10 w-10`：40px×40px（用于大图标，比如软件、系统的图标）

## 项目统计

- 50+ 镜像站点
- 全系列系统版本
- 常用开发源汇总

## 许可证

LICENSE

