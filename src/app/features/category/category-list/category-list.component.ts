import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from "../../../ui/button/button.component";
import { category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {

  categories?: category[];
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
      .subscribe({
        next: (response) => {
          this.categories = response;
        }
      });
  }

}
