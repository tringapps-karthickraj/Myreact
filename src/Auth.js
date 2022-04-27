import { createContext,useContext,useState } from "react";

const AuthContext = createContext(null)


export function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  const signin = (newUser) => {
      setUser(newUser);

  };

    const signout= () => {
      setUser(null);
    
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



export const useAuth = () =>{
  return useContext(AuthContext)
}
  