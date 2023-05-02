import React,{useEffect,useContext,createContext,useReducer,useState} from 'react';
import { UseCustom } from './MainContext';
import productreducer from '../UseReducer/Productres';

export const Products=createContext();

const ProductsContext = ({children}) => {

    const {MainProduct,MainLoading}=UseCustom();

const [gline,sline]=useState('0');
const [gline2,sline2]=useState('0');







    let initial={
     
      AllProducts:[],
      Grids:true,
      FilLoad:MainLoading,
      SortSel:'recom',
      Filter_Products:[],
      Filters:{
        text:'',
        category:'All',
        company:'All',
        colors:'All',
        maxPrice:0,
        minPrice:0,
        Price:0,
      }

    };

    const [state,dispatch]=useReducer(productreducer,initial);
  

    const GridOne=()=>{
      return dispatch({type:'GridOne'});
    }

    const Listone=()=>{
     return dispatch({type:'ListOne'});
    }
     
    const SortSelect=(e)=>{
      let value=e.target.value;
      dispatch({type:'SortingSel',value:value});

    }

    const SearchFilter=(e)=>{
      let name=e.target.name;
      let value=e.target.value;

      if(name==='category'){
        sline(e.target.id);
      }

    
       
      if(name===undefined){
        name='company';
      }


     return dispatch({type:'Big_Filter',payload:{name,value}});

    }


    const Clear=()=>{
      sline('0');
      sline2('0');
      dispatch({type:'Clearit'});
    }


   
     useEffect(()=>{
      

      dispatch({type:'Sort_Product',payload:MainProduct});

      dispatch({type:'Filtering',payload:MainProduct});


     },[MainProduct,state.SortSel,state.Filters]);




    useEffect(()=>{
      dispatch({type:'LAllProducts',payload:MainProduct});
    },[MainProduct]);

   

  return (
    <div>
    
   <Products.Provider value={{...state,GridOne,Clear,Listone,SortSelect,SearchFilter,gline,gline2}}>
      
      {children}

   </Products.Provider>


    </div>
  )
}

export const UseProducts=()=>{
    return useContext(Products);
}

export default ProductsContext;