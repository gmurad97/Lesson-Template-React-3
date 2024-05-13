import React from "react";
import "./App.css";
import Card from "../card/Card";
import SingleCard from "../single_card/SingleCard";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Card />
                <SingleCard />
            </div>
        );
    }
}

export default App;