import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  user:any={}
  submit() {
    alert(JSON.stringify(this.user))  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
