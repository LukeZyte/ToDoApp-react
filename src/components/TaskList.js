import React from "react";
import "./TaskList.css";
import Task from "./Task";
import TaskDone from "./TaskDone";

const TaskList = (props) => {
    
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(
        task => <Task 
        key={task.id} 
        date={task.date} 
        text={task.text} 
        task={task}
        delete={props.delete} 
        change={props.change}
        />)

    const doneTasks = done.map(
        task => <TaskDone 
        key={task.id} 
        date={task.date} 
        text={task.text} 
        task={task}
        finishDate={task.finishDate}
        delete={props.delete} 
        change={props.change}
        />)

    return (
        <div className="content-column">
            <h2>Zadania do wykonania</h2>
            <div>
                {activeTasks.length === 0 ? "Brak zadań do wykonania" : activeTasks}
                <hr/>
            </div>
            <h2>Historia wykonanych zadań</h2>
            <div>
                {doneTasks.length === 0 ? "Żadne zadanie nie zostało ukończone" : doneTasks}
            </div>
        </div>
    );
}
 
export default TaskList