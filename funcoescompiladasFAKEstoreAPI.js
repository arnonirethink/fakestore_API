const getProducts = () => {
  const url = "https://fakestoreapi.com/products/";
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};



const getProductById = async (
  id,
  url = "https://fakestoreapi.com/products/"
) => {
  try {
    const localUrl = url + id;
    const request = await fetch(localUrl);
    const requestJson = await request.json();

    return requestJson;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getCategories = () => {
  const url = "https://fakestoreapi.com/products/categories/";
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};



const getProductbyCategory = (category) => {
  const url = "https://fakestoreapi.com/products/category/" + category;
  const result = fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

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
