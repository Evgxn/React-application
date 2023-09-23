import React, { useState } from "react";
import style from "./contentItem.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ItemService } from "../../services/item.service";
import InputForm from "../UI/form/InputForm";

const CreateForm = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ItemService.createUser(user);

    navigate("/");
  };

  return (
    <div>
      <InputForm
        user={user}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateForm;
