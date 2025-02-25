import React ,{useContext, useState, useEffect} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

export default function App() {
  const [user, setUser]=useState(null)
  const [loggedInUserData, setLoggedInUserData]=useState(null)
  const [userData, setUserData]=useContext(AuthContext)
console.log(userData,"userData in app.jsx");

useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    console.log(userData,"app.jsx");
    setLoggedInUserData(userData.data)
  }
},[])

    const handleLogin=(email, password)=>{
      if(email=='admin@nm.com' && password=='123' ){
        setUser('admin');
        // console.log('admin log', user);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }
      else if(userData){
        // console.log(userData.find((e)=>email==e.email && password==e.pwd), "in userData inside else if");
        const employee= userData.find((e)=>e.email==email && e.pwd==password)
        if(employee){
          console.log('employee log', employee);
        setUser('employee')    
        setLoggedInUserData(employee)     
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }
    }
      else{
      alert("invalid credentials");
      }
    }
        
  return (
    <>
    {!user? <Login handleLogin={handleLogin} />:''}
  {/* {  console.log(loggedInUserData)} */}
    {user=='admin'? <AdminDashboard changeUser={setUser}/>: (user=='employee' ? <EmployeeDashboard  changeUser={setUser} data={loggedInUserData}/>:null) }
    </>
  )
}
