import { Component, OnInit } from '@angular/core';
import { Food } from '../service/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
food! : Food;

constructor(private activatedroute : ActivatedRoute, private foodservice: FoodService, private cartService: CartService, private router: Router)
{
  activatedroute.params.subscribe((params)=>{
    if(params['id'])
    this.food=foodservice.getFoodById(params['id'])
  })
}
  ngOnInit(): void {
  }

  addtoCart()
  {
    this.cartService.addtoCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
