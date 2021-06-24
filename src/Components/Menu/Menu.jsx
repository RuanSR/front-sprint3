import "../Menu/style.css";
import { useContext } from "react";

import CategoriesContext from "../../Contexts/CategoriesContext";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  const { allCategories } = useContext(CategoriesContext);

  //TODO mudar nome de nota pra item
  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {allCategories.map((nota, index) => {
          return (
            <li key={index} className="menu__item">
              <MenuItem itemLabel={nota.label} itemLink={nota.link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
