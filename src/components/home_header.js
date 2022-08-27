/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import styled from 'styled-components'
import Logo from '../Assets/Logo2.jpg'

const Home_Header = () => {
  return (
    <Header>
        <img src={Logo} alt='logo'/>
        <Title>
            <h1>Media And Broadcasting Unit.</h1>
        </Title>
    </Header>
  )
}

export default Home_Header

const Header = styled.div`
    width:100%;
    min-height:100px;
    display:flex;
    align-items:center;
    position: absolute;
    z-index:1000;
    background-color:rgb(6, 6, 6, 0.8);

    img{
        height:80px;
        padding:0 50px;
        padding-right:0;
    }

`


const Title = styled.div`
    position: relative;
    top:-6px;
    color:whitesmoke;
    font-family: Arial;
    letter-spacing:2px;
    font-size:1.5rem;
    margin:0;
    padding-left:25px;
    &:after{
        content:'Mahinda  Rajapaksha  College Homagama.';
        bottom:-20px;
        position: absolute;
        font-size:1.2rem;
        color:darkgray;
        letter-spacing:normal;
        word-spacing:3px;
    }

`