import React, { useState } from "react";

import styles from "./allchat.module.scss";
import chatlistdata from "./chatlist.json";

const {friends} = chatlistdata.profile;

function Allchats() {
  
  const [query, setQuery] = useState("");
  const onchange = ({target}) => {
    console.log(target.value);
    setQuery(target.value)
  }

  const getResults = () => {
    let results = undefined;
    if (query === ""){ 
      results = friends
    } else{
      results = friends.filter((friend)=> {
        
          return friend.name.toLowerCase().startsWith(query.toLowerCase());
        
      })
    }
   

    return results.map((friend) => {
      return (
        <>
          <li className={styles.chatListItem}>
            <img src={friend.picture} />
              <div className={styles.name}>{friend.name}</div>
              <div className={styles.msg_no}><div>10</div></div>
          </li>
        </>
      );
    })
  }




  return (
    <div className={styles.Container}>
      <div className={styles.top}>
        <div className={styles.title}>Chats</div>

        <input
          className={styles.searchInput}
          type="text"
          placeholder="search..."
          onChange={(e) => onchange(e)}
        />
        <span className={styles.chatListTitle}>All Messages</span>
      </div>

      <ul className={styles.chatList}>
        {getResults()}
      </ul>
    </div>
  );
}

export default Allchats;
