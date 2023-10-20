
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const product = useLoaderData();

    const { _id, Image, name, Brand_name, Type, Price, Rating, Description } = product;


    
    const addtocart =()=>{
        console.log("I buy this product" ,product);

        fetch(' https://b8a10-brandshop-server-side-pi.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added for cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'yes'
                    })
                }
            })

    }
    return (
        <div>


            <div className=" flex mx-auto bg-base-100 shadow-xl">
                <div className="w-2/5"><img className="w-full h-full" src={Image} alt="Movie" /></div>
                <div className="flex justify-between w-full p-3">
                    <div className=" text-left p-3 space-y-5 font-semibold">
                        <h2 className="card-title"> {name}</h2>
                        <p> <span className="mr-2">Brand:</span>{Brand_name}</p>
                        <p> <span className="mr-2">Type :</span>{Type}</p>
                        <p> <span className="mr-2">Price:</span>{Price}</p>
                        <p><span className="mr-2">Rating:</span> {Rating}</p>
                        <p className='text-rose-500'><span className="mr-2 text-black">Details about {name}:</span> {Description}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">


                            <Link to={`/details/${_id}`}>
                                <button className="btn bg-orange-500" onClick={addtocart}>AddtoCart</button>
                            </Link>

                            {/* onClick={()=>addtocart(product)} */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;