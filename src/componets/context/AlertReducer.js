export const AlertReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'show':
            return {text: action.payload, visible: true}
        case 'hide':
            return {...state, visible: false}
        default :
            return state
    }
}