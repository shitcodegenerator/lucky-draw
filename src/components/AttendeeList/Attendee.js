import styled from 'styled-components'

const AttendeeWrapper = styled.li`
  line-height: 2;
  border-bottom: 1px solid #c3c3c3;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  color: #4d4d4d;

  .id-circle {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #9a9afa;
    color: #fff;
    border-radius: 100%;
    margin-right: 8px;
  }
`

const Attendee = ({ children }) => {
  return (
    <AttendeeWrapper>
      <span className="id-circle">{children.id}</span>
      <span>{children.name}</span>
    </AttendeeWrapper>
  )
}

export default Attendee
