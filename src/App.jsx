import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import ContentAbout from './pages/about'
import Login from './pages/auth/Login'
import CreateAccount from './pages/auth/CreateAccount'
import ForgotPassword from './pages/auth/ForgotPassword'
import Messages_temp from './pages/messages/Messages_temp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<ContentAbout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='messages' element={<Messages_temp />}/>
    </Routes>
  )
}
export default App
