


import Swal from 'sweetalert2';

const Cartproduct = ({product,products,setproduct}) => {



    const {  _id,Image, name, Brand_name, Type, Price, Rating } = product || {};

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(` https://b8a10-brandshop-server-side-pi.vercel.app/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                             const remaining = products.filter(produc => produc._id !== _id);
                             setproduct(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className=" flex mx-auto bg-base-100 shadow-xl">
            <div className="w-2/5"><img className="w-full h-full" src={Image} alt="Movie" /></div>
            <div className="flex justify-between w-full p-3">
                <div className=" text-left p-3">
                    <h2 className="card-title"> {name}</h2>
                    <p> <span className="mr-2">Brand:</span>{Brand_name}</p>
                    <p> <span className="mr-2">Type :</span>{Type}</p>
                    <p> <span className="mr-2">Price:</span>{Price}</p>
                    <p><span className="mr-2">Rating:</span> {Rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">

                        {/* <Link to={`/delet/${_id}`}> */}
                            <button className="btn btn-secondary" onClick={() => handleDelete(_id)}>Delete</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartproduct;


