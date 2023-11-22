import { useState } from "react";
export default function From({ addItem }) {
  const [description, setDes] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    //If the submit box is empty
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: new Date() };
    // console.log(newItem);

    addItem(newItem);

    setDes("");
    setQuantity(1);
  }
  // if (!description) return;

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((op) => (
          <option value={op} key={op}>
            {op}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDes(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
