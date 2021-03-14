import React, { useState } from 'react';
import swal from 'sweetalert';


//import logo from './logo.svg';
import './App.css';
import Register from './Component/Register'
import Login from './Components/Login'
//import Axios from 'axios';
//import e from 'express';
import axios from 'axios';
import About from './Components/About';
//import { extname } from 'path';

function App() {
  /*const [val,setVal]=useState({
    name:'',
    email:''
  })*/
  //var
   const [email,setEmail]=useState({
     femail:''
   })
  const [value,setValue]=useState({
    name:'',
    id:'',
    password:''

  })
  //var
  const emailHandler=(event)=>{
    console.log(event.target.value)
    
    setEmail({
      femail:event.target.value
    })
  }
  const finish=async (e)=>{
    
    e.preventDefault();
    console.log("finish wala");
   // console.log(data);
    await axios.get('http://192.168.43.251:4000/delete',{params:{name:value.name}}).then((dat)=>{
      //console.log(dat);
      //alert("deletion sucessful")
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover your details!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your details has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your details is safe!");
        }
      });
    }).catch((err)=>{console.error(err)});
    /*fetch('http://localhost:4000/send', {
      method: 'post',
      body:data
    }).then((data)=>{
      console.log(data,"nhi mila koi response");
    }).catch((err)=>{console.error(err)});*/
  }

 /*const run= ()=>{
    setData({
      name:"",
    password:"",
    email:""
    })
  }
  
  const [data,setData]=useState({
    name:"",
    password:"",
    email:""
  })
  
  const InputEvent =(event) =>{
  
    console.log("done")
    const {name,value}=event.target;
      
      setData((preValue) =>{

      
     
     return {
         ...preValue,
         [name]:value,
     }
    });
  }
  const submit=async (e)=>{

    e.preventDefault();
    console.log("linked");
    console.log(data);
    await axios.post('http://localhost:4000/send',data).then((data)=>{
      console.log(data,"nhi mila koi response");
    }).catch((err)=>{console.error(err)});
    /*fetch('http://localhost:4000/send', {
      method: 'post',
      body:data
    }).then((data)=>{
      console.log(data,"nhi mila koi response");
    }).catch((err)=>{console.error(err)});*/
  //}
  const InputEvent=(event)=>{
    //console.log(event.target.value)
    setValue({
      name:event.target.value
    })
  }

  const show =async (e)=>{
    e.preventDefault();
   var  done= await axios.get('http://192.168.43.251:4000/show',{params:{
     name:value.name
   }}).then((res)=>{
      
    return res.data;
   
    
      
      }).catch((err)=>{console.error(err)})
      console.log(done[0].name)
      setValue({
       name:done[0].name,
        email:done[0].email,
        id:done[0].id,
        password:done[0].password,
      // name:"shreya",
      // email:"king",
      })
     // console.log(...done)
     //done.map((val,i)=>{
       // console.log(`${done[i].id} and ${done[i].name}and${done[i].email}`)
      //})

  } 
  
 const emailSubmit=(e)=>{
e.preventDefault();
axios.get('http://192.168.43.251:4000/forget',{params:{email:email.femail}}).then((res)=>{
  console.log(res)
  alert(res.data)
}).catch((err)=>{
  console.error(err)
})

 }
 /* const submit=()=>{
    
    console.log("linked");
    
    fetch(`http://localhost:4000/send`).then((res)=>{
      console.log(res.json())
      console.log("linked")
    })
  }*/
  return (<>
    <div className="App">
      <div><About/></div>
     <Register/>
     
     <form onSubmit={show}>
       <input text="text" name="search" placeholder="enter name to get details " onChange={InputEvent} required></input>
     <button >show details</button>
     </form>
   <h1>{value.id}</h1>
  <h1>{value.email}</h1>
  <h1>{value.password}</h1>
  <button onClick={finish} >delete my details</button><br></br>
  <h1>{email.femail}</h1>
  <Login/>
  <form onSubmit={emailSubmit}>
  <input type="email" placeholder="enter your email" name="femail" value={email.femail} onChange={emailHandler} ></input>
  <button type="submit">forget password</button></form>
    </div>
    </>
  );

  }

export default App;
