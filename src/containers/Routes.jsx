import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import CoffeeDashboard from '../components/CoffeeDashboard';
import Navagation from '../components/Navbar';
import UserPreferences from '../components/UserPreferences';
import Login from '../components/Login';
import useToken from '../utils/useToken';

const Routes = () => {
    let history = useHistory();
    const { token } = useToken();
    console.log('Routes', token);

    if (!token) {
        history.push('/login');
    }

    return(
        <>
            <Navagation />
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />  
                <Route path='/dashboard'>
                    <CoffeeDashboard />
                </Route>
                <Route path='/preferences'>
                    <UserPreferences />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;