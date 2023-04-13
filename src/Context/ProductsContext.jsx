import React,{useEffect,useContext,createContext,useReducer} from 'react';
import { UseCustom } from './MainContext';
import productreducer from '../UseReducer/Productres';

export const Products=createContext();

const ProductsContext = ({children}) => {

    const {MainProduct}=UseCustom();


    let initial={
     
      AllProducts:[],
      Grids:true,

    };
    const GridOne=()=>{
      return dispatch({type:'GridOne'});
    }

    const Listone=()=>{
     return dispatch({type:'ListOne'});
    }


    const [state,dispatch]=useReducer(productreducer,initial);
     


    useEffect(()=>{
      dispatch({type:'LAllProducts',payload:MainProduct});
    },[MainProduct]);

    console.log(state)



  return (
    <div>
    
   <Products.Provider value={{...state,GridOne,Listone}}>
      
      {children}

   </Products.Provider>


    </div>
  )
}

export const UseProducts=()=>{
    return useContext(Products);
}

export default ProductsContext;