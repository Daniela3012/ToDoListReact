import { useState } from "react"
const useToDo = () => {
    const [taskList, setTaskList] = useState([]);
    const addTask = (task) => {
        if(!task) return;

        const newTask = {
            id: crypto.randomUUID(),
            task: task.trim(),
            completed: false
        };
        setTaskList((prev) => [...prev, newTask]);
    }

    const updateTask = (id, newValue) => {
        setTaskList(prev =>
            prev.map((item)=>(item.id === id ? {...item, task:newValue} : item))
        );
    }

    const deleteTask = (id) => {
        setTaskList((prev)=> prev.filter(item => item.id!==id));
    }

    const doneTask = (id) => {
        setTaskList( prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item) );
    }
  return {
    taskList,
    addTask,
    updateTask,
    deleteTask,
    doneTask
  }
}

export default useToDo;

