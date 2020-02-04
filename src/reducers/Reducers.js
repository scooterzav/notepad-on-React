export const popupReducer = (state={}, action) => {
    switch(action.handler) {
        case 'SHOW':  return {
            ...state, 
            visible:true, 
            title:action.title,
            type:action.type, 
            data:action.data
        }
        case 'HIDE':  return {...state, visible:false}
        default: return state;   
    }

}
