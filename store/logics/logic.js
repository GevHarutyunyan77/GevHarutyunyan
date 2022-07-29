import {createLogic} from 'redux-logic';
import {
  SET_DATA_FAIL,
  SET_DATA_REQUEST,
  SET_DATA_SUCCESS,
} from '../actions/app';
import axios from 'axios';

export const getDataLogic = createLogic({
  type: SET_DATA_REQUEST, // only apply this logic to this type
  // cancelType: SET_DATA_FAIL, // cancel on this type
  latest: true, // only take latest
  process({state, action}, dispatch, done) {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(resp => dispatch({type: SET_DATA_SUCCESS, payload: resp.data}))
      .catch(err => {
        console.error(err); // log since could be render err
        dispatch({type: SET_DATA_FAIL, payload: err, error: true});
      })
      .then(() => done());
  },
});
