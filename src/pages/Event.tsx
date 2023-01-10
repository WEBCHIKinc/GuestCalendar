import React, { FC, useState, useEffect } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
  const { guests } = useTypedSelector((state) => state.event);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests } = useActions();

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
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
