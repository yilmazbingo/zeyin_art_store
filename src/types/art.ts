export interface ArtProduct {
  id: number;
  type: string;
  title: string;
  artist: string;
  coverImage: string;
  sideImages: string[];
  video: string;
  etsy: string;
  price: number;
  // "author": "Yuval Noah",
  description: string;
  slug: string;
  wsl: string[];
  index?: number;
}

// interface A {
//   id: string;
//   type: string;
//   title: string;
//   coverImage: string;
//   sideImages: string[];
//   video: string;
//   price: number;
//   author: string;
//   description: string;
//   slug: string;
//   etsy: string;
//   wsl: string[];
// }
// [];
