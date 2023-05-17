import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailsComponent } from './details/details.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies:Movie[]=[];
  
  constructor(private movieService:MovieService,private dialogRef:MatDialog){}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((items=>{this.movies=items}));
  }

  openAddDialog(){
    this.dialogRef.open(AddMovieComponent);
    this.movieService.getMovies().subscribe((items=>{this.movies=items}));
  }

  editMovie(movie:Movie){
    this.dialogRef.open(EditMovieComponent,{data: movie});
  }

  deleteMovie(movie:Movie){
    this.movieService.deleteMovie(movie).subscribe();
    console.log(this.movies);
  }

  showDetails(movie:Movie){
    this.dialogRef.open(DetailsComponent, {data:movie});
  }
}
