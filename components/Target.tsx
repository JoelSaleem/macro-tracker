import { useState, useEffect, useLayoutEffect } from 'react'
import { DisplayTarget } from './DisplayTarget'
import { TargetEdit } from './TargetEdit'
import {
  LocalStorageTargetManager,
  ITargetData,
} from '../managers/LocalStorageTargetManager'
import { Card } from './Card'
import { FlatBtn } from './FlatBtn'

export const defaultData = {
  calories: 0,
  fats: 0,
  protein: 0,
  carbohydrates: 0,
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

  let Target = <DisplayTarget showEdit onClick={toggleIsEditing} {...data} />

  if (isEditing) {
    Target = (
      <div style={{ width: '100%' }}>
        <div style={{ paddingBottom: 12 }}>
          <TargetEdit
            toggleIsEditing={toggleIsEditing}
            data={data}
            onChange={(key: keyof ITargetData, value: number) => {
              setItem(key, value)
              update()
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FlatBtn onClick={toggleIsEditing}>Save</FlatBtn>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <Card>{Target}</Card>
      <Card>
        <b>Gaining Weight</b>
        <p>
          When gaining weight, aim to gain 0.5-1% of bodyweight per <b>month</b>
          .
        </p>
        <b>Losing Weight</b>
        <p>
          When loosing weight, aim to gain 0.5-1% of bodyweight per <b>week</b>.
        </p>
      </Card>
    </div>
  )
}
