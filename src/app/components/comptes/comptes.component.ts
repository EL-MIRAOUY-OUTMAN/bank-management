import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompteService} from "../../services/compte.service";
import {Observable} from "rxjs";
import {detailCompte} from "../../model/compte.module";

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit{
    compteFormGroup! : FormGroup;
    curretPage :number =0;
    pageSize :number =5;
    accountObservable! : Observable<detailCompte>;
  ngOnInit(): void {
    this.compteFormGroup=this.form.group({
      idCompte: this.form.control('')
    })
  }
  constructor(private form:FormBuilder,private compteService : CompteService) {

  }

  searchCompte() {
    let idCompte : string=this.compteFormGroup.value.idCompte;
    this.accountObservable=this.compteService.findCompte(idCompte,this.curretPage,this.pageSize)
    console.log(this.accountObservable);
    console.log("samarche");
  }
}
