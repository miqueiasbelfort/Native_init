import React from 'react'

import {Container, Image, Title, Foundation} from "./style"

import unitedImg from "../../assets/united.png"

export default function Card() {
  return (
    <Container
        animation="slideInDown"
        duration={2000}
    >
        <Image 
            source={unitedImg} 
            resizeMode="contain"
            animation="pulse"
            iterationCount="infinite"
        />
        <Title>Manchester United</Title>
        <Foundation>1878</Foundation>
    </Container>
  )
}
