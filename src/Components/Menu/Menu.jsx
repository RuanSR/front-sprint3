import { useContext, useEffect } from "react";

import CategoriesContext from "../../Contexts/CategoriesContext";
import MenuItem from "../MenuItem/MenuItem";

import "../Menu/style.css";

const Menu = () => {
  const { allCategories, setAllCategories, setMessage } = useContext(CategoriesContext);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setAllCategories(data.all);
      })
      .catch(() => {
        setMessage('Erro ao obter dados');
        console.log("Erro");
      });
  }, []);

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {allCategories.map((item, index) => {
          return (
            <li key={index} className="menu__item">
              <MenuItem itemLabel={item.label} itemLink={item.link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
