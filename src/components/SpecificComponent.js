import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class SpecificComponent extends Component {
 
  render(){
    console.log("***State: ", this.props)
    return (
      <>
        {<h1>{this.props.activeState.active_state.title}</h1>}
        {<p>{this.props.activeState.active_state.content}</p>}
      </>
    )
  }
}

export default withRouter(SpecificComponent);