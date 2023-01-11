import React, { FC, useState, useEffect } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
  const { guests, events } = useTypedSelector((state) => state.event);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests, createEvent } = useActions();

  useEffect(() => {
    fetchGuests();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      {JSON.stringify(events)}
      <EventCalendar />
      <Row justify={"center"}>
        <Button onClick={showModal}>Create event</Button>
      </Row>
      <Modal
        title="Create event"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <EventForm guests={guests} submit={(event) => createEvent(event)} />
      </Modal>
    </Layout>
  );
};

export default Event;
