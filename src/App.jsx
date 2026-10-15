import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtosExibidos, setProdutosExibidos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState("All");
  const [ordenacaoAtiva, setOrdenacaoAtiva] = useState("");
  const [termoBusca, setTermoBusca] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  function buscarProdutos() {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        setProdutos(data);
        setProdutosExibidos(data);
      });
  }

  const filtrarProdutos = (cat) => setCategoriaAtiva(cat);
  const ordenarProdutos = (tipo) => setOrdenacaoAtiva(tipo);
  const buscarProdutosPorNome = (termo) => setTermoBusca(termo);

  const adicionarAoCarrinho = (produto) => {
    if (carrinho.find((item) => item.id === produto.id)) return;
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  useEffect(() => {
    let lista = [...produtos];
    if (categoriaAtiva !== "All" && categoriaAtiva !== "") {
      lista = lista.filter((p) => p.category === categoriaAtiva);
    }
    if (termoBusca !== "") {
      lista = lista.filter((p) => p.title.toLowerCase().includes(termoBusca.toLowerCase()));
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
        carrinho={carrinho}
        mostrarCarrinho={mostrarCarrinho}
        onAbrirCarrinho={() => setMostrarCarrinho(!mostrarCarrinho)}
        onFecharCarrinho={() => setMostrarCarrinho(false)}
        onRemover={removerDoCarrinho}
      />
      <main className="p-8 lg:p-15 bg-slate-200 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {produtosExibidos.map((produto) => (
            <Cards key={produto.id} produto={produto} onAdicionar={adicionarAoCarrinho} />
          ))}
        </div>
      </main>
    </>
  );
};
export default App;