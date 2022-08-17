import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import CloseIcon from '../../assets/icons/close.svg'
import breakpoints from '../../utils/breakpoints'

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  .close-btn {
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 12px;
    appearance: none;
    border: none;
    width: 24px;
    height: 24px;
    background: transparent;
    z-index: 1;
    :hover {
      transform: scale(1.1);
    }
  }
  .modal-content {
    position: relative;
    width: 70%;
    border-radius: 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    ${breakpoints('sm')`
      width: 100%;
      padding: 0;
    `}
  }
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 12px 0;
  left: 50%;
  transform: translateX(-50%);
  color: #4d4d4d;
  letter-spacing: 1px;
  border-bottom: 1px solid #eee;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  padding: 48px 24px 24px;
  text-align: center;
  color: #4d4d4d;
  width: 100%;
`

const Dialog = ({ children, onClose, title }) => {
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  }, [])

  return domReady
    ? ReactDOM.createPortal(
        <ModalWrapper className="modal">
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
