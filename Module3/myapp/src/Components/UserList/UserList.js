import User from "../User/User";


function UserList(){

    return <div>

        <h1>I am a UserList component</h1>

        <User name="Utkarsh" age="31" address={{city:"Delhi"}} />
        <User name="Harsh" age="23"/>
        <User name="Yogesh" age="35"/>
        <User name="Kalpesh" age="61"/>
        <User name="Sipra" age="21"/>
        <User name="Atish" age="41"/>
        <User name="Utkarsh" age="31"/>
        <User name="Utkarsh" age="31"/>
        <User name="Utkarsh" age="31"/>
        <User name="Utkarsh" age="31"/>
        <User name="Utkarsh" age="31"/>

    </div>

}

export default UserList;