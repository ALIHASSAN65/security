import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const element = <h1>Hello, world!</h1>;
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {<h2>It is {new Date().toLocaleTimeString()}.</h2>}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1 className="Dialog-title">Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
export default class App extends React.Component {
  state = {
    arr: [1, 2, 3],
    value: 'i am value'
  }
  componentDidMount() {
    // alert("Component did mount")
  }
  componentWillUnmount() {
    alert("Component will unmount")
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    alert(event.target.value + event.target + event)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>

        </header>
        {this.state.arr.map((data, i) => (
          getGreeting(i)
        ))}
        <Clock />
        <Mailbox unreadMessages={''} />,
        <NumberList numbers={numbers} />,
        <form onSubmit={() => alert('submitted')}>
          <label>
            Name:
    <input type="file" name="name" />
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <select multiple={false} value={['lime', 'mango']} >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" value="Submit" />

        </form>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            // value={temperature}
            onChange={this.handleChange} />
          <li>
            <Link to="/Home">Users App</Link>
          </li>
        </fieldset>
      </div>
    );
  }
}

