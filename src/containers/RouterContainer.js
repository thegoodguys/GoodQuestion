import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionComponent from '../components/QuestionComponent';
import React, { Component } from 'react';
import MainContainer from './MainContainer';


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
          tips: '',
          questions: []
        }

    this.handleChange = this.handleChange.bind(this); 
    this.submitQuestion = this.submitQuestion.bind(this);

    }

    componentDidMount(){
        fetch('http://localhost:3002/getQuestions')
          .then(res => res.json())
          .then(res => 
            this.setState((state) => ({
              questions: res}
            )))
          .catch(err => console.log("***Error: ", err))
    }    

    handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.id]: e.target.value,
      })
    }


    
    submitQuestion(){
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
                    render={() => <MainContainer
                     questions={this.state.questions}
                    />}
                />
                <Route
                    exact path='/question'
                    render={(props) => <QuestionComponent 
                        handleChange={this.handleChange}
                        submitQuestion={this.submitQuestion}
                    />}
                />
            </Switch>
        </div>
        )
    }
}

export default withRouter(RouterContainer);