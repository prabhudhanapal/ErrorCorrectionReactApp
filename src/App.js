import React, { Component } from 'react';
import './App.css';
import PersonOrderApp from './component/PersonOrderApp';
import AccountForm from './component/AccountForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PersonOrderApp />
        <AccountForm />
      </div>
    );
  }
}

export default App;