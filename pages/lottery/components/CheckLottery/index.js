import { useState, useEffect } from 'preact/hooks'
import { get } from 'lodash'

import Dropdown from '../Dropdown'
import './index.scss'

import { fetchLotteryDate, checkLottery } from '../../../../api'
import { getRewardLabel, numberWithCommas } from '../../../../utils'

const CheckLottery = () => {
  const [lotteryNumber, setLotteryNumber] = useState('')
  const [lotteryDateOptions, setlotteryDateOptions] = useState([])
  const [lotteryDate, setLotteryDate] = useState('')
  const [checked, setChecked] = useState(false)
  const [checkedResult, setCheckedResult] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    const options = await fetchLotteryDate()
    setlotteryDateOptions(options)
  }

  const handleChangeInput = e => {
    setLotteryNumber(e.target.value)
  }

  const handleSelectDate = date => {
    setLotteryDate(date)
  }

  const handleSubmit = async () => {
    const result = await checkLottery(lotteryDate, lotteryNumber)
    setCheckedResult(result)
    setChecked(true)
  }

  const rewardLabel = getRewardLabel(get(checkedResult, 'rewardType', ''))
  const winLottery = !!rewardLabel
  const rewardPrize = numberWithCommas(get(checkedResult, 'prize', 0))

  return (
    <div class="check-lottery">
      <input class="check-lottery__input" onInput={handleChangeInput} value={lotteryNumber}/>
      <Dropdown options={lotteryDateOptions} handleChange={handleSelectDate} />
      <button class="check-lottery__submit-button" onClick={handleSubmit}>ตรวจ</button>
      {
        checked && (
          <p
            class={`
              check-lottery__result
              ${winLottery ? 'check-lottery__result--win' : 'check-lottery__result--lose'}
            `}
          >
              {rewardLabel ? `คุณถูก ${rewardLabel} มูลค่า ${rewardPrize} บาท` : `คุณไม่ถูกรางวัล`}
          </p>
        )
      }
    </div>
  )
}

export default CheckLottery
