import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;
