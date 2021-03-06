import { FormInput } from './FormInput'
import { ITargetData } from '../managers/LocalStorageTargetManager'

interface TargetEditProps {
  toggleIsEditing(): void
  data: ITargetData
  onChange(key: keyof ITargetData, value: number): void
}

export const TargetEdit = (props: TargetEditProps) => {
  return (
    <>
      <FormInput onChange={props.onChange} data={props.data} />
    </>
  )
}
