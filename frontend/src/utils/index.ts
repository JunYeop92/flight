import dayjs from 'dayjs'

export const getRandomColorName = () => {
  const colorScale = ['green', 'orange', 'yellow', 'teal', 'indigo', 'purple']
  const randomKey = Math.floor(Math.random() * colorScale.length)
  return colorScale[randomKey]
}

export const getCalcTime = (isDepart: boolean, estimatedDateTime: string, elapsetime: string) => {
  // 출발시간 아니면 도착시간
  const estimatedHour = Number(estimatedDateTime.slice(0, 2))
  const estimatedMin = Number(estimatedDateTime.slice(2, 4))
  const estimatedDayObj = dayjs(new Date().setHours(estimatedHour, estimatedMin))

  // 소요시간이 없으면
  if (!elapsetime) {
    const startDayObj = isDepart ? estimatedDayObj : null
    const endDayObj = isDepart ? null : estimatedDayObj
    const elapseTimeStr = ''

    return { startDayObj, endDayObj, elapseTimeStr }
  }

  const elapseHourStr = elapsetime?.slice(0, 2)
  const elapseMinStr = elapsetime?.slice(2, 4)
  const resultDayObj = isDepart
    ? estimatedDayObj.add(Number(elapseHourStr), 'hour').add(Number(elapseMinStr), 'minute')
    : estimatedDayObj.subtract(Number(elapseHourStr), 'hour').subtract(Number(elapseMinStr), 'minute')

  const startDayObj = isDepart ? estimatedDayObj : resultDayObj
  const endDayObj = isDepart ? resultDayObj : estimatedDayObj
  const elapseTimeStr = `${elapseHourStr}h ${elapseMinStr}m`

  return { startDayObj, endDayObj, elapseTimeStr }
}

export const queryKeys = {
  departList: (fromTime: string) => ['departList', fromTime] as const,
  arriveList: (fromTime: string) => ['arriveList', fromTime] as const,
  airpostList: (condition: string, search: string) => ['airportList', condition, search] as const,
  commentList: (airportId: string) => ['commentList', airportId] as const,
  weatherList: (cityName: string) => ['weatherList', cityName] as const,
}
