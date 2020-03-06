import { Article } from 'src/app/interfaces';
import { Location } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PostService } from '../shared/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,AfterViewInit {
  postnew: Article;
  constructor(private local: Location, private route: ActivatedRoute, private post: PostService) { }

  ngOnInit() {

  }
   back(){
      this.local.back()
   }
   ngAfterViewInit(){
     this.route.params.pipe(switchMap((params:Params)=>this.post.getById(params['id']))).subscribe(res=>{this.postnew=res}
     );
   }

}
