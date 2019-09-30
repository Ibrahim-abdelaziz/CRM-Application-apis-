import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { CRMClient } from 'src/app/interface/client';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit  {

  clientModel:CRMClient= {
    First_Name:"",
    Last_Name: "",
    Phone:"",
    Company: "",   
    Email: "",
    Balance: "",
    Authorization_Forms: "",
    Reseller: "",
    Client_may_have_Private:"",
} 

  constructor(private tasksSer: TasksService, private router:Router) {
  }

  form: FormGroup;
  ngOnInit() {

    this.form = new FormGroup({
      'First_NameControl': new FormControl('', [Validators.required]),
      'Last_NameControl': new FormControl('', [Validators.required]),
      'phoneControl': new FormControl('', [Validators.required,Validators.minLength(12)]),
      'companyControl': new FormControl('', [Validators.required]),
      'emailControl': new FormControl('', [Validators.required, Validators.email]),
      'BalanceControl': new FormControl('', [Validators.required]),
      'Authorization_FormsControl': new FormControl('', [Validators.required]),
      'ResellerControl': new FormControl('', [Validators.required]),
      'Client_may_have_PrivateControl': new FormControl('', [Validators.required]),
       
    });
  }
  
  checkFormsFields() {
    for (let inner in this.form.controls) {
      this.form.get(inner).markAsTouched();
    }
  }

  SubmitPost({ valid, value }) {
  
    this.checkFormsFields();
    debugger;
    if(valid){
        this.tasksSer.createClients(this.clientModel).subscribe(
            result => {

              alert("post has been Created successfully ..!!!")
              console.log(result)
              this.router.navigate(['/'])
            },
            error => {
              alert("post is not Created ..!!!")
              console.log(error)
            },
            () => {
              console.log('Done');
            })
        };
  }

}


