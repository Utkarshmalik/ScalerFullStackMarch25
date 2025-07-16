import UnAuthenticated from "../Components/UnAuthenticated";


function AuthHoc(props){

    const isLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));

    if(!isLoggedIn){
        return <UnAuthenticated/>
    }


    return <div>

        {props.children}

    </div>

}

export default AuthHoc;




// Why Use HOCs?
// HOCs are primarily used for:

// Code Reusability – Share logic across multiple components.
// Cross-Cutting Concerns – Logging, analytics, authentication, etc.
// Conditional Rendering – Show or hide components based on props or state.
// Props Manipulation – Modify, add, or filter props before passing them to a component.