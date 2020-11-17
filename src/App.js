import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Details from './Components/Details/Details/Details';

import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import AddRentHouse from './Components/Dashboard/AddRentHouse/AddRentHouse';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/details/:apartmentId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/addRent">
            <AddRentHouse></AddRentHouse>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          </Switch>
          </Router>
          </UserContext.Provider>
  );
}

export default App;
