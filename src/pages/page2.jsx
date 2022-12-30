import React from "react";
import { Navigate } from "react-router";


const Page2 = ({user}) => {
    if (!user)
        return <Navigate to='/' replace/>
    return <div>
        Page 2
    </div>
}

export default Page2