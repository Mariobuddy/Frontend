import React,{useEffect} from 'react'
import styled from 'styled-components';
import { Button } from '../Header/Header';

const HomeImage = () => {
    let name='Mario Store';

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <Wrapper>

      <div className='infodiv'>
        <p className='wel'>WELCOME TO</p>
        <h1>{name}</h1>
        <p className='para'>{name} is providing you all kinds of alchahol at very low cost.You have to just placed you order and we will delivery you within 2-3 days at your home without any extra charges.</p>
        <Button className='buts'>SHOP NOW</Button>

      </div>
      <div className='imgdiv'>
        <div className='colordiv'></div>
        <img alt='error' src='images/alchaholmain2.jpg'/>
      </div>


    </Wrapper>
  )
}

export default HomeImage;


const Wrapper=styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
height: 50vh;


.infodiv{
    width: 25%;

    .wel{
        color: #9b42d3;
        font-size: 1.5rem;
    }


    .para{
    margin-top: 1rem;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #676565;
    }

    h1{
        font-size: 4rem;
        margin-top: -0.5rem;
    }


    .buts{
    padding: 0.8rem 1.4rem;
    }




}


.imgdiv{
    position: relative;

    .colordiv{
        background-color:#9b55c6;
        height: 18rem;
        width: 20rem;
        position: absolute;
        left: 19rem;
        top: -3.6rem;
        z-index: -1;

    }

    img{
        width: 35rem;
        height: 22rem;
        
    }

}



@media (min-width:300px) and (max-width:600px){

width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
height: 50vh;


.infodiv{
    width: 100vw;
    margin-top: 2rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .wel{
        color: #9b42d3;
        font-size: 1.5rem;
    }


    .para{
    margin-top: 1rem;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #676565;
    max-width: 90vw;
    }

    h1{
        font-size: 4rem;
        margin-top: 0rem;
    }


    .buts{
    padding: 1rem 1.4rem;
    }




}


.imgdiv{
    position: relative;
    margin-top: 9rem;
    margin-left:-3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .colordiv{
        background-color:#9b55c6;
        height: 15rem;
        width: 16rem;
        position: absolute;
        left: 12.5rem;
        top: -3.6rem;
        z-index: -1;

    }

    img{
        width: 25rem;
        height: 16rem;
        
    }

}


}


`;