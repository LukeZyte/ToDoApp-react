import React from "react";
import "./Task.css";

const Task = (props) => {
    return (
        <>
        <hr/>
        <div className="task-content">
            <div className="left">
                <h3>{props.text}</h3>
                <p>{props.date}</p>
            </div>
            <div className="right">
                <button className="zrobione" onClick={() => props.change(props.task.id)}>✔️</button>
                <button className="usun" onClick={() => props.delete(props.task.id)}>❌</button>
            </div>
        </div>
        </>
    );
}

export default Task;