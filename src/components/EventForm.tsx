import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import FormItem from "antd/es/form/FormItem";

const EventForm: FC = () => {
  const options = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "disabled",
      disabled: true,
      label: "Disabled",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
  ];

  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item label="Date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <FormItem>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          // onChange={handleChange}
          options={options}
        />
      </FormItem>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Row justify={"end"}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
