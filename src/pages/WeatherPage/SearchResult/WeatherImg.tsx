import styles from './weatherImg.module.scss'

import clearSky from 'assets/weather/01d.png'
import fewClouds from 'assets/weather/02d.png'
import scatteredClouds from 'assets/weather/03d.png'
import brokenClouds from 'assets/weather/04d.png'
import showerRain from 'assets/weather/09d.png'
import rain from 'assets/weather/10d.png'
import thunderstom from 'assets/weather/11d.png'
import snow from 'assets/weather/13d.png'
import mist from 'assets/weather/50d.png'

interface IProps {
  icon: string
}

export default function WeatherImg({ icon }: IProps) {
  const weatherImg = {
    '01d': <img src={clearSky} alt='clearSky' />,
    '01n': <img src={clearSky} alt='clearSky' />,
    '02d': <img src={fewClouds} alt='fewClouds' />,
    '02n': <img src={fewClouds} alt='fewClouds' />,
    '03d': <img src={scatteredClouds} alt='scatteredClouds' />,
    '03n': <img src={scatteredClouds} alt='scatteredClouds' />,
    '04d': <img src={brokenClouds} alt='brokenClouds' />,
    '04n': <img src={brokenClouds} alt='brokenClouds' />,
    '09d': <img src={showerRain} alt='showerRain' />,
    '09n': <img src={showerRain} alt='showerRain' />,
    '10d': <img src={rain} alt='rain' />,
    '10n': <img src={rain} alt='rain' />,
    '11d': <img src={thunderstom} alt='thunderstom' />,
    '11n': <img src={thunderstom} alt='thunderstom' />,
    '13d': <img src={snow} alt='snow' />,
    '13n': <img src={snow} alt='snow' />,
    '50d': <img src={mist} alt='mist' />,
    '50n': <img src={mist} alt='mist' />,
  }[icon]

  return <div className={styles.wrapper}>{weatherImg}</div>
}
