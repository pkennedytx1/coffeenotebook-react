import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CoffeeDashboard from '../components/CoffeeDashboard';
import Navagation from '../components/Navbar';
import UserPreferences from '../components/UserPreferences';
import Login from '../components/Login';

const Routes = () => {
    const [token, setToken] = useState();

    if (!token) {
        return (
            <>
                <Redirect to='/login' />
                <Login setToken={setToken} />
            </>
        )
    }

    return(
        <>
            <Navagation />
            <Switch>
                <Route path='/dashboard'>
                    <CoffeeDashboard />
                </Route>
                <Route path='/preferences'>
                    <UserPreferences />
                </Route>
                <Route path='/login'>
                    <Login setToken={setToken} />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;