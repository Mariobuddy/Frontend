import styled from 'styled-components'
import HomeImage from '../MainBody/HomeImage'
import OurFeaturedProducts from '../MainBody/OurFeaturedProducts'
import Services from '../MainBody/Services';
import Sponser from '../MainBody/Sponser';
import { useEffect } from 'react';

const Home = () => {
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <HomeImage/>
      <OurFeaturedProducts/>
      <Services/>
      <Sponser/>

    </Wrapper>
  )
}

export default Home


const Wrapper=styled.div`
height: fit-content;
width:100vw;

`;