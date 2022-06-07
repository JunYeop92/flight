export interface IWeatherRes {
  cod: string
  message: number
  cnt: number
  list: IWeatherItem[]
  city: ICity
}

interface ICity {
  id: number
  name: string
  coord: ICoord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface IWeatherItem {
  dt: number
  main: IMain
  weather: IWeather[]
  clouds: IClouds
  wind: IWind
  visibility: number
  pop: number
  sys: ISys
  dt_txt: string
  rain?: IRain
}

interface IRain {
  '3h': number
}

interface ISys {
  pod: string
}

interface IWind {
  speed: number
  deg: number
  gust: number
}

interface IClouds {
  all: number
}

interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface ICoord {
  lon: number
  lat: number
}

export interface IGeoRes {
  name: string
  local_names: Record<string, string>
  lat: number
  lon: number
  country: string
  state?: string
}
