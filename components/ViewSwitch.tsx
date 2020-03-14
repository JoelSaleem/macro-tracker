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
  justify-content: space-around;
  padding-right: 16px;
  padding-left: 4px;
`

const Button = styled.div`
  color: ${(props: { theme: { MenuBtnCol: string } }) =>
    props.theme.MenuBtnCol};
  ${baseButtonStyle}
`

const SelectedButton = styled.div`
  ${baseButtonStyle}
  color: ${(props: { theme: {MenuBtnCol: string} }) => props.theme.MenuBtnCol};
  border-bottom: ${props => `1px solid ${props.theme.MenuUnderline};`} 
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
