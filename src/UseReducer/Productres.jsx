
const productreducer=(state,action)=>{

    switch(action.type){

        case 'LAllProducts':
            return{
                ...state,
                AllProducts:action.payload,
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

    }


}


export default productreducer;