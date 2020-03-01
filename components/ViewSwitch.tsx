import styled from 'styled-components'

export interface ViewSwitchOption {
  text: string
  onClick(): void
  selected: boolean
}

const baseButtonStyle = `
  width: 100px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 4px;

  :hover {
      color: rgba(255, 255, 255, 0.2);
  }

  :active {
    color: rgba(255, 255, 255, 0.4);
}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 4px;
`

const Button = styled.div`
  ${baseButtonStyle}
`

const SelectedButton = styled.div`
  ${baseButtonStyle}
  border-bottom: ${props => `1px solid ${props.theme.ForegroundColour};`} 
`

export const ViewSwitch = ({ options }: { options: ViewSwitchOption[] }) => {
  return (
    <Container>
      {options.map((opt: ViewSwitchOption) => {
        if (opt.selected) {
          return (
            <SelectedButton key={opt.text} onClick={opt.onClick}>
              {opt.text}
            </SelectedButton>
          )
        }

        return (
          <Button key={opt.text} onClick={opt.onClick}>
            {opt.text}
          </Button>
        )
      })}
    </Container>
  )
}
