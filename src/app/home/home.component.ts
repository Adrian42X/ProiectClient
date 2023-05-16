import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies:Movie[]=[];
  
  ngOnInit(): void {
    
  }

  showMovies(){

  }

  openAddDialog(){

  }

  editMovie(movie:Movie){

  }

}
