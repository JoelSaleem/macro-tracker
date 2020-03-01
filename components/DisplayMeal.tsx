import { IMeal } from '../managers/LocalStorageCurrentDayManager'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  cursor: pointer;
  padding-top: 6px;
  padding-bottom: 6px;
  justify-content: space-evenly;
`

const Info = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 48px;
`

interface DisplayMealProps {
  name: string
  fats: number | string
  protein: number | string
  calories: number | string
  carbohydrates: number | string
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
      <Info>{calories}</Info>
      <Info>{protein}</Info>
      <Info>{carbohydrates}</Info>
      <Info>{fats}</Info>
    </Container>
  )
}
