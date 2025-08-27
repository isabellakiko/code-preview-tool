# 代码预览工具 - Code Preview Tool

一个功能强大的在线代码预览工具，支持HTML、CSS、JavaScript实时预览和多设备模拟。

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ 核心特性

### 🚀 实时预览
- **即时渲染**：编写代码的同时实时查看效果
- **智能更新**：自动检测代码变化并刷新预览
- **控制台输出**：捕获并显示console.log等调试信息
- **错误提示**：实时显示JavaScript错误信息

### 📱 多设备模拟
- **桌面端预览**：全屏宽度显示
- **平板预览**：768×1024px iPad尺寸
- **手机预览**：375×667px iPhone尺寸  
- **自定义尺寸**：输入任意宽高进行测试

### 🎨 代码编辑器
- **语法高亮**：使用Prism.js提供代码高亮
- **智能缩进**：Tab键自动缩进4个空格
- **多标签切换**：HTML、CSS、JavaScript独立编辑
- **代码格式化**：一键格式化代码结构

### 📋 模板库
- **基础HTML**：标准HTML5模板
- **Bootstrap**：集成Bootstrap 5框架
- **Canvas绘图**：Canvas API示例
- **SVG图形**：可交互的SVG动画
- **CSS动画**：各种动画效果展示
- **表单示例**：完整的表单验证
- **Grid布局**：CSS Grid布局示例
- **Flexbox**：Flexbox布局演示

### 🛠️ 实用功能
- **代码下载**：导出完整HTML文件
- **全屏预览**：沉浸式预览体验
- **快捷键支持**：
  - `Ctrl+Enter` - 运行代码
  - `Ctrl+S` - 下载HTML文件
- **拖拽调整**：自由调整编辑器和预览区域大小

## 🎯 使用场景

### 适合人群
- **前端开发者**：快速测试代码片段
- **学习者**：学习HTML/CSS/JS的理想工具
- **设计师**：原型设计和效果展示
- **教师**：教学演示和代码示例

### 典型用途
- 测试HTML结构
- 调试CSS样式
- 验证JavaScript逻辑
- 制作动画效果
- 响应式设计测试
- SVG图形绘制
- Canvas绘图实验

## 🚀 快速开始

### 在线使用
直接在浏览器中打开 `index.html` 即可使用，无需安装任何依赖。

### 本地部署
```bash
# 方式1：使用Python内置服务器
python -m http.server 8080

# 方式2：使用Node.js的serve
npx serve .

# 方式3：使用VS Code的Live Server插件
# 右键点击index.html -> Open with Live Server
```

## 📖 使用说明

### 基本操作流程
1. **编写代码**：在对应的编辑器中输入HTML、CSS或JavaScript代码
2. **运行预览**：点击"运行"按钮或按 `Ctrl+Enter` 查看效果
3. **切换设备**：选择不同的设备模式查看响应式效果
4. **查看控制台**：切换到控制台标签查看输出信息
5. **保存结果**：点击"下载"按钮导出完整的HTML文件

### 高级技巧
- **使用模板**：点击"模板"按钮选择预设模板快速开始
- **调整布局**：拖动中间的分隔条调整编辑器宽度
- **全屏模式**：点击"全屏"按钮进入沉浸式预览
- **格式化代码**：点击各编辑器的"格式化"按钮整理代码

## 🛠️ 技术栈

### 前端技术
- **HTML5**：语义化标签，Canvas API
- **CSS3**：Grid布局，Flexbox，CSS变量
- **JavaScript ES6+**：类、箭头函数、模板字符串
- **iframe**：安全的代码执行环境

### 外部库
- **Prism.js**：代码语法高亮（CDN加载）
- 其余功能均为原生JavaScript实现，无其他依赖

## 📦 项目结构

```
code-preview/
├── index.html          # 主页面文件
├── preview.css         # 样式文件
├── preview.js          # 核心逻辑
├── manifest.json       # PWA配置文件
└── README.md          # 项目说明文档
```

## 🎨 界面设计

### 设计理念
- **深色主题**：减少眼部疲劳，提升专注度
- **清晰布局**：编辑器和预览区域明确分离
- **直观操作**：所有功能一目了然
- **响应式设计**：适配各种屏幕尺寸

### 色彩方案
- 主色调：`#3498db`（蓝色）
- 辅助色：`#2ecc71`（绿色）
- 背景色：`#121212`（深灰）
- 表面色：`#1e1e1e`（浅灰）

## 📋 功能对比

| 功能 | 本工具 | CodePen | JSFiddle |
|------|--------|---------|----------|
| 实时预览 | ✅ | ✅ | ✅ |
| 设备模拟 | ✅ | ❌ | ❌ |
| 离线使用 | ✅ | ❌ | ❌ |
| 代码模板 | ✅ | ✅ | ✅ |
| 控制台输出 | ✅ | ✅ | ✅ |
| 免费使用 | ✅ | 部分 | ✅ |
| 无需注册 | ✅ | ❌ | ❌ |

## 🚀 性能优化

- **按需加载**：只加载必要的外部资源
- **防抖处理**：避免频繁的预览更新
- **iframe沙箱**：隔离用户代码，保证安全
- **本地存储**：自动保存代码草稿

## 🔒 安全措施

- **沙箱隔离**：用户代码在iframe中运行
- **XSS防护**：避免直接innerHTML注入
- **CSP策略**：限制外部资源加载
- **输入验证**：防止恶意代码注入

## 🎯 未来计划

### 近期计划
- [ ] 添加更多代码模板
- [ ] 支持SCSS/LESS预处理器
- [ ] 集成更多JavaScript库
- [ ] 添加代码美化功能
- [ ] 支持多文件项目

### 长期目标
- [ ] 云端存储功能
- [ ] 协作编辑支持
- [ ] 版本控制系统
- [ ] 插件扩展机制
- [ ] AI代码补全

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

### 开发流程
1. Fork本项目
2. 创建特性分支 `git checkout -b feature/AmazingFeature`
3. 提交更改 `git commit -m 'Add some AmazingFeature'`
4. 推送到分支 `git push origin feature/AmazingFeature`
5. 提交Pull Request

### 代码规范
- 使用ES6+语法
- 遵循语义化HTML
- CSS使用BEM命名规范
- JavaScript使用驼峰命名

## 📄 开源协议

本项目采用 MIT 协议开源 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者信息

- **作者**: Stephen Chan
- **邮箱**: kaylonchan@gmail.com
- **网站**: [kaylonchan.com](https://kaylonchan.com)
- **GitHub**: [github.com/isabellakiko](https://github.com/isabellakiko)

## 🙏 致谢

- [Prism.js](https://prismjs.com/) - 代码语法高亮
- [MDN Web Docs](https://developer.mozilla.org/) - 技术参考
- 所有贡献者和用户的支持

---

*最后更新: 2025-08-27*