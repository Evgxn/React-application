import React from 'react';
import style from "../../contentItem/contentItem.module.css";
import {Link} from "react-router-dom";
import ButtonForm from "../button/ButtonForm";

const InputForm = (props) => {
    return (
        <form className={style.form} onSubmit={(e) => props.handleSubmit(e)}>
            <fieldset className={style.content__wrapper}>
                <legend><h3>Форма создания пользователя</h3></legend>
                <div className={style.input__wrapper}>
                    <input className={style.input} type={"text"} placeholder='name' name="name" value={props.user.name}
                           onChange={e => props.handleInput(e)}/>

                    <input className={style.input} type={"text"} placeholder='email' name="email" value={props.user.email}
                           onChange={e => props.handleInput(e)}/>
                </div>

                <div className={style.button__wrapper}>
                    <ButtonForm id={props.user.id}/>
                    <Link className={style.item} to='/'>Назад</Link>
                </div>
            </fieldset>
        </form>
    );
};

export default InputForm;