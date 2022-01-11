import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 在jsx中不不能识别出组件，所以需要按需导入
// import ElementPlus from 'unplugin-element-plus/vite'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/css/element/index.scss" as *;`,
      },
    },
  },
  build: {
    reportCompressedSize: false
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    vue(),
    // ElementPlus({
      // 在tsx（jsx）使用主题
      // useSource: true,
    // }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      resolvers: [
        // 在setup中使用样式（非jsx）
        ElementPlusResolver({ importStyle: 'sass' }),
        IconsResolver(),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
