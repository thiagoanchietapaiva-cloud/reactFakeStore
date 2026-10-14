import { useState } from "react";

const Header = ({ filtrarProdutos, ordenarProdutos, buscarProdutosPorNome, quantidadeCarrinho }) => {
  const [texto, setTexto] = useState("");

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-green-400">
      <div className="flex">
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={texto}
          onChange={(e) => {
            setTexto(e.target.value);
            buscarProdutosPorNome(e.target.value);
          }}
          className="w-80 h-10 rounded-l bg-white pl-4 outline-none text-black"
        />
        <button className="h-10 px-4 rounded-r bg-green-700 text-white font-bold">
          Buscar
        </button>
        <div className="ml-6 bg-white px-4 py-2 rounded font-bold">
          Carrinho: {quantidadeCarrinho}
        </div>
      </div>

      <div className="flex gap-2">
        <select onChange={(e) => filtrarProdutos(e.target.value)} className="h-10 rounded bg-white px-4 text-black">
          <option value="All">All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>

        <select onChange={(e) => ordenarProdutos(e.target.value)} className="h-10 rounded bg-white px-4 text-black">
          <option value="">Sem ordem</option>
          <option value="preco">Menor preço</option>
          <option value="nota">Maior nota</option>
        </select>
      </div>
    </header>
  );
};

export default Header;