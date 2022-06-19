import React, {useState} from "react";
import ToDoItems from "./ToDoItems";
import InputArea from "./InputArea";


function App() {

const [items, setItems] = useState([]);



function handleItems(input, setInput){
  setItems((prevValue) => {
    return[
      ...prevValue,
      input
    ]
  });

  setInput('');
}

function deleteItem(id){
  setItems((prevValue)=>{
    return prevValue.filter((items, index)=>{
      return index !== id;
    })

  });
}


  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
    <InputArea handleItems={handleItems}/>
      <div>
        <ul>
        {items.map((todoitems, index) => {
          return(
            <ToDoItems 
            key={index} 
            id={index} 
            deleteItem={deleteItem} 
            todoitems={todoitems}
            />
        )
            
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
