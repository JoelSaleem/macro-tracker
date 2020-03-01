import { LocalStorageCurrentDayManager } from '../managers/LocalStorageCurrentDayManager'
import { LocalStorageTargetManager } from '../managers/LocalStorageTargetManager'

const { getTotalForDay } = new LocalStorageCurrentDayManager()
const { getItem } = new LocalStorageTargetManager()

export const Remaining = () => {
  const target = getItem()
  const total = getTotalForDay()

  const calories = target.calories - total.calories
  const fats = target.fats - total.fats
  const carbohydrates = target.carbohydrates - total.carbohydrates
  const protein = target.protein - total.protein

  return (
    <div>
      <h1>Remaining</h1>
      <div>Calories: {calories}</div>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbohydrates}</div>
      <div>Fats: {fats}</div>
    </div>
  )
}
