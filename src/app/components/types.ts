export type Group = {
  id: number;
  attributes: GroupAttributes;
};
export type GroupAttributes = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  color: string;
  categories?: { data: Category[] };
};
export type Category = {
  id: number;
  attributes: CategoryAttributes;
};
export type CategoryAttributes = {
  title: string;
  description?: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
export interface CategoryProps {
  category: Category;
  color: string;
  setCategory: React.Dispatch<React.SetStateAction<CategoryState | null>>;
  setCategoryIds: React.Dispatch<React.SetStateAction<number[]>>;
}
export interface CategoryState {
  category: Category;
  color: string;
}
export interface WrapperProps {
  groups: Group[];
  categoryIds: number[];
}
export interface GroupProps {
  groups: Group[];
  selectedCategory: CategoryState | null;
  setCategory: React.Dispatch<React.SetStateAction<CategoryState | null>>;
  categoryIds: number[];
}
