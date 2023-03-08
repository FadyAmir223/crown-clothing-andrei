export enum CATEGORY_ACTIONS {
  FETCH_CATEGORY_START = 'category/FETCH_CATEGORY_START',
  FETCH_CATEGORY_SUCCESS = 'category/FETCH_CATEGORY_SUCCESS',
  FETCH_CATEGORY_FAIL = 'category/FETCH_CATEGORY_FAIL',
}

export type Category = {
  readonly title: string;
  readonly imageUrl: string;
  readonly items: CategoryItem[];
};

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};
