import { Component, Input } from '@angular/core';
import { ChildComponent } from "../../child/child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [ChildComponent]
})
export class ParentComponent {

  myFavoriteMovies = [ 'Encanto', 
  'Spider-Man: No Way Home', 
  "Harry Potter and the Sorcerer's Stone" ];

  selectedMovieToWatch(data:string){
    window.alert(data);
  }
}
