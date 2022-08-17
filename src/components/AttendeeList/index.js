import styled from 'styled-components'
import Attendee from './Attendee'
import { useSelector, useDispatch } from 'react-redux'
import { getWinner, generateFakeData } from '../../features/draw/drawSlice'
import { useEffect } from 'react'

const AttendeeContainer = styled.ul`
  list-style: none;
  text-align: left;
  height: 40vh;
  overflow-y: auto;
  width: 200px;
  border: 1px solid #c3c3c3;
  margin-left: 24px;
  border-radius: 8px;
  padding-left: 0;
`

const AttendeeList = () => {
  const dispatch = useDispatch()
  const attendees = useSelector((state) => state.draw.attendees)
  useEffect(() => {
    dispatch(generateFakeData())
  }, [])
  return (
    <AttendeeContainer>
      {attendees.map((i) => (
        <Attendee key={i.id}>{i}</Attendee>
      ))}
    </AttendeeContainer>
  )
}

export default AttendeeList
