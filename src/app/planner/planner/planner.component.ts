import { Component, OnInit } from '@angular/core';
import { PlannedService } from 'src/app/shared/services/planned.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})

export class PlannerComponent implements OnInit {
  plannedMeals: {
    name: string;
    imageUrl: string;
    portionSize: string;
    id: number;
    ingredients: { name: string; amount: number; unit: string }[];
  }[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit(): void {
    this.plannedMeals = this.plannedService.meals
  }

  addMeal(){
    this.plannedMeals.push({
      id: this.plannedMeals.length + 1,
      name: 'New',
      imageUrl: '../../../assets/images/placeholder.png',
      portionSize: '?',
      ingredients: []
    })
  }

  deleteMeal(id: number){
    const filtered = this.plannedMeals.filter(meal => meal.id !== id)
    this.plannedMeals = filtered
  }
}
