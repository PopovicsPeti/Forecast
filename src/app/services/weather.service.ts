import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  errorMessage: string = '';
  apyParams = new HttpParams();
  
  constructor(private http: HttpClient) { }

  fetchWeather(lat: number | undefined, lon: number | undefined){
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a96555f611889355731f1e2e223a4f51&units=metric`)
      .pipe(
        catchError( error => {
          this.errorMessage = error;
          return throwError(error)
        })
      )
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
}

