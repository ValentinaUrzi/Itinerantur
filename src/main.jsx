import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './pages/About'
import Activity from './pages/Activity'
import Home from './pages/Home'
import City from './pages/City'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.scss'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="activity/:id" element={<Activity />} />
    <Route path="city" element={<City />} />
    <Route path="about" element={<About />} />
  </Route>
  // VERSIONE CON L'OUTLET
  // <Route path="/" element={<Home />}>
  //   <Route path="activity/:id" element={<h1>Activity</h1>} />
  //   <Route path="city" element={<h2>City</h2>} />
  //   <Route path="about" element={<h2>About</h2>} />
  // </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
