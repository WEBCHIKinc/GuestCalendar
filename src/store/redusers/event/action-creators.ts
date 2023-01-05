import { AppDispatch } from "../..";
import UserSevice from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload: events,
  }),
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload: guests,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserSevice.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  },
};
