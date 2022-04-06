import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlannedService {
  meals = [
    {
      id: 1,
      name: 'Okonomiyaki',
      imageUrl: '../../../assets/images/okonomiyaki.jpeg',
      portionSize: '2p',
      ingredients: [
        { name: 'flour', unit: 'cup', amount: 1},
        { name: 'dashi', unit: 'cup', amount: 0.75},
        { name: 'cabbage', unit: 'head', amount: 1},
        { name: 'eggs', unit: '', amount: 4}
      ]
    },
    {
      id: 2,
      name: 'Chicken ramen',
      imageUrl: '../../../assets/images/ramen.jpeg',
      portionSize: '2p',
      ingredients: [
        { name: 'chicken breasts', unit: '', amount: 2},
        { name: 'chicken stock', unit: 'cups', amount: 4},
        { name: 'eggs', unit: '', amount: 2},
        { name: 'ramen noodles', unit: 'packs', amount: 2}
      ]
    },
    {
      id: 3,
      name: 'Bibimbap',
      imageUrl: '../../../assets/images/bibimbap.jpeg',
      portionSize: '2p',
      ingredients: [
        { name: 'steamed rice', unit: 'cups', amount: 4},
        { name: 'soy sauce', unit: 'tbsp', amount: 1},
        { name: 'shiitake', unit: 'grams', amount: 100},
        { name: 'eggs', unit: '', amount: 4}
      ]
    },
  ];
}
