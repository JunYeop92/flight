import dayjs from 'dayjs'
import { atom } from 'recoil'

export const fromTimeState = atom({
  key: 'fromTimeState',
  default: dayjs().format('HHmm'),
})
