import "../Breadcrumbs/style.css";

const Breadcrumbs = () => {
  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="">
              Home
            </a>
          </li>
          <li className="breadcrumbs__item breadcrumbs__separator">/</li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="">
              Infantil
            </a>
          </li>
          <li className="breadcrumbs__item breadcrumbs__separator">/</li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="">
              Personagens
            </a>
          </li>
          <li className="breadcrumbs__item breadcrumbs__separator">/</li>
          <li className="breadcrumbs__item breadcrumbs__item--active">
            <span className="breadcrumbs__link">Mario Bros</span>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
