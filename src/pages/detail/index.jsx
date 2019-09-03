import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Action from '../../Action'


import { Button } from 'antd'



class Detail extends Component {
  
  render () {
    console.log('this.props', this.props)
    return (
      <div>
        <Button onClick={() => this.props.initData()}>{this.props.name}</Button>
        <Button onClick={this.props.initParameters}>{this.props.age}</Button>
      </div>
    )
  }
}


export default connect((state) => ({
  ...state.Reducer
}), (dispatch) => ({
  initData: () => dispatch(Action.initData()),
  initParameters: () => dispatch(Action.initParameters())
})) (Detail)