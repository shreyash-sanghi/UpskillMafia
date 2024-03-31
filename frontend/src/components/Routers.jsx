import React from "react";
import { Routes,Route } from "react-router-dom";
import SignUp from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Home2 from "./Home2";
const Routers = ()=>{
    return(
        <>
                <Routes>
                <Route exact path="/" Component={Home}></Route> 
                {/* <Route exact path="" Component={Home}></Route>  */}
                <Route exact path="/signup" Component={SignUp}></Route> 
                <Route exact path="/login" Component={Login}></Route> 
                <Route exact path="/secondpage/:id" Component={Home2}></Route> 
                </Routes>
        </>
    )
}

export default Routers;