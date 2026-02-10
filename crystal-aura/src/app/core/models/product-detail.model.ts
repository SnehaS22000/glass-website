import { Timestamp } from "@angular/fire/firestore";

export interface Product {
  id: string;
  productName: string;
  description: string;
  categoryId: string;
  price: number;
  stock: number;
  rating: number;
  limitedEdition: boolean;
  availableColors: string[];
  imagesUrls: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  material:string;
  artistDetail:string;
}