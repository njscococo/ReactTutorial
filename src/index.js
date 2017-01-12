import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    //設定state
    this.state = {
      value: 0,
      time: new Date(),
      textValue: ''
    }

    //this.handlePlus = this.handlePlus.bind(this);
    //this.handlePlus = this.handlePlus.bind(this);
  }

  handlePlus(){    
    this.setState({
      value: this.state.value+1
    });
    // this.setState((preState)=>({
    //   value: preState.value+1}));
    this.setState({
      time: new Date()
    });
    console.log(this.state);
  }

  render() {
    return(
    <div>
      <span>value:{this.state.value}</span> <br />
      <button onClick={this.handlePlus.bind(this)}>+</button>
      <button>-</button><br />
      <span>{this.state.time.getSeconds()}</span>
      <Child count={this.state}  />
     
    </div>)
  }
}

class Child extends React.Component{
  render(){
    return(
      <div>
      <span>this is Child:{this.props.count.value}</span>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />
  , document.getElementById('app'));
