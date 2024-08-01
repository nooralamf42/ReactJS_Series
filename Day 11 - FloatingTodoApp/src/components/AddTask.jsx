import React, { useContext, useRef } from "react";
import todoContext from "../context/todoContext";

function AddTask() {
    const {setTasks, tasks} = useContext(todoContext)
    const inputRef = useRef(null)

    const formHandler = (e) =>{
        e.preventDefault()
        const taskText = inputRef.current.value
        let newTask = {
            taskText,
            completed : false,
            id: tasks.length
        }
        setTasks(pre=>[...pre, newTask])
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
        inputRef.current.value = ''
    }
    
  return (
    <form onSubmit={formHandler} className="overflow-hidden rounded-3xl mx-auto mt-12 border w-fit sm:text-3xl">
      <input ref={inputRef} className="rounded-l-2xl px-2 outline-none" type="text" maxLength={177} required />
      <button className="px-2 text-white py-1 bg-green-400">Add todo</button>
    </form>
  );
}

export default AddTask;
