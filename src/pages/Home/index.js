import Timer from './components/Timer/Timer'
import AttendeeList from './components/AttendeeList/AttendeeList'
import { useState, useEffect } from 'react'
import WinnerDialog from './components/WinnerDialog/WinnerDialog'
import { useSelector, useDispatch } from 'react-redux'
import { getWinner, fetchAttendees } from '@/features/draw/drawSlice'
import { setTime } from '@/features/timer/timerSlice'
import HomeWrapper from './index.style'

const Home = () => {
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
    <HomeWrapper>
      <Timer onGetDraw={getDraw} />
      <AttendeeList />
      {isOpen && <WinnerDialog winner={winner} onReset={reset}></WinnerDialog>}
    </HomeWrapper>
  )
}

export default Home
