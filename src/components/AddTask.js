import React, {Component} from 'react';
import "./AddTask.css";

class AddTask extends Component {
    render() { 
        return ( 
            <div className="content">
                <h2>Dodaj zadanie</h2>
                <div id="rightCol">
                    <input id="addTask"></input>
                    <button id="dodaj">Dodaj</button>
                </div>
            </div>
        );
    }
}
 
export default AddTask;