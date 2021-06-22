import React from 'react';

function Main(){

    return(
        <main className="main">
        <section className="main__breadcrumbs breadcrumbs">
          <nav>
            <ol className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="">Home</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__separator">/</li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="">Infantil</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__separator">/</li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="">Personagens</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__separator">/</li>
              <li className="breadcrumbs__item breadcrumbs__item--active">
                <span className="breadcrumbs__link">Mario Bros</span>
              </li>
            </ol>
          </nav>
        </section>

        <section className="main__filters filters">
          <ul className="filters__list">
            <li className="filters__item">
              <span className="filters__label">Tamanho</span>
              <img className="filters__img" src="./img/filter.svg" />
            </li>
            <li className="filters__item">
              <span className="filters__label">Cor</span>
              <img className="filters__img" src="./img/filter.svg" />
            </li>
            <li className="filters__item">
              <span className="filters__label">Departamento</span>
              <img className="filters__img" src="./img/filter.svg" />
            </li>
            <li className="filters__item">
              <span className="filters__label">Categoria</span>
              <img className="filters__img" src="./img/filter.svg" />
            </li>
            <li className="filters__item">
              <span className="filters__label">Manga</span>
              <img className="filters__img" src="./img/filter.svg" />
            </li>
          </ul>
        </section>

        <section className="main__products products">
          <div className="products__row"></div>
        </section>
      </main>
    );
}

export default Main;