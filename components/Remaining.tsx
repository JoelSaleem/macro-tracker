import { LocalStorageCurrentDayManager } from '../managers/LocalStorageCurrentDayManager'
import { LocalStorageTargetManager } from '../managers/LocalStorageTargetManager'
import { Card } from './Card'
import { DisplayTarget } from './DisplayTarget'

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
    <Card>
      <DisplayTarget
        calories={calories}
        fats={fats}
        carbohydrates={carbohydrates}
        protein={protein}
      />

      {/* <div>Calories: {calories}</div>
      <div>Protein: {protein}</div>
      <div>Carbs: {carbohydrates}</div>
      <div>Fats: {fats}</div> */}
    </Card>
  )
}
