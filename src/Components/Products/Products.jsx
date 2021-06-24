import { useContext } from "react";

import ProductsContext from "../../Contexts/ProductsContext";

import "../Products/style.css";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="main__products products">
      <div className="products__row">
        <ol className="products__list">
          {products.map((product) => {
            return (
              <li className="products__card">
                <div className="card">
                  <img
                    className="card__img"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="card__description">{product.name}</p>
                  <p className="card__price">R$ ${product.price}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Products;
