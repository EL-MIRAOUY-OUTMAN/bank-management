import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit{
    compteFormGroup! : FormGroup;
  ngOnInit(): void {
    this.compteFormGroup=this.form.group({
      idCompte: this.form.control('')
    })
  }
  constructor(private form:FormBuilder) {
  }

  searchCompte() {

  }
}
