import React from "react";
import { useContext } from "react";
import { Socket } from "socket.io-client";
import { SocketContext } from "../SocketContext";
function Videoplayer() {
  const { name, userVideo, myVideo, callAccepted, callEnded, stream, call } =
    useContext(SocketContext);
  return (

      <div className="row justify-content-center mt-5 mb-5">
        <div
          className="col-5 me-5 card text-start p-3 shadow-sm"
          style={{ width: "300px", height: "300px"}}
        >
          {stream && (
            <>
              <h3>{name}</h3>
              <video
                ref={myVideo}
                style={{ width: "250px", height: "250px" }}
                playsInline
                muted
                autoPlay
              ></video>
            </>
          )}
        </div>
        <div
          className="col-5 me-5 card text-start p-3 shadow-sm"
          style={{ width: "300px", height: "300px" }}
        >
          {callAccepted && !callEnded && (
            <>
              <h3>{call.name}</h3>
              <video
                ref={userVideo}
                playsInline
                muted
                autoPlay
                style={{ width: "250px", height: "250px" }}
              ></video>
            </>
          )}
        </div>
      </div>
    
  );
}

export default Videoplayer;
