import { useEffect, useReducer, createContext } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currUser: null,
  setCurrUser: () => null,
});

const USER_ACTIONS = {
  SET_CURR_USER: 'SET_CURR_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.SET_CURR_USER:
      return {
        ...state,
        currUser: payload,
      };
    default:
      throw new Error(`undefined type ${type} in userReducer`);
  }
};

const INIT_STATE = { currUser: null };

export const UserProvider = ({ children }) => {
  // const [currUser, setCurrUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, INIT_STATE),
    { currUser } = state,
    setCurrUser = (user) => {
      dispatch({ type: USER_ACTIONS.SET_CURR_USER, payload: user });
    },
    value = { currUser, setCurrUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrUser(user);
      if (user) createUserDocumentFromAuth(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
