import styled from 'styled-components'
import { Target } from './Target'
import { CurrentDay } from './CurrentDay'
import { Remaining } from './Remaining'
import { useState } from 'react'
import { ViewSwitch, ViewSwitchOption } from './ViewSwitch'

export enum View {
  Target,
  CurrentDay,
  Remaining,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`

const CardWrapper = styled.div`
  flex: 1;
  max-width: 700px;
  width: 100%;
  display: flex;
`

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
      selected: view === View.Target,
    },
    {
      text: 'Today',
      onClick() {
        setView(View.CurrentDay)
      },
      selected: view === View.CurrentDay,
    },
    {
      text: 'Remaining',
      onClick() {
        setView(View.Remaining)
      },
      selected: view === View.Remaining,
    },
  ]

  return (
    <>
      <ViewSwitch options={options} />
      <Container>
        {view === View.Target && (
          <CardWrapper>
            <Target update={update} />
          </CardWrapper>
        )}
        {view === View.CurrentDay && (
          <CardWrapper>
            <CurrentDay update={update} />
          </CardWrapper>
        )}
        {view === View.Remaining && (
          <CardWrapper>
            <Remaining />
          </CardWrapper>
        )}
      </Container>
    </>
  )
}
