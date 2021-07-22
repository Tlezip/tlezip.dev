import { useState, useEffect, useRef } from 'preact/hooks'
import { get, map, find } from 'lodash'

import { clickOutside } from '../../../../utils'
import './index.scss'

const Dropdown = ({ options, handleChange }) => {
  const [currentOption, setCurrentOption] = useState('')
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownButtonRef = useRef(null)
  clickOutside(dropdownButtonRef, () => setOpenDropdown(false))

  useEffect(() => {
    const defaultOption = get(options, '0.key', '')
    setCurrentOption(defaultOption)
    handleChange(defaultOption)
  }, [options])

  const handleChooseOption = option => {
    setCurrentOption(option)
    handleChange(option)
    setOpenDropdown(false)
  }

  const currentOptionData = find(options, option => get(option, 'key', '') === currentOption)
  return (
    <div class="dropdown" ref={dropdownButtonRef}>
      <button class="dropdown__button" onClick={() => setOpenDropdown(true)}>
        {get(currentOptionData, 'text', '')}
      </button>
      {
        openDropdown && <div class="dropdown__options">
          {
            map(options, ({ key, text }) => <button class="dropdown__option" onClick={() => handleChooseOption(key)}>{text}</button>)
          }
        </div>
      }
    </div>
  )
}

export default Dropdown
