import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{AirService} from '../air.service';
//import{FilterPipe} from '../filter.pipe'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
 
})
export class CountryComponent implements OnInit {

  title = 'api';
  constructor(private airservice:AirService,private router:Router){}//,private filterPipe:FilterPipe){}
  value:any=false;
  cities=[];
  done=false;
  public name="";
  ngOnInit(){


    
     this.airservice.fetchApi('https://api.openaq.org/v1/latest?country=IN').subscribe((res:any)=>{
         this. value= res.results;


      for (let k=0;k<this.value.length;k++ ){
        var find=0;
        for(let ele=0 ;ele<this.cities.length;ele++)
        {
             if(this.value[k].city==this.cities[ele]){
               find=1;
               break;
             }
        }
      if(find!=1){
            this.cities.push(this.value[k].city);
      }
    }
   
    console.log(this.cities);
    this.done=true;
    });

  }


  onclick(element){
    console.log(element);
    this.router.navigate(['/states',element]);
  }




}
