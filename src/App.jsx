import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtosExibidos, setProdutosExibidos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("All");
  const [ordenacaoAtiva, setOrdenacaoAtiva] = useState("");
  const [termoBusca, setTermoBusca] = useState("");
  const [carrinho, setCarrinho] = useState([]); // AGORA EXISTE

  function buscarProdutos() {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        setProdutos(data);
        setProdutosExibidos(data);
      });
  }

  function filtrarProdutos(categoria) {
    setCategoriaAtiva(categoria);
  }
  function ordenarProdutos(tipo) {
    setOrdenacaoAtiva(tipo);
  }
  function buscarProdutosPorNome(termo) {
    setTermoBusca(termo);
  }

  useEffect(() => {
    let lista = [...produtos];
    if (categoriaAtiva !== "All" && categoriaAtiva !== "") {
      lista = lista.filter(p => p.category === categoriaAtiva);
    }
    if (termoBusca !== "") {
      lista = lista.filter(p => p.title.toLowerCase().includes(termoBusca.toLowerCase()));
    }
    if (ordenacaoAtiva === "preco") lista.sort((a, b) => a.price - b.price);
    if (ordenacaoAtiva === "nota") lista.sort((a, b) => b.rating.rate - a.rating.rate);
    setProdutosExibidos(lista);
  }, [categoriaAtiva, termoBusca, ordenacaoAtiva, produtos]);

  useEffect(() => { buscarProdutos(); }, []);

  return (
    <>
      <Header
        filtrarProdutos={filtrarProdutos}
        ordenarProdutos={ordenarProdutos}
        buscarProdutosPorNome={buscarProdutosPorNome}
        quantidadeCarrinho={carrinho.length}
      />
      <main className="p-15 bg-slate-200 min-h-screen">
        <div className="grid grid-cols-4 gap-4">
          {produtosExibidos.map(produto => (
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