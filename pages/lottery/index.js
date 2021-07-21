import { useState, useEffect } from 'preact/hooks';
import { get } from 'lodash'

import LotteryHeader from './components/header'
import './style.scss'

import { fetchLatestLottery } from '../../api'

const LotteryPage = () => {
  const [lotteryData, setLotteryData] = useState({})

  const getData = async() => {
    const data = await fetchLatestLottery()
    setLotteryData(data)
    return data
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div class="lottery-page">
      <LotteryHeader
        title={`ตรวจหวย ${get(lotteryData, 'lotteryDateText', '')}`}
        rewards2={lotteryData}
        rewards={[
          {
            rewardType: 'firstPrize',
            lotteryNumber: '837893'
          },
          {
            rewardType: 'firstThreePrize',
            lotteryNumber: ['594', '757']
          },
          {
            rewardType: 'lastThreePrize',
            lotteryNumber: ['110', '595']
          },
          {
            rewardType: 'lastTwoPrize',
            lotteryNumber: '59'
          }
        ]}
      />
    </div>
  )
}

export default LotteryPage
