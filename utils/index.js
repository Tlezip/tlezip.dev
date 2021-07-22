import { useEffect } from 'preact/hooks'

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const handleClick = (e, node, handleClickOutside) => {
  if (node && node.current && node.current.contains(e.target)) {
    return false;
  }
  handleClickOutside()
  return true
}

const clickOutside = (node, handleClickOutside) => {
  useEffect(() => {
    if (node) document.addEventListener("mousedown", e => handleClick(e, node, handleClickOutside));
    return () => {
      if (node) document.removeEventListener("mousedown", e => handleClick(e, node, handleClickOutside));
    };
  }, []);
}

const getRewardLabel = rewardType => {
  switch (rewardType) {
    case 'firstPrize':
      return 'รางวัลที่ 1'
    case 'firstThreePrize':
      return 'รางวัลเลขหน้า 3 ตัว'
    case 'lastThreePrize':
      return 'รางวัลเลขท้าย 3 ตัว'
    case 'lastTwoPrize':
      return 'รางวัลเลขท้าย 2 ตัว'
    case 'adjacentFirstPrize':
      return 'รางวัลข้างเคียงรางวัลที่ 1'
    case 'secondPrize':
      return 'รางวัลที่ 2'
    case 'thirdPrize':
      return 'รางวัลที่ 3'
    case 'forthPrize':
      return 'รางวัลที่ 4'
    case 'secondPrize':
      return 'รางวัลที่ 2'
    case 'fifthPrize':
      return 'รางวัลที่ 5'
  }
} 

export {
  numberWithCommas,
  clickOutside,
  getRewardLabel
}
