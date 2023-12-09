import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { PlaceSearchResult } from './models/place-search-result.interface';
import { WeatherData } from './models/weather.data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  sunInfo: WeatherData = <WeatherData>{};
  locationMissmatch: string = '';
  errorMessage: string = '';
  weatherDataArray: Array<WeatherData> = [];
  fromPlaceValue: PlaceSearchResult =  <PlaceSearchResult>{};
 
  constructor(private WS: WeatherService){}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchSpecificWeather();
  }

  fetchSpecificWeather(){
    let lat: number | undefined = this.fromPlaceValue?.location?.lat();
    let lng: number | undefined = this.fromPlaceValue?.location?.lng();
    let images: Array<string> | undefined  = this.fromPlaceValue?.imageArray;
    if (lat === undefined && lng === undefined) {
      this.errorMessage = 'We can\' find this city, pleas check the spelling or try an other one.'
    } else {
      this.WS.fetchWeather(lat, lng)
        .subscribe(response => {
          const weatherList = response.list;
          this.weatherDataArray = this.WS.asignData(weatherList, images);
          this.sunInfo.sunrise = this.WS.getTime(response.city.sunrise);
          this.sunInfo.sunset = this.WS.getTime(response.city.sunset);
        },
        err => {this.errorMessage = err.error.message}
        )
    }
   
  }

  placeChangeHandler(placeSearchResult: PlaceSearchResult) {
    this.fromPlaceValue = placeSearchResult;
    this.fetchSpecificWeather();
  }
}