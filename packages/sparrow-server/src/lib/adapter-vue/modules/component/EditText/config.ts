export default {
  model: {
    attr: {
      class: ""
    },
    custom: {
      label: '输入文本',
      inline: false
    },
  },
  schema: {
    fields: [
      {
        type: 'object',
        label: '',
        model: 'attr',
        schema: {
          fields: [
            {
              type: "input",
              inputType: "text",
              label: "class",
              model: "class"
            },
          ]
        }
      },
      {
        type: 'object',
        label: '',
        model: 'custom',
        schema: {
          fields: [
            {
              type: "input",
              inputType: "text",
              label: "label",
              model: "label"
            },
            {
              type: "switch",
              label: "inline",
              model: "inline",
              textOn: "行内",
              textOff: "否行内"
            },
          ]
        }
      }
    ]
  },
}