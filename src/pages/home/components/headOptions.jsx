import React, { useContext } from 'react'
import { Card, Button, Select } from 'antd'
import GlobalContext from '../../../globalContext/globalContext';
import HomeContext from '../context'

export default function HeadOptions () {

  const globalContext = useContext(GlobalContext)
  const homeContext = useContext(HomeContext)
  return (
    <div style={{marginTop: 20}}>
      <Card>
        <Select
          style={{width: 200}}
          >
          {
            globalContext.list.map(item => <Select.Option key={item}>item {item}</Select.Option>)
          }
        </Select>
        <Button
          onClick={() => homeContext.changeVisibleLeft(!homeContext.visible_left)}
        >按钮</Button>
      </Card>
    </div>
  )
}