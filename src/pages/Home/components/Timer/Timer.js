import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  startTimer,
  stopTimerStatus,
  startTimerStatus,
} from '../../../../features/timer/timerSlice'
import { CountdownWrapper, StartBtn, TimerWrapper } from './Timer.style'
import TimerInput from './TimerInput'

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
