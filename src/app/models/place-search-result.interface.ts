export interface PlaceSearchResult {
    adress:     string;
    location?:  google.maps.LatLng;
    imageUrl?:  string;
    imageArray?: Array<string>;
    iconUrl?:   string;
    name?:      string;
}