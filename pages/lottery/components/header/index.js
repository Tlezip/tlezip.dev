import { map, isArray, join, isEmpty, get } from 'lodash'

import CheckLottery from '../CheckLottery'
import { numberWithCommas } from '../../../../utils'
import './index.scss'

const getRewardData = (rewardType, prize) => {
  const formattedPrize = numberWithCommas(prize)
  switch (rewardType) {
    case 'firstPrize':
      return {
        rewardName: 'รางวัลที่ 1',
        class: 'text--large-3',
        description: `รางวัลละ ${formattedPrize} บาท`
      }
    case 'firstThreePrize':
      return {
        rewardName: 'รางวัลเลขหน้า 3 ตัว',
        class: 'text--large-2',
        description: `2 รางวัลๆละ ${formattedPrize} บาท`
      }
    case 'lastThreePrize':
      return {
        rewardName: 'รางวัลเลขท้าย 3 ตัว',
        class: 'text--large-2',
        description: `2 รางวัลๆละ ${formattedPrize} บาท`
      }
    case 'lastTwoPrize':
      return {
        rewardName: 'รางวัลเลขท้าย 2 ตัว',
        description: `รางวัลละ ${formattedPrize} บาท`
      }
    default:
      return ''
  }
}

const renderlotteryNumber = lotteryNumbers => {
  if (isArray(lotteryNumbers)) return join(lotteryNumbers, ' ')
  return lotteryNumbers
}

const LotteryHeader = ({ title, rewards, rewards2 }) => {
  const rewardHeaderData = isEmpty(rewards2) ? [] : [
    rewards2.firstPrize,
    rewards2.firstThreePrize,
    rewards2.lastThreePrize,
    rewards2.lastTwoPrize
  ]

  return (
    <div class="lottery-header">
      <div class="lottery-header__title-wrapper">
        <p class="text text--large-4">{title}</p>
      </div>
      <div class="lottery-header__reward-wrapper">
        {
          map(
            rewardHeaderData, ({ rewardType, data: lotteryNumber, prize }) => {
              const { rewardName, class: rewardClass = '', description } = getRewardData(rewardType, prize)
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
      <div class="lottery-header__check-lottery">
        <CheckLottery />
      </div>
      <div class="lottery-header__more-reward">
        <div class="lottery-header__second-prize-header text text--large-4">รางวัลที่ 2</div>
        <div class="lottery-header__second-prize-wrapper">
          {
            map(get(rewards2, 'secondPrize.data', []), lotteryNumber => (<div class="lottery-header__second-prize">{lotteryNumber}</div>))
          }
        </div>
      </div>
      <div class="lottery-header__more-reward lottery-header__third-prize-reward">
        <div class="lottery-header__second-prize-header text text--large-4">รางวัลที่ 3</div>
        <div class="lottery-header__second-prize-wrapper">
          {
            map(get(rewards2, 'thirdPrize.data', []), lotteryNumber => (<div class="lottery-header__second-prize">{lotteryNumber}</div>))
          }
        </div>
      </div>
      <div class="lottery-header__more-reward lottery-header__forth-prize-reward">
        <div class="lottery-header__second-prize-header text text--large-4">รางวัลที่ 4</div>
        <div class="lottery-header__second-prize-wrapper">
          {
            map(get(rewards2, 'forthPrize.data', []), lotteryNumber => (<div class="lottery-header__second-prize">{lotteryNumber}</div>))
          }
        </div>
      </div>
      <div class="lottery-header__more-reward lottery-header__fifth-prize-reward">
        <div class="lottery-header__second-prize-header text text--large-4">รางวัลที่ 5</div>
        <div class="lottery-header__second-prize-wrapper">
          {
            map(get(rewards2, 'fifthPrize.data', []), lotteryNumber => (<div class="lottery-header__second-prize">{lotteryNumber}</div>))
          }
        </div>
      </div>
    </div>
  )
}

export default LotteryHeader
