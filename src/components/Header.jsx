const Header = () => {
    return (
        <header className="flex items-center justify-between px-15 py-4 bg-green-400">
            <div className="flex">
                <input
                 type="text" 
                 placeholder="Pesquisar produtos..."
                className="w-80 h-10 rounded-l bg-white pl-4 outline-none" />
                <button id="btnBusca"
                    className="h-10 px-4 rounded-r bg-green-700 text-white font-bold hover:bg-green-800 transition-colors cursor-pointer">Buscar</button>
            </div>

            <div className="flex gap-2">
                <select id="Categorias" className="h-10 rounded bg-white px-4">
                    <option value="">All</option>
                    <option>men's clothing</option>
                    <option>women's clothing</option>
                    <option>jewelery</option>
                    <option>electronics</option>
                </select>
                <select id="Ordenacao" className="h-10 rounded bg-white px-4">
                    <option value="preco">Order to price</option>
                    <option value="nota">Order by rating</option>
                </select>
            </div>
            
            <div className="flex items-center gap-10 bg-white px-4 py-2 rounded">
                <span><box-icon name='cart'></box-icon></span>
                <span id="contadorCarrinho" className="font-bold">0</span>
            </div>
        </header>
    );
}

export default Header;