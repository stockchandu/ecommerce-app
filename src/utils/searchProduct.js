export const searchProduct = (product, query) => {
  let products = product;
  if (products !== null && products !== undefined) {
    products = products.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return products;
};
