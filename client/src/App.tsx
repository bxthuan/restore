import { useState } from "react";

function App() {

  const [products, setProducts] = useState([
    {name: "product 1", price: 100},
    {name: "product 2", price: 200}
  ]);

  function addProduct() {
    setProducts(prevState => [
      ...prevState, 
      {name: "product " + (prevState.length + 1), price: (prevState.length * 100) + 100}
    ]);
  }

  return (
    <div className='app'>
      <h2>ReStore</h2>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  )
}

export default App
