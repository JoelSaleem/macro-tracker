import styled from 'styled-components'
import { Tracker } from './Tracker'

const Layout = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 50px 1fr;
`
const BodyContainer = styled.div`
  grid-area: 2/2/3/3;
`

export default () => {
  return (
    <Layout>
      <div>Navbar</div>
      <h1>TItle</h1>
      <BodyContainer>
        <Tracker />
      </BodyContainer>
    </Layout>
  )
}
