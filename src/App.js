import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'
import Login from './pages/login'
import Main from './routes'
import GlobalState from './globalContext/globalState'



class App extends Component {
  render () {
    return (
      <div className='App'>
        <GlobalState>
          <Switch>
            <Route path='/login' component={ Login } />
            <Route path='/' component={ Main } />
            <Redirect to='/' />
          </Switch>
        </GlobalState>
      </div>
    )
  }
}




export default App;
