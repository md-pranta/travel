import { useState } from "react";
import Logo from "./logo.js";
import Form from "./form.js";
import { PackingList } from "./PackingList.js";
import { Stats } from "./Stats.js";

//the main component
export default function App() {
  //use state to add items in ui
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    let f = "";
    if (items.length) {
      f = window.confirm("Are you sure you want to delete all items?");
    }
    if (f) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
