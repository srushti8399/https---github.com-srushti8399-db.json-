import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  productForm!:FormGroup;

  constructor(private fb:FormBuilder,private _router:Router,private _route:ActivatedRoute, private db:DbserviceService) { }

  ngOnInit(): void {
    this.productForm=this.fb.group({
      name:['']
    })
  }
  submit(){
   console.log(this.productForm.value)
   this.db.postCompany(this.productForm.value).subscribe({
    next:(res)=>{
      alert("added successfully")

    },
    error:()=>{
      alert("wrong")
    }
   })
   window.location.reload();

  }

}
