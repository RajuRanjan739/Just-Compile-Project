import React from 'react'
import{useNavigate} from 'react-router-dom'
import Nav from './Nav'

const HomePage = () => {
    const navigate= useNavigate()
  return (
    <div>
      <Nav />
        <h1>Welcome</h1>
      <button className='button' onClick={(e) => navigate('/register')} >Register</button>
      <button className='button' onClick={(e) => navigate('/login')} >Login</button>

    </div>
  )
}

export default HomePage