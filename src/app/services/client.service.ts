import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {client} from "../model/client.module";
import {ClientsComponent} from "../components/clients/clients.component";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   host : string="http://localhost:8085/";
  constructor(private http: HttpClient) { }
  public getClients():Observable<Array<client>>{
    return this.http.get<Array<client>>(this.host+"customers")
  }
  public searchClients(key : string ):Observable<Array<client>>{
    return this.http.get<Array<client>>(this.host+"customers/search?keyword="+key)
  }
  public saveClients(client : client ):Observable<client>{
    return this.http.post<client>(this.host+"customers",client)
  }
  public deleteClients(c : number ){
    return this.http.delete(this.host+"customers/"+c);
  }
}
