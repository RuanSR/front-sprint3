import { useState } from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import MessageText from "./Components/Message";

import {MessageContext, CategoriesContext, ProductsContext} from './Contexts';

function App() {
  const [message, setMessage] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="page-container">
      <MessageContext.Provider value={{ message, setMessage }}>
        <MessageText />
        <CategoriesContext.Provider value={{ allCategories, setAllCategories }}>
          <Header />
        </CategoriesContext.Provider>
        <ProductsContext.Provider value={{products, setProducts, setMessage}}>
          <Main />
        </ProductsContext.Provider>
        <Footer />
      </MessageContext.Provider>      
    </div>
  );
}

export default App;
