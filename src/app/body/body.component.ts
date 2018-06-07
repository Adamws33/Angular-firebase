import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  submitInfo = "This will update once submitted"
  infoUp = "Hello"
  public _infoform: FormGroup;
  

  constructor(public _form: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  createForm(){
    this._infoform = this._form.group({
      Info: new FormControl
    })
  }

  updateInfo(){
    console.log(this._infoform.value.Info)
    this.infoUp = this._infoform.value.Info
  }

  Submit(){
    this.submitInfo = this._infoform.value.Info
  }

}
