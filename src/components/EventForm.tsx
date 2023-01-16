import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../utils/rules";
import FormItem from "antd/es/form/FormItem";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Dayjs } from "dayjs";

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    description: "",
    guest: "",
    date: { day: 0, month: 0 },
  } as IEvent);
  const { user } = useTypedSelector((state) => state.auth);
  const [date, setDate] = useState({} as Dayjs);

  const handleSelectChange = (guest: string) => {
    setEvent({ ...event, guest });
  };

  const handleInputChange = (e: any) => {
    setEvent({ ...event, description: e.target.value });
  };

  const selectDate = (date: Dayjs | null, dateString: string) => {
    date
      ? setEvent({
          ...event,
          date: { day: date.date(), month: date.month(), year: date.year() },
        })
      : console.log("wrong date");
  };

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
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
      <Form.Item
        label="Date"
        name="date"
        rules={[rules.required(), rules.isDateInPast("Date is in past!")]}
      >
        <DatePicker onChange={selectDate} />
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
