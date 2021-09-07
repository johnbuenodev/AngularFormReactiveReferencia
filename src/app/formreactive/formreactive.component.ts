import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.scss']
})
export class FormreactiveComponent implements OnInit {

  public formCadastro: FormGroup = this.formBuilder.group(
    {
      firstName: ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(10) ]],
      lastName: ['',  [ Validators.required, Validators.minLength(5), Validators.maxLength(20) ]],
      emailUser: ['', [Validators.required, Validators.email]]
    }
  );


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  public ngSubmitFormulario(){
    if(this.formCadastro.valid){
      console.log(this.formCadastro.value.firstName);
      console.log(this.formCadastro.value.lastName);
     
    }

  }

}
