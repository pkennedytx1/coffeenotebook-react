import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoffeeDashboard from '../components/CoffeeDashboard';
import Navagation from '../components/Navbar';
import UserPreferences from '../components/UserPreferences';
import Login from '../components/Login';

const Routes = () => {
    const [token, setToken] = useState();

    !token && <Login setToken={setToken} />

    return(
        <BrowserRouter>
        <Navagation />
            <Switch>
                <Route path='/dashboard'>
                    <CoffeeDashboard />
                </Route>
                <Route path='/preferences'>
                    <UserPreferences />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;