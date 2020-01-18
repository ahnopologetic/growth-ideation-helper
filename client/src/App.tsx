import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BasicForm } from './_view/BasicForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <BasicForm title='hello' description='world' questions={['김가연 보러가야해']}/>
    </div>
  );
}

export default App;
