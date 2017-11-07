import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A simple test', 'https://i.pinimg.com/736x/f8/09/ab/f809abbe5974d00a6487fe04e3713054--healthy-eating-healthy-foods.jpg'),
    new Recipe('Test Recipe', 'A simple test', 'https://i.pinimg.com/736x/f8/09/ab/f809abbe5974d00a6487fe04e3713054--healthy-eating-healthy-foods.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
