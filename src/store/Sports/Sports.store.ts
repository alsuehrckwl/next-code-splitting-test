import { createAction, createReducer } from 'redux-act';
import { ISoccer, IBaseball } from '@model/sports/Sports.model';

interface IAction {
  type: string;
  data: Array<ISoccer | IBaseball>;
}

export const getSportsType = createAction<string>(
  'req get sports type',
  (type) => type
);
export const setSportsType = createAction<IAction>('call sports type list');

/***************************************************************
 *  initialState
 ***************************************************************/
interface ISports {
  soccer: Array<ISoccer>;
  baseball: Array<IBaseball>;
}

const initialState: ISports = {
  soccer: [],
  baseball: [],
};

/***************************************************************
 *  reducer
 ***************************************************************/
export const sportsReducer = createReducer<typeof initialState>(
  {},
  initialState
);

sportsReducer.on(setSportsType, (state, payload: { type; data }) => ({
  ...state,
  [payload.type]: payload.data,
}));
