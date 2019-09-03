import React, { useState, useEffect, useContext } from 'react';
import styles from './index.css'
import { Card, Col, Row, Icon, Button } from 'antd'
import GlobalContext from '../../globalContext/globalContext';
import HomeContext from './context'
import HeadOptions from './components/headOptions'


function TitleCard (props) {
  return (
    <Col span={6}>
      <Card>
        <div style={{verticalAlign: 'middle'}}>
          {props.children}
        </div>
        
      </Card>
    </Col>
  )
}




function Home () {
  const globalContext = useContext(GlobalContext)
  const [visible_left, changeVisibleLeft] = useState(true)
  const [visible_right, changeVisibleRight] = useState(true)
  const [visible_left_bottom, changeVisibleLeftBottom] = useState(true)
  const [visible_right_bottom, changeVisibleRightBottom] = useState(true)
  const changeAll = () => {
    changeVisibleLeft(!visible_left)
    changeVisibleRight(!visible_right)
    changeVisibleLeftBottom(!visible_left_bottom)
    changeVisibleRightBottom(!visible_right_bottom)
  }
  useEffect(() => {
    console.log('hello world')
  }, [visible_left])
  return (
    <div>
      <Row gutter={24}>
        <TitleCard><Icon type="security-scan" /> 东风吹老洞庭波</TitleCard>
        <TitleCard><Icon type="setting" /> 一夜湘君白发多</TitleCard>
        <TitleCard><Icon type="smile" /> 醉后不知天在水</TitleCard>
        <TitleCard><Icon type="star" /> 满船清梦压星河</TitleCard>
      </Row>
      <div style={{marginTop: 20}}>
        <Card
          style={{minHeight: 340, margin:'20 0'}}
        >
          <div style={{display: 'flex', width: 420, flexWrap: 'wrap'}}>
            <div className={visible_left ? styles.div_show_left : styles.div_hide_left}></div>
            <div className={visible_right ? styles.div_show_right : styles.div_hide_right}></div>
            <div className={visible_left_bottom ? styles.div_show_left_bottom : styles.div_hide_left_bottom}></div>
            <div className={visible_right_bottom ? styles.div_show_right_bottom : styles.div_hide_right_bottom}></div>
          </div>
          <Button style={{background: '#1890ff'}} onClick={() => changeVisibleLeft(!visible_left)}>top left</Button>
          <Button style={{background: '#fa541c'}} onClick={() => changeVisibleRight(!visible_right)}>top right</Button>
          <Button style={{background: '#fadb14'}} onClick={() => changeVisibleLeftBottom(!visible_left_bottom)}>bottom left</Button>
          <Button style={{background: '#52c41a'}} onClick={() => changeVisibleRightBottom(!visible_right_bottom)}>bottom right</Button>
          <Button onClick={changeAll}>all div</Button>
          <Button type='primary' onClick={() => globalContext.changeList([4, 5, 6, 7])}>按钮</Button>
          <Button type='primary' ghost onClick={() => globalContext.changeText('love and pace')}>按钮</Button>
        </Card>
        <HomeContext.Provider
          value={{
            visible_left,
            changeVisibleLeft
          }}
          >
          <HeadOptions />
        </HomeContext.Provider>
        
      </div>
    </div>
  )
}

export default Home