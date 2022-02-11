import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createProduct, findProduct } from '../utils/api'

import Header from './Header';
import Home from './Home';
import Search from './Search';
import AddProduct from './AddProduct';

function App() {
  const [products, setProducts] = React.useState([]);
  const [notFoundProducts, setNotFoundProducts] = React.useState(false);

  function handleSearchProduct(req) {
    findProduct(req)
      .then(data => {
        setProducts(data);
        if (data.length !== 0) {
          setNotFoundProducts(false);
        } else {
          setNotFoundProducts(true);
        }
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleAddProductSubmit({ name, description, params }) {
    createProduct({ name, description, params })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product-creation">
          <AddProduct onAddProduct={handleAddProductSubmit} />
        </Route>
        <Route path="/search">
          <Search onSearchProduct={handleSearchProduct} products={products} notFoundProducts={notFoundProducts}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
