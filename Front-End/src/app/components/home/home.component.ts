import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';
import { CRMClient } from 'src/app/interface/client';
import { Router } from '@angular/router';
import 'rxjs/Rx';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  

  /*clientModel:CRMClient = {    
    First_Name:"",
    Last_name: "",
    Company: "",   
    Phone:0,
    Email: "",
    Balance: 0,
    Authorization_Forms: "",
    Reseller: "",
    Client_may_have_Private:""
  }*/ 
  clientsList:CRMClient[] = [];

  constructor(private tasksSer:TasksService, private title: Title, private router:Router) {  
    //this.GetAllClients();    
  }

  ngOnInit() {
    this.GetAllClients()
  }

 response: any = {};
 
 GetAllClients() {
  this.tasksSer.getClients().subscribe(
    result => {
      console.log(result);
      
      this.response = result;
      this.clientsList = this.response.results;
    },
    error => {
      console.log(error)
    },
    () => {
      console.log('Done');
    })
}
}
