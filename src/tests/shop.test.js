import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Item from "../components/Item";

describe("Item component", () => {
  test("should add item to total price", () => {
    const setTotalMock = jest.fn();
    const totalrMock = { current: 0 };

    const itemA = render(
      <Item
        item={{ id: 0, name: "Item A", price: 0.5, specilPrice: 1.3, condition: 3 }}
        onClick={jest.fn()}
        setTotal={setTotalMock}
        total={0}
        totalr={totalrMock}
      />
    );

    const itemAButton = itemA.getByText("Add item (0.5)");
    fireEvent.click(itemAButton);

    expect(totalrMock.current).toBe(0.5);
  });

  test("should add special price item to total price", () => {
    const setTotalMock = jest.fn();
    const totalrMock = { current: 0 };

    const itemA = render(
      <Item
        item={{ id: 0, name: "Item A", price: 0.5, specilPrice: 1.3, condition: 3 }}
        onClick={jest.fn()}
        setTotal={setTotalMock}
        total={0}
        totalr={totalrMock}
      />
    );

    const itemAButton = itemA.getByText("Add item (0.5)");
    fireEvent.click(itemAButton);
    fireEvent.click(itemAButton);
    fireEvent.click(itemAButton);

    expect(totalrMock.current).toBe(1.3);
  });

  test("accept items in any order", () => {
    const setTotalMock = jest.fn();
    const totalrMock = { current: 0 };

    const itemA = render(
      <Item
        item={{ id: 0, name: "Item A", price: 0.5, specilPrice: 1.3, condition: 3 }}
        onClick={jest.fn()}
        setTotal={setTotalMock}
        total={0}
        totalr={totalrMock}
      />
    );

    const itemB= render(
      <Item
        item={{ id: 1, name: "Item B", price: 0.3, specilPrice: 0.45, condition: 2 }}
        onClick={jest.fn()}
        setTotal={setTotalMock}
        total={0}
        totalr={totalrMock}
      />
    );

    const itemAButton = itemA.getByText("Add item (0.5)");
    const itemBButton = itemB.getByText("Add item (0.3)");

    fireEvent.click(itemBButton);
    fireEvent.click(itemBButton);
    fireEvent.click(itemAButton);

    expect(totalrMock.current).toBe(0.95);
  });
});
