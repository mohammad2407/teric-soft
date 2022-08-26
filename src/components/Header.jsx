import React,{useEffect} from 'react'
import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'
import {GiPocketBow} from 'react-icons/gi'
import {TbSwimming}  from 'react-icons/tb'
import {GiCycling} from 'react-icons/gi'
import {GiHorseHead} from 'react-icons/gi'
import {GiAcrobatic} from 'react-icons/gi'
import {MdGolfCourse} from 'react-icons/md'
import {FaDumbbell} from 'react-icons/fa'
import {TbSailboat} from 'react-icons/tb'

import {useDispatch} from 'react-redux'
import { cycleBtn, getData } from '../redux/Action'
import {axios} from 'axios'
import { SinglePage } from './SinglePage'
export default function Header() {
    const dispatch = useDispatch()

    const getCycle = async() =>{
        const buttons = ['BMX','Mountain', 'Road']
         dispatch(cycleBtn(buttons))
        console.log('clicked')
         await fetch("http://localhost:3002/Mountain")
         .then(response => (response.json()))
         .then(res => dispatch(getData(res)))
    }
    useEffect(() =>{
        getCycle()
    },[dispatch,getData])
  return (
    <Container>
    <HeaderContainer>
        <HeaderBlocks>

            <AiFillStar className = 'react-icon star' />
            <div>Frestand</div>
        </HeaderBlocks>
        <HeaderBlocks >
            <GiPocketBow className = 'react-icon' />
        </HeaderBlocks>
        <HeaderBlocks>
            <TbSwimming className = 'react-icon'/>
        </HeaderBlocks>
        <HeaderBlocks onClick ={getCycle}>
            <GiCycling className = 'react-icon' />
        </HeaderBlocks>
        <HeaderBlocks>
            <GiHorseHead className = 'react-icon' />
        </HeaderBlocks>
        <HeaderBlocks>
            <GiAcrobatic className = 'react-icon' />
        </HeaderBlocks>
        <HeaderBlocks>
            <MdGolfCourse className = 'react-icon' />
        </HeaderBlocks>
        <HeaderBlocks>
            <FaDumbbell className = 'react-icon' />
        </HeaderBlocks>
        <HeaderBlocks>
            <TbSailboat className = 'react-icon' />
        </HeaderBlocks>

    </HeaderContainer>

    <SinglePage />
    </Container>
  )
}
const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`
const HeaderContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: #312d2d;
    display:grid;
    grid-template-columns: repeat(9,3fr);
    gap:0px;
    padding-bottom:20px;
   border-bottom: 4px solid black;
`

const HeaderBlocks = styled.div`
    width: 96%;
    border-radius: 70%;
    background:#3f3e3eb3;
    position:relative;
    display:flex;
    flex-direction:column;
    gap:0px;
    align-items:center;
    justify-content:center;
    opacity:0.5;
    transition: 0.1s ease-in-out;
  div{
      /* margin-top:-22px; */
}
:hover {
    opacity:1;
}
.react-icon{
        color: #726f6f;
        margin:auto;
        width:90%;
        height:50%;
        text-align:center;
        /* border:1px solid white; */


    }
    .star{
        height:60%;
        color: #aaaa56;
        
    }
`
