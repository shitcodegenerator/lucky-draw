import styled from 'styled-components'
import breakpoints from '@/utils/breakpoints'

const HomeWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px #c1d4f1;

  ${breakpoints('sm')`
    flex-direction:column;
    padding: 12px 24px;
    width: 80%;
  `}
`

export default HomeWrapper
