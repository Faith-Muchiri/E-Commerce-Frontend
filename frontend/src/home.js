import React, { useEffect, useState } from "react";
import Header from "./header";
import Product from "./product";
import axios from "axios";
import { useStateValue } from "./stateProvider";


const Home = () => {
    const { user } = useStateValue();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className=" min-h-screen  bg-white">
            <Header />

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
                {/* map products with product cards */}
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        image={product.image_url}
                        price={product.price}
                        reviews={product.reviews}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
