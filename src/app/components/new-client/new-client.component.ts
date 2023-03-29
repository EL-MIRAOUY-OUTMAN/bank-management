 import {Component, OnInit} from '@angular/core';
 import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {client} from "../../model/client.module";
 import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit{
   newClientForm! : FormGroup;
  constructor(private fb : FormBuilder,private clientService:ClientService){}
  ngOnInit(): void {
    this.newClientForm=this.fb.group({
      name :this.fb.control(null,[Validators.required,Validators.minLength(6)]),
      email : this.fb.control(null,[Validators.required,Validators.email])
    })
  }

  saveClient() {
     let client:client=this.newClientForm.value;
     this.clientService.saveClients(client)
       .subscribe({
         next : data=>{
           alert("enregistrement est succes");
         },
         error : err=>{
           alert("enregistrement echoué");
         }
       });
  }
}
