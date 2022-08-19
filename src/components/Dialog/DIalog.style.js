import styled from 'styled-components'
import breakpoints from '@utils/breakpoints'

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
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
    img {
      width: 100%;
      height: 100%;
    }
    :hover {
      transform: scale(1.1);
    }
  }
  .modal-content {
    position: relative;
    width: 70%;
    max-width: 360px;
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

export const TitleWrapper = styled.div`
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

export const ContentWrapper = styled.div`
  padding: 48px 24px 24px;
  text-align: center;
  color: #4d4d4d;
  width: 100%;
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;
`
