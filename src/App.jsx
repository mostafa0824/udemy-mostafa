import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import CourseDetail from './Pages/CourseDetail'
import Dashboard from './Pages/Dashboard'
import Found from './Pages/Found'
import Cart from './Pages/Cart'
import Categories from './Pages/Categories'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import { AuthContext } from './Context/AuthContext'
import Footer from './Components/Footer'
import NotFound from './Pages/NotFound'
import { Toaster } from 'react-hot-toast'
import Checkout from './Pages/Checkout'

export default function App() {
  const {token}=useContext(AuthContext)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/courseDetail/:id/:name' element={<CourseDetail/>}/>
        <Route path="/category" element={<Categories />} />
        <Route path={!token?'/login':'/checkout'} element={token?<Checkout/>:<Login/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/found' element={<Found />}/>
        <Route path='/cart/:id' element={<Cart/>}/>
        <Route path='/login' element={token?<Navigate to={'/'}/>:<Login />}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  )
}