import { Component, 
          OnInit, 
          Input, 
          Output, 
          ElementRef, 
          ViewChild, 
          EventEmitter, 
          NgZone
        } from '@angular/core';
import { PlaceSearchResult } from '../../models/place-search-result.interface';
import {} from 'googlemaps';
import { WeatherData } from '../../models/weather.data.interface';
import { PlacesService } from '../../services/places.service';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('inputField') inputField!: ElementRef;
  @Input() placeholder: string = '';
  @Output() placeChanged = new EventEmitter<PlaceSearchResult>;
  @Output() weatherDataArrayChanged = new EventEmitter<Array<WeatherData>>;
  
  autocomplete: google.maps.places.Autocomplete = <google.maps.places.Autocomplete>{};
  searchType = {types: ['(cities)']}
  sunInfo: WeatherData = <WeatherData>{};
  errorMessage: string = '';
  weatherDataArray: Array<WeatherData> = [];

  constructor(private ngZone: NgZone, 
              private PS: PlacesService
              ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    google.maps.event.addDomListener(window, 'load', () => {
    this.autocomplete = new google.maps.places.Autocomplete(this.inputField.nativeElement, this.searchType);

    this.inputField.nativeElement.addEventListener('keydown', (e: any) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const firstSuggestion = this.autocomplete.getPlace();
        this.inputField.nativeElement.value = firstSuggestion;
        google.maps.event.trigger(this.autocomplete, 'place_changed');
      }
    });
    
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();

      const result: PlaceSearchResult = {
        adress: this.inputField.nativeElement.value,
        name: place?.name,
        location: place?.geometry?.location,
        imageArray: this.PS.getPhotoArray(place),
        iconUrl: place?.icon,
      }    

    this.inputField.nativeElement.value = '';

      this.ngZone.run(() => {
        this.placeChanged.emit(result);
        this.weatherDataArrayChanged.emit(this.weatherDataArray);
      })
    });
  })}
}






