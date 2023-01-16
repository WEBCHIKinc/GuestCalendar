import { Calendar } from "antd";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { Dayjs } from "dayjs";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const currentDayEvents = props.events.filter(
      (ev) =>
        ev.date.day === value.date() &&
        ev.date.month === value.month() &&
        ev.date.year === value.year()
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>
            {ev.description} {ev.guest}
          </div>
        ))}
      </div>
    );
  };

  return <Calendar fullscreen={true} dateCellRender={dateCellRender} />;
};

export default EventCalendar;
