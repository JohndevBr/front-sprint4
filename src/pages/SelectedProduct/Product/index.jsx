import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container, Content } from './styles'
import { first } from 'lodash'

import ProductsService from "../../../services/ProductService";

export default function Product(){
    const { params } = useRouteMatch();
    const [product, setProduct] = useState([])
    const [selectedValue, setSelectedValue]= useState(0)

    useEffect(() => loadProducts(), []);

    function loadProducts() {
        
        ProductsService.get()
            .then(r => {
                setProduct(first(r.products.filter(product => product.sku === Number(params.id))))
            })
    }
   
    return(
        <Container>
            <img src={`${window.location.origin}/${product.image}`} alt="Camisa"/>
            <Content>
                <h2>{product.name}</h2>
                <div className="product-size">
                    <div>
                    <p>Selecionar Tamanho: <span>{selectedValue}</span></p>
                    </div>
                    <ul onClick={(e)=>setSelectedValue(e.target.innerText.length > 2 ? "4" : e.target.innerText)}>
                        <li className={selectedValue === "4" && "selected"}>4</li>
                        <li className={selectedValue === "6"&& "selected"}>6</li>
                        <li className={selectedValue === "8"&& "selected"}>8</li>
                        <li className={selectedValue === "10" && "selected"}>10</li>
                        
                    </ul>
                </div>
                <div className="price-content">
                    <h2>R$ {product.price}</h2>
                    <div className="price-button">
                        <button> <a href="/">Adicionar à Sacola</a></button>
                        <button> <a href="/">Cancelar</a></button>
                    </div>

                </div>
            </Content>
        </Container>
    )
}