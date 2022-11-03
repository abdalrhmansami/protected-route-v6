import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext({});

const AuthProvider = (props: any) => {
  let authentication: any = localStorage.getItem("token");
  let userInitial: any = localStorage.getItem("user");
  const [user, setUser] = useState<any>({
    loggedIn: false,
  });

  useEffect(() => {
    if (authentication) {
      setUser({
        loggedIn: true,
      });
    } else {
      setUser({
        loggedIn: false,
      });
    }
  }, [authentication, userInitial]);

  return (
    <GlobalStateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default AuthProvider;
