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
    const response = await fakeAccountLogin(values).then((res) => res.data);
    console.log(response)
    if (response) {
      message.success('登录成功');
      history.push('/');
    } else {
      message.error('用户名或者密码错误');
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
      name="userName"
      rules={[{ required: true, message: '请输入用户名!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名（admin）" />
    </Form.Item>
    <Form.Item
      name="passWord"
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
