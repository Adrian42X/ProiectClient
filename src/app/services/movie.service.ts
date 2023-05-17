import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Movie[]=[{
    Id:1,
    Title:"Matrix",
    Category:"Fantasy",
    Rating:7.1,
    ReleaseYear:2010,
    MainActor:"Keanu Reeves"
  },
  {
    Id:2,
    Title:"Fatman",
    Category:"Adventure",
    Rating:6.7,
    ReleaseYear:2010,
    MainActor:"Mel Gibson"
  },
  {
    Id:3,
    Title:"Dune",
    Category:"Science Fiction",
    Rating:8.3,
    ReleaseYear:2021,
    MainActor:"Timothee Chalamet"
  }
];

  constructor() {}

  getMovies():Movie[]{
    return this.movies;
  }

  addMovie(newMovie:Movie){
    if(newMovie!=undefined)
    this.movies.push(newMovie);
    else 
    console.log("Invalid movie");
  }

  deleteMovie(deleteMovie:Movie){
    this.movies.forEach((item,index)=>{
      if(item==deleteMovie)
        this.movies.splice(index,1);
    });
  }

  editMovie(movie:Movie): void{
    let movieForEdit=this.movies.find(x=>x.Id==movie.Id);
    if(movieForEdit!=undefined)
      movieForEdit=movie;
    else
      console.log("Can't find movie to edit");
  }
}
