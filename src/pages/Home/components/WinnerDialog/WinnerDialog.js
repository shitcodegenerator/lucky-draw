import Avatar from '@/components/Avatar/Avatar'
import Dialog from '@/components/Dialog/Dialog'
import { ButtonWrapper, WinnerContent } from './WinnerDialog.style'

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
