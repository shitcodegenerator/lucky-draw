import styled from 'styled-components'
import breakpoints from '../../../../utils/breakpoints'

export const CountdownWrapper = styled.div`
  border-right: 2px solid #eee;
  padding-right: 24px;
  h1 {
    color: #d45fa6;
  }
  ${breakpoints('sm')`
    border-right: none;
    padding-right: 0;
    width: 100%;
  `}
`

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`

export const StartBtn = styled.div`
  border-radius: 100px;
  font-weight: bold;
  padding: 16px;
  margin-top: 16px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ isStop }) => (isStop ? '#014dc6' : '#fff')};
  background-image: ${({ isStop }) =>
    isStop
      ? 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'
      : 'linear-gradient(120deg,#fda1a1 0%,#f55a5a 100%)'};

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 8px #c1d4f1;
  }
`
