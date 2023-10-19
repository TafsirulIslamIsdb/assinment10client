import { useLoaderData } from "react-router-dom";


import { useState } from "react";
import Cartproduct from "./Cartproduct";


const Mycarts = () => {
    const cartproducts = useLoaderData();
    // const [products, setproduct] = useState(cartproducts);



    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>


                {

                    cartproducts.map(product => <Cartproduct key={product._id} product={product}></Cartproduct>)
                }


            </div>
        </div>
    );
};

export default Mycarts;