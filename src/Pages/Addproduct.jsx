import Swal from 'sweetalert2'

const Addproduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const Brand_name = form.Brand_name.value;
        const Type =form.Type.value;
        const Price =form.Price.value;
        const Description =form.Description.value;
        const Rating =form.Rating.value;
        const Image =form.Image.value;
       
        
      

        const newProduct = {Image , name, Brand_name, Type, Price, Description, Rating }

        console.log(newProduct);

        
        fetch(' https://b8a10-brandshop-server-side-pi.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'yes'
                    })
                }
            })
    }

    return (
        <div className="bg-slate-400 text-orange-300 p-24 ">
            <h2 className="text-3xl font-extrabold">Add a Product</h2>
            <form  onSubmit={handleAddProduct}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Brand_name" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Description" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
        </div>
    );
};

export default Addproduct;