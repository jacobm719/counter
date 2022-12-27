import React from "react";

class Counter extends React.Component {
    // state = {counter: 0, title: "counter", };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 1,
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     console.log(this);
    //     this.setState({
    //         counter: this.state.counter+1,
    //     });
    // }

    // handleClick = () => {
    //     this.setState((prevState) => {
    //         const newState = {...prevState};
    //         newState.counter = newState.counter + 1;
    //         return newState;
    //     });
    //     // this.setState((prevState) => {
    //     //     return {counter: prevState.counter + 1};
    //     // });
    // }

    render() {
        const {title, counter, clickHandler} = this.props;
        return(
            <>
                <h1>{title}: {counter}</h1>
                <button onClick={clickHandler}>Increment</button>
            </>
        );
    }
}

export default Counter;
