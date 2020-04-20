import styled from 'styled-components'
import { Tracker } from './Tracker'

const BodyContainer = styled.div`
  padding-left: 12px;
  padding-top: 12px;
`

export default () => {
  return (
    <BodyContainer>
      <Tracker />
    </BodyContainer>
  )
}
