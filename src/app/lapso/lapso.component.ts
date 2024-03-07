import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lapso',
  templateUrl: './lapso.component.html',
  styleUrls: ['./lapso.component.css']
})
export class LapsoComponent {
  @Input() seconds:number | undefined;
  @Input() minutes:number | undefined;
  @Input() hours:number | undefined;
  
  @Output() datos = new EventEmitter<string>();
}
