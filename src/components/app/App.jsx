import React from "react";
import "./App.css";
import Card from "../card/Card";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Card />
            </div>
        );
    }
}

export default App;