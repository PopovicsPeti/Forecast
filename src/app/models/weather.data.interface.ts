export interface WeatherData {
    time:           string;
    temp:           number; 
    realFealTemp:   number; 
    minTemp:        number; 
    maxTemp:        number;
    pressure:       number;        
    humidity:       number;
    weatherId:      number;           
    weatherType:    string;
    weatherDesc:    string;
    weatherIcon:    string;
    cloudiness:     number;   
    windSpeed:      number;    
    windDirection:  number;           
    windPeek:       number;      
    visibility:     number;              
    probOfPrec:     number;       
    rainVol?:        number | undefined;                  
    shnowVol?:       number | undefined;   
    sunrise:        string;
    sunset:         string;
    images?:        Array<string>;    
}