import styled from 'styled-components'
import Attendee from './Attendee'
import { useSelector, useDispatch } from 'react-redux'
import { generateFakeData } from '../../features/draw/drawSlice'
import { useEffect } from 'react'
import breakpoints from '../../utils/breakpoints'

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

  ${breakpoints('sm')`
    margin-left: 0;
    width: 100%;
  `}
`

const AttendeeList = () => {
  const dispatch = useDispatch()
  const attendees = useSelector((state) => state.draw.attendees)
  useEffect(() => {
    dispatch(generateFakeData())
  }, [dispatch])
  return (
    <AttendeeContainer>
      {attendees.map((i) => (
        <Attendee key={i.id}>{i}</Attendee>
      ))}
    </AttendeeContainer>
  )
}

export default AttendeeList
