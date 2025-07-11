import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "../Components/Counter";




test("render initial count to be 0",()=>{

    render(<Counter/>);

    const counterText = screen.getByText("Count: 0");

    expect(counterText).toBeInTheDocument();


})



test("click increment : count value should be 1",()=>{

    render(<Counter/>);
    const counterText = screen.getByText("Count: 0");
    expect(counterText).toBeInTheDocument();


    //get a buutton from the screen 
    const incrementButton = screen.getByText("Increment");

    //click a element/button
    fireEvent.click(incrementButton);

      const updatedCounterText = screen.getByText("Count: 1");
    expect(updatedCounterText).toBeInTheDocument();
})




test("CLick increment 3 times , decrement 2 and then reset",()=>{



    render(<Counter/>);
    const counterText = screen.getByText("Count: 0");
    expect(counterText).toBeInTheDocument();


    //get a buutton from the screen 
    const incrementButton = screen.getByText("Increment");

    //click a element/button
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);


    var updatedCounterText = screen.getByText("Count: 3");
    expect(updatedCounterText).toBeInTheDocument();


    //get a buutton from the screen 
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    updatedCounterText = screen.getByText("Count: 1");
    expect(updatedCounterText).toBeInTheDocument();


    //reset 

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);



    updatedCounterText = screen.getByText("Count: 0");
    expect(updatedCounterText).toBeInTheDocument();


})


