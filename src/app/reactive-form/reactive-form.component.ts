import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  submitted = false;
  constructor(private fb: FormBuilder) { }
  form = this.fb.group({
    name: ['', [Validators.required,Validators.pattern(/^[a-z]+$/),Validators
  .minLength(5)]],
  email:['',[Validators.required,Validators.pattern(/^[a-zA-z0-9_\.\-]+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
  phone:['',[Validators.required,Validators.pattern(/^[0-9]+$/),Validators.minLength(10)]],
  city:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
  pincode:['',[Validators.required,Validators.pattern(/^[0-9]+$/)]]
  });
  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
 afterSubmit(){
this.submitted = true;
if(this.form.invalid){
return;
}
alert(JSON.stringify(this.form.value));
  }


}
