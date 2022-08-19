import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setTime } from '@/features/timer/timerSlice'

const Input = styled.input`
  appearance: none;
  border: 2px solid;
  border-color: ${(props) => (props.isStop ? '#9fd1c9' : 'transparent')};
  border-radius: 8px;
  width: 64px;
  height: 64px;
  text-align: center;
  font-size: 3rem;
  padding: 0;
`

const StaticText = styled.span`
  width: 68px;
  height: 68px;
  font-size: 3rem;
`

const TimerInput = ({ target }) => {
  const time = useSelector((state) => state.timer)
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    const inputTime = e.target.value

    if (!inputTime) {
      dispatch(setTime({ target, value: 0 }))
      return
    }

    const numberRegex = /^[0-9]+$/
    const isNumber = `${inputTime}`.match(numberRegex)
    const isOverTimeLimit = inputTime > 59 || inputTime < 0

    if (!isNumber || isOverTimeLimit) return

    dispatch(setTime({ target, value: +inputTime || 0 }))
  }

  /** 雙位數補零 */
  const padZero = (val) => {
    return `${val}`.padStart(2, '0')
  }

  return time.isStop ? (
    <Input onInput={inputHandler} maxLength="2" value={time[target]} isStop={time.isStop} />
  ) : (
    <StaticText>{padZero(time[target])}</StaticText>
  )
}

export default TimerInput
