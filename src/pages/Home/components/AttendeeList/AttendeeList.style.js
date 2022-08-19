import styled from 'styled-components'
import breakpoints from '@/utils/breakpoints'

export const AttendeeListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  height: 40vh;
  overflow-y: auto;
  width: 240px;
  border: 1px solid #c3c3c3;
  margin-left: 24px;
  border-radius: 8px;
  padding-left: 0;
  ${({ isLoading }) =>
    isLoading &&
    `
  display: flex;
  align-items: center;
  justify-content: center
  border: 0;
  `}

  ${breakpoints('sm')`
    margin-left: 0;
    width: 100%;
  `}
`
