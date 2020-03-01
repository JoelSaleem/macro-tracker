import { Target } from './Target'
import { CurrentDay } from './CurrentDay'
import { Remaining } from './Remaining'
import { useState } from 'react'

export const Tracker = () => {
  const [version, setVersion] = useState(0)
  const update = () => setVersion(version + 1)

  return (
    <>
      <Target update={update} />
      <CurrentDay update={update} />
      <Remaining />
    </>
  )
}
