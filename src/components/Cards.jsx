const Cards = ({ produto, onAdicionar }) => {
  if (!produto) return null;

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
      <div>
        <div className="relative">
          <img src={produto.image} alt={produto.title} className="h-56 w-full object-contain" />
          <div className="p-2 bg-green-950 text-white font-bold absolute top-3 left-3 rounded text-sm">
            {produto.rating.rate}
          </div>
        </div>
        <div className="pt-4">
          <h2 className="text-base font-bold truncate">{produto.title}</h2>
          <h6 className="text-gray-500 text-sm">{produto.category}</h6>
          <h6 className="text-right text-xl font-bold mt-2">R$ {produto.price.toFixed(2)}</h6>
        </div>
      </div>

      <button
        onClick={() => onAdicionar(produto)}
        className="mt-4 w-full h-10 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Cards;