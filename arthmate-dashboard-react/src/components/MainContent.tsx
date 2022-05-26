import React from "react";
import { Box } from "@chakra-ui/react";
import Users from "./Users";

function MainContent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/rty")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default MainContent;
