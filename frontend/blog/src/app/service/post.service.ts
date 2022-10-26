import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts')
  }

  getPostsPorNome(filtroPorNome: string) {

    let params = new HttpParams();

    if (filtroPorNome){
      params = new HttpParams().set('nome', filtroPorNome);
    }

    return this.http.get('http://localhost:3000/posts', { params: params } )
  }

  postMensagem(post: Post) {
    return this.http.post('http://localhost:3000/posts', post)
  }

}
