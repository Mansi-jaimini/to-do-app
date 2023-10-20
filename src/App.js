//import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component
 {
   state = {todo: []}

   constructor(props)
   {
    super(props)
     this.handleClick = this.handleClick.bind(this)
   }
  
   handleClick(event)
   {
     event.preventDefault()
    //console.log("handleClick is clicked")
     let newTodo = document.getElementById("addTodo").value
     let newTodoObject = {
       id: new Date().getTime(),
       text: newTodo,
     }
    console.log("Text readed: "+newTodo)
    // console.log(newTodoObject)
    // console.log(this.state)
   // this.setState({counter:this.state.counter+1})
    this.state.todo.push(newTodoObject)
    this.setState({todo:this.state.todo})
  // console.log(this.state)
   document.getElementById("addTodo").value = ""
   this.state.todo.map((tempTodo) =>{
      return ("ID: "+tempTodo.id+", Text: "+tempTodo.text)
    })
    //alert("clicked")
  } 
   render()
   {
     return <div>
       <h1>ToDo list</h1>
       <form onSubmit={this.handleClick}>
         <input type="text" id='addTodo'/>
         <button type='submit'>Add To-do</button>
       </form>
       <div>
        {this.state.todo.map((tempTodo) =>
        {
          return <div>{tempTodo.text}</div>
         })         }
      </div>
    </div>
  }
}
export default App;
