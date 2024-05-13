import React from "react";
import "./SingleCard.css";

class SingleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Mega Super Puper Duper Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
            jumbotron_color: "#4A6D7A",
            auto_counter: 0,
            counter: 0
        };

        this.changeCounterState = this.changeCounterState.bind(this);
    }

    componentDidMount() {
        this.autoIncrementInterval = setInterval(() => {
            this.setState((prevState) => ({
                auto_counter: prevState.auto_counter + 1
            }))
        }, 1024);
    }

    componentWillUnmount() {
        clearInterval(this.autoIncrementInterval);
    }

    changeBackgroundColor(color) {
        this.setState({
            jumbotron_color: color
        })
    }

    changeCounterState() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        return (
            <div className="single-card">
                <div className="container">
                    <div className="row">
                        <div className="jumbotron" style={{ backgroundColor: this.state.jumbotron_color }} >
                            <h1 className="jumbotron__title">{this.state.title}</h1>
                            <p className="jumbotron__description">{this.state.description}</p>
                            <input onChange={(e) => this.changeBackgroundColor(e.target.value)} className="form-control" type="text" placeholder="Enter the bg color example: red" />
                            <div className="jumbotron__separator"></div>
                            <h1 className="jumbotron__title">Counter</h1>
                            <div className="jumbotron__section">
                                <div className="jumbotron__left">
                                    <h1 className="jumbotron__title">Auto Counter</h1>
                                    <h1 className="jumbotron__title">{this.state.auto_counter}</h1>
                                </div>
                                <div className="jumbotron__right">
                                    <h1 className="jumbotron__title">Click Counter</h1>
                                    <h1 className="jumbotron__title">{this.state.counter}</h1>
                                    <button onClick={this.changeCounterState} className="btn btn-primary">Click</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCard;