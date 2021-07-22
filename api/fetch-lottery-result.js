import { parseLottery } from '../utils/parser/lottery'

const fetchLotteryResult = (date = '') => {
  const queryParams = date ? `?date=${date}` : ''
  const API_ENDPOINT = process.env.PREACT_APP_LOTTERY_ENDPOINT
  const data = fetch(`${API_ENDPOINT}/api-lottery${queryParams}`)
    .then(res => res.json())
    .then(result => parseLottery(result))
    .catch(() => ({}))
  return data
}

export default fetchLotteryResult
