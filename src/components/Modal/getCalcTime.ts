import dayjs from 'dayjs'

const getCalcTime = (isDepart: boolean, estimatedDateTime: string, elapsetime: string) => {
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

export default getCalcTime
