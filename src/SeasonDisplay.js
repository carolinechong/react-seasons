import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake"
  }
};

// Helper function to determine current season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // JS ternary expression
    // "If 'lat is greater than 0' expression is true, then return summer, otherwise return winter."
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter " : "summer";
  }
};

// Functional component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    // `String template` and using Semantic IU icons
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
