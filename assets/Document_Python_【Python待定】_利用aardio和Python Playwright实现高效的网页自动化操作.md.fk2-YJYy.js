import{_ as n,c as s,o as a,a3 as p}from"./chunks/framework.zGi9i9Bf.js";const h=JSON.parse('{"title":"利用aardio和Python Playwright实现高效的网页自动化操作","description":"","frontmatter":{},"headers":[],"relativePath":"Document/Python/【Python待定】/利用aardio和Python Playwright实现高效的网页自动化操作.md","filePath":"Document/Python/【Python待定】/利用aardio和Python Playwright实现高效的网页自动化操作.md","lastUpdated":1714572988000}'),e={name:"Document/Python/【Python待定】/利用aardio和Python Playwright实现高效的网页自动化操作.md"},l=p(`<h1 id="利用aardio和python-playwright实现高效的网页自动化操作" tabindex="-1">利用aardio和Python Playwright实现高效的网页自动化操作 <a class="header-anchor" href="#利用aardio和python-playwright实现高效的网页自动化操作" aria-label="Permalink to &quot;利用aardio和Python Playwright实现高效的网页自动化操作&quot;">​</a></h1><p><a href="https://mp.weixin.qq.com/s/F6sLUiY0v0YWyYDYSO2L4Q" target="_blank" rel="noreferrer">利用aardio和Python Playwright实现高效的网页自动化操作 (qq.com)</a></p><h3 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h3><p>在上一章中，我们已经实现aardio调用Python Playwright库，本文将进阶介绍如何结合aardio和Python Playwright库，实现高效的网页自动化操作。</p><p><strong>aardio与webview2的结合</strong></p><p>aardio是一款轻量级的编程语言，它以其简洁的语法和高效的性能而受到开发者的喜爱。而webview2是一个功能强大的浏览器控件，它支持现代Web标准，能够嵌入到桌面应用程序中。通过aardio，我们可以轻松地开启webview2的远程调试端口，为后续的自动化操作奠定基础。</p><h2 id="案例分析-自动化百度搜索" tabindex="-1">案例分析：自动化百度搜索 <a class="header-anchor" href="#案例分析-自动化百度搜索" aria-label="Permalink to &quot;案例分析：自动化百度搜索&quot;">​</a></h2><p>我们将以百度搜索为例，演示如何通过Playwright实现百度搜索的自动化流程。从开启远程端口到编写Python脚本，帮助您理解自动化操作的全过程。</p><ol><li>开启webview2远程端口</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>//第4个参数为0则开启远程端口，取空闲端口号</span></span>
<span class="line"><span>wb = web.view2(mainForm,,,0)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>开启后，分配的端口号用wb.remoteDebuggingPort 获取</p><ol start="2"><li>playwright附加webview2</li></ol><p>关键代码：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span># 使用chromium.connect_over_cdp远程连接webview</span></span>
<span class="line"><span>browser = playwright.chromium.connect_over_cdp(&quot;http://127.0.0.1:\${port}&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>使用connect_over_cdp方法附加，参数为地址端口号，这里\${port}用了aardio 的字符串模板，使用后会替换为实际的端口号</p><ol start="3"><li>返回第一个页面对象</li></ol><p>从browser中取第一个上下文对象，从第一个上下文对象取第一个页面对象</p><p>有了这个页面对象后，就可以开始自动化</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>context = browser.contexts[0]</span></span>
<span class="line"><span>page = context.pages[0]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>看下面完整代码：</p><p>![图片](./利用aardio和Python Playwright实现高效的网页自动化操作.assets/640.webp)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>import win.ui;</span></span>
<span class="line"><span>/*DSG{{*/</span></span>
<span class="line"><span>mainForm = win.form(text=&quot;playwright测试&quot;;right=957;bottom=708)</span></span>
<span class="line"><span>mainForm.add()</span></span>
<span class="line"><span>/*}}*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import web.view2;</span></span>
<span class="line"><span>//第4个参数为0则开启远程端口，取空闲端口号</span></span>
<span class="line"><span>wb = web.view2(mainForm,,,0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mainForm.show();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import string.template</span></span>
<span class="line"><span></span></span>
<span class="line"><span>html = \`</span></span>
<span class="line"><span>from playwright.sync_api import Playwright, sync_playwright, expect</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def run(playwright: Playwright) -&gt; None:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 使用chromium.connect_over_cdp远程连接webview</span></span>
<span class="line"><span>    browser = playwright.chromium.connect_over_cdp(&quot;http://127.0.0.1:\${port}&quot;)</span></span>
<span class="line"><span>    context = browser.contexts[0]</span></span>
<span class="line"><span>    page = context.pages[0]</span></span>
<span class="line"><span>    page.goto(&quot;https://www.baidu.com/&quot;)</span></span>
<span class="line"><span>    page.locator(&quot;#kw&quot;).click()</span></span>
<span class="line"><span>    page.locator(&quot;#kw&quot;).fill(&quot;附加webview测试&quot;)</span></span>
<span class="line"><span>    page.get_by_role(&quot;button&quot;, name=&quot;百度一下&quot;).click()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>with sync_playwright() as playwright:</span></span>
<span class="line"><span>    run(playwright)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span>html = string.template(html).format(</span></span>
<span class="line"><span>    port = wb.remoteDebuggingPort;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import process.python;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.python.version = &quot;3.9.13&quot;;</span></span>
<span class="line"><span>process.python.win32 = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.python.exec(html);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>return win.loopMessage();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h3 id="库下载" tabindex="-1">库下载 <a class="header-anchor" href="#库下载" aria-label="Permalink to &quot;库下载&quot;">​</a></h3><p>web.view2库在本人的扩展库上下载：</p><p><a href="https://mp.weixin.qq.com/s/GxxAKtoCZSu6xUO_Q8WS1Q" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/GxxAKtoCZSu6xUO_Q8WS1Q</a></p><p>![图片](./利用aardio和Python Playwright实现高效的网页自动化操作.assets/640-1714480923640-1.gif)</p>`,26),r=[l];function i(t,o,c,b,u,m){return a(),s("div",null,r)}const w=n(e,[["render",i]]);export{h as __pageData,w as default};
