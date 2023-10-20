import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Addproduct from "../Pages/Addproduct";
import Allproducts from "../Pages/Allproducts";
import Update from "../Component/Update";
import Details from "../Component/Details";
import Mycarts from "../Pages/Mycarts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRouter";




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
                loader: () => fetch(' https://b8a10-brandshop-server-side-pi.vercel.app/products')
            },
            {
                path:'update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(` https://b8a10-brandshop-server-side-pi.vercel.app/products/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(` https://b8a10-brandshop-server-side-pi.vercel.app/products/${params.id}`)
            },
            {
                path: '/add',
                element:<PrivateRoute><Addproduct></Addproduct> </PrivateRoute>,
                
                
               
            },
            {
                path: '/carts',                
                element: <PrivateRoute><Mycarts></Mycarts></PrivateRoute>,
                loader: () => fetch(' https://b8a10-brandshop-server-side-pi.vercel.app/carts')

            },
            {
                path: '/login',
                element:<Login></Login>
            }, 
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
    }    
]);

export default router;