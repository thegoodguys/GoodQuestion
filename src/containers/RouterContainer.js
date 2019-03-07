import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionComponent from '../components/QuestionComponent';
import React, { Component } from 'react';
import MainContainer from './MainContainer';
import HelloComponent from '../components/Hello'



class RouterContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          company_name: '',
          role_name: '',
          round: '',
          type: '',
          title: '',
          content: '',
          location_name: '',
          tips: ''
        }

    this.handleChange = this.handleChange.bind(this); 
    this.postQuestion = this.postQuestion.bind(this);

    }

    handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.id]: e.target.value,
      })
    }

    postQuestion(){
      fetch('http://localhost:3002/postQuestion', {
        method: 'POST',
        mode: 'cors',
        headers:  {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(res => console.log("Success!"))
        .then(res => (
          this.setState((state) => ({
            username: '',
            company_name: '',
            role_name: '',
            round: '',
            type: '',
            title: '',
            content: '',
            location_name: '',
            tips: ''
      }))))
        .catch(err => console.log("***Error: ", err))
    }    
    
    
    render(){
        return (
        <div className="RouterContainer">
            <Switch>
                <Route
                    exact path='/'
                    component={MainContainer}
                />
                <Route
                    exact path='/question'
                    render={(props) => <QuestionComponent 
                        handleChange={this.handleChange}
                        postQuestion={this.postQuestion}
                    />}
                />
            </Switch>
        </div>
        )
    }
}

export default withRouter(RouterContainer);