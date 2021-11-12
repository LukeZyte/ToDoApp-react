import React from "react";
import "./TaskDone.css";

const Task = (props) => {

    const finishDate = new Date(props.finishDate).toDateString()

    return (
        <>
        <div className="task-contentDone">
            <div className="leftDone">
                <h3>{props.text}</h3>
            </div>
            <div className="rightDone">
                <p>Zakończono: {finishDate}</p>
            </div>
        </div>
        </>
    );
}

export default Task;