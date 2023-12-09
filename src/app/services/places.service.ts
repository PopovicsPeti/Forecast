import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.data.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {



  defaultImages: Array<string> = [
    '../assets/default_pictures/default-1.jpg',
    '../assets/default_pictures/default-2.jpg',
    '../assets/default_pictures/default-3.jpg',
    '../assets/default_pictures/default-4.jpg',
    '../assets/default_pictures/default-5.jpg',
    '../assets/default_pictures/default-6.jpg'
  ];

  constructor() { }


  getPhotoArray(place: google.maps.places.PlaceResult): string[] {
    let imageArray: Array<string> = [];
    if(place.photos) {
      for(let i = 0; i < place?.photos.length; i++){
        imageArray.push(place.photos[i].getUrl({ maxWidth: 1800 }));
      }} 
    return [...imageArray, ...this.defaultImages];
  }

  transformData(weatherData: Array<WeatherData>) {
    const groupedArrays = [];
    let   currentGroup: any[] = [];
  
    for (const obj of weatherData) {
      const day = obj.time.split(' ')[0]; 

      if (currentGroup.length === 0 || currentGroup[currentGroup.length - 1].time.split(' ')[0] === day) {
        currentGroup.push(obj);
      } else {
        groupedArrays.push(currentGroup); 
        currentGroup = [obj]; 
      }
    }
  
    if (currentGroup.length > 0) {
      groupedArrays.push(currentGroup);
    }
    return groupedArrays;
  }


}
