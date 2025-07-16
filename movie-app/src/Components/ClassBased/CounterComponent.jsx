import React from "react";


class CounterComponent extends React.Component {

    constructor(props){

        console.log("Inside the Constructor");
        super(props);

       //State Initialization
        this.state = {
            count:0
        }

        // this.onIncrement = this.onIncrement.bind(this);
    }

     onIncrement=()=>{
        console.log("Increment called");

        //State Update
        this.setState({
            count:this.state.count+1
        })
    } 


    render(){
                console.log("Inside the render method");

        return <div>

            {/* State Access */}
            <p> Count : {this.state.count} </p>

            <button onClick={this.onIncrement} className="bg-white border" 
            style={{backgroundColor:"white"}}> Increment </button>

        </div>

    }


}


export default CounterComponent;