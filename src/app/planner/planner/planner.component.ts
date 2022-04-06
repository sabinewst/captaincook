import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})

export class PlannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meals = [
    { id: 1, name: 'Okonomiyaki', imageUrl: '../../../assets/images/okonomiyaki.jpeg', portionSize: '2p' },
    { id: 2, name: 'Ramen', imageUrl: '../../../assets/images/ramen.jpeg', portionSize: '2p' },
    { id: 3, name: 'Bibimbap', imageUrl: '../../../assets/images/bibimbap.jpeg', portionSize: '2p' }
  ]

  addRecipe(){
    this.meals.push({ id: this.meals.length + 1, name: 'New', imageUrl: '../../../assets/images/placeholder.png', portionSize: '?'})
  }

  deleteRecipe(id: number){
    const filtered = this.meals.filter(meal => meal.id !== id)
    this.meals = filtered
  }
}
