import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    const task = {
      text: newTask,
      completed: false
    };
    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask('');
  };

  const handleToggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
    <div className="header">
      <input type="text" value={newTask} onChange={handleTaskChange} />
      <br /><br />
      <button onClick={handleAddTask}>Add</button>
    </div>
      <ul className='App'>
        {tasks.map((task, index) => (
          <li key={index}>
            
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <input
              type="checkbox" 
              onChange={() => handleToggleTask(index)}
              checked={task.completed}
            />
            <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;