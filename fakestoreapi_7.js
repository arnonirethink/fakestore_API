//Puxar o produto com maior quantidade de votos (count)
const getProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getProductWithHighestCount = async () => {
  const allProducts = await getProducts();
  let maxCount = 0;
  let productWithMaxCount;

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    if (product.rating.count > maxCount) {
      maxCount = product.rating.count;
      productWithMaxCount = product;
    }
  }

  return productWithMaxCount;
};

getProductWithHighestCount()
  .then((product) => console.log(product))
  .catch((error) => console.error(error));
