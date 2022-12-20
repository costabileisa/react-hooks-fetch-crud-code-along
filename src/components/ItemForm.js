import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  function handleSubmit(event) {
    event.preventDefault();
    const itemData = {
      name: formData.name,
      category: formData.category,
      isInCart: false,
    };

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
    .then(res => res.json())
    .then(data => onAddItem(data))
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
