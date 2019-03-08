import { Switch, Route, withRouter } from 'react-router-dom';
import QuestionComponent from '../components/QuestionComponent';
import React, { Component } from 'react';
import MainContainer from './MainContainer';
import SpecificComponent from '../components/SpecificComponent';


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
          questions: [],
          active_state: []
        }

    this.handleChange = this.handleChange.bind(this); 
    this.submitQuestion = this.submitQuestion.bind(this);
    this.setActiveState = this.setActiveState.bind(this);
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

    setActiveState(data){
      console.log("***Data: ", data)
      this.setState({
        active_state: data
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
                      setActiveState={this.setActiveState}
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
                 <Route
                    exact path='/specific'
                    render={(props) => <SpecificComponent
                      activeState={this.state}
                    />}
                />
            </Switch>
        </div>
        )
    }
}

export default withRouter(RouterContainer);