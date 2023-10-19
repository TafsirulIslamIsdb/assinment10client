import { Link } from "react-router-dom";


const Distinctproducts = ({product} ) => {
    
   
    const {  _id,Image, name, Brand_name, Type, Price, Rating } = product || {};
   
   
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
                        
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-secondary">Update</button>
                        </Link>
                        <Link to={`/details/${_id}`}><button  className="btn bg-orange-500">Details</button></Link>

                            {/* onClick={()=>addtocart(product)} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Distinctproducts;