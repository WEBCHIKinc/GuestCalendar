import { bindActionCreators } from "redux";
import { useTypedDispatch } from "./useTypedSelector";
import { allActionCreators } from "../store/redusers/action-creators";

export const useActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
