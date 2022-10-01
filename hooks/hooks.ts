import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import type { AppState, AppDispatch } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
