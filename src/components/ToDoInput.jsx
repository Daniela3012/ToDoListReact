import React, { useState } from 'react';
import { ToDoItem } from './ToDoItem';
import useTodo from '../hooks/useToDo'; // Asegúrate de que la ruta sea correcta

export const ToDoInput = () => {
  const [task, setTask] = useState('');
  const { taskList, addTask, updateTask, deleteTask, doneTask } = useTodo();

  const handleChange = (eve) => {
    eve.preventDefault();
    setTask(eve.target.value);
  };

  const handleClick = (eve) => {
    eve.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <section className='todo__container'>
       <h2 className='form__title'>ToDo de Organización</h2>
      <form className='form__task' onSubmit={(e) => e.preventDefault()}>
        <input className='input form__input' type="text" onChange={handleChange} value={task} />
        <button className='button form__button' type="button" onClick={handleClick}>Agregar Tarea</button>
      </form>

      <ul className='post__task'>
        {taskList.map(item => (
          <ToDoItem 
          key={item.id}
          item={item}
          onUpdate={updateTask}
          onDelete={deleteTask}
          onDone={doneTask} />
        ))}
      </ul>
    </section>
  );
};
