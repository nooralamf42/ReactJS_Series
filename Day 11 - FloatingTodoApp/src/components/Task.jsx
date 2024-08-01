import { CgClose } from "react-icons/cg";
import React, { useContext, useState } from "react";
import todoContext from "../context/todoContext";
import {motion} from 'framer-motion'

function Task({ taskText, id, completed, parentElementRef}) {
    const {tasks, setTasks} = useContext(todoContext)
    console.log(id)
    const deleteTaskHandler = () =>{
        let filteredTasks = tasks.filter(task=>task.id !== id)
        filteredTasks = filteredTasks.map((task, index)=>({...task, id: index}))
        setTasks(filteredTasks)
        localStorage.setItem('tasks', JSON.stringify(filteredTasks))
    }

    const checkHandler = () =>{
        const updateTasks = tasks.map(task => task.id == id ? {...task, completed : !task.completed} : task)
        setTasks(updateTasks)
        localStorage.setItem('tasks', JSON.stringify(updateTasks))
    }
  
  return (
    <motion.div drag dragConstraints={parentElementRef} className={`w-[250px] min-h-[350px] rounded-3xl p-5 shadow-2xl m-5 relative  bg-white/80 border`}>
      <button className="absolute top-0 right-0 m-2 bg-" onClick={deleteTaskHandler}>
        <CgClose size={25} />
      </button>
      <p className={`text-xl ${completed && 'line-through'}`}>{taskText}</p>
      <div className="absolute bottom-0 flex justify-center items-center w-full gap-2 text-xl -ml-4 pb-5">
        <input type="checkbox" checked={completed} onClick={checkHandler} name="" id={id} />
        <label htmlFor={id}>{completed ? "Completed" : "Incomplete"}</label>
      </div>
    </motion.div>
  );
}

export default Task;
