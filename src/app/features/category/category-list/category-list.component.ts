import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
  selector: 'app-category-list',
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {

}
