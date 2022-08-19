import Avatar from '@/components/Avatar/Avatar'
import { AttendeeWrapper } from './Attendee.style'

const Attendee = ({ children }) => {
  return (
    <AttendeeWrapper>
      <Avatar avatar={children.avatar} id={children.id} />
      <span>{children.name}</span>
    </AttendeeWrapper>
  )
}

export default Attendee
