import Header from "./components/Header";
import Article from "./components/Article";

import { useState } from "react";

function App() {
  let [carrinho, setCarrinho] = useState(0);

  const AddItem = () => {
    setCarrinho(carrinho + 1);
    console.log(carrinho);
  };

  const RemoveItem = () => {
    if (carrinho > 0) {
      setCarrinho(carrinho - 1);
    }
    console.log(carrinho);
  };

  return (
    <>
      <Header> </Header>
      <Article></Article>

      <h1>Carrinho de compras: {carrinho}</h1>
      <div className="flex">
        <button className="add-button ml-2" onClick={AddItem}>
          +
        </button>
        <button className="remove-button ml-2" onClick={RemoveItem}>
          -
        </button>
      </div>
    </>
  );
}

export default App;
