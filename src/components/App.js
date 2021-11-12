import { Component } from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Jakies zadanie0",
        date: "01-01-2020",
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Jakies zadanie1",
        date: "01-01-2020",
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Jakies zadanie2",
        date: "01-01-2021",
        active: true,
        finishDate: null,
      },
    ],
    newTaskText: "",
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];  //Tworzenie kopii state.tasks jako tablica
    const index = tasks.findIndex(task => task.id === id); //Znajdowanie indexu w tablicy tasks
    tasks.splice(index, 1);  //usuwanie z tablicy tej o indexie id, jeden element chcemy usunac

    this.setState({
      tasks: tasks  //W miejsce starej tablicy wkladamy nowa
    })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks)  //Dokladnie to samo co ...[this.state.tasks]
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false
      }
    })

    this.setState({
      tasks: tasks
    })
  }

  handleInput = (e) => {
    this.setState({
      newTaskText: e.target.value
    })
  }

  handleClickDodaj = () => {

    if(this.state.newTaskText) {
      const tasks = Array.from(this.state.tasks)
      const newIndex = tasks.length
      tasks.push({
        id: newIndex,
        text: this.state.newTaskText,
        date: "today",
        active: true,
        finishDate: null,
      });

      this.setState({
        tasks: tasks,
        newTaskText: ""
      })
    }
    else {
      alert("Przed wprowadzeniem nowego zadania należy podać jego nazwę")
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Lista obowiązków</h1>
        <AddTask 
          newTaskText={this.state.newTaskText} 
          onChange={this.handleInput} 
          onClick={this.handleClickDodaj}
        />
        <br/>
        <TaskList 
          tasks={this.state.tasks} 
          delete={this.deleteTask} 
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;