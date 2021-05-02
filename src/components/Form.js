import React from "react";

const Form = ({setInputText,inputText, todos, setTodos}) => {
    //Here i can write javascript code and function

    const InputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
        };

    const submitTodoHandler=(e)=>{

        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false, id:Math.random()*1000}]);
        setInputText("");

    };

    
  return (
    <form>
      <input value={inputText} onChange={InputTextHandler} type="text" className="todo-input"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filer-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;