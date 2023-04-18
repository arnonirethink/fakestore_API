//Puxar todos os produtos com avaliação maior que
const getProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json);
};

const getProducts4PlusRating = async () => {
  const products = [];
  const allProducts = await getProducts();

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    if (product.rating.rate >= 4) {
      products.push(product);
    }
    console.log(products);
  }
};

getProducts4PlusRating();
