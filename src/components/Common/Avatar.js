import styled from 'styled-components'

const AvatarWrapper = styled.span`
  width: ${({ size = 48 }) => `${size}px`};
  height: ${({ size = 48 }) => `${size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9a9afa;
  color: #fff;
  border-radius: 100%;
  margin-right: 8px;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`
const Avatar = ({ avatar, id, size }) => {
  return (
    <AvatarWrapper size={size}>
      <img src={avatar} alt={id} />
    </AvatarWrapper>
  )
}

export default Avatar
