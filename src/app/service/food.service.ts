import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number) : Food{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAll(): Food[]
  {
    return[
      {
        id:1,
        price: 2,
        name: 'Biryani',
        star: 4.1,
        imageUrl: '/assets/biryani.jpg'
      },
      {
        id:2,
        price:6,
        name: 'Burger',
        star: 4.2,
        imageUrl: '/assets/burger.jfif'
      },
      {
        id:3,
        price: 5,
        name: 'Dosa',
        star: 4.5,
        imageUrl: '/assets/dosa.jfif'
      },
      {
        id:4,
        price: 4,
        name: 'Frenchfries',
        star: 3.8,
        imageUrl: '/assets/frenchfries.webp'
      },
      {
        id:5,
        price: 5,
        name: 'Pizza',
        star: 4.2,
        imageUrl: '/assets/pizzas.jpg'
      },
      {
        id:6,
        price: 3,
        name: 'Rolls',
        star: 4.2,
        imageUrl: '/assets/roll.webp'
      }
  ]
    
  }
}
