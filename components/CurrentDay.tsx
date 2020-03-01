import {
  LocalStorageCurrentDayManager,
  IMeal
} from '../managers/LocalStorageCurrentDayManager'
import { MealAdder } from './MealAdder'
import { useState } from 'react'
import { DisplayMeal } from './DisplayMeal'
import { Card } from './Card'

const {
  listMeals,
  isClient,
  addMeal,
  removeMeal,
  getTotalForDay
} = new LocalStorageCurrentDayManager()

export const CurrentDay = ({ update }: { update(): void }) => {
  let data: IMeal[] = []
  if (isClient()) {
    data = listMeals() || []
  }

  const total = getTotalForDay()
  const onDelete = (idx: number | undefined) => {
    removeMeal(idx)
    update()
  }

  return (
    <Card>
      <div style={{ paddingTop: 6 }}>
        <DisplayMeal
          fats='fats'
          protein='protein'
          carbohydrates='carbs'
          calories='kcal'
          name=''
        />
      </div>

      {data.map((meal, i) => {
        return <DisplayMeal key={i} index={i} {...meal} onDelete={onDelete} />
      })}

      <div style={{ paddingTop: 6 }}>
        <DisplayMeal {...total} name='TOTAL' />
      </div>

      <MealAdder
        onChange={data => {
          addMeal(data)
          update()
        }}
      />
    </Card>
  )
}
