import React from 'react'
import { TextInputProps } from 'react-native'
import {Container} from "./style"

export default function index({...rest}: TextInputProps) {
  return (
    <Container {...rest}/>
  )
}