import React from 'react';
import './App.css';
import ADDTASK from './components/addTask';
import ListTask from './components/listTask'
import Search from './components/search';



function App() {


  return (
    <div className="App">
    <Search/>
    <ADDTASK/>
    <ListTask/>
    </div>
  );
}

export default App;
