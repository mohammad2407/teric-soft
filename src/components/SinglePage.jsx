import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import { getData } from '../redux/Action'


export const SinglePage = () => {


const buttons = useSelector(state => state.buttons)
const wholeData = useSelector(state => state.wholeData)
const dispatch = useDispatch()
console.log(buttons)
console.log(wholeData)

const getData = async(button) => {
 const value = button.target.innerText
  await fetch(`http://localhost:3002/${value}`)
  .then(response => response.json())
  .then(res => dispatch(getData(res)))
}
useEffect(() =>{
  getData()
},[getData,wholeData])


  return (
    <Container>
      
      <ButtonsContainer>
        {
          buttons.map((button) => {
            return(
              <button onClick = {(e)=>getData(e)}>{button}</button>
            )
            
          })
        }
      </ButtonsContainer>

        <CardContainer>
          {
            wholeData.map((data) => {
              return(
              <Card >
                <img src={data.img} alt="" />
                <Image imgurl = {data.img}></Image>
                <div className = 'transparent-div'>
                  <p>{data.heading}</p>

                  <div className = 'flex-div'>
                    <button>{data.btn1}</button>
                    <button>{data.btn2}</button>

                  </div>
                </div>
              </Card>
              )
            })
          }
        </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%
`

const ButtonsContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  button {
    margin:30px;
    width:10%;
    height:30px;
    outline:none;
    background-color: #686363;
    border-color:#686363;
    color:#fff;
  }
`
const CardContainer = styled.div`
  display:flex;
  flex-direction:row;
  

`
const Image = styled.div`
  background: url(${props => props.imgUrl});
`

const Card = styled.div`
  width:20%;
  height:350px;
  margin:20px;
  box-shadow: 1px  2px 0px #383838;
  img{
    width:100%;
    height:100%;
  }

  .transparent-div{
    margin-top:-150px;
    background: black;
    z-index:10;
    position:absolute;
    color: #f8f4f4;
    width:20%;
    height:22%;
    opacity:0.4;
    
    p{
      font-weight:600;
      line-height:24px;
      font-size:18px;
    }
    
    .flex-div{
      display:flex;
      justify-content:space-between;
      button {
        margin:20px;
        color: black;
        opacity:1;
        font-weight:bold;
        height:20px;
      }
    }
  }
`
