import { ReactNode, createContext } from "react";

interface User{
    name: string;
    email: string;
    password: string;
}

interface Context{
    user: User
}

const defaultValues: Context = {
    user:{
        name: '',
        email: '',
        password: ''
    }
}

const AppContext = createContext(defaultValues)

interface Props{
    children: ReactNode
}

const AppProvider = ({children}: Props) => {
    return(
        <AppContext.Provider value={defaultValues}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider