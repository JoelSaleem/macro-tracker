export interface IMeal {
  calories: number
  protein: number
  carbohydrates: number
  fats: number
  name: string
  timestamp: number
}

export class LocalStorageCurrentDayManager {
  constructor() {
    const currData = this.listMeals()

    if (!currData && this.isClient()) {
      localStorage.setItem(this.getKey(), JSON.stringify([]))
    }
  }

  isClient = (): boolean => {
    return typeof window !== 'undefined'
  }

  getKey = (): string => {
    return 'MacroTracker__current'
  }

  addMeal = (meal: IMeal): void => {
    const meals: IMeal[] | null = this.listMeals() || []
    meals.push(meal)

    if (this.isClient()) {
      localStorage.setItem(this.getKey(), JSON.stringify(meals))
    }
  }

  removeMeal = (idx: number | undefined): void => {
    if (idx == null) {
      return
    }
    let meals: IMeal[] = this.listMeals() || []

    delete meals[idx]
    meals = meals.filter(Boolean)

    if (this.isClient()) {
      localStorage.setItem(this.getKey(), JSON.stringify(meals))
    }
  }

  getTotalForDay = () => {
    const data = this.listMeals() || []
    const total: IMeal = {
      calories: 0,
      protein: 0,
      fats: 0,
      carbohydrates: 0,
      name: 'total',
      timestamp: 0
    }

    data.forEach((meal: IMeal) => {
      const { calories, protein, fats, carbohydrates } = meal || {}
      total.calories += calories || 0
      total.protein += protein || 0
      total.fats += fats || 0
      total.carbohydrates += carbohydrates || 0
    })

    return total
  }

  listMeals = (): IMeal[] | null => {
    let rawData = ''
    if (this.isClient()) {
      rawData = localStorage.getItem(this.getKey()) || ''
    }

    let data: IMeal[] | null = null
    if (rawData) {
      data = JSON.parse(rawData)
      return data
    }

    return []
  }
}
