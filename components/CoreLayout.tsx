import styled from 'styled-components'
import { Tracker } from './Tracker'

const Layout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 50px 1fr;
`
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
