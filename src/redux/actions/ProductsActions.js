import { actionTypes } from "../types/types";

export const getApiData = () => {
    return async (dispatch, getState) => {
        const response = await fetch(
            `https://masai-api.herokuapp.com/coffee/menu`
        );
        const result = await response.json();
        // console.log(actionTypes.SET_PRODUCTS);
        dispatch({
            type: actionTypes.SET_PRODUCTS,
            payload: result.menu.data,
        });
    };
};

//send ID
export const sendID = (productID) => {
    return {
        type: actionTypes.SEND_ID,
        payload: productID,
    };
};