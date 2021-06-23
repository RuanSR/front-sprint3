import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";

const Main = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <Filters />
      <Products />
    </main>
  );
};

export default Main;
