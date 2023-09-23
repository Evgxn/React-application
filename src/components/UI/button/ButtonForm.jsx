import React from 'react';
import style from "../../contentItem/contentItem.module.css";

const ButtonForm = ({id}) => {
    if(id){
        return <button className={style.item}>изменить</button>
    }
    else{
        return (
            <button className={style.item}>Созать</button>
        )
    }
};

export default ButtonForm;