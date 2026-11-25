---
title: 快速开始
description: 在 React 项目中使用 ui-react，或在线试用示例组件。
---

`@dingshaohuax/ui-react` 提供 `Button` 和 `Input`，要求 React `^19.3.1`。组件包发布到 npm 后，可用以下命令安装。

```bash
pnpm add @dingshaohuax/ui-react
```

在支持 CSS 导入的 React 项目中，从包入口导入组件即可加载样式。

```tsx
import { Button, Input } from '@dingshaohuax/ui-react'

export function ProfileField() {
  return (
    <div>
      <label>
        用户名
        <Input name="username" />
      </label>
      <Button type="primary" htmlType="button" onClick={() => alert('已点击')}>
        确认
      </Button>
    </div>
  )
}
```

- [Button 按钮](../components/button/)
- [Input 输入框](../components/input/)
- [在线演示](../playground/)
- [本地运行模板](../foundation/)
