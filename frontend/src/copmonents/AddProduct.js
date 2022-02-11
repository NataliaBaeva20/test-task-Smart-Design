import AddProductForm from "./AddProductForm";

function AddProduct({ onAddProduct }) {
  return(
    <section className="create-product page__section">
      <AddProductForm onAddProduct={onAddProduct} />
    </section>
  );
}

export default AddProduct;