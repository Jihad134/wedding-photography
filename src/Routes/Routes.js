import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Blog from "../Blog/Blog";
import HomeServiceAll from "../HomeServiec/HomeserviceAll/HomeServiceAll";
import ServiceDetails from "../HomeServiec/ServiceDetails/ServiceDetails";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import ChekOutPAge from "../Pages/ChekOutPage/ChekOutPAge";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Order from "../Pages/Order/Order";
import OrderRow from "../Pages/OrderROw/OrderRow";
import PrivateRoute from "../Pages/PrivateRouter/PrivateRoute";
import Update from "../Pages/Update/Update";
import RevieCompo from "../review/RevieCompo";
import Review from "../review/Review";

export const router=createBrowserRouter([
    {
        path:"/",element:<Main></Main>,errorElement:<ErrorPage></ErrorPage>,children:[
            {
                path:"/",element:<Home></Home>
            },
            {
                path:"/register",element:<Register></Register>
            },
            {
                path:"/login",element:<Login></Login>
            },
            {
                path:"/serviceall",element:<HomeServiceAll></HomeServiceAll>
            },
            {
                path:"/serviceD/:id",element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://assignmet-11-photography.vercel.app/serviceAll/${params.id}`)
            },
            {
                path:"/checkout/:id",element:<ChekOutPAge></ChekOutPAge>,
                loader:({params})=>fetch(`https://assignmet-11-photography.vercel.app/serviceAll/${params.id}`)
            },
            {
                path:"/order",element:<Order></Order>
            },
            {
                path:'/orderrow',element:<OrderRow></OrderRow>
            },
            {
                path:"/addservice",element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:"/blog",element:<Blog></Blog>
            },
            {
                path:'/review',element:<RevieCompo></RevieCompo>
            },
            {
                path:"/revies",element:<PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path:"/update/:id",element:<Update></Update>,
                loader:({params})=>fetch(`https://assignmet-11-photography.vercel.app/reviews/${params.id}`)
            }
        ]
    }
])