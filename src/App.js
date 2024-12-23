import {useState, useEffect} from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

import './App.css';

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    document.title = "TaskBuddy"
  },[taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <TaskList 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
