import { atom } from 'recoil'
import dayjs from 'dayjs'

export const fromTimeState = atom({
  key: 'fromTimeState',
  default: dayjs().format('HHmm'),
})

export const destinationState = atom({
  key: 'destinationState',
  default: '',
})
