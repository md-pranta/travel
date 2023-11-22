//for status
export function Stats({ items }) {
  const total = items.length;
  if (!total) {
    return (
      <footer className="stats">
        <em>Start adding some items to the packing list...</em>
      </footer>
    );
  }
  const pack = items.filter((item) => item.packed).length;
  const parcent = Math.round((pack / total) * 100);
  return (
    <footer className="stats">
      <em>
        {parcent === 100
          ? "you got everything! Ready to go!"
          : `👜 You have ${total} items on you list,
          and you already packed ${pack}
        (${parcent}%)`}
      </em>
    </footer>
  );
}
