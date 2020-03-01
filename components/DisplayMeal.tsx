import { IMeal } from '../managers/LocalStorageCurrentDayManager'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  cursor: pointer;
`

const Info = styled.span`
  flex: 1;
`

interface DisplayMealProps extends IMeal {
  index?: number
  onDelete?: (idx: number | undefined) => void
}

export const DisplayMeal = ({
  name,
  protein,
  carbohydrates,
  fats,
  calories,
  index,
  onDelete
}: DisplayMealProps) => {
  return (
    <Container
      onClick={() => {
        onDelete && onDelete(index)
      }}
    >
      <Info>{name}</Info>
      <Info>Kcal: {calories}</Info>
      <Info>Protein: {protein}</Info>
      <Info>Carbs: {carbohydrates}</Info>
      <Info>Fats: {fats}</Info>
    </Container>
  )
}
