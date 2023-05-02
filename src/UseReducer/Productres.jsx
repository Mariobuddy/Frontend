
const productreducer=(state,action)=>{

    switch(action.type){
      
    



        case 'LAllProducts':

        let take=[...action.payload];

        let AllFun=take.map((val)=>{
            return val.price;
        });

        let maxPrice=Math.max(...AllFun);
        let minPrice=Math.min(...AllFun);

        

            return{
                ...state,
                AllProducts:[...action.payload],
                Filter_Products:[...action.payload],
                Filters:{
                    ...state.Filters,
                    maxPrice,
                    minPrice,
                    Price:maxPrice
                }

            }


            case 'ListOne':
                return{
                    ...state,
                    Grids:false,
                }


                case 'GridOne':
                    return{
                        ...state,
                        Grids:true
                    }


                    case 'SortingSel':
                        let sortvalue=action.value;
                        return{
                            ...state,
                            SortSel:sortvalue,
                        }



                        case 'Big_Filter':

                        const {name,value}=action.payload;
                          
                           
                            return{
                                ...state,
                                Filters:{
                                    ...state.Filters,
                                    [name]:value
                                }
                            }



                        case 'Sort_Product':

                



                            
                            let newData=[...action.payload];
                            let tempProducts=[...action.payload];
                            
                            if(state.SortSel==='atoz'){
                             newData=tempProducts.sort((a,b)=>{
                                return a.name.localeCompare(b.name);
                             })

                            }

                            if(state.SortSel==='ztoa'){
                                newData=tempProducts.sort((a,b)=>{
                                    return b.name.localeCompare(a.name);
                                 })
                    
                            }

                            if(state.SortSel==='recom'){
                                newData=tempProducts;
                    
                            }

                            if(state.SortSel==='lowest'){
                             
                                newData=tempProducts.sort((a,b)=>{
                                    return a.price-b.price;
                                });

                            }

                            if(state.SortSel==='highest'){
                             
                                newData=tempProducts.sort((a,b)=>{
                                    return b.price-a.price;
                                });

                            }


                            return{
                                ...state,
                                Filter_Products:newData,
                            }






                                case "Filtering":


                                      
                                     
                                     const {Filter_Products}=state;

                                    let Temp=[...Filter_Products];

                                    const {text,category,company,colors,Price}=state.Filters;


                                   if(text){
                                    Temp=Temp.filter((data)=>{


                                      if(data.name.includes(text)){
                                        return true;
                                      }


                                      
                                      if(data.name.toUpperCase().includes(text)){
                                        return true;
                                      }


                                        return data.name.toLowerCase().includes(text);
                                    });
                                   }

                                   if(category!=='All'){
                                      
                                    Temp=Temp.filter((val)=>{
                                        return val.category===category;
                                    })

                                   }

                                   if(company!=='All'){
                                    Temp=Temp.filter((val)=>{
                                        // take1.removeAttribute('selected');
                                        return val.company===company;
                                    });
                                   }

                                   if(colors!=='All'){
                                    Temp=Temp.filter((val)=>{
                                        return val.colors.includes(colors);

                                    })
                                   }

                                   if(Price){
                                     
                                    Temp=Temp.filter((val)=>{
                                        return val.price<=Price;
                                    })


                                   }





                            
                                    return{
                                        ...state,
                                        Filter_Products:Temp                                 
                                    }


                                    case 'Clearit':
                                        return{
                                            ...state,
                                            SortSel:'recom',
                                            Filters:{
                                                ...state.Filters,
                                                text:'',
                                                category:'All',
                                                company:'All',
                                                colors:'All',
                                                maxPrice:state.Filters.maxPrice,
                                                minPrice:0,
                                                Price:state.Filters.maxPrice,
                                            }
                                        }




    }


}


export default productreducer;