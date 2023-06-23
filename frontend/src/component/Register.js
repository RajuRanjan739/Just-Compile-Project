import React,{useState} from 'react'
import{useNavigate} from 'react-router-dom'
import Nav from './Nav'


const Register = () => {
    const[username,setUsername]= useState("")
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const navigate= useNavigate()

    const collectData= async ()=>{
        console.log(username,email,password)
        let result= await fetch('http://localhost:5000/register',{
          method: 'post',
          body: JSON.stringify({username,email,password}),
          headers:{
              'content-Type':'application/json'
          }
        })
        result= await result.json()
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result))
        navigate('/')
        
    }

  return (
    <div  >
      <Nav />
        <h1>Register</h1>
        <input className='inputBox'  type='text' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)} 
        placeholder='Username' />
        <input className='inputBox' type='email'
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Email' />
        <input className='inputBox' type='password'
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='Password' />
        <button onClick={collectData} className='appButton' type='button'>SignUp</button>

    </div>
  )
}

export default Register