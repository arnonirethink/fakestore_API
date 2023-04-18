//Puxar todos os produtos com avaliação maior que
const getProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getProductWithHighestRating = async () => {
  const allProducts = await getProducts();
  let maxRating = 0;
  let productWithMaxRating;

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    if (product.rating.rate > maxRating) {
      maxRating = product.rating.rate;
      productWithMaxRating = product;
    }
  }

  return productWithMaxRating;
};

getProductWithHighestRating()
  .then((product) => console.log(product))
  .catch((error) => console.error(error));
