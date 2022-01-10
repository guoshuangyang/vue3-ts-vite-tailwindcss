## Read me

#### 前言
+ [x] 至于为打包后的文件提供传统浏览器兼容性支持，也就是不支持`<script type="module"></script>`我也会更新哒，目标创建一个基于vite 3 的 tailwindcss 以及 全家桶的最小项目单位，之后也会陆续更新组件库，完善成最基本的vue3项目模板，skr！

+ [x] 至于开发的配置以及打包配置都会陆续更新！！！

+ [x] 后续可以把vuex以及vue-router导入给大家展示，由于vite2解耦了vue的相关，vuex以及vue-router需自行导入，当然也是有部分坑的，不过做的相当好，打包大小以及基于 [esbuild](https://esbuild.github.io/) [预构建依赖](https://cn.vitejs.dev/guide/dep-pre-bundling.html)的编译真的特别快！！！！，当然配置大同小异，你写js也基本是这样的,目前生产的话还是webpack好用，不建议vite2直接上生产，一两个页面的项目还是可以用的额，大型项目还是再等等！！！(已做)

+ [x] Vite 以 [原生 ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 方式服务源码。这实际上是让浏览器接管了打包程序的部分工作，妈妈再也不用担心大型项目做更改编译一两分钟的事情啦！！！



## Project setup

```sh
npm install
# or yarn
yarn
```

### Compiles and hot-reloads for development
```shell
npm run dev
```

### Compiles and minifies for production
```sh
npm run build
# or yarn
yarn build
```

### Run your preview 

打包完的预览项目，直接启动一个服务托管dist目录的功能

```shell
npm run serve
# or yarn
yarn serve
```

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"



