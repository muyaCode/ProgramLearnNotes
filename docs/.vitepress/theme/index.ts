// 文档：https://vitepress.dev/zh/reference/frontmatter-config#default-theme-only
// 自定义主题：https://vitepress.dev/zh/guide/custom-theme
// import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // 根组件来包装每个页面
  Layout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },

  //   // 这是Vue 3的功能组件
  //   NotFound: () => 'custom 404',

  //   enhanceApp({ app, router, siteData }) {
  //    // app是来自' createApp() '的Vue 3应用实例。
  //   //路由器是VitePress的自定义路由器。“siteData”是
  //   //当前站点级元数据的' ref '。

  //   }

  //   setup() {
  //     //这个函数将在VitePressApp中执行
  //   //设置钩。所有的组合api都可以在这里找到。

  //   }
} satisfies Theme