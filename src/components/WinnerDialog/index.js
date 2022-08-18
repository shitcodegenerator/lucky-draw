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

  button {
    appearance: none;
    background: linear-gradient(120deg, #a1fda7 0%, #d2ffd5 100%);
    border-radius: 100px;
    padding: 12px 48px;
    border: none;
    margin-top: 48px;
    color: #72c878;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 4px;
    cursor: pointer;
    ${breakpoints('sm')`
      width: 100%;
      padding: 12px;
    `}
  }
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
        <button onClick={onReset}>再抽一次</button>
      </WinnerContent>
    </Dialog>
  )
}

export default WinnerDialog
