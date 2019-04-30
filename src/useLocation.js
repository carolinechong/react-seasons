// HOOKS

import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      // Callback function #1
      position => setLat(position.coords.latitude),
      // Callback funciton #2
      err => setErrorMessage(err.message)
    );
    // Pass an empty array as 2nd argument - to call useEffect only ONE time (like componentDidMount)
  }, []);

  return [lat, errorMessage];
};
