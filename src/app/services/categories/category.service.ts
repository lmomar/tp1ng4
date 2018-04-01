import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {Category} from "../../shared/models/category.model";


@Injectable()
export class CategoryService {
  private api="http://sfblogapi.local/app_dev.php/api";
  constructor(private http: Http) { }


  categoriesList(page){
    return this.http.get(this.api + '/categories/' + page)
        ;
  }

}
