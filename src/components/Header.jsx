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
    <header className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 px-4 lg:px-10 py-4 bg-green-400 sticky top-0 z-40">


      <div className="flex items-center gap-2 font-bold text-2xl lg:text-3xl text-white tracking-wide">
        <box-icon type='solid' name='home' color='white' size='md'></box-icon>
        Loja
      </div>

 
      <div className="flex gap-2 items-center relative w-full lg:w-auto order-3 lg:order-2 flex-1 lg:flex-none">
        <input
          type="text"
          onChange={(e) => buscarProdutosPorNome(e.target.value)}
          placeholder="Pesquisar..."
          className="w-full lg:w-80 h-10 rounded bg-white pl-4 outline-none text-black"
        />
        <button onClick={onAbrirCarrinho} className="bg-white px-3 lg:px-4 h-10 rounded font-bold flex items-center justify-center shrink-0">
          <box-icon name='cart'></box-icon> {carrinho.length}
        </button>

        {mostrarCarrinho && (
          <div className="absolute top-14 right-0 w-[92vw] lg:w-96 bg-white shadow-2xl rounded-lg p-4 z-50 border text-black">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Carrinho ({carrinho.length})</h2>
              <button onClick={onFecharCarrinho} className="font-bold">X</button>
            </div>
            {carrinho.length === 0? <p>Vazio</p> : (
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

      <div className="flex gap-2 order-2 lg:order-3 w-auto">
        <select onChange={(e) => filtrarProdutos(e.target.value)} className="h-10 rounded bg-white px-2 text-black w-1/2 lg:w-auto">
          <option value="All">All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        <select onChange={(e) => ordenarProdutos(e.target.value)} className="h-10 rounded bg-white px-2 text-black w-1/2 lg:w-auto">
          <option value="">Sem ordem</option>
          <option value="preco">Preço</option>
          <option value="nota">Nota</option>
        </select>
      </div>
    </header>
  );
};

export default Header;