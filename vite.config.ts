/**
 * vite 基本是基于rollup写的，rollup原理简单，vite的配置基本和rollup有些想象，可先自行实验rollup的使用
 * 貌似也是 rollup 提出的 Tree-Shaking 概念 压缩的更小
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{
        find: '@',
        replacement: resolve(__dirname, '/src')
    }]
  },
  // 打包选项选项
  build:{
    // base:'/',                 // 基础路径 建议可以在
    target:'chrome58',        // 浏览器兼容模块 https://esbuild.github.io/api/#target
    outDir:'dist',            // 输出路径
    assetsInlineLimit: 8172,  // 小于8k 内联成base64
    assetsDir:'assets',       // 静态资源路径
    sourcemap: false,         // 是否生成源码视图，涉及到开发调试时候的代码定位，生产请禁用false
    // 压缩代码的配置
    terserOptions: {
      // 移除不部分内容 详情参考 https://terser.org/docs/api-reference#compress-options
      compress: {
        drop_console: true,
        drop_debugger: true,
        toplevel: true,       // 删除无法引用的变量、函数
        typeofs: true,        // 使用IE 10 以前的请配置false，咦 ，你们看我IE干啥 -- 不主张使用IE，vue3本身就没想做IE11及以下的适配
      }
    },
    // rollup 相关配置
    rollupOptions: {
      // 这个是如果你是用的别的库，但是又想不打包进去，比如cdn使用jquery/d3，那么就配置进去不打包的依赖名/文件绝对地址
      external: [/*d3,*/],
      output: {
        // 配合不想打包的external，就可以实现调用你想要的cdn
        paths: {
          // d3: 'https://d3js.org/d3.v4.min'
        }
      },
      // context: 'window',        // 顶级this默认undefined
    },
    // 我觉得这个watch和rollupOptions的watch效果一样，可能watch优先级更高？
    // watch: {
      // 不监听哪些文件，string | RegExp | (string | RegExp)[]
      // exclude: ['node_modules/**'],
      // 只监听哪些文件  string | RegExp | (string | RegExp)[] 某些时刻加快部分性能可以用该选项
      // include: [],
    // }

  },
  server: {
    open: true,                // 默认的开发调式打开浏览器，为对象的时候可以模拟实际服务器的开发地址后缀
    // 代理的配置
    proxy: {},
  }
})
