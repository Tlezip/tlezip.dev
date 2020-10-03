import { map, isArray, join } from 'lodash'

import './index.scss'

const getRewardData = rewardType => {
  switch (rewardType) {
    case 'firstPrize':
      return {
        rewardName: 'รางวัลที่ 1',
        class: 'text--large-3',
        description: 'รางวัลละ 6,000,000 บาท'
      }
    case 'firstThreePrize':
      return {
        rewardName: 'รางวัลเลขหน้า 3 ตัว',
        class: 'text--large-2',
        description: '2 รางวัลๆละ 4,000 บาท'
      }
    case 'lastThreePrize':
      return {
        rewardName: 'รางวัลเลขท้าย 3 ตัว',
        class: 'text--large-2',
        description: '2 รางวัลๆละ 4,000 บาท'
      }
    case 'lastTwoPrize':
      return {
        rewardName: 'รางวัลเลขท้าย 2 ตัว',
        description: 'รางวัลละ 2,000 บาท'
      }
    default:
      return ''
  }
}

const renderlotteryNumber = lotteryNumbers => {
  if (isArray(lotteryNumbers)) return join(lotteryNumbers, ' ')
  return lotteryNumbers
}

const LotteryHeader = ({ title, rewards}) => (
  <div class="lottery-header">
    <div class="lottery-header__title-wrapper">
      <p class="text text--large-4">{title}</p>
    </div>
    <div class="lottery-header__reward-wrapper">
      {
        map(
          rewards, ({ rewardType, lotteryNumber }) => {
            const { rewardName, class: rewardClass = '', description } = getRewardData(rewardType)
            return (
              <div class="lottery-header__reward">
                <div class="lottery-header__reward-title">
                  {rewardName}
                </div>
                <div class={`lottery-header__reward-number text ${rewardClass}`}>
                  {renderlotteryNumber(lotteryNumber)}
                </div>
                <div class="lottery-header__reward-description">
                  {description}
                </div>
              </div>
            )
          }
        )
      }
    </div>
  </div>
)

export default LotteryHeader
