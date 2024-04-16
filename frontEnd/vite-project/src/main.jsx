import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom"
import MainLayout from "C:\\Users\\Burne\\vscode_projects\\ColorStack\\frontEnd\\vite-project\\src\\Layouts\\MainLayout.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path ="/" element={<MainLayout/>}/>
    </>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
