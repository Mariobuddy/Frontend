import React,{createContext,useContext,useEffect,useReducer} from 'react';
import axios from 'axios';
import reducer from '../UseReducer/reducer1';

const Api=`https://liquor-api-production.up.railway.app/api/products/take`;
export const AppMain=createContext();

const MainContext = ({children}) => {

  let initial={
   
    MainProduct:[],
    MainError:false,
    MainLoading:false,
    FeaturedProduct:[],
    SingleProduct:{},
    SingleLoading:false

  }

  
  const [state,dispatch]=useReducer(reducer,initial);
     

  const ApiData=async(api)=>{

    dispatch({type:'MLoading'});

    try {
      
      let data=await axios.get(api);
      let data2=await data.data;

      dispatch({type:'MProduct',payload:data2});
      
    } catch (error) {

      dispatch({type:'MError'});
    }

  };




  const SingleLoading=async(api)=>{
    dispatch({type:'SingleL'});

  try {
    let data=await axios.get(api);
    let data2=await data.data;
    dispatch({type:'SingleG',payload:data2});
  } catch (error) {
    console.log(error);
  }

  }

  useEffect(()=>{
    ApiData(Api);
  },[]);


  

  return (
    <div>
      <AppMain.Provider value={{...state,SingleLoading}}>
        {children}
      </AppMain.Provider>
    </div>
  )
}

export const UseCustom=()=>{
  return useContext(AppMain);
}

export default MainContext;