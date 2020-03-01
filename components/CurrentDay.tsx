import {
  LocalStorageCurrentDayManager,
  IMeal
} from '../managers/LocalStorageCurrentDayManager'
import { MealAdder } from './MealAdder'
import { useState } from 'react'
import { DisplayMeal } from './DisplayMeal'

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

  return (
    <div>
      <div>Current Day</div>
      {data.map((meal, i) => {
        return (
          <DisplayMeal
            key={i}
            index={i}
            {...meal}
            onDelete={(idx: number | undefined) => {
              removeMeal(idx)
              update()
            }}
          />
        )
      })}
      <DisplayMeal {...total} timestamp={0} name='TOTAL' />
      <MealAdder
        onChange={data => {
          addMeal(data)
          update()
        }}
      />
    </div>
  )
}
