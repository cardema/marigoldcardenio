import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import * as fromActions from "../actions/home.actions";
import { appState } from "../models/home.model";
import * as initialState from "../state/app.state";

export const reducer = createReducer(
    initialState.appState,
    on(fromActions.increment, (state) => ({ count: state.count + 1 })),
    on(fromActions.decrement,  (state) => ({ count: state.count - 1 })),
    on(fromActions.reset, (state) =>  ({ count: 0 }))
        
);