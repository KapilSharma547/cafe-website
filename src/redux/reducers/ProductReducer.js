import { actionTypes } from "../types/types";

const productiState = {
    products: [],
    filteredProduct: [],
};

export const productReducer = (state = productiState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload, // updated state - array
            };
        case actionTypes.SEND_ID:
            let productID = action.payload;
            // console.log(state);
            let x = state.products.filter((item) => item.id === productID);
            //console.log(x)
            return {
                ...state,
                filteredProduct: x, // [{...}] // update
            };
        // case "Kapil":
        //     return {
        //         products:"Kapil Sharma"
        //     }
        default:
            return state;
    }
};