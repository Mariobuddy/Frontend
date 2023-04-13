const reducer=(state,action)=>{

    switch(action.type){

        case 'Mloading':
            return{
                ...state,
                MainLoading:true
            }

            case 'MError':
                return{
                    ...state,
                    MainError:true
                }

                case 'MProduct':
                    const Featuring=action.payload.filter((val)=>{
                        return val.featured===true;
                    })
                    return{
                        ...state,
                        MainProduct:action.payload,
                        MainError:false,
                        MainLoading:false,
                        FeaturedProduct:Featuring

                    }

                    case 'SingleL':
                        return{
                            ...state,
                            SingleLoading:true,
                        }

                        case 'SingleG':
                            return{
                                ...state,
                                SingleLoading:false,
                                SingleProduct:action.payload
                            }

        default:
            return{
                ...state
            }
      

    }

}


export default reducer