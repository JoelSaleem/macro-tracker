import styled from 'styled-components'

const Button = styled.div`
  color: ${props => props.theme.MenuBtnCol};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: 24px;
  margin-right: 12px;
  max-width: 600px;
  background-color: ${props => props.theme.ForegroundColour};
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.ForegroundAccent1};
  }

  :active {
    background-color: ${props => props.theme.ForegroundAccent2};
  }
`

export const FlatBtn = ({
  children,
  onClick
}: {
  children: any
  onClick(): void
}) => {
  return <Button onClick={onClick}>{children}</Button>
}
