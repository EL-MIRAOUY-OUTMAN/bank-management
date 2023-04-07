import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {envirenement} from "../envirenements/envirenement";
import {Observable} from "rxjs";
import {client} from "../model/client.module";
import {ComptesComponent} from "../components/comptes/comptes.component";
import {detailCompte} from "../model/compte.module";

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  host : string =envirenement.url;
  constructor(private http:HttpClient) { }
  findCompte(idCompte : string,page : number , size : number):Observable<detailCompte>{
    return this.http.
    get<detailCompte>("http://localhost:8085/accounts/10388eb6-75dc-41c4-843d-5d03ada9f5a2/pageOperations?page=0&&size=5");

  }
}
