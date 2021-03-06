import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, long: null };

        window.navigator.geolocation.getCurrentPosition(
            (position => {
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
            }),
            (err) => console.log(err)
        );
    }

    render() {
        return (
            <div>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.long}</p>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));
