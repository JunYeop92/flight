import { useSearchParams } from 'react-router-dom'

export default function useAirportParams() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const condition = searchParams.get('condition') || ''
  return { condition, search }
}
