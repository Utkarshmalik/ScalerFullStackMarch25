
import {render, screen} from "@testing-library/react";
import Greeting from "../Components/Greeting";


//when prop is not passed
test("Test When prop is not passed",()=>{

     //render a greeting component 
    render(<Greeting/>);

    const greetingElement = screen.getByText("Hello World ! How are you doing ?");

    expect(greetingElement).toBeInTheDocument();

})


//when John is provided 


//when prop is not passed
test("Test When John is  passed",()=>{

     //render a greeting component 
    render(<Greeting name="John" />);

    const greetingElement = screen.getByText("Hello , John ! How are you doing ?");

    expect(greetingElement).toBeInTheDocument();
    
})




// The render() function takes a React component as an argument and renders it into a virtual DOM.

