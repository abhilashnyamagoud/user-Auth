import React from 'react'
import {
BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Home2 from './Home2'
import Account from './Account'

const App=(props)=>{

  return(
    <div className='container mt-5 '>
      <h1>User Auth</h1>
      <p><Link to='/'>Home</Link> | <Link to='/register'>Register</Link>  | <Link to='/login'>Login</Link></p>
      {/* <p><Link to='/home2' >Home2</Link> </p> */}
      {/* <p><Link to='/account'>Account</Link> </p> */}
      
      <Route path='/' component={Home} exact={true} />
      <Route path='/register' exact={true} component={Register} />
      <Route path='/login' exact={true} component={Login}/>
      <Route path='/account' exact={true} component={Account} />
      <Route path='/home2' exact={true} component={Home2} />
    </div>
  )
}


export default App