const initialState = {count : 0}

function Reducing (state, action) {
    switch (action.type) {
        case 'custom_increment':
            return {count : state.count + state.payload}

        case 'custom_decrement':
            return {count : state.count - state.payload}

        default:
            return {state}

    }
}
    



export {initialState , Reducing}