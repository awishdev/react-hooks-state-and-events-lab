import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedcategory] = useState("All");

  function handleCategorySelect(event){
    setSelectedcategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategorySelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          selectedCategory === item.category || selectedCategory === "All" ? <Item key={item.id} name={item.name} category={item.category} /> : null
          
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

