const defaultNumberInputProp = {
  step: 1,
  min: 0,
  max: 144
}

export default {
  required: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  /**
   * 颜色 默认编辑器
   */
  color: ({ label = '文字颜色', defaultValue = '#000000' } = {}) => ({
    type: String,
    // 注意，根据 MDN 文档，颜色选择器的 value 只能是：# + 6个16进制字符串
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#Value
    // The value of an <input> element of type color is always a DOMString which contains a 7-character string specifying an RGB color in hexadecimal format.
    default: defaultValue,
    editor: {
      type: 'el-color-picker',
      label,
      // !#zh 为编辑组件指定 prop
      prop: {
        size: 'mini',
        showAlpha: true
      },
      require: true
    }
  }),
  /**
   * 数值类型 默认编辑器
   */
  number: ({ label = '数值', defaultValue = 10, prop = defaultNumberInputProp } = {}) => ({
    type: Number,
    default: defaultValue,
    editor: {
      type: 'a-input-number',
      label,
      require: true,
      prop
    }
  }),
  /**
   * 文本类型 默认编辑器
   *
   * component 可以采用
   * 1. a-input
   * 2. a-textarea
   * 3. 富文本编辑器
   */
  string: ({ label = '按钮文字', defaultValue = '按钮', component = 'a-input', prop = {} } = {}) => ({
    type: String,
    default: defaultValue,
    editor: {
      type: component,
      label,
      require: true,
      prop
    }
  }),
  textAlign: ({ label = '文字对齐', defaultValue = 'center' } = {}) => ({
    type: String,
    default: defaultValue,
    editor: {
      type: 'lbs-text-align',
      label,
      require: true
    }
  }),
  textOptions: ({
    label = '选项列表',
    defaultValue = () => [{
      label: 'label1',
      value: 'value1'
    }]
  } = {}) => ({
    type: Array,
    default: defaultValue,
    editor: {
      type: 'lbs-prop-text-enum-editor',
      label,
      require: true
    }
  })
}
