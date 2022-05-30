import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function useTimeInterval(delay: number, form: string) {
  const [time, setTime] = useState(dayjs().format(form))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format(form))
    }, delay)

    return () => clearInterval(timer)
  }, [delay, form])

  return time
}
