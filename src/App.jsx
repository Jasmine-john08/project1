import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Nav from './Nav/Nav'
import Motor from './motor/Motor'
import Power from "./Power tools/Power"
import Fan from './fan/Fan'
import Login from './login/Login'
import Home from './home/Home'
import Service from './Service/Service'
import Spares from './spares/Spares'
import Status from './status/Status'
import SpareEdit from './Spare-edit/SpareEdit'


let myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,   
    children: [
      { index: true, element: <Home/>,},
      { path: "service", element: <Service/>,children:[{path:"fan",element:<Fan/>},{path:"motor",element:<Motor/>},{path:"power-tools",element:<Power/>}] },
      { path: "spares", element: <Spares/> },
      { path: "about", element: <Motor /> },
      { path: "status/", element: <Status/> },
      {path: "/spareEdit",element:<SpareEdit/>}
    ]
  },
  { path: "/login", element: <Login /> }
]);


const App = () => {
  return (
    <RouterProvider router={myrouter}>

    </RouterProvider>
  )
}

export default App
