import styled from 'styled-components'
import { useState, InputHTMLAttributes } from 'react'
import { ITargetData } from '../managers/LocalStorageTargetManager'

const InputElem = styled.input`
  flex: 2;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid ${props => props.theme.ForegroundColour};
  background-color: transparent;
  color: white;
  padding-left: 4px;
`

const Label = styled.span`
  justify-self: flex-end;
  padding-right: 12px
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  max-width: 300px;
  align-items: center;
`

interface InputProps {
  label: string
  onChange(key: string, value: number | string): void
  value: number | string
  id: string
}

export const Input = ({ label, onChange, value, id }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputElem
        onChange={(e: any) => {
          onChange(id, e.target.value)
        }}
        value={value}
      />
    </Container>
  )
}
