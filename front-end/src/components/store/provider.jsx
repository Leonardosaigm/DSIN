import React from "react";
import { Context } from "./context";
import useStorage from "../../utils/useStorage";


const storeProvider = () => {
    const [token, setToken] = useStorage('token')


    return (
        <Context.provider value={{ token, setToken }}>

            {children}

        </Context.provider>

    )
}


export default storeProvider