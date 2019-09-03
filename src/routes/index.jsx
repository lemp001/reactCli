import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import SiderBar from '../components/siderBar'
import HeaderBar from '../components/headerBar'


// const { Header, Sider, Content } = Layout;

const Home = lazy(() => import('../pages/home'))
const Root = lazy(() => import('../pages/root'))
const Pie = lazy(() => import('../pages/chart/pie'))
const Detail = lazy(() => import('../pages/detail'))

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
                <Route path='/detail' component={ Detail } />
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