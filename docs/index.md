---
# 文档：https://vitepress.dev/zh/reference/default-theme-home-page#home-page

layout: home

title: 鹤屿编程学习笔记
titleTemplate: 记录自己的编程学习笔记

hero:
  name: 鹤屿编程学习笔记
  # text: 记录自己的编程学习笔记
  tagline: "正在开发中"
  # 首页右边Logo设置
  # image:
  #   src: /logo.png
  #   alt: logo
  actions:
    - theme: brand
      text: 查看编程学习笔记
      link: /order/文档指南

features:
  - icon: 💡
    title: 文档基于vitePress构建
    details: 记录自己的编程学习笔记
  - icon: 📦
    title: 服务端语言
    details: Java、PHP、Python、Go
  - icon: 🤖
    title: 底层编程语言
    details: C/C++、Rust...
---

<!-- 表情：https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json -->

<style>
  /*首页标题 覆盖变量 自定义字体渐变样式*/
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  }
</style>

<!-- 团队成员显示 -->
<!-- <script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      各个成员来着....
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage> -->
