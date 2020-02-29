import styled from 'styled-components'

const Contaier = styled.div`
  padding-bottom: 12px;
  cursor: pointer;
`

export const DisplayTarget = ({ onClick, calories, fats, carbs, protein }) => {
  return (
    <Contaier onClick={onClick}>
      <h1>Calories: {calories}</h1>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbs}</div>
      <div>Fats: {fats}</div>
    </Contaier>
  )
}
