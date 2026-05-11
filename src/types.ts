/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Category {
  CLOTHES = 'Clothes',
  SHOES = 'Shoes',
  ESSENTIALS = 'Essentials',
  ACCESSORIES = 'Accessories',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
