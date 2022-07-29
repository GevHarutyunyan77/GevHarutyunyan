import {SET_DATA_FAIL, SET_DATA_SUCCESS} from '../actions/app';

const initialState = {
  data: [],
  status: 'pending',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: 'ok',
      };
    }

    case SET_DATA_FAIL: {
      return {
        ...state,
        status: 'fail',
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
