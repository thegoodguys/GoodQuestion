import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';



const HelloComponent = () => {
  return (
    <>
      Hello!
    </>
  )
}

export default withRouter(HelloComponent);