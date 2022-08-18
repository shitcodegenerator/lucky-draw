import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import CloseIcon from '../../assets/icons/close.svg'
import { Backdrop, ContentWrapper, ModalWrapper, TitleWrapper } from './DIalog.style'

const Dialog = ({ children, onClose, title }) => {
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  }, [])

  return domReady
    ? ReactDOM.createPortal(
        <ModalWrapper className="modal">
          <Backdrop onClick={onClose} />
          <div className="modal-content">
            <button onClick={onClose} className="close-btn">
              <img src={CloseIcon} alt="x" />
            </button>
            <TitleWrapper>{title}</TitleWrapper>
            <ContentWrapper>{children}</ContentWrapper>
          </div>
        </ModalWrapper>,
        document.getElementById('dialog'),
      )
    : null
}
export default Dialog
