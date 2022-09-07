import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from './dbservice.service';
export class Iuser{
  name1:string='';
  id:string='';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'capstoneproject';
  // name:string='';
  // name1:string='';
  comarr:Iuser[]=[];
  constructor(private _router:Router,private _route:ActivatedRoute, private db:DbserviceService){}
  
  ngOnInit(): void {
    this.getCompany1();
  }
  goadd(){
    this._router.navigate(['/add']); 
  }
  getCompany1(){
    this.db.getCompany().subscribe({
      next:(res)=>{
        this.comarr=res;
       // this.name1=res[res.length-1].name;
        console.log(res);
      },
      error:()=>{
        alert('Error in app')
      }
    })

  }
}
