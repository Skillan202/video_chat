import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";
import Notifications from "./Notifications";
function Options() {
  const {
    name,
    userVideo,
    myVideo,
    callAccepted,
    callEnded,
    stream,
    call,
    me,
    setName,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6 card shadow-sm p-3 px-4">
          <div className="row justify-content-around ">
            <div className="col-4 text-start">
              <h4 className="pb-3">Account info</h4>
              <input
                type="text"
                className="mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
              <CopyToClipboard className="mb-3 btn btn-primary w-100" text={me}>
                <h5>Copy id</h5>
              </CopyToClipboard>
            </div>
            <div className="col-4 text-start">
              <h4 className="pb-3">Make a Call</h4>
              <input
                type="text"
                className="mb-3"
                value={idToCall}
                placeholder="Make a call"
                onChange={(e) => setIdToCall(e.target.value)}
              />

              {callAccepted && !callEnded ? (
                <div className="btn btn-danger w-100" onClick={leaveCall}>
                  Hang up
                </div>
              ) : (
                <div
                  className="btn btn-primary w-100"
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Notifications />
    </>
  );
}

export default Options;
