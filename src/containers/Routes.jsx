import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CoffeeDashboard from '../components/CoffeeDashboard';
import Navagation from '../components/Navbar';
import UserPreferences from '../components/UserPreferences';
import Login from '../components/Login';
import { AuthContext } from '../stores/authStore';

const Routes = () => {

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