import dayjs from 'dayjs'
import { map, size } from 'lodash'
import 'dayjs/locale/th'

import { parseLotteryDate } from '../utils/parser/lottery'

dayjs.locale('th')

const fetchLotteryDate = async () => {
  const API_ENDPOINT = process.env.PREACT_APP_LOTTERY_ENDPOINT
  let result = []
  let date = dayjs()

  while (size(result) < 18) {
    const dateText = date.format('YYYY-MM-DD')
    const data = await fetch(`${API_ENDPOINT}/api-lottery/history?date=${dateText}`)
      .then(res => res.json())
      .then(result => parseLotteryDate(result))
      .catch(() => ({}))
    if (size(data) === 0) break;
    const uniqueSet = new Set([...result, ...data])
    const uniqueArray = Array.from(uniqueSet)
    result = uniqueArray
    date = date.subtract(2, 'month')
  }

  const formattedDate = map(result, date => ({ key: date, text: dayjs(date, 'YYYY-MM-DD').format('DD MMM YYYY') }))

  return formattedDate
}

export default fetchLotteryDate
