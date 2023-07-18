import { createContext, useContext, useState } from "react";

export const LoginContext = createContext(null);
const ContextProvider = ({children}) => {
    const [acc, setAcc] = useState('');
    return(
        <LoginContext.Provider
            value={{acc,setAcc}}
        >
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;