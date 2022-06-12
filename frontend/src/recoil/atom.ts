import { atom } from 'recoil'
import dayjs from 'dayjs'

export const fromTimeState = atom({
  key: 'fromTimeState',
  default: dayjs().format('HHmm'),
})
