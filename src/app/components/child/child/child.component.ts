import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  //array to receive data from parents FavoriteMovies
  @Input() movieList:string[] = [];

  //after looping movie list in the child this emits an event that has the clicked movie
  @Output() 
  movieEventEmitter = new EventEmitter();
  selectedMovie(movie:string){
     this.movieEventEmitter.emit(movie);
  }
}
