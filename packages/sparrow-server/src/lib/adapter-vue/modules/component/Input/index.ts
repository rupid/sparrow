import Base from '../Base';

export default class Input extends Base{
  name: string = 'Input';
  params: any;


  constructor (params: any) {
    super();
    this.params = params;
    this.config = {
      // 组件自定义配置
      _custom: {
        required: false,
        regList: [],
        label: '文本框',
        type: params.type
      },
      // 组件标签属性
      _attr: {
        placeholder: '',
        'v-model': params['v-model'] || ''
      },
      // 插槽属性
      // __slot__: {}
    };
    this.init();
    this.setHandler();
  }

  private init () {
    const {type} = this.config._custom;
    if (type === 'textarea') {
      this.config._attr['type'] = 'textarea';
      this.config._attr['rows'] = 4;
    }
  }

  public fragment () {
    return `
      <el-form-item label=" "
        ${this._formItemStr}
      >
        <label-box 
          label="${this.config._custom.label}" 
          uuid="${this.uuid}"
        ></label-box>
        <el-input ${this._attrStr}></el-input>
      </el-form-item>
    `;
  }

  protected setHandler () {
    const {config} = this;
    this.setAttrsToStr();

    if (config._custom) {
      const formItem = [];
      const rules = [];

      const required = `{ required: true, message: '必填', trigger: 'blur' }`;
      if (config._custom.required === true) {
        rules.push(required);
      }

      if (config._custom.regList && config._custom.regList.length > 0) {
        config._custom.regList.forEach(item => {
          if (item.rule && item.message) {
            const customRule = `{ pattern: ${item.rule}, message: '${item.message}', trigger: 'blur' }`;
            rules.push(customRule)
          }
        });
      }

      if (rules.length > 0) {
        formItem.push(`:rules="[${rules.join(',')}]"`)
      }

      this._formItemStr = formItem.join(' ');
    }
  }
}