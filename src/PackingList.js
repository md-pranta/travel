import { useState } from "react";
import { Item } from "./Item.js";

//orginal bag list
export function PackingList({ items, deleteItem, toggleItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "pack") {
    sortedItems = items.sort((a, b) => b.packed - a.packed);
  } else if (sortBy === "Quantity") {
    sortedItems = items.sort((a, b) => a.quantity - b.quantity);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            key={item.id}
            toggleItem={toggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>sorted by inputorder(default)</option>
          <option value={"description"}>sorted by alphabetic order</option>
          <option value={"pack"}>sorted by packed value</option>
          <option value={"Quantity"}>sorted by Quantity</option>
        </select>
        <button onClick={clearList}>Sclear list</button>
      </div>
    </div>
  );
}
