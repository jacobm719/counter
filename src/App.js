import './App.css';
import React from "react";
import Counter from "./component/Counter";
import Header from "./component/Header";

// props drilling, state lifting
// contextAPI, redux

// controlled component: controlled by React
// uncontrolled component: controlled by browser

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "My counter app",
      heading: "Heading",
      counter: 0,
      inputValue: "hello",
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
        const newState = {...prevState};
        newState.counter = newState.counter + 1;
        return newState;
    });
    // this.setState((prevState) => {
    //     return {counter: prevState.counter + 1};
    // });
}

handleInput = (e) => {
  this.setState((prev) => {
    return {
      ...prev,
      inputValue: e.target.value,
    };
  });
}

  render() {
    return (
      <React.Fragment>
        <Header heading={this.state.heading} counter={this.state.counter} />
        <Counter title={this.state.title} counter={this.state.counter} clickHandler={this.handleClick} />
        <input onChange={this.handleInput} value={this.state.inputValue}></input>
      </React.Fragment>
    );
  }
}


export default App;
