interface IProduct {
  id?: string;
  title: string;
  images?: string[];
  price: number;
  description: string;
}

interface IOrder {
  id?: string;
  title: string;
  pin: string;
  address: string;
  email: string;
  city: string;
  country: string;
  products: string[];
  ammount: string;
  paid: boolean;
  createdAt: Date;
}
