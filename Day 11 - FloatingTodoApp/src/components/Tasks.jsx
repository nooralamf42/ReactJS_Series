import React, { useContext , useRef} from 'react'
import Task from './Task'
import todoContext from '../context/todoContext'

function Tasks() {
    const {tasks} = useContext(todoContext)
    const parentElementRef = useRef(null);
  return (
    <div ref={parentElementRef} className='flex flex-wrap justify-center items-centermt-3'>
        {
            tasks.map(task=><Task key={task.id} {...task} parentElementRef={parentElementRef}/>)
        }
    </div>
  )
}

export default Tasks