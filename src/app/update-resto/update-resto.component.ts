import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{ RestoService } from'../service/resto.service';
import{ ActivatedRoute, Router } from'@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl(''),
  })
  constructor(private router :ActivatedRoute ,private resto:RestoService,private router1 : Router) { }

  ngOnInit(): void {
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.editResto=new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        email:new FormControl(result['email']),
      })

    })
  }
  collection(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
      console.log(result)
    })
    this.router1.navigate(['/list']);
  }

}
