import React from 'react';
import "./AddTask.css";

const AddTask = (props) => {

    return ( 
        <div className="content">
            <h2>Dodaj zadanie</h2>
            <div id="rightCol">
                <input id="addTask" value={props.newTaskText} onChange={props.onChange} placeholder="Wprowadź nazwę zadania..."></input>
                <button id="dodaj" onClick={props.onClick}>Dodaj</button>
            </div>
        </div>
    );
}
 
export default AddTask;