import React from 'react';

function AddProductForm({ onAddProduct }) {
  const [productData, setProductData] = React.useState({
    name: '',
    description: '',
    manufacturer: '',
    system: '',
    storage: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    const { name, description, manufacturer, system, storage } = productData;
    const params = {
      manufacturer,
      system,
      storage
    };

    e.preventDefault();
    onAddProduct({ name, description, params });
    setProductData({
      name: '',
      description: '',
      manufacturer: '',
      system: '',
      storage: '',
    })
  }

  return (
    <form className="form" name="createProduct" onSubmit={handleSubmit} noValidate>
      <p className="form__input-text">Название товара</p>
      <input value={productData.name} onChange={handleChange} type="text" name="name" className="form__input" required />
      <p className="form__input-text">Описание</p>
      <textarea value={productData.description} onChange={handleChange} type="text" name="description" className="form__input" rows="4" required />

      <p className="form__input-text">Производитель</p>
      <input value={productData.manufacturer} onChange={handleChange} type="text" name="manufacturer" className="form__input" required />
      <p className="form__input-text">Операционная система</p>
      <input value={productData.system} onChange={handleChange} type="text" name="system" className="form__input" required />
      <p className="form__input-text">Память</p>
      <input value={productData.storage} onChange={handleChange} type="text" name="storage" className="form__input" required />

      <button type="submit" className="form__btn">Создать</button>
    </form>
  );
}

export default AddProductForm;