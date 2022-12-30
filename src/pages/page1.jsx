import React from "react";
import { Navigate } from "react-router";

const Page1 = ({user}) => {
    if (!user)
        return <Navigate to='/' replace/>
    return <div>
        Page 1
    </div>
}

export default Page1