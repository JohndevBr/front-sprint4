import { Container } from "./styles"

import Breadcrumbs from "./Breadcrumbs";
import Product from './Product';


export default function SelectedProduct(){
  
    return  (
      <Container>
      <Breadcrumbs />
      <Product />
      </Container>
      
    )
}