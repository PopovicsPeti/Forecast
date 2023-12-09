import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string, twelveHourFormat: boolean = false): string {
    const [hours, minutes] = value.split(':').slice(0, 2);

    if (twelveHourFormat) {
      let period = 'AM';
      let formattedHours = parseInt(hours, 10);

      if (formattedHours >= 12) {
        period = 'PM';
        formattedHours = formattedHours === 12 ? 12 : formattedHours - 12;
      } else if (formattedHours === 0) {
        formattedHours = 12;
      }

      return `${formattedHours} ${period}`;
    } else {
      return `${hours}:${minutes}`;
    }
  }
}