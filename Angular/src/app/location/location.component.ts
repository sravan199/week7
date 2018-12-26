import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router, ParamMap} from '@angular/router'


import{AirService} from '../air.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationID:any;
  value:any;
  constructor(private route:ActivatedRoute,private router:Router,private airservice:AirService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =(params.get("location"));
      this.locationID=id;
      console.log(id);

     this.airservice.fetchApi('https://api.openaq.org/v1/latest?country=IN'+'&location='+this.locationID).subscribe((res:any)=>{
       this. value= res.results;
       console.log(this. value);
    });
    });
   }

}
