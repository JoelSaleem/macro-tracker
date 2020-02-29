import { Input } from './Input'
import { ITargetData } from '../managers/LocalStorageTargetManager'

interface FormInputProps {
  onChange(key: keyof ITargetData, value: number): void
  data: ITargetData
}

export const FormInput = (props: FormInputProps) => {
  return (
    <div>
      <Input id='calories' label='Cals' onChange={props.onChange} value={props.data.calories} />
      <Input id='protein' label='Protein' onChange={props.onChange} value={props.data.protein} />
      <Input id='carbohydrates' label='Carbs' onChange={props.onChange} value={props.data.carbohydrates} />
      <Input id='fats' label='Fats' onChange={props.onChange} value={props.data.fats} />
    </div>
  )
}
