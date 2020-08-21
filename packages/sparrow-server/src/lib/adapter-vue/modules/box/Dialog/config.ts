export default {
  model: {
    custom: {
      label: '弹窗',
      showMethod: '',
    }
  },
  schema: {
    fields: [
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
              type: "input",
              inputType: "text",
              label: "showMethod",
              model: "showMethod"
            },
          ]
        }
      },
    ]
  },
}