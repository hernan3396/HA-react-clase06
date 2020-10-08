import { RENAME } from "./userActionCreators";

const initialUser = {
  name: "",
};

const userReducer = function (state = initialUser, action) {
  if (action.type === RENAME) {
    return {
      ...state,
      name: action.payload,
    };
  }

  return state;
};

export default userReducer;
