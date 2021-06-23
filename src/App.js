import { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import MessageText from "./Components/Message/MessageText";

import MessageContext from "./Contexts/MessageContext";
import CategoriesContext from "./Contexts/CategoriesContext";

function App() {
  const [message, setMessage] = useState("");
  const [allCategories, setAllCategories] = useState([]);

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
    <div className="page-container">
      <MessageContext.Provider value={{ message, setMessage }}>
        <MessageText />
      </MessageContext.Provider>
      <CategoriesContext.Provider value={{ allCategories, setAllCategories }}>
        <Header />
      </CategoriesContext.Provider>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
