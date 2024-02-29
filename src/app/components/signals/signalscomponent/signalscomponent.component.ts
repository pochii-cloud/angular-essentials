import { Component, OnInit, computed, WritableSignal, signal, effect} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMovie } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-signalscomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signalscomponent.component.html',
  styleUrl: './signalscomponent.component.scss'
})
export class SignalscomponentComponent implements OnInit  {
  x = signal(5);
  y = signal(10);
  z = computed(() => this.x() + this.y());
  filteredTodos = signal([]);
  todos = signal([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Do laundry', completed: true },
    { id: 3, title: 'Walk the dog', completed: false }
  ]);

  ngOnInit(): void {
  //   this.filteredTodos.set(this.todos().filter(todo => !todo.completed))
  // }
}
