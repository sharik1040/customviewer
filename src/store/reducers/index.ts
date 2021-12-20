import { DATA_LOADED, GET_ITEM, API_ERROR } from "../../constants"

export interface ISelectedItem {
    name: string,
    img: string,
    birthday: string,
    occupation?: Array<string>,
    appearance?: Array<string>
}

export interface ViewerState {
  items: Array<any>,
  selectedItem: ISelectedItem,
  isError: boolean
}

const initialState: ViewerState = {
    items: [],
    selectedItem: {name: '', img: '', birthday: ''},
    isError: false
};

function rootReducer(state = initialState, action: {type: string, id: string, payload: Array<any>}){
    if (action.type === GET_ITEM){
        return Object.assign({}, state, {
            selectedItem: state.items.find(x => x.char_id === parseInt(action.id))
        });
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            items: action.payload,
            isError: false
        });
    }
    if (action.type === API_ERROR){
        return Object.assign({}, state, {
            isError: true
        });
    }
    return state;
};

export default rootReducer;