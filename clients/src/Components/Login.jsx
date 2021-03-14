import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Login = ()=>{
    const [data,setData]=useState({
        email:'',
        password:''

    })
    const InputEvent=(event)=>{
        const {name,value}=event.target;
          
        setData((preValue) =>{
  
        
       
       return {
           ...preValue,
           [name]:value,
       }
      });

    }
    const FormEvent=async (e)=>{
    
        e.preventDefault();
        console.log("linked");
        console.log(data);
        await axios.post('http://192.168.43.251:4000/signin',data).then((data)=>{
          //console.log(data.data);
          alert(data.data)
        }).catch((err)=>{console.error(err)});
        /*fetch('http://localhost:4000/send', {
          method: 'post',
          body:data
        }).then((data)=>{
          console.log(data,"nhi mila koi response");
        }).catch((err)=>{console.error(err)});*/
      }
    
    return (<>
    {data.name} {data.email}
    <form onSubmit={FormEvent} >
    <input type="text" name="email" placeholder="enter your email" onChange={InputEvent}></input><br>
    </br>
    <input type="password" name ="password" placeholder="enter your password" onChange={InputEvent}></input><br></br>
    <button type="submit">login</button>
    </form>
    </>)

}
export default Login;