import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import SiderBar from '../components/siderBar'
import HeaderBar from '../components/headerBar'
import Pie from '../pages/chart/pie'

// const { Header, Sider, Content } = Layout;

const Home = lazy(() => import('../pages/home'))
const Root = lazy(() => import('../pages/root'))


class Main extends Component {
  render () {
    // const loggedIn = window.localStorage.getItem('loggedIn');
    const mainPage = (
      <Layout>
        <SiderBar />
        <Layout>
          <HeaderBar />
          <div className='layout-content'>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/root' component={ Root } />
                <Route exact path='/chart/pie' component={ Pie } />
              </Switch>
            </Suspense>
          </div>
        </Layout>
      </Layout>
    )
    return (
      // loggedIn ? (
      //   mainPage
      // ) : (
      //   <Redirect to="/login" />
      // )
      mainPage
    )
  }
}

export default Main