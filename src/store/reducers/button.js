const initialState = {
    stateButton: false
}
export default function buttonReducer(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH':
            return {
                stateButton: !state.stateButton
            }
        case 'SFSB': 
            return {
                stateButton: action.payload
            }
        
        default: 
            return state
    }
}