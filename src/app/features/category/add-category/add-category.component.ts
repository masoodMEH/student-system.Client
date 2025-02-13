import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AddCategoryRequest } from '../models/add-category-request.models';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription

  constructor(private categoryService: CategoryService) {
    this.model = {
      name: "",
      urlHandle: ""
    }
  }

  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }

  onFormSubmit() {
    this.categoryService.addCategory(this.model)
      .subscribe(
        {
          next: (response) => {
            console.log("this is was successfully added");
          }
        }
      )
  }
}
