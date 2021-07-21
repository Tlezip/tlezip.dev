import { find, get, includes } from 'lodash'

import fetchLotteryResult from "./fetch-lottery-result"

const checkLottery = async (date, number) => {
  const lotteryResults = await fetchLotteryResult(date)
  const result = find(lotteryResults, lotteryResult => includes(get(lotteryResult, 'data', []), number))

  return result ? {
    rewardType: get(result, 'rewardType', ''),
    prize: get(result, 'prize', 0)
  } : {}
}

export default checkLottery
