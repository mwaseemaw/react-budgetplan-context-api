import { createContext, useState } from "react";


const initialState = {
    budget:3000,
    expenses:[
        {
            id:1,name:'shopping',cost:10,
        },
        {
            id:2,name:'eating',cost:20,
        },
        {
            id:3,name:'sleeping',cost:20,
        },
    ]
};

export const AppContext = createContext(initialState);

export const AppProvider = (props)=>{
    //const [state,dispatch] = useReducer(AppReducer,initialState);
    const [state] = useState([initialState]);
    return(
        <AppContext.Provider value={
            state
        }>
            
        </AppContext.Provider>
    );
};
