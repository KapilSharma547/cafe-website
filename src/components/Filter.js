import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendID } from "../redux/actions/ProductsActions";

const Filter = () => {
    const products = useSelector((state) => state.productReducer.products);
    // console.log(products);
    const dispatch = useDispatch();
    return (
        <div>
            <ul>
                {products &&
                    products.map((product) => {
                        const { id, title } = product;
                        return (
                            <li key={id} onClick={() => dispatch(sendID(id))}>
                                {title}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Filter;