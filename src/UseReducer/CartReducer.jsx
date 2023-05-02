const reducer=(state,action)=>{

    switch(action.type){
       
        case 'Carted':
      
        const {idchan,price,gcount,gtick,SingleProduct}=action.payload;


        const ExitingProduct=state.Cart.find((val)=>{
          return val.id===idchan+gtick;
        })
           

        if(ExitingProduct){

            let NewData=state.Cart.filter((val)=>{


              if(val.id===idchan+gtick){

                let retdata=val.avail;
                val.avail+=gcount;

                return{
                  ...val,
                  avail:retdata,
                }

              }else{
                return val;
                
              }


            });

            return{
              ...state,
              Cart:NewData
            }

        }else{

          const AllData={
            image:SingleProduct.image,
            id:idchan+gtick,
            price:price,
            color:gtick,
            avail:gcount,
            name:SingleProduct.name
          }
  
            return{
                ...state,
                Cart:[...state.Cart,AllData]
            }

         
        }



        case 'Drc':

        let see1=state.Cart.filter((val)=>{


          if(val.avail<=1){
            return{
              ...val,
              avail:1
            }
          }
          
         if(val.id===action.payload){
            
          let make1= val.avail-=1;

           return{
             ...val,
             avail:make1
           }

         }else{
          return val;
         }

        });

        return{
         ...state,
         Cart:see1
         
        }




           case 'Inc':

           let see=state.Cart.filter((val)=>{
             
            if(val.id===action.payload){
               
             let make= val.avail+=1;

              return{
                ...val,
                avail:make
              }

            }else{
              return val;
            }

           });

           return{
            ...state,
            Cart:see
            
           }


            case 'Deleteit':
             let Temp=state.Cart.filter((val)=>{
              return val.id!==action.payload;
             })

              return{
                ...state,
                Cart:Temp
              }
       

              case 'DeleteAll':
                return{
                  ...state,
                  Cart:[]
                }


                case 'CartC':
              
                let update=state.Cart.reduce((init,val)=>{
                  let {avail}=val;

                  init=init+avail;
                  return init;


                },0)


                  return{
                    ...state,
                    CartCir:update
                  }

                  case 'Total':

                 let data2=state.Cart.reduce((init,val)=>{
                   
                  let {price,avail}=val;

                  init=init + (price*avail);
                  return init;

                 },0);




                 

                    return{
                      ...state,
                      TotalPrice:data2

                    }


    }


}


export default reducer;