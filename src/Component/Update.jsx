
import { useLoaderData } from 'react-router-dom';
 import Swal from 'sweetalert2';

const Update = () => {
    const product = useLoaderData();
   
    const { _id,Image, name, Brand_name, Type, Price, Rating } = product;
   
    console.log("tafsirul, " ,name);

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;


        const name = form.name.value;
        const Brand_name = form.Brand_name.value;
        const Type = form.Type.value;
        const Price = form.Price.value;

        const Rating = form.Rating.value;
        const Image = form.Image.value;

        const updatedProduct = { Image, name, Brand_name, Type, Price, Rating }

        console.log(updatedProduct);

       
        fetch(` https://b8a10-brandshop-server-side-pi.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <div className="bg-slate-400 text-orange-300 p-24 ">
                <h2 className="text-3xl font-extrabold">Add a Product</h2>
                <form onSubmit={handleUpdateProduct}>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Brand_name" defaultValue={Brand_name} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Type" defaultValue={Type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Image" defaultValue={Image} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Rating" defaultValue={Rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input type="submit" value="Update Product" className="btn btn-block" />

                </form>
            </div>

            
        </div>
    );
};

export default Update;