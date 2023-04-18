//Puxar todas as categorias
const getCategories = () => {
  const url = "https://fakestoreapi.com/products/categories/";
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

getCategories();
