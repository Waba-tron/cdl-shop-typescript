import React, { useState, useRef } from "react";
import "./App.css";
import Item from "./components/Item";

interface Item {
  id: number;
  name: string;
  price: number;
  specilPrice: number;
  condition: number;
}

const items: Item[] = [
  { id: 0, name: "Item A", price: 0.5, specilPrice: 1.3, condition: 3 },
  { id: 1, name: "Item B", price: 0.3, specilPrice: 0.45, condition: 2 },
  { id: 2, name: "Item C", price: 0.2, specilPrice: 0.3, condition: 2 },
  { id: 3, name: "Item D", price: 0.15, specilPrice: 0.2, condition: 2 },
];

function App() {
  const [total, setTotal] = useState<number>(0);
  const totalr = useRef<number>(0);

  return (
    <div className="App">
      <h1>CDL Shop</h1>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          setTotal={setTotal}
          total={total}
          totalr={totalr}     />
      ))}
      £ {totalr.current}
    </div>
  );
}

export default App;
