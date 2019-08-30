import React, { useState, useEffect } from 'react';
import styles from './index.css'
import { Card, Col, Row, Icon, Button } from 'antd'


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
  const [visible, changeVisible] = useState(false)
  const [obj, setObj] = useState({a: 1, b: 2, c: {d: 1, e: 2}})
  useEffect(() => {
    changeVisible(true)
  }, [obj])
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
          style={{minHeight: 340}}
        >
          <div className={visible ? styles.div_show : styles.div_hide}>

          </div>
          
          <Button onClick={() => changeVisible(!visible)}>按钮</Button>
          <Button type='danger' onClick={() => setObj({...obj, c: {b:6, e:7}})}>按钮</Button>
        </Card>
      </div>
    </div>
  )
}

export default Home