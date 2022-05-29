export interface IFlightApiParams {
  from_time: string
  to_time: string
}

export interface IFlightItem {
  typeOfFlight: string
  airline: string
  flightId: string
  scheduleDateTime: string
  estimatedDateTime: string
  airport: string
  gatenumber: string
  carousel: string
  exitnumber: string
  remark: string
  codeshare: string
  masterflightid: string
  airportCode: string
  cityCode: string
  terminalId: string
  firstopover: string
  firstopovername?: string
  secstopover: string
  secstopovername?: string
  thistopover: string
  thistopovername?: string
  elapsetime: string
}
