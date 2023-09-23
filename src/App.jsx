import React, { useState, useEffect } from "react";
import "./styles/App.css";
import ContentItem from "./components/contentItem/ContentItem";
import { ItemService } from "./services/item.service";
import PageButton from "./components/paggination/PageButton";
import style from "./components/contentItem/contentItem.module.css";
import { Link } from "react-router-dom";
import Select from "./components/UI/select/Select";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPages] = useState(1);
  const [todoPerPage] = useState(6);
  const [selectedSort, setSelectedSort] = useState("");

  const fetchData = async () => {
    const data = await ItemService.getAll();

    setUsers(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeUser = (user) => {
    setUsers(users.filter((u) => u.id !== user.id));
  };

  const lastTodoIndex = currentPage * todoPerPage;
  const firstTodoIndex = lastTodoIndex - todoPerPage;
  const currentTodo = users.slice(firstTodoIndex, lastTodoIndex);

  const paginate = (pageNumber) => setCurrentPages(pageNumber);

  if (users.length == 0) {
    return (
      <div>
        <h1>No find users</h1>
        <div>
          <Link className={style.item} to={`/todos`}>
            Создать
          </Link>
        </div>
      </div>
    );
  }

  const sortUser = (sort) => {
    setSelectedSort(sort);
    setUsers([...users].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <Link className={style.item} to={`/users`}>
        Создать
      </Link>
      <div>
        <Select
          value={selectedSort}
          onChange={sortUser}
          defaultValue="Соритровка"
          options={[
            { value: "name", name: "По имени" },
            { value: "email", name: "По email" },
          ]}
        />
      </div>
      <ContentItem removeUser={removeUser} users={currentTodo} />
      <div className="pagDiv">
        <PageButton
          todoPerPage={todoPerPage}
          totalTodo={users.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default App;
