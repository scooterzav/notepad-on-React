export const popupReducer = (state={}, action) => {
    switch(action.type) {
        case 'SHOW':  return {...state, visible:true}
        case 'HIDE':  return {...state, visible:false}
        default: return state;   
    }
}
