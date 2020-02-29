import { useState, useEffect, useLayoutEffect } from 'react'
import { DisplayTarget } from './DisplayTarget'
import { TargetEdit } from './TargetEdit'
import {
  LocalStorageManager,
  ITargetData
} from '../managers/LocalStorageTargetManager'

export const defaultData = {
  calories: 0,
  fats: 0,
  protein: 0,
  carbohydrates: 0
}

const { getItem, setItem } = new LocalStorageManager()

export const Target = () => {
  const [isEditing, setIsEditing] = useState(false)
  let [version, setVersion] = useState(0)
  const toggleIsEditing = () => setIsEditing(!isEditing)
  // TODO: USE CALLBACK HOOK

  let data = defaultData
  if (typeof window !== undefined) {
    data = getItem()
  }

  if (isEditing) {
    return (
      <>
        <TargetEdit
          toggleIsEditing={toggleIsEditing}
          data={data}
          onChange={(key: keyof ITargetData, value: number) => {
            setItem(key, value)
            setVersion(++version) // Trigger re-render
          }}
        />
        <button onClick={toggleIsEditing}>Save</button>
      </>
    )
  }

  return <DisplayTarget onClick={toggleIsEditing} {...data} />
}
