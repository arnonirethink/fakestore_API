//Procurando todos os produtos de uma categoria

const getProductbyCategory = (category) => {
  const url = "https://fakestoreapi.com/products/category/" + category;
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

getProductbyCategory("jewelery");
