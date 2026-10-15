const Header = ({ 
  filtrarProdutos, 
  ordenarProdutos, 
  buscarProdutosPorNome, 
  carrinho = [], 
  mostrarCarrinho = false,
  onAbrirCarrinho,
  onFecharCarrinho,
  onRemover
}) => {
  const total = carrinho.reduce((acc, item) => acc + item.price, 0);

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-green-400 sticky top-0 z-40">
      <div className="flex font-bold text-3xl text-white tracking-wide px-4 py-1">  
      <box-icon type='solid' name='home' color='white' size='md'></box-icon>
      Loja
      </div>
      <div className="flex gap-2 items-center relative">

        <input
          type="text"
          onChange={(e) => buscarProdutosPorNome(e.target.value)}
          placeholder="Pesquisar..."
          className="w-80 h-10 rounded bg-white pl-4 outline-none text-black"
        />
        <button onClick={onAbrirCarrinho} className="bg-white px-4 h-10 rounded font-bold flex items-center justify-center">
        <box-icon name='cart'></box-icon> {carrinho.length}
        </button>

        {mostrarCarrinho && (
          <div className="absolute top-14 left-0 w-96 bg-white shadow-2xl rounded-lg p-4 z-50 border text-black">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Carrinho ({carrinho.length})</h2>
              <button onClick={onFecharCarrinho} className="font-bold">X</button>
            </div>
            {carrinho.length === 0 ? <p>Vazio</p> : (
              <>
                {carrinho.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b py-2">
                    <span className="text-sm truncate w-40">{item.title}</span>
                    <button onClick={() => onRemover(item.id)} className="bg-red-500 text-white px-2 py-1 rounded text-xs">Excluir</button>
                  </div>
                ))}
                <p className="text-right font-bold mt-2">Total: R$ {total.toFixed(2)}</p>
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <select onChange={(e) => filtrarProdutos(e.target.value)} className="h-10 rounded bg-white px-2 text-black">
          <option value="All">All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        <select onChange={(e) => ordenarProdutos(e.target.value)} className="h-10 rounded bg-white px-2 text-black">
          <option value="">Sem ordem</option>
          <option value="preco">Preço</option>
          <option value="nota">Nota</option>
        </select>
      </div>
    </header>
  );
};

export default Header;