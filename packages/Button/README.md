# @ye/button

React 按钮组件库

## 安装

```bash
npm install @ye/button
# 或
yarn add @ye/button
```

## 使用方法

```jsx
import { Button, Text } from '@ye/button';

function App() {
  return (
    <div>
      <Button>点击我</Button>
      <Text>这是一段文本</Text>
    </div>
  );
}
```

## 组件

### Button

按钮组件

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| children | ReactNode | - | 按钮内容 |
| onClick | () => void | - | 点击事件处理函数 |

### Text

文本组件

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| children | ReactNode | - | 文本内容 |
| className | string | - | 自定义类名 |

## 许可证

MIT 