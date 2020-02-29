import styled from 'styled-components'

const Contaier = styled.div`
  padding-bottom: 12px;
  cursor: pointer;
`

interface DisplayTargetProps {
  onClick: Function
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
  protein
}: DisplayTargetProps) => {
  return (
    <Contaier>
      <h1>Calories: {calories}</h1>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbs}</div>
      <div>Fats: {fats}</div>
      <button onClick={() => onClick()}>Edit</button>
    </Contaier>
  )
}
