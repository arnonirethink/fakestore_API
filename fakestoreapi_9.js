//Puxar o produto mais caro
const getProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getProductWithHighestPrice = async () => {
  const allProducts = await getProducts();
  let maxCount = 0;
  let productWithHighestPrice;

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    if (product.price > maxCount) {
      maxCount = product.price;
      productWithHighestPrice = product;
    }
  }

  return productWithHighestPrice;
};

getProductWithHighestPrice()
  .then((product) => console.log(product))
  .catch((error) => console.error(error));
