import { Children, createContext } from 'react';

export const Auth = createContext();

export const AuthProvider = ({ Children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {Children}
    </Auth.Provider>
  );
};
