/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import styled from 'styled-components'

const Home_Body = () => {
  return (
    <Container>
        <Glass>
            <Left_Side>
                <Body_Text>
                    <h1>Let's Join Us.</h1>
                </Body_Text>
                <Sign_Button>
                    <button>Sign Up</button>
                </Sign_Button>
            </Left_Side>
            <Right_Side>
                <h2>An Authorized User ?</h2>
                <Form>
                    <form>
                        <label for='username'>UserName :</label>
                        <input id='username' type='text'></input>

                        
                        <label for='password'>Password :</label>
                        <input id='password' type='password'></input>

                        <button type='submit'>Log In</button>
                    </form>
                </Form>
            </Right_Side>
        </Glass>
    </Container>
  )
}

export default Home_Body;

const Form = styled.div`
    padding-top:50px;
    padding-bottom:50px;
    position:relative;
    margin:auto;
    width:90%;
    height:100%;
    input , label , button{
        font-family:Poppins;
        color:whitesmoke;
        width:95%;
        margin:10px;
        background:transparent;
    }

    input{
        padding: 5px 20px;
        outline:none;
        border:none;
        border-bottom:2px solid whitesmoke;
        font-weight:100;
    }

    button{
        margin-top:50px;
        padding: 10px 0;
        border-radius:35px;
        border:2px solid whitesmoke;
        font-size:1.5rem;

        &:hover{
            background:whitesmoke;
            color:black;
            cursor:pointer;
        }

        &:active{
            background:transparent;
            color:whitesmoke;
        }
    }
`


const Right_Side = styled.div`
    float:right;
    position:relative;
    top:25%;
    right:10%;
    width:500px;
    height:fit-content;
    padding:30px 5px;
    background:linear-gradient(135deg ,rgba(2,45,30,0.3),rgba(10,1,10,0.8));
    backdrop-filter:border-top-left-radius(10px);
    -webkit-backdrop-filter:blur(10px);
    border-radius:30px;
    border:1px solid rgba(2,45,30,0.5);
    box-shadow: 0 8px 5px 0 rgba(10,1,10,0.8);

    

    h2{
        font-family:Poppins;
        color:whitesmoke;
        font-size:1.8rem;
        text-align:center;
    }


`

const Left_Side = styled.div`
    float:left;
    z-index:998;
    position: relative;
    width:fit-content;
    top:40%;
    left:10%;
    display:flex;
    flex-direction:column;
    height:200px;
    padding:10px;

`

const Glass = styled.div`

    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    z-index:999;
    background:linear-gradient(rgba(10,1,10,100%),rgba(2,45,30,100%));
    
`


const Body_Text = styled.div`
    font-family:Poppins;
    color:white;
    font-size:2.0rem;

`



const Sign_Button = styled.div`
    color:white;
    
    button{
        font-family:Poppins;
        padding:10px 30px;
        background-color:transparent;
        color:white;
        border-radius:30px;
        border: 2px solid white;
        text-transform:uppercase;
        font-size:1.2rem;
        &:hover{
            background:whitesmoke;
            color:black;
            cursor:pointer;
        }

        &:active{
            background:transparent;
            color:whitesmoke;
        }

    }


`


const Container = styled.div`
    z-index:997;
`


