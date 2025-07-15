const initialState = {count : 0}

function Reducing (state, action) {
    switch (action.type) {
        case 'increment':
            return {count : state.count + 1}

        case 'decrement':
            return {count : state.count - 1}

        case 'custom':
            return {count : state.count + action.payload}
        default:
            return state

    }
}
    



export {initialState , Reducing}