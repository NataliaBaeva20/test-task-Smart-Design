import React from 'react';

function SearchForm({ onSearchProduct }) {
  const [searchData, setSearchData] = React.useState({
    name: '',
    manufacturer: '',
    system: '',
    storage: ''
  });

  function formatRequest() {
    let array = [];

    for (let item in searchData) {
      if (searchData[item] && item === "name") {
        array.push(`${item}=${searchData[item]}`);
      }
      if (searchData[item] && item !== "name") {
        array.push(`parameters.${item}=${searchData[item]}`);
      }
    }

    return `?${array.join('&')}`;
  }

  function handleChange(e) {
    const { name } = e.target;
    setSearchData({
      ...searchData,
      [name]: e.target.value
    });
  }

  function handleSubmit(e) {
    const req = formatRequest();

    e.preventDefault();
    onSearchProduct(req);
  }

  return (
    <section className="search page__section">
      <form className="search__form" name="search" noValidate onSubmit={handleSubmit}>
        <div className="search__wrapper">
          <input value={searchData.name} onChange={handleChange} type="text" name="name" className="search__input" placeholder="Товар" required />
          <input value={searchData.manufacturer} onChange={handleChange} type="text" name="manufacturer" className="search__input search__input_type_params" placeholder="Производитель" />
          <input value={searchData.system} onChange={handleChange} type="text" name="system" className="search__input search__input_type_params" placeholder="Операционная система" />
          <input value={searchData.storage} onChange={handleChange} type="text" name="storage" className="search__input search__input_type_params" placeholder="Память" />
        </div>

        <button className="search__button">Поиск</button>
      </form>
    </section>
  );
}

export default SearchForm;