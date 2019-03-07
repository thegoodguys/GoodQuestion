import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionComponent from '../components/QuestionComponent';
import React from 'react';
import HelloComponent from '../components/Hello'



const RouterContainer = (props) => {
  return (
    <div className="MainContainer">
      <Switch>
        <Route
          exact path='/'
          component={QuestionComponent}
        />
        <Route
          exact path='/hello'
          component={HelloComponent}
        />
      </Switch>
    </div>
  )
}

export default withRouter(RouterContainer);