export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Lesser Health Potion',
    price: 100,
    description: 'A potion that recovers 50 HP.',
    image_src: "assets/lesser_health_potion.png",
  },
  {
    id: 2,
    name: 'Medium Health Potion',
    price: 300,
    description: 'A potion that recovers 200 HP.',
    image_src: "assets/medium_health_potion.png",
  },
  {
    id: 3,
    name: 'Large Health Potion',
    price: 900,
    description: 'A potion that recovers 800 HP.',
    image_src: "assets/large_health_potion.png",
  },
  {
    id: 4,
    name: 'Black Enhancing Stone',
    price: 1500,
    description: '',
  },
  {
    id: 5,
    name: 'White Enhancing Stone',
    price: 1500,
    description: '',
  },
  {
    id: 6,
    name: 'Clear Enhancing Stone',
    price: 2000,
    description: 'A misterious enhancing stone.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
