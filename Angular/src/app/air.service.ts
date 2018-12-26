import { Injectable } from '@angular/core';

import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirService {

  constructor(private http:HttpClient) { }

  fetchApi(apiurl:string){
    //apiurl?:sting ->for optional parameter
     //apiurl =(apiurl)?apiurl:myapi;
   
   return  this.http.get(apiurl) //.subscribe(function(res){
         // console.log(res);
          //return res;
        //  });
  }


}
