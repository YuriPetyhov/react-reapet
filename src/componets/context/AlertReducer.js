export const AlertReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'show':
            return {...action.payload, visible: true}
        case 'hide':
            return {...state, visible: false}
        case 'done':
            return {...state, ...action.payload, visible: true }
        default :
            return state
    }
}