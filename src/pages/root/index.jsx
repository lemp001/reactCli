import React from 'react';
import { connect } from 'react-redux'
// import * as action from '@src/Action'

class Root extends React.Component {
  
  render () {
    console.log('this.props', this.props)
    
    return (
      <div>
        Root
      </div>
    )
  }
}



export default connect((state) => ({
  ...state.root
})) (Root)