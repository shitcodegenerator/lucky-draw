import styled from 'styled-components'
import Dialog from '../Dialog'

const WinnerContent = styled.div`
  width: 100%;
  span {
    color: #affa9a;
    margin: 0 4px;
    font-weight: bold;
  }

  button {
    appearance: none;
    background: linear-gradient(120deg, #a1fda7 0%, #d2ffd5 100%);
    border-radius: 100px;
    width: 100%;
    padding: 12px;
    border: none;
    margin-top: 48px;
    color: #72c878;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 4px;
    cursor: pointer;
  }
`

const WinnerDialog = ({ onReset, winner }) => {
  return (
    <Dialog onClose={onReset} title="抽獎結果">
      <WinnerContent>
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
