import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  
  movie:Movie={Id:0,Title:'',Rating:0,ReleaseYear:0,Category:'',MainActor:''};
  constructor(@Inject(MAT_DIALOG_DATA) public data:Movie){}
  ngOnInit(): void {
    this.movie=this.data;
  }
}
