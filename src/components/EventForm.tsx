import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../utils/rules";
import FormItem from "antd/es/form/FormItem";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    description: "",
    guest: "",
    date: "",
  } as IEvent);

  const handleSelectChange = (guest: string) => {
    setEvent({ ...event, guest });
  };
  const handleInputChange = (e: any) => {
    setEvent({ ...event, description: e.target.value });
  };

  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          autoComplete="off"
          value={event.description}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="Date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <FormItem label="Guest" name="guest">
        <Select style={{ width: 120 }} onChange={handleSelectChange}>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
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
