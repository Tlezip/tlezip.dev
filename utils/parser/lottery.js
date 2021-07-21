import { get, reduce, includes } from 'lodash'

const getLotteryData = (data, rewardType) => {
  return {
    data: get(data, 'data', []),
    prize: get(data, 'info.1', 0),
    rewardType
  }
}

const parseLottery = (data) => {
  const lotteryDateText = get(data, 'data.lotteryDateTitle', '')
  const latestLotteryResult = get(data, 'data.prizes', {})
  const formattedData = {
    lotteryDateText,
    firstPrize: getLotteryData(get(latestLotteryResult, '1', ''), 'firstPrize'),
    adjacentFirstPrize: getLotteryData(get(latestLotteryResult, '11', ''), 'adjacentFirstPrize'),
    firstThreePrize: getLotteryData(get(latestLotteryResult, '10', ''), 'firstThreePrize'),
    lastThreePrize: getLotteryData(get(latestLotteryResult, '6', ''), 'lastThreePrize'),
    lastTwoPrize: getLotteryData(get(latestLotteryResult, '7', ''), 'lastTwoPrize'),
    secondPrize: getLotteryData(get(latestLotteryResult, '2', ''), 'secondPrize'),
    thirdPrize: getLotteryData(get(latestLotteryResult, '3', ''), 'thirdPrize'),
    forthPrize: getLotteryData(get(latestLotteryResult, '4', ''), 'forthPrize'),
    fifthPrize: getLotteryData(get(latestLotteryResult, '5', ''), 'fifthPrize'),
  }
  return formattedData
}

const parseLotteryDate = (data) => {
  const lotteryPeriods = reduce(get(data, 'data', []), (acc, lottery) => {
    const lotteryDate = get(lottery, 'str', '')
    if (includes(acc, lotteryDate)) return acc
    return [...acc, lotteryDate]
  }, [])
  return lotteryPeriods
}

export {
  parseLottery,
  parseLotteryDate
}
