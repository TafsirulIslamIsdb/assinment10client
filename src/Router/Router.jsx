import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Addproduct from "../Pages/Addproduct";
import Allproducts from "../Pages/Allproducts";
import Update from "../Component/Update";
import Details from "../Component/Details";




const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>, 
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>, 
                loader: () => fetch('/data.json')
                
            }, 
            {
                path:'/products/:brand_name',
                element:<Allproducts></Allproducts>,
                loader: () => fetch('http://localhost:5001/products')
            },
            {
                path:'update/:id',
                element:<Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            },
            {
                path: '/add',
                element:<Addproduct></Addproduct> ,
                
               
            },
            {
                path: '/carts',                
                element: <></>,
            },
            {
                path: '/login',
                element:<></>
            }, 
            {
                path: '/register',
                element:<></>
            }
        ]
    }    
]);

export default router;