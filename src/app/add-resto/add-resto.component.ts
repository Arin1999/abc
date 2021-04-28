import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ RestoService } from'../service/resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  addResto=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(5)]),
    address:new FormControl('',[Validators.required, Validators.maxLength(50)]),
    email:new FormControl('',[Validators.required, Validators.email]),
  })
  get name(){return this.addResto.get('name')}
  get address(){return this.addResto.get('address')}
  get email(){return this.addResto.get('email')}
  constructor(private resto :RestoService,private router: Router) { }

  ngOnInit(): void {
  }
  
  collectResto(){
    //console.log(this.addResto.value);
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      console.log("result is  here",result)
      this.router.navigate(['/list']);
    });
  }
 
}
