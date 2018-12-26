import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router'


import{AirService} from '../air.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  cityId:any;
  value:any;
  places=[];
  cities=[];
  name="";
  done=false;
  constructor(private route:ActivatedRoute,private router:Router,private airservice:AirService) { }

  ngOnInit() {
   
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =(params.get("city"));
      this.cityId=id;
      console.log(id);

     this.airservice.fetchApi('https://api.openaq.org/v1/latest?country=IN'+'&city='+this.cityId).subscribe((res:any)=>{
       this. value= res.results;
       console.log(this. value);

        for(let i=0;i<this.value.length;i++){
          this.cities[i]=this.value[i].location;
          }
   
    console.log(this.cities);
    this.done=true;
    });
    });
   }
   onclick(element){
    console.log(element);
    this.router.navigate(['/city',element]);

  }
 
  }

