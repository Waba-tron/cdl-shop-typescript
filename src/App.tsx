import React, { useState, useRef } from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";

interface Item {
  id: number;
  name: string;
  price: number;
  specialPrice: number;
  condition: number;
}

const items: Item[] = [
  { id: 0, name: "Item A", price: 0.5, specialPrice: 1.3, condition: 3 },
  { id: 1, name: "Item B", price: 0.3, specialPrice: 0.45, condition: 2 },
  { id: 2, name: "Item C", price: 0.2, specialPrice: 0.3, condition: 2 },
  { id: 3, name: "Item D", price: 0.15, specialPrice: 0.2, condition: 2 },
];

function App() {
  const [total, setTotal] = useState<number>(0);
  const totalr = useRef<number>(0);

  function divideToTwoDecimalPlaces(number: number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }

  return (
    <div className="App">
      <h1>CDL Shop</h1>
      {items.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          setTotal={setTotal}
          total={total}
          totalr={totalr}     />
      ))}
      £ {divideToTwoDecimalPlaces(totalr.current)}
    </div>
  );
}

export default App;
