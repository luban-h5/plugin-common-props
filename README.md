## 鲁班H5 组件通用属性
- 可以简单理解为类似 React 的 PropsType
- 为了方便组件开发者在开发自定义组件的时候，快速引用

## 以开发一个按钮组件为例
需要在右边属性编辑面板(如下图)配置按钮的如下属性：

> ![image](https://user-images.githubusercontent.com/12668546/82146772-0592d980-987f-11ea-8c90-6136e4f575f3.png)


- 显示文字(字符串类型: PropTypes.string, 对应一个文本输入框)
- 字体大小(数值类型: PropTypes.number, 对应一个数字输入框)
- 边框宽度(数值类型: PropTypes.number, 对应一个数字输入框)
- 文字颜色(颜色类型: PropTypes.color, 对应一个颜色选择器)
- 背景色(颜色类型: PropTypes.color, 对应一个颜色选择器)
- 文字对齐(颜色类型: PropTypes.textAlign, 对应对齐选择器)

我们在开发按钮组件的时候，只要配置其 `props` 参照如下即可
```js
export default {
  name: 'luban-h5-button',
  props: {
    text: PropTypes.string(),
    backgroundColor: PropTypes.color({
      label: '背景色',
      defaultValue: 'rgba(255, 255, 255, 0.2)'
    }),
    color: PropTypes.color(),
    fontSize: PropTypes.number({ label: '字号(px)' }),
    borderWidth: PropTypes.number({
      label: '边框宽度(px)',
      defaultValue: 1
    }),
    borderRadius: PropTypes.number({
      label: '圆角(px)',
      defaultValue: 4
    }),
    borderColor: PropTypes.color({
      label: '边框颜色',
      defaultValue: '#ced4da'
    }),
    textAlign: PropTypes.textAlign()
  }
}
```

### 通用配置
| 类型 	| PropTypes[type] 	| 默认值.label<String> 	| 默认值.defaultValue 值 	| 默认值.defaultValue 类型 	| 默认值.props 	| 默 认值.props 解释 	|
|--------------	|-----------------	|----------------------	|---------------------------------------------------	|--------------------------	|--------------------------------------	|-----------------------------------------------------	|
| 字符 	| string 	| '文字内容' 	| '文字内容' 	| String 	| - 	|  	|
| 数值 	| number 	| '数值' 	| 10                                                                                                  	| Number 	| {    step: 1,   min: 0,   max: 144 } 	| 用于配置数值编辑器的属性，比如 最小值、最大值、步长 	|
| 颜色 	| color 	| '文字颜色' 	| '#000000' 	| String 	| - 	|  	|
| 文字对齐 	| textAlign 	| '文字对齐' 	| '文字对齐' 	| String 	| - 	|  	|
| 简单选项列表 	| textOptions 	| '选项列表' 	| [    { label: 'label1',     value: 'value1'   } ] 	| Array 	| - 	|  	|

## 安装
```bash
yarn add @luban-h5/plugin-common-props
```


