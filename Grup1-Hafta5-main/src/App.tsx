import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TodoApp from './pages/TodoApp'
import  PasswordChange from './pages/PasswordChange';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')

  const handleLogin = (token: string) => {
    setToken(token)
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setToken('')
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage onSuccess={handleLogin} />} />
            <Route
              path="/login"
              element={<LoginPage onSuccess={handleLogin} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp onLogout={handleLogout} />} />
            <Route path="/password-change" element={<PasswordChange token={token} />}  />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
