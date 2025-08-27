// 代码预览工具 - 核心功能
class CodePreviewTool {
    constructor() {
        this.editors = {
            html: document.getElementById('htmlEditor'),
            css: document.getElementById('cssEditor'),
            js: document.getElementById('jsEditor')
        };
        
        this.previewFrame = document.getElementById('previewFrame');
        this.consoleOutput = document.getElementById('consoleOutput');
        this.currentDevice = 'desktop';
        
        // 代码模板
        this.templates = {
            basic: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>基础模板</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>这是一个基础HTML模板</p>\n</body>\n</html>',
                css: 'body {\n    font-family: Arial, sans-serif;\n    padding: 20px;\n}\n\nh1 {\n    color: #333;\n}',
                js: '// JavaScript代码\nconsole.log("Hello, World!");'
            },
            bootstrap: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Bootstrap模板</title>\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body>\n    <div class="container mt-5">\n        <div class="row">\n            <div class="col-md-12">\n                <h1 class="text-center">Bootstrap 5 模板</h1>\n                <div class="alert alert-success" role="alert">\n                    Bootstrap 已加载成功！\n                </div>\n                <button class="btn btn-primary">主要按钮</button>\n                <button class="btn btn-secondary">次要按钮</button>\n            </div>\n        </div>\n    </div>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n</body>\n</html>',
                css: '/* 自定义样式 */\n.container {\n    margin-top: 50px;\n}',
                js: '// Bootstrap交互\ndocument.querySelector(".btn-primary").addEventListener("click", function() {\n    alert("你点击了主要按钮！");\n});'
            },
            canvas: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Canvas绘图</title>\n</head>\n<body>\n    <h1>Canvas绘图示例</h1>\n    <canvas id="myCanvas" width="400" height="400"></canvas>\n</body>\n</html>',
                css: 'body {\n    font-family: Arial, sans-serif;\n    text-align: center;\n    padding: 20px;\n}\n\ncanvas {\n    border: 2px solid #333;\n    display: block;\n    margin: 20px auto;\n}',
                js: '// Canvas绘图代码\nconst canvas = document.getElementById("myCanvas");\nconst ctx = canvas.getContext("2d");\n\n// 绘制渐变背景\nconst gradient = ctx.createLinearGradient(0, 0, 400, 400);\ngradient.addColorStop(0, "#667eea");\ngradient.addColorStop(1, "#764ba2");\nctx.fillStyle = gradient;\nctx.fillRect(0, 0, 400, 400);\n\n// 绘制圆形\nctx.beginPath();\nctx.arc(200, 200, 100, 0, Math.PI * 2);\nctx.fillStyle = "white";\nctx.fill();\n\n// 绘制文字\nctx.font = "30px Arial";\nctx.fillStyle = "#333";\nctx.textAlign = "center";\nctx.fillText("Canvas", 200, 210);'
            },
            svg: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>SVG图形</title>\n</head>\n<body>\n    <h1>SVG图形示例</h1>\n    <svg width="400" height="400" viewBox="0 0 400 400">\n        <!-- 渐变定义 -->\n        <defs>\n            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">\n                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />\n                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />\n            </linearGradient>\n        </defs>\n        \n        <!-- 背景矩形 -->\n        <rect width="400" height="400" fill="url(#grad1)" />\n        \n        <!-- 圆形 -->\n        <circle cx="200" cy="200" r="80" fill="white" stroke="#333" stroke-width="2">\n            <animate attributeName="r" from="80" to="100" dur="2s" repeatCount="indefinite" />\n        </circle>\n        \n        <!-- 文字 -->\n        <text x="200" y="210" font-size="30" text-anchor="middle" fill="#333">SVG</text>\n        \n        <!-- 多边形 -->\n        <polygon points="200,50 250,150 150,150" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="2" />\n    </svg>\n</body>\n</html>',
                css: 'body {\n    font-family: Arial, sans-serif;\n    text-align: center;\n    padding: 20px;\n}\n\nsvg {\n    border: 2px solid #333;\n    display: block;\n    margin: 20px auto;\n}',
                js: '// SVG交互\nconst circle = document.querySelector("circle");\ncircle.addEventListener("click", function() {\n    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);\n    this.setAttribute("fill", randomColor);\n    console.log("圆形颜色已更改为: " + randomColor);\n});'
            },
            animation: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>CSS动画</title>\n</head>\n<body>\n    <h1>CSS动画示例</h1>\n    <div class="animation-container">\n        <div class="box box1">旋转</div>\n        <div class="box box2">缩放</div>\n        <div class="box box3">滑动</div>\n        <div class="box box4">渐变</div>\n    </div>\n</body>\n</html>',
                css: 'body {\n    font-family: Arial, sans-serif;\n    text-align: center;\n    padding: 20px;\n}\n\n.animation-container {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 50px;\n}\n\n.box {\n    width: 100px;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-weight: bold;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.box1 {\n    background: #3498db;\n    animation: rotate 3s linear infinite;\n}\n\n.box2 {\n    background: #e74c3c;\n    animation: scale 2s ease-in-out infinite;\n}\n\n.box3 {\n    background: #2ecc71;\n    animation: slide 2s ease-in-out infinite;\n}\n\n.box4 {\n    background: linear-gradient(45deg, #667eea, #764ba2);\n    animation: fade 2s ease-in-out infinite;\n}\n\n@keyframes rotate {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n}\n\n@keyframes scale {\n    0%, 100% { transform: scale(1); }\n    50% { transform: scale(1.2); }\n}\n\n@keyframes slide {\n    0%, 100% { transform: translateX(0); }\n    50% { transform: translateX(20px); }\n}\n\n@keyframes fade {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.5; }\n}',
                js: '// 点击动画控制\nconst boxes = document.querySelectorAll(".box");\nboxes.forEach(box => {\n    box.addEventListener("click", function() {\n        this.style.animationPlayState = \n            this.style.animationPlayState === "paused" ? "running" : "paused";\n        console.log("动画状态: " + this.style.animationPlayState);\n    });\n});'
            },
            form: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>表单示例</title>\n</head>\n<body>\n    <div class="container">\n        <h1>用户注册表单</h1>\n        <form id="userForm">\n            <div class="form-group">\n                <label for="username">用户名：</label>\n                <input type="text" id="username" name="username" required>\n            </div>\n            <div class="form-group">\n                <label for="email">邮箱：</label>\n                <input type="email" id="email" name="email" required>\n            </div>\n            <div class="form-group">\n                <label for="password">密码：</label>\n                <input type="password" id="password" name="password" required>\n            </div>\n            <div class="form-group">\n                <label for="gender">性别：</label>\n                <select id="gender" name="gender">\n                    <option value="">请选择</option>\n                    <option value="male">男</option>\n                    <option value="female">女</option>\n                    <option value="other">其他</option>\n                </select>\n            </div>\n            <div class="form-group">\n                <label>\n                    <input type="checkbox" name="agree" required>\n                    同意用户协议\n                </label>\n            </div>\n            <button type="submit">提交</button>\n        </form>\n    </div>\n</body>\n</html>',
                css: '.container {\n    max-width: 400px;\n    margin: 50px auto;\n    padding: 30px;\n    background: #f5f5f5;\n    border-radius: 10px;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n\nh1 {\n    text-align: center;\n    color: #333;\n    margin-bottom: 30px;\n}\n\n.form-group {\n    margin-bottom: 20px;\n}\n\nlabel {\n    display: block;\n    margin-bottom: 5px;\n    color: #555;\n    font-weight: bold;\n}\n\ninput[type="text"],\ninput[type="email"],\ninput[type="password"],\nselect {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 14px;\n}\n\ninput:focus,\nselect:focus {\n    outline: none;\n    border-color: #4CAF50;\n}\n\nbutton {\n    width: 100%;\n    padding: 12px;\n    background: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background 0.3s;\n}\n\nbutton:hover {\n    background: #45a049;\n}',
                js: '// 表单验证\nconst form = document.getElementById("userForm");\nform.addEventListener("submit", function(e) {\n    e.preventDefault();\n    \n    const formData = new FormData(form);\n    const data = {};\n    \n    for (let [key, value] of formData.entries()) {\n        data[key] = value;\n    }\n    \n    console.log("表单数据：", data);\n    alert("表单提交成功！\\n" + JSON.stringify(data, null, 2));\n});'
            },
            grid: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Grid布局</title>\n</head>\n<body>\n    <h1>CSS Grid布局示例</h1>\n    <div class="grid-container">\n        <div class="grid-item header">头部</div>\n        <div class="grid-item sidebar">侧边栏</div>\n        <div class="grid-item content">主要内容</div>\n        <div class="grid-item extra">额外内容</div>\n        <div class="grid-item footer">底部</div>\n    </div>\n</body>\n</html>',
                css: 'body {\n    font-family: Arial, sans-serif;\n    padding: 20px;\n    margin: 0;\n}\n\nh1 {\n    text-align: center;\n    color: #333;\n}\n\n.grid-container {\n    display: grid;\n    grid-template-columns: 200px 1fr 200px;\n    grid-template-rows: 100px auto 100px;\n    gap: 10px;\n    height: 500px;\n    margin: 20px auto;\n    max-width: 900px;\n}\n\n.grid-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-weight: bold;\n    font-size: 18px;\n    border-radius: 5px;\n}\n\n.header {\n    grid-column: 1 / -1;\n    background: #3498db;\n}\n\n.sidebar {\n    background: #e74c3c;\n}\n\n.content {\n    background: #2ecc71;\n}\n\n.extra {\n    background: #f39c12;\n}\n\n.footer {\n    grid-column: 1 / -1;\n    background: #9b59b6;\n}',
                js: '// Grid交互\nconst gridItems = document.querySelectorAll(".grid-item");\ngridItems.forEach(item => {\n    item.addEventListener("click", function() {\n        const currentBg = this.style.background;\n        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);\n        this.style.background = randomColor;\n        console.log("区域颜色更改: " + this.textContent + " -> " + randomColor);\n    });\n});'
            },
            flex: {
                html: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Flexbox布局</title>\n</head>\n<body>\n    <h1>Flexbox布局示例</h1>\n    <div class="flex-container">\n        <div class="flex-item">1</div>\n        <div class="flex-item">2</div>\n        <div class="flex-item">3</div>\n        <div class="flex-item">4</div>\n        <div class="flex-item">5</div>\n    </div>\n    \n    <div class="controls">\n        <button onclick="changeDirection()">切换方向</button>\n        <button onclick="changeJustify()">切换对齐</button>\n        <button onclick="changeWrap()">切换换行</button>\n    </div>\n</body>\n</html>',
                css: 'body {\n    font-family: Arial, sans-serif;\n    padding: 20px;\n}\n\nh1 {\n    text-align: center;\n    color: #333;\n}\n\n.flex-container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 300px;\n    background: #f0f0f0;\n    border: 2px solid #333;\n    border-radius: 10px;\n    padding: 20px;\n    margin: 20px 0;\n}\n\n.flex-item {\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    color: white;\n    width: 100px;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 24px;\n    font-weight: bold;\n    border-radius: 10px;\n    margin: 10px;\n    transition: transform 0.3s;\n}\n\n.flex-item:hover {\n    transform: scale(1.1);\n}\n\n.controls {\n    text-align: center;\n    margin-top: 20px;\n}\n\n.controls button {\n    padding: 10px 20px;\n    margin: 0 5px;\n    background: #3498db;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 14px;\n}\n\n.controls button:hover {\n    background: #2980b9;\n}',
                js: '// Flexbox控制\nconst container = document.querySelector(".flex-container");\nlet directionIndex = 0;\nlet justifyIndex = 0;\nlet wrapIndex = 0;\n\nconst directions = ["row", "row-reverse", "column", "column-reverse"];\nconst justifyValues = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];\nconst wrapValues = ["nowrap", "wrap", "wrap-reverse"];\n\nfunction changeDirection() {\n    directionIndex = (directionIndex + 1) % directions.length;\n    container.style.flexDirection = directions[directionIndex];\n    console.log("Flex方向: " + directions[directionIndex]);\n}\n\nfunction changeJustify() {\n    justifyIndex = (justifyIndex + 1) % justifyValues.length;\n    container.style.justifyContent = justifyValues[justifyIndex];\n    console.log("对齐方式: " + justifyValues[justifyIndex]);\n}\n\nfunction changeWrap() {\n    wrapIndex = (wrapIndex + 1) % wrapValues.length;\n    container.style.flexWrap = wrapValues[wrapIndex];\n    console.log("换行方式: " + wrapValues[wrapIndex]);\n}'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupConsoleInterception();
        this.setupMouseFollowEffect();
        this.runCode(); // 初始运行
    }
    
    setupMouseFollowEffect() {
        // 添加鼠标跟随背景效果
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            document.documentElement.style.setProperty('--mouse-x', x + '%');
            document.documentElement.style.setProperty('--mouse-y', y + '%');
            
            // 激活背景动画
            document.body.style.setProperty('--mouse-active', '1');
        });
        
        // 鼠标离开时淡出效果
        document.addEventListener('mouseleave', () => {
            document.body.style.setProperty('--mouse-active', '0');
        });
        
        // 为毛玻璃元素添加微妙的悬停效果
        const glassElements = document.querySelectorAll('.toolbar, .editor-tabs, .device-selector, .tool-btn, .modal-content');
        glassElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-1px)';
                element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(255, 255, 255, 0.1) inset';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
                element.style.boxShadow = '';
            });
        });
        
        // 为编辑器添加焦点光晕效果
        Object.values(this.editors).forEach(editor => {
            editor.addEventListener('focus', () => {
                editor.parentElement.style.boxShadow = '0 0 0 1px rgba(0, 122, 255, 0.3), 0 0 20px rgba(0, 122, 255, 0.1)';
                editor.parentElement.style.borderColor = 'rgba(0, 122, 255, 0.3)';
            });
            
            editor.addEventListener('blur', () => {
                editor.parentElement.style.boxShadow = '';
                editor.parentElement.style.borderColor = '';
            });
        });
    }
    
    setupEventListeners() {
        // 标签切换
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.closest('.tab-btn').dataset.tab);
            });
        });
        
        // 设备切换
        document.querySelectorAll('.device-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchDevice(e.target.closest('.device-btn').dataset.device);
            });
        });
        
        // 运行按钮
        document.getElementById('runBtn').addEventListener('click', () => this.runCode());
        
        // 清空按钮
        document.getElementById('clearBtn').addEventListener('click', () => this.clearCode());
        
        // 全屏预览
        document.getElementById('fullscreenBtn').addEventListener('click', () => this.toggleFullscreen());
        
        // 下载按钮
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadHTML());
        
        // 模板按钮
        document.getElementById('templatesBtn').addEventListener('click', () => this.showTemplates());
        
        // 刷新预览
        document.getElementById('refreshBtn').addEventListener('click', () => this.runCode());
        
        // 自定义尺寸
        document.querySelector('.apply-btn').addEventListener('click', () => this.applyCustomSize());
        
        // 清空控制台
        document.querySelector('.clear-console-btn').addEventListener('click', () => this.clearConsole());
        
        // 格式化按钮
        document.querySelectorAll('.format-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.formatCode(e.target.dataset.type);
            });
        });
        
        // 快捷键
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.runCode();
                } else if (e.key === 's') {
                    e.preventDefault();
                    this.downloadHTML();
                }
            }
        });
        
        // 调整器
        this.setupResizer();
        
        // 模态框关闭
        document.querySelector('.modal-close').addEventListener('click', () => {
            document.getElementById('templatesModal').style.display = 'none';
        });
        
        // 模板选择
        document.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.loadTemplate(e.target.closest('.template-card').dataset.template);
            });
        });
        
        // Tab键处理
        this.editors.html.addEventListener('keydown', (e) => this.handleTab(e));
        this.editors.css.addEventListener('keydown', (e) => this.handleTab(e));
        this.editors.js.addEventListener('keydown', (e) => this.handleTab(e));
    }
    
    handleTab(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const value = e.target.value;
            e.target.value = value.substring(0, start) + '    ' + value.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 4;
        }
    }
    
    setupResizer() {
        const resizer = document.getElementById('resizer');
        const editorPanel = document.querySelector('.editor-panel');
        const previewPanel = document.querySelector('.preview-panel');
        let isResizing = false;
        
        resizer.addEventListener('mousedown', () => {
            isResizing = true;
            resizer.classList.add('resizing');
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            
            const containerWidth = document.querySelector('.main-content').offsetWidth;
            const newEditorWidth = e.clientX - editorPanel.offsetLeft;
            
            if (newEditorWidth > 300 && newEditorWidth < containerWidth - 300) {
                editorPanel.style.flex = `0 0 ${newEditorWidth}px`;
                previewPanel.style.flex = '1';
            }
        });
        
        document.addEventListener('mouseup', () => {
            isResizing = false;
            resizer.classList.remove('resizing');
        });
    }
    
    switchTab(tab) {
        // 更新标签状态
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        
        // 更新编辑器显示
        document.querySelectorAll('.editor-wrapper').forEach(wrapper => {
            wrapper.classList.remove('active');
        });
        document.querySelector(`[data-editor="${tab}"]`).classList.add('active');
    }
    
    switchDevice(device) {
        // 更新按钮状态
        document.querySelectorAll('.device-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-device="${device}"]`).classList.add('active');
        
        // 更新预览面板
        const previewPanel = document.querySelector('.preview-panel');
        previewPanel.setAttribute('data-device', device);
        
        // 显示/隐藏自定义尺寸输入
        const customInput = document.querySelector('.custom-size-input');
        if (device === 'custom') {
            customInput.style.display = 'flex';
        } else {
            customInput.style.display = 'none';
        }
        
        // 更新尺寸显示
        this.updateSizeDisplay();
    }
    
    applyCustomSize() {
        const width = document.getElementById('customWidth').value;
        const height = document.getElementById('customHeight').value;
        const frame = this.previewFrame;
        
        frame.style.width = width + 'px';
        frame.style.height = height + 'px';
        
        this.updateSizeDisplay();
    }
    
    updateSizeDisplay() {
        const frame = this.previewFrame;
        const width = frame.offsetWidth;
        const height = frame.offsetHeight;
        document.getElementById('previewSize').textContent = `${width} × ${height}`;
    }
    
    runCode() {
        const html = this.editors.html.value;
        const css = this.editors.css.value;
        const js = this.editors.js.value;
        
        // 构建完整的HTML文档
        const completeHTML = this.buildCompleteHTML(html, css, js);
        
        // 更新iframe内容
        const frame = this.previewFrame;
        frame.srcdoc = completeHTML;
        
        // 清空控制台
        this.clearConsole();
        
        // 添加运行日志
        this.addConsoleLog('info', '代码已运行 ' + new Date().toLocaleTimeString());
    }
    
    buildCompleteHTML(html, css, js) {
        // 如果HTML已经包含完整的文档结构，直接使用
        if (html.includes('<!DOCTYPE') || html.includes('<html')) {
            // 注入CSS和JS
            const headEnd = html.indexOf('</head>');
            const bodyEnd = html.indexOf('</body>');
            
            let result = html;
            
            if (css && headEnd > -1) {
                result = result.slice(0, headEnd) + 
                    `<style>${css}</style>` + 
                    result.slice(headEnd);
            }
            
            if (js && bodyEnd > -1) {
                const wrappedJS = this.wrapJavaScript(js);
                result = result.slice(0, bodyEnd) + 
                    `<script>${wrappedJS}</script>` + 
                    result.slice(bodyEnd);
            }
            
            return result;
        }
        
        // 构建完整的HTML文档
        return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>预览</title>
    <style>${css}</style>
</head>
<body>
    ${html}
    <script>${this.wrapJavaScript(js)}</script>
</body>
</html>`;
    }
    
    wrapJavaScript(js) {
        // 包装JavaScript代码以捕获console输出
        return `
            (function() {
                // 重写console方法
                const originalConsole = {
                    log: console.log,
                    error: console.error,
                    warn: console.warn,
                    info: console.info
                };
                
                console.log = function(...args) {
                    parent.postMessage({
                        type: 'console',
                        method: 'log',
                        args: args.map(arg => {
                            if (typeof arg === 'object') {
                                return JSON.stringify(arg, null, 2);
                            }
                            return String(arg);
                        })
                    }, '*');
                    originalConsole.log.apply(console, args);
                };
                
                console.error = function(...args) {
                    parent.postMessage({
                        type: 'console',
                        method: 'error',
                        args: args.map(arg => String(arg))
                    }, '*');
                    originalConsole.error.apply(console, args);
                };
                
                console.warn = function(...args) {
                    parent.postMessage({
                        type: 'console',
                        method: 'warn',
                        args: args.map(arg => String(arg))
                    }, '*');
                    originalConsole.warn.apply(console, args);
                };
                
                console.info = function(...args) {
                    parent.postMessage({
                        type: 'console',
                        method: 'info',
                        args: args.map(arg => String(arg))
                    }, '*');
                    originalConsole.info.apply(console, args);
                };
                
                // 捕获错误
                window.addEventListener('error', function(e) {
                    parent.postMessage({
                        type: 'console',
                        method: 'error',
                        args: [e.message + ' (行 ' + e.lineno + ')']
                    }, '*');
                });
                
                // 用户代码
                ${js}
            })();
        `;
    }
    
    setupConsoleInterception() {
        // 监听来自iframe的消息
        window.addEventListener('message', (e) => {
            if (e.data.type === 'console') {
                this.addConsoleLog(e.data.method, ...e.data.args);
            }
        });
    }
    
    addConsoleLog(type, ...messages) {
        const log = document.createElement('div');
        log.className = `console-log ${type}`;
        log.textContent = messages.join(' ');
        this.consoleOutput.appendChild(log);
        this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
    }
    
    clearConsole() {
        this.consoleOutput.innerHTML = '';
    }
    
    clearCode() {
        if (confirm('确定要清空所有代码吗？')) {
            this.editors.html.value = '';
            this.editors.css.value = '';
            this.editors.js.value = '';
            this.runCode();
        }
    }
    
    toggleFullscreen() {
        const previewPanel = document.querySelector('.preview-panel');
        
        if (!document.fullscreenElement) {
            previewPanel.requestFullscreen().catch(err => {
                console.error('全屏失败:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    downloadHTML() {
        const html = this.editors.html.value;
        const css = this.editors.css.value;
        const js = this.editors.js.value;
        
        const completeHTML = this.buildCompleteHTML(html, css, js);
        
        const blob = new Blob([completeHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'preview_' + Date.now() + '.html';
        a.click();
        URL.revokeObjectURL(url);
    }
    
    showTemplates() {
        document.getElementById('templatesModal').style.display = 'flex';
    }
    
    loadTemplate(templateName) {
        const template = this.templates[templateName];
        if (template) {
            this.editors.html.value = template.html;
            this.editors.css.value = template.css;
            this.editors.js.value = template.js;
            this.runCode();
            document.getElementById('templatesModal').style.display = 'none';
        }
    }
    
    formatCode(type) {
        // 简单的代码格式化
        const editor = this.editors[type];
        let code = editor.value;
        
        // 基础格式化（实际项目中可以使用专业的格式化库）
        if (type === 'html') {
            // HTML格式化逻辑
            code = code.replace(/></g, '>\n<');
        } else if (type === 'css') {
            // CSS格式化逻辑
            code = code.replace(/;/g, ';\n    ');
            code = code.replace(/{/g, ' {\n    ');
            code = code.replace(/}/g, '\n}\n');
        } else if (type === 'js') {
            // JS格式化逻辑
            code = code.replace(/;/g, ';\n');
            code = code.replace(/{/g, ' {\n    ');
            code = code.replace(/}/g, '\n}');
        }
        
        editor.value = code;
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    const app = new CodePreviewTool();
});