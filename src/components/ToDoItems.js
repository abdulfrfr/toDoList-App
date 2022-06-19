import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md'

function ToDoItems(props){
    const [isDone, setIsDone] = useState(false);

    function handleEvent(){
        setIsDone(!isDone)
    }
    return(
        <div  classNmae='todo-div' onClick={handleEvent}>
            <li>{props.todoitems} <span className='delete' onClick={() => {props.deleteItem(props.id)}} 
            style={{opacity: isDone ? '100%' : '0' }}><MdDelete/></span></li>
            
            
        </div>
    );
}

export default ToDoItems;