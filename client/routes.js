/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import {
  BrowserRouter,
  Route,
  Switch} from 'react-router-dom'
import {
  AllStudents,
  AllActivities,
  AllRewards,
  Login
} from './components'

const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/students" component={AllStudents} />
        <Route exact path="/activities" component={AllActivities} />
        <Route exact path="/rewards" component={AllRewards} />
        <Route exact path="/login" component={Login} />
      </Switch>
      </BrowserRouter>
    )
}

export default Routes;



