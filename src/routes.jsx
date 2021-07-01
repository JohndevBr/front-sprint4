
import { BrowserRouter, Switch , Route } from 'react-router-dom'

import Products from './pages/ProductsPage'
import Product from './pages/SelectedProduct'
import NotFound from './pages/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/produto/:id" component={Product} />
                <Route component={NotFound} />

            </Switch>
        </BrowserRouter>
    )
}