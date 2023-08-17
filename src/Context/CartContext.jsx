import React,{useReducer,createContext,useContext,useEffect} from 'react';
import reducer from '../UseReducer/CartReducer';


export const CartApp=createContext();

const CartContext = ({children}) => {

  let GetStorage=()=>{
    let newdata=localStorage.getItem('Mario');
    if(newdata===[]){
      return [];
    }else{
      return JSON.parse(newdata);
    }
  }


    let initial={
        Cart:[],
        CartCir:'',
        TotalPrice:'',
    }


    let [state,dispatch]=useReducer(reducer,initial);

    const Carting=(idchan,price,gcount,gtick,SingleProduct)=>{
      if(gtick!==undefined){
        dispatch({type:'Carted',payload:{idchan,price,gcount,gtick,SingleProduct}});
      }
    }


    let Delete=(id)=>{

      dispatch({type:'Deleteit',payload:id});

    }


    let IncreasePlus=(id)=>{
     
      dispatch({type:'Inc',payload:id});

    }


    let DecreasePlus=(id)=>{

      dispatch({type:'Drc',payload:id});

    }


    let DeleteAll=async(e)=>{
      e.preventDefault();
       
      try {
      let data=await fetch('http://localhost:8000/deletecart',{
        method:'DELETE',
        credentials:'include'
      });

      console.log(data);
      dispatch({type:'DeleteAll'});
      } catch (error) {
        console.log(error);
      }


    }
  
    useEffect(()=>{
      dispatch({type:'Total'});
      dispatch({type:'CartC'});
      localStorage.setItem('Mario',JSON.stringify(state.Cart));
    },[state.Cart]);

     

  return (
    <div>

    <CartApp.Provider value={{...state,Carting,Delete,DeleteAll,IncreasePlus,DecreasePlus}}>
        {children}
    </CartApp.Provider>


    </div>
  )
}

export const UseCart=()=>{
    return useContext(CartApp);
}

export default CartContext;