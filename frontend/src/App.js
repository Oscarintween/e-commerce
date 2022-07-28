import './index.css'
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import SignIn from './Pages/Sign In/SignIn'
import Catalog from './Pages/Catalog/Catalog'
import Product from './Pages/Product'
import CreateAccount from './Pages/Create account/CreateAccount'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
