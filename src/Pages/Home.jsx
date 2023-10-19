import sell from '../assets/sell.png'
import psrts from '../assets/parts.png'
import service from '../assets/servicing.png'
import unko from '../assets/Screenshot_1.png'
import { useLoaderData } from 'react-router-dom';
import Brand from './Brand';

const Home = () => {
    const Brands = useLoaderData();
    console.log(Brands);
    return (
        <div>
            {/* banner section */}
            <div className="bg-emerald-500 h-96">

                <h2 className='text-6xl text-slate-900 font-bold text-center pt-20 '>Welcome to your dream <br /> Cars-World</h2>

            </div>
            {/* main card section */}

            <div className="p-5">
                <h2 className="text-2xl text-center text-slate-900 font-bold">Our Brands</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" >
                {
                    Brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>

            {/* Our Features section */}

            <div>
                <h2 className='text-center text-3xl mt-8 font-semibold'>Our Features</h2>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 shadow-lg my-10 text-center'>
                    <div className='bg-slate-400 '>
                        <h2 className='text-2xl text-slate-500 font-extrabold'>Product Range:</h2>
                        <p> Our companies typically offer a wide range of vehicles, including cars, trucks, SUVs, and sometimes even motorcycles.
                            They may also produce electric and hybrid vehicles alongside traditional gasoline or diesel-powered ones.</p>
                    </div>
                    <div className='bg-red-300'>
                        <h2 className='text-2xl  text-slate-500 font-extrabold'>Manufacturing Facilities:</h2>
                        <p> Our companies often have extensive manufacturing facilities to produce vehicles at scale.
                            These facilities include assembly lines, paint shops, and quality control processes.</p>
                    </div>
                    <div className='bg-amber-300'>
                        <h2 className='text-2xl  text-slate-500 font-extrabold'>Research and Development (R&D):</h2>
                        <p> Our companies invest heavily in research and development to innovate and improve their products..</p>
                    </div>
                    <div className='bg-green-300'>
                        <h2 className='text-2xl  text-slate-500 font-extrabold'>Dealership and Distribution Network: </h2>
                        <p> Our  companies work with a network of dealerships and distributors to sell their vehicles to consumers..</p>
                    </div>
                    <div className='bg-gray-300'>
                        <h2 className='text-2xl  text-slate-500 font-extrabold'>Sustainability Initiatives:</h2>
                        <p> Our companies typically offer a wide range of vehicles, including cars, trucks, SUVs, and sometimes even motorcycles.
                            They may also produce electric and hybrid vehicles alongside traditional gasoline or diesel-powered ones.</p>
                    </div>
                    <div className='bg-green-300'>
                        <h2 className='text-2xl  text-slate-500 font-extrabold'>Branding and Marketing:</h2>
                        <p>  Effective branding and marketing are crucial for automotive companies to promote their products and connect with customers.</p>
                    </div>


                </div>
            </div>

            {/* best section */}
            <div className='p-10'>
                <h2 className=' text-center text-4xl font-semibold mt-10 mb-8'>Our Services</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-center '>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-72 h-72' src={sell} alt="Movie" /></figure>
                        <div className="card-body bg-slate-300">
                            <h2 className="card-title text-2xl text-amber-950">Chose your best cars</h2>
                            <p>If you need a car you are in wright place</p>
                            
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-72 h-72' src={service} alt="Movie" /></figure>
                        <div className="card-body bg-slate-300">
                            <h2 className="card-title text-2xl text-amber-950">Chose your best servicing packages</h2>
                            <p>If you need  car servicing you are in wright place</p>
                            
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-72 h-72' src={psrts} alt="Movie" /></figure>
                        <div className="card-body bg-slate-300">
                            <h2 className="card-title">Chose your best cars parts</h2>
                            <p>If you need  car parts you are in wright place</p>
                            
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-72 h-72' src={unko} alt="Movie" /></figure>
                        <div className="card-body bg-slate-300 text-s ">
                            <h2 className="card-title text-2xl text-amber-950 ">Chose your sutable cars for Rent</h2>
                            <p>If you need a car for rent you are in wright place</p>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;