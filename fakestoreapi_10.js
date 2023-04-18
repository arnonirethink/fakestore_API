const getProducts = async () => {
  const url = "https://fakestoreapi.com/products/";
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const getProductWithSmallerPrice = async () => {
  const allProducts = await getProducts();
  let lowestPriceProduct = allProducts[0];

  for (let i = 1; i < allProducts.length; i++) {
    const product = allProducts[i];
    if (product.price < lowestPriceProduct.price) {
      lowestPriceProduct = product;
    }
  }

  return lowestPriceProduct;
};

getProductWithSmallerPrice()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
