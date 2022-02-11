import SearchForm from "./SearchForm";
import Product from "./Product";

function Search({ onSearchProduct, products, notFoundProducts }) {
  return (
    <>
      <SearchForm onSearchProduct={onSearchProduct} />
      <section className="products page__section">
        <p className={`products__not-found ${notFoundProducts ? '' : 'products__not-found_invisible'}`}>Ничего не найдено</p>
        {
          products.map(item => (
            <Product
              key={item._id}
              name={item.name}
              description={item.description}
              parameters={item.parameters}
            />
          ))
        }
      </section>
    </>
  );
}

export default Search;