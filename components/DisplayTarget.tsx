import styled from 'styled-components'
import { FlatBtn } from './FlatBtn'

const Container = styled.div`
  padding-bottom: 12px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-template-rows: repeat(4, 34px);
` 

const Title = styled.span`
  justify-self: flex-end;
  padding-right: 12px;
`

interface DisplayTargetProps {
  onClick?: Function
  showEdit?: boolean
  calories: number
  protein: number
  fats: number
  carbohydrates: number
}

export const DisplayTarget = ({
  onClick,
  calories,
  fats,
  carbohydrates: carbs,
  protein,
  showEdit
}: DisplayTargetProps) => {
  return (
    <div>
      <Container>
        <Title>Calories:</Title>
        <span> {calories}</span>
        <Title>Protein:</Title>
        <span> {protein}</span>
        <Title>Carbs:</Title>
        <span> {carbs}</span>
        <Title>Fats:</Title>
        <span> {fats}</span>
      </Container>
      {showEdit && <FlatBtn onClick={() => onClick && onClick()}>Edit</FlatBtn>}
    </div>
  )
}
