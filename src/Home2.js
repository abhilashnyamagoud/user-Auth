import React,{useState,useEffect} from 'react'
import { Link,Redirect } from 'react-router-dom'
import axios from 'axios';

const Home2=(props)=>{
const[toggle,setToggle]=useState(false)
const[userData,setUserData]=useState('')  
  const[details,setDetails]=useState({})


    useEffect(()=>{
        const result=JSON.parse(localStorage.getItem('token'))||[]
        setUserData(result)  
        // console.log(result)
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
        setToggle(true)
    }

    return(
        <div>
            <h1 className='display-4'>User Auth</h1>
            <p><Link to='/home'>Home</Link> | <Link to='/account'>Account</Link> | <Link to='/Logout' value={toggle} onClick={handleButton} >Logout</Link> </p>
            <p className='text-center' style={{color:'green'}}>Successfully LoggedIn</p>
                {
                    toggle && <Redirect to='/' />
                }

        </div>
    )
}

export default Home2