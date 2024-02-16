import React, { useEffect, useState } from "react";
import "./App.scss";
import { backendData } from "./data";
import { Item } from "./types";
import ItemComponent from "./Components/Item/Item";

const App = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 100, backendData);
    });
  };

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      {data && data.map((item: Item) => <ItemComponent item={item} />)}
    </div>
  );
};

export default App;
