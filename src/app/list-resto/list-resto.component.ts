import { Component, OnInit } from '@angular/core';
import{ RestoService } from'../service/resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection:any =[];
  color: string;
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result
    });
  }
  deleteResto(id){
    this.collection.splice(id-1,1);
    this.resto.deleteResto(id).subscribe((result)=>{
      console.log(result)
    });
  }
}
