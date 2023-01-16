import React, { FC, useState, useEffect } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addNewEvent = (event: IEvent) => {
    setIsModalOpen(false);
    createEvent(event);
    fetchEvents(user.username);
  };

  return (
    <Layout>
      {/* {JSON.stringify(events)} */}
      <Row>
        <EventCalendar events={events} />
      </Row>
      <Row justify={"center"}>
        <Button onClick={showModal}>Create event</Button>
      </Row>
      <Modal
        title="Create event"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
