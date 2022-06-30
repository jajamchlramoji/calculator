// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import KeypadComponents from './components/keypadComponents';
import ResultComponent from './components/resultCoponents';

class App extends Component {
  constructor() 
  {
    super();
    this.state = {
      result: ""
    }
  }
  onClick = button => {
    if (button === "=") {
      this.calculate();
    }
    else if (button === "C") {
      this.reset();
    }
    else if (button === "CE") {
      this.backspace();
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };
  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  }


  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
    <div>
      <div className="calculator-body">
        <form className="title-body">
        <h1 className="title">Simple Calculator</h1>
        </form>
        <ResultComponent result={this.state.result} />
        <KeypadComponents onClick={this.onClick} />
      </div>
    </div>);
  }
}

export default App;
