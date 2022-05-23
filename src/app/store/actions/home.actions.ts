import { createAction, props } from "@ngrx/store";
import { appState } from "../models/home.model";

export const increment = createAction('[Counter Component] Increment',props<appState>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');