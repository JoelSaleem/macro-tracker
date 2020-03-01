import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  max-width: 48px;
  overflow: none;
  text-overflow: ellipsis;   
`

export const Nutrient = ({ value }: { value: number }) => {
  return (
    <Wrapper>
      <span>{value}</span>
    </Wrapper>
  )
}
