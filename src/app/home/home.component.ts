import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { Food } from '../service/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  food:Food[]=[];
  constructor(private fs:FoodService, private route: ActivatedRoute)
  {

  }
  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.food= this.fs.getAll().filter(foods => foods.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.food= this.fs.getAll();
    })
    
  }


  
 
}