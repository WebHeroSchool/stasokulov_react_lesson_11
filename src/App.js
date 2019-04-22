import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './myClass.css';

const foo = 'Строка. Применил к ней импортированный стиль';
const num1 = 2;
const num2 = 3;
const num3 = undefined;
let num4 = null;
const style = 'myClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Отредактировал <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <p
              className = {style}
            >
              {foo}
            </p>
            <p>
              {num1}
            </p>
            <p>
              {num1 + num2}
            </p>
            <p>
              {num1&&'Логическая_операция'}
            </p>
            <p>
              {num1>num2?'Тернарная операция 1':'Тернарная операция 2'}
            </p>
            <p>
              {'Пытаюсь вывести undefined:'}{num3}
            </p>
            <p>
              {'Пытаюсь вывести null:'}{num4}
            </p>
            <p>
              {'Пытаюсь вывести false:'}{false&&true}
            </p>
            <p>
              {'Пытаюсь вывести true:'}{false||true}
            </p>
            
          </div>
        </header>
      </div>
    );
  }
}

export default App;
