
import './App.css'
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Singleproduct from './Pages/Singleproduct'
import Cart from './Pages/Cart'
import Error from './Pages/Error'
import Navbar from './Components/Navbar'
function App() {


  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='*' element={<Error/>}/>
      
    </Routes>
      
  
    </Router>
  )
}

export default App
