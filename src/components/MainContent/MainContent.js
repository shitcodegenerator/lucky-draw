import styled from 'styled-components'
import Timer from '../Timer'
import AttendeeList from '../AttendeeList'
import { useState } from 'react'
import WinnerDialog from '../WinnerDialog'
import { useSelector, useDispatch } from 'react-redux'
import { getWinner } from '../../features/draw/drawSlice'
import { setTime } from '../../features/timer/timerSlice'
import breakpoints from '../../utils/breakpoints'

const Wrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px #c1d4f1;

  ${breakpoints('sm')`
    flex-direction:column;
    padding: 12px 24px;
    width: 80%;
  `}
`

const MainContent = () => {
  const draw = useSelector((state) => state.draw)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)

  const getDraw = () => {
    dispatch(getWinner())
    setIsOpen(true)
  }

  const reset = () => {
    setIsOpen(false)
    dispatch(setTime({ target: 'min', value: 5 }))
  }

  return (
    <Wrapper>
      <Timer onGetDraw={getDraw} />
      <AttendeeList attendees={draw.attendees} />
      {isOpen && <WinnerDialog winner={draw.winner} onReset={reset}></WinnerDialog>}
    </Wrapper>
  )
}

export default MainContent
