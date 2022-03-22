import React from "react";
import Allchats from "../components/chats/all-chats/Allchats";
import ChatLog from "../components/chats/chat-log/ChatLog";
import socket from "../sockets";

function Chats() {
  return (
    <>
      <Allchats />
      <ChatLog />
    </>
  );
}

export default Chats;
