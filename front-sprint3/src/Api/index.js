
const GetCategories = () => {
  fetch("/data/categories.json")
    .then((response) => response.json())
    .catch(() => {
      console.log("Erro");
    });
};

export default GetCategories;