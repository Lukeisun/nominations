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
}
export interface GroupProps {
  groups: Group[];
}
