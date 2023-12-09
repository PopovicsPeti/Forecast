import { Injectable } from '@angular/core';
import { WeatherData } from './weather.data.class';

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
      console.log(imageArray);
      console.log(this.defaultImages);
    return [...imageArray, ...this.defaultImages];
  }

  getTime(time: number){
    const fullTime = new Date(time * 1000);
    const hours = fullTime.getHours();
    const minutes = fullTime.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  }

  asignData(data: any, place?: any){
    const weatherDataArray = data.map((weatherEntry: any) => {
      return {
        time:           weatherEntry.dt_txt,
        temp:           weatherEntry.main.temp,
        realFealTemp:   weatherEntry.main.feels_like,
        minTemp:        weatherEntry.main.temp_min,
        maxTemp:        weatherEntry.main.temp_max,
        pressure:       weatherEntry.main.grnd_level,
        humidity:       weatherEntry.main.humidity,
        weatherId:      weatherEntry.weather[0].id,
        weatherType:    weatherEntry.weather[0].main,
        weatherDesc:    weatherEntry.weather[0].description,
        weatherIcon:    weatherEntry.weather[0].icon,
        cloudiness:     weatherEntry.clouds.all,
        windSpeed:      weatherEntry.wind.speed,
        windDirection:  weatherEntry.wind.deg,
        windPeek:       weatherEntry.wind.gust,
        visibility:     weatherEntry.visibility,
        probOfPrec:     weatherEntry.pop,
        rainVol:        weatherEntry.rain ? weatherEntry.rain['3h'] : undefined,
        shnowVol:       weatherEntry.snow ? weatherEntry.snow['3h'] : undefined,
        images:         place,       
      };
    })
    return weatherDataArray;
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
    console.log('groupedArrays')
    console.log(groupedArrays)
    return groupedArrays;
  }


}
