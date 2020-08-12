import React from 'react';
import { Form, Input, Button, message } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { fakeAccountLogin } from './service';
import './index.less';


const Login = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    const params = { input: values };
    const response = await fakeAccountLogin(params).then((res) => JSON.parse(res.data));
    if (Number(response[0].table_count)) {
      message.success('登录成功');
      history.push('/');
    } else {
      message.error('用户不存在');
    }
  };


  return (
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
    <Form.Item
      name="@username"
      rules={[{ required: true, message: '请输入用户名!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名（admin）" />
    </Form.Item>
    <Form.Item
      name="@password"
      rules={[{ required: true, message: '请输入密码！' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="密码（admin）"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
       登录
      </Button>
    </Form.Item>
  </Form>
  );
};
export default Login;
