import React, { useState } from "react";
import "./styles.css";

const Child = (props) => {
  const { year } = props;

  return (
    <div>
      <h2>{year}</h2>
    </div>
  );
};

const App = () => {
  const [year, setYear] = useState("2020");

  const handleClick = () => {
    setYear("2021");
  };
  return (
    <div className="App" onClick={handleClick}>
      <h1>Gelecek Varlık</h1>
      <Child year={year} />
      <button onClick={handleClick}>Yeni Yılı Getir</button>
    </div>
  );
};

export default App;
