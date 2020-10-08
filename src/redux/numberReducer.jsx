import { RENAME } from "./userActionCreators";

const initialNumber = {
  number: 0,
};

const numberReducer = function (state = initialNumber, action) {
  if (action.type === RENAME) {
    return {
      ...state,
      number: action.payload,
    };
  }

  return state;
};

export default numberReducer;
