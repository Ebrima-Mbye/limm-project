import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [state, setState] = useState({
    hello: "world",
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
