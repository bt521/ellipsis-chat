import React from "react";
import * as HiIcons from "react-icons/hi";

function ChatPanel() {
  return (
    <div className="col-start-1 col-end-4 text-white bg-secondary_dark">
      <SearchTitle />
      <ChatList />
    </div>
  );
}

//search feature

function SearchTitle() {
  return (
    <div className=" h-1/5">
      <h1 className="p-4 text-4xl font-bold ">Chats (44)</h1>
      <div className="px-4 text">
        <input
          className="w-full p-3 my-2 text-xl text-white bg-primary_dark rounded-2xl"
          type="text"
          placeholder="Search Here"
        ></input>
      </div>
    </div>
  );
}

//list of contacts
function ChatList() {
  return (
    <div className="">
      <ul className="">
        <span className="">MESSAGES</span>
      </ul>
    </div>
  );
}

//chat list item component
function ChatListItem() {
  return <></>;
}
export default ChatPanel;
