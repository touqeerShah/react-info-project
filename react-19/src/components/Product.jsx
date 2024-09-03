import { memo, useEffect, useState } from 'react';
import products from "../data"
// console.log(products,"productsproducts")

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const SlowProduct = memo(function SlowProduct({ product }) {
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
        sleep(1).then(() => setDelayed(true));
    }, []);

    if (!delayed) {
        return <li>Loading...</li>;
    }

    return <li>Product {product.name}</li>;
});

const Products = memo(function () {
    let productsList = products.map((product, i) => (
        <SlowProduct key={product.id} product={product} />
    ));

    return (
        <>
            <h1>Products page</h1>
            <ul>{productsList}</ul>
        </>
    );
});

export default Products;
