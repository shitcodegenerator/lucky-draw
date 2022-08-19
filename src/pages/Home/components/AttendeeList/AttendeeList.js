import Attendee from '../Attendee/Attendee'
import { useSelector } from 'react-redux'
import Loading from '@/components/Loading/Loading'
import { AttendeeListWrapper } from './AttendeeList.style'

const AttendeeList = () => {
  const { attendees, isLoading } = useSelector((state) => state.draw)

  return (
    <AttendeeListWrapper isLoading={isLoading}>
      {isLoading ? <Loading /> : attendees.map((i) => <Attendee key={i.id}>{i}</Attendee>)}
    </AttendeeListWrapper>
  )
}

export default AttendeeList
