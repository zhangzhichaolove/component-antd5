import { FormItem } from '../commonent/Form';

export const appData: FormItem[] = [{
    type: 'input',
    prop: 'name',
    label: '账号',
    rules:
        [
            {
                required: true,
                message: '请输入账号!',
            },
        ]
}, {
    type: 'input-pwd',
    prop: 'passwd',
    label: '密码',
    rules:
        [
            {
                required: true,
                message: '请输入密码!',
            },
        ]
}, {
    type: 'input-pwd',
    prop: 'confirm',
    label: '确认密码',
    dependencies: ['password'],
    rules:
        [
            {
                required: true,
                message: '请确认密码!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('passwd') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次密码不一致!'));
                },
            })
        ]
}, {
    type: 'select',
    prop: 'hobby',
    label: '爱好',
    placeholder: '请选择爱好',
    option: [{
        name: '唱',
        value: 'sing'
    }, {
        name: '跳',
        value: 'jump'
    }, {
        name: 'rap',
        value: 'rap'
    }],
    rules:
        [
            {
                required: true,
                message: '请选择爱好!',
            },
        ]
}, {
    type: 'checkbox',
    prop: 'agreement',
    label: '注册协议',
    value: <span>我同意 <a href="" > 注册协议 </a></span>,
    rules:
        [
            {
                required: true,
                message: '请同意协议!',
            },
        ]
}, {
    type: 'button',
    prop: 'submit',
    label: '',
    value: '注册',
    buttonType: 'submit',
}]