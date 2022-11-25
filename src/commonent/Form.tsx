import React, { ReactElement, useState } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';
import { Rule } from 'antd/es/form';
import { ButtonHTMLType } from 'antd/es/button/button';
import { Callbacks } from 'rc-field-form/lib/interface';

export interface Finish {
    (values: any): void
}

export interface RulesItem {
    required: string
    message: string
}

export interface OptionItem {
    name: string
    value: string
}

export interface FormItem {
    type: string
    prop: string
    label: string
    buttonType?: ButtonHTMLType
    value?: ReactElement | string
    placeholder?: string
    dependencies?: string[]
    option?: OptionItem[]
    rules?: Rule[]
}

export interface FormData {
    formData: FormItem[]
    onFinish?: Finish
}

const { Option } = Select;

export const BaseForm = ({ formData, onFinish }: FormData) => {
    const [form] = Form.useForm();
    const getItem = (item: FormItem) => {
        switch (item.type) {
            case 'input':
                return <Input placeholder={item.placeholder} />
            case 'input-pwd':
                return <Input.Password placeholder={item.placeholder} />
            case 'select':
                return <Select placeholder={item.placeholder}>
                    {item.option?.map((item, index) => {
                        return <Option value={item.value} key={index}>{item.name}</Option>
                    })}
                </Select>
            case 'checkbox':
                return <Checkbox>{item.value}</Checkbox>
            case 'button':
                return <Button type="primary" htmlType={item.buttonType}>{item.value}</Button>
        }
        return
    }

    return (
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            {formData.map((item, index) => {
                return <Form.Item
                    key={index}
                    name={item.prop}
                    label={item.label}
                    rules={item.rules}
                    hasFeedback
                    valuePropName="checked"
                    dependencies={item.dependencies}>
                    {getItem(item)}
                </Form.Item>
            })}
        </Form>
    );
}