import IProducts from "../interfaces/IProducts";

const findProducts = async (term: string, skip: number = 0, limit: number = 10): Promise<IProducts> => {
  const response = await useFetch(`https://dummyjson.com/products/search?q=${term}&skip=${skip}&limit=${limit}`, {
    key: `products-${term}-${skip}-${limit}`,
  })
  return response.data.value as IProducts;
}

export default findProducts