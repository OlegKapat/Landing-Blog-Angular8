
import { environment } from './../../../environments/environment';
import { Article, CreateResponse } from './../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  create(post:Article):Observable<Article>{
    return this.http.post(`${environment.bdUrl}/articles.json`,post).pipe(map((response:CreateResponse)=>{
      return {
        ...post,
        id:response.name,
        date:new Date(post.date)
      }
    }))
  }
  getArticle():Observable<Article[]>{
   return this.http.get<Article[]>(`${environment.bdUrl}/articles.json`).pipe(map((response:{[key:string]:any})=>{
    return Object.keys(response).map(key=>({
      ...response[key],
      id:key,
      date:new Date(response[key].date)
    }))

   }))
  }
  deleteArticle(id):Observable<Article>{
     return this.http.delete<Article>(`${environment.bdUrl}/articles/${id}.json`)
  }
  getById(id:string):Observable<Article>{
     return this.http.get<Article>(`${environment.bdUrl}/articles/${id}.json`).pipe(map((article:Article)=>{
      return {
        ...article,
        id,
        date:new Date(article.date)
      }
    }))
  }
}
