import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies:Movie[]=[];
  
  constructor(private movieService:MovieService,private dialogRef:MatDialog){}

  ngOnInit(): void {
    this.movies=this.movieService.getMovies();
  }

  openAddDialog(){

  }

  editMovie(movie:Movie){
    this.dialogRef.open(EditMovieComponent,{data: movie});
  }

  deleteMovie(movie:Movie){
    this.movieService.deleteMovie(movie);
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }

  showDetails(movie:Movie){
    this.dialogRef.open(DetailsComponent, {data:movie});
  }
}
