import { products } from '@/data/products';
import { Product } from '@/types/products';
export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, rejects) => {
    return setTimeout(() => resolve(products), 1000);
  });
};
