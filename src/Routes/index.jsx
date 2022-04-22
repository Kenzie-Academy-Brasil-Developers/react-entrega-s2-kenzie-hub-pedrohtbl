import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const Routes = () =>{
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
        !!token&&setAuthenticated(true)
    }, [authenticated])

    return(
        <Switch>
            <Route exact path= '/'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route path= '/cadastro'>
                <Cadastro authenticated={authenticated}/>
            </Route>
            <Route path= '/home'>
                <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes