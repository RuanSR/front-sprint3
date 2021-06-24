import '../Header/style.css'
import Menu from "../Menu/Menu";


const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            <img className="menu__img" src="./img/menu.svg" />
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            <img src="./img/close.svg" />
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">
            <img className="header__img" src="./img/rchlo.svg" alt="Logo" />
          </h1>
        </div>
        <div className="header__desktop">
          <h1 className="header__logo">
            <img className="header__img" src="./img/riachuelo.svg" alt="Logo" />
          </h1>
        </div>
        <div className="header__search">
          <img className="header__icon" src="./img/search.svg" />
          <input
            className="header__input"
            type="search"
            placeholder="O que você está procurando?"
          />
        </div>

        <Menu />
        
      </div>
    </header>
  );
};

export default Header;
