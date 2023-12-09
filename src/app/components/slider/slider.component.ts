import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from '../../models/weather.data.interface';
import { PlaceSearchResult } from '../../models/place-search-result.interface';
import {} from 'googlemaps';
import { PlacesService } from '../../services/places.service';

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

  constructor(private PS: PlacesService) { }
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







