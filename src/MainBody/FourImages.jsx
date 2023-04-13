import React,{useState} from 'react'
import styled from 'styled-components';

const FourImages = ({images}) => {

    const [gimg,simg]=useState(0);

  return (

    <Wrapper>
     
 
    <div className='left'>
        {
            images && images.map((val,i)=>{
            
                return <img className='imgs'  onClick={()=>{
                    simg(i);
                }} alt='Error' key={val.id} src={val.url}/>

            })
        }
    </div>


    <div className='right'>
      
      <img alt='Error' className='imgs2' src={images && images[gimg].url}/>

    </div>

     


    </Wrapper>
  )
}

export default FourImages;

const Wrapper=styled.div`
display: flex;
justify-content: flex-start;
align-items: center;


.left{
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
margin-right: 1rem;


 .imgs{

    width: 16rem;
    height: 10rem;
    margin-top: 1rem;
    cursor: pointer;
 }   


}



.right{

.imgs2{

 width: 30rem;
    height: 18rem;
    margin-top: 1rem;
    cursor: pointer;

    }

}


@media (min-width:300px) and (max-width:600px){


display: flex;
justify-content: flex-start;
align-items: center;


.left{
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
margin-right: 1rem;


 .imgs{

    width: 10rem;
    height: 6rem;
    margin-top: 1rem;
    cursor: pointer;
 }   


}



.right{

.imgs2{

 width: 20rem;
    height: 13rem;
    margin-top: 1rem;
    cursor: pointer;

    }

}

}


`;