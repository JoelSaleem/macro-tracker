import styled from 'styled-components'

const Button = styled.div`
  color: ${props => props.theme.TextColour};
  background-color: ${props => props.theme.BackgroundAccent};
  max-width: 70px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
`

export const ContrastButton = ({
  onClick,
  children
}: {
  onClick: () => void
  children: string
}) => {
  return <Button onClick={onClick}>{children}</Button>
}
