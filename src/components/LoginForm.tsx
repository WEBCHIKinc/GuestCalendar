import { Button, Checkbox, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import { AuthActionCreators } from "../store/redusers/auth/action-creators";
import { useTypedDispatch } from "../hooks/useTypedSelector";

const LoginForm: FC = () => {
  const dispatch = useTypedDispatch();
  const submit = () => {
    dispatch(AuthActionCreators.login("user1", "123"));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={submit}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
