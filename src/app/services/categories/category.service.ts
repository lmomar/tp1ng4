import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {Category} from "../../shared/models/category.model";

interface iCategory {
  id?: number;
  name: string;
  created_at: Date;
}
interface catsInterface{
  items: Array<iCategory>;
}

@Injectable()
export class CategoryService {
  private api="http://sfblogapi.local/app_dev.php/api";
  constructor(private http: Http) { }


  categoriesList(page): Observable<iCategory[]>{
    return this.http.get<catsInterface>(this.api + '/categories/' + page)
        .map(res => res.items)
        ;
  }

}
