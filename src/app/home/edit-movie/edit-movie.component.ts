import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit{
  editMovie:Movie={
    Title: '',
    Id: 0,
    MainActor: '',
    ReleaseYear: 0,
    Category: '',
    Rating: 0
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data:Movie,private movieService:MovieService){}
  ngOnInit(): void {
    this.editMovie=this.data;
  }

  onSubmit(){
    if(this.data!=this.editMovie)
      this.movieService.editMovie(this.editMovie);
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
  
}
