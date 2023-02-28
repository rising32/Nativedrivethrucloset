export type IUser = {
  id: string;
  name: string;
};

export type ICloth = {
  _id: string;
  brand: string;
  category: string;
  description?: string;
  name?: string;
  price: number;
  url: string;
  userId: string;
  color?: string;
  size?: string;
};
export type IOutfit = {
  _id?: string;
  title: string;
  userId: string;
  totalPrice: number;
  clothes: ICloth[];
};
