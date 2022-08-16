import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../redux/actions/ProductsActions";
import Filter from "./Filter";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    // console.log(products);
    const filteredProduct = useSelector(
        (state) => state.productReducer.filteredProduct
    );
    // console.log(filteredProduct);

    useEffect(() => {
        dispatch(getApiData());
    }, []);

    // const getApiData = async () => {
    //     const api = process.env.REACT_APP_API_URL;
    //     const response = await fetch(
    //         `https://masai-api.herokuapp.com/coffee/menu`
    //     );
    //     const data = await response.json();
    //     console.log(data)

    //     //   dispatch(setProducts(data.products));
    // };

    return (
        <>
            <div className="dvFilter">
                <Filter />
            </div>

            <div className="dvProducts">
                {filteredProduct.length === 0
                    ? products.map((product) => {
                        const { id, name, image, price } = product;
                        return (
                            <div key={id}>
                                <img src={image} alt={name} className="img-fluid" />
                                <h4>{name}</h4>
                                <p>{price}</p>
                            </div>
                        );
                    })
                    : filteredProduct &&
                    filteredProduct.map((product) => {
                        // console.log(product)
                        const { id, title, image, price } = product;
                        return (
                            <div key={id}>
                                <img src={image} alt={title}  className="img-fluid" />
                                <h4>{title}</h4>
                                <p>{price}</p>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Products;