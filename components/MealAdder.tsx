import { Input } from './Input'
import { useState } from 'react'
import { IMeal } from '../managers/LocalStorageCurrentDayManager'
import { FlatBtn } from './FlatBtn'

interface MealAdderProps {
  onChange(data: IMeal): void
}

interface InitialData {
  name: string
  calories: string
  protein: string
  carbohydrates: string
  fats: string
  timestamp: number
}
const defaultData: InitialData = {
  name: '',
  calories: '',
  protein: '',
  carbohydrates: '',
  fats: '',
  timestamp: Date.now()
}

export const MealAdder = (props: MealAdderProps) => {
  const [data, setData] = useState(defaultData)

  const onInputChanged = (
    id: keyof InitialData,
    val: string | number
  ): void => {
    if (id !== 'timestamp') {
      if (val === NaN) {
        val = '0'
      } else {
        val = '' + val
      }
      data[id] = val
    }

    setData({ ...data })
  }

  console.log(data)

  return (
    <div>
      <div style={{ paddingBottom: 12 }}>
        <Input
          id='name'
          label='name'
          onChange={onInputChanged}
          value={data.name}
        />
        <Input
          id='calories'
          label='Cals'
          onChange={onInputChanged}
          value={data.calories}
        />
        <Input
          id='protein'
          label='Protein'
          onChange={onInputChanged}
          value={data.protein}
        />
        <Input
          id='carbohydrates'
          label='Carbs'
          onChange={onInputChanged}
          value={data.carbohydrates}
        />
        <Input
          id='fats'
          label='Fats'
          onChange={onInputChanged}
          value={data.fats}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FlatBtn
          onClick={() => {
            props.onChange({
              name: data.name,
              calories: +data.calories,
              fats: +data.fats,
              protein: +data.protein,
              carbohydrates: +data.carbohydrates,
              timestamp: Date.now()
            })
            setData({ ...defaultData })
          }}
        >
          Save
        </FlatBtn>
      </div>
    </div>
  )
}
