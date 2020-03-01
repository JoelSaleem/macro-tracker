import { Input } from './Input'
import { ITargetData } from '../managers/LocalStorageTargetManager'
import styled from 'styled-components'

interface FormInputProps {
  onChange(key: keyof ITargetData, value: number): void
  data: ITargetData
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 34px);
`

export const FormInput = (props: FormInputProps) => {
  return (
    <Wrapper>
      <Input
        id='calories'
        label='Calories:'
        onChange={props.onChange}
        value={props.data.calories}
      />
      <Input
        id='protein'
        label='Protein:'
        onChange={props.onChange}
        value={props.data.protein}
      />
      <Input
        id='carbohydrates'
        label='Carbs:'
        onChange={props.onChange}
        value={props.data.carbohydrates}
      />
      <Input
        id='fats'
        label='Fats:'
        onChange={props.onChange}
        value={props.data.fats}
      />
    </Wrapper>
  )
}
