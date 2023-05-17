import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit{
  editMovie:Movie={
    title: '',
    id: 0,
    mainActor: '',
    releaseYear: 0,
    category: '',
    rating: 0
  }

  constructor(private movieService:MovieService){}

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.editMovie){
      this.movieService.addMovie(this.editMovie).subscribe();
      console.log("movie added"+this.editMovie);
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
