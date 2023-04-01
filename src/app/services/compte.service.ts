import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {envirenement} from "../envirenements/envirenement";
import {Observable} from "rxjs";
import {client} from "../model/client.module";
import {ComptesComponent} from "../components/comptes/comptes.component";

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  host : string =envirenement.url;
  constructor(private http:HttpClient) { }
  findCompte(idCompte : string,page : number , size : number):Observable<Array<ComptesComponent>>{
    return this.http.get<Array<ComptesComponent>>(this.host+"accounts/"+idCompte+"/accountOperations?page="+page+"&&size="+size)
  }
}
