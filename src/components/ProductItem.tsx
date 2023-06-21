import React, { useRef } from "react";

interface ItemProps {
  item: {
    name: string;
    price: number;
    condition: number;
    specialPrice: number;
  };
  setTotal: (total: number) => void;
  total: number;
  totalr: { current: number };
}

const ProductItem: React.FC<ItemProps> = ({ item, setTotal, total, totalr }) => {
  const specialPriceCounter =  useRef<number>(0);

  const { condition, specialPrice } = item;
  const addItem = (price: number) => {

        /*

    But the concept is...

    We have a counter 

    Example: 1

    Once counter reaches condition of special price,
    take away the prices of items * condition (Use item A for example)

    counter = 3 

    total = 150 (for 3 units of item A)

    finalTotal = 150 (current total) - 150 ie (50 * 3)

    Add the special price to the total

    total = 0 + 130

    reset the counter

    counter = 0

    */

    specialPriceCounter.current++;
    console.log(specialPriceCounter.current);

    if (specialPriceCounter.current >= condition) {
      const finalTotal = total - condition * price;
      setTotal(finalTotal + specialPrice);

      const finalTotal2 = totalr.current - condition * price;
      totalr.current = finalTotal2 + specialPrice + item.price;

      specialPriceCounter.current = 0;
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

export default ProductItem;
