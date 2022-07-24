import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="row justify-content-center mt-4 mb-4 pb-4">
          <div className="col-4 card shadow-sm p-3 mb-4">
            <div className="row justify-content-between">
              <div className="col">
                <h4>{call.name} is Calling</h4>
              </div>
              <div className="col">
                <div className="btn btn-primary" onClick={answerCall}>
                  Answer
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;
