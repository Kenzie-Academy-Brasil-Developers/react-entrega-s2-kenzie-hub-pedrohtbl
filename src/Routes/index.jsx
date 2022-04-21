import { Switch, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const Routes = () =>{
    return(
        <Switch>
            <Route exact path= '/'>
                <Login/>
            </Route>
            <Route path= '/cadastro'>
                <Cadastro/>
            </Route>
            <Route path= '/home'>
                <Home/>
            </Route>
        </Switch>
    )
}

export default Routes