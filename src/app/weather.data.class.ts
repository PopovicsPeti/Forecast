export interface WeatherData {

    time:           string;        //list.dt               -> Unix, UTC        
    temp:           number;              //list.main.temp        -> celsius      
    realFealTemp:   number;              //list.main.feels_like  -> celsius      
    minTemp:        number;              //list.main.temp_min    -> celsius      
    maxTemp:        number;              //list.main.temp_max    -> celsius      
    pressure:       number;              //list.main.grnd_level  -> hPa       
    humidity:       number;              //list.main.humidity    -> %      
    weatherId:      number;              //list.weather.id       -> icon                   
    weatherType:    string;             //list.weather.main     -> rain         
    weatherDesc:    string;             //list.weather.description    
    weatherIcon:    string;             //list.weather.icon     -> icon id      
    cloudiness:     number;              //list.clouds.all       -> %              
    windSpeed:      number;              //list.wind.speed       -> meter/sec       
    windDirection:  number;              //list.wind.deg         -> degree 0/360           
    windPeek:       number;              //list.wind.gust        -> m/s               
    visibility:     number;              //list.visibility       -> meter            
    probOfPrec:     number;              //list.pop (eső)        -> %       
    rainVol?:        number | undefined;             //list.rain.3h          -> mm               
    shnowVol?:       number | undefined;             //list.snow.3h          -> mm
    sunrise:        string;       //city.sunrise          -> new Date(unix*1000)
    sunset:         string;       // city.sunset          -> new Date(unix*1000) 
    images?:        Array<string>;    


    // constructor( time: Date, temp: number, realFealTemp: number, minTemp: number,
    //              maxTemp: number, preassure: number, humidity: number, weatherId: number,
    //              weatherType: string, weatherDesc: string, weatherIcon: string,
    //              cloudiness: number, windSpeed: number, windDirection: number, windPeek: number,
    //              visibility: number, probOfPrec: number, rainVol: number, shnowVol: number,
    //              sunRise: Date, sunSet: Date){

    //     this.time           = time;
    //     this.temp           = temp;
    //     this.realFealTemp   = realFealTemp;
    //     this.minTemp        = minTemp;
    //     this.maxTemp        = maxTemp;
    //     this.preassure      = preassure;
    //     this.humidity       = humidity;
    //     this.weatherId      = weatherId;
    //     this.weatherType    = weatherType;
    //     this.weatherDesc    = weatherDesc;
    //     this.weatherIcon    = weatherIcon;
    //     this.cloudiness     = cloudiness;
    //     this.windSpeed      = windSpeed;
    //     this.windDirection  = windDirection;
    //     this.windPeek       = windPeek;
    //     this.visibility     = visibility;
    //     this.probOfPrec     = probOfPrec;
    //     this.rainVol        = rainVol;
    //     this.shnowVol       = shnowVol;
    //     this.sunRise        = sunRise;
    //     this.sunSet         = sunSet;
    //}



}