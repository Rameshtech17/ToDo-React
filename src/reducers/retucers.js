let intialState = {
    Text: []
}

const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_TEXT':
            const list = [...action.text];
            list.sort((a, b) => (a.id > b.id) ? 1 : -1);
            return {
                ...state,
                Text: list
            }
        case 'POST_TEXT':
            const data = state.Text.concat(action.text)
            const list1 = [...data];
            list1.sort((a, b) => (a.id > b.id) ? 1 : -1);
            return {
                ...state,
                Text: list1
            }
        case 'EDIT_TEXT':
            const id = state.Text.findIndex(result => result.id === action.text.id);
            const newArray = [...state.Text];
            newArray[id].text = action.text.text;

            return {
                ...state,
                Text: newArray
            }

        case 'DELETE_TEXT':
            console.log("[In delete State]:", action)
            const updatedArray = state.Text.filter(result => result.id !== action.text);
            return {
                ...state,
                Text: updatedArray
            }
        case 'CHEDKED_TEXT':
            const newid = state.Text.findIndex(result => result.id === action.text.id);
            const newArraychecked = [...state.Text];
            newArraychecked[newid].status = true;
            return {
                ...state,
                Text: newArraychecked
            }

        default:
            return state;
    }
}

export default mainReducer;

