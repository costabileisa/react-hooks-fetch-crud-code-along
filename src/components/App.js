import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

/*
App -> isDarkMode
  Header
  Shopping List -> selected category, items
    Item Form -> name, category
    Filter
    Item
*/

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;
