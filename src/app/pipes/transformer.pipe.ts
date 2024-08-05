import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformer'
})
export class TransformerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + 'abc';
  }

}
