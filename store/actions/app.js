export const SET_DATA_REQUEST = 'SET_DATA_REQUEST';
export const SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
export const SET_DATA_FAIL = 'SET_DATA_FAIL';

export function setData() {
  return {
    type: SET_DATA_REQUEST,
    payload: {},
  };
}
