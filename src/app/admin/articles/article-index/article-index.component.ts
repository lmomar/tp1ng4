import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../services/posts/post.service";
import {Post} from "../../../shared/models/post.model";

@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.scss'],
    providers:[PostService]
})
export class ArticleIndexComponent implements OnInit {

  private posts: Post[];
  constructor(private servPost: PostService) { }

  ngOnInit() {
    this.getPosts(1)
  }

  getPosts(page){
    this.servPost.getPosts(page)
        .subscribe(
            (data) => {
                this.posts = data;
            }
        )
  }
}
