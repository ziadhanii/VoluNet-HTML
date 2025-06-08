import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import OurTeam from './components/OurTeam/OurTeam';
import Header from './components/Header/Header';


function App() {

  let routers= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:'/', element:<Home/> , children:[
        {path:'/header', element:<Header/>},
        {path:'/about', element:<About/>},
        {path:'/team', element:<OurTeam/>}
      ]},
      
      
    ]}
  ])
  return <>
  <RouterProvider router={routers}/>
  </>
}

export default App
