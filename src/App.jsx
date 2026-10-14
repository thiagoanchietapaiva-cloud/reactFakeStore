import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-4 bg-slate-200 min-h-screen">
        <div className="grid grid-cols-4 gap-4">
          {produtos.map(produto => (
            <Cards
              key={produto.id}
              title={produto.title}
              image={produto.image}
              category={produto.category}
              price={produto.price}
              rate={produto.rating.rate}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
