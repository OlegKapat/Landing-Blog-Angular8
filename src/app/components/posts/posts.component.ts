import { AlertService } from './../shared/alert.service';
import { Article } from 'src/app/interfaces';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   article:Article[]=[];
  constructor(private post:PostService, private alert:AlertService) { }

  ngOnInit() {
    this.post.getArticle().subscribe((post)=>{
        this.article=post,
        this.alert.success('Загрузка')

    })
  }

}
