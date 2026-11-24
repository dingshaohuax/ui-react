---
title: 组件的开发
sidebar:
  order: 3
---

## 选择开发工具
开发组件选择 tsdown还是vite库模式 主要看构建需求和维护成本，组件数量、代码量不是决定因素。

| 场景 | 更推荐 |
|---|---|
| 工具库、Hooks、SDK、纯 TypeScript 库 | **tsdown** |
| React 组件库，主要是 TSX + CSS/CSS Modules | **tsdown** |
| 按钮、卡片、整套表单控件、动态表单引擎 | **tsdown** |
| 封装现有编辑器，主要增加界面和业务逻辑 | **tsdown** |
| CSS 大量引用本地图片、字体等，希望自动处理资源和路径 | **Vite 库模式** |
| 依赖特定 Vite 插件，或已有完善的 Vite 样式、资源构建配置 | **Vite 库模式** |
| 需要复杂的 Worker、WASM 等资源交付 | **根据具体方案验证**；依赖 Vite 插件和资源管线时倾向 Vite |

**推荐 tsdown 时，看重的是库发布配置简洁：** 类型声明、依赖 external、多入口和模块输出比较集中。普通组件样式已经可以处理，当前 CSS 支持仍有实验性边界。

**推荐 Vite 库模式时，看重的是浏览器资源处理更完整：** 接受额外配置类型声明和 external，换取成熟的样式、资源及插件处理流程。

例如，同样是编辑器：

- **封装编辑器 API、工具栏、表单联动：倾向 tsdown。**
- **组件库还要统一处理编辑器的图片、字体、Worker 等资源：倾向评估 Vite 库模式。**

“有样式就选 Vite”和“组件大了就选 Vite”都过于简单；应比较实际需求下，哪种方案需要维护的额外规则更少。


所以 本库 以tsdown为工具 来开发！

## 安装
tsdown对开发react组件，提供一流的支持，具体请看[react-support](https://tsdown.dev/zh-CN/recipes/react-support)
```
pnpm dlx create-tsdown . -t react-compiler
```

但是这样会生成一个带演示的完整项目，所以针对咱们已经有演示项目了的建议，使用通用 TypeScript 模板，没有单独的 react-minimal。 用它开发 React 组件，只需再补 React 依赖、类型、JSX 设置，以及需要的 CSS 支持
```
pnpm dlx create-tsdown@latest . -t minimal
```

然后补齐开发组件所需
```
pnpm add --save-peer 'react'
pnpm add -D @types/react @tsdown/css
```

| 依赖 | 用途 |
|---|---|
| `react` | 组件运行依赖 |
| `@types/react` | React 和 JSX 类型 |
| `@tsdown/css` | 构建组件的 CSS、CSS Modules |

--save-peer 会把 React 同时写入 peerDependencies 和 devDependencies，满足消费方依赖约定和本地开发需要。[pnpm 说明](https://pnpm.io/11.x/cli/add#--save-peer)

其他按需添加：
- react-dom、`@types/react-dom`：组件使用 createPortal 等 React DOM API 时添加。
- React Compiler：可选优化，准备在 core 发布构建中启用时再配置。
- Vite：继续由已有的 apps/playground 管理。
另外，你当前的 [tsconfig.json](/Users/admin/files/codeme/tpl-fe-comp/packages/core/tsconfig.json) 还是 {}，安装后至少补上 TSX 配置：
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```
在 tsdown.config.ts 中再加上 platform: 'neutral'，就可以先构建现有的 MyButton.tsx：
```
pnpm build
```


## 在 Playground 中开发组件

Playground 已通过 workspace 依赖接入组件库。在演示页面从包入口导入组件：

```tsx
import { MyBtn } from '@dingshaohuax/ui-react'

<MyBtn type="primary" />
```

在仓库根目录启动开发环境：

```bash
pnpm dev
```

core 首次构建成功后，命令会启动 Playground 和 core 的监听构建。保存组件或 CSS 时，tsdown 会重建 `dist`，Vite 会把产物更新推送到页面。
