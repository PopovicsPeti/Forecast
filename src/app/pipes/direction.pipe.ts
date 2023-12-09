import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'direction'
})
export class DirectionPipe implements PipeTransform {
    transform(degree: number): string {
        degree = (degree + 360) % 360;
    
        const directions = [
          { label: 'N', range: [337.5, 360] },
          { label: 'N', range: [0, 22.5] },
          { label: 'NE', range: [22.5, 67.5] },
          { label: 'E', range: [67.5, 112.5] },
          { label: 'SE', range: [112.5, 157.5] },
          { label: 'S', range: [157.5, 202.5] },
          { label: 'SW', range: [202.5, 247.5] },
          { label: 'W', range: [247.5, 292.5] },
          { label: 'NW', range: [292.5, 337.5] }
        ];
    
        const direction = directions.find(dir => degree >= dir.range[0] && degree < dir.range[1]);
    
        return direction ? direction.label : 'Invalid Degree';
      }
}
