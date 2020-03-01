import { Input } from './Input'
import { useState } from 'react'
import { IMeal } from '../managers/LocalStorageCurrentDayManager'
import { FlatBtn } from './FlatBtn'

interface MealAdderProps {
  onChange(data: IMeal): void
}

const defaultData: IMeal = {
  name: '',
  calories: 0,
  protein: 0,
  carbohydrates: 0,
  fats: 0,
  timestamp: Date.now()
}

export const MealAdder = (props: MealAdderProps) => {
  const [data, setData] = useState(defaultData)

  const onInputChanged = (id: keyof IMeal, val: string | number): void => {
    if (id === 'name' && typeof val === 'string') {
      data[id] = val
    } else if (id !== 'name') {
      if (val === NaN) {
        val = 0
      }
      data[id] = +val
    }

    setData({ ...data })
  }

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
      <FlatBtn
        onClick={() => {
          props.onChange({ ...data, timestamp: Date.now() })
          setData({ ...defaultData })
        }}
      >
        Save
      </FlatBtn>
    </div>
  )
}
