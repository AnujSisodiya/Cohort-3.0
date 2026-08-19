import { children, createContext } from 'react';

export const MyStore = createContext();

export let ContextProvider = ({ children }) => {
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
