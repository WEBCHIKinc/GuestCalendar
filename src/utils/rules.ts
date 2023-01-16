import dayjs, { Dayjs } from "dayjs";

export const rules = {
  required: (message: string = "required field") => ({
    required: true,
    message: message,
  }),
  isDateInPast: (message: string) => ({
    message: message,
    validator: (_: any, date: Dayjs) => {
      if (date.isAfter(dayjs())) {
        return Promise.resolve();
      } else {
        return Promise.reject(message);
      }
    },
  }),
};
