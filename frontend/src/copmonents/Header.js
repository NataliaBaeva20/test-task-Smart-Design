import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header page__section">
      <h1 className="site-title"><Link to="/" className="site-title__link">Store App</Link></h1>

      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item"><Link to="/product-creation" className="menu__link">Создание товара</Link></li>
          <li className="menu__item"><Link to="/search" className="menu__link">Поиск</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;