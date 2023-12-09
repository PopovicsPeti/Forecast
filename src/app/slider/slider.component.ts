import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from '../weather.data.class';
import { PlaceSearchResult } from '../Place.Search.Result.interface';
import {} from 'googlemaps';
import { WeatherService } from '../weather.service';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {
  @Input() sunInfoValue: WeatherData = <WeatherData>{}
  @Input() weatherDataArrayValue: Array<WeatherData> = [];
  @Input() place: PlaceSearchResult = <PlaceSearchResult>{};
  fromAutocomplete: PlaceSearchResult =  <PlaceSearchResult>{};
  dailyWeather: WeatherData[][] = [];
  bg = document.getElementById('slider');
  showDetails: boolean = false;
  weatherInfo: Array<WeatherData> = [];
  errorMessage: string = '';

  constructor(private WS: WeatherService,
              private PS: PlacesService) { }
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dailyWeather = this.PS.transformData(this.weatherDataArrayValue);
  }
  
  prev(){
    let list = document.querySelectorAll('.item');
    document.getElementById('slider')?.prepend(list[list.length -1]);
  }

  next() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slider')?.appendChild(list[0]);
  }

  showWeatherDetails(index: number){
    this.showDetails = true;
    this.weatherInfo = this.dailyWeather[index];
  }

  hideWeatherDetails() {
    this.showDetails = false;
  }
}







