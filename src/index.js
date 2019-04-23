import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

// Class-based component
class App extends React.Component {
  // React uses Babel to translate to constuctor, super and initializes this.state
  // Initialize state as an instance property
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // 1st argument = position
      // Must call setState() to update the state of the component
      // This callback will run in the future AFTER we've successfully located the position
      position => this.setState({ lat: position.coords.latitude }),
      // 2nd argument = err (if user declines location request)
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Helper function for conditional logic
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // Taking property from state on the App component and passing it down as a prop in SeasonDisplay (child component)
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request." />;
  }

  // React requires this render() method, otherwise error.
  // Avoid doing anything besides returning JSX.
  render() {
    return (
      <div>
        <div className="border-black">{this.renderContent()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
