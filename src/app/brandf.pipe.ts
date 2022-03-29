import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandf'
})
export class BrandfPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length ===0){
      return value
    }
    return value.filter(function(search: { brand: string; }){
      return search.brand.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
