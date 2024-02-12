import { Component, OnInit } from '@angular/core';
import { QuillModule } from 'ngx-quill'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quill',
  standalone: true,
  imports: [QuillModule,FormsModule,ReactiveFormsModule],
  templateUrl: './quill.component.html',
  styleUrl: './quill.component.scss'
})
export class QuillComponent implements OnInit {
  disclosure!: string;


ngOnInit() {
 
};

onsubmit(){
  console.log(this.disclosure);
}
}
