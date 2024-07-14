import React, { useState } from "react";
import "./TodosHomePage.css";
import AddTodos from "../../components/addTodos/AddTodos";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todoSlice";

const TodosHomePage = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="todos-page">
      <h1> Todo List </h1>
      <div className="input-and-addtodo-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="input-feild"
          type="text"
          value={input}
          onKeyDown={(e) => {
            // console.log(e);
            if (e.key === "Enter") {
              addTodoHandler();
            }
          }}
        />
        <button onClick={addTodoHandler} className="btn btn-success">
          {" "}
          Add Todo{" "}
        </button>
      </div>
      <h3 style={{ marginTop: "2rem" }}> Todos To Complete 🎯 </h3>
      <AddTodos />
    </div>
  );
};

export default TodosHomePage;
