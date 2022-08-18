import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startTimer, stopTimerStatus, startTimerStatus } from '../../features/timer/timerSlice'
import styled from 'styled-components'
import TimerInput from './TimerInput'
import breakpoints from '../../utils/breakpoints'

const CountdownWrapper = styled.div`
  border-right: 2px solid #eee;
  padding-right: 24px;
  h1 {
    color: #d45fa6;
  }
  ${breakpoints('sm')`
    border-right: none;
    padding-right: 0;
    width: 100%;
  `}
`

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`

const StartBtn = styled.div`
  border-radius: 100px;
  font-weight: bold;
  padding: 16px;
  margin-top: 16px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ isStop }) => (isStop ? '#014dc6' : '#fff')};
  background-image: ${({ isStop }) =>
    isStop
      ? 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'
      : 'linear-gradient(120deg,#fda1a1 0%,#f55a5a 100%)'};

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 8px #c1d4f1;
  }
`

const Timer = ({ onGetDraw }) => {
  const dispatch = useDispatch()
  const time = useSelector((state) => state.timer)

  const timerId = useRef(null)

  /** 開始計時 */
  const start = () => {
    dispatch(startTimerStatus())
    timerId.current = setInterval(() => {
      dispatch(startTimer())
    }, 1000)
  }

  const clearTimer = () => {
    clearInterval(timerId.current)
    dispatch(stopTimerStatus())
  }

  const memoClearTimer = useCallback(clearTimer, [dispatch])

  const emptyTimeAlert = () => {
    alert('請先輸入時間才能抽獎唷！')
  }

  const btnClickHandler = () => {
    const isEmptyTime = time.isStop && !time.min && !time.sec
    if (isEmptyTime) {
      emptyTimeAlert()
      return
    }

    time.isStop ? start() : memoClearTimer()
  }

  /** 時間為0 && 尚未停止時，抽籤並呼叫清除timer */
  useEffect(() => {
    if (time.min === 0 && time.sec === 0 && !time.isStop) {
      onGetDraw()
      memoClearTimer()
    }
  }, [time.min, time.sec, onGetDraw, time.isStop, memoClearTimer])

  return (
    <CountdownWrapper>
      <h1>Lucky Countdown</h1>
      <TimerWrapper>
        <TimerInput target="min" />
        ：
        <TimerInput target="sec" />
      </TimerWrapper>
      <StartBtn onClick={btnClickHandler} isStop={time.isStop}>
        {time.isStop ? 'Start' : 'Stop'}
      </StartBtn>
    </CountdownWrapper>
  )
}

export default Timer
