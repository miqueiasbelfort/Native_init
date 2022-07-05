import { Text } from 'react-native'
import React from 'react'

import CoverImg from "../../assets/cover.png"
import Input  from "../../components/Input"

import { Container, Header, Title } from './styles'

const Home = () => {
  return (
    <Container>
      <Header source={CoverImg}>
        <Input/>
      </Header>
    </Container>
  )
}

export default Home