import { Component, OnInit } from '@angular/core';
import { PlannedService } from 'src/app/shared/services/planned.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})

export class PlannerComponent implements OnInit {
  meals: {
    name: string;
    imageUrl: string;
    portionSize: string;
    id: number;
    ingredients: { name: string; amount: number; unit: string }[];
  }[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit(): void {
    this.meals = this.plannedService.meals
  }

  addRecipe(){
    this.meals.push({
      id: this.meals.length + 1,
      name: 'New',
      imageUrl: '../../../assets/images/placeholder.png',
      portionSize: '?',
      ingredients: []
    })
  }

  deleteRecipe(id: number){
    const filtered = this.meals.filter(meal => meal.id !== id)
    this.meals = filtered
  }
}
