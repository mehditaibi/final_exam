import React, { Component } from "react";
import "../styles/App.css";
import HomePage from "./HomePage";

class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <main>
                <HomePage/>
            </main>
        )
    }
}

export default App; 