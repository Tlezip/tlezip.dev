import LotteryHeader from './components/header'
import './style.scss'

const LotteryPage = () => {
  return (
    <div class="lottery-page">
      <LotteryHeader
        title="ตรวจหวย 1 ตุลาคม 2563"
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
