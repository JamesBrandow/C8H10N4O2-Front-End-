import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone:string):string {
  const base:string = phone
  return `${base.slice(0,3)}-${base.slice(3,6)}-${base.slice(6)}`
}

}
