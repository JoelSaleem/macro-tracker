import styled from 'styled-components'

export interface ViewSwitchOption {
  text: string
  onClick(): void
  selected: boolean
}

const Button = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  max-width: 100px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  :hover {
      background-color: rgba(255, 255, 255, 0.2);
  }

  :active {
    background-color: rgba(255, 255, 255, 0.4);
}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ViewSwitch = ({ options }: { options: ViewSwitchOption[] }) => {
  return (
    <Container>
      {options.map((opt: ViewSwitchOption) => {
        return (
          <Button key={opt.text} onClick={opt.onClick}>
            {opt.text}
          </Button>
        )
      })}
    </Container>
  )
}
