import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/categories/category.service";
import {Category} from "../../../shared/models/category.model";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private categories: Category[];
  constructor(private catService: CategoryService ) { }

  ngOnInit() {
    this.getCategories(1);
  }

  getCategories(page = 1): void{
    this.catService.categoriesList(page)
        .catch(data => {
            this.categories = data;
            console.log(data);
        })
  }


}
