
//! Class Based Component or Syntax

import { Component } from "react";

class StatesInCbc extends Component
{
    state={value:0};

    increment=()=>
    {
        this.setState({value : this.state.value+1});//{value:1}
    };

    decrement=()=>
    {
        if(this.state.value>0)
        {
              this.setState({value : this.state.value-1});
        }
    };

    render()
    {
        return(
            <div>
                <h1>States in Class Based Component</h1>
                <h2>Counter : {this.state.value}</h2>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
};
export default StatesInCbc