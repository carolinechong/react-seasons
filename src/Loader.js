import React from "react";

const Loader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// If we do not provide a message prop, then show default message
Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
