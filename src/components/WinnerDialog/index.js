import styled from 'styled-components'
import Avatar from '../Common/Avatar'
import Dialog from '../Dialog'
import breakpoints from '../../utils/breakpoints'

const WinnerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  span {
    color: #affa9a;
    margin: 0 4px;
    font-weight: bold;
  }
`
const ButtonWrapper = styled.button`
  appearance: none;
  background: ${({ type }) =>
    type === 'cancel' ? '#ddd' : 'linear-gradient(120deg, #a1fda7 0%, #d2ffd5 100%)'};
  color: ${({ type }) => (type === 'cancel' ? '#777' : '#72c878')};
  border-radius: 100px;
  padding: 8px 0;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 4px;
  cursor: pointer;
  width: 180px;
  &:first-of-type {
    margin: 48px auto 12px auto;
  }
  ${breakpoints('sm')`
    width: 100%;
    padding: 12px;
  `}
`

const WinnerDialog = ({ onReset, winner }) => {
  return (
    <Dialog onClose={onReset} title="抽獎結果">
      <WinnerContent>
        <Avatar size={120} avatar={winner.avatar} id={winner.id} />
        <p>
          恭喜
          <span>{winner?.name}</span>
          幸運中獎
        </p>
        <ButtonWrapper onClick={onReset}>再抽一次</ButtonWrapper>
        <ButtonWrapper onClick={onReset} type="cancel">
          取消
        </ButtonWrapper>
      </WinnerContent>
    </Dialog>
  )
}

export default WinnerDialog
