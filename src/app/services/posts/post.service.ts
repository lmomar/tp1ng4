import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Post } from '../../shared/models/post.model';
import { environment } from '../../../environments/environment'


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getPosts(page): Observable<Post[]>
  {
    return this.http.get(environment.apiUrl + '/posts/' + page)
        .map(
            (response: Response) => {
              return <Post[]>  response.json()['posts'];
            }
        )
  }
}
