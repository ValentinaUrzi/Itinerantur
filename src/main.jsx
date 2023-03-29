import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './layouts/mainLayout'
import Home from './pages/Home'
import Activities from './pages/activities'
import Activity from "./pages/activities/id";
import About from './pages/About'
// import City from './pages/City'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.scss'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="activities" element={<Activities />} />
    <Route path="activities/:id" element={<Activity />} />
    <Route path="about" element={<About />} />
    {/* <Route path="cities" element={<City />} /> */}
    {/* <Route path="city/:id" element={<City />} /> */}
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
