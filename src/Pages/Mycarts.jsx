import { useLoaderData } from "react-router-dom";


// import { useState } from "react";
import Cartproduct from "./Cartproduct";
import { useState } from "react";


const Mycarts = () => {
    const cartproducts = useLoaderData();
    const [products, setproduct] = useState(cartproducts);



    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>


                {

                    products.map(product => <Cartproduct
                        key={product._id}
                        product={product}
                        products={products}
                        setproduct={setproduct}

                    ></Cartproduct>)
                }


            </div>
        </div>
    );
};

export default Mycarts;