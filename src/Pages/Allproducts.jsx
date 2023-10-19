
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Distinctproducts from './Distinctproducts';
import s1 from '../assets/sell.png'
import s2 from '../assets/servicing.png'
import s3 from '../assets/parts.png'

const Allproducts = () => {
    const [products, setproducts] = useState([])
    const { brand_name } = useParams();
   

    const allproducts = useLoaderData()
    console.log(allproducts);


    useEffect(() => {
        const selectedproduct = allproducts?.filter(product => product.Brand_name == brand_name)
        console.log("selected product", selectedproduct);
        setproducts(selectedproduct)

    }, [])

    console.log(products);

    return (
        <div>
             <div className="carousel w-full" >
                <div id="slide1" className="carousel-item relative w-full h-96">
                    <img src={s1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">
                    <img src={s2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96">
                    <img src={s3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
            
            {/* <h2>Name:{products.Brand_name}</h2> */}
            {

                products.map(product => <Distinctproducts product={product} key={product._id}></Distinctproducts>)
            }


        </div>
        </div>
    );
};

export default Allproducts;