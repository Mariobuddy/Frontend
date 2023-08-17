import React,{useEffect,useReducer,useContext,createContext} from 'react'
import styled from 'styled-components';
import Header from './Header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './Nav/Home';
import About from './Nav/About';
import Contact from './Nav/Contact';
import Products from './Nav/Products';
import Logout from './Nav/Logout';
import Cart from './Nav/Cart';
import Footer from './Footer/Footer';
import Single from './Nav/Single';
import Error from './Nav/Error';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Login from './Nav/Login';
import Register from './Nav/Register';


export const Trans=createContext();

const App = () => {

  let Routing=()=>{
    return(
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registering' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/single/:id' element={<Single/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    )
  }
  const theme={};


  let tranreducer=(state,action)=>{
    switch(action.type){
      
      case 'User':
        return action.payload;

        case 'NotUser':
          return action.payload;

    }
  }


  let initial=null;


  let [state,dispatch]=useReducer(tranreducer,initial);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

   <ThemeProvider theme={theme}>
        <Wrapper>


      <Trans.Provider value={{state,dispatch}}>
      <GlobalStyle/>
      <Header/>
      <Routing/>
      </Trans.Provider>
      <Footer/>
  
    </Wrapper>
   </ThemeProvider>

  );
}

export let useTran=()=>{
  return useContext(Trans);
}

export default App;


const Wrapper=styled.div`
width: 100vw;
height: fit-content;

@media (min-width:300px) and (max-width:600px){
  width: 100vw;
  height: fit-content;
  max-width: 100vw;
  

}


`;
