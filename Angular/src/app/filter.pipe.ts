import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cities: any, name?: any): any {

    if(name=="")return cities;
    else{
     return   cities.filter(function(term){
      return term.toLowerCase().includes(name.toLowerCase())
      });
    }
  }

}
