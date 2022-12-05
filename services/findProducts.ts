import IProducts from "../interfaces/IProducts";

const findProducts = async (term: string): Promise<IProducts> => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${term}`);
  return await response.json()
}

export default findProducts