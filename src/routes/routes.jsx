import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/main-layout";
import Home from "@/pages/main/home";
import Service from '@/pages/main/services.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'services',
                element: <Service/>,
            }
        ]
    }
])