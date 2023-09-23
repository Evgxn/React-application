import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ItemService } from "../../services/item.service";
import style from "./contentItem.module.css";
import InputForm from "../UI/form/InputForm";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  let navigate = useNavigate();

  const fetchData = async () => {
    const data = await ItemService.getById(id);

    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    if (!id) return;

    fetchData();
  }, [id]);

  if (!user.id)
    return (
      <div>
        <div>
          <h1>User not found</h1>
        </div>

        <Link className={style.item} to="/">
          Back
        </Link>
      </div>
    );

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ItemService.updateUser(user);

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

export default UserDetails;
