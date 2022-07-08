import { Text } from 'react-native'
import React from 'react'

import CoverImg from "../../assets/cover.png"
import Input  from "../../components/Input"
import Card from '../../components/Card'

import { Container, Header, Content } from './styles'

const Home = () => {
  return (
    <Container>
      <Header source={CoverImg}>
        <Input placeholder='Pesquisar...'/>
      </Header>
      <Content>
        <Card/>
      </Content>
    </Container>
  )
}

export default Home