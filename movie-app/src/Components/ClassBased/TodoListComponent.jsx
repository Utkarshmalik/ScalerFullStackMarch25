import React from "react";
import Input from "./InputComponent";



class TodoListComponent extends React.Component{

    constructor(props){

        console.log('Constructor: Setting up initial state and bindings.');

        super(props);

        this.state={
            todos:[],
        }
    
    }


    onAddTodo = ()=>{

        this.setState({
            todos:[...this.state.todos, this.state.searchValue],
            searchValue:""
        })

    }

    //useEffect with a []
    componentDidMount(){
         console.log('Component Did Mount: Fetching initial to-do items.');
    }

    componentDidUpdate(){
        console.log('Component Did Update:');
    }

    componentWillUnmount(){
        console.log('Component Will Unmount: Cleaning up resources.');


    }

    render(){

        console.log('Render: Rendering the to-do list.');


        return <div>

            <h1> My todo list </h1>

            {
                this.state.todos.map((todo)=>{
                    return <li> {todo}</li>
                })

            }

            <Input/>


            <button onClick={this.onAddTodo} >  Add Todo </button>


        </div>




    }
}


export default TodoListComponent;

// Why Functional Components are Better

// Simplicity and Readability: Functional components are generally easier to read and write. They involve less boilerplate code and are more concise.

// Hooks: Hooks provide powerful features that are not available in class components, such as useState, useEffect, useContext, etc. They allow you to reuse stateful logic without changing your component hierarchy.

// Avoiding this Keyword: Functional components do not use the this keyword, which can be confusing and error-prone in class components.

// Better Performance: Functional components can be more performant because they are stateless by default. With hooks, you can manage state more efficiently.

// Encapsulation of Logic: Hooks allow you to encapsulate and reuse logic more easily. Custom hooks enable the extraction of complex logic into reusable functions.

