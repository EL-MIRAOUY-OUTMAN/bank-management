import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../../services/client.service";
import {catchError, Observable, throwError} from "rxjs";
import {client} from "../../model/client.module";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
  clients! :Observable<Array<client>> ;
  errMessage : string | undefined;
  searchFormGroup : FormGroup | undefined;
  constructor(private  clientService:ClientService,private fb : FormBuilder) {}
  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword : this.fb.control("")
    })
    this.clients=this.clientService.getClients()
      .pipe(
        catchError(err => {
          this.errMessage=err.message;
          return throwError(err);
        })
      );

  }

  searchClient() {
    let kw=this.searchFormGroup?.value.keyword;
    this.clients=this.clientService.searchClients(kw)
      .pipe(
        catchError(err => {
          this.errMessage=err.message;
          return throwError(err);
        })
      );
  }

  deleteClient(c: number) {
     this.clientService.deleteClients(c).subscribe({
       next : (res)=>{
         this.searchClient();
       },
       error : err => {
         alert("supprimer");
       }
     })
  }
}
