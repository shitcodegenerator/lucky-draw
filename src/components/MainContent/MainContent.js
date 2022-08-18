import styled from 'styled-components'
import Timer from '../Timer'
import AttendeeList from '../AttendeeList'
import { useState, useEffect } from 'react'
import WinnerDialog from '../WinnerDialog'
import { useSelector, useDispatch } from 'react-redux'
import { getWinner, fetchAttendees } from '../../features/draw/drawSlice'
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
  const dispatch = useDispatch()
  const winner = useSelector((state) => state.draw.winner)

  const [isOpen, setIsOpen] = useState(false)

  /** 抽獎 */
  const getDraw = () => {
    dispatch(getWinner())
    setIsOpen(true)
  }

  /** 關閉彈窗 && 時間重置 */
  const reset = () => {
    setIsOpen(false)
    dispatch(setTime({ target: 'min', value: 5 }))
  }

  useEffect(() => {
    dispatch(fetchAttendees())
  }, [dispatch])

  return (
    <Wrapper>
      <Timer onGetDraw={getDraw} />
      <AttendeeList />
      {isOpen && <WinnerDialog winner={winner} onReset={reset}></WinnerDialog>}
    </Wrapper>
  )
}

export default MainContent
