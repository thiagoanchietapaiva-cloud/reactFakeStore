const Cards = ({ title, image, category, price, rate }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="relative">
        <img src={image} className="h-56 w-full object-contain" />
        <div className="p-2 bg-green-950 text-white font-bold absolute top-3 left-3 rounded">
          {rate}
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-xl font-bold truncate">{title}</h2>
        <h6 className="text-gray-600">{category}</h6>
        <h6 className="text-right text-2xl font-bold">R$ {price.toFixed(2)}</h6>
      </div>
    </div>
  );
};
export default Cards;