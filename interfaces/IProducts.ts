import IProduct from "./IProduct";

export default interface IProducts {
  products: Array<IProduct>
  total: number
  skip: number
  limit: number
}