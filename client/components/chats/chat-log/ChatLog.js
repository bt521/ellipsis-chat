import React, {useEffect, useState} from "react";
import styles from "./chatlog.module.scss";
import chatlog from "./chatlog.json";
import ChatItem from "./ChatItem";
import {io} from "socket.io-client"

let socket;
function ChatLog() {
 



  
  
  return (
    <div className={styles.Container}>
      <div className={styles.chatInfo}>
        <img src={chatlog.picture} />
        <div className={styles.friendInfo}>
          <div className={styles.chatName}>{chatlog.name}</div>
          <div className={styles.chatStatus}>Available</div>
        </div>
      </div>
      <div className={styles.chatContainer}>
        <ChatItem />
      </div>
      <div className={styles.sendContainer}>
        <div className={styles.sendSubContainer}>
          <input
            className={styles.sendInput}
            
           
            placeholder={`Message ${chatlog.name}`}
          />
          <button className={styles.sendControl}>attach</button>

          <button className={styles.sendControl}>send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatLog;
