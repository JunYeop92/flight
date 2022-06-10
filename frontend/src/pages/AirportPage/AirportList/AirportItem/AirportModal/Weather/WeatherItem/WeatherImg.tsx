import clear from 'assets/weather/clear.jpg'
import clearNight from 'assets/weather/clear-n.jpg'
import clouds from 'assets/weather/clouds.jpg'
import fewClouds from 'assets/weather/few-clouds.jpg'
import fewCloudsNight from 'assets/weather/few-clouds-n.jpg'
import mist from 'assets/weather/mist.jpg'
import mistNight from 'assets/weather/mist-n.jpg'
import rain from 'assets/weather/rain.jpg'
import rainNight from 'assets/weather/rain-n.jpg'
import snow from 'assets/weather/snow.jpg'
import snowNight from 'assets/weather/snow-n.jpg'
import thunderstorm from 'assets/weather/thunderstorm.jpg'

interface IProps {
  icon: string
}

export default function WeatherImg({ icon }: IProps) {
  const weatherImg = {
    '01d': <img src={clear} alt='clear' />,
    '01n': <img src={clearNight} alt='clearNight' />,
    '02d': <img src={fewClouds} alt='fewClouds' />,
    '02n': <img src={fewCloudsNight} alt='fewCloudsNight' />,
    '03d': <img src={clouds} alt='scatteredClouds' />,
    '03n': <img src={clouds} alt='scatteredCloudsNight' />,
    '04d': <img src={clouds} alt='brokenClouds' />,
    '04n': <img src={clouds} alt='brokenCloudsNight' />,
    '09d': <img src={rain} alt='showerRain' />,
    '09n': <img src={rainNight} alt='showerRainNight' />,
    '10d': <img src={rain} alt='rain' />,
    '10n': <img src={rainNight} alt='rainNight' />,
    '11d': <img src={thunderstorm} alt='thunderstorm' />,
    '11n': <img src={thunderstorm} alt='thunderstormNight' />,
    '13d': <img src={snow} alt='snow' />,
    '13n': <img src={snowNight} alt='snowNight' />,
    '50d': <img src={mist} alt='mist' />,
    '50n': <img src={mistNight} alt='mistNight' />,
  }[icon]

  return <div>{weatherImg}</div>
}
