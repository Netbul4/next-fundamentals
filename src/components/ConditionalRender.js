import React, {Component} from "react"; 

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}

export default class ConditionalRender extends Component{
    render(){
        return(
            <div>
                <h2>Conditional Render.</h2>
                <Login/>
                <Logout/>
            </div>
        )
    }
}