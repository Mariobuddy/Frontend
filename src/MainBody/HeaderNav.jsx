import React from 'react'
import styled from 'styled-components';
import { UseCustom } from '../Context/MainContext';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {

    const {SingleProduct}=UseCustom();
    const {name}=SingleProduct;


  return (

    <Wrapper>

   <p><NavLink to={'/'} className={'nav'}>Home</NavLink><span>/{name}</span></p>

    </Wrapper>

  )
}

export default HeaderNav;

const Wrapper=styled.div`

height:6vh;
width:100vw;
background-color:#2f2626;
position:sticky;
top:5.1rem;
display:flex;
align-items:center;
z-index: 99999;

p{
    font-size:1.8rem;
    margin-left:2rem;
    cursor:pointer;

.nav{
  color:#FFFFFF;
  text-decoration:none;

}

    span{
        color: #ff3700;
    }
}


`;