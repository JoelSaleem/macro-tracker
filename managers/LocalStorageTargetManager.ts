export interface ITargetData {
  calories: number
  protein: number
  carbohydrates: number
  fats: number
}

export class LocalStorageTargetManager {
  isClient = (): boolean => {
    return typeof window !== 'undefined'
  }

  getKey(): string {
    return 'MacroTracker__target'
  }

  getDefaultData = (): ITargetData => {
    return {
      calories: 0,
      fats: 0,
      protein: 0,
      carbohydrates: 0
    }
  }

  setItem = (key: keyof ITargetData, value: number): void => {
    if (this.isClient()) {
      const rawData = this.getItem()
      rawData[key] = +value
      const data = JSON.stringify(rawData)

      localStorage.setItem(this.getKey(), JSON.stringify(data))
    }
  }

  getMacro = (key: keyof ITargetData): number | undefined => {
    const data = this.getItem() || {}

    return data[key]
  }

  getItem = (): ITargetData => {
    let strData = ''
    if (this.isClient()) {
      strData = localStorage.getItem(this.getKey()) || ''
    }

    if (strData) {
      return JSON.parse(JSON.parse(strData))
    }

    return this.getDefaultData()
  }
}
