import { NavLink } from "react-router-dom";


const Brand = ({brand}) => {
    const { brand_name,brand_image}=brand;
    return (
        <NavLink to={`/products/${brand_name}`}>
            <div className="card bg-base-100 shadow-xl mb-16" >
            <div className=" h-52">
                <img className="w-full h-full" src={brand_image} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{brand_name}</h2>

                

               
            </div>
        </div>
        </NavLink>
        
    );
};

export default Brand;