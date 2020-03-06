import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/interfaces';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor(private postservice:PostService, public auth:AuthService) { }
  form:FormGroup;

  ngOnInit() {
    this.form=new FormGroup({
      newurl:new FormControl(''),
      title:new FormControl('',Validators.required),
      text:new FormControl('',Validators.required),
      author:new FormControl('',Validators.required)
    })
  }
    clearForm(){
      this.form.reset();
    }
    onSubmit(){
      if(this.form.invalid){
        return
      }
      const post:Article={
        url:this.form.value.newurl,
        title:this.form.value.title,
        text:this.form.value.text,
        author:this.form.value.author,
        date:new Date()
      }
      this.postservice.create(post).subscribe(()=>{
        this.form.reset();
      })
    }
}
