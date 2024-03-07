import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit{
  @Input() numvisitas:number | undefined; 
  @Output() datos = new EventEmitter<number>();
  constructor(private router:Router, private route:ActivatedRoute) {}

  seconds:number = 0; 
  minutes:number = 0; 
  hours:number = 0;
  
  lastS:number = 0; 
  lastM:number = 0; 
  lastH:number = 0; 
  
  listRecord:Tiempo[] = []
  aux:Tiempo = new Tiempo(0, 0, 0);
  bool:boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.numvisitas = params['num'];
      }
    )
    //no lo pongo porque no me da tiempo, pero con el activated route se deberian pasar los numeros entre ambas clases
  }

  async play() {
    this.bool = true;
    console.log("this.bool = " + this.bool)
    while (this.bool) {
      if (this.bool) {
        await new Promise(f => setTimeout(f, 1000));
      this.seconds++;
      if (this.seconds > 59) {
        this.minutes++;
        this.seconds = 0;
      }
      if (this.minutes > 59) {
        this.hours++
        this.minutes = 0;
      }
      }
    }
  }

  record() {
    this.aux = new Tiempo((this.hours-this.lastH), (this.minutes-this.lastM), (this.seconds-this.lastS));
    console.log("this.aux " + this.aux);
    this.listRecord.push(this.aux);
    this.lastH = this.hours; 
    this.lastM = this.minutes; 
    this.lastS = this.seconds;
    console.log("listRecord: " + this.listRecord)
  }

  async pause() {
    this.bool = false;
    console.log("this.bool = " + this.bool)
  }

  recibirdatos(num:number) {
    this.numvisitas = num;
    console.log(this.numvisitas)
  }

  volver() {
    this.datos.emit(this.numvisitas);
    console.log(this.numvisitas)
    this.router.navigate(["saludo"]);
  }
}

class Tiempo { 

  seconds:number; 
  minutes:number;
  hours:number;

  constructor(h:number, m:number, s:number) {
    this.hours = h;
    this.minutes = m; 
    this.seconds = s; 
  }

}
