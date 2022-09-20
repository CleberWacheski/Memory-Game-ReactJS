import { createContext, ReactNode, useEffect, useState } from "react";

interface userContext {
    user: user;
    CreateUser: (data: user) => void;
}

interface user {
    name: string,
    email: string;
    _id: string;
}


interface userContextProvider {
    children: ReactNode;
}

export const UserContext = createContext({} as userContext)


export function UserContextProvider({ children }: userContextProvider) {

    const [user, setUser] = useState({} as user)
     
    const CreateUser = (data: user) => {
        setUser(data)
    }



    return (
        <UserContext.Provider value={{ user, CreateUser }}>
            {children}
        </UserContext.Provider>
    )
}