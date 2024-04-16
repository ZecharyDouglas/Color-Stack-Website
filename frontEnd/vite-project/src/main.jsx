import React from 'react'
import ReactDOM from 'react-dom/client'
import LeetCodeLayout from "/src/Layouts/LeetCodeLayout.jsx"
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom"
import MainLayout from "/src/Layouts/MainLayout.jsx"
import NavBarLayout from "/src/Layouts/NavBarLayout.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path ="/" element={<NavBarLayout/>}> 
    <Route index element={<MainLayout/>}/>
    <Route path ="/DSA" element = {<LeetCodeLayout/>}/>
    </Route>
    
  
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
