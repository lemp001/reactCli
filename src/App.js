import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import styles from './App.css'
import Login from './pages/login'
import Main from './routes'


class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Switch>
          <Route path='/login' component={ Login } />
          <Route path='/' component={ Main } />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}




export default App;
