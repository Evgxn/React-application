import React from "react";
import "../../styles/App.css"
import Item from "./Item";

const ContentItem = (props) => {

    return (
        <div>
        {props.users.map((user) => (
            <Item  removeUser={props.removeUser} user={user} key={user.id}/>
        ))
        }
    </div>);
};

export default ContentItem;
