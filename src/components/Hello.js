import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';



const HelloComponent = () => {
  return (
    <div>
     Hello World!
    </div>
  )
}

export default withRouter(HelloComponent);