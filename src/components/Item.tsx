import React, { useRef } from "react";

interface ItemProps {
  item: {
    name: string;
    price: number;
    condition: number;
    specilPrice: number;
  };
  setTotal: (total: number) => void;
  total: number;
  totalr: { current: number };
}

const Item: React.FC<ItemProps> = ({ item, setTotal, total, totalr }) => {
  const specilPriceCounter = useRef(0);

  const addItem = (price: number) => {
    specilPriceCounter.current++;
    console.log(specilPriceCounter.current);

    if (specilPriceCounter.current >= item.condition) {
      let finalTotal = total - item.condition * price;
      setTotal(finalTotal + item.specilPrice);

      let finalTotal2 = totalr.current - item.condition * price;
      totalr.current = finalTotal2 + item.specilPrice + item.price;

      specilPriceCounter.current = 0;
    } else {
      setTotal(total + price);
      totalr.current = totalr.current + price;
    }

    console.log(totalr);
  };

  return (
    <div>
      {item.name}
      <button onClick={() => addItem(item.price)}>
        Add item ({item.price})
      </button>
    </div>
  );
};

export default Item;
