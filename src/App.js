import React, {useState} from "react"

function App() {

  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Инпут");

  function increment(){
    setLikes(likes + 1);
  }
  function dicrement(){
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input 
      onChange={event => setValue(event.target.value)}
      type="text" 
      value={value} />
      <button onClick={increment}>increment</button>
      <button onClick={dicrement}>dicrement</button>
    </div>
  );
}

export default App;
