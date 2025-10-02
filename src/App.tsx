import React from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management App</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;