function Product({ name, description, parameters }) {
  return(
    <article className="card">
      <h3 className="card__title">{name}</h3>
      <p className="card__text"><span className="card__span-accent">Описание: </span>{description}</p>
      <p className="card__text"><span className="card__span-accent">Производитель: </span>{parameters.manufacturer}</p>      
      <p className="card__text"><span className="card__span-accent">ОС: </span>{parameters.system}</p>      
      <p className="card__text"><span className="card__span-accent">Память: </span>{parameters.storage}</p>      
    </article>
  );
}

export default Product;