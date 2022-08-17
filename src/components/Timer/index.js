import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startTimer, stopTimer } from '../../features/timer/timerSlice'
import styled from 'styled-components'
import TimerInput from './TimerInput'
import breakpoints from '../../utils/breakpoints'

const CountdownWrapper = styled.div`
  border-right: 2px solid #eee;
  padding-right: 24px;
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

  let timerId = useRef(null)

  const start = () => {
    timerId.current = setInterval(() => {
      dispatch(startTimer())
    }, 1000)
  }

  const clearTimer = () => {
    clearInterval(timerId.current)
    dispatch(stopTimer())
  }

  const memoClearTimer = useCallback(clearTimer, [dispatch])

  useEffect(() => {
    if (time.min === 0 && time.sec === 0 && !time.isStop) {
      onGetDraw()
      memoClearTimer()
    }
  }, [time.min, time.sec, onGetDraw, time.isStop, memoClearTimer])

  const btnClickHandler = () => {
    time.isStop ? start() : memoClearTimer()
  }

  return (
    <CountdownWrapper>
      <h1>Timer</h1>
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
