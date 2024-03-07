import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  @Input() numvisitas:number = 0; 
  @Output() datos = new EventEmitter<number>();

  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.numvisitas = params['num'];
      }
    )
  }

  volver() {
    this.numvisitas++;
    this.datos.emit(this.numvisitas);
    console.log(this.numvisitas)
    this.router.navigate(["cronometro"]);
  }

  recibirDatos(num:number) {
    this.numvisitas = num;
  }

}
