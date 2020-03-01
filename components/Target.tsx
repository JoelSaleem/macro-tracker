import { useState, useEffect, useLayoutEffect } from 'react'
import { DisplayTarget } from './DisplayTarget'
import { TargetEdit } from './TargetEdit'
import {
  LocalStorageTargetManager,
  ITargetData
} from '../managers/LocalStorageTargetManager'

export const defaultData = {
  calories: 0,
  fats: 0,
  protein: 0,
  carbohydrates: 0
}

const { getItem, setItem } = new LocalStorageTargetManager()

export const Target = ({ update }: { update(): void }) => {
  const [isEditing, setIsEditing] = useState(false)
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
            update()
          }}
        />
        <button onClick={toggleIsEditing}>Save</button>
      </>
    )
  }

  return <DisplayTarget onClick={toggleIsEditing} {...data} />
}
