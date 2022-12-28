import React, { FC, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import { Button, Layout, Modal, Row } from "antd";

const Event: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify={"center"}>
        <Button onClick={showModal}>Create event</Button>
      </Row>
      <Modal
        title="Create event"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      ></Modal>
    </Layout>
  );
};

export default Event;
