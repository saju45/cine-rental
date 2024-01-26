

const initialState={
    cardData:[]
}

  const cardReducer=(state,action)=>{

    switch (action.type) {
        case "addToCard":
            return{
                cardData: [...state.cardData,action.payload]
            }
            case "removeFromCard":
                return {
                    ...state,
                    cardData:state.cardData.filter((item)=>item.id!==action.payload.id)
                }
        default:
            return state;
    }
}


export { cardReducer, initialState };

