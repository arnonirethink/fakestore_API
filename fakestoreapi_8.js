//Puxar a média de preços de todos os produtos
const getProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getAveragePrice = async () => {
  const allProducts = await getProducts();
  let totalPrice = 0;

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    totalPrice += product.price;
  }

  return totalPrice / allProducts.length;
};

getAveragePrice()
  .then((averagePrice) => console.log(averagePrice))
  .catch((error) => console.error(error));
