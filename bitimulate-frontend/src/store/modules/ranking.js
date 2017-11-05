import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as CommonAPI from 'lib/api/common';


// action types
const GET_TOP_RANKING = 'ranking/GET_TOP_RANKING';

// action creator
export const getTopRanking = createAction(GET_TOP_RANKING, CommonAPI.getTopRanking);

// initial state
const initialState = Map({
  ranking: List()
});

// reducer
export default handleActions({
  ...pender({
    type: GET_TOP_RANKING,
    onSuccess: (state, action) => {
      const { data: ranking } = action.payload;
      return state.set('ranking', fromJS(ranking));
    }
  })
}, initialState);