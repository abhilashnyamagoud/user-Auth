import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { Link,Redirect } from 'react-router-dom'
const Account=(props)=>{
  const[userData,setUserData]=useState('')  
  const[details,setDetails]=useState({})


    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem('token'))||[]
        setUserData(result)  
        console.log(result)
        axios.get('https://dct-user-auth.herokuapp.com/users/account', {
            headers: {'x-auth': result.token },
        })
        .then((res)=>{
            const value=res.data
            setDetails(value)
            console.log(value)
        })
    },[])
    const handleButton=()=>{
        axios.delete('https://dct-user-auth.herokuapp.com/users/logout', {
            headers: {'x-auth': userData.token },
        })
        .then((res)=>{
            const reps=res.data
            console.log(reps)
        })
        localStorage.clear()
    }

    return(
        <div className='container'>
            <p><Link to='/home'>Home</Link> | <Link to='/account'>Account</Link> | <Link to='/Logout' onClick={handleButton} >Logout</Link> </p>
        <div className='card'>
            <div className='card-title text-success bg-secondary'>
            <h1 className='display-4'>Account</h1>
            </div>
            <div className='card-body'>
            <h3 className='mt-3'>UserName:{details.username} </h3>
            <h3 className='mt-4'>Email: {details.email} </h3>
            </div>
        </div>
        </div>
    )

}

export default Account