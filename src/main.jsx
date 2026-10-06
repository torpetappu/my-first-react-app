import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ShoppingCart } from './components/ShoppingCart.jsx';
import { RegistrationForm } from './components/RegistrationForm.jsx';
import UserSearch from './components/UserSearch.jsx';
import FocusNote from './components/FocusNote.jsx';
// import Greeting from './Greeting.jsx'
// import Button from './button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusNote/>
    <UserSearch/>
    <RegistrationForm/>
    <ShoppingCart/>
    <App />
    {/* <Greeting/>
    <Button/> Just added first button   */}
  </StrictMode>,
)
