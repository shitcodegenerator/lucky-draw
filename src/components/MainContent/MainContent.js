import styled from 'styled-components'
import Timer from '../Timer'
import AttendeeList from '../AttendeeList'
import { useEffect, useState } from 'react'
import Dialog from '../Dialog'
import { useSelector, useDispatch } from 'react-redux'
import { getWinner, generateFakeData } from '../../features/draw/drawSlice'

const Wrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px #c1d4f1;
`

const MainContent = () => {
  const draw = useSelector((state) => state.draw)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)

  const getDraw = () => {
    dispatch(getWinner())
    setIsOpen(true)
  }

  return (
    <Wrapper>
      <Timer onGetDraw={getDraw} />
      <AttendeeList attendees={draw.attendees} />
      {isOpen && (
        <Dialog onClose={() => setIsOpen(false)} title="抽獎結果">
          <p>
            恭喜
            <span>{draw.winner?.name}</span>
            幸運中獎
          </p>
        </Dialog>
      )}
    </Wrapper>
  )
}

export default MainContent
