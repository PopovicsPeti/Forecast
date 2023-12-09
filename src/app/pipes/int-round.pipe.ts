import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intRound'
})
export class IntRoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value);
  }
}