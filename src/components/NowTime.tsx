import useTimeInterval from 'hooks/useTimeInterval'

export default function NowTime() {
  const time = useTimeInterval(1000, 'HH:mm:ss')

  return (
    <div>
      <time dateTime={time}>현재 시간 : {time}</time>
    </div>
  )
}
