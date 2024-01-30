import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomeContextProvider from './context/HomeContextProvider.jsx'

import {AboutUs, Calls, Committe, ContactUs, Home, ImportantDate, Submmision,} from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='calls' element={<Calls/>}/>
      <Route path='importantDate' element={<ImportantDate/>}/>
      <Route path='committe' element={<Committe/>}/>
      <Route path='submission' element={<Submmision/>}/>
      <Route path='contact' element={<ContactUs/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <HomeContextProvider>
    <RouterProvider   router={router} />
  </HomeContextProvider>,
)
