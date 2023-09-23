import React from "react";
import { Link } from "react-router-dom";
import style from "./contentItem.module.css";
import { ItemService } from "../../services/item.service";

const Item = (props) => {
  return (
    <div className="content">
      <div>
        <div>Name: {props.user.name}</div>
        <div>email: {props.user.email}</div>
      </div>
      <div>
        <Link className={style.item} to={`/users/${props.user.id}`}>
          подробнее
        </Link>
        <button
          onClick={() => {
            props.removeUser(props.user);
            Item.delete(props.user.id);
          }}
          className={style.item}
        >
          удалить
        </button>
      </div>
    </div>
  );
};

export default Item;
