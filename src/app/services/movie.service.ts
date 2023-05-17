import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Movie[]=[{
    id:1,
    title:"Matrix",
    category:"Fantasy",
    rating:7.1,
    releaseYear:2010,
    mainActor:"Keanu Reeves"
  },
  {
    id:2,
    title:"Fatman",
    category:"Adventure",
    rating:6.7,
    releaseYear:2010,
    mainActor:"Mel Gibson"
  },
  {
    id:3,
    title:"Dune",
    category:"Science Fiction",
    rating:8.3,
    releaseYear:2021,
    mainActor:"Timothee Chalamet"
  }
];

  constructor(private httpClient:HttpClient) {}
  baseURL="https://localhost:44361/api/Movie";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  getMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.baseURL);
  }

  addMovie(newMovie:Movie):Observable<Movie>{
    return this.httpClient.post<Movie>(this.baseURL,newMovie,this.httpOptions);
  }

  deleteMovie(deleteMovie:Movie):Observable<Movie>{
    const url=`${this.baseURL}/${deleteMovie.id}`;
    return this.httpClient.delete<Movie>(url,this.httpOptions);
  }

  editMovie(movie:Movie):Observable<Movie>{
    return this.httpClient.put<Movie>(this.baseURL,movie,this.httpOptions);
  }
}
