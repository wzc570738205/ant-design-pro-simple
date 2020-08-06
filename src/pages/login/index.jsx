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
      rules={[{ required: true, message: 'Please input your Username!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="@password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </Form.Item>
  </Form>
  );
};
export default Login;
