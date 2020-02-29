import styled from 'styled-components'
import { useState, InputHTMLAttributes } from 'react'
import { ITargetData } from '../managers/LocalStorageTargetManager'

const InputElem = styled.input`
  flex: 2;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px red solid;
  background-color: transparent;
  color: white;
  padding-left: 4px
`

const Label = styled.span`
  flex: 1;
`

const Container = styled.div`
  display: flex;
  max-width: 200px;
  align-items: center;
`

interface InputProps {
  label: string
  onChange(key: keyof ITargetData, value: number): void
  value: number
  id: keyof ITargetData
}

export const Input = ({ label, onChange, value, id }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputElem onChange={(e: any) => { onChange(id, +e.target.value || 0)}} value={value}/>
    </Container>
  )
}
