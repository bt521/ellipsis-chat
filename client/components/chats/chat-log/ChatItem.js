import React from "react";
import chatlog from "./chatlog.json";
import styles from "./chatItem.module.scss";

function chatItem() {
  return (
    <>
      {chatlog.chatlog.map((message) => {
        return (
          <>
            <div
              key={message.message_id}
              className={
                styles[message.side === "left" ? "messageItem" : "messageItemR"]
              }
            >
              <div
                className={
                  styles[
                    message.side === "left" ? "messageInfo" : "messageInfoR"
                  ]
                }
              >
                <div className={styles.imageContainer}>
                  <img src={chatlog.picture} />
                </div>
                <div>{`${chatlog.name}, ${message.timestamp}`}</div>
              </div>
              <div
                className={
                  styles[
                    message.side === "left" ? "messageText" : "messageTextR"
                  ]
                }
              >
                {message.text}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default chatItem;
