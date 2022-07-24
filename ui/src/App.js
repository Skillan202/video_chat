import "./App.css";
import React from "react";
import Videoplayer from "./components/Videoplayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <div className="container-fluid vh-100 vw-100">
        <div className="row justify-content-center pt-4">
          <div className="col-2">
            <h3>Chat Application</h3>
          </div>
        </div>

        <Videoplayer />

        <Options />
      </div>
    </div>
  );
}

export default App;
