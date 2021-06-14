import { useContext, useEffect, useState } from "react";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProdutosService from "../../services/ProdutosService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";

function Produto({ imagem, descricao, valor }) {
    return (
        <li className="products__card card">
            <div className="card">
                <img className="card__img" src={imagem} alt="" />
                <p className="card__description">
                    {descricao}
                </p>
                <p className="card__price">
                    R$ {valor}
                </p>
            </div>
        </li>
    );
}

function ProdutosPage() {
    const [produtos, setProdutos] = useState([]);
    const { filter } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    // eslint-disable-next-line
    useEffect(() => carregarProdutos(), []);

    function carregarProdutos() {
        addRequest();
        ProdutosService.listar()
            .then(produtos => setProdutos(produtos))
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    return (
        <main className="main">
            <Breadcrumbs></Breadcrumbs>
            <Filters></Filters>
            <section className="main__products products">
                <div className="products__row">
                    <ol className="products__list">
                        {produtos
                            .filter(p =>
                                filter ? p.descricao.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                            .map(
                                p =>
                                    <Produto key={p.id} imagem={p.imagem} descricao={p.descricao} valor={p.valor} />
                            )
                        }
                    </ol>
                </div>
                <div className="products__row">
                    <ol className="products__list">
                    </ol>
                </div>
            </section>
        </main>
    );
}

export default ProdutosPage;