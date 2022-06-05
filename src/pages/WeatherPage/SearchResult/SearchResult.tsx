import { useQuery } from 'react-query'
import { getGeoApi } from 'services/weather'
import WeatherList from './WeatherList/WeatherList'

interface IProps {
  searchInput: string
}

export default function SearchResult({ searchInput }: IProps) {
  const { data } = useQuery(['getGeoApi', searchInput], () => getGeoApi(searchInput), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  if (!data) return <div>도시명이 적합하지 않습니다.</div>
  return <WeatherList lat={data.lat} lon={data.lon} />
}
