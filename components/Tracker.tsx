import { Target } from './Target'
import { CurrentDay } from './CurrentDay'
import { Remaining } from './Remaining'
import { useState } from 'react'
import { ViewSwitch, ViewSwitchOption } from './ViewSwitch'

export enum View {
  Target,
  CurrentDay,
  Remaining
}

export const Tracker = () => {
  const [version, setVersion] = useState(0)
  const [view, setView] = useState(View.Remaining)
  const update = () => setVersion(version + 1)

  const options: ViewSwitchOption[] = [
    {
      text: 'Target',
      onClick() {
        setView(View.Target)
      },
      selected: view === View.Target
    },
    {
      text: 'Today',
      onClick() {
        setView(View.CurrentDay)
      },
      selected: view === View.CurrentDay
    },
    {
      text: 'Remaining',
      onClick() {
        setView(View.Remaining)
      },
      selected: view === View.Remaining
    }
  ]

  return (
    <>
      <ViewSwitch options={options} />
      {view === View.Target && <Target update={update} />}
      {view === View.CurrentDay && <CurrentDay update={update} />}
      {view === View.Remaining && <Remaining />}
    </>
  )
}
