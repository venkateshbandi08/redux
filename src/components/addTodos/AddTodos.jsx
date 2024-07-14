import React from "react";
import "./AddTodos.css";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../../redux/reducers/todoSlice";

const AddTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="todos-container">
      {todos.map((eachTodo) => (
        <div className="each-todo-container" key={eachTodo.id}>
          <h4 className={eachTodo.isCompleted ? "complete" : ""}>
            {" "}
            {eachTodo.text}{" "}
          </h4>
          <div className="buttons-container">
            <button
              onClick={() => dispatch(completeTodo(eachTodo.id))}
              className="btn btn-primary"
            >
              {" "}
              Completed{" "}
            </button>
            <button
              onClick={() => dispatch(removeTodo(eachTodo.id))}
              className="btn btn-danger"
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddTodos;
