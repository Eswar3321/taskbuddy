import React from 'react'
import {v4 as uuidv4} from 'uuid'

const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if(task.id) {
      const updatedtaskList =  taskList.map((todo) => (
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ))
      setTaskList(updatedtaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: uuidv4(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      setTask({});
    }
    
  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit} >
          <input type="text" name="task" value={task.name || ""} placeholder="add task" autoComplete='off' maxLength="25" onChange={((e) => setTask({...task, name: e.target.value}))}/>
          <button type="submit">{task.id ? 'Update' : 'Add'}</button>
        </form>
    </section>
  )
}

export default AddTask
